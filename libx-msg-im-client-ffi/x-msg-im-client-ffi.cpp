/*
  Copyright 2019 www.dev5.cn, Inc. dev5@qq.com
 
  This file is part of X-MSG-IM.
 
  X-MSG-IM is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  X-MSG-IM is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
 
  You should have received a copy of the GNU Affero General Public License
  along with X-MSG-IM.  If not, see <https://www.gnu.org/licenses/>.
 */

#include <libx-msg-im-client-sdk.h>
#include <libx-msg-im-client-db.h>
#include "libx-msg-im-client-ffi.h"

static int ffiClientSocket = INVALID; 
static queue<shared_ptr<XmsgImSdkEventAdapter>> eventQueue; 
static mutex lock4eventQueue; 
static condition_variable cond4eventQueue; 
static atomic_int netApiFutureTransIdGen(0x00000000); 
static atomic_int netApiIdGen(0x0000BEEF); 
static map<int, shared_ptr<XmsgImClientNetApi>> netApis; 
static mutex lock4netApis; 
static unordered_map<uint, SptrXitp> passiveTrans; 
static void addXmsgImClientNetApi(int netApiId, shared_ptr<XmsgImClientNetApi> netApi); 
static shared_ptr<XmsgImClientNetApi> findXmsgImClientNetApi(int netApiId); 
static void delXmsgImClientNetApi(int netApiId); 
static void pushSdkEvent(shared_ptr<XmsgImSdkEventAdapter> evn); 
static void pushPassiveTrans(SptrXitp trans); 
static SptrXitp endPassiveTrans(uint dtid); 
static atomic_int dbApiFutureTransIdGen(0x00000000); 
static atomic_int dbApiIdGen(0x0000BEEF); 
static map<uint, shared_ptr<XmsgImClientDbApi>> dbApis; 
static mutex lock4dbApis; 
static void addXmsgImClientDbApi(int dbApiId, shared_ptr<XmsgImClientDbApi> dbApi); 
static shared_ptr<XmsgImClientDbApi> findXmsgImClientDbApi(int dbApiId); 
static void dbRsp(int dbApiId, int tid, int ret, const string& desc, SptrRst rst); 

void x_msg_im_client_sdk_init()
{
	XmsgImClientSdk::instance()->init();
}

int x_msg_im_client_sdk_startup_local_tcp_client(int port)
{
	ffiClientSocket = Net::tcpConnect("127.0.0.1", port);
	if (ffiClientSocket < 1)
	{
		LOG_FAULT("it`s a bug, can not connection to local tcp server: 127.0.0.1:%d", port)
		return 0;
	}
	LOG_INFO("got a connection form local tcp server: 127.0.0.1:%d", port)
	return ffiClientSocket;
}

unsigned char* x_msg_im_client_sdk_loop(int* len)
{
	unique_lock<mutex> lock(lock4eventQueue);
	while (eventQueue.empty())
		cond4eventQueue.wait(lock);
	auto e = eventQueue.front();
	eventQueue.pop();
	lock.unlock();
	string dat = e->SerializeAsString();
	uchar* evn = (uchar*) ::malloc(dat.length());
	memcpy(evn, dat.data(), dat.length());
	*len = dat.length();
	return evn;
}

void x_msg_im_client_sdk_exit()
{
	LOG_WARN("incomplete.")
}

