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

#ifndef XMSGIMTRANS_H_
#define XMSGIMTRANS_H_

#include <libx-msg-im-client-pb.h>
#include <libx-msg-im-client-xsc.h>

typedef struct
{
	string msg; 
	string dat; 
} x_msg_im_trans_raw_msg; 

class XmsgImTrans: public XscChannelTrans
{
public:
	weak_ptr<XscChannel> xscChannel; 
	shared_ptr<Message> beginMsg; 
	shared_ptr<Message> endMsg; 
	shared_ptr<Message> uniMsg; 
	shared_ptr<x_msg_im_trans_raw_msg> rawMsgReq; 
	shared_ptr<x_msg_im_trans_raw_msg> rawMsgRsp; 
	xsc_transmission_header_oob* ooob; 
	xsc_transmission_header_oob* ioob; 
	bool raw; 
public:
	void sendPdu(shared_ptr<XscProtoPdu> pdu); 
	void addOoob(shared_ptr<string> oob); 
	string toString();
	XmsgImTrans();
	virtual ~XmsgImTrans() = 0;
public:
	static shared_ptr<Message> newPbMsg(const Descriptor* desc); 
	static shared_ptr<Message> newPbMsg(const Descriptor* desc, uchar* dat, uint len); 
	static shared_ptr<Message> newPbMsg(const string& name, uchar* dat, uint len); 
	static shared_ptr<Message> newPbMsg(const string& name); 
};

#endif 
