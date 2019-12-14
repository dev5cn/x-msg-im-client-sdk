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

#include "XscTcpChannel.h"

XscTcpChannel::XscTcpChannel(int mtu) :
		XscChannel(mtu)
{
	this->sock = 0;
	this->dlen = 0;
	this->port = 0;
	this->threadStarted.store(false);
	this->lastHbTs = 0ULL;
}

shared_ptr<XscTcpChannel> XscTcpChannel::open(const char* host, int port, function<bool(int tryCount)> evnTry, function<void()> evnEstab, function<bool(shared_ptr<XscProtoPdu> pdu)> evnMsg, function<bool()> evnClose)
{
	shared_ptr<XscTcpChannel> xc(new XscTcpChannel(XSC_TCP_MTU));
	SPRINTF_STRING(&xc->addr, "%s:%d", host, port)
	xc->host.assign(host);
	xc->port = port;
	xc->status = XSC_CHANNEL_STATUS_TRY;
	xc->__evnTry__ = evnTry;
	xc->__evnEstab__ = evnEstab;
	xc->__evnClose__ = evnClose;
	xc->__evnMsg__ = evnMsg;
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

void XscTcpChannel::svc()
{
	LOG_INFO("xsc tcp channel thread start successful, host: %s:%d", this->host.c_str(), this->port)
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
				LOG_ERROR("can not connect to remote host: %s:%d, elap: %dms, we will try it again in 2 seconds", this->host.c_str(), this->port, DateMisc::elap(sts))
				Misc::sleep(2000L);
				continue;
			}
			LOG_ERROR("can not connect to remote host: %s:%d, elap: %dms, we will exit xsc tcp channel thread", this->host.c_str(), this->port, DateMisc::elap(sts))
			continue;
		}
		tryTimes = 0;
		this->sock = sock;
		this->status = XSC_CHANNEL_STATUS_ESTABLISHED;
		this->evnEstab();
		LOG_INFO("got a connection from %s:%d, elap: %dms", this->host.c_str(), this->port, DateMisc::elap(sts));
		while (this->exec && this->loop())
			;
		this->dlen = 0;
		this->close();
	}
	this->threadStarted.store(false);
	LOG_INFO("xsc tcp channel thread exited, host: %s:%d", this->host.c_str(), this->port)
}

bool XscTcpChannel::loop()
{
	struct timeval val = { 1, 0 }; 
	fd_set rset;
	fd_set sset;
	FD_ZERO(&rset);
	FD_SET(this->sock, &rset);
	this->lock4sendCache.lock();
	bool empty = this->sendCache.empty();
	this->lock4sendCache.unlock();
	if (!empty) 
	{
		FD_ZERO(&sset);
		FD_SET(this->sock, &sset);
		if (::select(this->sock + 1, &rset, &sset, NULL, &val) == 0) 
		{
			this->evnDida(DateMisc::now());
			return true;
		}
	} else
	{
		if (::select(this->sock + 1, &rset, NULL, NULL, &val) == 0) 
		{
			this->evnDida(DateMisc::now());
			return true;
		}
	}
	if (FD_ISSET(this->sock, &rset))
		return this->evnRecv();
	if (FD_ISSET(this->sock, &sset))
		return this->evnSend();
	LOG_INFO("xsc rudp channel exception, host: %s:%d", this->host.c_str(), this->port)
	return false;
}

bool XscTcpChannel::evnRecv()
{
	int len;
	while (true)
	{
		len = Net::tcpRecvNoBlocking(this->sock, this->rbuf + this->dlen, XSC_TCP_MTU - this->dlen);
		if (len < 1)
		{
#ifndef WINDOWS
			if ((len == -1 && errno != EAGAIN))
			{
				LOG_INFO("tcp connection lost, peer: %s, errno: %d, len: %d", this->addr.c_str(), errno, len)
				return false;
			}
#else
			if (WSAGetLastError() != WSAEWOULDBLOCK && WSAGetLastError() != 0)
			{
				LOG_INFO("tcp connection lost, peer: %s, errno: %d", this->addr.c_str(), WSAGetLastError())
				return false;
			}
#endif
			break;
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
			LOG_FAULT("it`s a bug, len: %d, dlen: %d, host: %s:%d", len, this->dlen, this->host.c_str(), this->port)
			return false;
		}
		for (int i = 0; i < remain; ++i)
			this->rbuf[i] = this->rbuf[len + i];
		this->dlen = remain;
	}
	return true;
}

int XscTcpChannel::evnRecvBytes(uchar* dat, int len)
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
			LOG_DEBUG("xsc-pdu format error, host: %s:%d, dat: %s", this->host.c_str(), this->port, Net::printHex2str(dat + used, len - used).c_str())
			return -1;
		}
		return used; 
	}
}

