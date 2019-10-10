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
package x.msg.im.hlr;

import x.msg.im.client.XmsgImClientNetApi.XmsgImClientNetTrans;
import x.msg.pb.PbXmsg.XmsgImHlrOtherClientAttachReq;
import x.msg.pb.PbXmsg.XmsgImHlrOtherClientAttachRsp;

/**
 * 
 * Created on: 2019年10月5日 下午6:20:00
 *
 * Author: xzwdev
 *
 */
public class TestXmsgImHlrOtherClientAttachReq
{
	/** 其它终端正在附着. */
	public static final void test(XmsgImClientNetTrans trans, XmsgImHlrOtherClientAttachReq req)
	{
		XmsgImHlrOtherClientAttachRsp.Builder rsp = XmsgImHlrOtherClientAttachRsp.newBuilder();
		rsp.setAction("allow"); /* 现在不支持交互, 无论你回复什么, x-msg-im-hlr总是将当前终端踢下线. */
		trans.end(rsp.build());
	}
}
