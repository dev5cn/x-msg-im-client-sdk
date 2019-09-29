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

#ifndef SQLITE_SQLITERESULTSET_H_
#define SQLITE_SQLITERESULTSET_H_

#include <libmisc.h>
#include <libx-msg-im-client-pb.h>

class SqliteResultSet
{
public:
	bool getBool(int row, int col); 
	bool getBool(int row, const string& field); 
	uint getInt(int row, int col); 
	uint getInt(int row, const string& field); 
	ullong getLong(int row, int col); 
	ullong getLong(int row, const string& field); 
	const string& getStr(int row, int col); 
	const string& getStr(int row, const string& field); 
	shared_ptr<Message> getPb(int row, int col, const Descriptor* desc); 
	shared_ptr<Message> getPb(int row, const string& field, const Descriptor* desc); 
	string yyyy_mm_dd_hh_mi_ss(int row, int col); 
	string yyyy_mm_dd_hh_mi_ss(int row, const string& field); 
	string yyyy_mm_dd_hh_mi_ss_ms(int row, int col); 
	string yyyy_mm_dd_hh_mi_ss_ms(int row, const string& field); 
	int rowSize(); 
	int columnSize(); 
	bool empty(); 
public:
	shared_ptr<XmsgImClientDbCrudRsp> rsp;
	SqliteResultSet();
	virtual ~SqliteResultSet();
};

typedef shared_ptr<SqliteResultSet> SptrRst;

#endif 
