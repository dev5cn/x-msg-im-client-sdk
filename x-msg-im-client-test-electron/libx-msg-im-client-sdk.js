const path = require('path');
const ffi = require("ffi");
const ref = require("ref");
const net = require("net");
const xmsgim = require("./pb/x-msg-im-client");

/* https://github.com/node-ffi/node-ffi */
const sdkffi = ffi.Library(path.resolve(__dirname, 'libx-msg-im-client-ffi'), {
    'x_msg_im_client_sdk_init' : [ 'void', [] ],
    'x_msg_im_client_sdk_startup_local_tcp_client' : [ 'int', [ 'int' ] ],
    'x_msg_im_client_sdk_exit' : [ 'void', [] ],
    //
    'x_msg_im_client_sdk_net_new_api' : [ 'int', [ 'char*' ] ],
    'x_msg_im_client_sdk_net_del_api' : [ 'void', [ 'int' ] ],
    'x_msg_im_client_sdk_net_future' : [ 'int', [ 'int', 'char*', 'char*', 'int' ] ],
    'x_msg_im_client_sdk_net_end_trans' : [ 'int', [ 'uint', 'int', 'char*', 'char*', 'char*', 'int' ] ],
    'x_msg_im_client_sdk_net_stop_try' : [ 'void', [ 'int' ] ],
    //
    'x_msg_im_client_sdk_db_init' : [ 'int', [ 'char*' ] ],
    'x_msg_im_client_sdk_db_new_api' : [ 'int', [ 'char*' ] ],
    'x_msg_im_client_sdk_db_del_api' : [ 'void', [ 'int' ] ],
    'x_msg_im_client_sdk_db_future_global' : [ 'int', [ 'char*' ] ],
    'x_msg_im_client_sdk_db_future_usr_org' : [ 'int', [ 'int', 'char*' ] ],
    'x_msg_im_client_sdk_db_future_usr_dat' : [ 'int', [ 'int', 'char*' ] ],
    'x_msg_im_client_sdk_db_future_global_prepare' : [ 'int', [ 'char*', 'int' ] ],
    'x_msg_im_client_sdk_db_future_usr_org_prepare' : [ 'int', [ 'int', 'char*', 'int' ] ],
    'x_msg_im_client_sdk_db_future_usr_dat_prepare' : [ 'int', [ 'int', 'char*', 'int' ] ],
    //
    'x_msg_im_client_sdk_misc_log_set_output' : [ 'void', [ 'char*' ] ],
    'x_msg_im_client_sdk_misc_log_set_level' : [ 'void', [ 'char*' ] ],
    'x_msg_im_client_sdk_misc_log_sub' : [ 'void', [] ],
    'x_msg_im_client_sdk_misc_sha256_to_lowercase' : [ 'char*', [ 'char*' ] ],
    'x_msg_im_client_sdk_misc_aes128_enc_to_hex_lowercase' : [ 'char*', [ 'char*', 'char*' ] ],
    'x_msg_im_client_sdk_misc_aes128_dec_from_hex_lowercase' : [ 'char*', [ 'char*', 'char*' ] ],
});

/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/** 全局变量	              					                                                                                     */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */
var cxxLogCb; /* c++ driver层日志回调. */
var recvBuf; /* 本地tcp server上的接收缓冲区, 处理报文分片. */
var netApids = new Map(); /* net-api实例管理, 相当于: hashmap<netApiId, object: { subEvnCallBack, subReqCallBack, transMap<tid, initTrans> }>. */
var dbApiIds = new Map(); /* net-api实例管理, 相当于: hashmap<dbApiId, object: { transMap<tid, dbTrans> }>. */
//
var DB_FILED_TYPE_BIGINT = 0x00; /* int or bigint. */
var DB_FILED_TYPE_TEXT = 0x01; /* text. */
var DB_FILED_TYPE_BLOB = 0x02; /* blob. */

