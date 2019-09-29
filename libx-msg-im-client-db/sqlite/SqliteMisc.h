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

#ifndef SQLITE_SQLITEMISC_H_
#define SQLITE_SQLITEMISC_H_

#include <libmisc.h>
#include "sqlite3.h"
#include "SqliteResultSet.h"

class SqliteMisc
{
public:
	static bool tables(sqlite3* db, list<string>& lis);
	static bool sql(sqlite3* db, const string& sql, int& ret, string& desc, int* affected = NULL ); 
	static bool sql(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected = NULL ); 
	static SptrRst query(sqlite3* db, const string& sql, int& ret, string& desc); 
	static SptrRst query(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc); 
public:
	static void addBigint(XmsgImClientDbRow* row, ullong val);
	static void addText(XmsgImClientDbRow* row, string val);
	static void addBlob(XmsgImClientDbRow* row, string val);
	static void addBlob(XmsgImClientDbRow* row, void* dat, int len);
private:
	static SptrRst queryBind(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc); 
	static bool execBindOneNoResult(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected = NULL ); 
	static bool execBindBatchNoResult(sqlite3* db, shared_ptr<XmsgImClientDbCrudReq> req, int& ret, string& desc, int* affected = NULL ); 
	static bool execNoResult(sqlite3* db, const string& sql, int& ret, string& desc, int* affected = NULL ); 
	static bool bind(sqlite3_stmt* stmt, const XmsgImClientDbRow& row, int& ret, string& desc); 
	static SptrRst rst(sqlite3_stmt* stmt); 
	static int cb(SqliteResultSet* rst, int column, char **value, char **field); 
	SqliteMisc();
	virtual ~SqliteMisc();
};

#endif 
