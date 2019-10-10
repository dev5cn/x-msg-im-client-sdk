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

#include "XmsgImAuthNe.h"

XmsgImAuthNe::XmsgImAuthNe()
{

}

bool XmsgImAuthNe::openXscChannel(shared_ptr<XmsgImClientNetApi> netApi)
{
	string host;
	int port;
	if (!Net::str2ipAndPort(netApi->xmsgImAuthAddr.c_str(), &host, &port))
	{
		LOG_FAULT("x-msg-im-auth address format error: %s", netApi->xmsgImAuthAddr.c_str())
		return false;
	}
	string ip = Misc::isDigitString(host.c_str()) ? host : Net::getHostByName(host.c_str());
	if (ip.empty())
	{
		LOG_ERROR("can not got x-msg-im-auth ip address, addr: %s", netApi->xmsgImAuthAddr.c_str())
		return false;
	}
	netApi->xmsgImAuthXscChannel = XscTcpChannel::open(ip.c_str(), port, [netApi](int tryCount)
	{
		return XmsgImAuthNe::evnTry(netApi, tryCount);
	}, [netApi]
	{
		XmsgImAuthNe::evnEstab(netApi);
	}, [netApi](shared_ptr<XscProtoPdu> pdu)
	{
		return XmsgImAuthNe::evnMsg(netApi, pdu);
	}, [netApi]
	{
		return XmsgImAuthNe::evnClose(netApi);
	});
	netApi->xmsgImAuthXscChannel->setAddress(netApi->xmsgImAuthAddr.c_str());
	return true;
}

void XmsgImAuthNe::future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, shared_ptr<string> oob)
{
	SptrXiti trans(new XmsgImTransInitiative());
	trans->raw = false;
	trans->beginMsg = req;
	trans->cb = cb;
	if (oob != nullptr)
		trans->addOoob(oob);
	if (netApi->xmsgImAuthXscChannel == nullptr && !XmsgImAuthNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-im-auth";
		trans->end();
		return;
	}
	if (!netApi->xmsgImAuthXscChannel->isOpen() && !XmsgImAuthNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-im-auth";
		trans->end();
		return;
	}
	trans->xscChannel = netApi->xmsgImAuthXscChannel;
	trans->stid = netApi->xmsgImAuthXscChannel->genTid();
	if (req->GetDescriptor()->name() == XmsgImAuthRegSimpleReq::descriptor()->name() || req->GetDescriptor()->name() == XmsgImAuthSimpleReq::descriptor()->name())
	{
		netApi->authFinished = false;
		netApi->xmsgImAuthXscChannel->putInitTrans(trans); 
		trans->sendBegin(); 
		return;
	}
	trans->ret = RET_FAILURE;
	trans->desc = "x-msg-im-auth may be not support this msg";
	trans->end();
	LOG_FAULT("it`s a bug, x-msg-im-auth may be not support this msg: %s", req->GetDescriptor()->name().c_str())
}

void XmsgImAuthNe::future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<x_msg_im_trans_raw_msg> rawMsg, function<void(SptrXiti itrans)> cb, shared_ptr<string> oob)
{
	SptrXiti trans(new XmsgImTransInitiative());
	trans->raw = true;
	trans->rawMsgReq = rawMsg;
	trans->cbRaw = cb;
	if (oob != nullptr)
		trans->addOoob(oob);
	if (netApi->xmsgImAuthXscChannel == nullptr && !XmsgImAuthNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-im-auth";
		trans->end();
		return;
	}
	if (!netApi->xmsgImAuthXscChannel->isOpen() && !XmsgImAuthNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-im-auth";
		trans->end();
		return;
	}
	trans->xscChannel = netApi->xmsgImAuthXscChannel;
	trans->stid = netApi->xmsgImAuthXscChannel->genTid();
	if (rawMsg->msg == XmsgImAuthRegSimpleReq::descriptor()->name() || rawMsg->msg == XmsgImAuthSimpleReq::descriptor()->name())
	{
		netApi->authFinished = false;
		netApi->xmsgImAuthXscChannel->putInitTrans(trans); 
		trans->sendBegin(); 
		return;
	}
	trans->ret = RET_FAILURE;
	trans->desc = "x-msg-im-auth may be not support this msg";
	trans->end();
	LOG_FAULT("it`s a bug, x-msg-im-auth may be not support this msg: %s", rawMsg->msg.c_str())
}

bool XmsgImAuthNe::evnTry(shared_ptr<XmsgImClientNetApi> netApi, int tryTimes)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgImAuth>(new XmsgImSdkEventXmsgImAuth());
	evn->set_evn("try");
	evn->set_times(tryTimes);
	evn->set_addr(netApi->xmsgImAuthXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	return !netApi->authFinished; 
}

void XmsgImAuthNe::evnEstab(shared_ptr<XmsgImClientNetApi> netApi)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgImAuth>(new XmsgImSdkEventXmsgImAuth());
	evn->set_evn("estab");
	evn->set_addr(netApi->xmsgImAuthXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	LOG_INFO("xsc channel established, x-msg-im-auth address: %s", netApi->xmsgImAuthXscChannel->getAddress().c_str())
}

