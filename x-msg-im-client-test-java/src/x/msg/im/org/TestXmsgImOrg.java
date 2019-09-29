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
import x.msg.im.client.XmsgErrCode;
import x.msg.im.test.main.Main;

/**
 * 
 * Created on: 2019年8月28日 下午10:39:37
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImOrg
{
	public static final void test()
	{
		TestXmsgImOrgSyncSubReq.test();
	}

	/** 创建一些必要的表. */
	public static final void createTables()
	{
		/** -------------------------------- */
		/**                                  */
		/** tb_org_dept. */
		/**                                  */
		/** -------------------------------- */
		StringBuilder sql = new StringBuilder();
		sql.append("create table tb_org_dept (\n");
		sql.append("\t cgt text primary key not null,\n");
		sql.append("\t pcgt text,\n");
		sql.append("\t name text not null,\n");
		sql.append("\t enable bigint not null,\n");
		sql.append("\t dispOrder bigint not null,\n");
		sql.append("\t info blob not null,\n");
		sql.append("\t ver bigint not null,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t uts bigint not null\n");
		sql.append(")");
		String str0 = sql.toString();
		Main.dbApi.futureUsrOrg(sql.toString(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_org_dept failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str0);
				return;
			}
			Log.info("create table tb_org_dept successful, sql: \n%s;", str0);
		});
		/** -------------------------------- */
		/**                                  */
		/** tb_org_usr. */
		/**                                  */
		/** -------------------------------- */
		sql = new StringBuilder();
		sql.append("create table tb_org_usr (\n");
		sql.append("\t cgt text primary key not null,\n");
		sql.append("\t name text not null,\n");
		sql.append("\t enable bigint not null,\n");
		sql.append("\t info blob not null,\n");
		sql.append("\t ver bigint not null,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t uts bigint not null\n");
		sql.append(")");
		String str1 = sql.toString();
		Main.dbApi.futureUsrOrg(sql.toString(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_org_usr failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str1);
				return;
			}
			Log.info("create table tb_org_usr successful, sql: \n%s;", str1);
		});
		/** -------------------------------- */
		/**                                  */
		/** tb_org_dept_usr. */
		/**                                  */
		/** -------------------------------- */
		sql = new StringBuilder();
		sql.append("create table tb_org_dept_usr (\n");
		sql.append("\t dcgt text not null,\n");
		sql.append("\t ucgt text not null,\n");
		sql.append("\t enable bigint not null,\n");
		sql.append("\t dispOrder bigint not null,\n");
		sql.append("\t info blob not null,\n");
		sql.append("\t ver bigint not null,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t uts bigint not null,\n");
		sql.append("\t primary key (dcgt, ucgt)\n");
		sql.append(")");
		String str2 = sql.toString();
		Main.dbApi.futureUsrOrg(sql.toString(), (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_org_dept_usr failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str2);
				return;
			}
			Log.info("create table tb_org_dept_usr successful, sql: \n%s;", str2);
		});
	}
}
