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
import x.msg.im.client.XmsgErrCode;
import x.msg.im.test.main.Main;

/**
 * 
 * Created on: 2019年8月28日 下午10:39:08
 *
 * Author: dev5@qq.com
 *
 */
public class TestXmsgImGroup
{
	public static final void test()
	{
		// TestXmsgImGroupCreateReq.test();
		// TestXmsgImGroupSendMsgReq.test();
	}

	public static final void createTables()
	{
		/** -------------------------------- */
		/**                                  */
		/** tb_usr_group. */
		/**                                  */
		/** -------------------------------- */
		StringBuilder sql = new StringBuilder();
		sql.append("create table tb_usr_group (\n");
		sql.append("\t cgt text primary key not null,\n");
		sql.append("\t enable bigint not null,\n");
		sql.append("\t info blob,\n");
		sql.append("\t ver4usr bigint not null,\n");
		sql.append("\t ver4group bigint not null,\n");
		sql.append("\t gts4usr bigint not null,\n");
		sql.append("\t uts4usr bigint not null,\n");
		sql.append("\t gts4group bigint not null,\n");
		sql.append("\t uts4group bigint not null\n");
		sql.append(")");
		String str0 = sql.toString();
		Main.dbApi.futureUsrDat(str0, (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_usr_group failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str0);
				return;
			}
			Log.info("create table tb_usr_group successful, sql: \n%s;", str0);
		});
		/** -------------------------------- */
		/**                                  */
		/** tb_usr_group_member. */
		/**                                  */
		/** -------------------------------- */
		sql = new StringBuilder();
		sql.append("create table tb_usr_group_member (\n");
		sql.append("\t gcgt text not null,\n");
		sql.append("\t mcgt text not null,\n");
		sql.append("\t enable bigint not null,\n");
		sql.append("\t info blob,\n");
		sql.append("\t ver bigint not null,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t uts bigint not null, \n");
		sql.append("\t primary key (gcgt, mcgt)\n");
		sql.append(")");
		String str1 = sql.toString();
		Main.dbApi.futureUsrDat(str1, (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_usr_group_member failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str1);
				return;
			}
			Log.info("create table tb_usr_group_member successful, sql: \n%s;", str1);
		});
		/** -------------------------------- */
		/**                                  */
		/** tb_usr_group_config. */
		/**                                  */
		/** -------------------------------- */
		sql = new StringBuilder();
		sql.append("create table tb_usr_group_config (\n");
		sql.append("\t cgt text primary key not null,\n");
		sql.append("\t dispOrder bigint not null,\n");
		sql.append("\t remind text not null,\n");
		sql.append("\t extCfg blob,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t uts bigint not null\n");
		sql.append(")");
		String str2 = sql.toString();
		Main.dbApi.futureUsrDat(str2, (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_usr_group_config failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str2);
				return;
			}
			Log.info("create table tb_usr_group_config successful, sql: \n%s;", str2);
		});
		/** -------------------------------- */
		/**                                  */
		/** tb_usr_group_msg. */
		/**                                  */
		/** -------------------------------- */
		sql = new StringBuilder();
		sql.append("create table tb_usr_group_msg (\n");
		sql.append("\t gcgt text not null,\n");
		sql.append("\t scgt text not null,\n");
		sql.append("\t msgId bigint not null,\n");
		sql.append("\t msg blob not null,\n");
		sql.append("\t gts bigint not null,\n");
		sql.append("\t isRead bigint not null,\n");
		sql.append("\t primary key (gcgt, msgId)\n");
		sql.append(")");
		String str3 = sql.toString();
		Main.dbApi.futureUsrDat(str3, (ret, desc, rst) ->
		{
			if (ret != XmsgErrCode.SUCCESS)
			{
				Log.error("create table tb_usr_group_msg failed, ret: %d, desc: %s, sql: \n%s;", ret, desc, str3);
				return;
			}
			Log.info("create table tb_usr_group_msg successful, sql: \n%s;", str3);
		});
	}
}
