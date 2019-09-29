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
package x.msg.im.org;

import misc.Log;
import misc.Misc;
import x.msg.im.client.XmsgErrCode;
import x.msg.im.group.TestXmsgImGroupSyncReq;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImOrgSyncSubReq;
import x.msg.pb.PbXmsg.XmsgImOrgSyncSubRsp;

/**
 * 
 * Created on: 2019年9月2日 下午11:25:41
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImOrgSyncSubReq
{
	public static XmsgImOrgSyncSubRsp xmsgImOrgSyncSubRsp = null;

	/** 同步组织架构. */
	public static final void test()
	{
		String sql = "select max(d.ver), max(du.ver), max(u.ver) from tb_org_dept as d, tb_org_dept_usr as du, tb_org_usr as u";
		Main.dbApi.futureUsrOrg(sql /* 取本地数据库中最新三个版本号. */, (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("database exception");
				return;
			}
			TestXmsgImOrgSyncSubReq.sub(rst.getLong(0, 0), rst.getLong(0, 1), rst.getLong(0, 2));
		});
	}

	/** 同步组织架构. */
	private static final void sub(long ver4dept, long ver4deptUsr, long ver4usr)
	{
		XmsgImOrgSyncSubReq.Builder req = XmsgImOrgSyncSubReq.newBuilder();
		req.setVer4Dept(ver4dept);
		req.setVer4DeptUsr(ver4deptUsr);
		req.setVer4Usr(ver4usr);
		Main.netApi.future(req.build(), (ret, desc, rsp) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
				return;
			TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp = Misc.get(rsp);
			if (TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptLatest() == req.getVer4Dept() //
					&& TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptUsrLatest() == req.getVer4DeptUsr() //
					&& TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4UsrLatest() == req.getVer4Usr()) /* 不需要同步, 服务器亦不会下发. */
			{
				Log.oper("local organization data is latest, no need sync any more");
				TestXmsgImGroupSyncReq.test(); /* 如果本地就是最新的, 就那就始同步群组. */
			}
		});
	}
}
