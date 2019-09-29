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

#ifndef XMSGIMCLIENTTIMERMGR_H_
#define XMSGIMCLIENTTIMERMGR_H_

#include "XmsgImClientTimer.h"

class XmsgImClientTimerMgr
{
public:
	uint addTimer(int sec , function<bool(void)> cb ); 
	uint addTimerOneTime(int sec , function<void(void)> cb ); 
	bool cancelTimer(uint tid ); 
	void cancelAllTimer(); 
public:
	static XmsgImClientTimerMgr* instance();
	void dida(ullong now); 
private:
	uint tid; 
	uint slot; 
	ullong lts; 
	vector<unordered_map<uint , shared_ptr<XmsgImClientTimer> >*> wheel; 
	static XmsgImClientTimerMgr* inst;
private:
	void loop(); 
	uint add(int sec , function<bool(void)> cb ); 
	XmsgImClientTimerMgr();
	virtual ~XmsgImClientTimerMgr();
};

#endif 
