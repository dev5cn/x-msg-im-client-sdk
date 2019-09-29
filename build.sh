#!/bin/sh
#
cd libmisc-cpp;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libxsc-proto-client-cpp;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-xsc;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-pb-lite;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-pb;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-core;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-net;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-db;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-sdk;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-ffi;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd libx-msg-im-client-jni;chmod 775 build.sh clean.sh;./build.sh;cd ..
cd x-msg-im-client-test-cpp;chmod 775 build.sh clean.sh;./build.sh;cd ..
#
cd libmisc-java;mvn clean;mvn package;cd ..
cd libx-msg-im-client-java;mvn clean;mvn package;cd ..
cd x-msg-im-client-test-java;mvn clean;mvn package;cd ..
