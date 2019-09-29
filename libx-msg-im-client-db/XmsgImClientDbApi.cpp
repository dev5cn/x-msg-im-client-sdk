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

#include "XmsgImClientDbApi.h"
#include "global/XmsgImClientDbGlobal.h"
#include "org/XmsgImClientDbUsrOrg.h"
#include "usr/XmsgImClientDbUsrDat.h"

shared_ptr<XmsgImClientDb> XmsgImClientDbApi::dbGlobal = nullptr; 

XmsgImClientDbApi::XmsgImClientDbApi()
{

}

void XmsgImClientDbApi::futureGlobal(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	XmsgImClientDbApi::future(XmsgImClientDbApi::dbGlobal, req, cb);
}

void XmsgImClientDbApi::futureUsrOrg(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	XmsgImClientDbApi::future(this->dbUsrOrg, req, cb);
}

void XmsgImClientDbApi::futureUsrDat(shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	XmsgImClientDbApi::future(this->dbUsrDat, req, cb);
}

void XmsgImClientDbApi::futureGlobal(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	req->set_sql(sql);
	XmsgImClientDbApi::futureGlobal(req, cb);
}

void XmsgImClientDbApi::futureUsrOrg(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	req->set_sql(sql);
	this->futureUsrOrg(req, cb);
}

void XmsgImClientDbApi::futureUsrDat(const string& sql, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	req->set_sql(sql);
	this->futureUsrDat(req, cb);
}

void XmsgImClientDbApi::future(shared_ptr<XmsgImClientDb> db, shared_ptr<XmsgImClientDbCrudReq> req, function<void(int ret, const string& desc, SptrRst rsp)> cb)
{
	shared_ptr<x_msg_im_client_db_trans> trans(new x_msg_im_client_db_trans());
	trans->attachOnly = false;
	trans->req = req;
	trans->ret = 0;
	trans->rst = nullptr;
	trans->cbDbOper = cb;
	trans->gts = DateMisc::now();
	trans->ets = 0;
	trans->elap = 0;
	db->push(trans);
}

void XmsgImClientDbApi::attach2global(function<void(sqlite3* db)> cb)
{
	XmsgImClientDbApi::attach(XmsgImClientDbApi::dbGlobal, cb);
}

void XmsgImClientDbApi::attach2usrOrg(function<void(sqlite3* db)> cb)
{
	XmsgImClientDbApi::attach(this->dbUsrOrg, cb);
}

void XmsgImClientDbApi::attach2usrDat(function<void(sqlite3* db)> cb)
{
	XmsgImClientDbApi::attach(this->dbUsrDat, cb);
}

void XmsgImClientDbApi::attach(shared_ptr<XmsgImClientDb> db, function<void(sqlite3* db)> cb)
{
	shared_ptr<x_msg_im_client_db_trans> trans(new x_msg_im_client_db_trans());
	trans->attachOnly = true;
	trans->cbAttachOnly = cb;
	trans->gts = DateMisc::now();
	trans->ets = 0;
	trans->elap = 0;
	db->push(trans);
}

bool XmsgImClientDbApi::openGlobal(const string& path)
{
	if (XmsgImClientDbApi::dbGlobal != nullptr)
		return true;
	XmsgImClientDbApi::dbGlobal.reset(new XmsgImClientDbGlobal(path + Misc::pathSeparator() + "dbGlobal.db"));
	if (!XmsgImClientDbApi::dbGlobal->open())
	{
		XmsgImClientDbApi::dbGlobal = nullptr;
		return false;
	}
	XmsgImClientDbApi::dbGlobal->start();
	return true;
}

shared_ptr<XmsgImClientDbApi> XmsgImClientDbApi::openUsr(const string& path, const string& cgt)
{
	if (!Misc::isDirExisted((path + Misc::pathSeparator()).c_str()))
	{
		if (!Misc::mkdir((path + Misc::pathSeparator()).c_str()))
		{
			LOG_FAULT("can not create directory, path: %s", path.c_str())
			return nullptr;
		}
		LOG_INFO("create directory successful, path: %s", path.c_str())
	}
	string str = path + Misc::pathSeparator() + cgt + Misc::pathSeparator();
	if (!Misc::isDirExisted(str.c_str()))
	{
		if (!Misc::mkdir(str.c_str()))
		{
			LOG_FAULT("can not create directory, path: %s", str.c_str())
			return nullptr;
		}
		LOG_INFO("create directory successful, path: %s", str.c_str())
	}
	XmsgImClientDbApi::openGlobal(path); 
	shared_ptr<XmsgImClientDbApi> api(new XmsgImClientDbApi());
	api->dbUsrOrg.reset(new XmsgImClientDbUsrOrg(str + "dbUsrOrg.db"));
	api->dbUsrDat.reset(new XmsgImClientDbUsrDat(str + "dbUsrDat.db"));
	if (!api->dbUsrOrg->open() || !api->dbUsrDat->open())
		return nullptr;
	api->dbUsrOrg->start();
	api->dbUsrDat->start();
	return api;
}

XmsgImClientDbApi::~XmsgImClientDbApi()
{

}

