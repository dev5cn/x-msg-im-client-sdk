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

#include "XscProtoEnc.h"

static const uchar __XSC_LEN_0xFE__ = 0xFE;
static const uchar __XSC_LEN_0xFF__ = 0xFF;

XscProtoEnc::XscProtoEnc()
{

}

void XscProtoEnc::addChar(xsc_tlv_pdu* xtp, uchar t, uchar v)
{
	XscProtoEnc::addBin(xtp, t, &v, 1);
}

void XscProtoEnc::addStr(xsc_tlv_pdu* xtp, uchar t, const char* v)
{
	XscProtoEnc::addBin(xtp, t, (uchar*) v, ::strlen(v));
}

void XscProtoEnc::addShort(xsc_tlv_pdu* xtp, uchar t, ushort v)
{
	ushort x = ::htons(v);
	XscProtoEnc::addBin(xtp, t, (uchar*) &x, sizeof(ushort));
}

void XscProtoEnc::addInt(xsc_tlv_pdu* xtp, uchar t, uint v)
{
	uint x = ::htonl(v);
	XscProtoEnc::addBin(xtp, t, (uchar*) &x, sizeof(uint));
}

void XscProtoEnc::addLong(xsc_tlv_pdu* xtp, uchar t, ullong v)
{
	ullong n = Net::htonll(v);
	XscProtoEnc::addBin(xtp, t, (uchar*) &n, sizeof(ullong));
}

void XscProtoEnc::addBin(xsc_tlv_pdu* xtp, uchar t, uchar* v, uint l)
{
	uchar ll = XscProto::tlvLen(l);
	xtp->rm -= (ll + 1 + l);
	::memcpy(xtp->buff + xtp->rm, &t, 1);
	if (ll == 1)
	{
		uchar len = (uchar) l;
		::memcpy(xtp->buff + xtp->rm + 1, &len, 1);
	} else if (ll == 3)
	{
		ushort len = htons(l);
		xtp->buff[xtp->rm + 1] = __XSC_LEN_0xFE__;
		::memcpy(xtp->buff + xtp->rm + 1 + 1, &len, 2);
	} else if (ll == 5)
	{
		uint len = htonl(l);
		xtp->buff[xtp->rm + 1] = __XSC_LEN_0xFF__;
		::memcpy(xtp->buff + xtp->rm + 1 + 1, &len, 4);
	}
	::memcpy(xtp->buff + xtp->rm + 1 + ll, v, l);
}

void XscProtoEnc::addTag(xsc_tlv_pdu* xtp, uchar t)
{
	XscProtoEnc::__addTag__(xtp, t, xtp->len - xtp->rm);
}

uchar* XscProtoEnc::take(xsc_tlv_pdu* xtp, uint* len)
{
	*len = xtp->len - xtp->rm;
	return xtp->buff + xtp->rm;
}

void XscProtoEnc::setPoint(xsc_tlv_pdu* xtp)
{
	xtp->p = xtp->rm;
}

void XscProtoEnc::addTag4Point(xsc_tlv_pdu* xtp, uchar t)
{
	XscProtoEnc::__addTag__(xtp, t, xtp->p - xtp->rm);
}

void XscProtoEnc::__addTag__(xsc_tlv_pdu* xtp, uchar t, uint len)
{
	uchar ll = XscProto::tlvLen(len);
	xtp->rm -= (ll + 1);
	::memcpy(xtp->buff + xtp->rm, &t, 1);
	if (ll == 1)
	{
		uchar x = (uchar) len;
		::memcpy(xtp->buff + xtp->rm + 1, &x, 1);
	} else if (ll == 3)
	{
		ushort x = htons(len);
		xtp->buff[xtp->rm + 1] = __XSC_LEN_0xFE__;
		::memcpy(xtp->buff + xtp->rm + 1 + 1, &x, 2);
	} else if (ll == 5)
	{
		uint x = ::htonl(len);
		xtp->buff[xtp->rm + 1] = __XSC_LEN_0xFF__;
		::memcpy(xtp->buff + xtp->rm + 1 + 1, &x, 4);
	}
}

void XscProtoEnc::reset(xsc_tlv_pdu* xtp)
{
	xtp->rm = xtp->len;
}

xsc_tlv_pdu* XscProtoEnc::newXscTlvPdu(int size)
{
	xsc_tlv_pdu* pdu = (xsc_tlv_pdu*) ::malloc(sizeof(xsc_tlv_pdu));
	pdu->len = size;
	pdu->rm = size;
	pdu->p = 0;
	pdu->buff = (uchar*) ::malloc(size);
	return pdu;
}

void XscProtoEnc::freeXscTlvPdu(xsc_tlv_pdu* xtp)
{
	::free(xtp->buff);
	::free(xtp);
}

XscProtoEnc::~XscProtoEnc()
{

}

