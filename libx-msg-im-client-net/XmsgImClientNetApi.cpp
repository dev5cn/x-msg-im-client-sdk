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

#include "XmsgImClientNetApi.h"
#include "XmsgImAuthNe.h"
#include "XmsgApNe.h"

XmsgImClientNetApi::XmsgImClientNetApi(const char* xmsgImAuthAddr )
{
	this->xmsgImAuthXscChannel = nullptr;
	this->xmsgApXscChannel = nullptr;
	this->xmsgImAuthAddr.assign(xmsgImAuthAddr);
	this->authFinished = false;
	this->detached = false;
}

void XmsgImClientNetApi::init()
{
#ifdef WINDOWS
	WSADATA wsa;
	WSAStartup(MAKEWORD(2, 2), &wsa);
#endif
	LOG_INFO("x-msg-im-client c++ network driver init successful")
}

shared_ptr<XmsgImClientNetApi> XmsgImClientNetApi::newApi(const char* uri )
{
	return shared_ptr<XmsgImClientNetApi>(new XmsgImClientNetApi(uri));
}

void XmsgImClientNetApi::future(shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, const string oob)
{
	shared_ptr<string> ooob = nullptr;
	if (!oob.empty())
		ooob.reset(new string(oob));
	auto netApi = this->sharedPtr();
	XmsgImClientCore::instance()->future([netApi, req, cb, ooob]
	{
		XmsgImClientNetApi::__future__(netApi, req, cb, ooob);
	});
}

void XmsgImClientNetApi::future(const string& msg, const string& dat, function<void(SptrXiti itrans)> cb, const string oob)
{
	shared_ptr<string> ooob = nullptr;
	if (!oob.empty())
		ooob.reset(new string(oob));
	shared_ptr<x_msg_im_trans_raw_msg> rawMsg(new x_msg_im_trans_raw_msg());
	rawMsg->msg = msg;
	rawMsg->dat = dat;
	auto netApi = this->sharedPtr();
	XmsgImClientCore::instance()->future([netApi, rawMsg, cb, ooob]
	{
		XmsgImClientNetApi::__future__(netApi, rawMsg, cb, ooob);
	});
}

void XmsgImClientNetApi::subReq(function<void(SptrXitp trans, shared_ptr<Message> req)> cb)
{
	this->reqCb = shared_ptr<function<void(SptrXitp trans, shared_ptr<Message>)>>(new function<void(SptrXitp trans, shared_ptr<Message>)>());
	*(this->reqCb) = cb;
}

void XmsgImClientNetApi::subReq(function<void(SptrXitp trans, const string& name, const string& dat)> cb)
{
	this->reqCbRaw = shared_ptr<function<void(SptrXitp trans, const string& name, const string& dat)>>(new function<void(SptrXitp trans, const string& name, const string& dat)>());
	*(this->reqCbRaw) = cb;
}

void XmsgImClientNetApi::subEvn(function<void(shared_ptr<Message>)> cb)
{
	this->evnCb = shared_ptr<function<void(shared_ptr<Message>)>>(new function<void(shared_ptr<Message>)>());
	*(this->evnCb) = cb;
}

void XmsgImClientNetApi::subEvn(function<void(const string& name, const string& dat)> cb)
{
	this->evnCbRaw = shared_ptr<function<void(const string& name, const string& dat)>>(new function<void(const string& name, const string& dat)>());
	*(this->evnCbRaw) = cb;
}

void XmsgImClientNetApi::stopTry()
{
	this->authFinished = true;
	this->detached = true;
}

void XmsgImClientNetApi::__future__(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, shared_ptr<string> ooob)
{
	string name = req->GetDescriptor()->name();
	if (name.find("XmsgImAuth") == 0) 
	{
		XmsgImAuthNe::future(netApi, req, cb, ooob);
		return;
	}
	XmsgApNe::future(netApi, req, cb, ooob);
}

void XmsgImClientNetApi::__future__(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<x_msg_im_trans_raw_msg> rawMsg, function<void(SptrXiti itrans)> cb, shared_ptr<string> ooob)
{
	if (rawMsg->msg.find("XmsgImAuth") == 0) 
	{
		XmsgImAuthNe::future(netApi, rawMsg, cb, ooob);
		return;
	}
	XmsgApNe::future(netApi, rawMsg, cb, ooob);
}

shared_ptr<XmsgImClientNetApi> XmsgImClientNetApi::sharedPtr()
{
	return shared_from_this();
}

void XmsgImClientNetApi::pubReq(shared_ptr<XmsgImClientNetApi> netApi, SptrXitp trans)
{
	if (trans->raw)
	{
		if (netApi->reqCbRaw == nullptr)
		{
			LOG_DEBUG("forget set network request transaction call back? trans: %s", trans->toString().c_str())
			return;
		}
		XmsgImClientCore::instance()->future([netApi, trans]
		{
			(*netApi->reqCbRaw)(trans, trans->rawMsgReq->msg, trans->rawMsgReq->dat);
		});
		return;
	}
	if (netApi->reqCb == nullptr)
	{
		LOG_DEBUG("forget set network request transaction call back? trans: %s", trans->toString().c_str())
		return;
	}
	XmsgImClientCore::instance()->future([netApi, trans]
	{
		(*netApi->reqCb)(trans, trans->beginMsg);
	});
}

void XmsgImClientNetApi::pubEvn(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> evn)
{
	if (netApi->evnCb == nullptr)
	{
		LOG_DEBUG("forget set event call back? event-name: %s, value: %s", evn->GetDescriptor()->name().c_str(), evn->ShortDebugString().c_str())
		return;
	}
	XmsgImClientCore::instance()->future([netApi, evn]
	{
		(*netApi->evnCb)(evn);
	});
}

void XmsgImClientNetApi::pubEvnRaw(shared_ptr<XmsgImClientNetApi> netApi, const string& name, const string& dat)
{
	if (netApi->evnCbRaw == nullptr)
	{
		LOG_DEBUG("forget set event call back? event-name: %s", name.c_str())
		return;
	}
	XmsgImClientCore::instance()->future([netApi, name, dat]
	{
		(*netApi->evnCbRaw)(name, dat);
	});
}

XmsgImClientNetApi::~XmsgImClientNetApi()
{

}

