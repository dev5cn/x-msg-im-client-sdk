#!/bin/bash
ulimit -c unlimited
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libmisc-cpp/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libxsc-proto-client-cpp/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-core/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-xsc/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-net/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-pb/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-sdk/Debug:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/home/xzwdev/dev/libx-msg-im-client-js/Debug:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=/home/xzwdev/tools/protobuf-3.5.1/lib:$LD_LIBRARY_PATH
npm start

