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

#ifndef XSC_PROTO_XSCPROTOTRANSMISSION_H_
#define XSC_PROTO_XSCPROTOTRANSMISSION_H_

#include "XscProtoTransaction.h"

#define XSC_TRANSM_MTU																					0x10000	

typedef struct
{
#define XSC_TRANSM_SECURITY_ALG_CRC32																	0x01		
	uchar checkSumAlg; 
	uint checkSumVal; 
} xsc_transmission_header_security; 

typedef struct
{
	list<pair<uchar, string>> kv; 
} xsc_transmission_header_oob; 

typedef struct
{
	int len; 
	xsc_transmission_header_security* security; 
	xsc_transmission_header_oob* oob; 
} xsc_transmission_header; 

class XscProtoTransmission
{
public:
	uchar indicator; 
	int len; 
	xsc_transmission_header* header; 
	XscProtoTransaction* trans; 
public:
	bool decode(uchar* dat, int len, uchar lenlen ); 
	void addOob(uchar tag, const string& val); 
	bool getOob(uchar tag, string& val); 
	bool haveOob(uchar tag); 
	XscProtoTransmission();
	virtual ~XscProtoTransmission();
private:
	bool decodeHeader(uchar* dat, int len, uchar lenlen ); 
	void decodeHeaderOpt(xsc_tlv_node* root); 
public:
	static void encodeHeader(const xsc_transmission_header* header, xsc_tlv_pdu* pdu); 
	static void freeHeader(xsc_transmission_header* header); 
	static int calLength(int len ); 
};

#endif 