/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/** 初始化                   					                                                                                     */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */
/* 初始化x-msg-im-client-ffi. */
function startupXmsgImClientFfi(cb /* 初始化完成后回调. */, port /* 本地tcp server监听端口. */)
{
    var server = net.createServer();
    port = arguments[1] ? port : 18629;
    server.listen(port, "127.0.0.1");
    server.on('listening', function() { /* listen成功. */
        console.log('local server listening success, address: ' + server.address().address + ":" + server.address().port);
        if (sdkffi.x_msg_im_client_sdk_startup_local_tcp_client(port) < 1) /* 尝试从c++向js层发起tcp连接. */
        {
            console.error("it`s a bug, c++ driver layer can not connect to local tcp server, address: " + server.address().address + ":" + server.address().port);
            return;
        }
        cb(); /* 初始化成功, 从这里开始. */
    });
    server.on('error', function(err) { /* listen失败. */
        console.info("can not listen on assign port: " + port + ", we will try an other one, err: " + err);
        startupXmsgImClientSdk(cb, port + 7 /* 换一个端口. */);
    });
    server.on('connection', function(sock) { /* 获得一个从c++上来的tcp链接. */
        console.info('got a connection from host: ' + sock.remoteAddress + ':' + sock.remotePort);
        sock.on('data', function(dat) { /* 从c++层获得数据. */
            decodeCppDriverMsg(dat);
        });
        sock.on('close', function(data) { /* 与c++之间的tcp断开. */
            console.error('it`s a bug, local c++ driver layer connection lost: ' + sock.remoteAddress + ':' + sock.remotePort);
        });
    });
}

/* 解析c++层上来的消息. */
function decodeCppDriverMsg(dat)
{
    recvBuf = recvBuf == null ? dat : Buffer.concat([ recvBuf, dat ]);
    if (recvBuf.length <= 4)
        return;
    var size = recvBuf.length;
    var take = 0;
    var remain = size;
    while (true) //
    {
        var len = recvBuf.slice(take, take + 4).readInt32BE();
        if (remain - 4 < len) //
        {
            if (take == 0)
                return;
            recvBuf = recvBuf.slice(take, recvBuf.length);
            return;
        }
        //
        let event = xmsgim.XmsgImSdkEventAdapter.decode(recvBuf.slice(take + 4, take + len + 4));
        switch (event.evnType) //
        {
        case xmsgim.XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE:
            cppDriverMsg4netNotice(event.apiId, event.netNotice);
            break;
        case xmsgim.XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_REQ:
            cppDriverMsg4netReq(event.apiId, event.netReq);
            break;
        case xmsgim.XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_NET_RSP:
            cppDriverMsg4netRsp(event.apiId, event.netRsp);
            break;
        case xmsgim.XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_DB_RSP:
            cppDriverMsg4dbRsp(event.apiId, event.dbRsp);
            break;
        case xmsgim.XmsgImSdkEventType.X_MSG_IM_SDK_EVENT_TYPE_CXX_LOG:
            cppDriverMsg4cxxLog(event.cxxLog);
            break;
        default:
            console.error("it`s a bug, unexpected event type: " + event.evnType);
            break;
        }
        //
        take += (len + 4);
        remain -= (len + 4);
        if (remain == 0) //
        {
            recvBuf = null;
            return;
        }
        if (remain <= 4) //
        {
            recvBuf = recvBuf.slice(take, recvBuf.length);
            return;
        }
    }
}

/* 从net-api上来的响应. */
function cppDriverMsg4netRsp(netApiId, netRsp)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        console.error("it`s a bug, can not found net-api for id: " + netApiId);
        return;
    }
    var cb = netApi.initTrans.get(netRsp.tid);
    netApi.initTrans.delete(netRsp.tid);
    var rsp = null;
    if (netRsp.dat != null && netRsp.dat.length > 0)
        rsp = xmsgim[netRsp.msg].decode(netRsp.dat);
    cb(netRsp.ret, netRsp.desc, rsp);
}

/* 从net-api上来的通知. */
function cppDriverMsg4netNotice(netApiId, netNotice)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        console.error("it`s a bug, can not found net-api for id: " + netApiId);
        return;
    }
    netApi.subEvn(xmsgim[netNotice.msg].decode(netNotice.dat));
}

/* 从net-api上来的请求. */
function cppDriverMsg4netReq(netApiId, netReq)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        console.error("it`s a bug, can not found net-api for id: " + netApiId);
        return;
    }
    var trans = new Object();
    trans.netApiId = netApiId;
    trans.tid = netReq.tid;
    trans.msg = netReq.msg;
    trans.req = xmsgim[netReq.msg].decode(netReq.dat);
    netApi.subReq(trans, trans.req);
}

/* 从db-api上来的响应. */
function cppDriverMsg4dbRsp(dbApiId, dbRsp)
{
    var dbApi = dbApiIds.get(dbApiId);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + dbApiId);
        return;
    }
    var cb = dbApi.trans.get(dbRsp.tid);
    dbApi.trans.delete(dbRsp.tid);
    cb(dbRsp.ret, dbRsp.desc, dbRsp.dat);
}

