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
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImOrgNodeDeptUsrQueryReq;

/**
 * 
 * Created on: 2019年9月2日 下午11:32:52
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImOrgNodeDeptUsrQueryReq
{
	/** 部门用户关系查询. */
	public static final void test()
	{
		XmsgImOrgNodeDeptUsrQueryReq.Builder req = XmsgImOrgNodeDeptUsrQueryReq.newBuilder();
		req.setDcgt("im.xmsg.dev5.cn.szo0#8b6cbf533fcb4f45a4f2164cd2a4fdca");
		req.setUcgt("im.xmsg.dev5.cn.szu0@0196749f99c3464ba328b6af9d69806f");
		Main.netApi.future(req.build(), (ret, desc, rsp) -> Log.info("ret: %s, desc: %s, rsp(%s): %s", ret, desc, rsp == null ? "" : rsp.getDescriptorForType().getName(), rsp == null ? "null" : Misc.pb2str(rsp)));
	}
}
