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
 * TestAuthAndAttach.h
 *
 *  Created on: 2019年7月2日 下午11:00:37
 *      Author: dev5@qq.com
 */

#ifndef TEST_TESTAUTHANDATTACH_H_
#define TEST_TESTAUTHANDATTACH_H_

#include <libx-msg-im-client-sdk.h>

/**
 *
 * auth with x-msg-im-auth and attach to x-msg-ap.
 *
 */
class TestAuthAndAttach
{
public:
	static void xmsgImAuthRegSimple(shared_ptr<XmsgImClientNetApi> netApi); /* 注册. */
	static void xmsgImAuthSimple(shared_ptr<XmsgImClientNetApi> netApi); /* 鉴权. */
	static void xmsgImHlrAttachSimple(shared_ptr<XmsgImClientNetApi> netApi, const string& token); /* 附着. */
private:
	TestAuthAndAttach();
	virtual ~TestAuthAndAttach();
};

#endif /* TEST_TESTAUTHANDATTACH_H_ */
