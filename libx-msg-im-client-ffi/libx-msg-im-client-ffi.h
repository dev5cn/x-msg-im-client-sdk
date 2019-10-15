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

#ifndef LIBX_MSG_IM_CLIENT_FFI_H_
#define LIBX_MSG_IM_CLIENT_FFI_H_

extern "C"
{
void x_msg_im_client_sdk_init(); 
int x_msg_im_client_sdk_startup_local_tcp_client(int port); 
unsigned char* x_msg_im_client_sdk_loop(int* len); 
void x_msg_im_client_sdk_exit(); 
int x_msg_im_client_sdk_net_new_api(const char* uri); 
void x_msg_im_client_sdk_net_del_api(int netApiId); 
int x_msg_im_client_sdk_net_future(int netApiId, const char* msg, const char* dat, int len, const char* oob); 
void x_msg_im_client_sdk_net_end_trans(unsigned int dtid, int ret, const char* desc, const char* msg, const char* dat, int len); 
void x_msg_im_client_sdk_net_stop_try(int netApiId); 
int x_msg_im_client_sdk_db_init(const char* path); 
int x_msg_im_client_sdk_db_new_api(const char* cgt); 
void x_msg_im_client_sdk_db_del_api(int dbApiId); 
int x_msg_im_client_sdk_db_future_global(const char* sql); 
int x_msg_im_client_sdk_db_future_usr_org(int dbApiId, const char* sql); 
int x_msg_im_client_sdk_db_future_usr_dat(int dbApiId, const char* sql); 
int x_msg_im_client_sdk_db_future_global_prepare(const char* dat, int len); 
int x_msg_im_client_sdk_db_future_usr_org_prepare(int dbApiId, const char* dat, int len); 
int x_msg_im_client_sdk_db_future_usr_dat_prepare(int dbApiId, const char* dat, int len); 
void x_msg_im_client_sdk_misc_log_set_output(const char* output); 
void x_msg_im_client_sdk_misc_log_set_level(const char* lev); 
void x_msg_im_client_sdk_misc_log_sub(); 
char* x_msg_im_client_sdk_misc_sha256_to_lowercase(const char* org); 
char* x_msg_im_client_sdk_misc_aes128_enc_to_hex_lowercase(const char* key, const char* org); 
char* x_msg_im_client_sdk_misc_aes128_dec_from_hex_lowercase(const char* key, const char* org); 
}

#endif 
