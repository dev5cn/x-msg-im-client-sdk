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

#ifndef XSC_PROTO_XSCPROTODEC_H_
#define XSC_PROTO_XSCPROTODEC_H_

#include "XscProto.h"

typedef struct xsc_tlv_node
{
	xsc_tlv self;
	struct xsc_tlv_node* s;
	struct xsc_tlv_node* c;
} xsc_tlv_node; 

class XscProtoDec
{
public:
	static int decode(uchar* dat, uint size, xsc_tlv_node* node); 
	static int getBin(xsc_tlv_node* node, ushort t, uchar* v, uint max); 
	static uchar* peekBin(xsc_tlv_node* node, ushort t, uint* len); 
	static int getChar(xsc_tlv_node* node, ushort t, uchar* v); 
	static int getStr(xsc_tlv_node* node, ushort t, char* str, uint max); 
	static int getShort(xsc_tlv_node* node, ushort t, ushort* v); 
	static int getInt(xsc_tlv_node* node, ushort t, uint* v); 
	static int getLong(xsc_tlv_node* node, ushort t, ullong* v); 
	static int getNode(xsc_tlv_node* node, ushort t, xsc_tlv_node** c); 
	static int getFirstChild(xsc_tlv_node* node, xsc_tlv_node** c); 
	static int getNextSibling(xsc_tlv_node* node, xsc_tlv_node** s); 
	static void free(xsc_tlv_node* root); 
	static void printNode(xsc_tlv_node* node); 
	static string printNode2str(xsc_tlv_node* node); 
	static void printf(uchar* dat, uint size); 
	static void printPdu(xsc_tlv_pdu* pdu); 
	static string print2str(uchar* data, uint size); 
	static string printPdu2str(xsc_tlv_pdu* pdu); 
	static int genTl(uchar* dat, uint size, uchar* ll, uint* l); 
private:
	static int searchS(xsc_tlv_node* node, ushort tag, xsc_tlv_node** s); 
	static int searchC(xsc_tlv_node* node, ushort tag, xsc_tlv_node** c); 
	static int __decode__(uchar* dat, uint size, xsc_tlv_node* node);
	static void __print__(xsc_tlv_node* node, string* buff, int space);
	XscProtoDec();
	virtual ~XscProtoDec();
};

#endif 
