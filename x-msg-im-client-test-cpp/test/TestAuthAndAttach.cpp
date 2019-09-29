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
 * TestAuthAndAttach.cpp
 *
 *  Created on: 2019年7月2日 下午11:00:37
 *      Author: dev5@qq.com
 */

#include "TestAuthAndAttach.h"

TestAuthAndAttach::TestAuthAndAttach()
{

}

/* 注册. */
void TestAuthAndAttach::xmsgImAuthRegSimple(shared_ptr<XmsgImClientNetApi> netApi)
{
	shared_ptr<XmsgImAuthRegSimpleReq> req(new XmsgImAuthRegSimpleReq());
	req->set_usr("usr00");
	req->set_salt(Crypto::gen0aAkey128());
	req->set_pwd(Crypto::aes128enc2hexStrLowerCase(req->salt(), Crypto::sha256ToHexStrLowerCase("password")));
	req->mutable_dev()->set_plat("linux");
	req->mutable_dev()->set_did("0.0.0.0");
	req->mutable_dev()->set_ver("0.0.0");
	netApi->future(req, [netApi, req](int ret, const string& desc, shared_ptr<Message> rsp)
	{
		if(ret != RET_SUCCESS)
		{
			LOG_ERROR("register with x-msg-im-auth failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_INFO("register with x-msg-im-auth successful, req: %s, rsp: %s", req->ShortDebugString().c_str(), rsp->ShortDebugString().c_str())
	});
}

/* 鉴权. */
void TestAuthAndAttach::xmsgImAuthSimple(shared_ptr<XmsgImClientNetApi> netApi)
{
	shared_ptr<XmsgImAuthSimpleReq> req(new XmsgImAuthSimpleReq());
	req->set_usr("usr00");
	req->set_salt(Crypto::gen0aAkey256().c_str());
	req->set_sign(Crypto::sha256ToHexStrLowerCase(req->usr() + req->salt() + Crypto::sha256ToHexStrLowerCase("password")));
	auto dev = req->mutable_dev();
	dev->set_plat("linux");
	dev->set_did("0.0.0.0");
	dev->set_ver("0.0.0");
	netApi->future(req, [netApi, req](int ret, const string& desc, shared_ptr<Message> resp)
	{
		if(ret != RET_SUCCESS)
		{
			LOG_ERROR("auth with x-msg-im-auth failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		auto rsp = static_pointer_cast<XmsgImAuthSimpleRsp>(resp);
		LOG_INFO("auth with x-msg-im-auth successful, req: %s, rsp: %s", req->ShortDebugString().c_str(), rsp->ShortDebugString().c_str())
		TestAuthAndAttach::xmsgImHlrAttachSimple(netApi, rsp->token()); /* 附着. */
	});
}

/* 附着. */
void TestAuthAndAttach::xmsgImHlrAttachSimple(shared_ptr<XmsgImClientNetApi> netApi, const string& token)
{
	shared_ptr<XmsgImHlrAttachSimpleReq> req(new XmsgImHlrAttachSimpleReq());
	req->set_token(token);
	netApi->future(req, [req, netApi](int ret, const string& desc, shared_ptr<Message> rsp)
	{
		if(ret != RET_SUCCESS)
		{
			LOG_ERROR("attach to x-msg-ap failed, ret: %04X, desc: %s", ret, desc.c_str())
			return;
		}
		LOG_INFO("attach to x-msg-ap successful, req: %s, rsp: %s", req->ShortDebugString().c_str(), rsp->ShortDebugString().c_str())
	});
}

TestAuthAndAttach::~TestAuthAndAttach()
{

}

