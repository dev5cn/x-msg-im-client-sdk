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

#include "SqliteResultSet.h"

SqliteResultSet::SqliteResultSet()
{
	this->rsp.reset(new XmsgImClientDbCrudRsp());
}

bool SqliteResultSet::getBool(int row, int col)
{
	return this->rsp->row(row).col(col).valint() == 0; 
}

bool SqliteResultSet::getBool(int row, const string& field)
{
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return false;
	}
	return this->getBool(row, it->second);
}

uint SqliteResultSet::getInt(int row, int col)
{
	return (uint) this->getLong(row, col);
}

uint SqliteResultSet::getInt(int row, const string& field)
{
	return (uint) this->getLong(row, field);
}

ullong SqliteResultSet::getLong(int row, int col)
{
	return this->rsp->row(row).col(col).valint();
}

ullong SqliteResultSet::getLong(int row, const string& field)
{
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return 0;
	}
	return this->getLong(row, it->second);
}

const string& SqliteResultSet::getStr(int row, int col)
{
	return this->rsp->row(row).col(col).valtext();
}

const string& SqliteResultSet::getStr(int row, const string& field)
{
	static string str = "";
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return str;
	}
	return this->getStr(row, it->second);
}

shared_ptr<Message> SqliteResultSet::getPb(int row, int col, const Descriptor* desc)
{
	const Message* pt = MessageFactory::generated_factory()->GetPrototype(desc);
	if (pt == NULL)
	{
		LOG_ERROR("can`t not found message type stub for this desc, pb name: %s", desc->name().c_str())
		return nullptr;
	}
	shared_ptr<Message> msg(pt->New());
	if (this->rsp->row(row).col(col).valblob().empty())
		return msg;
	if (msg->ParseFromString(this->rsp->row(row).col(col).valblob()))
		return msg;
	LOG_ERROR("serialize message failed, name: %s", desc->name().c_str());
	return nullptr;
}

shared_ptr<Message> SqliteResultSet::getPb(int row, const string& field, const Descriptor* desc)
{
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return nullptr;
	}
	return this->getPb(row, it->second, desc);
}

string SqliteResultSet::yyyy_mm_dd_hh_mi_ss(int row, int col)
{
	return DateMisc::to_yyyy_mm_dd_hh_mi_ss(this->getLong(row, col) / 1000L);
}

string SqliteResultSet::yyyy_mm_dd_hh_mi_ss(int row, const string& field)
{
	static string str = "";
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return str;
	}
	return this->yyyy_mm_dd_hh_mi_ss(row, it->second);
}

string SqliteResultSet::yyyy_mm_dd_hh_mi_ss_ms(int row, int col)
{
	return DateMisc::to_yyyy_mm_dd_hh_mi_ss_ms(this->getLong(row, col));
}

string SqliteResultSet::yyyy_mm_dd_hh_mi_ss_ms(int row, const string& field)
{
	static string str = "";
	auto it = this->rsp->column().find(field);
	if (it == this->rsp->column().end())
	{
		LOG_ERROR("can not found filed in result-set: %s", field.c_str())
		return str;
	}
	return this->yyyy_mm_dd_hh_mi_ss_ms(row, it->second);
}

int SqliteResultSet::rowSize()
{
	return this->rsp->row_size();
}

int SqliteResultSet::columnSize()
{
	return this->rsp->column_size();
}

bool SqliteResultSet::empty()
{
	return this->rsp->row().empty();
}

SqliteResultSet::~SqliteResultSet()
{

}
