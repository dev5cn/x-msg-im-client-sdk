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

#include "SqliteMisc.h"

SqliteMisc::SqliteMisc()
{

}

bool SqliteMisc::tables(sqlite3* db, list<string>& lis)
{
	shared_ptr<XmsgImClientDbCrudReq> req(new XmsgImClientDbCrudReq());
	req->set_sql("select name from sqlite_master where type = 'table' order by name");
	int ret;
	string desc;
	auto rst = SqliteMisc::query(db, req, ret, desc);
	if (rst == nullptr)
		return false;
	if (rst->rsp->row().empty()) 
		return true;
	for (auto& it : rst->rsp->row())
		lis.push_back(it.col(0).valtext());
	return true;
}

bool SqliteMisc::sql(sqlite3* db, const string& sql, int& ret, string& desc, int* affected)
{
	return SqliteMisc::execNoResult(db, sql, ret, desc, affected);
}

bool SqliteMisc::sql(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected )
{
	return (req->row().empty()) ? SqliteMisc::execNoResult(db, req->sql(), ret, desc, affected) : 
									((req->row_size() == 1) ? SqliteMisc::execBindOneNoResult(db, req, ret, desc, affected) : 
																SqliteMisc::execBindBatchNoResult(db, req, ret, desc, affected));
}

SptrRst SqliteMisc::query(sqlite3* db, const string& sql, int& ret, string& desc)
{
	sqlite3_stmt* stmt;
	ret = sqlite3_prepare_v3(db, sql.c_str(), -1, 0, &stmt, NULL);
	if (ret != SQLITE_OK)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_prepare_v3 failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), sql.c_str())
		return nullptr;
	}
	auto rst = SqliteMisc::rst(stmt);
	sqlite3_finalize(stmt);
	return rst;
}

SptrRst SqliteMisc::query(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc)
{
	return (!req->row().empty()) ? SqliteMisc::queryBind(db, req, ret, desc) : SqliteMisc::query(db, req->sql(), ret, desc);
}

void SqliteMisc::addBigint(XmsgImClientDbRow* row, ullong val)
{
	auto col = row->add_col();
	col->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT);
	col->set_valint(val);
}

void SqliteMisc::addText(XmsgImClientDbRow* row, string val)
{
	auto col = row->add_col();
	col->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT);
	col->set_valtext(val);
}

void SqliteMisc::addBlob(XmsgImClientDbRow* row, string val)
{
	auto col = row->add_col();
	col->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB);
	col->set_valblob(val);
}

void SqliteMisc::addBlob(XmsgImClientDbRow* row, void* dat, int len)
{
	auto col = row->add_col();
	col->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB);
	col->set_valblob(dat, len);
}

SptrRst SqliteMisc::queryBind(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc)
{
	sqlite3_stmt* stmt;
	ret = sqlite3_prepare_v3(db, req->sql().c_str(), -1, 0, &stmt, NULL);
	if (ret != SQLITE_OK)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_prepare_v3 failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		return nullptr;
	}
	if (!SqliteMisc::bind(stmt, req->row(0), ret, desc))
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.append(", err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		sqlite3_finalize(stmt);
		return nullptr;
	}
	auto rst = SqliteMisc::rst(stmt);
	sqlite3_finalize(stmt);
	return rst;
}

bool SqliteMisc::execNoResult(sqlite3* db, const string& sql, int& ret, string& desc, int* affected )
{
	desc.clear();
	char* err = NULL;
	ret = sqlite3_exec(db, sql.c_str(), (int (*)(void*, int, char**, char**))SqliteMisc::cb, NULL, &err);
	if (ret != SQLITE_OK)
	{
		desc.assign(err);
		sqlite3_free(err);
		return false;
	}
	if (affected != NULL)
		*affected = sqlite3_changes(db);
	return true;
}

bool SqliteMisc::execBindOneNoResult(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected )
{
	desc.clear();
	sqlite3_stmt* stmt = NULL;
	ret = sqlite3_prepare_v3(db, req->sql().c_str(), req->sql().length(), 0, &stmt, NULL);
	if (ret != SQLITE_OK)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_prepare_v3 failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		return false;
	}
	if (!SqliteMisc::bind(stmt, req->row(0), ret, desc))
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.append(", err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		sqlite3_finalize(stmt);
		return false;
	}
	ret = sqlite3_step(stmt);
	if (ret != SQLITE_DONE)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_step failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		sqlite3_finalize(stmt);
		return false;
	}
	if (affected != NULL)
		*affected = sqlite3_changes(db);
	ret = sqlite3_finalize(stmt);
	if (ret != SQLITE_OK)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_finalize failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
	}
	return true;
}

