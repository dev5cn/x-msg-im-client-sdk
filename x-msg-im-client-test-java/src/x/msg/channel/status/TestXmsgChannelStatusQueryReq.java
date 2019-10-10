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
package x.msg.channel.status;

import misc.Log;
import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgChannelStatusQueryReq;

/**
 * 
 * Created on: 2019年10月7日 下午4:21:20
 *
 * Author: xzwdev
 *
 */
public class TestXmsgChannelStatusQueryReq
{
	/** 频道状态查询. */
	public static final void test()
	{
		XmsgChannelStatusQueryReq.Builder b = XmsgChannelStatusQueryReq.newBuilder();
		b.addCgt("im.xmsg.dev5.cn.szu0@9d332679c7944e2c980d13b32e7ce2f0");
		Main.netApi.future(b.build(), (ret, desc, rsp) -> Log.info("ret: %s, desc: %s, rsp: %s", ret, desc, rsp == null ? "null" : Misc.pb2str(rsp)));
	}
}
