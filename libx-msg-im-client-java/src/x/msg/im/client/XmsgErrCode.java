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



package x.msg.im.client;

import java.util.HashMap;

public class XmsgErrCode
{
	public static final XmsgErrCode SUCCESS = new XmsgErrCode(0x0000, "SUCCESS");;
	public static final XmsgErrCode FAILURE = new XmsgErrCode(0x0001, "FAILURE");
	public static final XmsgErrCode INVALID = new XmsgErrCode(0x0002, "INVALID");
	public static final XmsgErrCode PRESENT = new XmsgErrCode(0x0003, "PRESENT");
	public static final XmsgErrCode NOT_PRESENT = new XmsgErrCode(0x0004, "NOT_PRESENT");
	public static final XmsgErrCode EXCEPTION = new XmsgErrCode(0x0005, "EXCEPTION");
	public static final XmsgErrCode NOT_FOUND = new XmsgErrCode(0x0006, "NOT_FOUND");
	public static final XmsgErrCode TIME_OUT = new XmsgErrCode(0x0007, "TIME_OUT");
	public static final XmsgErrCode FORBIDDEN = new XmsgErrCode(0x0008, "FORBIDDEN");
	public static final XmsgErrCode FORMAT_ERROR = new XmsgErrCode(0x0009, "FORMAT_ERROR");
	public static final XmsgErrCode MISSING_PARAMETER = new XmsgErrCode(0x000A, "MISSING_PARAMETER");
	public static final XmsgErrCode UNSUPPORTED = new XmsgErrCode(0x000B, "UNSUPPORTED");
	public static final XmsgErrCode NO_AUTH = new XmsgErrCode(0x000C, "NO_AUTH");
	public static final XmsgErrCode NO_PERMISSION = new XmsgErrCode(0x000D, "NO_PERMISSION");
	public static final XmsgErrCode NO_RECORD = new XmsgErrCode(0x000E, "NO_RECORD");
	public static final XmsgErrCode OVER_LIMIT = new XmsgErrCode(0x000F, "OVER_LIMIT");
	public static final XmsgErrCode DUPLICATE_OPER = new XmsgErrCode(0x0010, "DUPLICATE_OPER");
	public static final XmsgErrCode UPDATE = new XmsgErrCode(0x0011, "UPDATE");
	public static final XmsgErrCode NOT_UPDATE = new XmsgErrCode(0x0012, "NOT_UPDATE");
	public static final XmsgErrCode ROUTE_FAILED = new XmsgErrCode(0x0013, "ROUTE_FAILED");
	public static final XmsgErrCode CONNECTION_DISC = new XmsgErrCode(0x0014, "CONNECTION_DISC");
	public static final XmsgErrCode USR_OR_PASSWORD_ERROR = new XmsgErrCode(0x0015, "USR_OR_PASSWORD_ERROR");
	public static final XmsgErrCode USR_DEFINED = new XmsgErrCode(0x0100, "USR_DEFINED");

	public XmsgErrCode(int num, String desc)
	{
		this.num = num;
		this.desc = desc;
		this.i18n = null;
	}

	public XmsgErrCode(int num, String desc, String[] i18n)
	{
		this.num = num;
		this.desc = desc;
		this.i18n = i18n;
	}

	public final int getNumber()
	{
		return this.num;
	}

	public final String getDesc()
	{
		return this.desc;
	}

	public final String getI18n(int i18n)
	{
		return this.i18n == null ? "" : this.i18n[i18n % this.i18n.length];
	}

	public boolean equals(XmsgErrCode other)
	{
		return this.num == other.num;
	}

	public String toString()
	{
		return this.desc;
	}

	private static final void add(XmsgErrCode errcde)
	{
		XmsgErrCode.errCode.put(errcde.num, errcde);
	}

	public static final XmsgErrCode get(int num)
	{
		XmsgErrCode err = XmsgErrCode.errCode.get(num);
		return err == null ? new XmsgErrCode(num, "UNKNOWN") : err;
	}

	private int num = 0;
	private String desc = null;
	private String[] i18n = null;
	private static final HashMap<Integer, XmsgErrCode> errCode = new HashMap<>();
	static
	{
		XmsgErrCode.add(SUCCESS);
		XmsgErrCode.add(FAILURE);
		XmsgErrCode.add(INVALID);
		XmsgErrCode.add(PRESENT);
		XmsgErrCode.add(NOT_PRESENT);
		XmsgErrCode.add(EXCEPTION);
		XmsgErrCode.add(NOT_FOUND);
		XmsgErrCode.add(TIME_OUT);
		XmsgErrCode.add(FORBIDDEN);
		XmsgErrCode.add(FORMAT_ERROR);
		XmsgErrCode.add(MISSING_PARAMETER);
		XmsgErrCode.add(UNSUPPORTED);
		XmsgErrCode.add(NO_AUTH);
		XmsgErrCode.add(NO_PERMISSION);
		XmsgErrCode.add(NO_RECORD);
		XmsgErrCode.add(OVER_LIMIT);
		XmsgErrCode.add(DUPLICATE_OPER);
		XmsgErrCode.add(UPDATE);
		XmsgErrCode.add(NOT_UPDATE);
		XmsgErrCode.add(ROUTE_FAILED);
		XmsgErrCode.add(CONNECTION_DISC);
		XmsgErrCode.add(USR_OR_PASSWORD_ERROR);
	}
}
