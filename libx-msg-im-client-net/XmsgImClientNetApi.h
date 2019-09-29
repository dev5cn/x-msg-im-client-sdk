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

#ifndef XMSGIMCLIENTNETAPI_H_
#define XMSGIMCLIENTNETAPI_H_

#include <libx-msg-im-client-core.h>
#include "trans/XmsgImTransPassive.h"
#include "trans/XmsgImTransInitiative.h"

class XmsgImClientNetApi: public enable_shared_from_this<XmsgImClientNetApi>
{
public:
	static shared_ptr<XmsgImClientNetApi> newApi(const char* uri ); 
	void future(shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, const string oob = ""); 
	void future(const string& msg, const string& dat, function<void(SptrXiti itrans)> cb, const string oob = ""); 
	void subReq(function<void(SptrXitp trans, shared_ptr<Message> req)> cb); 
	void subReq(function<void(SptrXitp trans, const string& name, const string& dat)> cb); 
	void subEvn(function<void(shared_ptr<Message> req)> cb); 
	void subEvn(function<void(const string& name, const string& dat)> cb); 
	void stopTry(); 
public:
	static void init(); 
	static void pubReq(shared_ptr<XmsgImClientNetApi> netApi, SptrXitp trans); 
	static void pubEvn(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> evn); 
	static void pubEvnRaw(shared_ptr<XmsgImClientNetApi> netApi, const string& name, const string& dat); 
	XmsgImClientNetApi(const char* uri );
	virtual ~XmsgImClientNetApi();
public:
	string xmsgImAuthAddr; 
	vector<shared_ptr<XmsgImClientServiceAddress>> xmsgApAddr; 
	shared_ptr<XscChannel> xmsgImAuthXscChannel; 
	shared_ptr<XscChannel> xmsgApXscChannel; 
	shared_ptr<function<void(SptrXitp trans, shared_ptr<Message> req)>> reqCb; 
	shared_ptr<function<void(SptrXitp trans, const string& name, const string& dat)>> reqCbRaw; 
	shared_ptr<function<void(shared_ptr<Message> notice)>> evnCb; 
	shared_ptr<function<void(const string& name, const string& dat)>> evnCbRaw; 
	bool authFinished; 
	bool detached; 
private:
	static void __future__(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<Message> req, function<void(int ret, const string& desc, shared_ptr<Message> rsp)> cb, shared_ptr<string> ooob); 
	static void __future__(shared_ptr<XmsgImClientNetApi> netApi, shared_ptr<x_msg_im_trans_raw_msg> rawMsg, function<void(SptrXiti itrans)> cb, shared_ptr<string> ooob); 
	shared_ptr<XmsgImClientNetApi> sharedPtr(); 
};

#endif 
