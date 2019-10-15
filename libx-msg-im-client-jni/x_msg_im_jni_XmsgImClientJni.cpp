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

#include <libx-msg-im-client-ffi.h>
#include "x_msg_im_jni_XmsgImClientJni.h"

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1init(JNIEnv* env, jclass cls)
{
	x_msg_im_client_sdk_init();
}

JNIEXPORT jbyteArray JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1loop(JNIEnv* env, jclass cls)
{
	int len;
	unsigned char* dat = x_msg_im_client_sdk_loop(&len);
	jbyteArray arr = env->NewByteArray(len);
	env->SetByteArrayRegion(arr, 0, len, (const jbyte*) dat);
	return arr;
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1exit(JNIEnv* env, jclass cls)
{
	x_msg_im_client_sdk_exit();
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1new_1api(JNIEnv* env, jclass cls, jstring uri)
{
	jboolean copy = JNI_FALSE;
	return x_msg_im_client_sdk_net_new_api(env->GetStringUTFChars(uri, &copy));
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1del_1api(JNIEnv* env, jclass cls, jint netApiId)
{
	x_msg_im_client_sdk_net_del_api(netApiId);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1future(JNIEnv* env, jclass cls, jint netApiId, jstring xmsg, jbyteArray xdat, jstring xoob)
{
	if (xmsg == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* msg = env->GetStringUTFChars(xmsg, &copy);
	jbyte* dat = xdat == NULL ? NULL : env->GetByteArrayElements(xdat, &copy);
	int len = xdat == NULL ? 0 : env->GetArrayLength(xdat);
	const char* oob = (xoob == NULL ? NULL : env->GetStringUTFChars(xoob, &copy));
	int ret = x_msg_im_client_sdk_net_future(netApiId, msg, (const char*) dat, len, oob);
	if (xdat != NULL)
		env->ReleaseByteArrayElements(xdat, dat, 0);
	return ret;
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1end_1trans(JNIEnv* env, jclass cls, jint dtid, jint ret, jstring xdesc, jstring xmsg, jbyteArray xdat)
{
	jboolean copy = JNI_FALSE;
	const char* desc = xdesc == NULL ? NULL : env->GetStringUTFChars(xdesc, &copy);
	const char* msg = xmsg == NULL ? NULL : env->GetStringUTFChars(xmsg, &copy);
	jbyte* dat = xdat == NULL ? NULL : env->GetByteArrayElements(xdat, &copy);
	int len = xdat == NULL ? 0 : env->GetArrayLength(xdat);
	x_msg_im_client_sdk_net_end_trans(dtid, ret, desc, msg, (const char*) dat, len);
	if (xdat != NULL)
		env->ReleaseByteArrayElements(xdat, dat, 0);
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1stop_1try(JNIEnv* env, jclass cls, jint netApiId)
{
	x_msg_im_client_sdk_net_stop_try(netApiId);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1init(JNIEnv* env, jclass cls, jstring xpath)
{
	if (xpath == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* path = env->GetStringUTFChars(xpath, &copy);
	return x_msg_im_client_sdk_db_init(path);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1new_1api(JNIEnv* env, jclass cls, jstring xcgt)
{
	if (xcgt == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* cgt = env->GetStringUTFChars(xcgt, &copy);
	return x_msg_im_client_sdk_db_new_api(cgt);
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1del_1api(JNIEnv* env, jclass cls, jint dbApiId)
{
	x_msg_im_client_sdk_db_del_api(dbApiId);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1global(JNIEnv* env, jclass cls, jstring xsql)
{
	if (xsql == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* sql = env->GetStringUTFChars(xsql, &copy);
	return x_msg_im_client_sdk_db_future_global(sql);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1org(JNIEnv* env, jclass cls, jint dbApiId, jstring xsql)
{
	if (xsql == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* sql = env->GetStringUTFChars(xsql, &copy);
	return x_msg_im_client_sdk_db_future_usr_org(dbApiId, sql);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1dat(JNIEnv* env, jclass cls, jint dbApiId, jstring xsql)
{
	if (xsql == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	const char* sql = env->GetStringUTFChars(xsql, &copy);
	return x_msg_im_client_sdk_db_future_usr_dat(dbApiId, sql);
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1global_1prepare(JNIEnv* env, jclass cls, jbyteArray xdat)
{
	if (xdat == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	jbyte* dat = env->GetByteArrayElements(xdat, &copy);
	int len = env->GetArrayLength(xdat);
	jint tid = x_msg_im_client_sdk_db_future_global_prepare((const char*) dat, len);
	env->ReleaseByteArrayElements(xdat, dat, 0);
	return tid;
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1org_1prepare(JNIEnv* env, jclass cls, jint dbApiId, jbyteArray xdat)
{
	if (xdat == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	jbyte* dat = env->GetByteArrayElements(xdat, &copy);
	int len = env->GetArrayLength(xdat);
	jint tid = x_msg_im_client_sdk_db_future_usr_org_prepare(dbApiId, (const char*) dat, len);
	env->ReleaseByteArrayElements(xdat, dat, 0);
	return tid;
}

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1dat_1prepare(JNIEnv* env, jclass cls, jint dbApiId, jbyteArray xdat)
{
	if (xdat == NULL)
		return -1;
	jboolean copy = JNI_FALSE;
	jbyte* dat = env->GetByteArrayElements(xdat, &copy);
	int len = env->GetArrayLength(xdat);
	jint tid = x_msg_im_client_sdk_db_future_usr_dat_prepare(dbApiId, (const char*) dat, len);
	env->ReleaseByteArrayElements(xdat, dat, 0);
	return tid;
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1set_1output(JNIEnv* env, jclass cls, jstring xoutput)
{
	if (xoutput == NULL)
		return;
	jboolean copy = JNI_FALSE;
	const char* output = env->GetStringUTFChars(xoutput, &copy);
	x_msg_im_client_sdk_misc_log_set_output(output);
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1set_1level(JNIEnv* env, jclass cls, jstring xlevel)
{
	if (xlevel == NULL)
		return;
	jboolean copy = JNI_FALSE;
	const char* level = env->GetStringUTFChars(xlevel, &copy);
	x_msg_im_client_sdk_misc_log_set_level(level);
}

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1sub(JNIEnv* env, jclass cls)
{
	x_msg_im_client_sdk_misc_log_sub();
}
