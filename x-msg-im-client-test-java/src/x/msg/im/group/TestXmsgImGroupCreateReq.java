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
package x.msg.im.group;

import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImGroupAddMember;
import x.msg.pb.PbXmsg.XmsgImGroupCreateReq;

/**
 * 
 * Created on: 2019年9月2日 下午11:20:53
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupCreateReq
{
	/** 创建群组. */
	public static final void test()
	{
		XmsgImGroupCreateReq.Builder req = XmsgImGroupCreateReq.newBuilder();
		XmsgImGroupAddMember.Builder m = XmsgImGroupAddMember.newBuilder();
		m.setCgt("im.xmsg.dev5.cn.szu0@6b6af75527c14b2884bcd4128cd29b93"); /* usr01. */
		m.putInfo("name", "usr01");
		m.putInfo("phone", "15889700000");
		m.putInfo("email", "dev5@qq.com");
		req.addMember(m);
		req.putInfo("name", Misc.printf2Str("测试群%02d", 0));
		Main.netApi.future(req.build(), (ret, desc, rsp) -> Misc.donothing());
	}
}
