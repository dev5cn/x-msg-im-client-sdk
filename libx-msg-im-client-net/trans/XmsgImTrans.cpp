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

#include <libxsc-proto.h>
#include "XmsgImTrans.h"

XmsgImTrans::XmsgImTrans()
{
	this->beginMsg = nullptr;
	this->endMsg = nullptr;
	this->uniMsg = nullptr;
	this->ioob = NULL;
	this->ooob = NULL;
	this->raw = false;
}

void XmsgImTrans::addOoob(shared_ptr<string> oob)
{
	if (this->ooob != NULL) 
		return;
	this->ooob = new xsc_transmission_header_oob();
	this->ooob->kv.push_back(make_pair<>(XSC_TAG_CLIENT_OOB, *oob));
}

void XmsgImTrans::sendPdu(shared_ptr<XscProtoPdu> pdu)
{
	int len;
	uchar* dat = pdu->bytes(&len);
	auto channel = this->xscChannel.lock();
	if (Log::isRecord())
	{
		bool exp;
		auto p = XscProtoPdu::decode(dat, len, &exp);
		LOG_RECORD("\n  --> PEER: %s \n%s\n", channel == nullptr ? "unknown" : channel->addr.c_str(), p == nullptr ? "exception" : p->print(dat, len).c_str())
	}
	if (channel == nullptr)
	{
		LOG_ERROR("xsc channel already lost.")
		return;
	}
	channel->send(dat, len);
}

shared_ptr<Message> XmsgImTrans::newPbMsg(const Descriptor* desc)
{
	const Message* pt = MessageFactory::generated_factory()->GetPrototype(desc);
	if (pt == NULL)
	{
		LOG_ERROR("can`t not found message type stub for this desc, pb name: %s", desc->name().c_str())
		return NULL;
	}
	Message* m = pt->New();
	shared_ptr<Message> x;
	x.reset(m);
	return x;
}

shared_ptr<Message> XmsgImTrans::newPbMsg(const Descriptor* desc, uchar* dat, uint len)
{
	shared_ptr<Message> msg = XmsgImTrans::newPbMsg(desc);
	if (msg == nullptr)
		return nullptr;
	if (len < 1)
		return msg;
	if (msg->ParseFromArray(dat, len))
		return msg;
	LOG_ERROR("serialize message failed, name: %s", desc->name().c_str());
	return nullptr;
}

shared_ptr<Message> XmsgImTrans::newPbMsg(const string& name, uchar* dat, uint len)
{
	const Descriptor* desc = DescriptorPool::generated_pool()->FindMessageTypeByName(name);
	if (desc == NULL)
	{
		LOG_ERROR("can not found descriptor for name: %s", name.c_str());
		return NULL;
	}
	return XmsgImTrans::newPbMsg(desc, dat, len);
}

shared_ptr<Message> XmsgImTrans::newPbMsg(const string& name)
{
	const Descriptor* desc = DescriptorPool::generated_pool()->FindMessageTypeByName(name);
	if (desc == NULL)
	{
		LOG_ERROR("can not found descriptor for name: %s", name.c_str());
		return NULL;
	}
	return XmsgImTrans::newPbMsg(desc);
}

string XmsgImTrans::toString()
{
	shared_ptr<XscChannel> channel = this->xscChannel.lock();
	string str;
	SPRINTF_STRING(&str, "stid: %08X, dtid: %08X, begin(%s): %s, ret: %04X, desc: %s, end(%s): %s, uni(%s): %s, gts: %s, ets: %s, xsc-channel: %s", 
			this->stid,
			this->dtid,
			this->beginMsg == nullptr ? "null" : this->beginMsg->GetDescriptor()->name().c_str(),
			this->beginMsg == nullptr ? "null" : this->beginMsg->ShortDebugString().c_str(),
			this->ret,
			this->desc.c_str(),
			this->endMsg == nullptr ? "null" : this->endMsg->GetDescriptor()->name().c_str(),
			this->endMsg == nullptr ? "null" : this->endMsg->ShortDebugString().c_str(),
			this->uniMsg == nullptr ? "null" : this->uniMsg->GetDescriptor()->name().c_str(),
			this->uniMsg == nullptr ? "null" : this->uniMsg->ShortDebugString().c_str(),
			DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(this->gts).c_str(),
			DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(this->ets).c_str(),
			channel == nullptr ? "null" : channel->toString().c_str())
	return str;
}

XmsgImTrans::~XmsgImTrans()
{
	if (this->ooob != NULL)
	{
		delete this->ooob;
		this->ooob = NULL;
	}
	if (this->ioob != NULL)
	{
		delete this->ioob;
		this->ioob = NULL;
	}
}

