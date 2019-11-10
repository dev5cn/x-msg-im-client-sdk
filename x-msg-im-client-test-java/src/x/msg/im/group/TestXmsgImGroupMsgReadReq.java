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

import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImGroupMsgReadReq;

/**
 * 
 * Created on: 2019年9月2日 下午11:13:17
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroupMsgReadReq
{
	/** 消息已读请求. */
	public static final void test(String cgt, long msgId)
	{
		XmsgImGroupMsgReadReq.Builder req = XmsgImGroupMsgReadReq.newBuilder();
		req.setCgt(cgt);
		req.setMsgId(msgId);
		Main.netApi.future(req.build(), (ret, desc, rsp) -> Misc.donothing());
		//
		String sql = Misc.printf2str("update tb_usr_group_msg set isRead = 0 where gcgt = '%s' and msgId = %d", cgt, msgId);
		Main.dbApi.futureUsrDat(sql, (ret, desc, rst) -> Misc.donothing());
	}
}
