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
package x.msg.file;

import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import misc.Crypto;
import misc.Log;
import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgClientTokenInfo;
import x.msg.pb.PbXmsg.XmsgFileUploadSimpleReq;
import x.msg.pb.PbXmsg.XmsgFileUploadSimpleRsp;

/**
 * 
 * Created on: 2019年9月14日 下午6:27:57
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgFileUploadSimpleReq
{
	public static final void test()
	{
		try
		{
			/** -------------------------------- */
			/**                                  */
			/** 鉴权信息. */
			/**                                  */
			/** -------------------------------- */
			XmsgClientTokenInfo.Builder b = XmsgClientTokenInfo.newBuilder();
			b.setToken(Main.token);
			b.setAlg("sha256");
			b.setSlat(Crypto.gen0aAkey128());
			b.setPlat("linux");
			b.setDid("0.0.0.0");
			b.setSign(Crypto.sha256StrLowerCase(Main.token + b.getSlat() + Main.secret + b.getPlat() + b.getDid()));
			/** -------------------------------- */
			/**                                  */
			/** 文件上传请求. */
			/**                                  */
			/** -------------------------------- */
			byte by[] = Misc.loadFile("/home/dev5/1.png");
			XmsgFileUploadSimpleReq.Builder fb = XmsgFileUploadSimpleReq.newBuilder();
			fb.setFileName("1.png");
			fb.setFileSize(by.length);
			//
			HttpPost post = new HttpPost(Misc.printf2Str("http://%s/", Main.fileService));
			post.addHeader("x-msg-client-token", Crypto.base64enc(b.build().toByteArray()));
			post.addHeader("x-msg-name", XmsgFileUploadSimpleReq.class.getSimpleName());
			post.addHeader("x-msg-dat", Crypto.base64enc(fb.build().toByteArray()));
			post.setEntity(new ByteArrayEntity(by));
			/** -------------------------------- */
			/**                                  */
			/** 响应头. */
			/**                                  */
			/** -------------------------------- */
			HttpResponse rsp = HttpClients.createDefault().execute(post);
			for (int i = 0; i < rsp.getAllHeaders().length; ++i)
			{
				String key = rsp.getAllHeaders()[i].getName();
				String val = rsp.getAllHeaders()[i].getValue();
				Log.info("got upload file rsp, headers: %s: %s", key, val);
			}
			Header xmsgName = rsp.getFirstHeader("x-msg-name");
			if (xmsgName == null) /* 如果没有响应消息名称, 那一定是异常了, 服务器此时将返回一段json. */
			{
				Log.error("download file failed, rsp: %s", EntityUtils.toString(rsp.getEntity()));
				return;
			}
			by = EntityUtils.toByteArray(rsp.getEntity()); /* XmsgFileUploadSimpleRsp的内容在body里面. */
			Log.oper("upload file successful, rsp : %s", Misc.pb2str(XmsgFileUploadSimpleRsp.parseFrom(by)));
		} catch (Exception e)
		{
			Log.error("%s", Log.trace(e));
		}
	}
}
