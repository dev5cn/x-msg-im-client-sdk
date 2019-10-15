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
package x.msg.ap;

import misc.Log;
import misc.Misc;
import x.msg.im.hlr.TestXmsgImHlrAttachSimpleReq;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImSdkEventXmsgAp;

/**
 * 
 * Created on: 2019年10月10日 下午3:17:29
 *
 * Author: xzwdev
 *
 */
public class TestXmsgImSdkEventXmsgAp
{
	/** 客户端sdk与相关x-msg-ap之间的事件. */
	public static final void test(XmsgImSdkEventXmsgAp evn)
	{
		Log.info("evn(%s): %s", evn.getDescriptorForType().getName(), Misc.pb2str(evn));
		if ("estab".equals(evn.getEvn()) && !Main.firstAttach)
			TestXmsgImHlrAttachSimpleReq.test(Main.token); /* 再次附着. */
	}
}
