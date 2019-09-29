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
import x.msg.pb.PbXmsg.XmsgImGroupInfoUpdateReq;

/**
 * 
 * Created on: 2019年9月4日 上午12:45:19
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupInfoUpdateReq
{
	/** 群组信息更新. */
	public static final void test(String cgt)
	{
		XmsgImGroupInfoUpdateReq.Builder req = XmsgImGroupInfoUpdateReq.newBuilder();
		req.setCgt(cgt);
		req.putUpsert("name", "test00");
		req.putUpsert("desc", "这是一个测试群");
		// req.putUpsert("type", "development");
		req.addRemove("type");
		Main.netApi.future(req.build(), (ret, desc, rsp) -> Misc.donothing());
	}
}
