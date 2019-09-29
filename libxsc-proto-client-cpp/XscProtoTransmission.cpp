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

#include "XscProtoTransmission.h"

XscProtoTransmission::XscProtoTransmission()
{
	this->indicator = 0;
	this->len = 0;
	this->header = NULL;
	this->trans = NULL;
}

bool XscProtoTransmission::decode(uchar* dat, int len, uchar lenlen )
{
	if ((this->indicator & 0x01) && !this->decodeHeader(dat, len, lenlen) )
		return false;
	int remain = this->header == NULL ? (len - 1 - lenlen) : (len - 1 - lenlen - this->header->len);
	if (remain == 0)
		return true;
	if (remain < 0)
	{
		LOG_FAULT("it`s a bug, dat: %s", Net::printHex2str(dat, len).c_str())
		return false;
	}
	this->trans = new XscProtoTransaction();
	return this->trans->decode(dat + (len - remain), remain);
}

bool XscProtoTransmission::decodeHeader(uchar* dat, int len, uchar lenlen )
{
	uchar* hdat = dat + 1 + lenlen; 
	int hlen = len - 1 - lenlen; 
	uchar ll = 0; 
	uint l = 0; 
	if (XscProtoDec::genTl(hdat, hlen, &ll, &l) != 0)
	{
		LOG_DEBUG("header format error, dat: %s", Net::printHex2str(dat, len).c_str())
		return false;
	}
	xsc_tlv_node root;
	if (XscProtoDec::decode(hdat, 1 + ll + l, &root) != 0)
	{
		LOG_DEBUG("header format error, dat: %s", Net::printHex2str(hdat, 1 + ll + l).c_str())
		return false;
	}
	this->header = new xsc_transmission_header();
	this->header->len = 1 + ll + l;
	this->decodeHeaderOpt(&root);
	XscProtoDec::free(&root);
	return true;
}

void XscProtoTransmission::decodeHeaderOpt(xsc_tlv_node* root)
{
	xsc_tlv_node* sec;
	if (XscProtoDec::getNode(root, XSC_TAG_TRANSM_SECURITY, &sec) == 0)
	{
		this->header->security = new xsc_transmission_header_security();
		XscProtoDec::getChar(sec, XSC_TAG_ALG, &this->header->security->checkSumAlg);
		XscProtoDec::getInt(sec, XSC_TAG_CHECKSUM, &this->header->security->checkSumVal);
	}
	xsc_tlv_node* oob;
	if (XscProtoDec::getNode(root, XSC_TAG_TRANSM_OOB, &oob) == 0)
	{
		this->header->oob = new xsc_transmission_header_oob();
		xsc_tlv_node* child;
		if (XscProtoDec::getFirstChild(oob, &child) == 0 && child->self.l > 0)
		{
			string v((const char*) child->self.v, child->self.l);
			this->header->oob->kv.push_back(make_pair<>(child->self.t, v));
		}
		xsc_tlv_node* sibling;
		while (XscProtoDec::getNextSibling(child, &sibling) == 0)
		{
			if (sibling->self.l < 1)
				continue;
			string v((const char*) sibling->self.v, sibling->self.l);
			this->header->oob->kv.push_back(make_pair<>(sibling->self.t, v));
			child = sibling;
		}
	}
}

void XscProtoTransmission::encodeHeader(const xsc_transmission_header* header, xsc_tlv_pdu* xtp)
{
	bool filled = false;
	if (header->oob != NULL)
	{
		for (auto& it : header->oob->kv)
			XscProtoEnc::addBin(xtp, it.first, (uchar*) it.second.data(), it.second.length());
		XscProtoEnc::addTag(xtp, XSC_TAG_TRANSM_OOB);
		filled = true;
	}
	if (header->security != NULL)
	{
		if (filled)
			XscProtoEnc::setPoint(xtp);
		XscProtoEnc::addInt(xtp, XSC_TAG_CHECKSUM, header->security->checkSumVal);
		XscProtoEnc::addChar(xtp, XSC_TAG_ALG, header->security->checkSumAlg);
		if (filled)
			XscProtoEnc::addTag4Point(xtp, XSC_TAG_TRANSM_SECURITY);
		else
			XscProtoEnc::addTag(xtp, XSC_TAG_TRANSM_SECURITY);
		filled = true;
	}
	XscProtoEnc::addTag(xtp, XSC_TAG_TRANSM_HEADER);
}

void XscProtoTransmission::addOob(uchar tag, const string& val)
{
	if (this->header == NULL)
		this->header = new xsc_transmission_header();
	if (this->header->oob == NULL)
		this->header->oob = new xsc_transmission_header_oob();
	this->header->oob->kv.push_back(make_pair<>(tag, val));
}

bool XscProtoTransmission::getOob(uchar tag, string& val)
{
	if (this->header == nullptr || this->header->oob == NULL)
		return false;
	for (auto& it : this->header->oob->kv)
	{
		if (it.first != tag)
			continue;
		val = it.second;
		return true;
	}
	return false;
}

bool XscProtoTransmission::haveOob(uchar tag)
{
	if (this->header == nullptr || this->header->oob == NULL)
		return false;
	for (auto& it : this->header->oob->kv)
	{
		if (it.first == tag)
			return true;
	}
	return false;
}

void XscProtoTransmission::freeHeader(xsc_transmission_header* header)
{
	if (header == NULL)
		return;
	if (header->security != NULL)
	{
		delete header->security;
		header->security = NULL;
	}
	if (header->oob != NULL)
	{
		delete header->oob;
		header->oob = NULL;
	}
}

int XscProtoTransmission::calLength(int len )
{
	if (len < 0xFF)
		return 1;
	if (len < 0xFFFE)
		return 2;
	if (len < 0xFFFFFD)
		return 3;
	return 4;
}

XscProtoTransmission::~XscProtoTransmission()
{
	if (this->header != NULL)
	{
		XscProtoTransmission::freeHeader(this->header);
		delete this->header;
		this->header = NULL;
	}
	if (this->trans != NULL)
	{
		delete this->trans;
		this->trans = NULL;
	}
}