int x_msg_im_client_sdk_net_new_api(const char* uri)
{
	shared_ptr<XmsgImClientNetApi> netApi = XmsgImClientNetApi::newApi(uri);
	int id = netApiIdGen.fetch_add(1) & 0x7FFFFFFF;
	netApi->subEvn([id](shared_ptr<Message> evn)
	{
		LOG_TRACE("got a net-api notice event, msg: %s, dat: %s", evn->GetDescriptor()->name().c_str(), evn->ShortDebugString().c_str())
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(id);
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE);
		auto netNotice = adapter->mutable_netnotice();
		netNotice->set_msg(evn->GetDescriptor()->name());
		evn->SerializeToString(netNotice->mutable_dat());
		pushSdkEvent(adapter);
	});
	netApi->subEvn([id](const string& msg, const string& dat)
	{
		LOG_TRACE("got a net-api notice event, msg: %s, dat-len: %zu", msg.c_str(), dat.length())
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(id);
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE);
		auto netNotice = adapter->mutable_netnotice();
		netNotice->set_msg(msg);
		netNotice->set_dat(dat);
		pushSdkEvent(adapter);
	});
	netApi->subReq([id](SptrXitp trans, shared_ptr<Message> req)
	{
		LOG_TRACE("got a net-api request event, trans: %s", trans->toString().c_str())
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(id);
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_NET_REQ);
		auto netReq = adapter->mutable_netreq();
		netReq->set_tid(trans->dtid);
		netReq->set_msg(req->GetDescriptor()->name());
		req->SerializeToString(netReq->mutable_dat());
		pushSdkEvent(adapter);
		pushPassiveTrans(trans);
	});
	netApi->subReq([id](SptrXitp trans, const string& msg, const string& dat)
	{
		LOG_TRACE("got a net-api request event, trans: %s", trans->toString().c_str())
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(id);
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_NET_REQ);
		auto netReq = adapter->mutable_netreq();
		netReq->set_tid(trans->dtid);
		netReq->set_msg(msg);
		netReq->set_dat(dat);
		pushSdkEvent(adapter);
		pushPassiveTrans(trans);
	});
	LOG_INFO("got a new x-msg-im-client-net-api, instance id: %u, uri: %s", id, uri)
	addXmsgImClientNetApi(id, netApi);
	return id;
}

void x_msg_im_client_sdk_net_del_api(int netApiId)
{
	delXmsgImClientNetApi(netApiId);
}

int x_msg_im_client_sdk_net_future(int netApiId, const char* msg, const char* dat, int len)
{
	shared_ptr<XmsgImClientNetApi> netApi = findXmsgImClientNetApi(netApiId);
	if (netApi == nullptr)
	{
		LOG_WARN("can not found XmsgImClientNetApi instance for id: %u", netApiId)
		return INVALID;
	}
	if (msg == NULL || ::strlen(msg) < 1 || ::strlen(msg) > XSC_TRANS_PDU_MAX_MSG_NAME)
	{
		LOG_ERROR("message name format error, name: %s, name-len: %d", msg == NULL ? "null" : msg, msg == NULL ? 0 : (int)::strlen(msg))
		return INVALID;
	}
	shared_ptr<x_msg_im_trans_raw_msg> rawMsg(new x_msg_im_trans_raw_msg());
	int tid = netApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	netApi->future(string(msg), len < 1 ? "" : string(dat, len), [netApiId, tid](SptrXiti trans)
	{
		LOG_TRACE("got a net-api response event, transaction: %d, ret: %04X, desc: %s", tid, trans->ret, trans->desc.c_str())
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(netApiId);
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_NET_RSP);
		auto netRsp = adapter->mutable_netrsp();
		netRsp->set_tid(tid);
		netRsp->set_ret(trans->ret);
		netRsp->set_desc(trans->desc);
		if(trans->rawMsgRsp != nullptr)
		{
			netRsp->set_msg(trans->rawMsgRsp->msg);
			netRsp->set_dat(trans->rawMsgRsp->dat);
		}
		pushSdkEvent(adapter);
	});
	return tid;
}

void x_msg_im_client_sdk_net_end_trans(unsigned int dtid, int ret, const char* desc, const char* msg, const char* dat, int len)
{
	SptrXitp trans = endPassiveTrans(dtid);
	if (trans == nullptr)
	{
		LOG_WARN("can not found passive transaction fro dtid: %08X, may be it was timeout", dtid)
		return;
	}
	if (ret != RET_SUCCESS)
	{
		if (desc == NULL || ::strlen(desc) < 1)
			trans->end((ushort) ret);
		else
			trans->endDesc(ret, desc);
		return;
	}
	if (len < 1)
	{
		trans->end(RET_SUCCESS);
		return;
	}
	if (msg == NULL || ::strlen(msg) < 1 || ::strlen(msg) > XSC_TRANS_PDU_MAX_MSG_NAME)
	{
		LOG_ERROR("message name format error, msg: %s, msg-len: %d, trans: %s", msg == NULL ? "null" : msg, msg == NULL ? 0 : (int)::strlen(msg), trans->toString().c_str())
		trans->endDesc(RET_EXCEPTION, "x-msg-im-client-sdk exception");
		return;
	}
	if (dat == NULL)
	{
		LOG_ERROR("message dat format error, can not be null, message name: %s, trans: %s", msg, trans->toString().c_str())
		trans->endDesc(RET_EXCEPTION, "x-msg-im-client-sdk exception");
		return;
	}
	if (trans->raw) 
	{
		shared_ptr<x_msg_im_trans_raw_msg> rawMsg(new x_msg_im_trans_raw_msg());
		rawMsg->msg = msg;
		rawMsg->dat.assign((char*) dat, len);
		trans->endRaw(rawMsg);
		return;
	}
	shared_ptr<Message> rsp = XmsgImTrans::newPbMsg(msg, (uchar*) dat, len);
	if (rsp == nullptr)
	{
		trans->endDesc(RET_EXCEPTION, "x-msg-im-client-sdk exception");
		return;
	}
	trans->end(rsp);
}

