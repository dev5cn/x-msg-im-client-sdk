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

import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImGroupMsgHistory;
import x.msg.pb.PbXmsg.XmsgImGroupMsgSyncReq;
import x.msg.pb.PbXmsg.XmsgImGroupMsgSyncRsp;

/**
 * 
 * Created on: 2019年9月3日 下午7:44:29
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupMsgSyncReq
{
	/** 群组内消息同步. */
	public static final void test(String cgt)
	{
		String sql = Misc.printf2str("select max(msgId) from tb_usr_group_msg where gcgt = '%s'", cgt);
		Main.dbApi.futureUsrDat(sql, (ret, desc, rst) -> /* 查找此群组中最大的消息id. */
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("database exception, ret: %s, desc: %s", ret, desc);
				return;
			}
			TestXmsgImGroupMsgSyncReq.syncMsg(cgt, rst.getLong(0, 0));
		});
	}

	/** 同步最近的消息. */
	private static final void syncMsg(String cgt, long maxMsgId)
	{
		XmsgImGroupMsgSyncReq.Builder req = XmsgImGroupMsgSyncReq.newBuilder();
		req.setCgt(cgt);
		req.setMsgId(maxMsgId);
		req.setLatest(99);
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret == XmsgErrCode.NO_RECORD) /* 没有新的消息产生. */
			{
				Log.info("no message need to sync, group: %s, local max message id: %d", cgt, maxMsgId);
				return;
			}
			XmsgImGroupMsgSyncRsp r = Misc.get(rsp);
			XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
			crud.setSql("insert into tb_usr_group_msg values (?, ?, ?, ?, ?, ?)");
			for (XmsgImGroupMsgHistory histo : r.getMsgList())
			{
				crud.addRow(new XmsgImTbRow()//
						.addText(cgt)//
						.addText(histo.getScgt()) //
						.addBigint(histo.getMsgId())//
						.addBlob(histo.getMsg())//
						.addBigint(histo.getGts())//
						.addBool(histo.getIsRead() ? true : histo.getScgt().equals(Main.cgt))// 如果是自己发出的, 就是已读.
						.build());
			}
			Main.dbApi.futureUsrDat(crud.build(), (retx, descx, rst) -> Misc.donothing());
		});
	}
}
