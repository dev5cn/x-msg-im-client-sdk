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
import x.msg.im.client.XmsgImClientDbApi.XmsgImTbRow;
import x.msg.im.client.XmsgImClientNetApi.XmsgImClientNetTrans;
import x.msg.im.group.TestXmsgImGroupSyncReq;
import x.msg.im.test.main.Main;
import x.msg.pb.PbXmsg.XmsgImClientDbCrudReq;
import x.msg.pb.PbXmsg.XmsgImClientDbRow;
import x.msg.pb.PbXmsg.XmsgImOrgEvent;
import x.msg.pb.PbXmsg.XmsgImOrgEventDept;
import x.msg.pb.PbXmsg.XmsgImOrgEventDeptUsr;
import x.msg.pb.PbXmsg.XmsgImOrgEventUsr;
import x.msg.pb.PbXmsg.XmsgImOrgSyncPubReq;
import x.msg.pb.PbXmsg.XmsgImOrgSyncPubRsp;

/**
 * 
 * Created on: 2019年9月2日 下午11:29:18
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImOrgSyncPubReq
{
	/** 组织架构增量变更发布请求(由服务器发起). */
	public static final void test(XmsgImClientNetTrans trans, XmsgImOrgSyncPubReq req)
	{
		if (req.getEventList().isEmpty())
		{
			XmsgImOrgSyncPubRsp.Builder rsp = XmsgImOrgSyncPubRsp.newBuilder();
			rsp.setExt("exception");
			trans.end(rsp.build());
			Log.fault("it`s a bug, req: %s", Misc.pb2str(req));
			return;
		}
		XmsgImOrgSyncPubRsp.Builder rsp = XmsgImOrgSyncPubRsp.newBuilder();
		rsp.setExt("accept");
		trans.end(rsp.build());
		//
		if (req.getEventList().get(0).hasDept()) /* 这一页全是dept. */
		{
			TestXmsgImOrgSyncPubReq.syncDept(req);
			return;
		}
		if (req.getEventList().get(0).hasDeptUsr()) /* 这一页全是dept-usr. */
		{
			TestXmsgImOrgSyncPubReq.syncDeptUsr(req);
			return;
		}
		if (req.getEventList().get(0).hasUsr()) /* 这一页全是usr. */
		{
			TestXmsgImOrgSyncPubReq.syncUsr(req);
			return;
		}
		Log.fault("it`s a bug, req: %s", Misc.pb2str(req));
	}

	/** 部门变更请求. */
	private static final void syncDept(XmsgImOrgSyncPubReq req)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("replace into tb_org_dept values (?, ?, ?, ?, ?, ?, ?, ?, ?)");
		for (XmsgImOrgEvent evn : req.getEventList())
		{
			XmsgImOrgEventDept dept = evn.getDept();
			XmsgImClientDbRow dbRow = new XmsgImTbRow()//
					.addText(dept.getCgt())//
					.addText(Misc.isNull(dept.getPcgt()) ? "" : dept.getPcgt())//
					.addText(dept.getName())//
					.addBool(dept.getEnable())//
					.addBigint(dept.getInfo().getKvMap().get("dispOrder") == null ? 0 : Misc.forceInt0(dept.getInfo().getKvMap().get("dispOrder"))) //
					.addBlob(dept.getInfo())//
					.addBigint(dept.getVer())//
					.addBigint(dept.getGts())//
					.addBigint(dept.getUts()).build();
			crud.addRow(dbRow);
		}
		Main.dbApi.futureUsrOrg(crud.build(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
				Log.error("upsert tb_org_dept failed, ret: %08X, desc: %s", ret, desc);
		});
		long ver = req.getEventList().get(req.getEventCount() - 1).getDept().getVer();
		if (ver == TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptLatest())
			Log.oper("sync organization department finished, latest-version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptLatest());
		else
			Log.info("sync organization department continue, latest-version: %d, current page version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptLatest(), ver);
	}

	/** 部门用户关系变更请求. */
	private static final void syncDeptUsr(XmsgImOrgSyncPubReq req)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("replace into tb_org_dept_usr values (?, ?, ?, ?, ?, ?, ?, ?)");
		for (XmsgImOrgEvent evn : req.getEventList())
		{
			XmsgImOrgEventDeptUsr deptUsr = evn.getDeptUsr();
			XmsgImClientDbRow dbRow = new XmsgImTbRow()//
					.addText(deptUsr.getDcgt())//
					.addText(deptUsr.getUcgt())//
					.addBool(deptUsr.getEnable())//
					.addBigint(deptUsr.getInfo().getKvMap().get("dispOrder") == null ? 0 : Misc.forceInt0(deptUsr.getInfo().getKvMap().get("dispOrder"))) //
					.addBlob(deptUsr.getInfo())//
					.addBigint(deptUsr.getVer())//
					.addBigint(deptUsr.getGts())//
					.addBigint(deptUsr.getUts()).build();
			crud.addRow(dbRow);
		}
		Main.dbApi.futureUsrOrg(crud.build(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
				Log.error("upsert tb_org_dept failed, ret: %08X, desc: %s", ret, desc);
		});
		long ver = req.getEventList().get(req.getEventCount() - 1).getDeptUsr().getVer();
		if (ver == TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptUsrLatest())
			Log.oper("sync organization department user finished, latest-version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptUsrLatest());
		else
			Log.info("sync organization department user continue, latest-version: %d, current page version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4DeptUsrLatest(), ver);
	}

	/** 部门用户关系变更请求. */
	private static final void syncUsr(XmsgImOrgSyncPubReq req)
	{
		XmsgImClientDbCrudReq.Builder crud = XmsgImClientDbCrudReq.newBuilder();
		crud.setSql("replace into tb_org_usr values (?, ?, ?, ?, ?, ?, ?)");
		for (XmsgImOrgEvent evn : req.getEventList())
		{
			XmsgImOrgEventUsr usr = evn.getUsr();
			XmsgImClientDbRow dbRow = new XmsgImTbRow()//
					.addText(usr.getCgt())//
					.addText(usr.getName())//
					.addBool(usr.getEnable())//
					.addBlob(usr.getInfo())//
					.addBigint(usr.getVer())//
					.addBigint(usr.getGts())//
					.addBigint(usr.getUts()).build();
			crud.addRow(dbRow);
		}
		Main.dbApi.futureUsrOrg(crud.build(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
				Log.error("upsert tb_org_usr failed, ret: %08X, desc: %s", ret, desc);
		});
		long ver = req.getEventList().get(req.getEventCount() - 1).getUsr().getVer();
		if (ver == TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4UsrLatest())
		{
			Log.oper("sync organization user finished, latest-version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4UsrLatest());
			TestXmsgImGroupSyncReq.test(); /* 同步完组织架构后, 就开始同步用户的群组数据. */
			return;
		}
		Log.info("sync organization user continue, latest-version: %d, current page version: %d", TestXmsgImOrgSyncSubReq.xmsgImOrgSyncSubRsp.getVer4UsrLatest(), ver);
	}
}
