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

#include "XmsgImClientDb.h"
#include "sqlite/SqliteMisc.h"

XmsgImClientDb::XmsgImClientDb(const string& path)
{
	this->db = NULL;
	this->path = path;
	this->run = true;
}

bool XmsgImClientDb::open()
{
	int ret = sqlite3_open(this->path.c_str(), &this->db);
	if (ret != SQLITE_OK)
	{
		LOG_ERROR("open sqlite3 database(%s) failed, ret: %d", this->path.c_str(), ret)
		return false;
	}
	sqlite3_exec(this->db, "PRAGMA synchronous = OFF;", 0, 0, 0); 
	sqlite3_exec(this->db, "PRAGMA cache_size = 8000;", 0, 0, 0); 
	sqlite3_exec(this->db, "PRAGMA page_size = 2048;", 0, 0, 0); 
	sqlite3_exec(this->db, "PRAGMA temp_store = 2;", 0, 0, 0); 
	LOG_INFO("open sqlite3 database(%s) successful", this->path.c_str())
	list<string> lis;
	if (!SqliteMisc::tables(this->db, lis))
	{
		LOG_ERROR("show tables failed, database: %s", this->path.c_str())
		return false;
	}
	return lis.empty() ? this->createTables() : true; 
}

bool XmsgImClientDb::createTables()
{
	return true;
}

void XmsgImClientDb::start()
{
	shared_ptr<XmsgImClientDb> db = this->shared_from_this();
	thread t([db]()
	{
		db->svc();
	});
	t.detach();
}

void XmsgImClientDb::push(shared_ptr<x_msg_im_client_db_trans> trans)
{
	unique_lock<mutex> lock(this->lock4transQueue);
	bool nll = this->transQueue.empty();
	this->transQueue.push(trans);
	if (nll)
		this->cond4transQueue.notify_one(); 
}

void XmsgImClientDb::svc()
{
	LOG_INFO("x-msg-im-client db thread start successful, name: %s", this->path.c_str())
	while (this->run)
	{
		unique_lock<mutex> lock(this->lock4transQueue);
		while (this->transQueue.empty())
			this->cond4transQueue.wait(lock);
		auto trans = this->transQueue.front();
		this->transQueue.pop();
		lock.unlock();
		this->execute(trans);
	}
	LOG_INFO("x-msg-im-client db thread exit, name: %s", this->path.c_str())
}

void XmsgImClientDb::execute(shared_ptr<x_msg_im_client_db_trans> trans)
{
	ullong sts = DateMisc::now();
	if (trans->attachOnly)
	{
		trans->cbAttachOnly(this->db);
		trans->ets = DateMisc::now();
		trans->elap = (int) (trans->ets - sts);
		LOG_TRACE("execute db transaction finished, gts: %s, ets: %s, elap: %dms", 
				DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->gts).c_str(),
				DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->ets).c_str(),
				trans->elap)
		return;
	}
	if (trans->req->sql().find("select") == 0 || trans->req->sql().find("SELECT") == 0) 
	{
		trans->rst = SqliteMisc::query(this->db, trans->req, trans->ret, trans->desc);
		trans->ets = DateMisc::now();
		trans->elap = (int) (trans->ets - sts);
		LOG_TRACE("execute db transaction finished, sql: %s, gts: %s, ets: %s, elap: %dms", 
				trans->req->sql().c_str(),
				DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->gts).c_str(),
				DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->ets).c_str(),
				trans->elap)
		XmsgImClientCore::instance()->future([trans]
		{
			trans->cbDbOper(trans->ret, trans->desc, trans->rst);
		});
		return;
	}
	int change = 0;
	if (SqliteMisc::sql(this->db, trans->req, trans->ret, trans->desc, &change))
	{
		trans->rst.reset(new SqliteResultSet());
		trans->rst->rsp.reset(new XmsgImClientDbCrudRsp());
		trans->rst->rsp->set_change(change);
	}
	trans->ets = DateMisc::now();
	trans->elap = (int) (trans->ets - sts);
	LOG_TRACE("execute db transaction finished, sql: %s, gts: %s, ets: %s, elap: %dms", 
			trans->req->sql().c_str(),
			DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->gts).c_str(),
			DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(trans->ets).c_str(),
			trans->elap)
	XmsgImClientCore::instance()->future([trans]
	{
		trans->cbDbOper(trans->ret, trans->desc, trans->rst);
	});
}

XmsgImClientDb::~XmsgImClientDb()
{

}

