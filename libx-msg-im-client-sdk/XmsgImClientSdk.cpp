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

#include "XmsgImClientSdk.h"

XmsgImClientSdk* XmsgImClientSdk::inst = new XmsgImClientSdk();

XmsgImClientSdk::XmsgImClientSdk()
{
	this->threadStarted.store(false);
}

XmsgImClientSdk* XmsgImClientSdk::instance()
{
	return XmsgImClientSdk::inst;
}

void XmsgImClientSdk::init()
{
	XmsgImClientNetApi::init(); 
	XmsgImClientSdk::instance()->start();
}

void XmsgImClientSdk::start()
{
	if (!this->threadStarted.exchange(true)) 
	{
		thread t([this]()
		{
			this->svc();
		});
		t.detach();
		return;
	}
	LOG_FAULT("it`s a bug, sdk thread already started.")
}

void XmsgImClientSdk::svc()
{
	LOG_INFO("x-msg-im-client sdk thread start successful");
	XmsgImClientCore::instance()->setSdkThreadId(Misc::getTid());
	while (true)
		this->loop();
	this->threadStarted.store(false);
	LOG_INFO("x-msg-im-client sdk thread exit.");
}

void XmsgImClientSdk::loop()
{
	auto evn = XmsgImClientCore::instance()->loop();
	if (evn == nullptr)
		return;
	switch (evn->type)
	{
	case X_MSG_IM_CLIENT_EVENT_ATTACH_TO_SDK_THREAD:
		this->handleEvent4sdkThread(static_pointer_cast<function<void()>>(evn->evn));
		break;
	default:
		LOG_FAULT("it`s a bug, unexpected event-type: %02X", evn->type)
		break;
	}
}

void XmsgImClientSdk::handleEvent4sdkThread(shared_ptr<function<void()>> evn)
{
	(*evn)();
}

void XmsgImClientSdk::future(function<void()> cb)
{
	XmsgImClientCore::instance()->future(cb);
}

XmsgImClientSdk::~XmsgImClientSdk()
{

}

