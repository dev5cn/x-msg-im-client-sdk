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

import java.util.concurrent.ConcurrentHashMap;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

import com.google.protobuf.Message;

import misc.Log;
import misc.Misc;
import misc.Misc.TripletConsumer;
import misc.Pair;
import x.msg.im.jni.XmsgImClientJni;

public class XmsgImClientNetApi
{
	public String uri = null;
	public int netApiId = 0x00;
	public static final ConcurrentHashMap<Integer, Pair<Message , TripletConsumer<XmsgErrCode, String, Message>>> transi = new ConcurrentHashMap<>();
	public Consumer<Message> cb4notice;
	public BiConsumer<XmsgImClientNetTrans, Message> cb4req;

	private XmsgImClientNetApi(String uri, int netApiId)
	{
		this.uri = uri;
		this.netApiId = netApiId;
	}

	public static final XmsgImClientNetApi newApi(String uri)
	{
		int netApiId = XmsgImClientJni.x_msg_im_client_sdk_net_new_api(uri);
		if (netApiId < 0)
			return null;
		XmsgImClientNetApi netApi = new XmsgImClientNetApi(uri, netApiId);
		XmsgImClientSdk.instance().addNetApi(netApi);
		return netApi;
	}

	public final void subEvn(Consumer<Message> cb)
	{
		this.cb4notice = cb;
	}

	public final void subReq(BiConsumer<XmsgImClientNetTrans, Message> cb)
	{
		this.cb4req = cb;
	}

	public final boolean future(Message msg, TripletConsumer<XmsgErrCode, String, Message> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_net_future(this.netApiId, msg.getDescriptorForType().getName(), msg.toByteArray());
		if (tid < 0)
		{
			Log.error("something error, msg: %s", Misc.pb2str(msg));
			return false;
		}
		XmsgImClientNetApi.transi.put(tid, new Pair<>(msg, cb));
		return true;
	}

	public final void stopTry()
	{
		XmsgImClientJni.x_msg_im_client_sdk_net_stop_try(this.netApiId);
	}

	public final void close()
	{
		XmsgImClientJni.x_msg_im_client_sdk_net_del_api(this.netApiId);
	}

	public String toString()
	{
		return Misc.printf2Str("uri: %s, instance-id: %d", this.uri, this.netApiId);
	}

	public static class XmsgImClientNetTrans
	{
		public int netApiId = 0;
		public int tid = 0;
		public Message req = null;
		public XmsgErrCode ret = null;
		public String desc = null;
		public Message rsp = null;

		public XmsgImClientNetTrans(int netApiId, int tid, Message req)
		{
			this.netApiId = netApiId;
			this.tid = tid;
			this.req = req;
		}

		public final void end(Message msg)
		{
			this.ret = XmsgErrCode.SUCCESS;
			this.rsp = msg;
			this.end();
		}

		public final void end(XmsgErrCode ret)
		{
			this.ret = ret;
			this.end();
		}

		public final void end(XmsgErrCode ret, String desc)
		{
			this.ret = ret;
			this.desc = desc;
			this.end();
		}

		public final void end(XmsgErrCode ret, String print, Object... args)
		{
			this.ret = ret;
			this.desc = Misc.printf2Str(print, args);
			this.end();
		}

		private final void end()
		{
			XmsgImClientJni.x_msg_im_client_sdk_net_end_trans(this.tid, this.ret.getNumber(), this.desc, this.rsp == null ? null : this.rsp.getClass().getSimpleName(), this.rsp == null ? null : this.rsp.toByteArray());
		}
	}
}