void x_msg_im_client_sdk_net_stop_try(int netApiId)
{
	shared_ptr<XmsgImClientNetApi> netApi = findXmsgImClientNetApi(netApiId);
	if (netApi == nullptr)
	{
		LOG_WARN("can not found XmsgImClientNetApi instance for id: %u", netApiId)
		return;
	}
	netApi->stopTry();
}


static string dbPath;
int x_msg_im_client_sdk_db_init(const char* path)
{
	if (path == NULL || ::strlen(path) < 1)
	{
		LOG_ERROR("path can not be null")
		return INVALID;
	}
	bool ret = XmsgImClientDbApi::openGlobal(path);
	if (!ret)
		return INVALID;
	dbPath = path;
	return 0;
}

int x_msg_im_client_sdk_db_new_api(const char* cgt)
{
	if (cgt == NULL || ::strlen(cgt) < 1)
	{
		LOG_ERROR("path can not be null")
		return INVALID;
	}
	SptrCgt c = ChannelGlobalTitle::parse(cgt);
	if (c == nullptr)
	{
		LOG_ERROR("channel global title format error: %s", cgt)
		return INVALID;
	}
	shared_ptr<XmsgImClientDbApi> dbApi = XmsgImClientDbApi::openUsr(dbPath, cgt);
	if (dbApi == nullptr)
	{
		LOG_FAULT("can not create x-msg-im-client db api instance, may be can not create database.")
		return INVALID;
	}
	int dbApiId = dbApiIdGen.fetch_add(1) & 0x7FFFFFFF;
	addXmsgImClientDbApi(dbApiId, dbApi);
	return dbApiId;
}

void x_msg_im_client_sdk_db_del_api(int dbApiId)
{
	LOG_FAULT("incomplete.")
}

int x_msg_im_client_sdk_db_future_global(const char* sql)
{
	if (sql == NULL || ::strlen(sql) < 1)
	{
		LOG_ERROR("sql can not be null")
		return INVALID;
	}
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	XmsgImClientDbApi::futureGlobal(sql, [tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(0, tid, ret, desc, rst);
	});
	return tid;
}

int x_msg_im_client_sdk_db_future_usr_org(int dbApiId, const char* sql)
{
	if (sql == NULL || ::strlen(sql) < 1)
	{
		LOG_ERROR("sql can not be null")
		return INVALID;
	}
	auto dbApi = findXmsgImClientDbApi(dbApiId);
	if (dbApi == nullptr)
	{
		LOG_ERROR("can not found x-msg-im-client db api instance for: %d", dbApiId)
		return INVALID;
	}
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	dbApi->futureUsrOrg(sql, [dbApiId, tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(dbApiId, tid, ret, desc, rst);
	});
	return tid;
}

int x_msg_im_client_sdk_db_future_usr_dat(int dbApiId, const char* sql)
{
	if (sql == NULL || ::strlen(sql) < 1)
	{
		LOG_ERROR("sql can not be null")
		return INVALID;
	}
	auto dbApi = findXmsgImClientDbApi(dbApiId);
	if (dbApi == nullptr)
	{
		LOG_ERROR("can not found x-msg-im-client db api instance for: %d", dbApiId)
		return INVALID;
	}
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	dbApi->futureUsrDat(sql, [dbApiId, tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(dbApiId, tid, ret, desc, rst);
	});
	return tid;
}

