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
package x.msg.im.auth;

import misc.Crypto;
import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.hlr.TestXmsgImHlrAttachSimpleReq;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImAuthSimpleReq;
import x.msg.pb.PbXmsg.XmsgImAuthSimpleRsp;

/**
 * 
 * Created on: 2019年9月2日 下午11:01:53
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImAuthSimpleReq
{
	/** 鉴权. */
	public static final void test()
	{
		XmsgImAuthSimpleReq.Builder req = XmsgImAuthSimpleReq.newBuilder();
		req.setUsr(Main.usr);
		req.setSalt(Crypto.gen0aAkey256());
		req.setSign(Crypto.sha256StrLowerCase(req.getUsr() + req.getSalt() + Crypto.sha256StrLowerCase(Main.pwd)));
		req.getDevBuilder().setPlat("linux");
		req.getDevBuilder().setDid("0.0.0.0");
		req.getDevBuilder().setVer("0.0.8");
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("auth with x-msg-im-auth failed, ret: %s, desc: %s", ret, desc);
				return;
			}
			XmsgImAuthSimpleRsp authRsp = Misc.get(rsp);
			Main.secret = Crypto.aesDec2Str(Crypto.sha256StrLowerCase((req.getSalt() + Crypto.sha256StrLowerCase(Main.pwd))), authRsp.getSecret());
			Log.info("auth with x-msg-im-auth successful, secret: %s, rsp(%s): %s", Main.secret, rsp.getDescriptorForType().getName(), Misc.pb2str(rsp));
			Main.fileService = authRsp.getFsAddr(0).getIp() + ":" + authRsp.getFsAddr(0).getPort();
			Main.cgt = authRsp.getCgt();
			Main.token = authRsp.getToken();
			TestXmsgImHlrAttachSimpleReq.test(Main.token);
		});
	}
}
