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

#ifndef XSC_PROTO_XSCPROTO_H_
#define XSC_PROTO_XSCPROTO_H_

#include <libmisc.h>

typedef struct
{
	uchar t; 
	uint l; 
	uchar* v; 
} xsc_tlv;

typedef struct
{
	int len; 
	int rm; 
	int p; 
	uchar* buff;
} xsc_tlv_pdu; 

#define XSC_TAG_TRANSM_PING																		0x80		
#define XSC_TAG_TRANSM_PONG																		0xC0		
#define XSC_TAG_TRANSM_HEADER																	0xC1		
#define XSC_TAG_TRANSM_SECURITY																	0xC4		
#define XSC_TAG_TRANSM_OOB																		0xC6		
#define XSC_TAG_TRANS_BEGIN																		0x60		
#define XSC_TAG_TRANS_END																		0x61		
#define XSC_TAG_TRANS_UNIDIRECTION																0x66		
#define XSC_TAG_TRANS_PARTIAL																	0x67		

#define XSC_TAG_STID																				0x00		
#define XSC_TAG_DTID																				0x01		
#define XSC_TAG_TID																				0x02		
#define XSC_TAG_UID																				0x03		
#define XSC_TAG_SID																				0x04		
#define XSC_TAG_MSG																				0x05		
#define XSC_TAG_RET																				0x06		
#define XSC_TAG_DAT																				0x07		
#define XSC_TAG_SNE																				0x08		
#define XSC_TAG_MNE																				0x09		
#define XSC_TAG_DNE																				0x0A		
#define XSC_TAG_HAVE_NEXT_PART																	0x0B		
#define XSC_TAG_SEQ																				0x0C		
#define XSC_TAG_ACTION																			0x0D		
#define XSC_TAG_DESC																				0x0E		
#define XSC_TAG_QOS																				0x0F		
#define XSC_TAG_ALG																				0x10		
#define XSC_TAG_CHECKSUM																			0x11		
#define XSC_TAG_TRACE_ID																			0x12		
#define XSC_TAG_SPAWN_ID																			0x13		
#define XSC_TAG_P_SPAWN_ID  																	0x14		
#define XSC_TAG_TS																				0x15		
#define XSC_TAG_GTS																				0x16		
#define XSC_TAG_UTS																				0x17		
#define XSC_TAG_PLATFORM																			0x18		
#define XSC_TAG_CGT																				0x19		
#define XSC_TAG_INTERCEPT																		0x1A		
#define XSC_TAG_CLIENT_OOB																		0x1B		
#define XSC_TAG_DEVICE_ID																		0x1C		
#define RET_SUCCESS																				0x0000		
#define RET_FAILURE																				0x0001		
#define RET_INVALID																				0x0002		
#define RET_PRESENT																				0x0003		
#define RET_NOT_PRESENT																			0x0004		
#define RET_EXCEPTION																			0x0005		
#define RET_NOT_FOUND																			0x0006		
#define RET_TIME_OUT																				0x0007		
#define RET_FORBIDDEN																			0x0008		
#define RET_FORMAT_ERROR																			0x0009		
#define RET_MISSING_PARAMETER																	0x000A		
#define RET_UNSUPPORTED																			0x000B		
#define RET_NO_AUTH																				0x000C		
#define RET_NO_PERMISSION																		0x000D		
#define RET_NO_RECORD																			0x000E		
#define RET_OVER_LIMIT																			0x000F		
#define RET_DUPLICATE_OPER																		0x0010		
#define RET_UPDATE																				0x0011		
#define RET_NOT_UPDATE																			0x0012		
#define RET_ROUTE_FAILED																			0x0013		
#define RET_CONNECTION_DISC																		0x0014		
#define RET_USR_OR_PASSWORD_ERROR																0x0015		
#define RET_USR_DEFINED																			0x0100		

class XscProto
{
public:
	static const char* tagDesc(ushort t); 
	static uchar tlvLen(uint len); 
private:
	XscProto();
	virtual ~XscProto();
};

#include "XscProtoEnc.h"
#include "XscProtoDec.h"

#endif 