bool XscTcpChannel::evnSend()
{
	loop:
	xsc_tcp_channel_wbuf* pdu = NULL;
	this->lock4sendCache.lock();
	if (this->sendCache.empty())
	{
		this->lock4sendCache.unlock();
		return true;
	}
	pdu = this->sendCache.front();
	this->sendCache.pop_front();
	this->lock4sendCache.unlock();
	int slen = this->evnSendBytes(pdu);
	if (slen == 0) 
	{
		delete pdu;
		goto loop;
	}
	if (slen < 0) 
	{
		delete pdu;
		return false;
	}
	pdu->slen = slen; 
	this->lock4sendCache.lock();
	this->sendCache.push_front(pdu);
	this->lock4sendCache.unlock();
	return true;
}

int XscTcpChannel::evnSendBytes(xsc_tcp_channel_wbuf* pdu)
{
	int size = pdu->slen;
	uchar* dat = (uchar*) pdu->msg.data();
	bool exception = false;
	while (true)
	{
		int len = Net::tcpSend(this->sock, dat + size, pdu->msg.length() - size);
		if (len == (int) pdu->msg.length() - size) 
			return 0;
		if (len > 0) 
		{
			size += len;
			continue;
		}
		if (len < 1)
		{
#ifndef WINDOWS
			if (errno != EAGAIN) 
			{
				exception = true;
				break;
			}
#else
			if (WSAGetLastError() != WSAEWOULDBLOCK)
			{
				exception = true;
				break;
			}
#endif
			break;
		}
	}
	if (exception) 
	{
		LOG_DEBUG("xsc tcp channel exception, peer: %s:%d", this->host.c_str(), this->port)
		return -1;
	}
	return size;
}

int XscTcpChannel::connect()
{
	return Net::tcpConnectNoBlocking(this->host.c_str(), this->port, 5 , 0x10000 , 0x10000 );
}

bool XscTcpChannel::isOpen()
{
	return this->threadStarted;
}

uchar XscTcpChannel::channelStatus()
{
	return this->status;
}

bool XscTcpChannel::send(uchar* buf, int len)
{
	xsc_tcp_channel_wbuf* pdu = new xsc_tcp_channel_wbuf();
	pdu->slen = 0;
	pdu->msg.assign((char*) buf, len);
	this->lock4sendCache.lock();
	if (!this->sendCache.empty() || this->status == XSC_CHANNEL_STATUS_TRY) 
	{
		this->sendCache.push_back(pdu);
		this->lock4sendCache.unlock();
		return true;
	}
	int s = this->evnSendBytes(pdu);
	if (s < 1) 
	{
		delete pdu;
		this->lock4sendCache.unlock();
		if (s < 0) 
		{
			this->close();
			return false;
		}
		return true;
	}
	pdu->slen = s;
	this->sendCache.push_front(pdu); 
	this->lock4sendCache.unlock();
	return true;
}

void XscTcpChannel::close()
{
	this->clear();
	this->status = XSC_CHANNEL_STATUS_LOST;
	if (this->sock < 1)
		return;
	Net::close(this->sock);
	LOG_DEBUG("xsc tcp channel closed, sock: %d, peer: %s:%d", this->sock, this->host.c_str(), this->port)
	this->sock = 0;
	this->exec = this->evnClose() ? this->exec : false;
}

void XscTcpChannel::closeSlient()
{
	this->clear();
	this->status = XSC_CHANNEL_STATUS_LOST;
	if (this->sock < 1)
		return;
	Net::close(this->sock);
	LOG_DEBUG("xsc tcp channel closed, sock: %d, peer: %s:%d", this->sock, this->host.c_str(), this->port)
	this->sock = 0;
}

void XscTcpChannel::evnDida(ullong now)
{
	this->heartbeat(now);
	this->checkTimeoutInitTrans(now, 15 );
}

bool XscTcpChannel::evnTry(int tryTimes )
{
	return this->__evnTry__(tryTimes);
}

void XscTcpChannel::evnEstab()
{
	this->__evnEstab__();
}

bool XscTcpChannel::evnMsg(shared_ptr<XscProtoPdu> pdu)
{
	return this->__evnMsg__(pdu);
}

bool XscTcpChannel::evnClose()
{
	return this->__evnClose__();
}

void XscTcpChannel::heartbeat(ullong now)
{
	if (this->lastHbTs + 25 * DateMisc::sec > now) 
		return;
	this->lastHbTs = now;
	uchar ping[] = { (uchar) XSC_TAG_TRANSM_PING };
	this->send(ping, 1);
}

void XscTcpChannel::clear()
{
	XscChannel::clear();
	this->lock4sendCache.lock();
	for (auto& it : this->sendCache)
		delete it;
	this->lock4sendCache.unlock();
}

string XscTcpChannel::toString()
{
	string str;
	SPRINTF_STRING(&str, "host: %s, port: %d", this->host.c_str(), this->port)
	return str;
}

XscTcpChannel::~XscTcpChannel()
{

}

