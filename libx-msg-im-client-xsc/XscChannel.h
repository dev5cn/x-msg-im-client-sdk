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

#ifndef XSCCHANNEL_H_
#define XSCCHANNEL_H_

#include <libxsc-proto.h>
#include "XscChannelTrans.h"

class XscChannel
{
public:
#define XSC_CHANNEL_STATUS_TRY															0x01		
#define XSC_CHANNEL_STATUS_ESTABLISHED													0x02		
#define XSC_CHANNEL_STATUS_LOST															0x03		
	uchar status; 
	bool exec; 
	string addr; 
public:
	int getMtu(); 
	uint genTid(); 
	string getAddress(); 
	void setAddress(const char* addr); 
	void putInitTrans(shared_ptr<XscChannelTrans> trans); 
	void putPassTrans(shared_ptr<XscChannelTrans> trans); 
	shared_ptr<XscChannelTrans> removeInitTrans(uint stid); 
	shared_ptr<XscChannelTrans> removePassTrans(uint stid); 
	void checkTimeoutInitTrans(ullong now , int sec ); 
	void checkTimeoutPassTrans(ullong now , int sec ); 
	void stop(); 
	void clear(); 
	XscChannel(int mtu);
	virtual ~XscChannel();
public:
	virtual bool isOpen() = 0; 
	virtual uchar channelStatus() = 0; 
	virtual bool send(uchar* buf, int len) = 0; 
	virtual void close() = 0; 
	virtual void closeSlient() = 0; 
	virtual void evnDida(ullong now) = 0; 
	virtual bool evnTry(int tryTimes ) = 0; 
	virtual void evnEstab() = 0; 
	virtual bool evnMsg(shared_ptr<XscProtoPdu> pdu) = 0; 
	virtual bool evnClose() = 0; 
	virtual string toString() = 0;
private:
	int mtu; 
	ullong lastCheckInitTransTs; 
	atomic_int tidGen; 
	unordered_map<uint , shared_ptr<XscChannelTrans>> initTrans; 
	unordered_map<uint , shared_ptr<XscChannelTrans>> passTrans; 
	mutex initTransMutex; 
	mutex passTransMutex; 
};

#endif 
