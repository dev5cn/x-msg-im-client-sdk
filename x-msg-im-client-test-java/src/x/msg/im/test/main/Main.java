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
package x.msg.im.test.main;

import com.google.protobuf.Message;

import misc.Crypto;
import misc.Log;
import misc.Misc;
import x.msg.ap.TestXmsgImSdkEventXmsgAp;
import x.msg.channel.status.TestXmsgChannelStatusPubGroupStatusNotice;
import x.msg.channel.status.TestXmsgChannelStatusPubUsrStatusNotice;
import x.msg.im.auth.TestXmsgImAuth;
import x.msg.im.auth.TestXmsgImSdkEventXmsgImAuth;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.client.XmsgImClientDbApi;
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.client.XmsgImClientNetApi;
import x.msg.im.client.XmsgImClientNetApi.XmsgImClientNetTrans;
import x.msg.im.client.XmsgImClientSdk;
import x.msg.im.group.TestXmsgImGroup;
import x.msg.im.group.TestXmsgImGroupMsgNotice;
import x.msg.im.hlr.TestXmsgImHlrOtherClientAttachReq;
import x.msg.im.org.TestXmsgImOrg;
import x.msg.im.org.TestXmsgImOrgSyncPubReq;
import x.msg.pb.PbXmsg.XmsgChannelStatusPubGroupStatusNotice;
import x.msg.pb.PbXmsg.XmsgChannelStatusPubUsrStatusNotice;
import x.msg.pb.PbXmsg.XmsgImAuthSimpleReq;
import x.msg.pb.PbXmsg.XmsgImAuthSimpleRsp;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImGroupMsgNotice;
import x.msg.pb.PbXmsg.XmsgImHlrOtherClientAttachReq;
import x.msg.pb.PbXmsg.XmsgImOrgSyncPubReq;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;
import x.msg.pb.PbXmsg.XmsgImSdkEventXmsgAp;
import x.msg.pb.PbXmsg.XmsgImSdkEventXmsgImAuth;

/**
 * 
 * Created on: 2019年8月26日 上午11:53:20
 *
 * Author: dev5@qq.com
 *
 */
public class Main
{
	static
	{
		System.loadLibrary("x-msg-im-client-jni");
	}

	/** 接入地址. */
	public static final String uri = "47.98.188.94:9001";
	/** 用户名. */
	public static String usr = "usr03"; /* 可测试的用户名有: usr00 ~ usr09. */
	/** 原始密码. */
	public static final String pwd = "password"; /* 此密码适用于所有用户. */
	/** net-api实例句柄. */
	public static XmsgImClientNetApi netApi = null;
	/** db-api实例句柄. */
	public static XmsgImClientDbApi dbApi = null;
	/** 鉴权令牌. */
	public static String token = null;
	/** 与x-msg-ap通信时的加密密钥. */
	public static String secret = null;
	/** 用户channel global title. */
	public static String cgt = null;
	/** 文件服务地址. */
	public static String ossService = null;
	/** 是否首次附着. */
	public static boolean firstAttach = true;

	public static final void main(String[] args) throws Exception
	{
		if (args.length > 0)
			Main.usr = Misc.trim(args[0]);
		//
		Log.ignoreClass("apache");
		XmsgImClientSdk.instance().setLogLevel("DEBUG");
		XmsgImClientSdk.instance().subCxxLog(log -> Main.handleCxxLog(log));
		XmsgImClientSdk.instance().init();
		Misc.future(x -> XmsgImClientSdk.instance().loop());
		//
		if (!XmsgImClientDbApi.openDbGlobal("/home/dev5/db")) /* 打开全局数据库. */
		{
			Log.fault("open global database failed");
			return;
		}
		Log.info("open global database successful");
		//
		Main.netApi = XmsgImClientNetApi.newApi(Main.uri);
		Main.netApi.subEvn(evn -> Main.handleEvent(evn));
		Main.netApi.subReq((trans, req) -> Main.handleRequest(trans, req));
		/** -------------------------------- */
		/**                                  */
		/** x-msg-im-auth. */
		/**                                  */
		/** -------------------------------- */
		TestXmsgImAuth.test();
	}

