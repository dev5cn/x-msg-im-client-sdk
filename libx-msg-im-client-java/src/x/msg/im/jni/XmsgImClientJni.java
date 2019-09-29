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
package x.msg.im.jni;

public class XmsgImClientJni
{
	public static native void x_msg_im_client_sdk_init();

	public static native byte[] x_msg_im_client_sdk_loop();

	public static native void x_msg_im_client_sdk_exit();

	public static native int x_msg_im_client_sdk_net_new_api(String host);

	public static native void x_msg_im_client_sdk_net_del_api(int netApiId);

	public static native int x_msg_im_client_sdk_net_future(int netApiId, String msg, byte dat[]);

	public static native void x_msg_im_client_sdk_net_end_trans(int dtid, int ret, String desc, String msg, byte dat[]);

	public static native void x_msg_im_client_sdk_net_stop_try(int netApiId);

	public static native int x_msg_im_client_sdk_db_init(String path);

	public static native int x_msg_im_client_sdk_db_new_api(String cgt);

	public static native void x_msg_im_client_sdk_db_del_api(int dbApiId);

	public static native int x_msg_im_client_sdk_db_future_global(String sql);

	public static native int x_msg_im_client_sdk_db_future_usr_org(int dbApiId, String sql);

	public static native int x_msg_im_client_sdk_db_future_usr_dat(int dbApiId, String sql);

	public static native int x_msg_im_client_sdk_db_future_global_prepare(byte dat[]);

	public static native int x_msg_im_client_sdk_db_future_usr_org_prepare(int dbApiId, byte dat[]);

	public static native int x_msg_im_client_sdk_db_future_usr_dat_prepare(int dbApiId, byte dat[]);

	public static native void x_msg_im_client_sdk_misc_log_set_output(String output);

	public static native void x_msg_im_client_sdk_misc_log_set_level(String lev);

	public static native void x_msg_im_client_sdk_misc_log_sub();
}
