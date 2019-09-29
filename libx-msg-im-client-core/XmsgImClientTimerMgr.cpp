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

#include "XmsgImClientTimerMgr.h"
#include "XmsgImClientCore.h"

#define X_MSG_IM_CLIENT_TIMER_TICKS 																	0x400			

XmsgImClientTimerMgr* XmsgImClientTimerMgr::inst = new XmsgImClientTimerMgr();

XmsgImClientTimerMgr::XmsgImClientTimerMgr()
{
	this->tid = 0;
	this->slot = 0;
	this->lts = DateMisc::now();
	for (int i = 0; i < X_MSG_IM_CLIENT_TIMER_TICKS; ++i)
		this->wheel.push_back(new unordered_map<uint, shared_ptr<XmsgImClientTimer>>());
}

XmsgImClientTimerMgr* XmsgImClientTimerMgr::instance()
{
	return XmsgImClientTimerMgr::inst;
}

void XmsgImClientTimerMgr::dida(ullong now)
{
	if ((time_t) (now - this->lts) < DateMisc::sec) 
		return;
	this->lts = now;
	this->loop(); 
	this->slot += 1; 
	this->slot = this->slot == X_MSG_IM_CLIENT_TIMER_TICKS ? 0 : this->slot;
}

uint XmsgImClientTimerMgr::addTimer(int sec , function<bool(void)> cb )
{
	if (Misc::getTid() != XmsgImClientCore::instance()->getSdkThreadId())
	{
		LOG_FAULT("it`s a bug, current-thread: %u, sdk-thread: %u, stack: %s", Misc::getTid(), XmsgImClientCore::instance()->getSdkThreadId(), Misc::getStack().c_str());
		return 0;
	}
	return this->add(sec, cb);
}

uint XmsgImClientTimerMgr::addTimerOneTime(int sec , function<void(void)> cb )
{
	function<bool(void)> xcb = [cb]
	{
		cb();
		return false;
	};
	return this->addTimer(sec, xcb);
}

bool XmsgImClientTimerMgr::cancelTimer(uint tid )
{
	if (Misc::getTid() != XmsgImClientCore::instance()->getSdkThreadId())
	{
		LOG_FAULT("it`s a bug, current-thread: %u, sdk-thread: %u, stack: %s", Misc::getTid(), XmsgImClientCore::instance()->getSdkThreadId(), Misc::getStack().c_str())
		return false;
	}
	for (uint i = 0; i < this->wheel.size(); ++i)
	{
		unordered_map<uint, shared_ptr<XmsgImClientTimer>>* solt = this->wheel.at(i);
		auto it = solt->find(tid);
		if (it == solt->end()) 
			continue;
		solt->erase(it);
		return true;
	}
	return false;
}

void XmsgImClientTimerMgr::cancelAllTimer()
{
	if (Misc::getTid() != XmsgImClientCore::instance()->getSdkThreadId())
	{
		LOG_FAULT("it`s a bug, current-thread: %u, SDK-thread: %u, stack: %s", Misc::getTid(), XmsgImClientCore::instance()->getSdkThreadId(), Misc::getStack().c_str())
		return;
	}
	for (uint i = 0; i < this->wheel.size(); ++i)
	{
		unordered_map<uint, shared_ptr<XmsgImClientTimer>>* solt = this->wheel.at(i);
		for (auto it = solt->begin(); it != solt->end();)
			solt->erase(it++);
	}
}

void XmsgImClientTimerMgr::loop()
{
	unordered_map<uint, shared_ptr<XmsgImClientTimer>>* solt = this->wheel.at(this->slot);
	list<pair<uint, shared_ptr<XmsgImClientTimer>>> lis;
	for (auto& it : *solt) 
		lis.push_back(make_pair(it.first, it.second));
	list<pair<uint, shared_ptr<XmsgImClientTimer>>> tmp; 
	for (auto& it : lis)
	{
		if (it.second->loop == 0) 
		{
			if (it.second->cb()) 
				tmp.push_back(make_pair(it.first, it.second));
			solt->erase(it.first); 
		} else
			it.second->loop -= 1;
	}
	for (auto& it : tmp) 
	{
		int m = it.second->sec % X_MSG_IM_CLIENT_TIMER_TICKS;
		int pos = this->slot + m;
		it.second->slot = pos < X_MSG_IM_CLIENT_TIMER_TICKS ? pos : (pos - X_MSG_IM_CLIENT_TIMER_TICKS) ;
		this->wheel.at(it.second->slot)->insert(make_pair(it.first, it.second));
	}
}

uint XmsgImClientTimerMgr::add(int sec , function<bool(void)> cb )
{
	int m = sec % X_MSG_IM_CLIENT_TIMER_TICKS;
	int pos = this->slot + m;
	shared_ptr<XmsgImClientTimer> xt = shared_ptr<XmsgImClientTimer>(new XmsgImClientTimer(sec, (sec / X_MSG_IM_CLIENT_TIMER_TICKS), 
			pos < X_MSG_IM_CLIENT_TIMER_TICKS ? pos : (pos - X_MSG_IM_CLIENT_TIMER_TICKS) , cb));
	unordered_map<uint, shared_ptr<XmsgImClientTimer> >* solt = this->wheel.at(xt->slot);
	solt->insert(make_pair(++(this->tid), xt));
	return this->tid;
}

XmsgImClientTimerMgr::~XmsgImClientTimerMgr()
{

}

