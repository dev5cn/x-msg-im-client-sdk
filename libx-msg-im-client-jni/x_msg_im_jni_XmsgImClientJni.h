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
#include "jni.h"

#ifndef _Included_x_msg_im_jni_XmsgImClientJni
#define _Included_x_msg_im_jni_XmsgImClientJni
#ifdef __cplusplus
extern "C" {
#endif
JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1init
  (JNIEnv *, jclass);

JNIEXPORT jbyteArray JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1loop
  (JNIEnv *, jclass);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1exit
  (JNIEnv *, jclass);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1new_1api
  (JNIEnv *, jclass, jstring);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1del_1api
  (JNIEnv *, jclass, jint);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1future
  (JNIEnv *, jclass, jint, jstring, jbyteArray);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1end_1trans
  (JNIEnv *, jclass, jint, jint, jstring, jstring, jbyteArray);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1net_1stop_1try
  (JNIEnv *, jclass, jint);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1init
  (JNIEnv *, jclass, jstring);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1new_1api
  (JNIEnv *, jclass, jstring);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1del_1api
  (JNIEnv *, jclass, jint);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1global
  (JNIEnv *, jclass, jstring);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1org
  (JNIEnv *, jclass, jint, jstring);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1dat
  (JNIEnv *, jclass, jint, jstring);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1global_1prepare
  (JNIEnv *, jclass, jbyteArray);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1org_1prepare
  (JNIEnv *, jclass, jint, jbyteArray);

JNIEXPORT jint JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1db_1future_1usr_1dat_1prepare
  (JNIEnv *, jclass, jint, jbyteArray);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1set_1output
  (JNIEnv *, jclass, jstring);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1set_1level
  (JNIEnv *, jclass, jstring);

JNIEXPORT void JNICALL Java_x_msg_im_jni_XmsgImClientJni_x_1msg_1im_1client_1sdk_1misc_1log_1sub
  (JNIEnv *, jclass);

#ifdef __cplusplus
}
#endif
#endif
