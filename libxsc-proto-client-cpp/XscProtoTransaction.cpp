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

#include "XscProtoTransaction.h"
#include "XscProtoDec.h"

XscProtoTransaction::XscProtoTransaction()
{
	this->trans = 0;
	this->partSeq = 0;
	this->haveNextPart = false;
	this->refDat = true;
	this->ret = 0;
	this->stid = 0;
	this->dtid = 0;
	this->dlen = 0;
	this->dat = NULL;
}

bool XscProtoTransaction::decode(uchar* dat, int len)
{
	xsc_tlv_node root;
	if (XscProtoDec::decode(dat, len, &root) != 0)
	{
		LOG_DEBUG("error: \n%s", Net::printHex2str(dat, len).c_str())
		return false;
	}
	this->trans = root.self.t;
	bool ret = false;
	switch (root.self.t)
	{
	case XSC_TAG_TRANS_BEGIN:
		ret = this->decodeBegin(&root);
		break;
	case XSC_TAG_TRANS_END:
		ret = this->decodeEnd(&root);
		break;
	case XSC_TAG_TRANS_UNIDIRECTION:
		ret = this->decodeUnidirection(&root);
		break;
	case XSC_TAG_TRANS_PARTIAL:
		ret = this->decodePartial(&root);
		break;
	default:
		LOG_DEBUG("unexpected XSC_TAG_TRANS: %04X", root.self.t)
		break;
	}
	XscProtoDec::free(&root);
	return ret;
}

bool XscProtoTransaction::decodeBegin(xsc_tlv_node* root)
{
	if (XscProtoDec::getInt(root, XSC_TAG_STID, &this->stid) != 0) 
	{
		LOG_DEBUG("missing required field: XSC_TAG_STID")
		return false;
	}
	uint mlen;
	uchar* msg = XscProtoDec::peekBin(root, XSC_TAG_MSG, &mlen); 
	if (msg == NULL)
	{
		LOG_DEBUG("missing required field: XSC_TAG_MSG")
		return false;
	}
	if (mlen > XSC_TRANS_PDU_MAX_MSG_NAME)
	{
		LOG_DEBUG("over the XSC_TRANS_PDU_MAX_MSG_NAME: %d", XSC_TRANS_PDU_MAX_MSG_NAME)
		return false;
	}
	uint dlen = 0;
	uchar* dat = XscProtoDec::peekBin(root, XSC_TAG_DAT, &dlen); 
	if (dlen > 0 && dat == NULL)
	{
		LOG_DEBUG("missing required field: XSC_TAG_DAT, dlen: %d", dlen)
		return false;
	}
	uchar part;
	if (XscProtoDec::getChar(root, XSC_TAG_HAVE_NEXT_PART, &part) == 0 && part == PRESENT)
	{
		uchar partSeq;
		if (XscProtoDec::getChar(root, XSC_TAG_SEQ, &partSeq) != 0)
		{
			LOG_DEBUG("missing required field: XSC_TAG_SEQ")
			return false;
		}
		this->haveNextPart = true;
		this->partSeq = partSeq;
		this->msg.assign((char*) msg, mlen);
		this->dlen = dlen;
		this->dat = dat;
		return true;
	}
	this->msg.assign((char*) msg, mlen);
	this->dlen = dlen;
	this->dat = dat;
	return true;
}

bool XscProtoTransaction::decodeEnd(xsc_tlv_node* root)
{
	if (XscProtoDec::getInt(root, XSC_TAG_DTID, &this->dtid) != 0)
	{
		LOG_DEBUG("missing required field: XSC_TAG_DTID")
		return false;
	}
	if (XscProtoDec::getShort(root, XSC_TAG_RET, &this->ret) != 0) 
		this->ret = RET_SUCCESS;
	uint desclen;
	uchar* desc = XscProtoDec::peekBin(root, XSC_TAG_DESC, &desclen);
	if (desc != NULL) 
	{
		if (desclen > XSC_TRANS_PDU_MAX_DESC_LEN)
		{
			LOG_DEBUG("error description too long, len: %d, desc: %s", desclen, Net::hex2strUperCase(desc, desclen).c_str())
			return false;
		}
		this->desc.assign((char*) desc, desclen);
	}
	uint dlen;
	uchar* dat = XscProtoDec::peekBin(root, XSC_TAG_DAT, &dlen);
	uint msglen;
	uchar* msg = XscProtoDec::peekBin(root, XSC_TAG_MSG, &msglen);
	if (dat != NULL && msg == NULL) 
	{
		LOG_DEBUG("missing required field: XSC_TAG_MSG")
		return false;
	}
	if (msg != NULL && msglen > XSC_TRANS_PDU_MAX_MSG_NAME) 
	{
		LOG_DEBUG("message name too long, XSC_TRANS_PDU_MAX_MSG_NAME: %d, len: %d, msg: %s", XSC_TRANS_PDU_MAX_MSG_NAME, msglen, Net::hex2strUperCase(msg, msglen).c_str())
		return false;
	}
	uchar part;
	if (XscProtoDec::getChar(root, XSC_TAG_HAVE_NEXT_PART, &part) == 0 && part == PRESENT)
	{
		LOG_FAULT("i`s a bug, incomplete")
		return false;
	}
	if (msg != NULL)
		this->msg.assign((char*) msg, msglen);
	if (dat != NULL)
	{
		this->dat = dat;
		this->dlen = dlen;
	}
	return true;
}