/* c++ driver layer上来的日志. */
function cppDriverMsg4cxxLog(cxxLog)
{
    cxxLogCb(cxxLog);
}
/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/**                                					                                                                                 */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */
/* 初始化c++ driver. */
function xmsgImClientSdkInit()
{
    sdkffi.x_msg_im_client_sdk_init();
}

/* 当前api实例上的通知事件, 一些来自本地, 另一些来自网络. */
function netApiSubEvn(netApiId, cb)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        netApi = new Object();
        netApi.netApiId = netApiId;
        netApi.subEvn = cb;
        netApi.subReq = null;
        netApi.initTrans = new Map();
        netApids.set(netApiId, netApi);
        return;
    }
    netApi.subEvn = cb;
}

/* net-api上的网络主动请求(需要本地回送响应). */
function netApiSubReq(netApiId, cb)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        netApi = new Object();
        netApi.netApiId = netApiId;
        netApi.subEvn = null;
        netApi.subReq = cb;
        netApi.initTrans = new Map();
        netApids.set(netApiId, netApi);
        return;
    }
    netApi.subReq = cb;
}

/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/**                 					                                                                                             */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */
/* 创建一个网络层api实例. */
function newNetApi(host /* 接入地址. */)
{
    return sdkffi.x_msg_im_client_sdk_net_new_api(str2buffer(host));
}

/* host to network主动型事务. */
function netFuture(netApiId /* 网络api实例. */, req /* 请求的pb对象. */, cb /* 响应或超时的callback. */)
{
    var netApi = netApids.get(netApiId);
    if (netApi == null) //
    {
        console.error("it`s a bug, can not found net-api for id: " + netApiId);
        return;
    }
    let dat = xmsgim[req.constructor.name].encode(req).finish();
    let tid = sdkffi.x_msg_im_client_sdk_net_future(netApiId, str2buffer(req.constructor.name), dat, dat.length); /* 发起登录. */
    netApi.initTrans.set(tid, cb);
}

/* 在指定的目录下创建并打开全局数据库. */
function openDbGlobal(path)
{
    var ret = sdkffi.x_msg_im_client_sdk_db_init(str2buffer(path));
    if (ret != 0)
        return;
    var dbApi = new Object();
    dbApi.dbApiId = 0x00;
    dbApi.trans = new Map();
    dbApiIds.set(dbApi.dbApiId, dbApi);
    return ret;
}

/* 数据库事务, 简单型, 无参数绑定(db-global). */
function dbFutureGlobal(sql /* 请求的sql. */, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(0x00);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + 0x00);
        return;
    }
    let tid = sdkffi.x_msg_im_client_sdk_db_future_global(str2buffer(sql)); /* 查询. */
    dbApi.trans.set(tid, cb);
}

/* 数据库事务, 涉及参数预处理(db-global). */
function dbFutureGlobalPrepare(sql /* 请求的sql. */, row, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(0x00);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + 0x00);
        return;
    }
    var dbCrudReq = xmsgim.XmsgImClientDbCrudReq.create({ sql : sql, row : row });
    let dat = xmsgim.XmsgImClientDbCrudReq.encode(dbCrudReq).finish();
    let tid = sdkffi.x_msg_im_client_sdk_db_future_global_prepare(dat, dat.length);
    dbApi.trans.set(tid, cb);
}

/* 创建一个数据库api实例. */
function newDbApi(cgt /* 用户channel global title. */)
{
    var dbApiId = sdkffi.x_msg_im_client_sdk_db_new_api(str2buffer(cgt));
    var dbApi = new Object();
    dbApi.dbApiId = dbApiId;
    dbApi.trans = new Map(); /* db-api实例上的事务缓存, 相当于: hashmap<tid, XmsgImClientDbCrudReq>. */
    dbApiIds.set(dbApiId, dbApi);
    return dbApiId;
}

/* 数据库事务, 简单型, 无参数绑定(db-usr-org). */
function dbFutureUsrOrg(dbApiId, sql /* 请求的sql. */, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(dbApiId);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + dbApiId);
        return;
    }
    let tid = sdkffi.x_msg_im_client_sdk_db_future_usr_org(dbApiId, str2buffer(sql)); /* 查询. */
    dbApi.trans.set(tid, cb);
}

/* 数据库事务, 涉及参数预处理(db-usr-org). */
function dbFutureUsrOrgPrepare(dbApiId, sql /* 请求的sql. */, row, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(dbApiId);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + dbApiId);
        return;
    }
    var dbCrudReq = xmsgim.XmsgImClientDbCrudReq.create({ sql : sql, row : row });
    let dat = xmsgim.XmsgImClientDbCrudReq.encode(dbCrudReq).finish();
    let tid = sdkffi.x_msg_im_client_sdk_db_future_usr_org_prepare(dbApiId, dat, dat.length);
    dbApi.trans.set(tid, cb);
}

