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

#ifndef XMSGIMCLIENTSDK_H_
#define XMSGIMCLIENTSDK_H_

#include <libx-msg-im-client-net.h>

class XmsgImClientSdk
{
public:
	void init(); 
	void future(function<void()> cb); 
	static XmsgImClientSdk* instance();
private:
	static XmsgImClientSdk* inst;
	atomic_bool threadStarted; 
private:
	void start(); 
	void svc(); 
	void loop(); 
	void handleEvent4sdkThread(shared_ptr<function<void()>> evn); 
	XmsgImClientSdk();
	virtual ~XmsgImClientSdk();
};

#endif 