int x_msg_im_client_sdk_db_future_global_prepare(const char* dat, int len)
{
	if (dat == NULL)
	{
		LOG_ERROR("dat can not be null")
		return INVALID;
	}
	if (len < 1)
	{
		LOG_ERROR("len can not be zero")
		return INVALID;
	}
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	if (!req->ParseFromArray(dat, len))
	{
		LOG_ERROR("can not reflect XmsgImClientDbCrudReq from data")
		return INVALID;
	}
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	XmsgImClientDbApi::futureGlobal(req, [tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(0, tid, ret, desc, rst);
	});
	return tid;
}

int x_msg_im_client_sdk_db_future_usr_org_prepare(int dbApiId, const char* dat, int len)
{
	if (dat == NULL)
	{
		LOG_ERROR("dat can not be null")
		return INVALID;
	}
	if (len < 1)
	{
		LOG_ERROR("len can not be zero")
		return INVALID;
	}
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	if (!req->ParseFromArray(dat, len))
	{
		LOG_ERROR("can not reflect XmsgImClientDbCrudReq from data")
		return INVALID;
	}
	auto dbApi = findXmsgImClientDbApi(dbApiId);
	if (dbApi == nullptr)
		return INVALID;
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	dbApi->futureUsrOrg(req, [dbApiId, tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(dbApiId, tid, ret, desc, rst);
	});
	return tid;
}

int x_msg_im_client_sdk_db_future_usr_dat_prepare(int dbApiId, const char* dat, int len)
{
	if (dat == NULL)
	{
		LOG_ERROR("dat can not be null")
		return INVALID;
	}
	if (len < 1)
	{
		LOG_ERROR("len can not be zero")
		return INVALID;
	}
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	if (!req->ParseFromArray(dat, len))
	{
		LOG_ERROR("can not reflect XmsgImClientDbCrudReq from data")
		return INVALID;
	}
	auto dbApi = findXmsgImClientDbApi(dbApiId);
	if (dbApi == nullptr)
		return INVALID;
	int tid = dbApiFutureTransIdGen.fetch_add(1) & 0x7FFFFFFF;
	dbApi->futureUsrDat(req, [dbApiId, tid](int ret, const string& desc, SptrRst rst)
	{
		dbRsp(dbApiId, tid, ret, desc, rst);
	});
	return tid;
}

void x_msg_im_client_sdk_misc_log_set_output(const char* output)
{
	if (output == NULL || ::strlen(output) < 1)
	{
		LOG_WARN("can not set sdk log output to null")
		return;
	}
	Log::setOutput(output);
}

void x_msg_im_client_sdk_misc_log_set_level(const char* lev)
{
	if (lev == NULL)
	{
		LOG_WARN("can not set sdk log level to null")
		return;
	}
	Log::setLevel(lev);
}

void x_msg_im_client_sdk_misc_log_sub()
{
	Log::setOutput(LOG_UPSTREAM);
	Log::stream([](uchar lev, const char* log)
	{
		shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
		adapter->set_apiid(0); 
		adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_CXX_LOG);
		adapter->mutable_cxxlog()->set_lev(lev);
		adapter->mutable_cxxlog()->set_log(string(log));
		pushSdkEvent(adapter);
	});
}

static char ___buf_sha256__[0x41] = { 0 };
char* x_msg_im_client_sdk_misc_sha256_to_lowercase(const char* org)
{
	if (org == NULL || ::strlen(org) < 1)
		return NULL;
	string str = Crypto::sha256ToHexStrLowerCase(org);
	::memcpy(___buf_sha256__, str.data(), str.length());
	return ___buf_sha256__;
}

static char ___buf_aes___[0x200] = { 0 };
char* x_msg_im_client_sdk_misc_aes128_enc_to_hex_lowercase(const char* key, const char* org)
{
	if (key == NULL || ::strlen(key) < 0x10)
		return NULL;
	if (org == NULL || ::strlen(org) < 1)
		return NULL;
	string des = Crypto::aes128enc2hexStrLowerCase(key, org);
	::memset(___buf_aes___, 0, 0x200);
	::memcpy(___buf_aes___, des.c_str(), des.length());
	return ___buf_aes___;
}

