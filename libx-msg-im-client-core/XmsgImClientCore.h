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

#ifndef XMSGIMCLIENTCORE_H_
#define XMSGIMCLIENTCORE_H_

#include <libmisc.h>
#include "XmsgImClientEvent.h"

class XmsgImClientCore
{
public:
	static XmsgImClientCore* instance();
	void future(function<void()> cb); 
public:
	void setSdkThreadId(uint tid); 
	uint getSdkThreadId(); 
	shared_ptr<XmsgImClientEvent> loop(); 
	void push(shared_ptr<XmsgImClientEvent> evn); 
private:
	uint sdkThreadId; 
	queue<shared_ptr<XmsgImClientEvent>> eventQueue; 
	mutex lock4eventQueue; 
	condition_variable cond4eventQueue; 
	static XmsgImClientCore* inst;
	XmsgImClientCore();
	virtual ~XmsgImClientCore();
};

#endif 
