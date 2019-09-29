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

#include <libx-msg-im-client-core.h>
#include "XmsgImTransInitiative.h"

XmsgImTransInitiative::XmsgImTransInitiative()
{

}

void XmsgImTransInitiative::sendBegin()
{
	shared_ptr<XscProtoPdu> pdu(new XscProtoPdu());
	pdu->transm.trans = new XscProtoTransaction();
	pdu->transm.trans->trans = XSC_TAG_TRANS_BEGIN;
	pdu->transm.trans->partSeq = 0x00;
	pdu->transm.trans->haveNextPart = false;
	pdu->transm.trans->refDat = true;
	pdu->transm.trans->stid = this->stid;
	if (this->ooob != NULL)
	{
		if (pdu->transm.header == NULL)
			pdu->transm.header = new xsc_transmission_header();
		pdu->transm.header->oob = new xsc_transmission_header_oob();
		for (auto& it : this->ooob->kv)
			pdu->transm.header->oob->kv.push_back(it);
	}
	if (this->rawMsgReq != nullptr) 
	{
		pdu->transm.trans->msg = this->rawMsgReq->msg;
		pdu->transm.trans->dlen = this->rawMsgReq->dat.length();
		pdu->transm.trans->dat = (uchar*) this->rawMsgReq->dat.data(); 
		this->sendPdu(pdu);
		return;
	}
	string pb = this->beginMsg->SerializeAsString();
	pdu->transm.trans->msg = this->beginMsg->GetDescriptor()->name();
	pdu->transm.trans->dlen = pb.length();
	pdu->transm.trans->dat = pb.length() < 1 ? NULL : (uchar*) pb.data();
	this->sendPdu(pdu);
}

void XmsgImTransInitiative::sendUni()
{
	LOG_FAULT("incomplete.")
}

void XmsgImTransInitiative::end()
{
	auto t = static_pointer_cast<XmsgImTransInitiative>(this->sharedPtr());
	XmsgImClientCore::instance()->future([t]
	{
		if(!t->raw)
		{
			t->cb(t->ret, t->desc, t->endMsg);
			return;
		}
		t->cbRaw(t);
	});
}

XmsgImTransInitiative::~XmsgImTransInitiative()
{

}

