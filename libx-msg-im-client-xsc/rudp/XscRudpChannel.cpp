/*
  Copyright 2019 www.dev5.cn, Inc. dev5@qq.com
 
  This file is part of X-MSG-IM.
 
  X-MSG-IM is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  X-MSG-IM is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
 
  You should have received a copy of the GNU Affero General Public License
  along with X-MSG-IM.  If not, see <https://www.gnu.org/licenses/>.
 */

#include "XscRudpChannel.h"

XscRudpChannel::XscRudpChannel(int mtu) :
		XscChannel(mtu)
{
	this->kcp = NULL;
}

shared_ptr<XscRudpChannel> XscRudpChannel::open(const char* host, int port, function<bool(int tryCount)> evnTry, function<void()> evnEstab, function<bool(shared_ptr<XscProtoPdu> pdu)> evnMsg, function<bool()> evnClose)
{
	shared_ptr<XscRudpChannel> xc(new XscRudpChannel(XSC_RUDP_MTU));
	SPRINTF_STRING(&xc->addr, "%s:%d", host, port)
	xc->status = XSC_CHANNEL_STATUS_TRY;
	xc->__evnTry__ = evnTry;
	xc->__evnEstab__ = evnEstab;
	xc->__evnClose__ = evnClose;
	xc->__evnMsg__ = evnMsg;
	xc->createKcp();
	if (!xc->threadStarted.exchange(true)) 
	{
		thread t([xc]()
		{
			xc->svc();
		});
		t.detach();
	}
	return xc;
}

thread_local int ___sock___ = 0;
void XscRudpChannel::svc()
{
	LOG_INFO("xsc rudp channel thread start successful, host: %s", this->addr.c_str())
	int tryTimes = 0;
	while (this->exec)
	{
		ullong sts = DateMisc::now();
		int sock = this->connect();
		if (sock < 1)
		{
			this->exec = this->evnTry(++tryTimes);
			if (this->exec)
			{
				LOG_ERROR("can not connect to remote host: %s, elap: %dms, we will try it again in 2 seconds", this->addr.c_str(), DateMisc::elap(sts))
				Misc::sleep(2000L);
				continue;
			}
			LOG_ERROR("can not connect to remote host: %s, elap: %dms, we will exit xsc tcp channel thread", this->addr.c_str(), DateMisc::elap(sts))
			continue;
		}
		tryTimes = 0;
		___sock___ = sock;
		this->sock = sock;
		this->status = XSC_CHANNEL_STATUS_ESTABLISHED;
		this->evnEstab();
		LOG_INFO("got a connection from %s, elap: %dms", this->addr.c_str(), DateMisc::elap(sts));
		while (this->exec && this->loop())
			;
		this->dlen = 0;
		this->close();
	}
	this->threadStarted.store(false);
	LOG_INFO("xsc rudp channel thread exited, host: %s", this->addr.c_str())
}

bool XscRudpChannel::loop()
{
	struct timeval val = { 0, 1000 * 10 }; 
	fd_set rset;
	FD_ZERO(&rset);
	FD_SET(this->sock, &rset);
	if (::select(this->sock + 1, &rset, NULL, NULL, &val) == 0) 
	{
		this->evnDida(DateMisc::now());
		return true;
	}
	if (FD_ISSET(this->sock, &rset))
		return this->evnRecv();
	LOG_INFO("xsc rudp channel exception, host: %s", this->addr.c_str())
	return false;
}

