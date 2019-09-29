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

#ifndef XSC_PROTO_XSCPROTOTRANSACTION_H_
#define XSC_PROTO_XSCPROTOTRANSACTION_H_

#include "XscProtoDec.h"

#define XSC_TRANS_PDU_RESERVED														0x20		
#define XSC_TRANS_PDU_MAX_MSG_NAME													0x40		
#define XSC_TRANS_PDU_MAX_DESC_LEN													0x200		

class XscProtoTransaction
{
public:
	uchar trans; 
	uchar partSeq; 
	bool haveNextPart; 
	bool refDat; 
	uint stid; 
	uint dtid; 
	uint dlen; 
	uchar* dat; 
	string msg; 
	ushort ret; 
	string desc; 
public:
	bool decode(uchar* dat, int len); 
	XscProtoTransaction();
	virtual ~XscProtoTransaction();
private:
	bool decodeBegin(xsc_tlv_node* root); 
	bool decodeEnd(xsc_tlv_node* root); 
	bool decodeUnidirection(xsc_tlv_node* root); 
	bool decodePartial(xsc_tlv_node* root); 
public:
	static void encodeBegin(XscProtoTransaction* trans, xsc_tlv_pdu* xtp); 
	static void encodeBegin(uint stid, const string& msg, uchar* dat, int len, xsc_tlv_pdu* xtp); 
	static void encodeEnd(XscProtoTransaction* trans, xsc_tlv_pdu* xtp); 
	static void encodeEnd(uint dtid, ushort ret, const string& desc, const string* msg, uchar* dat, int len, xsc_tlv_pdu* xtp); 
	static void encodeUnidirection(XscProtoTransaction* trans, xsc_tlv_pdu* xtp); 
	static xsc_tlv_pdu* encodeBeginWithPart(uint stid, const string& msg, uchar* dat, int len); 
	static xsc_tlv_pdu* encodePartial(uint tid, uchar* dat, uint len, bool haveNext); 
};

#endif 
