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

#ifndef XMSGIMTRANSINITIATIVE_H_
#define XMSGIMTRANSINITIATIVE_H_

#include "XmsgImTrans.h"

class XmsgImTransInitiative: public XmsgImTrans
{
public:
	function<void(int ret, const string& desc, shared_ptr<Message>)> cb;
	function<void(shared_ptr<XmsgImTransInitiative> itrans)> cbRaw;
	void sendBegin(); 
	void sendUni(); 
public:
	void end(); 
	XmsgImTransInitiative();
	virtual ~XmsgImTransInitiative();
};

typedef shared_ptr<XmsgImTransInitiative> SptrXiti;

#endif 