bool XscRudpChannel::evnRecv()
{
	uchar buf[0x10000];
	struct sockaddr_in from;
	int len = Net::udpRecv(this->sock, buf, 0x10000, &from);
	if (len < 1)
	{
		LOG_ERROR("udp recv failed, len: %d, host: %s", len, this->addr.c_str())
		return false;
	}
	ikcp_input(this->kcp, (char*) buf, len);
	while (true)
	{
		len = ikcp_recv(this->kcp, (char*) this->rbuf + this->dlen, this->getMtu() - this->dlen);
		if (len == -1) 
			break;
		if (len < -1)
		{
			LOG_ERROR("rudp channel recv failed, len: %d, host: %s", len, this->addr.c_str())
			return false;
		}
		this->dlen += len;
		len = this->evnRecvBytes(this->rbuf, this->dlen);
		if (len == 0) 
			continue;
		if (len < 0) 
			return false;
		int remain = this->dlen - len;
		if (remain == 0) 
		{
			this->dlen = 0;
			continue;
		}
		if (remain < 0) 
		{
			LOG_FAULT("it`s a bug, len: %d, dlen: %d, host: %s", len, this->dlen, this->addr.c_str())
			return false;
		}
		for (int i = 0; i < remain; ++i)
			this->rbuf[i] = this->rbuf[len + i];
		this->dlen = remain;
	}
	return true;
}

int XscRudpChannel::evnRecvBytes(uchar* dat, int len)
{
	this->lastHbTs = DateMisc::now(); 
	int used = 0;
	while (true)
	{
		bool exp = false; 
		shared_ptr<XscProtoPdu> pdu = XscProtoPdu::decode(dat + used, len - used, &exp);
		if (pdu != nullptr)
		{
			used += pdu->transm.len;
			if (!this->evnMsg(pdu))
				return -1;
			if (used == len) 
				return used;
			if (used < len) 
				continue;
			LOG_FAULT("it`s a bug, used: %d, len: %d", used, len)
			return -1;
		}
		if (exp)
		{
			LOG_DEBUG("xsc-pdu format error, host: %s, dat: %s", this->addr.c_str(), Net::printHex2str(dat + used, len - used).c_str())
			return -1;
		}
		return used; 
	}
}

int XscRudpChannel::connect()
{
	int sock = -1;
	for (int i = 0; i < 0x10; ++i) 
	{
		sock = Net::udpBindNoBlocking("0.0.0.0", 10000 + (this->genTid() % 10000) + i, NULL); 
		if (sock > 0)
			break;
	}
	if (sock < 1)
		return -1;
	___sock___ = sock;
	static uchar buf[1] = { XSC_TAG_TRANSM_PING };
	ikcp_send(this->kcp, (char*) buf, 1);
	ikcp_update(this->kcp, DateMisc::now() & 0xFFFFFFFFULL); 
	this->lock4sendCache.unlock();
	struct timeval tv;
	tv.tv_sec = 3; 
	tv.tv_usec = 0;
	fd_set rset;
	FD_ZERO(&rset);
	FD_SET(sock, &rset);
	int r = ::select(sock + 1, &rset, NULL, NULL, &tv);
	if (r < 1)
		goto label;
	if (FD_ISSET(sock, &rset))
	{
		int err;
		socklen_t len = sizeof(int);
		if (::getsockopt(sock, SOL_SOCKET, SO_ERROR, (char* ) &err, &len) < 0 || err)
			goto label;
	} else
	{
		label: 
		Net::close(sock);
		return -1;
	}
	uchar pong[0x40];
	struct sockaddr_in from;
	int len = Net::udpRecv(sock, pong, 0x40, &from);
	if (len < 1)
	{
		LOG_ERROR("udp recv failed, len: %d, host: %s", len, this->addr.c_str())
		goto label;
	}
	this->lock4sendCache.lock();
	ikcp_input(this->kcp, (char*) pong, len);
	len = ikcp_recv(this->kcp, (char*) pong, 0x40);
	this->lock4sendCache.unlock();
	if (len != 1)
	{
		LOG_DEBUG("recv xsc pong pdu failed, len: %d, host: %s", len, this->addr.c_str())
		goto label;
	}
	return sock;
}

bool XscRudpChannel::isOpen()
{
	return this->threadStarted;
}

uchar XscRudpChannel::channelStatus()
{
	return this->status;
}

