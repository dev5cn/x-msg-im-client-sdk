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
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import misc.Crypto;
import misc.Log;
import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgClientTokenInfo;
import x.msg.pb.PbXmsg.XmsgFileDownloadSimpleReq;
import x.msg.pb.PbXmsg.XmsgFileDownloadSimpleRsp;

/**
 * 
 * Created on: 2019年9月18日 下午12:06:04
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgFileDownloadSimpleReq
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
			/** 文件下载请求. */
			/**                                  */
			/** -------------------------------- */
			XmsgFileDownloadSimpleReq.Builder req = XmsgFileDownloadSimpleReq.newBuilder();
			req.setFid("c1ea63d6af9446238145ce210258ce22"); /* 文件唯一标识. */
			req.setOffset(0); /* 偏移量, 这是半开区间, 类似于: new String(by, offset, len); */
			req.setLen(0x10); /* 要下载的长度, 通过offset和len组合, 可以实现多线程下载. */
			//
			HttpGet get = new HttpGet(Misc.printf2Str("http://%s/", Main.fileService));
			get.addHeader("x-msg-client-token", Crypto.base64enc(b.build().toByteArray())); /* 身份信息. */
			get.addHeader("x-msg-name", XmsgFileDownloadSimpleReq.class.getSimpleName()); /* 下载请求. */
			get.addHeader("x-msg-dat", Crypto.base64enc(req.build().toByteArray()));
			HttpResponse rsp = HttpClients.createDefault().execute(get);
			/** -------------------------------- */
			/**                                  */
			/** 响应头. */
			/**                                  */
			/** -------------------------------- */
			for (int i = 0; i < rsp.getAllHeaders().length; ++i)
			{
				String key = rsp.getAllHeaders()[i].getName();
				String val = rsp.getAllHeaders()[i].getValue();
				Log.info("got download file rsp, headers: %s: %s", key, val);
			}
			Header xmsgDat = rsp.getFirstHeader("x-msg-dat");
			if (xmsgDat == null) /* 如果没有响应消息, 那一定是异常了, 服务器此时将返回一段json. */
			{
				Log.error("download file failed, rsp: %s", EntityUtils.toString(rsp.getEntity()));
				return;
			}
			XmsgFileDownloadSimpleRsp r = XmsgFileDownloadSimpleRsp.parseFrom(Crypto.base64dec(xmsgDat.getValue())); /* 响应的文件信息. */
			/** -------------------------------- */
			/**                                  */
			/** 下载的文件内容. */
			/**                                  */
			/** -------------------------------- */
			byte by[] = EntityUtils.toByteArray(rsp.getEntity());
			Log.info("file-info : %s, download-size: %d", Misc.pb2str(r), by.length);
		} catch (Exception e)
		{
			Log.error("%s", Log.trace(e));
		}
	}
}