/* 数据库事务, 简单型, 无参数绑定(db-usr-dat). */
function dbFutureUsrDat(dbApiId, sql /* 请求的sql. */, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(dbApiId);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + dbApiId);
        return;
    }
    let tid = sdkffi.x_msg_im_client_sdk_db_future_usr_dat(dbApiId, str2buffer(sql)); /* 查询. */
    dbApi.trans.set(tid, cb);
}

/* 数据库事务, 涉及参数预处理(db-usr-dat). */
function dbFutureUsrDatPrepare(dbApiId, sql /* 请求的sql. */, row, cb /* 响应或超时的callback. */)
{
    var dbApi = dbApiIds.get(dbApiId);
    if (dbApi == null) //
    {
        console.error("it`s a bug, can not found db-api for id: " + dbApiId);
        return;
    }
    var dbCrudReq = xmsgim.XmsgImClientDbCrudReq.create({ sql : sql, row : row });
    let dat = xmsgim.XmsgImClientDbCrudReq.encode(dbCrudReq).finish();
    let tid = sdkffi.x_msg_im_client_sdk_db_future_usr_dat_prepare(dbApiId, dat, dat.length);
    dbApi.trans.set(tid, cb);
}

/* 从数据库结果集中取一个字符串. */
function getStrFromDbRst(rst, row, field)
{
    var col = rst.row[row].col[rst.column[field]];
    return col.valText;
}

/* 从数据库结果集中取一个长整型. */
function getLongFromDbRst(rst, row, field)
{
    var col = rst.row[row].col[rst.column[field]];
    return col.valInt;
}

/* 从数据库结果集中取一个pb对象. */
function getPbFromDbRst(rst, row, field, msg)
{
    var col = rst.row[row].col[rst.column[field]];
    return xmsgim[msg].decode(col.valBlob);
}

/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/** 一些工具函数                					                                                                                 */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */

/* string to buffer, end of zero. */
function str2buffer(str)
{
    var bf = Buffer.alloc(str.length + 1);
    for (var i = 0; i < str.length; ++i)
        bf[i] = str.charCodeAt(i);
    bf[str.length] = 0x00;
    return bf;
}

/* sha256(raw).toHexLowerCase(). */
function sha256toLowerCase(raw)
{
    var buf = sdkffi.x_msg_im_client_sdk_misc_sha256_to_lowercase(str2buffer(raw));
    return ref.readCString(buf, 0);
}

/* aes128加密. */
function aes128enc2hexStrLowerCase(key, org)
{
    var buf = sdkffi.x_msg_im_client_sdk_misc_aes128_enc_to_hex_lowercase(str2buffer(key), str2buffer(org));
    return ref.readCString(buf, 0);
}

/* aes128解密. */
function aes128decFromHexStrLowerCase(key, org)
{
    var buf = sdkffi.x_msg_im_client_sdk_misc_aes128_dec_from_hex_lowercase(str2buffer(key), str2buffer(org));
    return ref.readCString(buf, 0);
}

/* 设置sdk日志级别. */
function setSdkLogLevel(level)
{
    sdkffi.x_msg_im_client_sdk_misc_log_set_level(str2buffer(level));
}

/* 订阅c++层日志. */
function subSdkLog(cb)
{
    cxxLogCb = cb;
    sdkffi.x_msg_im_client_sdk_misc_log_sub();
}

/* net-api上的被动事务结束. */
function netApiTransEnd(trans)
{
    var dat = trans.rsp == null ? null : xmsgim[trans.rsp.constructor.name].encode(trans.rsp).finish();
    sdkffi.x_msg_im_client_sdk_net_end_trans(
        trans.tid, trans.ret, trans.desc == null ? null : str2buffer(trans.desc), //
        trans.rsp == null ? null : str2buffer(trans.rsp.constructor.name),
        dat == null ? null : dat, dat == null ? 0 : dat.length);
}

/** -------------------------------------------------------------------------------------------------------------------------------- */
/**                                                                                                                                  */
/** test                         					                                                                                 */
/**                                                                                                                                  */
/** -------------------------------------------------------------------------------------------------------------------------------- */

