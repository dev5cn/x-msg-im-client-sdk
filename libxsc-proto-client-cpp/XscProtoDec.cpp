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

#include "XscProtoDec.h"

static const uchar __XSC_LEN_0xFE__ = 0xFE;
static const uchar __XSC_LEN_0xFF__ = 0xFF;

XscProtoDec::XscProtoDec()
{

}

int XscProtoDec::decode(uchar* dat, uint size, xsc_tlv_node* node)
{
	::memset(node, 0, sizeof(xsc_tlv_node));
	if (XscProtoDec::__decode__(dat, size, node) == 0)
		return 0;
	XscProtoDec::free(node);
	return 1;
}

int XscProtoDec::getBin(xsc_tlv_node* node, ushort t, uchar* v, uint max)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return -1;
	if (x->self.l == 0)
		return 0;
	::memcpy(v, x->self.v, x->self.l > max ? max : x->self.l);
	return x->self.l > max ? max : x->self.l;
}

uchar* XscProtoDec::peekBin(xsc_tlv_node* node, ushort t, uint* len)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return NULL;
	if (x->self.l == 0)
		return NULL;
	*len = x->self.l;
	return x->self.v;
}

int XscProtoDec::getChar(xsc_tlv_node* node, ushort t, uchar* v)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return 1;
	if (x->self.l != 1)
		return 1;
	::memcpy(v, x->self.v, 1);
	return 0;
}

int XscProtoDec::getStr(xsc_tlv_node* node, ushort t, char* str, uint max)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return 1;
	if (x->self.l < 1)
		return 1;
	::memcpy(str, x->self.v, x->self.l > max ? max : x->self.l);
	return 0;
}

int XscProtoDec::getShort(xsc_tlv_node* node, ushort t, ushort* v)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return 1;
	if (x->self.l != 2)
		return 1;
	::memcpy(v, x->self.v, 2);
	*v = ::ntohs(*v);
	return 0;
}

int XscProtoDec::getInt(xsc_tlv_node* node, ushort t, uint* v)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return 1;
	if (x->self.l != 4)
		return 1;
	::memcpy(v, x->self.v, 4);
	*v = ::ntohl(*v);
	return 0;
}

int XscProtoDec::getLong(xsc_tlv_node* node, ushort t, ullong* v)
{
	xsc_tlv_node* x = NULL;
	if (XscProtoDec::searchC(node, t, &x) != 0)
		return 1;
	if (x->self.l != 8)
		return 1;
	*v = Net::ntohll(*((ullong*) x->self.v));
	return 0;
}

int XscProtoDec::getNode(xsc_tlv_node* node, ushort t, xsc_tlv_node** c)
{
	return XscProtoDec::searchC(node, t, c);
}

int XscProtoDec::getFirstChild(xsc_tlv_node* node, xsc_tlv_node** c)
{
	if (node->c == NULL)
		return 1;
	*c = node->c;
	return 0;
}

int XscProtoDec::getNextSibling(xsc_tlv_node* node, xsc_tlv_node** s)
{
	if (node->s == NULL)
		return 1;
	*s = node->s;
	return 0;
}

int XscProtoDec::searchS(xsc_tlv_node* node, ushort tag, xsc_tlv_node** s)
{
	if (node->self.t == tag)
	{
		*s = node;
		return 0;
	}
	return node->s == NULL ? 1 : XscProtoDec::searchS(node->s, tag, s);
}

int XscProtoDec::searchC(xsc_tlv_node* node, ushort tag, xsc_tlv_node** c)
{
	if (node->self.t == tag)
	{
		*c = node;
		return 0;
	}
	return node->c == NULL ? 1 : XscProtoDec::searchS(node->c, tag, c);
}

void XscProtoDec::free(xsc_tlv_node* node)
{
	if (node->self.v != NULL)
	{
		node->self.v = 0;
		node->self.l = 0;
	}
	if (node->c != NULL)
	{
		XscProtoDec::free(node->c);
		::free(node->c);
		node->c = NULL;
	}
	if (node->s != NULL)
	{
		XscProtoDec::free(node->s);
		::free(node->s);
		node->s = 0;
	}
}

int XscProtoDec::__decode__(uchar* dat, uint size, xsc_tlv_node* node)
{
	uchar t = dat[0];
	uchar ll = 0;
	uint l = 0;
	int ret = 1;
	if (XscProtoDec::genTl(dat, size, &ll, &l) != 0)
		return ret;
	node->self.t = t;
	node->self.l = l;
	if (t & 0x40) 
	{
		node->c = (xsc_tlv_node*) ::calloc(1, sizeof(xsc_tlv_node));
		if (XscProtoDec::__decode__(dat + 1 + ll, node->self.l, node->c) != 0)
			return ret;
	} else 
	{
		node->self.v = dat + 1 + ll; 
	}
	uint cur = (1 + ll + node->self.l);
	uint rem = size - cur; 
	if (rem != 0)
	{
		node->s = (xsc_tlv_node*) ::calloc(1, sizeof(xsc_tlv_node));
		return XscProtoDec::__decode__(dat + cur, rem, node->s);
	}
	return 0;
}

