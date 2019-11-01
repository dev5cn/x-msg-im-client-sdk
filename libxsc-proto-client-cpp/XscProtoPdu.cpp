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

#include "XscProtoPdu.h"

thread_local uchar __pdu_bytes__[XSC_TRANSM_MTU]; 

XscProtoPdu::XscProtoPdu()
{

}

shared_ptr<XscProtoPdu> XscProtoPdu::decode(uchar* dat, int len, bool* exp )
{
	if (dat[0] & 0x80) 
	{
		if (dat[0] != 0x80 && dat[0] != 0xC0)
		{
			LOG_DEBUG("should be PING/PONG PDU, dat: %s", Net::printHex2str(dat, len).c_str())
			*exp = true;
			return nullptr;
		}
		shared_ptr<XscProtoPdu> pdu(new XscProtoPdu());
		pdu->transm.indicator = dat[0];
		pdu->transm.len = 1;
		return pdu;
	}
	if (len < 1 + 1 + 3 ) 
	{
		*exp = false;
		return nullptr;
	}
	uchar length = (dat[0] >> 1) & 0x03; 
	uchar lenlen = 0; 
	int pduLen = 0; 
	if (length == 0x00) 
	{
		pduLen = dat[1];
		if (pduLen < 1 + 1 + 3 ) 
		{
			LOG_DEBUG("xsc pdu length must be >= 5 bytes")
			*exp = true;
			return nullptr;
		}
		if (pduLen > len) 
		{
			*exp = false;
			return nullptr;
		}
		lenlen = 1;
		goto DECODE;
	}
	if (length == 0x01) 
	{
		pduLen = ::ntohs(*((ushort*) (dat + 1)));
		if (pduLen < 1 + 2 + 3) 
		{
			LOG_DEBUG("xsc pdu length must be >= 6 bytes")
			*exp = true;
			return nullptr;
		}
		if (pduLen > len) 
		{
			*exp = false;
			return nullptr;
		}
		lenlen = 2;
		goto DECODE;
	}
	LOG_DEBUG("unsupported over 2 bytes length field")
	*exp = true;
	return nullptr;
	DECODE: 
	shared_ptr<XscProtoPdu> pdu(new XscProtoPdu());
	pdu->transm.indicator = dat[0];
	pdu->transm.len = pduLen;
	if (pdu->transm.decode(dat, pdu->transm.len, lenlen ))
		return pdu;
	*exp = true;
	return nullptr;
}

