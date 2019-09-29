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
package x.msg.im.group;

import java.util.concurrent.atomic.AtomicInteger;

import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImClientKv;
import x.msg.pb.PbXmsg.XmsgImGroupSyncEvent;
import x.msg.pb.PbXmsg.XmsgImGroupSyncReq;
import x.msg.pb.PbXmsg.XmsgImGroupSyncRsp;

/**
 * 
 * Created on: 2019年9月2日 下午11:14:39
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupSyncReq
{
	/** 群组同步. */
	public static final void test()
	{
		Main.dbApi.futureUsrDat("select max(ver4usr) from tb_usr_group", (ret, desc, rst) -> /* 查找本地数据库中用户群组变更的最大版本号. */
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("database exception, ret: %s, desc: %s", ret, desc);
				return;
			}
			TestXmsgImGroupSyncReq.syncGroup(rst.getLong(0, 0));
		});
	}

	/** 同步群组. */
	private static final void syncGroup(long maxVer)
	{
		XmsgImGroupSyncReq.Builder req = XmsgImGroupSyncReq.newBuilder();
		req.setVer4Usr(maxVer);
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret == XmsgErrCode.NOT_UPDATE) /* 没有任何更新. */
			{
				Log.oper("local group data is latest, no need sync any more");
				TestXmsgImGroupSyncReq.syncGroupInfo();
				return;
			}
			if (ret == XmsgErrCode.NO_RECORD) /* 你已不在任何群里. */
			{
				Log.oper("you have no group");
				return;
			}
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("sync group failed, ret: %s, desc: %s", ret, desc);
				return;
			}
			Log.info("sync user group successful, rsp(%s): %s", rsp.getDescriptorForType().getName(), Misc.pb2str(rsp));
			//
			XmsgImGroupSyncRsp r = Misc.get(rsp);
			AtomicInteger counter = new AtomicInteger(r.getEventCount());
			for (XmsgImGroupSyncEvent evn : r.getEventList())
			{
				if ("insert".equals(evn.getOper())) /* 被添加进群. */
				{
					XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
					crud.setSql("replace into tb_usr_group values (?, ?, ?, ?, ?, ?, ?, ?, ?)");
					crud.addRow(new XmsgImTbRow()//
							.addText(evn.getCgt()) //
							.addBool(true) //
							.addBlob(XmsgImClientKv.newBuilder().putAllKv(evn.getInfoMap()).build())//
							.addBigint(evn.getVer4Usr())//
							.addBigint(0x00)// 此时还不清楚群组的更多信息.
							.addBigint(evn.getGts4Usr())//
							.addBigint(evn.getUts4Usr())//
							.addBigint(evn.getGts4Group())//
							.addBigint(0x00)// 此时还不清楚群组的更多信息.
							.build());
					Main.dbApi.futureUsrDat(crud.build(), (retx, descx, rst) ->
					{
						if (counter.decrementAndGet() == 0) /* 全部入库完毕. */
							TestXmsgImGroupSyncReq.syncGroupInfo();
					});
					continue;
				}
				if ("delete".equals(evn.getOper())) /* 被群删除. */
				{
					String sql = Misc.printf2Str("update tb_usr_group set enable = 1, ver4usr = %d, uts4usr = %d where cgt = '%s'", evn.getCgt(), evn.getVer4Usr(), evn.getUts4Usr());
					Main.dbApi.futureUsrDat(sql, (retx, descx, rst) ->
					{
						if (counter.decrementAndGet() == 0) /* 全部入库完毕. */
							TestXmsgImGroupSyncReq.syncGroupInfo();
					});
					continue;
				}
				Log.fault("unexpected group operation type, evn: %s", Misc.pb2str(evn));
				if (counter.decrementAndGet() == 0) /* 全部入库完毕. */
					TestXmsgImGroupSyncReq.syncGroupInfo();
			}
		});
	}

	/** 同步组内信息. */
	private static final void syncGroupInfo()
	{
		Main.dbApi.futureUsrDat("select cgt from tb_usr_group where enable = 0", (ret, desc, rst) -> /* 查找所有未被禁用的群组. */
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("database exception, ret: %s, desc: %s", ret, desc);
				return;
			}
			Log.oper("i have %d groups", rst.rowSize());
			for (int i = 0; i < rst.rowSize(); ++i)
				TestXmsgImGroupSyncGroupReq.test(rst.getStr(i, 0)); /* 同步组内事件. */
		});
	}
}