	/** attach成功后的test case. */
	public static final void afterAttach()
	{
		/** -------------------------------- */
		/**                                  */
		/** 打开用户数据库. */
		/**                                  */
		/** -------------------------------- */
		Main.dbApi = XmsgImClientDbApi.newApi(Main.cgt);
		if (Main.dbApi == null)
		{
			Log.error("can not open usr database, cgt: %s", Main.cgt);
			return;
		}
		Log.info("open usr database successful, cgt: %s", Main.cgt);
		Main.dbApi.futureUsrOrg("select name from sqlite_master where type = 'table' order by name", (ret, desc, rst) ->
		{
			if (rst.rowSize() > 0)
				return;
			TestXmsgImOrg.createTables(); /* 创建一些必要的表. */
		});
		Main.dbApi.futureUsrDat("select name from sqlite_master where type = 'table' order by name", (ret, desc, rst) ->
		{
			if (rst.rowSize() > 0)
				return;
			TestXmsgImGroup.createTables(); /* 创建一些必要的表. */
		});
		/** -------------------------------- */
		/**                                  */
		/** x-msg-im-hlr. */
		/**                                  */
		/** -------------------------------- */
		// TestXmsgImHlr.test();
		/** -------------------------------- */
		/**                                  */
		/** x-msg-im-group. */
		/**                                  */
		/** -------------------------------- */
		// TestXmsgImGroup.test();
		/** -------------------------------- */
		/**                                  */
		/** x-msg-im-org. */
		/**                                  */
		/** -------------------------------- */
		// TestXmsgImOrg.test();
		/** -------------------------------- */
		/**                                  */
		/** x-msg-file. */
		/**                                  */
		/** -------------------------------- */
		// TestXmsgFile.test();
		/** -------------------------------- */
		/**                                  */
		/** x-msg-channel-status. */
		/**                                  */
		/** -------------------------------- */
		// TestXmsgChannelStatus.test();
	}

