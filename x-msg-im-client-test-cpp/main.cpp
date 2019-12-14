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
/*
 * main.cpp
 *
 *  Created on: 2019年5月19日 下午5:00:28
 *      Author: dev5@qq.com
 */

#include <libx-msg-im-client-sdk.h>
#include <libx-msg-im-client-db.h>

int main(int argc, char **argv)
{
	Log::setRecord();
	XmsgImClientSdk::instance()->init(); /* sdk初始化. */
	//
	auto netApi = XmsgImClientNetApi::newApi("127.0.0.1:8070"); /* 通过指定的接入地址构造一个网络层的api实例. */
	netApi->subEvn([](shared_ptr<Message> evn) /* 订阅网络层api实例上的事件, 包括本地事件与网络通知. */
	{
		LOG_INFO("got a net-api event, msg: %s, dat: %s", evn->GetDescriptor()->name().c_str(), evn->ShortDebugString().c_str()) /* 在sdk线程中. */
	});
	//
	netApi->subReq([](SptrXitp trans, shared_ptr<Message> req) /* 订阅网络api实例上的网络请求(需要回送响应). */
	{
		LOG_INFO("got a net-api network request, msg: %s, dat: %s", req->GetDescriptor()->name().c_str(), req->ShortDebugString().c_str()) /* 在sdk线程中. */
		trans->end(RET_SUCCESS); /* 可在任意线程中结束. */
	});
	//
	shared_ptr<XmsgImAuthSimpleReq> req(new XmsgImAuthSimpleReq()); /* 鉴权. */
	req->set_usr("usr000000");
	req->set_salt(Crypto::gen0aAkey256().c_str());
	req->set_sign(Crypto::sha256ToHexStrLowerCase(req->usr() + req->salt() + Crypto::sha256ToHexStrLowerCase("password")));
	auto dev = req->mutable_dev();
	dev->set_plat("linux");
	dev->set_did("0.0.0.0");
	dev->set_ver("0.0.0");
	netApi->future(req, [req](int ret, const string& desc, shared_ptr<Message> rsp)
	{
		if(ret != RET_SUCCESS) /* 在sdk线程中. */
		{
			LOG_ERROR("auth with x-msg-im-auth failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_INFO("auth with x-msg-im-auth successful, req: %s, rsp: %s", req->ShortDebugString().c_str(), rsp->ShortDebugString().c_str())
	});
	Misc::hold(); /* 阻塞当前线程. */
	return EXIT_SUCCESS;
}

int mainx(int argc, char **argv)
{
	Log::setRecord();
	XmsgImClientSdk::instance()->init(); /* sdk初始化. */
	if (!XmsgImClientDbApi::openGlobal("./db/")) /* 在./db/目录下创建并打开全局数据库. */
	{
		LOG_FAULT("create global database failed")
		return EXIT_FAILURE;
	}
	string sql;
	SPRINTF_STRING(&sql, "create table tb_global_login_history (\n")
	SPRINTF_STRING(&sql, "\t usr text primary key not null,\n")
	SPRINTF_STRING(&sql, "\t pwdSha256 text not null,\n")
	SPRINTF_STRING(&sql, "\t uts bigint not null\n")
	SPRINTF_STRING(&sql, ")")
	XmsgImClientDbApi::futureGlobal(sql, [](int ret, const string& desc, SptrRst rsp) /* 创建一张表. */
	{
		if (ret != RET_SUCCESS) /* 在sdk线程中. */
		{
			LOG_ERROR("create table tb_global_login_history failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_DEBUG("create tb_global_login_history successful")
	});
	//
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	req->set_sql("insert into tb_global_login_history values (?, ?, ?)");
	auto row = req->add_row();
	SqliteMisc::addText(row, "usr");
	SqliteMisc::addText(row, "pwdSha256");
	SqliteMisc::addBigint(row, 123);
	XmsgImClientDbApi::futureGlobal(req, [](int ret, const string& desc, SptrRst rsp)
	{
		if (ret != RET_SUCCESS) /* 在sdk线程中. */
		{
			LOG_ERROR("insert into tb_global_login_history failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_DEBUG("insert into tb_global_login_history successful, rsp: %s", rsp->rsp->ShortDebugString().c_str())
	});
	//
	XmsgImClientDbApi::futureGlobal("select * from tb_global_login_history", [](int ret, const string& desc, SptrRst rsp)
	{
		if (ret != RET_SUCCESS) /* 在sdk线程中. */
		{
			LOG_ERROR("query tb_global_login_history failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		for (int i = 0; i < rsp->rowSize(); ++i)
		{
			LOG_DEBUG("row: %d, usr: %s, pwdSha256: %s, uts: %llu", i, rsp->getStr(i, "usr").c_str(), rsp->getStr(i, "pwdSha256").c_str(), rsp->getLong(i, "uts"))
		}
	});
	Misc::hold();
	return EXIT_SUCCESS;
}

int main4net(int argc, char **argv)
{
	Log::setRecord();
	XmsgImClientSdk::instance()->init(); /* sdk初始化. */
	//
	auto netApi = XmsgImClientNetApi::newApi("47.98.188.94:8080"); /* 通过指定的接入地址构造一个网络层的api实例. */
	netApi->subEvn([](shared_ptr<Message> evn) /* 订阅网络层api实例上的事件, 包括本地事件与网络通知. */
	{
		LOG_INFO("got a net-api event, msg: %s, dat: %s", evn->GetDescriptor()->name().c_str(), evn->ShortDebugString().c_str()) /* 在sdk线程中. */
	});
	//
	netApi->subReq([](SptrXitp trans, shared_ptr<Message> req) /* 订阅网络api实例上的网络请求(需要回送响应). */
	{
		LOG_INFO("got a net-api network request, msg: %s, dat: %s", req->GetDescriptor()->name().c_str(), req->ShortDebugString().c_str()) /* 在sdk线程中. */
		trans->end(RET_SUCCESS); /* 可在任意线程中结束. */
	});
	//
	shared_ptr<XmsgImAuthSimpleReq> req(new XmsgImAuthSimpleReq()); /* 鉴权. */
	req->set_usr("usr00");
	req->set_salt(Crypto::gen0aAkey256().c_str());
	req->set_sign(Crypto::sha256ToHexStrLowerCase(req->usr() + req->salt() + Crypto::sha256ToHexStrLowerCase("password")));
	auto dev = req->mutable_dev();
	dev->set_plat("linux");
	dev->set_did("0.0.0.0");
	dev->set_ver("0.0.0");
	netApi->future(req, [req](int ret, const string& desc, shared_ptr<Message> rsp)
	{
		if(ret != RET_SUCCESS) /* 在sdk线程中. */
		{
			LOG_ERROR("auth with x-msg-im-auth failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_INFO("auth with x-msg-im-auth successful, req: %s, rsp: %s", req->ShortDebugString().c_str(), rsp->ShortDebugString().c_str())
	});
	Misc::hold(); /* 阻塞当前线程. */
	return EXIT_SUCCESS;
}

