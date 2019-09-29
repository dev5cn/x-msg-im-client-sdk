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

#ifndef XMSGIMAUTHNE_H_
#define XMSGIMAUTHNE_H_

#include "XmsgImClientNetApi.h"
#include "trans/XmsgImTransInitiative.h"

class XmsgImAuthNe
{
public:
	static bool openXscChannel(shared_ptr<XmsgImClientNetApi> netApi);
	static void future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, shared_ptr<string> oob); 
	static void future(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<x_msg_im_trans_raw_msg> rawMsg, function<void(SptrXiti itrans)> cb, shared_ptr<string> oob); 
private:
	static bool evnTry(shared_ptr<XmsgImClientNetApi> netApi, int tryTimes); 
	static void evnEstab(shared_ptr<XmsgImClientNetApi> netApi); 
	static bool evnMsg(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<XscProtoPdu> pdu); 
	static bool evnClose(shared_ptr<XmsgImClientNetApi> netApi); 
	static void intercept(shared_ptr<XmsgImClientNetApi> netApi, SptrXiti trans); 
	XmsgImAuthNe();
	virtual ~XmsgImAuthNe();
};

#endif 
