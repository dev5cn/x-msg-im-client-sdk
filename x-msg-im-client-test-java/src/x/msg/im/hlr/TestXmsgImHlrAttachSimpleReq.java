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

import misc.Crypto;
import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImHlrAttachSimpleReq;
import x.msg.pb.PbXmsg.XmsgImHlrAttachSimpleRsp;
import x.msg.pb.PbXmsg.XmsgImSdkEventXmsgAp;

/**
 * 
 * Created on: 2019年9月2日 下午11:02:55
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImHlrAttachSimpleReq
{
	/** 附着. */
	public static final void test(String token)
	{
		XmsgImHlrAttachSimpleReq.Builder attach = XmsgImHlrAttachSimpleReq.newBuilder();
		attach.setToken(Main.token);
		attach.setSalt(Crypto.gen0aAkey128());
		attach.setSign("sign");
		attach.setAlg("aes128");
		Main.netApi.future(attach.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("attach to x-msg-ap failed, ret: %s, desc: %s", ret, desc);
				return;
			}
			Log.info("attach to x-msg-ap successful, rsp(%s): %s", rsp.getDescriptorForType().getName(), Misc.pb2str(rsp));
			XmsgImHlrAttachSimpleRsp attachRsp = Misc.get(rsp);
			Main.cgt = attachRsp.getCgt();
			Main.netApi.stopTry();
			Main.afterAttach();
		});
	}

	/** (再次)附着. */
	public static final void attach(XmsgImSdkEventXmsgAp evn)
	{
		Log.info("evn(%s): %s", evn.getDescriptorForType().getName(), Misc.pb2str(evn));
		if ("estab".equals(evn.getEvn()) && Main.cgt != null /* 非首次. */)
		{
			TestXmsgImHlrAttachSimpleReq.test(Main.token);
			return;
		}
	}
}
