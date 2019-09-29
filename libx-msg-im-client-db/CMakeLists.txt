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

INCLUDE_DIRECTORIES(../libmisc-cpp ../libx-msg-im-client-core ../libx-msg-im-client-pb-lite $ENV{PROTOBUF}/include)

SET(CMAKE_CXX_FLAGS "-std=c++11 -fPIC -g3 -O3 -Wall")
SET(CMAKE_C_FLAGS "-fPIC -g3 -O3 -Wall")

FILE(GLOB SRC1 "./*/*.cpp")
FILE(GLOB SRC0 "./*.cpp")
FILE(GLOB SRC2 "./*/*.c")

PROJECT(x-msg-im-client-db)

ADD_LIBRARY(x-msg-im-client-db STATIC ${SRC0} ${SRC1} ${SRC2})