	public static final void main4netApi(String[] args)
	{
		XmsgImClientSdk.instance().setLogLevel("DEBUG"); /* 设置日志级别, 同时适用于c++与java驱动层. */
		XmsgImClientSdk.instance().subCxxLog(log -> System.out.println(log.getLog())); /* 订阅c++驱动层的日志. */
		XmsgImClientSdk.instance().init(); /* sdk初始化. */
		new Thread(() -> XmsgImClientSdk.instance().loop()).start(); /* 这里开启了一个线程, 我们认为这个线程就是sdk线程. */
		//
		XmsgImClientNetApi netApi = XmsgImClientNetApi.newApi("47.98.188.94:9001"); /* 通过指定的接入地址构造一个网络层的api实例. */
		//
		netApi.subEvn(evn -> Log.info("got a net-api event, msg: %s, dat: %s", evn.getDescriptorForType().getName(), Misc.pb2str(evn)) /* 在sdk线程中. */); /* 订阅网络层api实例上的事件, 包括本地事件与网络通知. */
		//
		netApi.subReq((trans, req) -> /* 订阅网络api实例上的网络请求(需要回送响应). */
		{
			Log.info("got a net-api network request, msg: %s, dat: %s", req.getDescriptorForType().getName(), Misc.pb2str(req)); /* 在sdk线程中. */
			trans.end(XmsgErrCode.SUCCESS); /* 可在任意线程中结束. */
		});
		//
		XmsgImAuthSimpleReq.Builder req = XmsgImAuthSimpleReq.newBuilder(); /* 鉴权. */
		req.setUsr("usr00");
		req.setSalt(Crypto.gen0aAkey256());
		req.setSign(Crypto.sha256StrLowerCase(req.getUsr() + req.getSalt() + Crypto.sha256StrLowerCase("password")));
		req.getDevBuilder().setPlat("linux");
		req.getDevBuilder().setDid("0.0.0.0");
		req.getDevBuilder().setVer("0.0.0");
		netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS) /* 在sdk线程中. */
			{
				Log.error("auth with x-msg-im-auth failed, ret: %s, desc: %s", ret, desc);
				return;
			}
			XmsgImAuthSimpleRsp r = Misc.get(rsp);
			String secret = Crypto.aesDec2Str(Crypto.sha256StrLowerCase(req.getSalt() + Crypto.sha256StrLowerCase("password")), r.getSecret());
			Log.info("auth with x-msg-im-auth successful, secret: %s, rsp(%s): %s", secret, rsp.getDescriptorForType().getName(), Misc.pb2str(rsp));
		});
	}

	public static final void main4dbApi(String[] args)
	{
		XmsgImClientSdk.instance().setLogLevel("RECORD"); /* 设置日志级别, 同时适用于c++与java驱动层. */
		XmsgImClientSdk.instance().subCxxLog(log -> System.out.println(log.getLog())); /* 订阅c++驱动层的日志. */
		XmsgImClientSdk.instance().init(); /* sdk初始化. */
		new Thread(() -> XmsgImClientSdk.instance().loop()).start(); /* 这里开启了一个线程, 我们认为这个线程就是sdk线程. */
		//
		if (!XmsgImClientDbApi.openDbGlobal("./db")) /* 在./db/目录下创建并打开全局数据库. */
		{
			Log.fault("open global database failed");
			return;
		}
		Log.info("open global database successful");
		StringBuilder sql = new StringBuilder();
		sql.append("create table tb_global_login_history (\n");
		sql.append("\t usr text primary key not null,\n");
		sql.append("\t pwdSha256 text not null,\n");
		sql.append("\t uts bigint not null\n");
		sql.append(")");
		XmsgImClientDbApi.futureGlobal(sql.toString(), (ret, desc, rsp) -> /* 创建一张表. */
		{
			if (ret != XmsgErrCode.SUCCESS) /* 在sdk线程中. */
			{
				Log.error("create table tb_global_login_history failed, ret: %04X, desc: %s", ret, desc);
				return;
			}
			Log.debug("create tb_global_login_history successful");
		});
		//
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("insert into tb_global_login_history values (?, ?, ?)");
		for (int i = 0; i < 2; ++i) /* 批量插入. */
			crud.addRow(new XmsgImTbRow().addText("usr" + i).addText("pwdSha256").addBigint(123).build());
		XmsgImClientDbApi.futureGlobal(crud.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS) /* 在sdk线程中. */
			{
				Log.error("insert into tb_global_login_history failed, ret: %04X, desc: %s", ret, desc);
				return;
			}
			Log.debug("insert into tb_global_login_history successful, rsp: %s", rsp);
		});
		//
		XmsgImClientDbApi.futureGlobal("select * from tb_global_login_history", (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS) /* 在sdk线程中. */
			{
				Log.error("query tb_global_login_history failed, ret: %04X, desc: %s", ret, desc);
				return;
			}
			for (int i = 0; i < rsp.rowSize(); ++i)
			{
				Log.debug("row: %d, usr: %s, pwdSha256: %s, uts: %d", i, rsp.getStr(i, "usr"), rsp.getStr(i, "pwdSha256"), rsp.getLong(i, "uts"));
			}
		});
	}

	/** 处理net-api上的事件或通知. */
	public static final void handleEvent(Message evn)
	{
		if (evn instanceof XmsgImSdkEventXmsgAp)
		{
			TestXmsgImSdkEventXmsgAp.test(Misc.get(evn));
			return;
		}
		if (evn instanceof XmsgImSdkEventXmsgImAuth)
		{
			TestXmsgImSdkEventXmsgImAuth.test(Misc.get(evn));
			return;
		}
		if (evn instanceof XmsgImGroupMsgNotice)
		{
			TestXmsgImGroupMsgNotice.test(Misc.get(evn));
			return;
		}
		if (evn instanceof XmsgChannelStatusPubUsrStatusNotice)
		{
			TestXmsgChannelStatusPubUsrStatusNotice.test(Misc.get(evn));
			return;
		}
		if (evn instanceof XmsgChannelStatusPubGroupStatusNotice)
		{
			TestXmsgChannelStatusPubGroupStatusNotice.test(Misc.get(evn));
			return;
		}
		Log.warn("unexpected evn(%s): %s", evn.getDescriptorForType().getName(), Misc.pb2str(evn));
	}

	/** 处理net-api上的网络请求. */
	public static final void handleRequest(XmsgImClientNetTrans trans, Message req)
	{
		if (req instanceof XmsgImOrgSyncPubReq) /* x-msg-im-org下发组织架构增量. */
		{
			TestXmsgImOrgSyncPubReq.test(trans, Misc.get(req));
			return;
		}
		if (req instanceof XmsgImHlrOtherClientAttachReq) /* 其它终端正在附着. */
		{
			TestXmsgImHlrOtherClientAttachReq.test(trans, Misc.get(req));
			return;
		}
		Log.error("unexpected server side request message, req(%s): %s", req.getDescriptorForType().getName(), Misc.pb2str(req));
	}

	/** 从c++层上来的日志. */
	public static final void handleCxxLog(XmsgImSdkEventCxxLog log)
	{
		if (log.getLev() < Log.WARN)
		{
			System.out.println(log.getLog());
			return;
		}
		System.err.println(log.getLog());
	}
}