int XscProtoDec::genTl(uchar* dat, uint size, uchar* ll, uint* l)
{
	int ret = 1;
	if (size < 2)
	{
		LOG_TRACE("no enough size for decode tag-field and length-field, size: %08X, dat: %s", size, Net::hex2strUperCaseSpace(dat, size).c_str())
		return ret;
	}
	*ll = (dat[1] == __XSC_LEN_0xFE__ ? 3 : (dat[1] == __XSC_LEN_0xFF__ ? 5 : 1));
	if (size < (uint) (1 + *ll))
	{
		LOG_TRACE("no enough size for decode length-field, size: %08X, ll: %02X", size, *ll)
		return ret;
	}
	if (*ll == 1) 
	{
		*l = dat[1];
		if (size < ((uint) (1 + *ll)) + *l)
		{
			LOG_TRACE("no enough size for decode length-field, size: %08X, ll: %02X, l: %02X", size, *ll, *l)
			return ret;
		}
		return 0;
	}
	if (*ll == 3) 
	{
		::memcpy(((uchar*) l), dat + (1 + 1), 2);
		*l = ::ntohs(*((ushort*) l));
		if (size < ((uint) (1 + *ll)) + *l)
		{
			LOG_TRACE("no enough size for decode value-field, size: %08X, ll: %02X, l: %04X", size, *ll, *l)
			return ret;
		}
		return 0;
	}
	if (*ll == 5) 
	{
		::memcpy(l, dat + 1 + 1, 4);
		*l = ::ntohl(*l);
		if (size < ((uint) (1 + *ll)) + *l)
		{
			LOG_TRACE("no enough size for decode value-field, size: %08X, ll: %02X, l: %08X", size, *ll, *l)
			return ret;
		}
		return 0;
	}
	return ret;
}

string XscProtoDec::printNode2str(xsc_tlv_node* node)
{
	string str;
	XscProtoDec::__print__(node, &str, 0);
	return str;
}

void XscProtoDec::__print__(xsc_tlv_node* node, string* buff, int space)
{
	int i = 0;
	for (; i < space; ++i)
	{
		SPRINTF_STRING(buff, "%s", i == space - 1 ? " |" : " ")
	}
	const char* tstr = string(XscProto::tagDesc(node->self.t)).c_str();
	uchar ll = XscProto::tlvLen(node->self.l);
	if ((node->self.t & 0xFF00) ? (node->self.t & 0x4000) : (node->self.t & 0x40)) 
	{
		space += 4;
		if (ll == 1)
		{
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%02X]\n") : ("----%02X(%s)[%02X]\n"), node->self.t, tstr, node->self.l)
		} else if (ll == 3)
		{
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%04X]\n") : ("----%02X(%s)[%04X]\n"), node->self.t, tstr, node->self.l)
		} else
		{
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%08X]\n") : ("----%02X(%s)[%08X]\n"), node->self.t, tstr, node->self.l)
		}
		i = 0;
		for (; i < space; ++i)
		{
			SPRINTF_STRING(buff, "%s", i == space - 1 ? " |\n" : " ")
		}
	} else
	{
		if (ll == 1)
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%02X]={") : ("----%02X(%s)[%02X]={"), node->self.t, tstr, node->self.l)
		else if (ll == 3)
		{
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%04X]={") : ("----%02X(%s)[%04X]={"), node->self.t, tstr, node->self.l)
		} else
		{
			SPRINTF_STRING(buff, (node->self.t & 0xFF00) ? ("--%04X(%s)[%08X]={") : ("----%02X(%s)[%08X]={"), node->self.t, tstr, node->self.l)
		}
		i = 0;
		for (; (uint) i < node->self.l; ++i)
		{
			if ((uint) i == node->self.l - 1)
			{
				SPRINTF_STRING(buff, "%02X", (uchar ) (((uchar* ) node->self.v)[i]))
			} else
			{
				SPRINTF_STRING(buff, "%02X ", (uchar ) (((uchar* ) node->self.v)[i]))
			}
		}
		SPRINTF_STRING(buff, "%s", "}\n");
		space += 4;
	}
	if (node->c != 0)
		XscProtoDec::__print__(node->c, buff, space);
	if (node->s != 0)
		XscProtoDec::__print__(node->s, buff, space - 4);
}

void XscProtoDec::printNode(xsc_tlv_node* node)
{
	::printf("%s\n", XscProtoDec::printNode2str(node).c_str());
}

void XscProtoDec::printf(uchar* dat, uint size)
{
	xsc_tlv_node root;
	Net::printHex(dat, size);
	if (XscProtoDec::decode(dat, size, &root) == 0)
	{
		::printf("%s\n", XscProtoDec::printNode2str(&root).c_str());
		XscProtoDec::free(&root);
		return;
	}
	LOG_TRACE("can not decode this xsc pdu")
}

void XscProtoDec::printPdu(xsc_tlv_pdu* xtp)
{
	XscProtoDec::printf(xtp->buff + xtp->rm, xtp->len - xtp->rm);
}

string XscProtoDec::print2str(uchar* dat, uint size)
{
	xsc_tlv_node root;
	if (XscProtoDec::decode(dat, size, &root) == 0)
	{
		string str = XscProtoDec::printNode2str(&root);
		XscProtoDec::free(&root);
		return str;
	}
	LOG_TRACE("can not decode this xsc pdu")
	return "";
}

string XscProtoDec::printPdu2str(xsc_tlv_pdu* xtp)
{
	return XscProtoDec::print2str(xtp->buff + xtp->rm, xtp->len - xtp->rm);
}

XscProtoDec::~XscProtoDec()
{

}