char* x_msg_im_client_sdk_misc_aes128_dec_from_hex_lowercase(const char* key, const char* org)
{
	if (org == NULL)
		return NULL;
	int len = ::strlen(org);
	if (len < 2)
		return NULL;
	::memset(___buf_aes___, 0, 0x200);
	uchar* bin = (uchar*) ::malloc(len / 2);
	Net::hexStr2bytes(org, len, bin);
	string des((char*) bin, len / 2);
	string raw = Crypto::aes128dec(key, des);
	::memcpy(___buf_aes___, (uchar*) raw.data(), raw.length());
	::free(bin);
	return ___buf_aes___;
}


void addXmsgImClientNetApi(int netApiId, shared_ptr<XmsgImClientNetApi> netApi)
{
	unique_lock<mutex> lock(lock4netApis);
	netApis[netApiId] = netApi;
}

shared_ptr<XmsgImClientNetApi> findXmsgImClientNetApi(int netApiId)
{
	unique_lock<mutex> lock(lock4netApis);
	auto it = netApis.find(netApiId);
	return it == netApis.end() ? nullptr : it->second;
}

void delXmsgImClientNetApi(int netApiId)
{
	unique_lock<mutex> lock(lock4netApis);
	auto it = netApis.find(netApiId);
	if (it == netApis.end())
	{
		LOG_WARN("can not found XmsgImClientNetApi instance for id: %u", netApiId)
		return;
	}
	LOG_DEBUG("we will remote XmsgImClientNetApi instance for id: %u", netApiId)
	netApis.erase(it);
}

void pushSdkEvent(shared_ptr<XmsgImSdkEventAdapter> evn)
{
	if (ffiClientSocket > 0)
	{
		string dat = evn->SerializeAsString();
		uint size = ::htonl((uint) dat.length());
		unique_lock<mutex> lock(lock4eventQueue); 
		Net::tcpSend(ffiClientSocket, ((uchar*) &size), 4);
		Net::tcpSend(ffiClientSocket, (uchar*) dat.data(), dat.length());
		return;
	}
	unique_lock<mutex> lock(lock4eventQueue);
	bool nll = eventQueue.empty();
	eventQueue.push(evn);
	if (nll)
		cond4eventQueue.notify_one(); 
}

void pushPassiveTrans(SptrXitp trans)
{
	unique_lock<mutex> lock(lock4eventQueue);
	passiveTrans[trans->dtid] = trans;
}

SptrXitp endPassiveTrans(uint dtid)
{
	unique_lock<mutex> lock(lock4eventQueue);
	auto it = passiveTrans.find(dtid);
	if (it == passiveTrans.end())
		return nullptr;
	auto trans = it->second;
	passiveTrans.erase(it);
	return trans;
}

void addXmsgImClientDbApi(int dbApiId, shared_ptr<XmsgImClientDbApi> dbApi)
{
	unique_lock<mutex> lock(lock4dbApis);
	dbApis[dbApiId] = dbApi;
}

shared_ptr<XmsgImClientDbApi> findXmsgImClientDbApi(int dbApiId)
{
	unique_lock<mutex> lock(lock4dbApis);
	auto it = dbApis.find(dbApiId);
	return it == dbApis.end() ? nullptr : it->second;
}

void dbRsp(int dbApiId, int tid, int ret, const string& desc, SptrRst rst)
{
	LOG_TRACE("got a db-api response event, transaction: %d, ret: %04X, desc: %s, rsp: %s", tid, ret, desc.c_str(), rst == nullptr ? "null" : rst->rsp->ShortDebugString().c_str())
	shared_ptr<XmsgImSdkEventAdapter> adapter(new XmsgImSdkEventAdapter());
	adapter->set_apiid(dbApiId);
	adapter->set_evntype(XmsgImSdkEventType::X_MSG_IM_SDK_EVENT_TYPE_DB_RSP);
	auto dbRsp = adapter->mutable_dbrsp();
	dbRsp->set_tid(tid);
	dbRsp->set_ret(ret);
	dbRsp->set_desc(desc);
	if (rst != nullptr)
		dbRsp->mutable_dat()->CopyFrom(*rst->rsp);
	pushSdkEvent(adapter);
}
