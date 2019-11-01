cmake_minimum_required(VERSION 2.8.12.2)
#
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
#
INCLUDE_DIRECTORIES(../libmisc-cpp)
INCLUDE_DIRECTORIES(../libxsc-proto-client-cpp)
INCLUDE_DIRECTORIES(../libx-msg-im-client-xsc)
INCLUDE_DIRECTORIES(../libx-msg-im-client-core)
INCLUDE_DIRECTORIES(../libx-msg-im-client-pb-lite)
INCLUDE_DIRECTORIES(../libx-msg-im-client-net)
INCLUDE_DIRECTORIES(../libx-msg-im-client-db)
INCLUDE_DIRECTORIES($ENV{PROTOBUF}/include)
#
ADD_COMPILE_OPTIONS(-std=c++11 -fPIC -Wall)
ADD_DEFINITIONS(-Wno-builtin-macro-redefined)
SET(CMAKE_CXX_FLAGS $ENV{CXX_FLAGS})
#
FILE(GLOB SRC "./*.cpp")
#
PROJECT(x-msg-im-client-sdk)
#
ADD_LIBRARY(x-msg-im-client-sdk STATIC ${SRC})
INCLUDE(./__file__.cmake)
REDEFINE_FILE_MACRO(x-msg-im-client-sdk)