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
package x.msg.file;

import misc.DateMisc;
import misc.Log;
import misc.Misc;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgFileUsrFileInfoQueryReq;

/**
 * 
 * Created on: 2019年9月22日 下午1:37:20
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgFileUsrFileInfoQueryReq
{
	public static final void test()
	{
		XmsgFileUsrFileInfoQueryReq.Builder b = XmsgFileUsrFileInfoQueryReq.newBuilder();
		b.setEts(DateMisc.nowGmt0().getTime());
		b.setPage(1);
		b.setPageSize(1);
		Main.netApi.future(b.build(), (ret, desc, rsp) -> Log.info("ret: %s, desc: %s, rsp: %s", ret, desc, rsp == null ? "null" : Misc.pb2str(rsp)));
	}
}
