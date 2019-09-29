#!/bin/sh
cp libx-msg-im-client-ffi/libx-msg-im-client-ffi.so ./x-msg-im-client-test-electron/
cd x-msg-im-client-test-electron;npm install;$(npm bin)/electron-rebuild;npm start


