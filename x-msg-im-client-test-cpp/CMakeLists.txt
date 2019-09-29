cmake_minimum_required(VERSION 2.8.12.2)

IF($ENV{PLAT} MATCHES "ANDROID")
	ADD_DEFINITIONS(-DANDROID -DLINUX)
	set(CMAKE_SYSTEM_NAME Android)
        set(CMAKE_ANDROID_NDK $ENV{CMAKE_ANDROID_NDK})
        set(CMAKE_SYSTEM_VERSION $ENV{CMAKE_SYSTEM_VERSION})
        set(CMAKE_ANDROID_ARCH_ABI $ENV{CMAKE_ANDROID_ARCH_ABI})
        set(CMAKE_ANDROID_STL_TYPE $ENV{CMAKE_ANDROID_STL_TYPE})
	LINK_LIBRARIES(x-msg-im-client-sdk x-msg-im-client-net x-msg-im-client-db x-msg-im-client-core x-msg-im-client-pb-lite x-msg-im-client-xsc xsc-proto-client-cpp misc-cpp libprotobuf.a log)
ELSE ()
	ADD_DEFINITIONS(-D$ENV{PLAT})
	IF (UNIX)
	        LINK_LIBRARIES(x-msg-im-client-sdk x-msg-im-client-net x-msg-im-client-db x-msg-im-client-core x-msg-im-client-pb-lite x-msg-im-client-xsc xsc-proto-client-cpp misc-cpp libprotobuf.a pthread dl)
        ELSE ()
                LINK_LIBRARIES(x-msg-im-client-sdk x-msg-im-client-net x-msg-im-client-db x-msg-im-client-core x-msg-im-client-pb-lite x-msg-im-client-xsc xsc-proto-client-cpp misc-cpp libprotobuf.a ws2_32)
        ENDIF()
ENDIF()

INCLUDE_DIRECTORIES(../libmisc-cpp ../libxsc-proto-client-cpp ../libx-msg-im-client-xsc ../libx-msg-im-client-pb-lite ../libx-msg-im-client-core ../libx-msg-im-client-net ../libx-msg-im-client-db ../libx-msg-im-client-sdk $ENV{PROTOBUF}/include)

ADD_COMPILE_OPTIONS(-std=c++11 -fPIC -g3 -O3 -Wall)

LINK_DIRECTORIES(../libmisc-cpp ../libxsc-proto-client-cpp ../libx-msg-im-client-xsc ../libx-msg-im-client-pb-lite ../libx-msg-im-client-core ../libx-msg-im-client-net ../libx-msg-im-client-db ../libx-msg-im-client-sdk $ENV{PROTOBUF}/lib)


FILE(GLOB SRC0 "./*.cpp")
FILE(GLOB SRC1 "./*/*.cpp")

PROJECT(x-msg-im-client-test-cpp)

ADD_EXECUTABLE(x-msg-im-client-test-cpp ${SRC0} ${SRC1})
