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

#include "XmsgApNe.h"
#include "trans/XmsgImTransInitiative.h"

XmsgApNe::XmsgApNe()
{

}

void XmsgApNe::future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, shared_ptr<string> oob)
{
	netApi->detached = req->GetDescriptor()->name() == XmsgImHlrDetachSimpleReq::descriptor()->name();
	SptrXiti trans(new XmsgImTransInitiative());
	trans->beginMsg = req;
	trans->cb = cb;
	if (oob != nullptr)
		trans->addOoob(oob);
	if (netApi->xmsgApXscChannel == nullptr && !XmsgApNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-ap";
		trans->end();
		return;
	}
	if (!netApi->xmsgApXscChannel->isOpen() && !XmsgApNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-ap";
		trans->end();
		return;
	}
	trans->xscChannel = netApi->xmsgApXscChannel;
	trans->stid = netApi->xmsgApXscChannel->genTid();
	netApi->xmsgApXscChannel->putInitTrans(trans); 
	trans->sendBegin(); 
}

void XmsgApNe::future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<x_msg_im_trans_raw_msg> rawMsg, function<void(SptrXiti itrans)> cb, shared_ptr<string> oob)
{
	netApi->detached = rawMsg->msg == XmsgImHlrDetachSimpleReq::descriptor()->name();
	SptrXiti trans(new XmsgImTransInitiative());
	trans->raw = true;
	trans->rawMsgReq = rawMsg;
	trans->cbRaw = cb;
	if (oob != nullptr)
		trans->addOoob(oob);
	if (netApi->xmsgApXscChannel == nullptr && !XmsgApNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-ap";
		trans->end();
		return;
	}
	if (!netApi->xmsgApXscChannel->isOpen() && !XmsgApNe::openXscChannel(netApi))
	{
		trans->ret = RET_FAILURE;
		trans->desc = "can not open xsc channel for x-msg-ap";
		trans->end();
		return;
	}
	trans->xscChannel = netApi->xmsgApXscChannel;
	trans->stid = netApi->xmsgApXscChannel->genTid();
	netApi->xmsgApXscChannel->putInitTrans(trans); 
	trans->sendBegin(); 
}

bool XmsgApNe::openXscChannel(shared_ptr<XmsgImClientNetApi> netApi)
{
	shared_ptr<XmsgImClientServiceAddress> xmsgApAddr = XmsgApNe::chooseXmsgApAddress(netApi);
	if (xmsgApAddr == nullptr)
	{
		LOG_ERROR("may be x-msg-ap address list is empty")
		return false;
	}
	netApi->xmsgApXscChannel = XscTcpChannel::open(xmsgApAddr->ip().c_str(), xmsgApAddr->port(), [netApi](int tryCount)
	{
		return XmsgApNe::evnTry(netApi, tryCount);
	}, [netApi]
	{
		XmsgApNe::evnEstab(netApi);
	}, [netApi](shared_ptr<XscProtoPdu> pdu)
	{
		return XmsgApNe::evnMsg(netApi, pdu);
	}, [netApi]
	{
		return XmsgApNe::evnClose(netApi);
	});
	string addr;
	SPRINTF_STRING(&addr, "%s:%d", xmsgApAddr->ip().c_str(), xmsgApAddr->port())
	netApi->xmsgApXscChannel->setAddress(addr.c_str());
	return true;
}

bool XmsgApNe::evnTry(shared_ptr<XmsgImClientNetApi> netApi, int tryTimes)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgAp>(new XmsgImSdkEventXmsgAp());
	evn->set_evn("try");
	evn->set_times(tryTimes);
	evn->set_addr(netApi->xmsgApXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	return !netApi->detached;
}

void XmsgApNe::evnEstab(shared_ptr<XmsgImClientNetApi> netApi)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgAp>(new XmsgImSdkEventXmsgAp());
	evn->set_evn("estab");
	evn->set_addr(netApi->xmsgApXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	LOG_INFO("xsc channel established, x-msg-ap address: %s", netApi->xmsgApXscChannel->getAddress().c_str())
}

bool XmsgApNe::evnMsg(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	if (pdu->transm.indicator & 0x80) 
		return true;
	LOG_RECORD("\n  <-- PEER: %s \n%s", netApi->xmsgApXscChannel->addr.c_str(), pdu->toString().c_str())
	if (pdu->transm.trans == NULL) 
	{
		LOG_ERROR("must be have xsc transaction layer, x-msg-im-auth address: %s", netApi->xmsgApXscChannel->getAddress().c_str())
		return false;
	}
	bool ret = false;
	switch (pdu->transm.trans->trans)
	{
	case XSC_TAG_TRANS_BEGIN:
		ret = XmsgApNe::evnBegin(netApi, pdu);
		break;
	case XSC_TAG_TRANS_END:
		ret = XmsgApNe::evnEnd(netApi, pdu);
		break;
	case XSC_TAG_TRANS_UNIDIRECTION:
		ret = XmsgApNe::evnUnidirection(netApi, pdu);
		break;
	case XSC_TAG_TRANS_PARTIAL:
		ret = XmsgApNe::evnPartial(netApi, pdu);
		break;
	default:
		LOG_DEBUG("it`s a bug, unexpected XSC_TAG_TRANS: %04X", pdu->transm.trans->trans)
		break;
	}
	return ret;
}

