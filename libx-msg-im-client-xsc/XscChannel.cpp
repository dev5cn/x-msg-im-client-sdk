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

#include "XscChannel.h"

XscChannel::XscChannel(int mtu)
{
	this->status = XSC_CHANNEL_STATUS_LOST;
	this->exec = true;
	this->mtu = mtu;
	this->lastCheckInitTransTs = 0ULL;
	this->tidGen.store(Crypto::randomInt());
}

int XscChannel::getMtu()
{
	return this->mtu;
}

uint XscChannel::genTid()
{
	return this->tidGen.fetch_add(1);
}

string XscChannel::getAddress()
{
	return this->addr;
}

void XscChannel::setAddress(const char* addr)
{
	this->addr.assign(addr);
}

void XscChannel::putInitTrans(shared_ptr<XscChannelTrans> trans)
{
	unique_lock<mutex> lock(this->initTransMutex);
	this->initTrans[trans->stid] = trans;
}

void XscChannel::putPassTrans(shared_ptr<XscChannelTrans> trans)
{
	unique_lock<mutex> lock(this->passTransMutex);
	this->passTrans[trans->stid] = trans;
}

shared_ptr<XscChannelTrans> XscChannel::removeInitTrans(uint stid)
{
	unique_lock<mutex> lock(this->initTransMutex);
	auto it = this->initTrans.find(stid);
	if (it == this->initTrans.end())
		return nullptr;
	shared_ptr<XscChannelTrans> trans = it->second;
	this->initTrans.erase(it);
	return trans;
}

shared_ptr<XscChannelTrans> XscChannel::removePassTrans(uint stid)
{
	unique_lock<mutex> lock(this->passTransMutex);
	auto it = this->passTrans.find(stid);
	if (it == this->passTrans.end())
		return nullptr;
	shared_ptr<XscChannelTrans> trans = it->second;
	this->passTrans.erase(it);
	return trans;
}

void XscChannel::checkTimeoutInitTrans(ullong now , int sec )
{
	if (this->lastCheckInitTransTs + 2 * DateMisc::sec > now) 
		return;
	this->lastCheckInitTransTs = now;
	list<shared_ptr<XscChannelTrans>> tmp;
	this->initTransMutex.lock();
	if (this->initTrans.empty()) 
	{
		this->initTransMutex.unlock();
		return;
	}
	for (auto it = this->initTrans.begin(); it != this->initTrans.end();)
	{
		if (it->second->gts + (ullong) (sec * 1000L) > now) 
		{
			++it;
			continue;
		}
		it->second->ets = now;
		it->second->ret = RET_TIME_OUT;
		it->second->desc = "transaction timeout on local xsc channel";
		tmp.push_back(it->second);
		this->initTrans.erase(it++);
	}
	this->initTransMutex.unlock();
	if (tmp.empty())
		return;
	for (auto& it : tmp)
	{
		LOG_WARN("xsc channel initiative transaction timeout, elap: %dms, trans: %s", DateMisc::elap(now, it->gts), it->toString().c_str())
		it->end();
	}
}

void XscChannel::checkTimeoutPassTrans(ullong now , int sec )
{
}

void XscChannel::stop()
{
	this->exec = false;
}

void XscChannel::clear()
{
	ullong now = DateMisc::now();
	list<shared_ptr<XscChannelTrans>> tmp;
	this->initTransMutex.lock();
	for (auto it = this->initTrans.begin(); it != this->initTrans.end();)
	{
		it->second->ets = now;
		it->second->ret = RET_TIME_OUT;
		it->second->desc = "xsc channel lost";
		tmp.push_back(it->second);
		this->initTrans.erase(it++);
	}
	this->initTransMutex.unlock();
	if (tmp.empty())
		return;
	for (auto& it : tmp)
		it->end();
	this->passTransMutex.lock();
	this->passTrans.clear();
	this->passTransMutex.unlock();
}

XscChannel::~XscChannel()
{

}

