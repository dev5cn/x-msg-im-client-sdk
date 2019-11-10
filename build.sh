#!/bin/sh
#
chmod 775 */*.sh
#
cd libmisc-cpp;./build.sh;cd ..
cd libxsc-proto-cpp;./build.sh;cd ..
cd libx-msg-im-client-xsc;./build.sh;cd ..
cd libx-msg-im-client-pb-lite;./build.sh;cd ..
cd libx-msg-im-client-pb;./build.sh;cd ..
cd libx-msg-im-client-core;./build.sh;cd ..
cd libx-msg-im-client-net;./build.sh;cd ..
cd libx-msg-im-client-db;./build.sh;cd ..
cd libx-msg-im-client-sdk;./build.sh;cd ..
cd libx-msg-im-client-ffi;./build.sh;cd ..
cd libx-msg-im-client-jni;./build.sh;cd ..
cd x-msg-im-client-test-cpp;./build.sh;cd ..
#
cd libmisc-java;mvn clean;mvn package;cd ..
cd libx-msg-im-client-java;mvn clean;mvn package;cd ..
cd x-msg-im-client-test-java;mvn clean;mvn package;cd ..