bool XmsgApNe::evnBegin(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	if (pdu->transm.trans->msg.empty())
	{
		LOG_ERROR("transaction message name can not be null, ap: %s", netApi->xmsgApXscChannel->toString().c_str())
		return false;
	}
	SptrXitp trans(new XmsgImTransPassive());
	trans->xscChannel = netApi->xmsgApXscChannel;
	trans->dtid = pdu->transm.trans->stid;
	if (pdu->transm.header != NULL && pdu->transm.header->oob != NULL)
	{
		trans->ioob = new xsc_transmission_header_oob();
		for (auto& it : pdu->transm.header->oob->kv)
			trans->ioob->kv.push_back(it);
	}
	const Descriptor* desc = DescriptorPool::generated_pool()->FindMessageTypeByName(pdu->transm.trans->msg); 
	if (desc == nullptr)
	{
		trans->raw = true;
		trans->rawMsgReq.reset(new x_msg_im_trans_raw_msg());
		trans->rawMsgReq->msg = pdu->transm.trans->msg;
		trans->rawMsgReq->dat.assign((char*) pdu->transm.trans->dat, pdu->transm.trans->dlen);
		XmsgImClientNetApi::pubReq(netApi, trans);
		return true;
	}
	shared_ptr<Message> msg = XmsgImTrans::newPbMsg(desc, pdu->transm.trans->dat, pdu->transm.trans->dlen);
	if (msg == nullptr)
	{
		LOG_ERROR("can not reflect to a pb object from data, msg: %s, ap: %s", pdu->transm.trans->msg.c_str(), netApi->xmsgApXscChannel->toString().c_str())
		return false;
	}
	trans->beginMsg = msg;
	XmsgImClientNetApi::pubReq(netApi, trans);
	return true;
}

bool XmsgApNe::evnEnd(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	shared_ptr<XscChannelTrans> t = netApi->xmsgApXscChannel->removeInitTrans(pdu->transm.trans->dtid);
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
		XmsgImClientCore::instance()->future([netApi, trans]
		{
			trans->end();
		});
		return true;
	}
	if (pdu->transm.trans->dat != NULL) 
	{
		trans->endMsg = XmsgImTrans::newPbMsg(pdu->transm.trans->msg, pdu->transm.trans->dat, pdu->transm.trans->dlen);
		if (trans->endMsg == nullptr)
		{
			LOG_ERROR("can not reflect to a pb object from data, msg: %s, dat: %s", pdu->transm.trans->msg.c_str(), Net::printHex2str(pdu->transm.trans->dat, pdu->transm.trans->dlen).c_str())
		}
		XmsgImClientCore::instance()->future([netApi, trans]
		{
			trans->end();
		});
	}
	return true;
}

bool XmsgApNe::evnUnidirection(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	if (pdu->transm.trans->msg.empty())
	{
		LOG_ERROR("transaction message name can not be null, ap: %s", netApi->xmsgApXscChannel->toString().c_str())
		return false;
	}
	const Descriptor* desc = DescriptorPool::generated_pool()->FindMessageTypeByName(pdu->transm.trans->msg); 
	if (desc == nullptr)
	{
		string dat;
		if (pdu->transm.trans->dlen > 0)
			dat.assign((char*) pdu->transm.trans->dat, pdu->transm.trans->dlen);
		XmsgImClientNetApi::pubEvnRaw(netApi, pdu->transm.trans->msg, dat);
		return true;
	}
	shared_ptr<Message> msg = XmsgImTrans::newPbMsg(desc, pdu->transm.trans->dat, pdu->transm.trans->dlen);
	if (msg == nullptr)
	{
		LOG_ERROR("can not reflect to a pb object from data, msg: %s, ap: %s", pdu->transm.trans->msg.c_str(), netApi->xmsgApXscChannel->toString().c_str())
		return false;
	}
	XmsgImClientNetApi::pubEvn(netApi, msg);
	return true;
}

bool XmsgApNe::evnPartial(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu)
{
	return true;
}

bool XmsgApNe::evnClose(shared_ptr<XmsgImClientNetApi> netApi)
{
	auto evn = shared_ptr<XmsgImSdkEventXmsgAp>(new XmsgImSdkEventXmsgAp());
	evn->set_evn("close");
	evn->set_addr(netApi->xmsgApXscChannel->getAddress());
	XmsgImClientNetApi::pubEvn(netApi, evn);
	if (netApi->detached)
	{
		LOG_INFO("xsc channel disconnected, x-msg-ap address: %s", netApi->xmsgApXscChannel->getAddress().c_str())
	} else
	{
		LOG_ERROR("xsc channel disconnected, x-msg-ap address: %s", netApi->xmsgApXscChannel->getAddress().c_str())
	}
	return !netApi->detached;
}

shared_ptr<XmsgImClientServiceAddress> XmsgApNe::chooseXmsgApAddress(shared_ptr<XmsgImClientNetApi> netApi)
{
	if (netApi->xmsgApAddr.empty())
	{
		LOG_ERROR("x-msg-ap address is empty, may be you are not auth with x-msg-im-auth")
		return nullptr;
	}
	return netApi->xmsgApAddr.at(0);
}

XmsgApNe::~XmsgApNe()
{

}