uchar* XscProtoPdu::bytes(int* len)
{
	if (this->transm.indicator & XSC_TAG_TRANSM_PING)
	{
		*len = 1;
		__pdu_bytes__[0] = this->transm.indicator;
		return __pdu_bytes__;
	}
	xsc_tlv_pdu xtp;
	xtp.len = XSC_TRANSM_MTU - 5 ;
	xtp.rm = XSC_TRANSM_MTU - 5;
	xtp.p = 0;
	xtp.buff = __pdu_bytes__ + 5;
	if (this->transm.trans->trans == XSC_TAG_TRANS_BEGIN)
		XscProtoTransaction::encodeBegin(this->transm.trans, &xtp);
	else if (this->transm.trans->trans == XSC_TAG_TRANS_END)
		XscProtoTransaction::encodeEnd(this->transm.trans, &xtp);
	else if (this->transm.trans->trans == XSC_TAG_TRANS_UNIDIRECTION)
		XscProtoTransaction::encodeUnidirection(this->transm.trans, &xtp);
	else
	{
		LOG_FAULT("it`s a bug, code incomplete")
		return NULL;
	}
	uint sizet;
	XscProtoEnc::take(&xtp, &sizet);
	uint sizeh = 0;
	if (this->transm.header != NULL)
	{
		xsc_tlv_pdu xtph;
		xtph.len = xtp.len - sizet;
		xtph.rm = xtp.len - sizet;
		xtph.p = 0;
		xtph.buff = xtp.buff;
		XscProtoTransmission::encodeHeader(this->transm.header, &xtph);
		XscProtoEnc::take(&xtph, &sizeh);
	}
	int lenlen = XscProtoTransmission::calLength(1 + sizeh + sizet);
	int size = 1 + lenlen + sizeh + sizet ;
	int ofset = 0;
	if (lenlen == 1)
	{
		ofset = XSC_TRANSM_MTU - sizeh - sizet - 2 ;
		__pdu_bytes__[ofset] = this->transm.header == NULL ? 0x00 : 0x01 ;
		__pdu_bytes__[ofset + 1] = (uchar) size;
	} else if (lenlen == 2)
	{
		ofset = XSC_TRANSM_MTU - sizeh - sizet - 3 ;
		__pdu_bytes__[ofset] = this->transm.header == NULL ? 0x02 : 0x03 ;
		ushort x = ::htons((ushort) size);
		::memcpy(__pdu_bytes__ + ofset + 1, (uchar*) &x, 2);
	} else if (lenlen == 3)
	{
		ofset = XSC_TRANSM_MTU - sizeh - sizet - 4 ;
		__pdu_bytes__[ofset] = this->transm.header == NULL ? 0x04 : 0x05 ;
		uint x = ::htonl(size);
		::memcpy(__pdu_bytes__ + ofset + 1, ((uchar*) &x) + 1, 3);
	} else if (lenlen == 4)
	{
		ofset = XSC_TRANSM_MTU - sizeh - sizet - 5 ;
		__pdu_bytes__[ofset] = this->transm.header == NULL ? 0x06 : 0x07 ;
		uint x = ::htonl(size);
		::memcpy(__pdu_bytes__ + ofset + 1, ((uchar*) &x), 4);
	} else
	{
		LOG_FAULT("it`s a bug, lenlen: %d", lenlen)
	}
	*len = size;
	return __pdu_bytes__ + ofset;
}

void XscProtoPdu::takeoffHeader(bool oob)
{
	if (this->transm.header == NULL)
		return;
	if (this->transm.header->oob != NULL && oob)
	{
		delete this->transm.header->oob;
		this->transm.header->oob = NULL;
	}
	if (this->transm.header->security != NULL || this->transm.header->oob != NULL)
		return;
	delete this->transm.header;
	this->transm.header = NULL;
}

string XscProtoPdu::print(uchar* dat, int len)
{
	uchar length = (dat[0] >> 1) & 0x03; 
	uchar lenlen = 0; 
	if (!(dat[0] & 0x80)) 
	{
		if (length == 0x00)
			lenlen = 1;
		else if (length == 0x01)
			lenlen = 2;
		else if (length == 0x02)
			lenlen = 3;
		else if (length == 0x03)
			lenlen = 4;
	}
	int headerLen = this->transm.header == NULL ? 0 : this->transm.header->len;
	string str = Net::printHex2str(dat, len);
	SPRINTF_STRING(&str, "\nindicator: %02X, len: %08X\n", this->transm.indicator, this->transm.len)
	if (this->transm.header != NULL)
	{
		SPRINTF_STRING(&str, "header: \n%s\n", XscProtoDec::print2str(dat + 1 + lenlen, headerLen).c_str())
	} else
	{
		SPRINTF_STRING(&str, "header: NULL\n")
	}
	if (this->transm.trans != NULL)
	{
		SPRINTF_STRING(&str, "transaction: \n%s\n", XscProtoDec::print2str(dat + 1 + lenlen + headerLen, len - 1 - lenlen - headerLen).c_str())
	} else
	{
		SPRINTF_STRING(&str, "transaction: NULL\n")
	}
	return str;
}

string XscProtoPdu::toString()
{
	int len;
	uchar* dat = this->bytes(&len);
	return this->print(dat, len);
}

XscProtoPdu::~XscProtoPdu()
{

}

