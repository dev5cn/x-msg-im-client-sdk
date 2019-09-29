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

#include "ChannelGlobalTitle.h"

ChannelGlobalTitle::ChannelGlobalTitle()
{
	this->separator = 0x00;
}

bool ChannelGlobalTitle::isSameHlr(SptrCgt other)
{
	if (this->domain != other->domain)
		return false;
	if (this->hlr != other->hlr)
		return false;
	return true;
}

bool ChannelGlobalTitle::isSame(SptrCgt other)
{
	if (this->uid != other->uid)
		return false;
	if (this->separator != other->separator)
		return false;
	if (this->hlr != other->hlr)
		return false;
	if (this->domain != other->domain)
		return false;
	return true;
}

bool ChannelGlobalTitle::isUsr()
{
	return this->separator == CHANNEL_GLOBAL_TITLE_TYPE_USR || this->separator == CHANNEL_GLOBAL_TITLE_TYPE_SYSNE;
}

bool ChannelGlobalTitle::isGroup()
{
	return this->separator == CHANNEL_GLOBAL_TITLE_TYPE_GROUP;
}

bool ChannelGlobalTitle::isSysNe()
{
	return this->separator == CHANNEL_GLOBAL_TITLE_TYPE_SYSNE;
}

shared_ptr<ChannelGlobalTitle> ChannelGlobalTitle::parse(const string& str)
{
	if (str.empty())
		return nullptr;
	int splitIndx = -1;
	shared_ptr<ChannelGlobalTitle> cgt(new ChannelGlobalTitle());
	for (int i = str.length() - 1; i >= 0; --i)
	{
		const char chr = str.data()[i];
		if (chr > 0x7F) 
			return nullptr;
		if (chr == CHANNEL_GLOBAL_TITLE_TYPE_USR) 
		{
			if (i == 0)
				return nullptr;
			if (splitIndx != -1) 
				return nullptr;
			splitIndx = i;
			cgt->separator = chr;
			cgt->uid.assign(str.data() + i + 1, str.length() - i - 1);
			continue;
		}
		if (chr == CHANNEL_GLOBAL_TITLE_TYPE_GROUP) 
		{
			if (i == 0)
				return nullptr;
			if (splitIndx != -1) 
				return nullptr;
			splitIndx = i;
			cgt->separator = chr;
			cgt->uid.assign(str.data() + i + 1, str.length() - i - 1);
			continue;
		}
		if (chr == CHANNEL_GLOBAL_TITLE_TYPE_SYSNE) 
		{
			if (i == 0)
				return nullptr;
			if (splitIndx != -1) 
				return nullptr;
			splitIndx = i;
			cgt->separator = chr;
			cgt->uid.assign(str.data() + i + 1, str.length() - i - 1);
			continue;
		}
		if (chr == '.') 
		{
			if (i > splitIndx)
				return nullptr;
			cgt->hlr.assign(str.data() + i + 1, splitIndx - i - 1);
			cgt->domain.assign(str.data(), i);
			return !cgt->checkDomain() ? nullptr : cgt;
		}
		if ((chr >= 0x30 && chr <= 0x39) || (chr >= 0x41 && chr <= 0x5A) || (chr >= 0x61 && chr <= 0x7A)) 
			continue;
		return nullptr;
	}
	if (cgt->separator == 0x00)
	{
		cgt->uid = str;
		return cgt;
	}
	if (cgt->hlr.empty())
		cgt->hlr.assign(str.data(), splitIndx);
	return !cgt->uid.empty() ? cgt : nullptr;
}

bool ChannelGlobalTitle::checkDomain()
{
	for (uint i = 0; i < this->domain.length(); ++i)
	{
		char chr = this->domain.at(i);
		if (chr == '.')
		{
			if (i == 0 || i == this->domain.length() - 1) 
				return false;
			if (this->domain.at(i - 1) == '.' || this->domain.at(i - 1) == '_' || this->domain.at(i - 1) == '-') 
				return false;
			if (this->domain.at(i + 1) == '.' || this->domain.at(i + 1) == '_' || this->domain.at(i + 1) == '-')
				return false;
		}
		if (chr == '.' || chr == '_' || chr == '-' || (chr >= 0x30 && chr <= 0x39) || (chr >= 0x41 && chr <= 0x5A) || (chr >= 0x61 && chr <= 0x7A)) 
			continue;
		return false;
	}
	return true;
}

string ChannelGlobalTitle::toString()
{
	if (this->separator == 0)
		return this->uid;
	string str;
	if (this->domain.empty())
	{
		SPRINTF_STRING(&str, "%s%c%s", this->hlr.c_str(), this->separator, this->uid.c_str())
		return str;
	}
	SPRINTF_STRING(&str, "%s.%s%c%s", this->domain.c_str(), this->hlr.c_str(), this->separator, this->uid.c_str())
	return str;
}

ChannelGlobalTitle::~ChannelGlobalTitle()
{

}

