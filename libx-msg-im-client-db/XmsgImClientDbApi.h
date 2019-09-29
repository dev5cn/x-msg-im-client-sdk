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

#ifndef XMSGIMCLIENTDBAPI_H_
#define XMSGIMCLIENTDBAPI_H_

#include "XmsgImClientDb.h"
class XmsgImClientDbApi: public enable_shared_from_this<XmsgImClientDbApi>
{
public:
	static bool openGlobal(const string& path); 
	static void futureGlobal(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	static void futureGlobal(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	static void attach2global(function<void(sqlite3* db)> cb); 
	static shared_ptr<XmsgImClientDbApi> openUsr(const string& path, const string& cgt); 
	void futureUsrOrg(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	void futureUsrDat(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	void futureUsrOrg(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	void futureUsrDat(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	void attach2usrOrg(function<void(sqlite3* db)> cb); 
	void attach2usrDat(function<void(sqlite3* db)> cb); 
public:
	XmsgImClientDbApi();
	virtual ~XmsgImClientDbApi();
private:
	static shared_ptr<XmsgImClientDb> dbGlobal; 
	shared_ptr<XmsgImClientDb> dbUsrOrg; 
	shared_ptr<XmsgImClientDb> dbUsrDat; 
	static void future(shared_ptr<XmsgImClientDb> db, shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb); 
	static void attach(shared_ptr<XmsgImClientDb> db, function<void(sqlite3* db)> cb); 
};

#endif 
