#!/bin/sh
if [ ! -d "db" ]; then
  mkdir db
fi
export LD_LIBRARY_PATH=./libx-msg-im-client-ffi:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=./libx-msg-im-client-jni:$LD_LIBRARY_PATH
java -Xrs -jar ./x-msg-im-client-test-java/target/x-msg-im-client-test-java-0.0.1-SNAPSHOT.one-jar.jar 
