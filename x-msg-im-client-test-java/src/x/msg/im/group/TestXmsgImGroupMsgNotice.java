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

import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImGroupMsgNotice;

/**
 * 
 * Created on: 2019年9月2日 下午11:12:34
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupMsgNotice
{
	/** 消息通知. */
	public static final void test(XmsgImGroupMsgNotice notice)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("insert into tb_usr_group_msg values (?, ?, ?, ?, ?, ?)");
		crud.addRow(new XmsgImTbRow()//
				.addText(notice.getGcgt()) //
				.addText(notice.getScgt()) //
				.addBigint(notice.getMsgId())//
				.addBlob(notice.getMsg())//
				.addBigint(notice.getGts())//
				.addBool(false)// 消息未读.
				.build());
		Main.dbApi.futureUsrDat(crud.build(), (ret, desc, rst) -> /* 收到的消息入库. */
		{
			TestXmsgImGroupMsgReadReq.test(notice.getGcgt(), notice.getMsgId()); /* 告知后台, 消息已读. */
		});
	}
}
