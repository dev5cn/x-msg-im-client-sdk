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

#ifndef RUDP_XSCRUDPCHANNEL_H_
#define RUDP_XSCRUDPCHANNEL_H_

#include <libxsc-proto.h>
#include "ikcp.h"
#include "../XscChannel.h"

#define XSC_RUDP_MTU																				0x10000		

class XscRudpChannel: public XscChannel
{
public:
	int sock; 
	int dlen; 
	uchar rbuf[XSC_RUDP_MTU]; 
	ikcpcb* kcp;
	mutex lock4sendCache; 
	volatile atomic_bool threadStarted; 
public:
	bool isOpen(); 
	uchar channelStatus(); 
	bool send(uchar* buf, int len); 
	void close(); 
	void closeSlient(); 
	void evnDida(ullong now); 
	bool evnTry(int tryTimes ); 
	void evnEstab(); 
	bool evnMsg(shared_ptr<XscProtoPdu> pdu); 
	bool evnClose(); 
	string toString();
public:
	static shared_ptr<XscRudpChannel> open(const char* host, int port, function<bool(int tryCount)> evnTry, function<void()> evnEstab, function<bool(shared_ptr<XscProtoPdu> pdu)> evnMsg, function<bool()> evnClose); 
	XscRudpChannel(int mtu);
	virtual ~XscRudpChannel();
private:
	function<bool(int tryCount)> __evnTry__; 
	function<void()> __evnEstab__; 
	function<bool(shared_ptr<XscProtoPdu> pdu)> __evnMsg__; 
	function<bool()> __evnClose__; 
	ullong lastHbTs; 
private:
	void svc(); 
	bool loop(); 
	bool evnRecv(); 
	int evnRecvBytes(uchar* dat, int len); 
	int connect(); 
	void heartbeat(ullong now); 
	void clear(); 
	void checkChannelRt(ullong now); 
	void createKcp(); 
	static int kcpOutput(const char* buf, int len, void* kcp, void* user); 
};

#endif 
