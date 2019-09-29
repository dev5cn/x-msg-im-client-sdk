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
package x.msg.im.client;

import java.lang.reflect.Method;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;

import com.google.protobuf.AbstractMessage;
import com.google.protobuf.Message;

import misc.Log;
import misc.Misc;
import misc.Misc.TripletConsumer;
import misc.Pair;
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbResultSet;
import x.msg.im.client.XmsgImClientNetApi.XmsgImClientNetTrans;
import x.msg.im.jni.XmsgImClientJni;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventNetReq;
import x.msg.pb.PbXmsg.XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp;
import x.msg.pb.PbXmsg.XmsgImSdkEventType;

public class XmsgImClientSdk
{
	private static final XmsgImClientSdk inst = new XmsgImClientSdk();
	private final ConcurrentHashMap<Integer, XmsgImClientNetApi> netApi = new ConcurrentHashMap<>();
	private final ConcurrentHashMap<String, Method> msgs = new ConcurrentHashMap<>();
	private Consumer<XmsgImSdkEventCxxLog> cb4cxxLog = null;

	private XmsgImClientSdk()
	{

	}

	public static final XmsgImClientSdk instance()
	{
		return XmsgImClientSdk.inst;
	}

	public final void init()
	{
		XmsgImClientJni.x_msg_im_client_sdk_init();
	}

	public final void exit()
	{
		XmsgImClientJni.x_msg_im_client_sdk_exit();
	}

	public final void setLogOutPut(String output)
	{
		XmsgImClientJni.x_msg_im_client_sdk_misc_log_set_output(output);
	}

	public final void setLogLevel(String level)
	{
		Log.setLevel(level);
		XmsgImClientJni.x_msg_im_client_sdk_misc_log_set_level(level);
	}

	public final void subCxxLog(Consumer<XmsgImSdkEventCxxLog> cb)
	{
		this.cb4cxxLog = cb;
		XmsgImClientJni.x_msg_im_client_sdk_misc_log_sub();
	}

	public final void loop()
	{
		while (true)
		{
			XmsgImSdkEventAdapter evn = this.loop4event();
			if (evn.getEvnType() == XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE)
			{
				this.evn4netNotice(evn.getApiId(), evn.getNetNotice());
				continue;
			}
			if (evn.getEvnType() == XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_REQ)
			{
				this.evn4netReq(evn.getApiId(), evn.getNetReq());
				continue;
			}
			if (evn.getEvnType() == XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_RSP)
			{
				this.evn4netRsp(evn.getApiId(), evn.getNetRsp());
				continue;
			}
			if (evn.getEvnType() == XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_DB_RSP)
			{
				this.evn4dbRsp(evn.getApiId(), evn.getDbRsp());
				continue;
			}
			if (evn.getEvnType() == XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_CXX_LOG)
			{
				this.evn4cxxLog(evn.getCxxLog());
				continue;
			}
			Log.fault("it`s a bug, unexpected event type, evn: %s ", Misc.pb2str(evn));
		}
	}

	public final void addNetApi(XmsgImClientNetApi netApi)
	{
		this.netApi.put(netApi.netApiId, netApi);
	}

	public final XmsgImClientNetApi getNetApi(int netApiId)
	{
		return this.netApi.get(netApiId);
	}

	private final XmsgImSdkEventAdapter loop4event()
	{
		try
		{
			return XmsgImSdkEventAdapter.parseFrom(XmsgImClientJni.x_msg_im_client_sdk_loop());
		} catch (Exception e)
		{
			Log.fault("it`s a bug, e: %s", Log.trace(e));
			return null;
		}
	}

	private final void evn4netNotice(int netApiId, XmsgImSdkEventNetNotice notice)
	{
		XmsgImClientNetApi netApi = this.getNetApi(netApiId);
		if (netApi == null)
		{
			Log.fault("it`s a bug, netApiId: %d, notice: %s", netApiId, Misc.pb2str(notice));
			return;
		}
		if (netApi.cb4notice == null)
		{
			Log.error("forget set event call back? net-api: %s, notice: %s", netApi, Misc.pb2str(notice));
			return;
		}
		Message msg = this.newMsg(notice.getMsg(), notice.getDat().toByteArray());
		if (msg == null)
		{
			Log.error("can not reflect to a pb object from data, net-api: %s, msg: %s", netApi, Misc.pb2str(notice));
			return;
		}
		if (Log.isTrace())
			Log.trace("got a notice on net-api: %d, msg(%s): %s", netApiId, notice.getDescriptorForType().getName(), Misc.pb2str(notice));
		Misc.exeConsumer(netApi.cb4notice, msg);
	}