/* test for network api. */
function test4netApi()
{
    startupXmsgImClientFfi(() => {
        setSdkLogLevel("RECORD"); /* 设置底层日志级别. */
        subSdkLog((cxxLog) => console.log("c++ log: " + cxxLog.log)); /* 订阅c++ driver layer的日志. */
        xmsgImClientSdkInit(); /* 初始化c++ driver. */
        //
        var netApiId = newNetApi("47.98.188.94:8080"); /* 通过指定的接入地址构造一个网络层的api实例. */
        //
        netApiSubEvn(netApiId, (notice) => console.log("event got a net-api event, msg: " + notice.constructor.name + ", dat: " + JSON.stringify(notice.toJSON()))); /* 订阅网络层api实例上的事件, 包括本地事件与网络通知. */
        //
        netApiSubReq(netApiId, (trans, req) => { /* 订阅网络api实例上的网络请求(需要回送响应). */
            console.log("got a net-api network request, msg: " + req.constructor.name + ", dat: " + JSON.stringify(req.toJSON()));
            trans.ret = 0x00;
            netApiTransEnd(trans);
        });
        //
        var pwdSha256 = sha256toLowerCase("password");
        var usr = "usr00";
        var salt = "saltsalt";
        var sign = sha256toLowerCase(usr + salt + pwdSha256);
        let req = xmsgim.XmsgImAuthSimpleReq.create({ usr : usr, salt : salt, sign : sign, dev : { plat : "linux", did : "0.0.0.0", ver : "0.0.0" } }); /* 鉴权. */
        netFuture(netApiId, req, (ret, desc, rsp) => {
            if (ret != 0) //
            {
                console.error("auth with x-msg-im-auth failed, ret: " + ret + ", desc: " + desc);
                return;
            }
            console.log("auth with x-msg-im-auth successful, rsp: " + JSON.stringify(rsp.toJSON()));
        });
    });
}

/* test for database api. */
function test4dbApi()
{
    startupXmsgImClientFfi(() => { /* 初始化x-msg-im-client-sdk. */
        setSdkLogLevel("RECORD"); /* 设置底层日志级别. */
        subSdkLog((cxxLog) => console.log("c++ log: " + cxxLog.log)); /* 订阅c++ driver layer的日志. */
        xmsgImClientSdkInit(); /* 初始化c++ driver. */
        //
        if (openDbGlobal("./db") != 0) /* 在./db/目录下创建并打开全局数据库. */
        {
            console.error("open global database failed");
            return;
        }
        //
        console.log("open global database successful");
        var sql = "create table tb_global_login_history (\n";
        sql += ("\t usr text primary key not null,\n");
        sql += ("\t pwdSha256 text not null,\n");
        sql += ("\t uts bigint not null\n");
        sql += (")");
        dbFutureGlobal(sql, (ret, desc, rst) => { /* 创建一张表. */
            if (ret != 0x00) {
                console.error("create table tb_global_login_history failed, ret: " + ret + ", desc: " + desc);
                return;
            }
            console.info("create tb_global_login_history successful");
        });
        //
        var row = [
            {
                col : [
                    { type : DB_FILED_TYPE_TEXT, valText : 'usr00' }, //
                    { type : DB_FILED_TYPE_TEXT, valText : 'pwdSha256' }, //
                    { type : DB_FILED_TYPE_BIGINT, valInt : 123 }, //
                ],
            },
            {
                col : [
                    { type : DB_FILED_TYPE_TEXT, valText : 'usr01' }, //
                    { type : DB_FILED_TYPE_TEXT, valText : 'pwdSha256' }, //
                    { type : DB_FILED_TYPE_BIGINT, valInt : 123 }, //
                ],
            }
        ];
        dbFutureGlobalPrepare("insert into tb_global_login_history values (?, ?, ?)", row, (ret, desc, rst) => { /* 批量插入. */
            if (ret != 0x00) {
                console.error("insert into tb_global_login_history failed, ret: " + ret + ", desc: " + desc);
                return;
            }
            console.info("insert into tb_global_login_history successful, rst: " + JSON.stringify(rst.toJSON()));
        });
        //
        dbFutureGlobal("select * from tb_global_login_history", (ret, desc, rst) => {
            if (ret != 0x00) {
                console.error("query tb_global_login_history failed, ret: " + ret + ", desc: " + desc);
                return;
            }
            for (var i = 0; i < rst.row.length; ++i) {
                console.log("row: " + i + ", usr: " + getStrFromDbRst(rst, i, "usr") + ", pwdSha256: " + getStrFromDbRst(rst, i, "pwdSha256") + ", uts: " + getLongFromDbRst(rst, i, "uts"));
            }
        });
    });
}
