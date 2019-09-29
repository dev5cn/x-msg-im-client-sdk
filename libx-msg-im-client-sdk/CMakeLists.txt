cmake_minimum_required(VERSION 2.8.12.2)

IF($ENV{PLAT} MATCHES "ANDROID")
        ADD_DEFINITIONS(-DANDROID -DLINUX)
	set(CMAKE_SYSTEM_NAME Android)
        set(CMAKE_ANDROID_NDK $ENV{CMAKE_ANDROID_NDK})
        set(CMAKE_SYSTEM_VERSION $ENV{CMAKE_SYSTEM_VERSION})
        set(CMAKE_ANDROID_ARCH_ABI $ENV{CMAKE_ANDROID_ARCH_ABI})
        set(CMAKE_ANDROID_STL_TYPE $ENV{CMAKE_ANDROID_STL_TYPE})
ELSE ()
        ADD_DEFINITIONS(-D$ENV{PLAT})
ENDIF()

INCLUDE_DIRECTORIES(../libmisc-cpp/ ../libxsc-proto-client-cpp ../libx-msg-im-client-xsc ../libx-msg-im-client-core/ ../libx-msg-im-client-pb-lite ../libx-msg-im-client-net/ ../libx-msg-im-client-db/ $ENV{PROTOBUF}/include)

ADD_COMPILE_OPTIONS(-std=c++11 -fPIC -g3 -O3 -Wall)

FILE(GLOB SRC "./*.cpp")

PROJECT(x-msg-im-client-sdk)

ADD_LIBRARY(x-msg-im-client-sdk STATIC ${SRC})
