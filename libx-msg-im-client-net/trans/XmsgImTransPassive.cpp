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

#include "XmsgImTransPassive.h"

XmsgImTransPassive::XmsgImTransPassive()
{

}

void XmsgImTransPassive::endDesc(ushort ret, const char* fmt, ...)
{
	this->ret = ret;
	if (fmt != NULL)
	{
#ifdef WINDOWS
	va_list va;
	va_start(va, fmt);
	int need = vsnprintf(NULL, 0, fmt, va);
	char* str = (char*) calloc(1, need + 1);
	vsnprintf(str, need + 1, fmt, va);
	va_end(va);
#else
		char* str;
		va_list va;
		::va_start(va, fmt);
		::vasprintf(&str, fmt, va);
		va_end(va);
#endif
		this->desc.assign(str);
		::free(str);
	}
	this->end();
}

void XmsgImTransPassive::end(shared_ptr<Message> end)
{
	this->ret = RET_SUCCESS;
	this->endMsg = end;
	this->end();
}

void XmsgImTransPassive::end(ushort ret)
{
	this->ret = ret;
	this->end();
}

void XmsgImTransPassive::endRaw(shared_ptr<x_msg_im_trans_raw_msg> rawMsg)
{
	this->ret = RET_SUCCESS;
	this->rawMsgRsp = rawMsg;
	this->end();
}

void XmsgImTransPassive::success()
{
	this->end(RET_SUCCESS);
}

void XmsgImTransPassive::failure()
{
	this->end(RET_FAILURE);
}

void XmsgImTransPassive::end()
{
	shared_ptr<XscProtoPdu> pdu(new XscProtoPdu());
	if (this->ooob != NULL)
	{
		if (pdu->transm.header == NULL)
			pdu->transm.header = new xsc_transmission_header();
		pdu->transm.header->oob = new xsc_transmission_header_oob();
		for (auto& it : this->ooob->kv)
			pdu->transm.header->oob->kv.push_back(it);
	}
	pdu->transm.trans = new XscProtoTransaction();
	pdu->transm.trans->trans = XSC_TAG_TRANS_END;
	pdu->transm.trans->partSeq = 0x00;
	pdu->transm.trans->haveNextPart = false;
	pdu->transm.trans->refDat = true;
	pdu->transm.trans->stid = 0x00;
	pdu->transm.trans->dtid = this->dtid;
	pdu->transm.trans->ret = this->ret;
	pdu->transm.trans->desc = this->desc;
	if (this->rawMsgRsp != nullptr) 
	{
		pdu->transm.trans->msg = this->rawMsgRsp->msg;
		pdu->transm.trans->dlen = this->rawMsgRsp->dat.length();
		pdu->transm.trans->dat = (uchar*) this->rawMsgRsp->dat.data(); 
		this->sendPdu(pdu);
		return;
	}
	if (this->endMsg == nullptr)
	{
		this->sendPdu(pdu);
		return;
	}
	string pb = this->endMsg->SerializeAsString();
	pdu->transm.trans->msg = this->endMsg->GetDescriptor()->name();
	pdu->transm.trans->dlen = pb.length();
	pdu->transm.trans->dat = (uchar*) pb.data();
	this->sendPdu(pdu);
}

XmsgImTransPassive::~XmsgImTransPassive()
{

}