bool XscRudpChannel::send(uchar* buf, int len)
{
	this->lock4sendCache.lock();
	ikcp_send(this->kcp, (char*) buf, len);
	ikcp_update(this->kcp, DateMisc::now() & 0xFFFFFFFFULL);
	this->lock4sendCache.unlock();
	return true;
}

void XscRudpChannel::close()
{
	this->clear();
	this->status = XSC_CHANNEL_STATUS_LOST;
	if (this->sock < 1)
		return;
	Net::close(this->sock);
	LOG_DEBUG("xsc rudp channel closed, sock: %d, host: %s", this->sock, this->addr.c_str())
	this->sock = 0;
	___sock___ = 0;
	this->exec = this->evnClose() ? this->exec : false;
}

void XscRudpChannel::closeSlient()
{
	this->clear();
	this->status = XSC_CHANNEL_STATUS_LOST;
	if (this->sock < 1)
		return;
	LOG_DEBUG("xsc rudp channel closed, sock: %d, host: %s", this->sock, this->addr.c_str())
	Net::close(this->sock);
	this->sock = 0;
	___sock___ = 0;
}

void XscRudpChannel::clear()
{
	if (this->kcp != NULL)
	{
		::free((struct sockaddr_in*) this->kcp->user);
		ikcp_release(this->kcp);
		this->kcp = NULL;
	}
}

void XscRudpChannel::evnDida(ullong now)
{
	this->checkChannelRt(now);
	this->heartbeat(now);
	this->checkTimeoutInitTrans(now, 15 );
}

void XscRudpChannel::heartbeat(ullong now)
{
	if (this->lastHbTs + 25 * DateMisc::sec > now) 
		return;
	this->lastHbTs = now;
	static uchar ping[] = { (uchar) XSC_TAG_TRANSM_PING };
	this->send(ping, 1);
}

void XscRudpChannel::checkChannelRt(ullong now)
{
	uint ts = now & 0xFFFFFFFFULL;
	if (ikcp_check(this->kcp, ts) > ts)
		return;
	ikcp_update(this->kcp, ts);
}

void XscRudpChannel::createKcp()
{
	this->lock4sendCache.lock();
	string host;
	int port;
	struct sockaddr_in* server = (struct sockaddr_in*) ::calloc(1, sizeof(sockaddr_in));
	Net::str2ipAndPort(this->addr.c_str(), &host, &port);
	Net::setAddr(host.c_str(), port, server);
	this->kcp = ikcp_create(this->genTid() , server );
	this->kcp->output = ((int (*)(const char *buf, int len, ikcpcb *kcp, void *user)) (XscRudpChannel::kcpOutput));
	this->kcp->mtu = 1400;
	this->kcp->rx_minrto = 10;
	ikcp_nodelay(this->kcp, 1 , 20 , 2 , 1 );
	ikcp_wndsize(this->kcp, 0x80, 0x80);
}

bool XscRudpChannel::evnTry(int tryTimes )
{
	return this->__evnTry__(tryTimes);
}

void XscRudpChannel::evnEstab()
{
	this->__evnEstab__();
}

bool XscRudpChannel::evnMsg(shared_ptr<XscProtoPdu> pdu)
{
	return this->__evnMsg__(pdu);
}

bool XscRudpChannel::evnClose()
{
	return this->__evnClose__();
}

int XscRudpChannel::kcpOutput(const char* buf, int len, void* kcp, void* user)
{
	Net::udpSend(___sock___, (uchar*) buf, len, (struct sockaddr_in*) user);
	return 0;
}

string XscRudpChannel::toString()
{
	string str;
	SPRINTF_STRING(&str, "sock: %d, host: %s", this->sock, this->addr.c_str())
	return str;
}

XscRudpChannel::~XscRudpChannel()
{
	if (this->kcp != NULL)
	{
		::free((struct sockaddr_in*) this->kcp->user);
		ikcp_release(this->kcp);
		this->kcp = NULL;
	}
}