bool XscProtoTransaction::decodeUnidirection(xsc_tlv_node* root)
{
	uint dlen;
	uchar* dat = XscProtoDec::peekBin(root, XSC_TAG_DAT, &dlen);
	uint msglen;
	uchar* msg = XscProtoDec::peekBin(root, XSC_TAG_MSG, &msglen);
	if (dat != NULL && msg == NULL) 
	{
		LOG_DEBUG("missing required field: XSC_TAG_MSG")
		return false;
	}
	if (msg != NULL && dat == NULL) 
	{
		LOG_DEBUG("missing required field: XSC_TAG_DAT")
		return false;
	}
	if (msg != NULL && msglen > XSC_TRANS_PDU_MAX_MSG_NAME) 
	{
		LOG_DEBUG("message name too long, XSC_TRANS_PDU_MAX_MSG_NAME: %d, len: %d, msg: %s", XSC_TRANS_PDU_MAX_MSG_NAME, msglen, Net::hex2strUperCase(msg, msglen).c_str())
		return false;
	}
	uchar part;
	if (XscProtoDec::getChar(root, XSC_TAG_HAVE_NEXT_PART, &part) == 0 && part == PRESENT)
	{
		LOG_FAULT("i`s a bug, incomplete")
		return false;
	}
	if (msg != NULL)
		this->msg.assign((char*) msg, msglen);
	if (dat != NULL)
	{
		this->dat = dat;
		this->dlen = dlen;
	}
	return true;
}

bool XscProtoTransaction::decodePartial(xsc_tlv_node* root)
{
	return true;
}

void XscProtoTransaction::encodeBegin(XscProtoTransaction* trans, xsc_tlv_pdu* xtp)
{
	XscProtoTransaction::encodeBegin(trans->stid, trans->msg, trans->dat, trans->dlen, xtp);
}

void XscProtoTransaction::encodeBegin(uint stid, const string& msg, uchar* dat, int len, xsc_tlv_pdu* xtp)
{
	if (len > 0)
		XscProtoEnc::addBin(xtp, XSC_TAG_DAT, dat, len);
	XscProtoEnc::addBin(xtp, XSC_TAG_MSG, (uchar*) msg.data(), msg.length());
	XscProtoEnc::addInt(xtp, XSC_TAG_STID, stid);
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANS_BEGIN);
}

void XscProtoTransaction::encodeEnd(XscProtoTransaction* trans, xsc_tlv_pdu* xtp)
{
	XscProtoTransaction::encodeEnd(trans->dtid, trans->ret, trans->desc, trans->msg.empty() ? NULL : &trans->msg, trans->dat, trans->dlen, xtp);
}

void XscProtoTransaction::encodeEnd(uint dtid, ushort ret, const string& desc, const string* msg, uchar* dat, int len, xsc_tlv_pdu* xtp)
{
	if (len > 0)
		XscProtoEnc::addBin(xtp, XSC_TAG_DAT, dat, len);
	if (msg != NULL)
		XscProtoEnc::addBin(xtp, XSC_TAG_MSG, (uchar*) msg->c_str(), msg->length());
	if (!desc.empty())
		XscProtoEnc::addBin(xtp, XSC_TAG_DESC, (uchar*) desc.data(), desc.length());
	if (ret != RET_SUCCESS) 
		XscProtoEnc::addShort(xtp, XSC_TAG_RET, ret);
	XscProtoEnc::addInt(xtp, XSC_TAG_DTID, dtid);
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANS_END);
}

void XscProtoTransaction::encodeUnidirection(XscProtoTransaction* trans, xsc_tlv_pdu* xtp)
{
	if (trans->dlen > 0)
		XscProtoEnc::addBin(xtp, XSC_TAG_DAT, trans->dat, trans->dlen);
	XscProtoEnc::addBin(xtp, XSC_TAG_MSG, (uchar*) trans->msg.c_str(), trans->msg.length());
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANS_UNIDIRECTION);
}

xsc_tlv_pdu* XscProtoTransaction::encodeBeginWithPart(uint stid, const string& msg, uchar* dat, int len)
{
	int size = msg.length() + len + XSC_TRANS_PDU_RESERVED;
	xsc_tlv_pdu* xtp = XscProtoEnc::newXscTlvPdu(size);
	XscProtoEnc::addBin(xtp, XSC_TAG_DAT, dat, len);
	XscProtoEnc::addBin(xtp, XSC_TAG_MSG, (uchar*) msg.data(), msg.length());
	XscProtoEnc::addChar(xtp, XSC_TAG_HAVE_NEXT_PART, PRESENT);
	XscProtoEnc::addInt(xtp, XSC_TAG_STID, stid);
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANS_BEGIN);
	return xtp;
}

xsc_tlv_pdu* XscProtoTransaction::encodePartial(uint tid, uchar* dat, uint len, bool haveNext)
{
	int size = len + XSC_TRANS_PDU_RESERVED;
	xsc_tlv_pdu* xtp = XscProtoEnc::newXscTlvPdu(size);
	XscProtoEnc::addBin(xtp, XSC_TAG_DAT, dat, len);
	if (haveNext)
		XscProtoEnc::addChar(xtp, XSC_TAG_HAVE_NEXT_PART, RET_PRESENT);
	XscProtoEnc::addInt(xtp, XSC_TAG_TID, tid);
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANS_PARTIAL);
	return xtp;
}

XscProtoTransaction::~XscProtoTransaction()
{
	if (!this->refDat)
		::free(this->dat);
}

