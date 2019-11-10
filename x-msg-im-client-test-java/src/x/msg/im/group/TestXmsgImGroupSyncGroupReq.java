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

import java.util.List;

import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImClientKv;
import x.msg.pb.PbXmsg.XmsgImGroupSyncGroupEventInfo;
import x.msg.pb.PbXmsg.XmsgImGroupSyncGroupEventMember;
import x.msg.pb.PbXmsg.XmsgImGroupSyncGroupReq;
import x.msg.pb.PbXmsg.XmsgImGroupSyncGroupRsp;

/**
 * 
 * Created on: 2019年9月2日 下午11:16:02
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupSyncGroupReq
{
	/** 群组内事件同步. */
	public static final void test(String gcgt)
	{
		String sql = Misc.printf2str("select ver4group from tb_usr_group where cgt = '%s'", gcgt);
		Main.dbApi.futureUsrDat(sql, (ret, desc, rst) -> /* 查找此群组在本地的版本号. */
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("database exception, ret: %s, desc: %s", ret, desc);
				return;
			}
			TestXmsgImGroupSyncGroupReq.syncEvent(gcgt, rst.getLong(0, 0));
		});
	}

	/** 群组内事件同步(同步完后就开始同步消息). */
	private static final void syncEvent(String gcgt, long ver)
	{
		XmsgImGroupSyncGroupReq.Builder req = XmsgImGroupSyncGroupReq.newBuilder();
		req.setCgt(gcgt);
		req.setVer(ver);
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret == XmsgErrCode.NOT_UPDATE) /* 没有任何更新. */
			{
				Log.debug("local group data is latest, no need sync any more, gcgt: %s", gcgt);
				TestXmsgImGroupMsgSyncReq.test(gcgt); /* 同步组内消息. */
				return;
			}
			if (ret == XmsgErrCode.NO_RECORD) /* 群里面已经没有任何, 且没有任何群组自身信息变更. */
			{
				Log.debug("group have no member, gcgt: %s", gcgt);
				TestXmsgImGroupMsgSyncReq.test(gcgt); /* 同步组内消息. */
				return;
			}
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("sync group info failed, ret: %s, desc: %s, gcgt: %s", ret, desc, gcgt);
				return;
			}
			XmsgImGroupSyncGroupRsp r = Misc.get(rsp);
			if (r.hasInfo()) /* 群组信息发生变化. */
			{
				long latestVer = r.getInfo().getVer();
				if (!r.getMemberList().isEmpty()) /* 如果成员亦有变化. */
				{
					long v = r.getMember(r.getMemberCount() - 1).getVer();
					latestVer = latestVer < v ? v : latestVer; /* 且成员的变化版本号大于群自身变化的版本号. */
				}
				TestXmsgImGroupSyncGroupReq.updateGroupInfo2db(gcgt, r.getInfo(), latestVer);
			}
			if (!r.getMemberList().isEmpty()) /* 群组成员发生变化. */
				TestXmsgImGroupSyncGroupReq.updateGroupMember2db(gcgt, r.getMemberList());
			//
			TestXmsgImGroupMsgSyncReq.test(gcgt); /* 同步组内消息. */
		});
	}

	/** 更新群组信息至本地数据库. */
	private static final void updateGroupInfo2db(String gcgt, XmsgImGroupSyncGroupEventInfo info, long latestVer)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("update tb_usr_group set info = ?, ver4group = ?, uts4group = ? where cgt = ?");
		crud.addRow(new XmsgImTbRow()//
				.addBlob(XmsgImClientKv.newBuilder().putAllKv(info.getInfoMap()).build())//
				.addBigint(latestVer)//
				.addBigint(info.getUts())//
				.addText(gcgt)//
				.build());
		Main.dbApi.futureUsrDat(crud.build(), (ret, desc, rst) -> Misc.donothing());
	}

	/** 更新群组成员信息至本地数据库. */
	private static final void updateGroupMember2db(String gcgt, List<XmsgImGroupSyncGroupEventMember> member)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("replace into tb_usr_group_member values (?, ?, ?, ?, ?, ?, ?)");
		for (XmsgImGroupSyncGroupEventMember m : member)
		{
			crud.addRow(new XmsgImTbRow()//
					.addText(gcgt)//
					.addText(m.getCgt())//
					.addBool("upsert".equals(m.getOper())) //
					.addBlob(XmsgImClientKv.newBuilder().putAllKv(m.getInfoMap()).build())//
					.addBigint(m.getVer())//
					.addBigint(m.getGts())//
					.addBigint(m.getUts())//
					.build());
		}
		Main.dbApi.futureUsrDat(crud.build(), (ret, desc, rst) -> Misc.donothing());
	}
}