bool SqliteMisc::execBindBatchNoResult(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected )
{
	desc.clear();
	sqlite3_stmt* stmt = NULL;
	ret = sqlite3_prepare_v3(db, req->sql().c_str(), -1, 0, &stmt, NULL);
	if (ret != SQLITE_OK)
	{
		string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
		desc.assign("sqlite3_prepare_v3 failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, req: %s", err.c_str(), req->ShortDebugString().c_str())
		return false;
	}
	char* errmsg = NULL;
	ret = sqlite3_exec(db, "begin transaction;", 0, 0, &errmsg);
	if (ret != SQLITE_OK)
	{
		sqlite3_finalize(stmt);
		string err = errmsg == NULL ? "" : string(errmsg);
		if (errmsg != NULL)
			::free(errmsg);
		errmsg = NULL;
		desc.assign("begin transaction failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, sql: %s", err.c_str(), req->sql().c_str())
		return false;
	}
	for (int i = 0; i < req->row_size(); ++i)
	{
		if (!SqliteMisc::bind(stmt, req->row(i), ret, desc))
		{
			string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
			desc.append(", err: " + err);
			LOG_ERROR("execute sql failed, err: %s, sql: %s, row: %s", err.c_str(), req->sql().c_str(), req->row(i).ShortDebugString().c_str())
			errmsg = NULL;
			sqlite3_exec(db, "rollback;", 0, 0, &errmsg); 
			if (errmsg != NULL)
				::free(errmsg);
			errmsg = NULL;
			sqlite3_finalize(stmt);
			return false;
		}
		ret = sqlite3_step(stmt);
		if (ret != SQLITE_DONE)
		{
			string err = sqlite3_errmsg(db) == NULL ? "" : sqlite3_errmsg(db);
			desc.assign("sqlite3_step failed, err: " + err);
			LOG_ERROR("execute sql failed, err: %s, sql: %s, row: %s", err.c_str(), req->sql().c_str(), req->row(i).ShortDebugString().c_str())
			errmsg = NULL;
			sqlite3_exec(db, "rollback;", 0, 0, &errmsg); 
			if (errmsg != NULL)
				::free(errmsg);
			errmsg = NULL;
			sqlite3_finalize(stmt);
			return false;
		}
		if (affected != NULL)
			*affected += sqlite3_changes(db);
		sqlite3_reset(stmt);
	}
	errmsg = NULL;
	ret = sqlite3_exec(db, "end transaction;", 0, 0, &errmsg);
	if (ret != SQLITE_OK)
	{
		string err = errmsg == NULL ? "" : string(errmsg);
		if (errmsg != NULL)
			::free(errmsg);
		errmsg = NULL;
		desc.assign("end transaction failed, err: " + err);
		LOG_ERROR("execute sql failed, err: %s, sql: %s", err.c_str(), req->sql().c_str())
		sqlite3_exec(db, "rollback;", 0, 0, &errmsg); 
		if (errmsg != NULL)
			::free(errmsg);
		errmsg = NULL;
		sqlite3_finalize(stmt);
		return false;
	}
	sqlite3_finalize(stmt);
	return true;
}

bool SqliteMisc::bind(sqlite3_stmt* stmt, const XmsgImClientDbRow& row, int& ret, string& desc)
{
	desc.clear();
	for (int i = 1; i <= row.col_size(); ++i)
	{
		const XmsgImClientDbFiled& f = row.col().Get(i - 1);
		if (f.type() == XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT)
		{
			ret = sqlite3_bind_int64(stmt, i, f.valint());
			if (ret != SQLITE_OK)
			{
				desc.assign("sqlite3_bind_int64 failed");
				return false;
			}
			continue;
		}
		if (f.type() == XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT)
		{
			if (!f.valtext().empty())
				ret = sqlite3_bind_text(stmt, i, f.valtext().c_str(), -1, SQLITE_STATIC);
			else
				ret = sqlite3_bind_null(stmt, i); 
			if (ret != SQLITE_OK)
			{
				desc.assign("sqlite3_bind_text failed");
				return false;
			}
			continue;
		}
		if (f.type() == XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB)
		{
			if (!f.valblob().empty())
				ret = sqlite3_bind_blob(stmt, i, f.valblob().data(), f.valblob().length(), SQLITE_STATIC);
			else
				ret = sqlite3_bind_null(stmt, i); 
			if (ret != SQLITE_OK)
			{
				desc.assign("sqlite3_bind_blob failed");
				return false;
			}
			continue;
		}
		desc.assign("unexpected field type");
		LOG_FAULT("it`s a bug, unexpected field type: %02X", (uint )f.type())
		return false;
	}
	return true;
}

SptrRst SqliteMisc::rst(sqlite3_stmt* stmt)
{
	int count = 0;
	SptrRst rst(new SqliteResultSet());
	while (sqlite3_step(stmt) == SQLITE_ROW) 
	{
		XmsgImClientDbRow* row = rst->rsp->add_row();
		for (int i = 0; i < sqlite3_column_count(stmt); ++i)
		{
			if (count == 0) 
				rst->rsp->mutable_column()->insert(MapPair<string, uint>(sqlite3_column_name(stmt, i), i));
			XmsgImClientDbFiled* field = row->add_col();
			switch (sqlite3_column_type(stmt, i))
			{
			case SQLITE_INTEGER:
				field->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT);
				field->set_valint(sqlite3_column_int64(stmt, i));
				break;
			case SQLITE_TEXT:
				field->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT);
				field->set_valtext((char*) sqlite3_column_text(stmt, i), sqlite3_column_bytes(stmt, i));
				break;
			case SQLITE_BLOB:
				field->set_type(XmsgImClientDbFiledType::X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB);
				field->set_valblob(sqlite3_column_blob(stmt, i), sqlite3_column_bytes(stmt, i));
				break;
			case SQLITE_NULL:
				break;
			default:
			{
				LOG_FAULT("unexpected sqlite3 type: %d", sqlite3_column_type(stmt, i))
				return nullptr;
			}
			}
		}
		++count;
	}
	return rst;
}

int SqliteMisc::cb(SqliteResultSet* rst, int column, char **value, char **field)
{
	return 0;
}

SqliteMisc::~SqliteMisc()
{

}

