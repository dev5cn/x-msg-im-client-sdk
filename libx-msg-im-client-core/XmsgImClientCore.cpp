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

#include "XmsgImClientCore.h"
#include "XmsgImClientTimerMgr.h"

XmsgImClientCore* XmsgImClientCore::inst = new XmsgImClientCore();

XmsgImClientCore::XmsgImClientCore()
{
	this->sdkThreadId = 0;
}

XmsgImClientCore* XmsgImClientCore::instance()
{
	return XmsgImClientCore::inst;
}

void XmsgImClientCore::future(function<void()> cb)
{
	if (Misc::getTid() == this->sdkThreadId)
	{
		cb();
		return;
	}
	this->push(shared_ptr<XmsgImClientEvent>(new XmsgImClientEvent(X_MSG_IM_CLIENT_EVENT_ATTACH_TO_SDK_THREAD, make_shared<function<void()>>(cb))));
}

uint XmsgImClientCore::getSdkThreadId()
{
	return this->sdkThreadId;
}

shared_ptr<XmsgImClientEvent> XmsgImClientCore::loop()
{
	loop:
	unique_lock<mutex> lock(this->lock4eventQueue);
	while (this->eventQueue.empty())
	{
		if (this->cond4eventQueue.wait_for(lock, chrono::seconds(1))== cv_status::timeout)
		{
			lock.unlock();
			XmsgImClientTimerMgr::instance()->dida(DateMisc::now());
			goto loop;
		}
	}
	auto evn = this->eventQueue.front();
	this->eventQueue.pop();
	lock.unlock();
	return evn;
}

void XmsgImClientCore::setSdkThreadId(uint tid)
{
	this->sdkThreadId = tid;
}

void XmsgImClientCore::push(shared_ptr<XmsgImClientEvent> evn)
{
	unique_lock<mutex> lock(this->lock4eventQueue);
	bool nll = this->eventQueue.empty();
	this->eventQueue.push(evn);
	if (nll)
		this->cond4eventQueue.notify_one(); 
}

XmsgImClientCore::~XmsgImClientCore()
{

}

