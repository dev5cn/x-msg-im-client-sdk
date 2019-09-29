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

#ifndef XSC_PROTO_XSCPROTOENC_H_
#define XSC_PROTO_XSCPROTOENC_H_

#include "XscProto.h"

class XscProtoEnc
{
public:
	static void addChar(xsc_tlv_pdu* xtp, uchar t, uchar v); 
	static void addStr(xsc_tlv_pdu* xtp, uchar t, const char* v); 
	static void addShort(xsc_tlv_pdu* xtp, uchar t, ushort v); 
	static void addInt(xsc_tlv_pdu* xtp, uchar t, uint v); 
	static void addLong(xsc_tlv_pdu* xtp, uchar t, ullong v); 
	static void addBin(xsc_tlv_pdu* xtp, uchar t, uchar* v, uint l); 
	static void addTag(xsc_tlv_pdu* xtp, uchar t); 
	static uchar* take(xsc_tlv_pdu* xtp, uint* len); 
	static void setPoint(xsc_tlv_pdu* xtp); 
	static void addTag4Point(xsc_tlv_pdu* xtp, uchar t); 
	static void reset(xsc_tlv_pdu* xtp); 
	static xsc_tlv_pdu* newXscTlvPdu(int size); 
	static void freeXscTlvPdu(xsc_tlv_pdu* xtp); 
private:
	static void __addTag__(xsc_tlv_pdu* xtp, uchar t, uint len);
	XscProtoEnc();
	virtual ~XscProtoEnc();
};

#endif 
