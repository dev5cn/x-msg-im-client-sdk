#!/bin/sh
if [ ! -d "db" ]; then
  mkdir db
fi
./x-msg-im-client-test-cpp/x-msg-im-client-test-cpp
