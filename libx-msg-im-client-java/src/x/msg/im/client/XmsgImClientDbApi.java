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

import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;

import com.google.protobuf.Descriptors.Descriptor;
import com.google.protobuf.Message;

import misc.DateMisc;
import misc.Log;
import misc.Misc;
import misc.Misc.TripletConsumer;
import misc.Pair;
import x.msg.im.jni.XmsgImClientJni;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudRsp;
import x.msg.pb.PbXmsg.XmsgImClientDbFiled;
import x.msg.pb.PbXmsg.XmsgImClientDbFiledType;
import x.msg.pb.PbXmsg.XmsgImClientDbRow;

public class XmsgImClientDbApi
{
	public String cgt = null;
	public int dbApiId = 0x00;
	public static final ConcurrentHashMap<Integer, Pair<XmsgImClientDbCrudReq, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet>>> trans = new ConcurrentHashMap<>();

	private XmsgImClientDbApi(String cgt, int dbApiId)
	{
		this.cgt = cgt;
		this.dbApiId = dbApiId;
	}

	public static final boolean openDbGlobal(String path)
	{
		return XmsgImClientJni.x_msg_im_client_sdk_db_init(path) == 0;
	}

	public static final XmsgImClientDbApi newApi(String cgt)
	{
		int dbApiId = XmsgImClientJni.x_msg_im_client_sdk_db_new_api(cgt);
		return dbApiId < 0 ? null : new XmsgImClientDbApi(cgt, dbApiId);
	}

	public final void close()
	{
		XmsgImClientJni.x_msg_im_client_sdk_db_del_api(this.dbApiId);
	}

	public static final boolean futureGlobal(String sql, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_global(sql);
		if (tid < 0)
		{
			Log.error("something error, sql: %s", sql);
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(XmsgImClientDbCrudReq.newBuilder().setSql(sql).build(), cb));
		return true;
	}

	public final boolean futureUsrOrg(String sql, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_usr_org(this.dbApiId, sql);
		if (tid < 0)
		{
			Log.error("something error, sql: %s", sql);
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(XmsgImClientDbCrudReq.newBuilder().setSql(sql).build(), cb));
		return true;
	}

	public final boolean futureUsrDat(String sql, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_usr_dat(this.dbApiId, sql);
		if (tid < 0)
		{
			Log.error("something error, sql: %s", sql);
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(XmsgImClientDbCrudReq.newBuilder().setSql(sql).build(), cb));
		return true;
	}

	public static boolean futureGlobal(XmsgImClientDbCrudReq req, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_global_prepare(req.toByteArray());
		if (tid < 0)
		{
			Log.error("something error, req: %s", Misc.pb2str(req));
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(req, cb));
		return true;
	}

	public final boolean futureUsrOrg(XmsgImClientDbCrudReq req, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_usr_org_prepare(this.dbApiId, req.toByteArray());
		if (tid < 0)
		{
			Log.error("something error, req: %s", Misc.pb2str(req));
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(req, cb));
		return true;
	}

	public final boolean futureUsrDat(XmsgImClientDbCrudReq req, TripletConsumer<XmsgErrCode, String, XmsgImTbResultSet> cb)
	{
		int tid = XmsgImClientJni.x_msg_im_client_sdk_db_future_usr_dat_prepare(this.dbApiId, req.toByteArray());
		if (tid < 0)
		{
			Log.error("something error, req: %s", Misc.pb2str(req));
			return false;
		}
		XmsgImClientDbApi.trans.put(tid, new Pair<>(req, cb));
		return true;
	}

	public static class XmsgImTbRow
	{
		private XmsgImClientDbRow.Builder row = XmsgImClientDbRow.newBuilder();

		public XmsgImTbRow()
		{

		}

		public final XmsgImClientDbRow build()
		{
			return this.row.build();
		}

		public final XmsgImTbRow addText(String val)
		{
			this.row.addCol(XmsgImClientDbFiled.newBuilder().setType(XmsgImClientDbFiledType.X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT).setValText(val));
			return this;
		}

		public final XmsgImTbRow addBigint(long val)
		{
			this.row.addCol(XmsgImClientDbFiled.newBuilder().setType(XmsgImClientDbFiledType.X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT).setValInt(val));
			return this;
		}

		public final XmsgImTbRow addBlob(Message msg)
		{
			this.row.addCol(XmsgImClientDbFiled.newBuilder().setType(XmsgImClientDbFiledType.X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB).setValBlob(msg.toByteString()));
			return this;
		}

		public final XmsgImTbRow addBool(boolean val)
		{
			this.row.addCol(XmsgImClientDbFiled.newBuilder().setType(XmsgImClientDbFiledType.X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT).setValInt(val ? 0 : 1));
			return this;
		}
	}

	public static class XmsgImTbResultSet
	{
		private XmsgImClientDbCrudRsp rsp = null;

		public XmsgImTbResultSet(XmsgImClientDbCrudRsp rsp)
		{
			this.rsp = rsp;
		}

		public int rowSize()
		{
			return this.rsp.getRowCount();
		}

		public int columnSize()
		{
			return this.rsp.getColumnCount();
		}

		public boolean isEmpty()
		{
			return this.rsp.getRowList().isEmpty();
		}

		public final Boolean getBool(int row, int col)
		{
			return this.rsp.getRow(row).getCol(col).getValInt() == 0;
		}

		public final Boolean getBool(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.getBool(row, index);
		}

		public final Integer getInt(int row, int col)
		{
			return (int) this.rsp.getRow(row).getCol(col).getValInt();
		}

		public final Integer getInt(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.getInt(row, index);
		}

		public final Long getLong(int row, int col)
		{
			return this.rsp.getRow(row).getCol(col).getValInt();
		}

		public final Long getLong(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.getLong(row, index);
		}

		public final String getStr(int row, int col)
		{
			return this.rsp.getRow(row).getCol(col).getValText();
		}

		public final String getStr(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.getStr(row, index);
		}

		@SuppressWarnings("unchecked")
		public final <T> T getPb(int row, int col, Descriptor desc)
		{
			return (T) XmsgImClientSdk.instance().newMsg(desc.getName(), this.rsp.getRow(row).getCol(col).getValBlob().toByteArray());
		}

		public final <T> T getPb(int row, String field, Descriptor desc)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.getPb(row, index, desc);
		}

		public final String yyyy_mm_dd_hh_mi_ss(int row, int col)
		{
			return DateMisc.to_yyyy_mm_dd_hh_mm_ss(new Date(this.rsp.getRow(row).getCol(col).getValInt()));
		}

		public final String yyyy_mm_dd_hh_mi_ss(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.yyyy_mm_dd_hh_mi_ss(row, index);
		}

		public final String yyyy_mm_dd_hh_mi_ss_ms(int row, int col)
		{
			return DateMisc.to_yyyy_mm_dd_hh_mm_ss_ms(new Date(this.rsp.getRow(row).getCol(col).getValInt()));
		}

		public final String yyyy_mm_dd_hh_mi_ss_ms(int row, String field)
		{
			Integer index = this.rsp.getColumnMap().get(field);
			if (index == null)
			{
				Log.error("can not found filed in result-set: %s", field);
				return null;
			}
			return this.yyyy_mm_dd_hh_mi_ss_ms(row, index);
		}

		public String toString()
		{
			return Misc.pb2str(rsp);
		}
	}
}