bool XmsgImAuthNe::evnMsg(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	if (pdu->transm.indicator & 0x80) 
		return true;
	LOG_RECORD("\n  <-- PEER: %s \n%s", netApi->xmsgImAuthXscChannel->addr.c_str(), pdu->toString().c_str())
	if (pdu->transm.trans == NULL) 
	{
		LOG_ERROR("must be have xsc transaction layer, x-msg-im-auth address: %s", netApi->xmsgImAuthXscChannel->getAddress().c_str())
		return false;
	}
	if (pdu->transm.trans->trans != XSC_TAG_TRANS_END) 
	{
		LOG_ERROR("only supported XSC_TAG_TRANS_END on x-msg-auth")
		return false;
	}
	shared_ptr<XscChannelTrans> t = netApi->xmsgImAuthXscChannel->removeInitTrans(pdu->transm.trans->dtid);
	if (t == nullptr)
	{
		LOG_WARN("can not found initiative transaction for dtid: %08X, may be it was timeout", pdu->transm.trans->dtid)
		return true;
	}
	auto trans = static_pointer_cast<XmsgImTransInitiative>(t);
	trans->ets = DateMisc::now();
	trans->ret = pdu->transm.trans->ret;
	trans->desc = pdu->transm.trans->desc;
	if (trans->raw) 
	{
		trans->rawMsgRsp.reset(new x_msg_im_trans_raw_msg());
		trans->rawMsgRsp->msg = pdu->transm.trans->msg;
		if (pdu->transm.trans->dlen > 0)
			trans->rawMsgRsp->dat.assign((const char*) pdu->transm.trans->dat, pdu->transm.trans->dlen);
	} else
	{
		if (pdu->transm.trans->dat != NULL) 
		{
			trans->endMsg = XmsgImTrans::newPbMsg(pdu->transm.trans->msg, pdu->transm.trans->dat, pdu->transm.trans->dlen);
			LOG_ERROR("can not reflect a pb message from dat, msg: %s, x-msg-im-auth: %s", pdu->transm.trans->msg.c_str(), netApi->xmsgImAuthXscChannel->getAddress().c_str())
		}
	}
	XmsgImClientCore::instance()->future([netApi, trans]
	{
		XmsgImAuthNe::intercept(netApi, trans);
		trans->end();
		netApi->xmsgImAuthXscChannel->close(); 
	});
	return true;
}

bool XmsgImAuthNe::evnClose(shared_ptr<XmsgImClientNetApi> netApi)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgImAuth>(new XmsgImSdkEventXmsgImAuth());
	evn->set_evn("close");
	evn->set_addr(netApi->xmsgImAuthXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	LOG_WARN("xsc channel disconnected, x-msg-im-auth address: %s", netApi->xmsgImAuthXscChannel->getAddress().c_str())
	return !netApi->authFinished; 
}

void XmsgImAuthNe::intercept(shared_ptr<XmsgImClientNetApi> netApi, SptrXiti trans)
{
	netApi->authFinished = true; 
	if (trans->raw && !trans->rawMsgRsp->msg.empty()) 
	{
		trans->endMsg = XmsgImTrans::newPbMsg(trans->rawMsgRsp->msg, (uchar*) trans->rawMsgRsp->dat.data(), trans->rawMsgRsp->dat.length());
		if (trans->endMsg == nullptr) 
		{
			LOG_ERROR("can not reflect a pb message from dat, msg: %s, x-msg-im-auth: %s", trans->rawMsgRsp->msg.c_str(), netApi->xmsgImAuthXscChannel->getAddress().c_str())
			return;
		}
	}
	if (trans->endMsg == nullptr)
	{
		LOG_DEBUG("may be have some one request failed, req: %s, ret: %04X, desc: %s, x-msg-im-auth: %s", 
				(trans->raw ? trans->rawMsgReq->msg.c_str() : trans->beginMsg->GetDescriptor()->name().c_str()),
				trans->ret,
				trans->desc.c_str(),
				netApi->xmsgImAuthXscChannel->getAddress().c_str())
		return;
	}
	if (trans->endMsg->GetDescriptor()->name() != XmsgImAuthSimpleRsp::descriptor()->name())
		return;
	auto rsp = static_pointer_cast<XmsgImAuthSimpleRsp>(trans->endMsg);
	if (rsp->apaddr().empty())
	{
		LOG_ERROR("x-msg-ap address is empty, rsp: %s", rsp->ShortDebugString().c_str())
		return;
	}
	for (auto& it : rsp->apaddr())
	{
		shared_ptr<XmsgImClientServiceAddress> addr(new XmsgImClientServiceAddress());
		addr->CopyFrom(it);
		netApi->xmsgApAddr.push_back(addr);
	}
}

XmsgImAuthNe::~XmsgImAuthNe()
{

}