	private final void evn4netReq(int netApiId, XmsgImSdkEventNetReq req)
	{
		XmsgImClientNetApi netApi = this.getNetApi(netApiId);
		if (netApi == null)
		{
			Log.fault("it`s a bug, netApiId: %d, req: %s", netApiId, Misc.pb2str(req));
			return;
		}
		if (netApi.cb4req == null)
		{
			Log.error("forget set network request transaction call back?  net-api: %s, notice: %s", netApi, Misc.pb2str(req));
			return;
		}
		Message msg = this.newMsg(req.getMsg(), req.getDat().toByteArray());
		if (msg == null)
		{
			Log.error("can not reflect to a pb object from data, net-api: %s, msg: %s", netApi, Misc.pb2str(req));
			return;
		}
		if (Log.isTrace())
			Log.trace("got a network request on net-api: %d, transaction-id: %08X, req(%s): %s", netApiId, req.getTid(), msg.getDescriptorForType().getName(), Misc.pb2str(msg));
		Misc.exeBiConsumer(netApi.cb4req, new XmsgImClientNetTrans(netApiId, req.getTid(), msg), msg);
	}

	private final void evn4netRsp(int netApiId, XmsgImSdkEventNetRsp rsp)
	{
		XmsgImClientNetApi netApi = this.getNetApi(netApiId);
		if (netApi == null)
		{
			Log.fault("it`s a bug, netApiId: %d, rsp: %s", netApiId, Misc.pb2str(rsp));
			return;
		}
		Pair<Message, TripletConsumer<XmsgErrCode, String, Message>> p = XmsgImClientNetApi.transi.remove(rsp.getTid());
		if (p == null)
		{
			Log.fault("it`s a bug, can not found transaction for tid, netApiId: %d, tid: %08X", netApiId, rsp.getTid());
			return;
		}
		if (rsp.getRet() != XmsgErrCode.SUCCESS.getNumber())
		{
			if (rsp.getRet() == XmsgErrCode.NOT_UPDATE.getNumber() 
					|| rsp.getRet() == XmsgErrCode.NO_RECORD.getNumber())
			{
				if (Log.isTrace())
					Log.trace("got a network response on net-api: %d, ret: %s, desc: %s, req(%s): %s", netApiId, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), p.f.getDescriptorForType().getName(), Misc.pb2str(p.f));
			} else
				Log.error("got a network response on net-api: %d, ret: %s, desc: %s, req(%s): %s", netApiId, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), p.f.getDescriptorForType().getName(), Misc.pb2str(p.f));
			Misc.exeTripletConsumer(p.s, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), null);
			return;
		}
		if (Misc.isNull(rsp.getMsg()))
		{
			if (Log.isTrace())
				Log.trace("got a network response on net-api: %d, ret: %s, req(%s): %s", netApiId, XmsgErrCode.get(rsp.getRet()), p.f.getDescriptorForType().getName(), Misc.pb2str(p.f));
			Misc.exeTripletConsumer(p.s, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), null);
			return;
		}
		Message msg = this.newMsg(rsp.getMsg(), rsp.getDat().toByteArray());
		if (msg == null)
		{
			Log.error("can not reflect to a pb object from data, net-api: %s, msg: %s", netApi, Misc.pb2str(rsp));
			return;
		}
		if (Log.isTrace())
			Log.trace("got a network response on net-api: %d, ret: %s, req(%s): %s, rsp(%s): %s", 
					netApiId, XmsgErrCode.get(rsp.getRet()), p.f.getDescriptorForType().getName(), Misc.pb2str(p.f), msg.getDescriptorForType().getName(), Misc.pb2str(msg));
		Misc.exeTripletConsumer(p.s, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), msg);
	}

	private final void evn4dbRsp(int dbApiId, XmsgImSdkEventDbRsp rsp)
	{
		Pair<XmsgImClientDbCrudReq, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet>> p = XmsgImClientDbApi.trans.remove(rsp.getTid());
		if (p == null)
		{
			Log.fault("it`s a bug, can not found transaction for tid: %08X", rsp.getTid());
			return;
		}
		if (rsp.getRet() == XmsgErrCode.SUCCESS.getNumber())
		{
			if (Log.isTrace())
				Log.trace("got a database response, req: %s, rsp: %s", Misc.pb2str(p.f), Misc.pb2str(rsp.getDat()));
		} else
			Log.error("got a database response, ret: %s, desc: %s, req: %s", XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), Misc.pb2str(p.f));
		Misc.exeTripletConsumer(p.s, XmsgErrCode.get(rsp.getRet()), rsp.getDesc(), new XmsgImTbResultSet(rsp.getDat()));
	}

	private final void evn4cxxLog(XmsgImSdkEventCxxLog notice)
	{
		Misc.exeConsumer(this.cb4cxxLog, notice);
	}

	public final Message newMsg(String msg, byte by[])
	{
		try
		{
			Method m = this.msgs.get(msg);
			if (m == null)
			{
				Class<?> c = Class.forName("x.msg.pb.PbXmsg$" + msg);
				m = c.getMethod("newBuilder");
				m.setAccessible(true);
				this.msgs.put(msg, m);
			}
			return ((AbstractMessage.Builder<?>) m.invoke(null)).mergeFrom(by).build();
		} catch (Exception e)
		{
			Log.error("msg: %s, e: %s", msg, Log.trace(e));
			return null;
		}
	}
}
