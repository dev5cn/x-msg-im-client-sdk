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
import x.msg.pb.PbXmsg.XmsgImGroupSendMsgReq;
import x.msg.pb.PbXmsg.XmsgImGroupSendMsgRsp;
import x.msg.pb.PbXmsg.XmsgImMsg;

/**
 * 
 * Created on: 2019年9月2日 下午11:11:57
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupSendMsgReq
{
	/** 发送消息. */
	public static final void test()
	{
		XmsgImGroupSendMsgReq.Builder req = XmsgImGroupSendMsgReq.newBuilder();
		req.setCgt("im.xmsg.dev5.cn.szu0@e4f7e64408cc43e58d6eeb248f17c446"); /* usr01. */
		req.setLocalMsgId(Misc.randInt());
		XmsgImMsg.Builder msg = XmsgImMsg.newBuilder();
		msg.setType("text");
		msg.getTextBuilder().setText("send to usr01 xx");
		req.setMsg(msg);
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("send message failed, ret: %s, desc: %s", ret, desc);
				return;
			}
			Log.info("send message successful, rsp(%s): %s", rsp.getDescriptorForType().getName(), Misc.pb2str(rsp));
			//
			XmsgImGroupSendMsgRsp r = Misc.get(rsp);
			XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
			crud.setSql("insert into tb_usr_group_msg values (?, ?, ?, ?, ?, ?)");
			crud.addRow(new XmsgImTbRow()//
					.addText(Misc.isNull(r.getGcgt()) ? req.getCgt() : r.getGcgt()) /* 这里的问题是: 如果消息发送的目标是个体, 服务器会返回与之相关的group channel global title. */
					.addText(Main.cgt) //
					.addBigint(r.getMsgId())//
					.addBlob(req.getMsg())//
					.addBigint(r.getGts())//
					.addBool(true)//
					.build());
			Main.dbApi.futureUsrDat(crud.build(), (retx, descx, rst) -> Misc.donothing());
		});
	}
}
