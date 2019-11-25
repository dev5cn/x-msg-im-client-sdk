import * as $protobuf from "protobufjs";
/** Properties of a XmsgImHlrEventUsrSubReq. */
export interface IXmsgImHlrEventUsrSubReq {

    /** XmsgImHlrEventUsrSubReq ver */
    ver?: (number|Long|null);
}

/** Represents a XmsgImHlrEventUsrSubReq. */
export class XmsgImHlrEventUsrSubReq implements IXmsgImHlrEventUsrSubReq {

    /**
     * Constructs a new XmsgImHlrEventUsrSubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventUsrSubReq);

    /** XmsgImHlrEventUsrSubReq ver. */
    public ver: (number|Long);

    /**
     * Creates a new XmsgImHlrEventUsrSubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventUsrSubReq instance
     */
    public static create(properties?: IXmsgImHlrEventUsrSubReq): XmsgImHlrEventUsrSubReq;

    /**
     * Encodes the specified XmsgImHlrEventUsrSubReq message. Does not implicitly {@link XmsgImHlrEventUsrSubReq.verify|verify} messages.
     * @param message XmsgImHlrEventUsrSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventUsrSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventUsrSubReq message, length delimited. Does not implicitly {@link XmsgImHlrEventUsrSubReq.verify|verify} messages.
     * @param message XmsgImHlrEventUsrSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventUsrSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventUsrSubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventUsrSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventUsrSubReq;

    /**
     * Decodes a XmsgImHlrEventUsrSubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventUsrSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventUsrSubReq;

    /**
     * Verifies a XmsgImHlrEventUsrSubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventUsrSubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventUsrSubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventUsrSubReq;

    /**
     * Creates a plain object from a XmsgImHlrEventUsrSubReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventUsrSubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventUsrSubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventUsrSubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventUsrSubRsp. */
export interface IXmsgImHlrEventUsrSubRsp {

    /** XmsgImHlrEventUsrSubRsp latestVer */
    latestVer?: (number|Long|null);
}

/** Represents a XmsgImHlrEventUsrSubRsp. */
export class XmsgImHlrEventUsrSubRsp implements IXmsgImHlrEventUsrSubRsp {

    /**
     * Constructs a new XmsgImHlrEventUsrSubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventUsrSubRsp);

    /** XmsgImHlrEventUsrSubRsp latestVer. */
    public latestVer: (number|Long);

    /**
     * Creates a new XmsgImHlrEventUsrSubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventUsrSubRsp instance
     */
    public static create(properties?: IXmsgImHlrEventUsrSubRsp): XmsgImHlrEventUsrSubRsp;

    /**
     * Encodes the specified XmsgImHlrEventUsrSubRsp message. Does not implicitly {@link XmsgImHlrEventUsrSubRsp.verify|verify} messages.
     * @param message XmsgImHlrEventUsrSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventUsrSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventUsrSubRsp message, length delimited. Does not implicitly {@link XmsgImHlrEventUsrSubRsp.verify|verify} messages.
     * @param message XmsgImHlrEventUsrSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventUsrSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventUsrSubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventUsrSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventUsrSubRsp;

    /**
     * Decodes a XmsgImHlrEventUsrSubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventUsrSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventUsrSubRsp;

    /**
     * Verifies a XmsgImHlrEventUsrSubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventUsrSubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventUsrSubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventUsrSubRsp;

    /**
     * Creates a plain object from a XmsgImHlrEventUsrSubRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventUsrSubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventUsrSubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventUsrSubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventSysSubReq. */
export interface IXmsgImHlrEventSysSubReq {

    /** XmsgImHlrEventSysSubReq ver */
    ver?: (number|Long|null);
}

/** Represents a XmsgImHlrEventSysSubReq. */
export class XmsgImHlrEventSysSubReq implements IXmsgImHlrEventSysSubReq {

    /**
     * Constructs a new XmsgImHlrEventSysSubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventSysSubReq);

    /** XmsgImHlrEventSysSubReq ver. */
    public ver: (number|Long);

    /**
     * Creates a new XmsgImHlrEventSysSubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventSysSubReq instance
     */
    public static create(properties?: IXmsgImHlrEventSysSubReq): XmsgImHlrEventSysSubReq;

    /**
     * Encodes the specified XmsgImHlrEventSysSubReq message. Does not implicitly {@link XmsgImHlrEventSysSubReq.verify|verify} messages.
     * @param message XmsgImHlrEventSysSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventSysSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventSysSubReq message, length delimited. Does not implicitly {@link XmsgImHlrEventSysSubReq.verify|verify} messages.
     * @param message XmsgImHlrEventSysSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventSysSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventSysSubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventSysSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventSysSubReq;

    /**
     * Decodes a XmsgImHlrEventSysSubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventSysSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventSysSubReq;

    /**
     * Verifies a XmsgImHlrEventSysSubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventSysSubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventSysSubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventSysSubReq;

    /**
     * Creates a plain object from a XmsgImHlrEventSysSubReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventSysSubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventSysSubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventSysSubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventSysSubRsp. */
export interface IXmsgImHlrEventSysSubRsp {

    /** XmsgImHlrEventSysSubRsp latestVer */
    latestVer?: (number|Long|null);
}

/** Represents a XmsgImHlrEventSysSubRsp. */
export class XmsgImHlrEventSysSubRsp implements IXmsgImHlrEventSysSubRsp {

    /**
     * Constructs a new XmsgImHlrEventSysSubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventSysSubRsp);

    /** XmsgImHlrEventSysSubRsp latestVer. */
    public latestVer: (number|Long);

    /**
     * Creates a new XmsgImHlrEventSysSubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventSysSubRsp instance
     */
    public static create(properties?: IXmsgImHlrEventSysSubRsp): XmsgImHlrEventSysSubRsp;

    /**
     * Encodes the specified XmsgImHlrEventSysSubRsp message. Does not implicitly {@link XmsgImHlrEventSysSubRsp.verify|verify} messages.
     * @param message XmsgImHlrEventSysSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventSysSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventSysSubRsp message, length delimited. Does not implicitly {@link XmsgImHlrEventSysSubRsp.verify|verify} messages.
     * @param message XmsgImHlrEventSysSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventSysSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventSysSubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventSysSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventSysSubRsp;

    /**
     * Decodes a XmsgImHlrEventSysSubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventSysSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventSysSubRsp;

    /**
     * Verifies a XmsgImHlrEventSysSubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventSysSubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventSysSubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventSysSubRsp;

    /**
     * Creates a plain object from a XmsgImHlrEventSysSubRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventSysSubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventSysSubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventSysSubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventUsrNotice. */
export interface IXmsgImHlrEventUsrNotice {

    /** XmsgImHlrEventUsrNotice msg */
    msg?: (string|null);

    /** XmsgImHlrEventUsrNotice dat */
    dat?: (Uint8Array|null);

    /** XmsgImHlrEventUsrNotice ver */
    ver?: (number|Long|null);

    /** XmsgImHlrEventUsrNotice gts */
    gts?: (number|Long|null);
}

/** Represents a XmsgImHlrEventUsrNotice. */
export class XmsgImHlrEventUsrNotice implements IXmsgImHlrEventUsrNotice {

    /**
     * Constructs a new XmsgImHlrEventUsrNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventUsrNotice);

    /** XmsgImHlrEventUsrNotice msg. */
    public msg: string;

    /** XmsgImHlrEventUsrNotice dat. */
    public dat: Uint8Array;

    /** XmsgImHlrEventUsrNotice ver. */
    public ver: (number|Long);

    /** XmsgImHlrEventUsrNotice gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgImHlrEventUsrNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventUsrNotice instance
     */
    public static create(properties?: IXmsgImHlrEventUsrNotice): XmsgImHlrEventUsrNotice;

    /**
     * Encodes the specified XmsgImHlrEventUsrNotice message. Does not implicitly {@link XmsgImHlrEventUsrNotice.verify|verify} messages.
     * @param message XmsgImHlrEventUsrNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventUsrNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventUsrNotice message, length delimited. Does not implicitly {@link XmsgImHlrEventUsrNotice.verify|verify} messages.
     * @param message XmsgImHlrEventUsrNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventUsrNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventUsrNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventUsrNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventUsrNotice;

    /**
     * Decodes a XmsgImHlrEventUsrNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventUsrNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventUsrNotice;

    /**
     * Verifies a XmsgImHlrEventUsrNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventUsrNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventUsrNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventUsrNotice;

    /**
     * Creates a plain object from a XmsgImHlrEventUsrNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventUsrNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventUsrNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventUsrNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventSysNotice. */
export interface IXmsgImHlrEventSysNotice {

    /** XmsgImHlrEventSysNotice msg */
    msg?: (string|null);

    /** XmsgImHlrEventSysNotice dat */
    dat?: (Uint8Array|null);

    /** XmsgImHlrEventSysNotice ver */
    ver?: (number|Long|null);

    /** XmsgImHlrEventSysNotice gts */
    gts?: (number|Long|null);
}

/** Represents a XmsgImHlrEventSysNotice. */
export class XmsgImHlrEventSysNotice implements IXmsgImHlrEventSysNotice {

    /**
     * Constructs a new XmsgImHlrEventSysNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventSysNotice);

    /** XmsgImHlrEventSysNotice msg. */
    public msg: string;

    /** XmsgImHlrEventSysNotice dat. */
    public dat: Uint8Array;

    /** XmsgImHlrEventSysNotice ver. */
    public ver: (number|Long);

    /** XmsgImHlrEventSysNotice gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgImHlrEventSysNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventSysNotice instance
     */
    public static create(properties?: IXmsgImHlrEventSysNotice): XmsgImHlrEventSysNotice;

    /**
     * Encodes the specified XmsgImHlrEventSysNotice message. Does not implicitly {@link XmsgImHlrEventSysNotice.verify|verify} messages.
     * @param message XmsgImHlrEventSysNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventSysNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventSysNotice message, length delimited. Does not implicitly {@link XmsgImHlrEventSysNotice.verify|verify} messages.
     * @param message XmsgImHlrEventSysNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventSysNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventSysNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventSysNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventSysNotice;

    /**
     * Decodes a XmsgImHlrEventSysNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventSysNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventSysNotice;

    /**
     * Verifies a XmsgImHlrEventSysNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventSysNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventSysNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventSysNotice;

    /**
     * Creates a plain object from a XmsgImHlrEventSysNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventSysNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventSysNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventSysNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventUsrReadReq. */
export interface IXmsgImHlrEventUsrReadReq {

    /** XmsgImHlrEventUsrReadReq ver */
    ver?: (number|Long|null);
}

/** Represents a XmsgImHlrEventUsrReadReq. */
export class XmsgImHlrEventUsrReadReq implements IXmsgImHlrEventUsrReadReq {

    /**
     * Constructs a new XmsgImHlrEventUsrReadReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventUsrReadReq);

    /** XmsgImHlrEventUsrReadReq ver. */
    public ver: (number|Long);

    /**
     * Creates a new XmsgImHlrEventUsrReadReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventUsrReadReq instance
     */
    public static create(properties?: IXmsgImHlrEventUsrReadReq): XmsgImHlrEventUsrReadReq;

    /**
     * Encodes the specified XmsgImHlrEventUsrReadReq message. Does not implicitly {@link XmsgImHlrEventUsrReadReq.verify|verify} messages.
     * @param message XmsgImHlrEventUsrReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventUsrReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventUsrReadReq message, length delimited. Does not implicitly {@link XmsgImHlrEventUsrReadReq.verify|verify} messages.
     * @param message XmsgImHlrEventUsrReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventUsrReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventUsrReadReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventUsrReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventUsrReadReq;

    /**
     * Decodes a XmsgImHlrEventUsrReadReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventUsrReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventUsrReadReq;

    /**
     * Verifies a XmsgImHlrEventUsrReadReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventUsrReadReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventUsrReadReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventUsrReadReq;

    /**
     * Creates a plain object from a XmsgImHlrEventUsrReadReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventUsrReadReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventUsrReadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventUsrReadReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventUsrReadRsp. */
export interface IXmsgImHlrEventUsrReadRsp {

    /** XmsgImHlrEventUsrReadRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImHlrEventUsrReadRsp. */
export class XmsgImHlrEventUsrReadRsp implements IXmsgImHlrEventUsrReadRsp {

    /**
     * Constructs a new XmsgImHlrEventUsrReadRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventUsrReadRsp);

    /** XmsgImHlrEventUsrReadRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrEventUsrReadRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventUsrReadRsp instance
     */
    public static create(properties?: IXmsgImHlrEventUsrReadRsp): XmsgImHlrEventUsrReadRsp;

    /**
     * Encodes the specified XmsgImHlrEventUsrReadRsp message. Does not implicitly {@link XmsgImHlrEventUsrReadRsp.verify|verify} messages.
     * @param message XmsgImHlrEventUsrReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventUsrReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventUsrReadRsp message, length delimited. Does not implicitly {@link XmsgImHlrEventUsrReadRsp.verify|verify} messages.
     * @param message XmsgImHlrEventUsrReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventUsrReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventUsrReadRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventUsrReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventUsrReadRsp;

    /**
     * Decodes a XmsgImHlrEventUsrReadRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventUsrReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventUsrReadRsp;

    /**
     * Verifies a XmsgImHlrEventUsrReadRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventUsrReadRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventUsrReadRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventUsrReadRsp;

    /**
     * Creates a plain object from a XmsgImHlrEventUsrReadRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventUsrReadRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventUsrReadRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventUsrReadRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventSysReadReq. */
export interface IXmsgImHlrEventSysReadReq {

    /** XmsgImHlrEventSysReadReq ver */
    ver?: (number|Long|null);
}

/** Represents a XmsgImHlrEventSysReadReq. */
export class XmsgImHlrEventSysReadReq implements IXmsgImHlrEventSysReadReq {

    /**
     * Constructs a new XmsgImHlrEventSysReadReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventSysReadReq);

    /** XmsgImHlrEventSysReadReq ver. */
    public ver: (number|Long);

    /**
     * Creates a new XmsgImHlrEventSysReadReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventSysReadReq instance
     */
    public static create(properties?: IXmsgImHlrEventSysReadReq): XmsgImHlrEventSysReadReq;

    /**
     * Encodes the specified XmsgImHlrEventSysReadReq message. Does not implicitly {@link XmsgImHlrEventSysReadReq.verify|verify} messages.
     * @param message XmsgImHlrEventSysReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventSysReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventSysReadReq message, length delimited. Does not implicitly {@link XmsgImHlrEventSysReadReq.verify|verify} messages.
     * @param message XmsgImHlrEventSysReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventSysReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventSysReadReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventSysReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventSysReadReq;

    /**
     * Decodes a XmsgImHlrEventSysReadReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventSysReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventSysReadReq;

    /**
     * Verifies a XmsgImHlrEventSysReadReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventSysReadReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventSysReadReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventSysReadReq;

    /**
     * Creates a plain object from a XmsgImHlrEventSysReadReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventSysReadReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventSysReadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventSysReadReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrEventSysReadRsp. */
export interface IXmsgImHlrEventSysReadRsp {

    /** XmsgImHlrEventSysReadRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImHlrEventSysReadRsp. */
export class XmsgImHlrEventSysReadRsp implements IXmsgImHlrEventSysReadRsp {

    /**
     * Constructs a new XmsgImHlrEventSysReadRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrEventSysReadRsp);

    /** XmsgImHlrEventSysReadRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrEventSysReadRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrEventSysReadRsp instance
     */
    public static create(properties?: IXmsgImHlrEventSysReadRsp): XmsgImHlrEventSysReadRsp;

    /**
     * Encodes the specified XmsgImHlrEventSysReadRsp message. Does not implicitly {@link XmsgImHlrEventSysReadRsp.verify|verify} messages.
     * @param message XmsgImHlrEventSysReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrEventSysReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrEventSysReadRsp message, length delimited. Does not implicitly {@link XmsgImHlrEventSysReadRsp.verify|verify} messages.
     * @param message XmsgImHlrEventSysReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrEventSysReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrEventSysReadRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrEventSysReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrEventSysReadRsp;

    /**
     * Decodes a XmsgImHlrEventSysReadRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrEventSysReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrEventSysReadRsp;

    /**
     * Verifies a XmsgImHlrEventSysReadRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrEventSysReadRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrEventSysReadRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrEventSysReadRsp;

    /**
     * Creates a plain object from a XmsgImHlrEventSysReadRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrEventSysReadRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrEventSysReadRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrEventSysReadRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupSendMsgReq. */
export interface IXmsgImGroupSendMsgReq {

    /** XmsgImGroupSendMsgReq cgt */
    cgt?: (string|null);

    /** XmsgImGroupSendMsgReq localMsgId */
    localMsgId?: (number|Long|null);

    /** XmsgImGroupSendMsgReq msg */
    msg?: (IXmsgImMsg|null);

    /** XmsgImGroupSendMsgReq ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupSendMsgReq. */
export class XmsgImGroupSendMsgReq implements IXmsgImGroupSendMsgReq {

    /**
     * Constructs a new XmsgImGroupSendMsgReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSendMsgReq);

    /** XmsgImGroupSendMsgReq cgt. */
    public cgt: string;

    /** XmsgImGroupSendMsgReq localMsgId. */
    public localMsgId: (number|Long);

    /** XmsgImGroupSendMsgReq msg. */
    public msg?: (IXmsgImMsg|null);

    /** XmsgImGroupSendMsgReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupSendMsgReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSendMsgReq instance
     */
    public static create(properties?: IXmsgImGroupSendMsgReq): XmsgImGroupSendMsgReq;

    /**
     * Encodes the specified XmsgImGroupSendMsgReq message. Does not implicitly {@link XmsgImGroupSendMsgReq.verify|verify} messages.
     * @param message XmsgImGroupSendMsgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSendMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSendMsgReq message, length delimited. Does not implicitly {@link XmsgImGroupSendMsgReq.verify|verify} messages.
     * @param message XmsgImGroupSendMsgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSendMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSendMsgReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSendMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSendMsgReq;

    /**
     * Decodes a XmsgImGroupSendMsgReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSendMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSendMsgReq;

    /**
     * Verifies a XmsgImGroupSendMsgReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSendMsgReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSendMsgReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSendMsgReq;

    /**
     * Creates a plain object from a XmsgImGroupSendMsgReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupSendMsgReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSendMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSendMsgReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupSendMsgRsp. */
export interface IXmsgImGroupSendMsgRsp {

    /** XmsgImGroupSendMsgRsp msgId */
    msgId?: (number|Long|null);

    /** XmsgImGroupSendMsgRsp gcgt */
    gcgt?: (string|null);

    /** XmsgImGroupSendMsgRsp gts */
    gts?: (number|Long|null);

    /** XmsgImGroupSendMsgRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupSendMsgRsp. */
export class XmsgImGroupSendMsgRsp implements IXmsgImGroupSendMsgRsp {

    /**
     * Constructs a new XmsgImGroupSendMsgRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSendMsgRsp);

    /** XmsgImGroupSendMsgRsp msgId. */
    public msgId: (number|Long);

    /** XmsgImGroupSendMsgRsp gcgt. */
    public gcgt: string;

    /** XmsgImGroupSendMsgRsp gts. */
    public gts: (number|Long);

    /** XmsgImGroupSendMsgRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupSendMsgRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSendMsgRsp instance
     */
    public static create(properties?: IXmsgImGroupSendMsgRsp): XmsgImGroupSendMsgRsp;

    /**
     * Encodes the specified XmsgImGroupSendMsgRsp message. Does not implicitly {@link XmsgImGroupSendMsgRsp.verify|verify} messages.
     * @param message XmsgImGroupSendMsgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSendMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSendMsgRsp message, length delimited. Does not implicitly {@link XmsgImGroupSendMsgRsp.verify|verify} messages.
     * @param message XmsgImGroupSendMsgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSendMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSendMsgRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSendMsgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSendMsgRsp;

    /**
     * Decodes a XmsgImGroupSendMsgRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSendMsgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSendMsgRsp;

    /**
     * Verifies a XmsgImGroupSendMsgRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSendMsgRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSendMsgRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSendMsgRsp;

    /**
     * Creates a plain object from a XmsgImGroupSendMsgRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupSendMsgRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSendMsgRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSendMsgRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsg. */
export interface IXmsgImMsg {

    /** XmsgImMsg type */
    type?: (string|null);

    /** XmsgImMsg text */
    text?: (IXmsgImMsgText|null);

    /** XmsgImMsg html */
    html?: (IXmsgImMsgHtml|null);

    /** XmsgImMsg image */
    image?: (IXmsgImMsgImage|null);

    /** XmsgImMsg voice */
    voice?: (IXmsgImMsgVoice|null);

    /** XmsgImMsg video */
    video?: (IXmsgImMsgVideo|null);

    /** XmsgImMsg file */
    file?: (IXmsgImMsgFile|null);

    /** XmsgImMsg merge */
    merge?: (IXmsgImMsgMerge|null);

    /** XmsgImMsg atx */
    atx?: (IXmsgImMsgAt|null);
}

/** Represents a XmsgImMsg. */
export class XmsgImMsg implements IXmsgImMsg {

    /**
     * Constructs a new XmsgImMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsg);

    /** XmsgImMsg type. */
    public type: string;

    /** XmsgImMsg text. */
    public text?: (IXmsgImMsgText|null);

    /** XmsgImMsg html. */
    public html?: (IXmsgImMsgHtml|null);

    /** XmsgImMsg image. */
    public image?: (IXmsgImMsgImage|null);

    /** XmsgImMsg voice. */
    public voice?: (IXmsgImMsgVoice|null);

    /** XmsgImMsg video. */
    public video?: (IXmsgImMsgVideo|null);

    /** XmsgImMsg file. */
    public file?: (IXmsgImMsgFile|null);

    /** XmsgImMsg merge. */
    public merge?: (IXmsgImMsgMerge|null);

    /** XmsgImMsg atx. */
    public atx?: (IXmsgImMsgAt|null);

    /**
     * Creates a new XmsgImMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsg instance
     */
    public static create(properties?: IXmsgImMsg): XmsgImMsg;

    /**
     * Encodes the specified XmsgImMsg message. Does not implicitly {@link XmsgImMsg.verify|verify} messages.
     * @param message XmsgImMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsg message, length delimited. Does not implicitly {@link XmsgImMsg.verify|verify} messages.
     * @param message XmsgImMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsg;

    /**
     * Decodes a XmsgImMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsg;

    /**
     * Verifies a XmsgImMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsg
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsg;

    /**
     * Creates a plain object from a XmsgImMsg message. Also converts values to other types if specified.
     * @param message XmsgImMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgText. */
export interface IXmsgImMsgText {

    /** XmsgImMsgText text */
    text?: (string|null);
}

/** Represents a XmsgImMsgText. */
export class XmsgImMsgText implements IXmsgImMsgText {

    /**
     * Constructs a new XmsgImMsgText.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgText);

    /** XmsgImMsgText text. */
    public text: string;

    /**
     * Creates a new XmsgImMsgText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgText instance
     */
    public static create(properties?: IXmsgImMsgText): XmsgImMsgText;

    /**
     * Encodes the specified XmsgImMsgText message. Does not implicitly {@link XmsgImMsgText.verify|verify} messages.
     * @param message XmsgImMsgText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgText message, length delimited. Does not implicitly {@link XmsgImMsgText.verify|verify} messages.
     * @param message XmsgImMsgText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgText;

    /**
     * Decodes a XmsgImMsgText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgText;

    /**
     * Verifies a XmsgImMsgText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgText
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgText;

    /**
     * Creates a plain object from a XmsgImMsgText message. Also converts values to other types if specified.
     * @param message XmsgImMsgText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgHtml. */
export interface IXmsgImMsgHtml {

    /** XmsgImMsgHtml html */
    html?: (string|null);
}

/** Represents a XmsgImMsgHtml. */
export class XmsgImMsgHtml implements IXmsgImMsgHtml {

    /**
     * Constructs a new XmsgImMsgHtml.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgHtml);

    /** XmsgImMsgHtml html. */
    public html: string;

    /**
     * Creates a new XmsgImMsgHtml instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgHtml instance
     */
    public static create(properties?: IXmsgImMsgHtml): XmsgImMsgHtml;

    /**
     * Encodes the specified XmsgImMsgHtml message. Does not implicitly {@link XmsgImMsgHtml.verify|verify} messages.
     * @param message XmsgImMsgHtml message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgHtml, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgHtml message, length delimited. Does not implicitly {@link XmsgImMsgHtml.verify|verify} messages.
     * @param message XmsgImMsgHtml message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgHtml, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgHtml message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgHtml
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgHtml;

    /**
     * Decodes a XmsgImMsgHtml message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgHtml
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgHtml;

    /**
     * Verifies a XmsgImMsgHtml message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgHtml message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgHtml
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgHtml;

    /**
     * Creates a plain object from a XmsgImMsgHtml message. Also converts values to other types if specified.
     * @param message XmsgImMsgHtml
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgHtml, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgHtml to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgImage. */
export interface IXmsgImMsgImage {

    /** XmsgImMsgImage uri */
    uri?: (string|null);
}

/** Represents a XmsgImMsgImage. */
export class XmsgImMsgImage implements IXmsgImMsgImage {

    /**
     * Constructs a new XmsgImMsgImage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgImage);

    /** XmsgImMsgImage uri. */
    public uri: string;

    /**
     * Creates a new XmsgImMsgImage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgImage instance
     */
    public static create(properties?: IXmsgImMsgImage): XmsgImMsgImage;

    /**
     * Encodes the specified XmsgImMsgImage message. Does not implicitly {@link XmsgImMsgImage.verify|verify} messages.
     * @param message XmsgImMsgImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgImage message, length delimited. Does not implicitly {@link XmsgImMsgImage.verify|verify} messages.
     * @param message XmsgImMsgImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgImage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgImage;

    /**
     * Decodes a XmsgImMsgImage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgImage;

    /**
     * Verifies a XmsgImMsgImage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgImage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgImage
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgImage;

    /**
     * Creates a plain object from a XmsgImMsgImage message. Also converts values to other types if specified.
     * @param message XmsgImMsgImage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgImage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgVoice. */
export interface IXmsgImMsgVoice {

    /** XmsgImMsgVoice uri */
    uri?: (string|null);
}

/** Represents a XmsgImMsgVoice. */
export class XmsgImMsgVoice implements IXmsgImMsgVoice {

    /**
     * Constructs a new XmsgImMsgVoice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgVoice);

    /** XmsgImMsgVoice uri. */
    public uri: string;

    /**
     * Creates a new XmsgImMsgVoice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgVoice instance
     */
    public static create(properties?: IXmsgImMsgVoice): XmsgImMsgVoice;

    /**
     * Encodes the specified XmsgImMsgVoice message. Does not implicitly {@link XmsgImMsgVoice.verify|verify} messages.
     * @param message XmsgImMsgVoice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgVoice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgVoice message, length delimited. Does not implicitly {@link XmsgImMsgVoice.verify|verify} messages.
     * @param message XmsgImMsgVoice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgVoice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgVoice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgVoice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgVoice;

    /**
     * Decodes a XmsgImMsgVoice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgVoice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgVoice;

    /**
     * Verifies a XmsgImMsgVoice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgVoice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgVoice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgVoice;

    /**
     * Creates a plain object from a XmsgImMsgVoice message. Also converts values to other types if specified.
     * @param message XmsgImMsgVoice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgVoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgVoice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgVideo. */
export interface IXmsgImMsgVideo {

    /** XmsgImMsgVideo uri */
    uri?: (string|null);
}

/** Represents a XmsgImMsgVideo. */
export class XmsgImMsgVideo implements IXmsgImMsgVideo {

    /**
     * Constructs a new XmsgImMsgVideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgVideo);

    /** XmsgImMsgVideo uri. */
    public uri: string;

    /**
     * Creates a new XmsgImMsgVideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgVideo instance
     */
    public static create(properties?: IXmsgImMsgVideo): XmsgImMsgVideo;

    /**
     * Encodes the specified XmsgImMsgVideo message. Does not implicitly {@link XmsgImMsgVideo.verify|verify} messages.
     * @param message XmsgImMsgVideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgVideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgVideo message, length delimited. Does not implicitly {@link XmsgImMsgVideo.verify|verify} messages.
     * @param message XmsgImMsgVideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgVideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgVideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgVideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgVideo;

    /**
     * Decodes a XmsgImMsgVideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgVideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgVideo;

    /**
     * Verifies a XmsgImMsgVideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgVideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgVideo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgVideo;

    /**
     * Creates a plain object from a XmsgImMsgVideo message. Also converts values to other types if specified.
     * @param message XmsgImMsgVideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgVideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgVideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgFile. */
export interface IXmsgImMsgFile {

    /** XmsgImMsgFile from */
    from?: (string|null);

    /** XmsgImMsgFile fid */
    fid?: (string|null);
}

/** Represents a XmsgImMsgFile. */
export class XmsgImMsgFile implements IXmsgImMsgFile {

    /**
     * Constructs a new XmsgImMsgFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgFile);

    /** XmsgImMsgFile from. */
    public from: string;

    /** XmsgImMsgFile fid. */
    public fid: string;

    /**
     * Creates a new XmsgImMsgFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgFile instance
     */
    public static create(properties?: IXmsgImMsgFile): XmsgImMsgFile;

    /**
     * Encodes the specified XmsgImMsgFile message. Does not implicitly {@link XmsgImMsgFile.verify|verify} messages.
     * @param message XmsgImMsgFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgFile message, length delimited. Does not implicitly {@link XmsgImMsgFile.verify|verify} messages.
     * @param message XmsgImMsgFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgFile;

    /**
     * Decodes a XmsgImMsgFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgFile;

    /**
     * Verifies a XmsgImMsgFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgFile
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgFile;

    /**
     * Creates a plain object from a XmsgImMsgFile message. Also converts values to other types if specified.
     * @param message XmsgImMsgFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgMerge. */
export interface IXmsgImMsgMerge {

    /** XmsgImMsgMerge msg */
    msg?: (IXmsgImMsg[]|null);
}

/** Represents a XmsgImMsgMerge. */
export class XmsgImMsgMerge implements IXmsgImMsgMerge {

    /**
     * Constructs a new XmsgImMsgMerge.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgMerge);

    /** XmsgImMsgMerge msg. */
    public msg: IXmsgImMsg[];

    /**
     * Creates a new XmsgImMsgMerge instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgMerge instance
     */
    public static create(properties?: IXmsgImMsgMerge): XmsgImMsgMerge;

    /**
     * Encodes the specified XmsgImMsgMerge message. Does not implicitly {@link XmsgImMsgMerge.verify|verify} messages.
     * @param message XmsgImMsgMerge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgMerge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgMerge message, length delimited. Does not implicitly {@link XmsgImMsgMerge.verify|verify} messages.
     * @param message XmsgImMsgMerge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgMerge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgMerge message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgMerge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgMerge;

    /**
     * Decodes a XmsgImMsgMerge message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgMerge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgMerge;

    /**
     * Verifies a XmsgImMsgMerge message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgMerge message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgMerge
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgMerge;

    /**
     * Creates a plain object from a XmsgImMsgMerge message. Also converts values to other types if specified.
     * @param message XmsgImMsgMerge
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgMerge, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgMerge to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImMsgAt. */
export interface IXmsgImMsgAt {

    /** XmsgImMsgAt cgt */
    cgt?: (string[]|null);
}

/** Represents a XmsgImMsgAt. */
export class XmsgImMsgAt implements IXmsgImMsgAt {

    /**
     * Constructs a new XmsgImMsgAt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImMsgAt);

    /** XmsgImMsgAt cgt. */
    public cgt: string[];

    /**
     * Creates a new XmsgImMsgAt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImMsgAt instance
     */
    public static create(properties?: IXmsgImMsgAt): XmsgImMsgAt;

    /**
     * Encodes the specified XmsgImMsgAt message. Does not implicitly {@link XmsgImMsgAt.verify|verify} messages.
     * @param message XmsgImMsgAt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImMsgAt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImMsgAt message, length delimited. Does not implicitly {@link XmsgImMsgAt.verify|verify} messages.
     * @param message XmsgImMsgAt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImMsgAt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImMsgAt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImMsgAt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImMsgAt;

    /**
     * Decodes a XmsgImMsgAt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImMsgAt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImMsgAt;

    /**
     * Verifies a XmsgImMsgAt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImMsgAt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImMsgAt
     */
    public static fromObject(object: { [k: string]: any }): XmsgImMsgAt;

    /**
     * Creates a plain object from a XmsgImMsgAt message. Also converts values to other types if specified.
     * @param message XmsgImMsgAt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImMsgAt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImMsgAt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgNotice. */
export interface IXmsgImGroupMsgNotice {

    /** XmsgImGroupMsgNotice gcgt */
    gcgt?: (string|null);

    /** XmsgImGroupMsgNotice scgt */
    scgt?: (string|null);

    /** XmsgImGroupMsgNotice msgId */
    msgId?: (number|Long|null);

    /** XmsgImGroupMsgNotice msg */
    msg?: (IXmsgImMsg|null);

    /** XmsgImGroupMsgNotice gts */
    gts?: (number|Long|null);

    /** XmsgImGroupMsgNotice ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupMsgNotice. */
export class XmsgImGroupMsgNotice implements IXmsgImGroupMsgNotice {

    /**
     * Constructs a new XmsgImGroupMsgNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgNotice);

    /** XmsgImGroupMsgNotice gcgt. */
    public gcgt: string;

    /** XmsgImGroupMsgNotice scgt. */
    public scgt: string;

    /** XmsgImGroupMsgNotice msgId. */
    public msgId: (number|Long);

    /** XmsgImGroupMsgNotice msg. */
    public msg?: (IXmsgImMsg|null);

    /** XmsgImGroupMsgNotice gts. */
    public gts: (number|Long);

    /** XmsgImGroupMsgNotice ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMsgNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgNotice instance
     */
    public static create(properties?: IXmsgImGroupMsgNotice): XmsgImGroupMsgNotice;

    /**
     * Encodes the specified XmsgImGroupMsgNotice message. Does not implicitly {@link XmsgImGroupMsgNotice.verify|verify} messages.
     * @param message XmsgImGroupMsgNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgNotice message, length delimited. Does not implicitly {@link XmsgImGroupMsgNotice.verify|verify} messages.
     * @param message XmsgImGroupMsgNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgNotice;

    /**
     * Decodes a XmsgImGroupMsgNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgNotice;

    /**
     * Verifies a XmsgImGroupMsgNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgNotice;

    /**
     * Creates a plain object from a XmsgImGroupMsgNotice message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgSyncReq. */
export interface IXmsgImGroupMsgSyncReq {

    /** XmsgImGroupMsgSyncReq cgt */
    cgt?: (string|null);

    /** XmsgImGroupMsgSyncReq msgId */
    msgId?: (number|Long|null);

    /** XmsgImGroupMsgSyncReq latest */
    latest?: (number|null);
}

/** Represents a XmsgImGroupMsgSyncReq. */
export class XmsgImGroupMsgSyncReq implements IXmsgImGroupMsgSyncReq {

    /**
     * Constructs a new XmsgImGroupMsgSyncReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgSyncReq);

    /** XmsgImGroupMsgSyncReq cgt. */
    public cgt: string;

    /** XmsgImGroupMsgSyncReq msgId. */
    public msgId: (number|Long);

    /** XmsgImGroupMsgSyncReq latest. */
    public latest: number;

    /**
     * Creates a new XmsgImGroupMsgSyncReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgSyncReq instance
     */
    public static create(properties?: IXmsgImGroupMsgSyncReq): XmsgImGroupMsgSyncReq;

    /**
     * Encodes the specified XmsgImGroupMsgSyncReq message. Does not implicitly {@link XmsgImGroupMsgSyncReq.verify|verify} messages.
     * @param message XmsgImGroupMsgSyncReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgSyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgSyncReq message, length delimited. Does not implicitly {@link XmsgImGroupMsgSyncReq.verify|verify} messages.
     * @param message XmsgImGroupMsgSyncReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgSyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgSyncReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgSyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgSyncReq;

    /**
     * Decodes a XmsgImGroupMsgSyncReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgSyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgSyncReq;

    /**
     * Verifies a XmsgImGroupMsgSyncReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgSyncReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgSyncReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgSyncReq;

    /**
     * Creates a plain object from a XmsgImGroupMsgSyncReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgSyncReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgSyncReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgSyncReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgSyncRsp. */
export interface IXmsgImGroupMsgSyncRsp {

    /** XmsgImGroupMsgSyncRsp msg */
    msg?: (IXmsgImGroupMsgHistory[]|null);
}

/** Represents a XmsgImGroupMsgSyncRsp. */
export class XmsgImGroupMsgSyncRsp implements IXmsgImGroupMsgSyncRsp {

    /**
     * Constructs a new XmsgImGroupMsgSyncRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgSyncRsp);

    /** XmsgImGroupMsgSyncRsp msg. */
    public msg: IXmsgImGroupMsgHistory[];

    /**
     * Creates a new XmsgImGroupMsgSyncRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgSyncRsp instance
     */
    public static create(properties?: IXmsgImGroupMsgSyncRsp): XmsgImGroupMsgSyncRsp;

    /**
     * Encodes the specified XmsgImGroupMsgSyncRsp message. Does not implicitly {@link XmsgImGroupMsgSyncRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgSyncRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgSyncRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgSyncRsp message, length delimited. Does not implicitly {@link XmsgImGroupMsgSyncRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgSyncRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgSyncRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgSyncRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgSyncRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgSyncRsp;

    /**
     * Decodes a XmsgImGroupMsgSyncRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgSyncRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgSyncRsp;

    /**
     * Verifies a XmsgImGroupMsgSyncRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgSyncRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgSyncRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgSyncRsp;

    /**
     * Creates a plain object from a XmsgImGroupMsgSyncRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgSyncRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgSyncRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgSyncRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgHistory. */
export interface IXmsgImGroupMsgHistory {

    /** XmsgImGroupMsgHistory scgt */
    scgt?: (string|null);

    /** XmsgImGroupMsgHistory msgId */
    msgId?: (number|Long|null);

    /** XmsgImGroupMsgHistory msg */
    msg?: (IXmsgImMsg|null);

    /** XmsgImGroupMsgHistory gts */
    gts?: (number|Long|null);

    /** XmsgImGroupMsgHistory isRead */
    isRead?: (boolean|null);
}

/** Represents a XmsgImGroupMsgHistory. */
export class XmsgImGroupMsgHistory implements IXmsgImGroupMsgHistory {

    /**
     * Constructs a new XmsgImGroupMsgHistory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgHistory);

    /** XmsgImGroupMsgHistory scgt. */
    public scgt: string;

    /** XmsgImGroupMsgHistory msgId. */
    public msgId: (number|Long);

    /** XmsgImGroupMsgHistory msg. */
    public msg?: (IXmsgImMsg|null);

    /** XmsgImGroupMsgHistory gts. */
    public gts: (number|Long);

    /** XmsgImGroupMsgHistory isRead. */
    public isRead: boolean;

    /**
     * Creates a new XmsgImGroupMsgHistory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgHistory instance
     */
    public static create(properties?: IXmsgImGroupMsgHistory): XmsgImGroupMsgHistory;

    /**
     * Encodes the specified XmsgImGroupMsgHistory message. Does not implicitly {@link XmsgImGroupMsgHistory.verify|verify} messages.
     * @param message XmsgImGroupMsgHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgHistory message, length delimited. Does not implicitly {@link XmsgImGroupMsgHistory.verify|verify} messages.
     * @param message XmsgImGroupMsgHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgHistory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgHistory;

    /**
     * Decodes a XmsgImGroupMsgHistory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgHistory;

    /**
     * Verifies a XmsgImGroupMsgHistory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgHistory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgHistory
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgHistory;

    /**
     * Creates a plain object from a XmsgImGroupMsgHistory message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgHistory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgHistory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgQueryReq. */
export interface IXmsgImGroupMsgQueryReq {

    /** XmsgImGroupMsgQueryReq cgt */
    cgt?: (string|null);

    /** XmsgImGroupMsgQueryReq msgId */
    msgId?: (number|Long|null);

    /** XmsgImGroupMsgQueryReq before */
    before?: (boolean|null);

    /** XmsgImGroupMsgQueryReq pageSize */
    pageSize?: (number|null);
}

/** Represents a XmsgImGroupMsgQueryReq. */
export class XmsgImGroupMsgQueryReq implements IXmsgImGroupMsgQueryReq {

    /**
     * Constructs a new XmsgImGroupMsgQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgQueryReq);

    /** XmsgImGroupMsgQueryReq cgt. */
    public cgt: string;

    /** XmsgImGroupMsgQueryReq msgId. */
    public msgId: (number|Long);

    /** XmsgImGroupMsgQueryReq before. */
    public before: boolean;

    /** XmsgImGroupMsgQueryReq pageSize. */
    public pageSize: number;

    /**
     * Creates a new XmsgImGroupMsgQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgQueryReq instance
     */
    public static create(properties?: IXmsgImGroupMsgQueryReq): XmsgImGroupMsgQueryReq;

    /**
     * Encodes the specified XmsgImGroupMsgQueryReq message. Does not implicitly {@link XmsgImGroupMsgQueryReq.verify|verify} messages.
     * @param message XmsgImGroupMsgQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgQueryReq message, length delimited. Does not implicitly {@link XmsgImGroupMsgQueryReq.verify|verify} messages.
     * @param message XmsgImGroupMsgQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgQueryReq;

    /**
     * Decodes a XmsgImGroupMsgQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgQueryReq;

    /**
     * Verifies a XmsgImGroupMsgQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgQueryReq;

    /**
     * Creates a plain object from a XmsgImGroupMsgQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgQueryRsp. */
export interface IXmsgImGroupMsgQueryRsp {

    /** XmsgImGroupMsgQueryRsp msg */
    msg?: (XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem[]|null);
}

/** Represents a XmsgImGroupMsgQueryRsp. */
export class XmsgImGroupMsgQueryRsp implements IXmsgImGroupMsgQueryRsp {

    /**
     * Constructs a new XmsgImGroupMsgQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgQueryRsp);

    /** XmsgImGroupMsgQueryRsp msg. */
    public msg: XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem[];

    /**
     * Creates a new XmsgImGroupMsgQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgQueryRsp instance
     */
    public static create(properties?: IXmsgImGroupMsgQueryRsp): XmsgImGroupMsgQueryRsp;

    /**
     * Encodes the specified XmsgImGroupMsgQueryRsp message. Does not implicitly {@link XmsgImGroupMsgQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgQueryRsp message, length delimited. Does not implicitly {@link XmsgImGroupMsgQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgQueryRsp;

    /**
     * Decodes a XmsgImGroupMsgQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgQueryRsp;

    /**
     * Verifies a XmsgImGroupMsgQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgQueryRsp;

    /**
     * Creates a plain object from a XmsgImGroupMsgQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace XmsgImGroupMsgQueryRsp {

    /** Properties of a XmsgImGroupMsgQueryRspItem. */
    interface IXmsgImGroupMsgQueryRspItem {

        /** XmsgImGroupMsgQueryRspItem scgt */
        scgt?: (string|null);

        /** XmsgImGroupMsgQueryRspItem msgId */
        msgId?: (number|Long|null);

        /** XmsgImGroupMsgQueryRspItem msg */
        msg?: (IXmsgImMsg|null);

        /** XmsgImGroupMsgQueryRspItem gts */
        gts?: (number|Long|null);
    }

    /** Represents a XmsgImGroupMsgQueryRspItem. */
    class XmsgImGroupMsgQueryRspItem implements IXmsgImGroupMsgQueryRspItem {

        /**
         * Constructs a new XmsgImGroupMsgQueryRspItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem);

        /** XmsgImGroupMsgQueryRspItem scgt. */
        public scgt: string;

        /** XmsgImGroupMsgQueryRspItem msgId. */
        public msgId: (number|Long);

        /** XmsgImGroupMsgQueryRspItem msg. */
        public msg?: (IXmsgImMsg|null);

        /** XmsgImGroupMsgQueryRspItem gts. */
        public gts: (number|Long);

        /**
         * Creates a new XmsgImGroupMsgQueryRspItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImGroupMsgQueryRspItem instance
         */
        public static create(properties?: XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem): XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem;

        /**
         * Encodes the specified XmsgImGroupMsgQueryRspItem message. Does not implicitly {@link XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem.verify|verify} messages.
         * @param message XmsgImGroupMsgQueryRspItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImGroupMsgQueryRspItem message, length delimited. Does not implicitly {@link XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem.verify|verify} messages.
         * @param message XmsgImGroupMsgQueryRspItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImGroupMsgQueryRsp.IXmsgImGroupMsgQueryRspItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImGroupMsgQueryRspItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImGroupMsgQueryRspItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem;

        /**
         * Decodes a XmsgImGroupMsgQueryRspItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImGroupMsgQueryRspItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem;

        /**
         * Verifies a XmsgImGroupMsgQueryRspItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImGroupMsgQueryRspItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImGroupMsgQueryRspItem
         */
        public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem;

        /**
         * Creates a plain object from a XmsgImGroupMsgQueryRspItem message. Also converts values to other types if specified.
         * @param message XmsgImGroupMsgQueryRspItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImGroupMsgQueryRsp.XmsgImGroupMsgQueryRspItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImGroupMsgQueryRspItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a XmsgImGroupMsgReadReq. */
export interface IXmsgImGroupMsgReadReq {

    /** XmsgImGroupMsgReadReq cgt */
    cgt?: (string|null);

    /** XmsgImGroupMsgReadReq msgId */
    msgId?: (number|Long|null);
}

/** Represents a XmsgImGroupMsgReadReq. */
export class XmsgImGroupMsgReadReq implements IXmsgImGroupMsgReadReq {

    /**
     * Constructs a new XmsgImGroupMsgReadReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgReadReq);

    /** XmsgImGroupMsgReadReq cgt. */
    public cgt: string;

    /** XmsgImGroupMsgReadReq msgId. */
    public msgId: (number|Long);

    /**
     * Creates a new XmsgImGroupMsgReadReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgReadReq instance
     */
    public static create(properties?: IXmsgImGroupMsgReadReq): XmsgImGroupMsgReadReq;

    /**
     * Encodes the specified XmsgImGroupMsgReadReq message. Does not implicitly {@link XmsgImGroupMsgReadReq.verify|verify} messages.
     * @param message XmsgImGroupMsgReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgReadReq message, length delimited. Does not implicitly {@link XmsgImGroupMsgReadReq.verify|verify} messages.
     * @param message XmsgImGroupMsgReadReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgReadReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgReadReq;

    /**
     * Decodes a XmsgImGroupMsgReadReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgReadReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgReadReq;

    /**
     * Verifies a XmsgImGroupMsgReadReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgReadReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgReadReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgReadReq;

    /**
     * Creates a plain object from a XmsgImGroupMsgReadReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgReadReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgReadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgReadReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgReadRsp. */
export interface IXmsgImGroupMsgReadRsp {

    /** XmsgImGroupMsgReadRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupMsgReadRsp. */
export class XmsgImGroupMsgReadRsp implements IXmsgImGroupMsgReadRsp {

    /**
     * Constructs a new XmsgImGroupMsgReadRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgReadRsp);

    /** XmsgImGroupMsgReadRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMsgReadRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgReadRsp instance
     */
    public static create(properties?: IXmsgImGroupMsgReadRsp): XmsgImGroupMsgReadRsp;

    /**
     * Encodes the specified XmsgImGroupMsgReadRsp message. Does not implicitly {@link XmsgImGroupMsgReadRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgReadRsp message, length delimited. Does not implicitly {@link XmsgImGroupMsgReadRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgReadRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgReadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgReadRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgReadRsp;

    /**
     * Decodes a XmsgImGroupMsgReadRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgReadRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgReadRsp;

    /**
     * Verifies a XmsgImGroupMsgReadRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgReadRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgReadRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgReadRsp;

    /**
     * Creates a plain object from a XmsgImGroupMsgReadRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgReadRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgReadRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgReadRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMsgReadNotice. */
export interface IXmsgImGroupMsgReadNotice {

    /** XmsgImGroupMsgReadNotice cgt */
    cgt?: (string|null);

    /** XmsgImGroupMsgReadNotice msgId */
    msgId?: (number|Long|null);
}

/** Represents a XmsgImGroupMsgReadNotice. */
export class XmsgImGroupMsgReadNotice implements IXmsgImGroupMsgReadNotice {

    /**
     * Constructs a new XmsgImGroupMsgReadNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgReadNotice);

    /** XmsgImGroupMsgReadNotice cgt. */
    public cgt: string;

    /** XmsgImGroupMsgReadNotice msgId. */
    public msgId: (number|Long);

    /**
     * Creates a new XmsgImGroupMsgReadNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgReadNotice instance
     */
    public static create(properties?: IXmsgImGroupMsgReadNotice): XmsgImGroupMsgReadNotice;

    /**
     * Encodes the specified XmsgImGroupMsgReadNotice message. Does not implicitly {@link XmsgImGroupMsgReadNotice.verify|verify} messages.
     * @param message XmsgImGroupMsgReadNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgReadNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgReadNotice message, length delimited. Does not implicitly {@link XmsgImGroupMsgReadNotice.verify|verify} messages.
     * @param message XmsgImGroupMsgReadNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgReadNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgReadNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgReadNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgReadNotice;

    /**
     * Decodes a XmsgImGroupMsgReadNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgReadNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgReadNotice;

    /**
     * Verifies a XmsgImGroupMsgReadNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgReadNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgReadNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgReadNotice;

    /**
     * Creates a plain object from a XmsgImGroupMsgReadNotice message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgReadNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgReadNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgReadNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrGroupMsgReq. */
export interface IXmsgImHlrGroupMsgReq {

    /** XmsgImHlrGroupMsgReq cgt */
    cgt?: (string|null);

    /** XmsgImHlrGroupMsgReq type */
    type?: (string|null);

    /** XmsgImHlrGroupMsgReq msg */
    msg?: (string|null);

    /** XmsgImHlrGroupMsgReq dat */
    dat?: (Uint8Array|null);
}

/** Represents a XmsgImHlrGroupMsgReq. */
export class XmsgImHlrGroupMsgReq implements IXmsgImHlrGroupMsgReq {

    /**
     * Constructs a new XmsgImHlrGroupMsgReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrGroupMsgReq);

    /** XmsgImHlrGroupMsgReq cgt. */
    public cgt: string;

    /** XmsgImHlrGroupMsgReq type. */
    public type: string;

    /** XmsgImHlrGroupMsgReq msg. */
    public msg: string;

    /** XmsgImHlrGroupMsgReq dat. */
    public dat: Uint8Array;

    /**
     * Creates a new XmsgImHlrGroupMsgReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrGroupMsgReq instance
     */
    public static create(properties?: IXmsgImHlrGroupMsgReq): XmsgImHlrGroupMsgReq;

    /**
     * Encodes the specified XmsgImHlrGroupMsgReq message. Does not implicitly {@link XmsgImHlrGroupMsgReq.verify|verify} messages.
     * @param message XmsgImHlrGroupMsgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrGroupMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrGroupMsgReq message, length delimited. Does not implicitly {@link XmsgImHlrGroupMsgReq.verify|verify} messages.
     * @param message XmsgImHlrGroupMsgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrGroupMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrGroupMsgReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrGroupMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrGroupMsgReq;

    /**
     * Decodes a XmsgImHlrGroupMsgReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrGroupMsgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrGroupMsgReq;

    /**
     * Verifies a XmsgImHlrGroupMsgReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrGroupMsgReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrGroupMsgReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrGroupMsgReq;

    /**
     * Creates a plain object from a XmsgImHlrGroupMsgReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrGroupMsgReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrGroupMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrGroupMsgReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImHlrGroupMsgRsp. */
export interface IXmsgImHlrGroupMsgRsp {

    /** XmsgImHlrGroupMsgRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImHlrGroupMsgRsp. */
export class XmsgImHlrGroupMsgRsp implements IXmsgImHlrGroupMsgRsp {

    /**
     * Constructs a new XmsgImHlrGroupMsgRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrGroupMsgRsp);

    /** XmsgImHlrGroupMsgRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrGroupMsgRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrGroupMsgRsp instance
     */
    public static create(properties?: IXmsgImHlrGroupMsgRsp): XmsgImHlrGroupMsgRsp;

    /**
     * Encodes the specified XmsgImHlrGroupMsgRsp message. Does not implicitly {@link XmsgImHlrGroupMsgRsp.verify|verify} messages.
     * @param message XmsgImHlrGroupMsgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrGroupMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrGroupMsgRsp message, length delimited. Does not implicitly {@link XmsgImHlrGroupMsgRsp.verify|verify} messages.
     * @param message XmsgImHlrGroupMsgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrGroupMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrGroupMsgRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrGroupMsgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrGroupMsgRsp;

    /**
     * Decodes a XmsgImHlrGroupMsgRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrGroupMsgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrGroupMsgRsp;

    /**
     * Verifies a XmsgImHlrGroupMsgRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrGroupMsgRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrGroupMsgRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrGroupMsgRsp;

    /**
     * Creates a plain object from a XmsgImHlrGroupMsgRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrGroupMsgRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrGroupMsgRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrGroupMsgRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusQueryReq. */
export interface IXmsgChannelStatusQueryReq {

    /** XmsgChannelStatusQueryReq cgt */
    cgt?: (string[]|null);
}

/** Represents a XmsgChannelStatusQueryReq. */
export class XmsgChannelStatusQueryReq implements IXmsgChannelStatusQueryReq {

    /**
     * Constructs a new XmsgChannelStatusQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusQueryReq);

    /** XmsgChannelStatusQueryReq cgt. */
    public cgt: string[];

    /**
     * Creates a new XmsgChannelStatusQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusQueryReq instance
     */
    public static create(properties?: IXmsgChannelStatusQueryReq): XmsgChannelStatusQueryReq;

    /**
     * Encodes the specified XmsgChannelStatusQueryReq message. Does not implicitly {@link XmsgChannelStatusQueryReq.verify|verify} messages.
     * @param message XmsgChannelStatusQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusQueryReq message, length delimited. Does not implicitly {@link XmsgChannelStatusQueryReq.verify|verify} messages.
     * @param message XmsgChannelStatusQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusQueryReq;

    /**
     * Decodes a XmsgChannelStatusQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusQueryReq;

    /**
     * Verifies a XmsgChannelStatusQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusQueryReq;

    /**
     * Creates a plain object from a XmsgChannelStatusQueryReq message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusQueryRsp. */
export interface IXmsgChannelStatusQueryRsp {

    /** XmsgChannelStatusQueryRsp usrStatus */
    usrStatus?: ({ [k: string]: IXmsgChannelStatusUsrStatus }|null);

    /** XmsgChannelStatusQueryRsp groupStatus */
    groupStatus?: ({ [k: string]: IXmsgChannelStatusGroupStatus }|null);
}

/** Represents a XmsgChannelStatusQueryRsp. */
export class XmsgChannelStatusQueryRsp implements IXmsgChannelStatusQueryRsp {

    /**
     * Constructs a new XmsgChannelStatusQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusQueryRsp);

    /** XmsgChannelStatusQueryRsp usrStatus. */
    public usrStatus: { [k: string]: IXmsgChannelStatusUsrStatus };

    /** XmsgChannelStatusQueryRsp groupStatus. */
    public groupStatus: { [k: string]: IXmsgChannelStatusGroupStatus };

    /**
     * Creates a new XmsgChannelStatusQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusQueryRsp instance
     */
    public static create(properties?: IXmsgChannelStatusQueryRsp): XmsgChannelStatusQueryRsp;

    /**
     * Encodes the specified XmsgChannelStatusQueryRsp message. Does not implicitly {@link XmsgChannelStatusQueryRsp.verify|verify} messages.
     * @param message XmsgChannelStatusQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusQueryRsp message, length delimited. Does not implicitly {@link XmsgChannelStatusQueryRsp.verify|verify} messages.
     * @param message XmsgChannelStatusQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusQueryRsp;

    /**
     * Decodes a XmsgChannelStatusQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusQueryRsp;

    /**
     * Verifies a XmsgChannelStatusQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusQueryRsp;

    /**
     * Creates a plain object from a XmsgChannelStatusQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusSubReq. */
export interface IXmsgChannelStatusSubReq {

    /** XmsgChannelStatusSubReq cgt */
    cgt?: (string[]|null);
}

/** Represents a XmsgChannelStatusSubReq. */
export class XmsgChannelStatusSubReq implements IXmsgChannelStatusSubReq {

    /**
     * Constructs a new XmsgChannelStatusSubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusSubReq);

    /** XmsgChannelStatusSubReq cgt. */
    public cgt: string[];

    /**
     * Creates a new XmsgChannelStatusSubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusSubReq instance
     */
    public static create(properties?: IXmsgChannelStatusSubReq): XmsgChannelStatusSubReq;

    /**
     * Encodes the specified XmsgChannelStatusSubReq message. Does not implicitly {@link XmsgChannelStatusSubReq.verify|verify} messages.
     * @param message XmsgChannelStatusSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusSubReq message, length delimited. Does not implicitly {@link XmsgChannelStatusSubReq.verify|verify} messages.
     * @param message XmsgChannelStatusSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusSubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusSubReq;

    /**
     * Decodes a XmsgChannelStatusSubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusSubReq;

    /**
     * Verifies a XmsgChannelStatusSubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusSubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusSubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusSubReq;

    /**
     * Creates a plain object from a XmsgChannelStatusSubReq message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusSubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusSubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusSubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusSubRsp. */
export interface IXmsgChannelStatusSubRsp {

    /** XmsgChannelStatusSubRsp usrStatus */
    usrStatus?: ({ [k: string]: IXmsgChannelStatusUsrStatus }|null);

    /** XmsgChannelStatusSubRsp groupStatus */
    groupStatus?: ({ [k: string]: IXmsgChannelStatusGroupStatus }|null);
}

/** Represents a XmsgChannelStatusSubRsp. */
export class XmsgChannelStatusSubRsp implements IXmsgChannelStatusSubRsp {

    /**
     * Constructs a new XmsgChannelStatusSubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusSubRsp);

    /** XmsgChannelStatusSubRsp usrStatus. */
    public usrStatus: { [k: string]: IXmsgChannelStatusUsrStatus };

    /** XmsgChannelStatusSubRsp groupStatus. */
    public groupStatus: { [k: string]: IXmsgChannelStatusGroupStatus };

    /**
     * Creates a new XmsgChannelStatusSubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusSubRsp instance
     */
    public static create(properties?: IXmsgChannelStatusSubRsp): XmsgChannelStatusSubRsp;

    /**
     * Encodes the specified XmsgChannelStatusSubRsp message. Does not implicitly {@link XmsgChannelStatusSubRsp.verify|verify} messages.
     * @param message XmsgChannelStatusSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusSubRsp message, length delimited. Does not implicitly {@link XmsgChannelStatusSubRsp.verify|verify} messages.
     * @param message XmsgChannelStatusSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusSubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusSubRsp;

    /**
     * Decodes a XmsgChannelStatusSubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusSubRsp;

    /**
     * Verifies a XmsgChannelStatusSubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusSubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusSubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusSubRsp;

    /**
     * Creates a plain object from a XmsgChannelStatusSubRsp message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusSubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusSubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusSubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusUnSubReq. */
export interface IXmsgChannelStatusUnSubReq {

    /** XmsgChannelStatusUnSubReq cgt */
    cgt?: (string[]|null);
}

/** Represents a XmsgChannelStatusUnSubReq. */
export class XmsgChannelStatusUnSubReq implements IXmsgChannelStatusUnSubReq {

    /**
     * Constructs a new XmsgChannelStatusUnSubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusUnSubReq);

    /** XmsgChannelStatusUnSubReq cgt. */
    public cgt: string[];

    /**
     * Creates a new XmsgChannelStatusUnSubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusUnSubReq instance
     */
    public static create(properties?: IXmsgChannelStatusUnSubReq): XmsgChannelStatusUnSubReq;

    /**
     * Encodes the specified XmsgChannelStatusUnSubReq message. Does not implicitly {@link XmsgChannelStatusUnSubReq.verify|verify} messages.
     * @param message XmsgChannelStatusUnSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusUnSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusUnSubReq message, length delimited. Does not implicitly {@link XmsgChannelStatusUnSubReq.verify|verify} messages.
     * @param message XmsgChannelStatusUnSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusUnSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusUnSubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusUnSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusUnSubReq;

    /**
     * Decodes a XmsgChannelStatusUnSubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusUnSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusUnSubReq;

    /**
     * Verifies a XmsgChannelStatusUnSubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusUnSubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusUnSubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusUnSubReq;

    /**
     * Creates a plain object from a XmsgChannelStatusUnSubReq message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusUnSubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusUnSubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusUnSubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusUnSubRsp. */
export interface IXmsgChannelStatusUnSubRsp {

    /** XmsgChannelStatusUnSubRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgChannelStatusUnSubRsp. */
export class XmsgChannelStatusUnSubRsp implements IXmsgChannelStatusUnSubRsp {

    /**
     * Constructs a new XmsgChannelStatusUnSubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusUnSubRsp);

    /** XmsgChannelStatusUnSubRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgChannelStatusUnSubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusUnSubRsp instance
     */
    public static create(properties?: IXmsgChannelStatusUnSubRsp): XmsgChannelStatusUnSubRsp;

    /**
     * Encodes the specified XmsgChannelStatusUnSubRsp message. Does not implicitly {@link XmsgChannelStatusUnSubRsp.verify|verify} messages.
     * @param message XmsgChannelStatusUnSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusUnSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusUnSubRsp message, length delimited. Does not implicitly {@link XmsgChannelStatusUnSubRsp.verify|verify} messages.
     * @param message XmsgChannelStatusUnSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusUnSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusUnSubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusUnSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusUnSubRsp;

    /**
     * Decodes a XmsgChannelStatusUnSubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusUnSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusUnSubRsp;

    /**
     * Verifies a XmsgChannelStatusUnSubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusUnSubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusUnSubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusUnSubRsp;

    /**
     * Creates a plain object from a XmsgChannelStatusUnSubRsp message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusUnSubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusUnSubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusUnSubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusPubUsrStatusNotice. */
export interface IXmsgChannelStatusPubUsrStatusNotice {

    /** XmsgChannelStatusPubUsrStatusNotice cgt */
    cgt?: (string|null);

    /** XmsgChannelStatusPubUsrStatusNotice plat */
    plat?: (string|null);

    /** XmsgChannelStatusPubUsrStatusNotice did */
    did?: (string|null);

    /** XmsgChannelStatusPubUsrStatusNotice status */
    status?: (string|null);
}

/** Represents a XmsgChannelStatusPubUsrStatusNotice. */
export class XmsgChannelStatusPubUsrStatusNotice implements IXmsgChannelStatusPubUsrStatusNotice {

    /**
     * Constructs a new XmsgChannelStatusPubUsrStatusNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusPubUsrStatusNotice);

    /** XmsgChannelStatusPubUsrStatusNotice cgt. */
    public cgt: string;

    /** XmsgChannelStatusPubUsrStatusNotice plat. */
    public plat: string;

    /** XmsgChannelStatusPubUsrStatusNotice did. */
    public did: string;

    /** XmsgChannelStatusPubUsrStatusNotice status. */
    public status: string;

    /**
     * Creates a new XmsgChannelStatusPubUsrStatusNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusPubUsrStatusNotice instance
     */
    public static create(properties?: IXmsgChannelStatusPubUsrStatusNotice): XmsgChannelStatusPubUsrStatusNotice;

    /**
     * Encodes the specified XmsgChannelStatusPubUsrStatusNotice message. Does not implicitly {@link XmsgChannelStatusPubUsrStatusNotice.verify|verify} messages.
     * @param message XmsgChannelStatusPubUsrStatusNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusPubUsrStatusNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusPubUsrStatusNotice message, length delimited. Does not implicitly {@link XmsgChannelStatusPubUsrStatusNotice.verify|verify} messages.
     * @param message XmsgChannelStatusPubUsrStatusNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusPubUsrStatusNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusPubUsrStatusNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusPubUsrStatusNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusPubUsrStatusNotice;

    /**
     * Decodes a XmsgChannelStatusPubUsrStatusNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusPubUsrStatusNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusPubUsrStatusNotice;

    /**
     * Verifies a XmsgChannelStatusPubUsrStatusNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusPubUsrStatusNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusPubUsrStatusNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusPubUsrStatusNotice;

    /**
     * Creates a plain object from a XmsgChannelStatusPubUsrStatusNotice message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusPubUsrStatusNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusPubUsrStatusNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusPubUsrStatusNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusPubGroupStatusNotice. */
export interface IXmsgChannelStatusPubGroupStatusNotice {

    /** XmsgChannelStatusPubGroupStatusNotice cgt */
    cgt?: (string|null);

    /** XmsgChannelStatusPubGroupStatusNotice status */
    status?: (string|null);
}

/** Represents a XmsgChannelStatusPubGroupStatusNotice. */
export class XmsgChannelStatusPubGroupStatusNotice implements IXmsgChannelStatusPubGroupStatusNotice {

    /**
     * Constructs a new XmsgChannelStatusPubGroupStatusNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusPubGroupStatusNotice);

    /** XmsgChannelStatusPubGroupStatusNotice cgt. */
    public cgt: string;

    /** XmsgChannelStatusPubGroupStatusNotice status. */
    public status: string;

    /**
     * Creates a new XmsgChannelStatusPubGroupStatusNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusPubGroupStatusNotice instance
     */
    public static create(properties?: IXmsgChannelStatusPubGroupStatusNotice): XmsgChannelStatusPubGroupStatusNotice;

    /**
     * Encodes the specified XmsgChannelStatusPubGroupStatusNotice message. Does not implicitly {@link XmsgChannelStatusPubGroupStatusNotice.verify|verify} messages.
     * @param message XmsgChannelStatusPubGroupStatusNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusPubGroupStatusNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusPubGroupStatusNotice message, length delimited. Does not implicitly {@link XmsgChannelStatusPubGroupStatusNotice.verify|verify} messages.
     * @param message XmsgChannelStatusPubGroupStatusNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusPubGroupStatusNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusPubGroupStatusNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusPubGroupStatusNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusPubGroupStatusNotice;

    /**
     * Decodes a XmsgChannelStatusPubGroupStatusNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusPubGroupStatusNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusPubGroupStatusNotice;

    /**
     * Verifies a XmsgChannelStatusPubGroupStatusNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusPubGroupStatusNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusPubGroupStatusNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusPubGroupStatusNotice;

    /**
     * Creates a plain object from a XmsgChannelStatusPubGroupStatusNotice message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusPubGroupStatusNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusPubGroupStatusNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusPubGroupStatusNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgChannelStatusUsrStatus. */
export interface IXmsgChannelStatusUsrStatus {

    /** XmsgChannelStatusUsrStatus client */
    client?: (XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus[]|null);
}

/** Represents a XmsgChannelStatusUsrStatus. */
export class XmsgChannelStatusUsrStatus implements IXmsgChannelStatusUsrStatus {

    /**
     * Constructs a new XmsgChannelStatusUsrStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusUsrStatus);

    /** XmsgChannelStatusUsrStatus client. */
    public client: XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus[];

    /**
     * Creates a new XmsgChannelStatusUsrStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusUsrStatus instance
     */
    public static create(properties?: IXmsgChannelStatusUsrStatus): XmsgChannelStatusUsrStatus;

    /**
     * Encodes the specified XmsgChannelStatusUsrStatus message. Does not implicitly {@link XmsgChannelStatusUsrStatus.verify|verify} messages.
     * @param message XmsgChannelStatusUsrStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusUsrStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusUsrStatus message, length delimited. Does not implicitly {@link XmsgChannelStatusUsrStatus.verify|verify} messages.
     * @param message XmsgChannelStatusUsrStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusUsrStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusUsrStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusUsrStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusUsrStatus;

    /**
     * Decodes a XmsgChannelStatusUsrStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusUsrStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusUsrStatus;

    /**
     * Verifies a XmsgChannelStatusUsrStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusUsrStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusUsrStatus
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusUsrStatus;

    /**
     * Creates a plain object from a XmsgChannelStatusUsrStatus message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusUsrStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusUsrStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusUsrStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace XmsgChannelStatusUsrStatus {

    /** Properties of a XmsgChannelStatusUsrClientStatus. */
    interface IXmsgChannelStatusUsrClientStatus {

        /** XmsgChannelStatusUsrClientStatus plat */
        plat?: (string|null);

        /** XmsgChannelStatusUsrClientStatus did */
        did?: (string|null);

        /** XmsgChannelStatusUsrClientStatus status */
        status?: (string|null);
    }

    /** Represents a XmsgChannelStatusUsrClientStatus. */
    class XmsgChannelStatusUsrClientStatus implements IXmsgChannelStatusUsrClientStatus {

        /**
         * Constructs a new XmsgChannelStatusUsrClientStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus);

        /** XmsgChannelStatusUsrClientStatus plat. */
        public plat: string;

        /** XmsgChannelStatusUsrClientStatus did. */
        public did: string;

        /** XmsgChannelStatusUsrClientStatus status. */
        public status: string;

        /**
         * Creates a new XmsgChannelStatusUsrClientStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgChannelStatusUsrClientStatus instance
         */
        public static create(properties?: XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus): XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus;

        /**
         * Encodes the specified XmsgChannelStatusUsrClientStatus message. Does not implicitly {@link XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus.verify|verify} messages.
         * @param message XmsgChannelStatusUsrClientStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgChannelStatusUsrClientStatus message, length delimited. Does not implicitly {@link XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus.verify|verify} messages.
         * @param message XmsgChannelStatusUsrClientStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgChannelStatusUsrStatus.IXmsgChannelStatusUsrClientStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgChannelStatusUsrClientStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgChannelStatusUsrClientStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus;

        /**
         * Decodes a XmsgChannelStatusUsrClientStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgChannelStatusUsrClientStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus;

        /**
         * Verifies a XmsgChannelStatusUsrClientStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgChannelStatusUsrClientStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgChannelStatusUsrClientStatus
         */
        public static fromObject(object: { [k: string]: any }): XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus;

        /**
         * Creates a plain object from a XmsgChannelStatusUsrClientStatus message. Also converts values to other types if specified.
         * @param message XmsgChannelStatusUsrClientStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgChannelStatusUsrStatus.XmsgChannelStatusUsrClientStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgChannelStatusUsrClientStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a XmsgChannelStatusGroupStatus. */
export interface IXmsgChannelStatusGroupStatus {

    /** XmsgChannelStatusGroupStatus status */
    status?: (string|null);
}

/** Represents a XmsgChannelStatusGroupStatus. */
export class XmsgChannelStatusGroupStatus implements IXmsgChannelStatusGroupStatus {

    /**
     * Constructs a new XmsgChannelStatusGroupStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgChannelStatusGroupStatus);

    /** XmsgChannelStatusGroupStatus status. */
    public status: string;

    /**
     * Creates a new XmsgChannelStatusGroupStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgChannelStatusGroupStatus instance
     */
    public static create(properties?: IXmsgChannelStatusGroupStatus): XmsgChannelStatusGroupStatus;

    /**
     * Encodes the specified XmsgChannelStatusGroupStatus message. Does not implicitly {@link XmsgChannelStatusGroupStatus.verify|verify} messages.
     * @param message XmsgChannelStatusGroupStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgChannelStatusGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgChannelStatusGroupStatus message, length delimited. Does not implicitly {@link XmsgChannelStatusGroupStatus.verify|verify} messages.
     * @param message XmsgChannelStatusGroupStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgChannelStatusGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgChannelStatusGroupStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgChannelStatusGroupStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgChannelStatusGroupStatus;

    /**
     * Decodes a XmsgChannelStatusGroupStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgChannelStatusGroupStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgChannelStatusGroupStatus;

    /**
     * Verifies a XmsgChannelStatusGroupStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgChannelStatusGroupStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgChannelStatusGroupStatus
     */
    public static fromObject(object: { [k: string]: any }): XmsgChannelStatusGroupStatus;

    /**
     * Creates a plain object from a XmsgChannelStatusGroupStatus message. Also converts values to other types if specified.
     * @param message XmsgChannelStatusGroupStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgChannelStatusGroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgChannelStatusGroupStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberAddReq. */
export interface IXmsgImGroupMemberAddReq {

    /** XmsgImGroupMemberAddReq cgt */
    cgt?: (string|null);

    /** XmsgImGroupMemberAddReq member */
    member?: (IXmsgImGroupAddMember[]|null);
}

/** Represents a XmsgImGroupMemberAddReq. */
export class XmsgImGroupMemberAddReq implements IXmsgImGroupMemberAddReq {

    /**
     * Constructs a new XmsgImGroupMemberAddReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberAddReq);

    /** XmsgImGroupMemberAddReq cgt. */
    public cgt: string;

    /** XmsgImGroupMemberAddReq member. */
    public member: IXmsgImGroupAddMember[];

    /**
     * Creates a new XmsgImGroupMemberAddReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberAddReq instance
     */
    public static create(properties?: IXmsgImGroupMemberAddReq): XmsgImGroupMemberAddReq;

    /**
     * Encodes the specified XmsgImGroupMemberAddReq message. Does not implicitly {@link XmsgImGroupMemberAddReq.verify|verify} messages.
     * @param message XmsgImGroupMemberAddReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberAddReq message, length delimited. Does not implicitly {@link XmsgImGroupMemberAddReq.verify|verify} messages.
     * @param message XmsgImGroupMemberAddReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberAddReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberAddReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberAddReq;

    /**
     * Decodes a XmsgImGroupMemberAddReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberAddReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberAddReq;

    /**
     * Verifies a XmsgImGroupMemberAddReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberAddReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberAddReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberAddReq;

    /**
     * Creates a plain object from a XmsgImGroupMemberAddReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberAddReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberAddReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberAddReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberAddRsp. */
export interface IXmsgImGroupMemberAddRsp {

    /** XmsgImGroupMemberAddRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupMemberAddRsp. */
export class XmsgImGroupMemberAddRsp implements IXmsgImGroupMemberAddRsp {

    /**
     * Constructs a new XmsgImGroupMemberAddRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberAddRsp);

    /** XmsgImGroupMemberAddRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMemberAddRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberAddRsp instance
     */
    public static create(properties?: IXmsgImGroupMemberAddRsp): XmsgImGroupMemberAddRsp;

    /**
     * Encodes the specified XmsgImGroupMemberAddRsp message. Does not implicitly {@link XmsgImGroupMemberAddRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberAddRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberAddRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberAddRsp message, length delimited. Does not implicitly {@link XmsgImGroupMemberAddRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberAddRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberAddRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberAddRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberAddRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberAddRsp;

    /**
     * Decodes a XmsgImGroupMemberAddRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberAddRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberAddRsp;

    /**
     * Verifies a XmsgImGroupMemberAddRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberAddRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberAddRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberAddRsp;

    /**
     * Creates a plain object from a XmsgImGroupMemberAddRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberAddRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberAddRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberAddRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberQueryReq. */
export interface IXmsgImGroupMemberQueryReq {

    /** XmsgImGroupMemberQueryReq gcgt */
    gcgt?: (string|null);

    /** XmsgImGroupMemberQueryReq mcgt */
    mcgt?: (string[]|null);
}

/** Represents a XmsgImGroupMemberQueryReq. */
export class XmsgImGroupMemberQueryReq implements IXmsgImGroupMemberQueryReq {

    /**
     * Constructs a new XmsgImGroupMemberQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberQueryReq);

    /** XmsgImGroupMemberQueryReq gcgt. */
    public gcgt: string;

    /** XmsgImGroupMemberQueryReq mcgt. */
    public mcgt: string[];

    /**
     * Creates a new XmsgImGroupMemberQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberQueryReq instance
     */
    public static create(properties?: IXmsgImGroupMemberQueryReq): XmsgImGroupMemberQueryReq;

    /**
     * Encodes the specified XmsgImGroupMemberQueryReq message. Does not implicitly {@link XmsgImGroupMemberQueryReq.verify|verify} messages.
     * @param message XmsgImGroupMemberQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberQueryReq message, length delimited. Does not implicitly {@link XmsgImGroupMemberQueryReq.verify|verify} messages.
     * @param message XmsgImGroupMemberQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberQueryReq;

    /**
     * Decodes a XmsgImGroupMemberQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberQueryReq;

    /**
     * Verifies a XmsgImGroupMemberQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberQueryReq;

    /**
     * Creates a plain object from a XmsgImGroupMemberQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberQueryRsp. */
export interface IXmsgImGroupMemberQueryRsp {

    /** XmsgImGroupMemberQueryRsp member */
    member?: (IXmsgImGroupInfoMember[]|null);
}

/** Represents a XmsgImGroupMemberQueryRsp. */
export class XmsgImGroupMemberQueryRsp implements IXmsgImGroupMemberQueryRsp {

    /**
     * Constructs a new XmsgImGroupMemberQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberQueryRsp);

    /** XmsgImGroupMemberQueryRsp member. */
    public member: IXmsgImGroupInfoMember[];

    /**
     * Creates a new XmsgImGroupMemberQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberQueryRsp instance
     */
    public static create(properties?: IXmsgImGroupMemberQueryRsp): XmsgImGroupMemberQueryRsp;

    /**
     * Encodes the specified XmsgImGroupMemberQueryRsp message. Does not implicitly {@link XmsgImGroupMemberQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberQueryRsp message, length delimited. Does not implicitly {@link XmsgImGroupMemberQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberQueryRsp;

    /**
     * Decodes a XmsgImGroupMemberQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberQueryRsp;

    /**
     * Verifies a XmsgImGroupMemberQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberQueryRsp;

    /**
     * Creates a plain object from a XmsgImGroupMemberQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberUpdateReq. */
export interface IXmsgImGroupMemberUpdateReq {

    /** XmsgImGroupMemberUpdateReq gcgt */
    gcgt?: (string|null);

    /** XmsgImGroupMemberUpdateReq mcgt */
    mcgt?: (string|null);

    /** XmsgImGroupMemberUpdateReq upsert */
    upsert?: ({ [k: string]: string }|null);

    /** XmsgImGroupMemberUpdateReq remove */
    remove?: (string[]|null);
}

/** Represents a XmsgImGroupMemberUpdateReq. */
export class XmsgImGroupMemberUpdateReq implements IXmsgImGroupMemberUpdateReq {

    /**
     * Constructs a new XmsgImGroupMemberUpdateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberUpdateReq);

    /** XmsgImGroupMemberUpdateReq gcgt. */
    public gcgt: string;

    /** XmsgImGroupMemberUpdateReq mcgt. */
    public mcgt: string;

    /** XmsgImGroupMemberUpdateReq upsert. */
    public upsert: { [k: string]: string };

    /** XmsgImGroupMemberUpdateReq remove. */
    public remove: string[];

    /**
     * Creates a new XmsgImGroupMemberUpdateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberUpdateReq instance
     */
    public static create(properties?: IXmsgImGroupMemberUpdateReq): XmsgImGroupMemberUpdateReq;

    /**
     * Encodes the specified XmsgImGroupMemberUpdateReq message. Does not implicitly {@link XmsgImGroupMemberUpdateReq.verify|verify} messages.
     * @param message XmsgImGroupMemberUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberUpdateReq message, length delimited. Does not implicitly {@link XmsgImGroupMemberUpdateReq.verify|verify} messages.
     * @param message XmsgImGroupMemberUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberUpdateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberUpdateReq;

    /**
     * Decodes a XmsgImGroupMemberUpdateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberUpdateReq;

    /**
     * Verifies a XmsgImGroupMemberUpdateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberUpdateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberUpdateReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberUpdateReq;

    /**
     * Creates a plain object from a XmsgImGroupMemberUpdateReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberUpdateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberUpdateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberUpdateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberUpdateRsp. */
export interface IXmsgImGroupMemberUpdateRsp {

    /** XmsgImGroupMemberUpdateRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupMemberUpdateRsp. */
export class XmsgImGroupMemberUpdateRsp implements IXmsgImGroupMemberUpdateRsp {

    /**
     * Constructs a new XmsgImGroupMemberUpdateRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberUpdateRsp);

    /** XmsgImGroupMemberUpdateRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMemberUpdateRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberUpdateRsp instance
     */
    public static create(properties?: IXmsgImGroupMemberUpdateRsp): XmsgImGroupMemberUpdateRsp;

    /**
     * Encodes the specified XmsgImGroupMemberUpdateRsp message. Does not implicitly {@link XmsgImGroupMemberUpdateRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberUpdateRsp message, length delimited. Does not implicitly {@link XmsgImGroupMemberUpdateRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberUpdateRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberUpdateRsp;

    /**
     * Decodes a XmsgImGroupMemberUpdateRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberUpdateRsp;

    /**
     * Verifies a XmsgImGroupMemberUpdateRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberUpdateRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberUpdateRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberUpdateRsp;

    /**
     * Creates a plain object from a XmsgImGroupMemberUpdateRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberUpdateRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberUpdateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberUpdateRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberDeleteReq. */
export interface IXmsgImGroupMemberDeleteReq {

    /** XmsgImGroupMemberDeleteReq gcgt */
    gcgt?: (string|null);

    /** XmsgImGroupMemberDeleteReq mcgt */
    mcgt?: (string[]|null);
}

/** Represents a XmsgImGroupMemberDeleteReq. */
export class XmsgImGroupMemberDeleteReq implements IXmsgImGroupMemberDeleteReq {

    /**
     * Constructs a new XmsgImGroupMemberDeleteReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberDeleteReq);

    /** XmsgImGroupMemberDeleteReq gcgt. */
    public gcgt: string;

    /** XmsgImGroupMemberDeleteReq mcgt. */
    public mcgt: string[];

    /**
     * Creates a new XmsgImGroupMemberDeleteReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberDeleteReq instance
     */
    public static create(properties?: IXmsgImGroupMemberDeleteReq): XmsgImGroupMemberDeleteReq;

    /**
     * Encodes the specified XmsgImGroupMemberDeleteReq message. Does not implicitly {@link XmsgImGroupMemberDeleteReq.verify|verify} messages.
     * @param message XmsgImGroupMemberDeleteReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberDeleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberDeleteReq message, length delimited. Does not implicitly {@link XmsgImGroupMemberDeleteReq.verify|verify} messages.
     * @param message XmsgImGroupMemberDeleteReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberDeleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberDeleteReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberDeleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberDeleteReq;

    /**
     * Decodes a XmsgImGroupMemberDeleteReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberDeleteReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberDeleteReq;

    /**
     * Verifies a XmsgImGroupMemberDeleteReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberDeleteReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberDeleteReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberDeleteReq;

    /**
     * Creates a plain object from a XmsgImGroupMemberDeleteReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberDeleteReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberDeleteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberDeleteReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImGroupMemberDeleteRsp. */
export interface IXmsgImGroupMemberDeleteRsp {

    /** XmsgImGroupMemberDeleteRsp ext */
    ext?: ({ [k: string]: string }|null);
}

/** Represents a XmsgImGroupMemberDeleteRsp. */
export class XmsgImGroupMemberDeleteRsp implements IXmsgImGroupMemberDeleteRsp {

    /**
     * Constructs a new XmsgImGroupMemberDeleteRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMemberDeleteRsp);

    /** XmsgImGroupMemberDeleteRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMemberDeleteRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMemberDeleteRsp instance
     */
    public static create(properties?: IXmsgImGroupMemberDeleteRsp): XmsgImGroupMemberDeleteRsp;

    /**
     * Encodes the specified XmsgImGroupMemberDeleteRsp message. Does not implicitly {@link XmsgImGroupMemberDeleteRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberDeleteRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMemberDeleteRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMemberDeleteRsp message, length delimited. Does not implicitly {@link XmsgImGroupMemberDeleteRsp.verify|verify} messages.
     * @param message XmsgImGroupMemberDeleteRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMemberDeleteRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMemberDeleteRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMemberDeleteRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMemberDeleteRsp;

    /**
     * Decodes a XmsgImGroupMemberDeleteRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMemberDeleteRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMemberDeleteRsp;

    /**
     * Verifies a XmsgImGroupMemberDeleteRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMemberDeleteRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMemberDeleteRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMemberDeleteRsp;

    /**
     * Creates a plain object from a XmsgImGroupMemberDeleteRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMemberDeleteRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMemberDeleteRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMemberDeleteRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImSdkEventAdapter. */
export interface IXmsgImSdkEventAdapter {

    /** XmsgImSdkEventAdapter apiId */
    apiId?: (number|null);

    /** XmsgImSdkEventAdapter evnType */
    evnType?: (XmsgImSdkEventType|null);

    /** XmsgImSdkEventAdapter netNotice */
    netNotice?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice|null);

    /** XmsgImSdkEventAdapter netReq */
    netReq?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq|null);

    /** XmsgImSdkEventAdapter netRsp */
    netRsp?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp|null);

    /** XmsgImSdkEventAdapter dbRsp */
    dbRsp?: (XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp|null);

    /** XmsgImSdkEventAdapter cxxLog */
    cxxLog?: (XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog|null);
}

/** Represents a XmsgImSdkEventAdapter. */
export class XmsgImSdkEventAdapter implements IXmsgImSdkEventAdapter {

    /**
     * Constructs a new XmsgImSdkEventAdapter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImSdkEventAdapter);

    /** XmsgImSdkEventAdapter apiId. */
    public apiId: number;

    /** XmsgImSdkEventAdapter evnType. */
    public evnType: XmsgImSdkEventType;

    /** XmsgImSdkEventAdapter netNotice. */
    public netNotice?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice|null);

    /** XmsgImSdkEventAdapter netReq. */
    public netReq?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq|null);

    /** XmsgImSdkEventAdapter netRsp. */
    public netRsp?: (XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp|null);

    /** XmsgImSdkEventAdapter dbRsp. */
    public dbRsp?: (XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp|null);

    /** XmsgImSdkEventAdapter cxxLog. */
    public cxxLog?: (XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog|null);

    /**
     * Creates a new XmsgImSdkEventAdapter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImSdkEventAdapter instance
     */
    public static create(properties?: IXmsgImSdkEventAdapter): XmsgImSdkEventAdapter;

    /**
     * Encodes the specified XmsgImSdkEventAdapter message. Does not implicitly {@link XmsgImSdkEventAdapter.verify|verify} messages.
     * @param message XmsgImSdkEventAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImSdkEventAdapter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImSdkEventAdapter message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.verify|verify} messages.
     * @param message XmsgImSdkEventAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImSdkEventAdapter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImSdkEventAdapter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImSdkEventAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter;

    /**
     * Decodes a XmsgImSdkEventAdapter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImSdkEventAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter;

    /**
     * Verifies a XmsgImSdkEventAdapter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImSdkEventAdapter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImSdkEventAdapter
     */
    public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter;

    /**
     * Creates a plain object from a XmsgImSdkEventAdapter message. Also converts values to other types if specified.
     * @param message XmsgImSdkEventAdapter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImSdkEventAdapter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImSdkEventAdapter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace XmsgImSdkEventAdapter {

    /** Properties of a XmsgImSdkEventNetNotice. */
    interface IXmsgImSdkEventNetNotice {

        /** XmsgImSdkEventNetNotice msg */
        msg?: (string|null);

        /** XmsgImSdkEventNetNotice dat */
        dat?: (Uint8Array|null);
    }

    /** Represents a XmsgImSdkEventNetNotice. */
    class XmsgImSdkEventNetNotice implements IXmsgImSdkEventNetNotice {

        /**
         * Constructs a new XmsgImSdkEventNetNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice);

        /** XmsgImSdkEventNetNotice msg. */
        public msg: string;

        /** XmsgImSdkEventNetNotice dat. */
        public dat: Uint8Array;

        /**
         * Creates a new XmsgImSdkEventNetNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImSdkEventNetNotice instance
         */
        public static create(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice): XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice;

        /**
         * Encodes the specified XmsgImSdkEventNetNotice message. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice.verify|verify} messages.
         * @param message XmsgImSdkEventNetNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImSdkEventNetNotice message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice.verify|verify} messages.
         * @param message XmsgImSdkEventNetNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImSdkEventNetNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImSdkEventNetNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice;

        /**
         * Decodes a XmsgImSdkEventNetNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImSdkEventNetNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice;

        /**
         * Verifies a XmsgImSdkEventNetNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImSdkEventNetNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImSdkEventNetNotice
         */
        public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice;

        /**
         * Creates a plain object from a XmsgImSdkEventNetNotice message. Also converts values to other types if specified.
         * @param message XmsgImSdkEventNetNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImSdkEventAdapter.XmsgImSdkEventNetNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImSdkEventNetNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a XmsgImSdkEventNetReq. */
    interface IXmsgImSdkEventNetReq {

        /** XmsgImSdkEventNetReq tid */
        tid?: (number|null);

        /** XmsgImSdkEventNetReq msg */
        msg?: (string|null);

        /** XmsgImSdkEventNetReq dat */
        dat?: (Uint8Array|null);
    }

    /** Represents a XmsgImSdkEventNetReq. */
    class XmsgImSdkEventNetReq implements IXmsgImSdkEventNetReq {

        /**
         * Constructs a new XmsgImSdkEventNetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq);

        /** XmsgImSdkEventNetReq tid. */
        public tid: number;

        /** XmsgImSdkEventNetReq msg. */
        public msg: string;

        /** XmsgImSdkEventNetReq dat. */
        public dat: Uint8Array;

        /**
         * Creates a new XmsgImSdkEventNetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImSdkEventNetReq instance
         */
        public static create(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq): XmsgImSdkEventAdapter.XmsgImSdkEventNetReq;

        /**
         * Encodes the specified XmsgImSdkEventNetReq message. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetReq.verify|verify} messages.
         * @param message XmsgImSdkEventNetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImSdkEventNetReq message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetReq.verify|verify} messages.
         * @param message XmsgImSdkEventNetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImSdkEventNetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImSdkEventNetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter.XmsgImSdkEventNetReq;

        /**
         * Decodes a XmsgImSdkEventNetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImSdkEventNetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter.XmsgImSdkEventNetReq;

        /**
         * Verifies a XmsgImSdkEventNetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImSdkEventNetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImSdkEventNetReq
         */
        public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter.XmsgImSdkEventNetReq;

        /**
         * Creates a plain object from a XmsgImSdkEventNetReq message. Also converts values to other types if specified.
         * @param message XmsgImSdkEventNetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImSdkEventAdapter.XmsgImSdkEventNetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImSdkEventNetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a XmsgImSdkEventNetRsp. */
    interface IXmsgImSdkEventNetRsp {

        /** XmsgImSdkEventNetRsp tid */
        tid?: (number|null);

        /** XmsgImSdkEventNetRsp ret */
        ret?: (number|null);

        /** XmsgImSdkEventNetRsp desc */
        desc?: (string|null);

        /** XmsgImSdkEventNetRsp msg */
        msg?: (string|null);

        /** XmsgImSdkEventNetRsp dat */
        dat?: (Uint8Array|null);
    }

    /** Represents a XmsgImSdkEventNetRsp. */
    class XmsgImSdkEventNetRsp implements IXmsgImSdkEventNetRsp {

        /**
         * Constructs a new XmsgImSdkEventNetRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp);

        /** XmsgImSdkEventNetRsp tid. */
        public tid: number;

        /** XmsgImSdkEventNetRsp ret. */
        public ret: number;

        /** XmsgImSdkEventNetRsp desc. */
        public desc: string;

        /** XmsgImSdkEventNetRsp msg. */
        public msg: string;

        /** XmsgImSdkEventNetRsp dat. */
        public dat: Uint8Array;

        /**
         * Creates a new XmsgImSdkEventNetRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImSdkEventNetRsp instance
         */
        public static create(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp): XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp;

        /**
         * Encodes the specified XmsgImSdkEventNetRsp message. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp.verify|verify} messages.
         * @param message XmsgImSdkEventNetRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImSdkEventNetRsp message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp.verify|verify} messages.
         * @param message XmsgImSdkEventNetRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImSdkEventAdapter.IXmsgImSdkEventNetRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImSdkEventNetRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImSdkEventNetRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp;

        /**
         * Decodes a XmsgImSdkEventNetRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImSdkEventNetRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp;

        /**
         * Verifies a XmsgImSdkEventNetRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImSdkEventNetRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImSdkEventNetRsp
         */
        public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp;

        /**
         * Creates a plain object from a XmsgImSdkEventNetRsp message. Also converts values to other types if specified.
         * @param message XmsgImSdkEventNetRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImSdkEventAdapter.XmsgImSdkEventNetRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImSdkEventNetRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a XmsgImSdkEventDbRsp. */
    interface IXmsgImSdkEventDbRsp {

        /** XmsgImSdkEventDbRsp tid */
        tid?: (number|null);

        /** XmsgImSdkEventDbRsp ret */
        ret?: (number|null);

        /** XmsgImSdkEventDbRsp desc */
        desc?: (string|null);

        /** XmsgImSdkEventDbRsp dat */
        dat?: (IXmsgImClientDbCrudRsp|null);
    }

    /** Represents a XmsgImSdkEventDbRsp. */
    class XmsgImSdkEventDbRsp implements IXmsgImSdkEventDbRsp {

        /**
         * Constructs a new XmsgImSdkEventDbRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp);

        /** XmsgImSdkEventDbRsp tid. */
        public tid: number;

        /** XmsgImSdkEventDbRsp ret. */
        public ret: number;

        /** XmsgImSdkEventDbRsp desc. */
        public desc: string;

        /** XmsgImSdkEventDbRsp dat. */
        public dat?: (IXmsgImClientDbCrudRsp|null);

        /**
         * Creates a new XmsgImSdkEventDbRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImSdkEventDbRsp instance
         */
        public static create(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp): XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp;

        /**
         * Encodes the specified XmsgImSdkEventDbRsp message. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp.verify|verify} messages.
         * @param message XmsgImSdkEventDbRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImSdkEventDbRsp message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp.verify|verify} messages.
         * @param message XmsgImSdkEventDbRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImSdkEventAdapter.IXmsgImSdkEventDbRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImSdkEventDbRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImSdkEventDbRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp;

        /**
         * Decodes a XmsgImSdkEventDbRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImSdkEventDbRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp;

        /**
         * Verifies a XmsgImSdkEventDbRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImSdkEventDbRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImSdkEventDbRsp
         */
        public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp;

        /**
         * Creates a plain object from a XmsgImSdkEventDbRsp message. Also converts values to other types if specified.
         * @param message XmsgImSdkEventDbRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImSdkEventAdapter.XmsgImSdkEventDbRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImSdkEventDbRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a XmsgImSdkEventCxxLog. */
    interface IXmsgImSdkEventCxxLog {

        /** XmsgImSdkEventCxxLog lev */
        lev?: (number|null);

        /** XmsgImSdkEventCxxLog log */
        log?: (string|null);
    }

    /** Represents a XmsgImSdkEventCxxLog. */
    class XmsgImSdkEventCxxLog implements IXmsgImSdkEventCxxLog {

        /**
         * Constructs a new XmsgImSdkEventCxxLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog);

        /** XmsgImSdkEventCxxLog lev. */
        public lev: number;

        /** XmsgImSdkEventCxxLog log. */
        public log: string;

        /**
         * Creates a new XmsgImSdkEventCxxLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XmsgImSdkEventCxxLog instance
         */
        public static create(properties?: XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog): XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;

        /**
         * Encodes the specified XmsgImSdkEventCxxLog message. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog.verify|verify} messages.
         * @param message XmsgImSdkEventCxxLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XmsgImSdkEventCxxLog message, length delimited. Does not implicitly {@link XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog.verify|verify} messages.
         * @param message XmsgImSdkEventCxxLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: XmsgImSdkEventAdapter.IXmsgImSdkEventCxxLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XmsgImSdkEventCxxLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XmsgImSdkEventCxxLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;

        /**
         * Decodes a XmsgImSdkEventCxxLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XmsgImSdkEventCxxLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;

        /**
         * Verifies a XmsgImSdkEventCxxLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XmsgImSdkEventCxxLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XmsgImSdkEventCxxLog
         */
        public static fromObject(object: { [k: string]: any }): XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog;

        /**
         * Creates a plain object from a XmsgImSdkEventCxxLog message. Also converts values to other types if specified.
         * @param message XmsgImSdkEventCxxLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: XmsgImSdkEventAdapter.XmsgImSdkEventCxxLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XmsgImSdkEventCxxLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a XmsgImSdkEventXmsgImAuth. */
export interface IXmsgImSdkEventXmsgImAuth {

    /** XmsgImSdkEventXmsgImAuth evn */
    evn?: (string|null);

    /** XmsgImSdkEventXmsgImAuth times */
    times?: (number|null);

    /** XmsgImSdkEventXmsgImAuth addr */
    addr?: (string|null);
}

/** Represents a XmsgImSdkEventXmsgImAuth. */
export class XmsgImSdkEventXmsgImAuth implements IXmsgImSdkEventXmsgImAuth {

    /**
     * Constructs a new XmsgImSdkEventXmsgImAuth.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImSdkEventXmsgImAuth);

    /** XmsgImSdkEventXmsgImAuth evn. */
    public evn: string;

    /** XmsgImSdkEventXmsgImAuth times. */
    public times: number;

    /** XmsgImSdkEventXmsgImAuth addr. */
    public addr: string;

    /**
     * Creates a new XmsgImSdkEventXmsgImAuth instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImSdkEventXmsgImAuth instance
     */
    public static create(properties?: IXmsgImSdkEventXmsgImAuth): XmsgImSdkEventXmsgImAuth;

    /**
     * Encodes the specified XmsgImSdkEventXmsgImAuth message. Does not implicitly {@link XmsgImSdkEventXmsgImAuth.verify|verify} messages.
     * @param message XmsgImSdkEventXmsgImAuth message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImSdkEventXmsgImAuth, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImSdkEventXmsgImAuth message, length delimited. Does not implicitly {@link XmsgImSdkEventXmsgImAuth.verify|verify} messages.
     * @param message XmsgImSdkEventXmsgImAuth message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImSdkEventXmsgImAuth, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImSdkEventXmsgImAuth message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImSdkEventXmsgImAuth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventXmsgImAuth;

    /**
     * Decodes a XmsgImSdkEventXmsgImAuth message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImSdkEventXmsgImAuth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventXmsgImAuth;

    /**
     * Verifies a XmsgImSdkEventXmsgImAuth message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImSdkEventXmsgImAuth message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImSdkEventXmsgImAuth
     */
    public static fromObject(object: { [k: string]: any }): XmsgImSdkEventXmsgImAuth;

    /**
     * Creates a plain object from a XmsgImSdkEventXmsgImAuth message. Also converts values to other types if specified.
     * @param message XmsgImSdkEventXmsgImAuth
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImSdkEventXmsgImAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImSdkEventXmsgImAuth to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a XmsgImSdkEventXmsgAp. */
export interface IXmsgImSdkEventXmsgAp {

    /** XmsgImSdkEventXmsgAp evn */
    evn?: (string|null);

    /** XmsgImSdkEventXmsgAp times */
    times?: (number|null);

    /** XmsgImSdkEventXmsgAp addr */
    addr?: (string|null);
}

/** Represents a XmsgImSdkEventXmsgAp. */
export class XmsgImSdkEventXmsgAp implements IXmsgImSdkEventXmsgAp {

    /**
     * Constructs a new XmsgImSdkEventXmsgAp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImSdkEventXmsgAp);

    /** XmsgImSdkEventXmsgAp evn. */
    public evn: string;

    /** XmsgImSdkEventXmsgAp times. */
    public times: number;

    /** XmsgImSdkEventXmsgAp addr. */
    public addr: string;

    /**
     * Creates a new XmsgImSdkEventXmsgAp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImSdkEventXmsgAp instance
     */
    public static create(properties?: IXmsgImSdkEventXmsgAp): XmsgImSdkEventXmsgAp;

    /**
     * Encodes the specified XmsgImSdkEventXmsgAp message. Does not implicitly {@link XmsgImSdkEventXmsgAp.verify|verify} messages.
     * @param message XmsgImSdkEventXmsgAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImSdkEventXmsgAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImSdkEventXmsgAp message, length delimited. Does not implicitly {@link XmsgImSdkEventXmsgAp.verify|verify} messages.
     * @param message XmsgImSdkEventXmsgAp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImSdkEventXmsgAp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImSdkEventXmsgAp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImSdkEventXmsgAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImSdkEventXmsgAp;

    /**
     * Decodes a XmsgImSdkEventXmsgAp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImSdkEventXmsgAp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImSdkEventXmsgAp;

    /**
     * Verifies a XmsgImSdkEventXmsgAp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImSdkEventXmsgAp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImSdkEventXmsgAp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImSdkEventXmsgAp;

    /**
     * Creates a plain object from a XmsgImSdkEventXmsgAp message. Also converts values to other types if specified.
     * @param message XmsgImSdkEventXmsgAp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImSdkEventXmsgAp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImSdkEventXmsgAp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** XmsgImSdkEventType enum. */
namespace XmsgImSdkEventType {

    /** X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE value */
    let X_MSG_IM_SDK_EVENT_TYPE_NET_NOTICE: number;

    /** X_MSG_IM_SDK_EVENT_TYPE_NET_REQ value */
    let X_MSG_IM_SDK_EVENT_TYPE_NET_REQ: number;

    /** X_MSG_IM_SDK_EVENT_TYPE_NET_RSP value */
    let X_MSG_IM_SDK_EVENT_TYPE_NET_RSP: number;

    /** X_MSG_IM_SDK_EVENT_TYPE_DB_RSP value */
    let X_MSG_IM_SDK_EVENT_TYPE_DB_RSP: number;

    /** X_MSG_IM_SDK_EVENT_TYPE_CXX_LOG value */
    let X_MSG_IM_SDK_EVENT_TYPE_CXX_LOG: number;
}

/** Represents a XmsgOssUploadSimpleReq. */
export class XmsgOssUploadSimpleReq implements IXmsgOssUploadSimpleReq {

    /**
     * Constructs a new XmsgOssUploadSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssUploadSimpleReq);

    /** XmsgOssUploadSimpleReq objName. */
    public objName: string;

    /** XmsgOssUploadSimpleReq objSize. */
    public objSize: (number|Long);

    /** XmsgOssUploadSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgOssUploadSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssUploadSimpleReq instance
     */
    public static create(properties?: IXmsgOssUploadSimpleReq): XmsgOssUploadSimpleReq;

    /**
     * Encodes the specified XmsgOssUploadSimpleReq message. Does not implicitly {@link XmsgOssUploadSimpleReq.verify|verify} messages.
     * @param message XmsgOssUploadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssUploadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssUploadSimpleReq message, length delimited. Does not implicitly {@link XmsgOssUploadSimpleReq.verify|verify} messages.
     * @param message XmsgOssUploadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssUploadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssUploadSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssUploadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssUploadSimpleReq;

    /**
     * Decodes a XmsgOssUploadSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssUploadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssUploadSimpleReq;

    /**
     * Verifies a XmsgOssUploadSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssUploadSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssUploadSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssUploadSimpleReq;

    /**
     * Creates a plain object from a XmsgOssUploadSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgOssUploadSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssUploadSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssUploadSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssUploadSimpleRsp. */
export class XmsgOssUploadSimpleRsp implements IXmsgOssUploadSimpleRsp {

    /**
     * Constructs a new XmsgOssUploadSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssUploadSimpleRsp);

    /** XmsgOssUploadSimpleRsp oid. */
    public oid: string;

    /** XmsgOssUploadSimpleRsp hashVal. */
    public hashVal: string;

    /** XmsgOssUploadSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgOssUploadSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssUploadSimpleRsp instance
     */
    public static create(properties?: IXmsgOssUploadSimpleRsp): XmsgOssUploadSimpleRsp;

    /**
     * Encodes the specified XmsgOssUploadSimpleRsp message. Does not implicitly {@link XmsgOssUploadSimpleRsp.verify|verify} messages.
     * @param message XmsgOssUploadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssUploadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssUploadSimpleRsp message, length delimited. Does not implicitly {@link XmsgOssUploadSimpleRsp.verify|verify} messages.
     * @param message XmsgOssUploadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssUploadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssUploadSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssUploadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssUploadSimpleRsp;

    /**
     * Decodes a XmsgOssUploadSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssUploadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssUploadSimpleRsp;

    /**
     * Verifies a XmsgOssUploadSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssUploadSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssUploadSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssUploadSimpleRsp;

    /**
     * Creates a plain object from a XmsgOssUploadSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgOssUploadSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssUploadSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssUploadSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssDownloadSimpleReq. */
export class XmsgOssDownloadSimpleReq implements IXmsgOssDownloadSimpleReq {

    /**
     * Constructs a new XmsgOssDownloadSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssDownloadSimpleReq);

    /** XmsgOssDownloadSimpleReq oid. */
    public oid: string;

    /** XmsgOssDownloadSimpleReq cgt. */
    public cgt: string;

    /** XmsgOssDownloadSimpleReq offset. */
    public offset: (number|Long);

    /** XmsgOssDownloadSimpleReq len. */
    public len: (number|Long);

    /** XmsgOssDownloadSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgOssDownloadSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssDownloadSimpleReq instance
     */
    public static create(properties?: IXmsgOssDownloadSimpleReq): XmsgOssDownloadSimpleReq;

    /**
     * Encodes the specified XmsgOssDownloadSimpleReq message. Does not implicitly {@link XmsgOssDownloadSimpleReq.verify|verify} messages.
     * @param message XmsgOssDownloadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssDownloadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssDownloadSimpleReq message, length delimited. Does not implicitly {@link XmsgOssDownloadSimpleReq.verify|verify} messages.
     * @param message XmsgOssDownloadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssDownloadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssDownloadSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssDownloadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssDownloadSimpleReq;

    /**
     * Decodes a XmsgOssDownloadSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssDownloadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssDownloadSimpleReq;

    /**
     * Verifies a XmsgOssDownloadSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssDownloadSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssDownloadSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssDownloadSimpleReq;

    /**
     * Creates a plain object from a XmsgOssDownloadSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgOssDownloadSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssDownloadSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssDownloadSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssDownloadSimpleRsp. */
export class XmsgOssDownloadSimpleRsp implements IXmsgOssDownloadSimpleRsp {

    /**
     * Constructs a new XmsgOssDownloadSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssDownloadSimpleRsp);

    /** XmsgOssDownloadSimpleRsp objName. */
    public objName: string;

    /** XmsgOssDownloadSimpleRsp objSize. */
    public objSize: (number|Long);

    /** XmsgOssDownloadSimpleRsp hashVal. */
    public hashVal: string;

    /** XmsgOssDownloadSimpleRsp gts. */
    public gts: (number|Long);

    /** XmsgOssDownloadSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgOssDownloadSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssDownloadSimpleRsp instance
     */
    public static create(properties?: IXmsgOssDownloadSimpleRsp): XmsgOssDownloadSimpleRsp;

    /**
     * Encodes the specified XmsgOssDownloadSimpleRsp message. Does not implicitly {@link XmsgOssDownloadSimpleRsp.verify|verify} messages.
     * @param message XmsgOssDownloadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssDownloadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssDownloadSimpleRsp message, length delimited. Does not implicitly {@link XmsgOssDownloadSimpleRsp.verify|verify} messages.
     * @param message XmsgOssDownloadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssDownloadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssDownloadSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssDownloadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssDownloadSimpleRsp;

    /**
     * Decodes a XmsgOssDownloadSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssDownloadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssDownloadSimpleRsp;

    /**
     * Verifies a XmsgOssDownloadSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssDownloadSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssDownloadSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssDownloadSimpleRsp;

    /**
     * Creates a plain object from a XmsgOssDownloadSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgOssDownloadSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssDownloadSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssDownloadSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssUsrObjInfoQueryReq. */
export class XmsgOssUsrObjInfoQueryReq implements IXmsgOssUsrObjInfoQueryReq {

    /**
     * Constructs a new XmsgOssUsrObjInfoQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssUsrObjInfoQueryReq);

    /** XmsgOssUsrObjInfoQueryReq sts. */
    public sts: (number|Long);

    /** XmsgOssUsrObjInfoQueryReq ets. */
    public ets: (number|Long);

    /** XmsgOssUsrObjInfoQueryReq page. */
    public page: number;

    /** XmsgOssUsrObjInfoQueryReq pageSize. */
    public pageSize: number;

    /**
     * Creates a new XmsgOssUsrObjInfoQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssUsrObjInfoQueryReq instance
     */
    public static create(properties?: IXmsgOssUsrObjInfoQueryReq): XmsgOssUsrObjInfoQueryReq;

    /**
     * Encodes the specified XmsgOssUsrObjInfoQueryReq message. Does not implicitly {@link XmsgOssUsrObjInfoQueryReq.verify|verify} messages.
     * @param message XmsgOssUsrObjInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssUsrObjInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssUsrObjInfoQueryReq message, length delimited. Does not implicitly {@link XmsgOssUsrObjInfoQueryReq.verify|verify} messages.
     * @param message XmsgOssUsrObjInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssUsrObjInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssUsrObjInfoQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssUsrObjInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssUsrObjInfoQueryReq;

    /**
     * Decodes a XmsgOssUsrObjInfoQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssUsrObjInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssUsrObjInfoQueryReq;

    /**
     * Verifies a XmsgOssUsrObjInfoQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssUsrObjInfoQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssUsrObjInfoQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssUsrObjInfoQueryReq;

    /**
     * Creates a plain object from a XmsgOssUsrObjInfoQueryReq message. Also converts values to other types if specified.
     * @param message XmsgOssUsrObjInfoQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssUsrObjInfoQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssUsrObjInfoQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssUsrObjInfoQueryRsp. */
export class XmsgOssUsrObjInfoQueryRsp implements IXmsgOssUsrObjInfoQueryRsp {

    /**
     * Constructs a new XmsgOssUsrObjInfoQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssUsrObjInfoQueryRsp);

    /** XmsgOssUsrObjInfoQueryRsp objInfo. */
    public objInfo: IXmsgOssUsrObjInfo[];

    /**
     * Creates a new XmsgOssUsrObjInfoQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssUsrObjInfoQueryRsp instance
     */
    public static create(properties?: IXmsgOssUsrObjInfoQueryRsp): XmsgOssUsrObjInfoQueryRsp;

    /**
     * Encodes the specified XmsgOssUsrObjInfoQueryRsp message. Does not implicitly {@link XmsgOssUsrObjInfoQueryRsp.verify|verify} messages.
     * @param message XmsgOssUsrObjInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssUsrObjInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssUsrObjInfoQueryRsp message, length delimited. Does not implicitly {@link XmsgOssUsrObjInfoQueryRsp.verify|verify} messages.
     * @param message XmsgOssUsrObjInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssUsrObjInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssUsrObjInfoQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssUsrObjInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssUsrObjInfoQueryRsp;

    /**
     * Decodes a XmsgOssUsrObjInfoQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssUsrObjInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssUsrObjInfoQueryRsp;

    /**
     * Verifies a XmsgOssUsrObjInfoQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssUsrObjInfoQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssUsrObjInfoQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssUsrObjInfoQueryRsp;

    /**
     * Creates a plain object from a XmsgOssUsrObjInfoQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgOssUsrObjInfoQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssUsrObjInfoQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssUsrObjInfoQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgOssUsrObjInfo. */
export class XmsgOssUsrObjInfo implements IXmsgOssUsrObjInfo {

    /**
     * Constructs a new XmsgOssUsrObjInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgOssUsrObjInfo);

    /** XmsgOssUsrObjInfo oid. */
    public oid: string;

    /** XmsgOssUsrObjInfo objName. */
    public objName: string;

    /** XmsgOssUsrObjInfo objSize. */
    public objSize: (number|Long);

    /** XmsgOssUsrObjInfo hashVal. */
    public hashVal: string;

    /** XmsgOssUsrObjInfo gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgOssUsrObjInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgOssUsrObjInfo instance
     */
    public static create(properties?: IXmsgOssUsrObjInfo): XmsgOssUsrObjInfo;

    /**
     * Encodes the specified XmsgOssUsrObjInfo message. Does not implicitly {@link XmsgOssUsrObjInfo.verify|verify} messages.
     * @param message XmsgOssUsrObjInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgOssUsrObjInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgOssUsrObjInfo message, length delimited. Does not implicitly {@link XmsgOssUsrObjInfo.verify|verify} messages.
     * @param message XmsgOssUsrObjInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgOssUsrObjInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgOssUsrObjInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgOssUsrObjInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgOssUsrObjInfo;

    /**
     * Decodes a XmsgOssUsrObjInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgOssUsrObjInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgOssUsrObjInfo;

    /**
     * Verifies a XmsgOssUsrObjInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgOssUsrObjInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgOssUsrObjInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgOssUsrObjInfo;

    /**
     * Creates a plain object from a XmsgOssUsrObjInfo message. Also converts values to other types if specified.
     * @param message XmsgOssUsrObjInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgOssUsrObjInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgOssUsrObjInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgClientTokenInfo. */
export class XmsgClientTokenInfo implements IXmsgClientTokenInfo {

    /**
     * Constructs a new XmsgClientTokenInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgClientTokenInfo);

    /** XmsgClientTokenInfo cgt. */
    public cgt: string;

    /** XmsgClientTokenInfo token. */
    public token: string;

    /** XmsgClientTokenInfo alg. */
    public alg: string;

    /** XmsgClientTokenInfo slat. */
    public slat: string;

    /** XmsgClientTokenInfo plat. */
    public plat: string;

    /** XmsgClientTokenInfo did. */
    public did: string;

    /** XmsgClientTokenInfo sign. */
    public sign: string;

    /**
     * Creates a new XmsgClientTokenInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgClientTokenInfo instance
     */
    public static create(properties?: IXmsgClientTokenInfo): XmsgClientTokenInfo;

    /**
     * Encodes the specified XmsgClientTokenInfo message. Does not implicitly {@link XmsgClientTokenInfo.verify|verify} messages.
     * @param message XmsgClientTokenInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgClientTokenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgClientTokenInfo message, length delimited. Does not implicitly {@link XmsgClientTokenInfo.verify|verify} messages.
     * @param message XmsgClientTokenInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgClientTokenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgClientTokenInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgClientTokenInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgClientTokenInfo;

    /**
     * Decodes a XmsgClientTokenInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgClientTokenInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgClientTokenInfo;

    /**
     * Verifies a XmsgClientTokenInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgClientTokenInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgClientTokenInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgClientTokenInfo;

    /**
     * Creates a plain object from a XmsgClientTokenInfo message. Also converts values to other types if specified.
     * @param message XmsgClientTokenInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgClientTokenInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgClientTokenInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrAttachSimpleReq. */
export class XmsgImHlrAttachSimpleReq implements IXmsgImHlrAttachSimpleReq {

    /**
     * Constructs a new XmsgImHlrAttachSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrAttachSimpleReq);

    /** XmsgImHlrAttachSimpleReq token. */
    public token: string;

    /** XmsgImHlrAttachSimpleReq salt. */
    public salt: string;

    /** XmsgImHlrAttachSimpleReq sign. */
    public sign: string;

    /** XmsgImHlrAttachSimpleReq alg. */
    public alg: string;

    /** XmsgImHlrAttachSimpleReq cgt. */
    public cgt: string;

    /** XmsgImHlrAttachSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrAttachSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrAttachSimpleReq instance
     */
    public static create(properties?: IXmsgImHlrAttachSimpleReq): XmsgImHlrAttachSimpleReq;

    /**
     * Encodes the specified XmsgImHlrAttachSimpleReq message. Does not implicitly {@link XmsgImHlrAttachSimpleReq.verify|verify} messages.
     * @param message XmsgImHlrAttachSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrAttachSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrAttachSimpleReq message, length delimited. Does not implicitly {@link XmsgImHlrAttachSimpleReq.verify|verify} messages.
     * @param message XmsgImHlrAttachSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrAttachSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrAttachSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrAttachSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrAttachSimpleReq;

    /**
     * Decodes a XmsgImHlrAttachSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrAttachSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrAttachSimpleReq;

    /**
     * Verifies a XmsgImHlrAttachSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrAttachSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrAttachSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrAttachSimpleReq;

    /**
     * Creates a plain object from a XmsgImHlrAttachSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrAttachSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrAttachSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrAttachSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrAttachSimpleRsp. */
export class XmsgImHlrAttachSimpleRsp implements IXmsgImHlrAttachSimpleRsp {

    /**
     * Constructs a new XmsgImHlrAttachSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrAttachSimpleRsp);

    /** XmsgImHlrAttachSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrAttachSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrAttachSimpleRsp instance
     */
    public static create(properties?: IXmsgImHlrAttachSimpleRsp): XmsgImHlrAttachSimpleRsp;

    /**
     * Encodes the specified XmsgImHlrAttachSimpleRsp message. Does not implicitly {@link XmsgImHlrAttachSimpleRsp.verify|verify} messages.
     * @param message XmsgImHlrAttachSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrAttachSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrAttachSimpleRsp message, length delimited. Does not implicitly {@link XmsgImHlrAttachSimpleRsp.verify|verify} messages.
     * @param message XmsgImHlrAttachSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrAttachSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrAttachSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrAttachSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrAttachSimpleRsp;

    /**
     * Decodes a XmsgImHlrAttachSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrAttachSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrAttachSimpleRsp;

    /**
     * Verifies a XmsgImHlrAttachSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrAttachSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrAttachSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrAttachSimpleRsp;

    /**
     * Creates a plain object from a XmsgImHlrAttachSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrAttachSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrAttachSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrAttachSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrDetachSimpleReq. */
export class XmsgImHlrDetachSimpleReq implements IXmsgImHlrDetachSimpleReq {

    /**
     * Constructs a new XmsgImHlrDetachSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrDetachSimpleReq);

    /** XmsgImHlrDetachSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrDetachSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrDetachSimpleReq instance
     */
    public static create(properties?: IXmsgImHlrDetachSimpleReq): XmsgImHlrDetachSimpleReq;

    /**
     * Encodes the specified XmsgImHlrDetachSimpleReq message. Does not implicitly {@link XmsgImHlrDetachSimpleReq.verify|verify} messages.
     * @param message XmsgImHlrDetachSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrDetachSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrDetachSimpleReq message, length delimited. Does not implicitly {@link XmsgImHlrDetachSimpleReq.verify|verify} messages.
     * @param message XmsgImHlrDetachSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrDetachSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrDetachSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrDetachSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrDetachSimpleReq;

    /**
     * Decodes a XmsgImHlrDetachSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrDetachSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrDetachSimpleReq;

    /**
     * Verifies a XmsgImHlrDetachSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrDetachSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrDetachSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrDetachSimpleReq;

    /**
     * Creates a plain object from a XmsgImHlrDetachSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrDetachSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrDetachSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrDetachSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrDetachSimpleRsp. */
export class XmsgImHlrDetachSimpleRsp implements IXmsgImHlrDetachSimpleRsp {

    /**
     * Constructs a new XmsgImHlrDetachSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrDetachSimpleRsp);

    /** XmsgImHlrDetachSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrDetachSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrDetachSimpleRsp instance
     */
    public static create(properties?: IXmsgImHlrDetachSimpleRsp): XmsgImHlrDetachSimpleRsp;

    /**
     * Encodes the specified XmsgImHlrDetachSimpleRsp message. Does not implicitly {@link XmsgImHlrDetachSimpleRsp.verify|verify} messages.
     * @param message XmsgImHlrDetachSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrDetachSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrDetachSimpleRsp message, length delimited. Does not implicitly {@link XmsgImHlrDetachSimpleRsp.verify|verify} messages.
     * @param message XmsgImHlrDetachSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrDetachSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrDetachSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrDetachSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrDetachSimpleRsp;

    /**
     * Decodes a XmsgImHlrDetachSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrDetachSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrDetachSimpleRsp;

    /**
     * Verifies a XmsgImHlrDetachSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrDetachSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrDetachSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrDetachSimpleRsp;

    /**
     * Creates a plain object from a XmsgImHlrDetachSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrDetachSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrDetachSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrDetachSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherClientAttachReq. */
export class XmsgImHlrOtherClientAttachReq implements IXmsgImHlrOtherClientAttachReq {

    /**
     * Constructs a new XmsgImHlrOtherClientAttachReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherClientAttachReq);

    /** XmsgImHlrOtherClientAttachReq dev. */
    public dev?: (IXmsgImClientDeviceInfo|null);

    /** XmsgImHlrOtherClientAttachReq host. */
    public host: string;

    /**
     * Creates a new XmsgImHlrOtherClientAttachReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherClientAttachReq instance
     */
    public static create(properties?: IXmsgImHlrOtherClientAttachReq): XmsgImHlrOtherClientAttachReq;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachReq message. Does not implicitly {@link XmsgImHlrOtherClientAttachReq.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherClientAttachReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachReq message, length delimited. Does not implicitly {@link XmsgImHlrOtherClientAttachReq.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherClientAttachReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherClientAttachReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherClientAttachReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherClientAttachReq;

    /**
     * Decodes a XmsgImHlrOtherClientAttachReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherClientAttachReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherClientAttachReq;

    /**
     * Verifies a XmsgImHlrOtherClientAttachReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherClientAttachReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherClientAttachReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherClientAttachReq;

    /**
     * Creates a plain object from a XmsgImHlrOtherClientAttachReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherClientAttachReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherClientAttachReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherClientAttachReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherClientAttachRsp. */
export class XmsgImHlrOtherClientAttachRsp implements IXmsgImHlrOtherClientAttachRsp {

    /**
     * Constructs a new XmsgImHlrOtherClientAttachRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherClientAttachRsp);

    /** XmsgImHlrOtherClientAttachRsp action. */
    public action: string;

    /**
     * Creates a new XmsgImHlrOtherClientAttachRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherClientAttachRsp instance
     */
    public static create(properties?: IXmsgImHlrOtherClientAttachRsp): XmsgImHlrOtherClientAttachRsp;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachRsp message. Does not implicitly {@link XmsgImHlrOtherClientAttachRsp.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherClientAttachRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachRsp message, length delimited. Does not implicitly {@link XmsgImHlrOtherClientAttachRsp.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherClientAttachRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherClientAttachRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherClientAttachRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherClientAttachRsp;

    /**
     * Decodes a XmsgImHlrOtherClientAttachRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherClientAttachRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherClientAttachRsp;

    /**
     * Verifies a XmsgImHlrOtherClientAttachRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherClientAttachRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherClientAttachRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherClientAttachRsp;

    /**
     * Creates a plain object from a XmsgImHlrOtherClientAttachRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherClientAttachRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherClientAttachRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherClientAttachRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherClientAttachNotice. */
export class XmsgImHlrOtherClientAttachNotice implements IXmsgImHlrOtherClientAttachNotice {

    /**
     * Constructs a new XmsgImHlrOtherClientAttachNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherClientAttachNotice);

    /** XmsgImHlrOtherClientAttachNotice dev. */
    public dev?: (IXmsgImClientDeviceInfo|null);

    /** XmsgImHlrOtherClientAttachNotice host. */
    public host: string;

    /**
     * Creates a new XmsgImHlrOtherClientAttachNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherClientAttachNotice instance
     */
    public static create(properties?: IXmsgImHlrOtherClientAttachNotice): XmsgImHlrOtherClientAttachNotice;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachNotice message. Does not implicitly {@link XmsgImHlrOtherClientAttachNotice.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherClientAttachNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherClientAttachNotice message, length delimited. Does not implicitly {@link XmsgImHlrOtherClientAttachNotice.verify|verify} messages.
     * @param message XmsgImHlrOtherClientAttachNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherClientAttachNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherClientAttachNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherClientAttachNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherClientAttachNotice;

    /**
     * Decodes a XmsgImHlrOtherClientAttachNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherClientAttachNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherClientAttachNotice;

    /**
     * Verifies a XmsgImHlrOtherClientAttachNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherClientAttachNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherClientAttachNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherClientAttachNotice;

    /**
     * Creates a plain object from a XmsgImHlrOtherClientAttachNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherClientAttachNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherClientAttachNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherClientAttachNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImAuthSimpleReq. */
export class XmsgImAuthSimpleReq implements IXmsgImAuthSimpleReq {

    /**
     * Constructs a new XmsgImAuthSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImAuthSimpleReq);

    /** XmsgImAuthSimpleReq usr. */
    public usr: string;

    /** XmsgImAuthSimpleReq salt. */
    public salt: string;

    /** XmsgImAuthSimpleReq sign. */
    public sign: string;

    /** XmsgImAuthSimpleReq dev. */
    public dev?: (IXmsgImClientDeviceInfo|null);

    /**
     * Creates a new XmsgImAuthSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImAuthSimpleReq instance
     */
    public static create(properties?: IXmsgImAuthSimpleReq): XmsgImAuthSimpleReq;

    /**
     * Encodes the specified XmsgImAuthSimpleReq message. Does not implicitly {@link XmsgImAuthSimpleReq.verify|verify} messages.
     * @param message XmsgImAuthSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImAuthSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImAuthSimpleReq message, length delimited. Does not implicitly {@link XmsgImAuthSimpleReq.verify|verify} messages.
     * @param message XmsgImAuthSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImAuthSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImAuthSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImAuthSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImAuthSimpleReq;

    /**
     * Decodes a XmsgImAuthSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImAuthSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImAuthSimpleReq;

    /**
     * Verifies a XmsgImAuthSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImAuthSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImAuthSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImAuthSimpleReq;

    /**
     * Creates a plain object from a XmsgImAuthSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgImAuthSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImAuthSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImAuthSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImAuthSimpleRsp. */
export class XmsgImAuthSimpleRsp implements IXmsgImAuthSimpleRsp {

    /**
     * Constructs a new XmsgImAuthSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImAuthSimpleRsp);

    /** XmsgImAuthSimpleRsp token. */
    public token: string;

    /** XmsgImAuthSimpleRsp secret. */
    public secret: string;

    /** XmsgImAuthSimpleRsp expired. */
    public expired: (number|Long);

    /** XmsgImAuthSimpleRsp apAddr. */
    public apAddr: IXmsgImClientServiceAddress[];

    /** XmsgImAuthSimpleRsp fsAddr. */
    public fsAddr: IXmsgImClientServiceAddress[];

    /** XmsgImAuthSimpleRsp cgt. */
    public cgt: string;

    /** XmsgImAuthSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImAuthSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImAuthSimpleRsp instance
     */
    public static create(properties?: IXmsgImAuthSimpleRsp): XmsgImAuthSimpleRsp;

    /**
     * Encodes the specified XmsgImAuthSimpleRsp message. Does not implicitly {@link XmsgImAuthSimpleRsp.verify|verify} messages.
     * @param message XmsgImAuthSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImAuthSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImAuthSimpleRsp message, length delimited. Does not implicitly {@link XmsgImAuthSimpleRsp.verify|verify} messages.
     * @param message XmsgImAuthSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImAuthSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImAuthSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImAuthSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImAuthSimpleRsp;

    /**
     * Decodes a XmsgImAuthSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImAuthSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImAuthSimpleRsp;

    /**
     * Verifies a XmsgImAuthSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImAuthSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImAuthSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImAuthSimpleRsp;

    /**
     * Creates a plain object from a XmsgImAuthSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgImAuthSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImAuthSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImAuthSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImAuthRegSimpleReq. */
export class XmsgImAuthRegSimpleReq implements IXmsgImAuthRegSimpleReq {

    /**
     * Constructs a new XmsgImAuthRegSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImAuthRegSimpleReq);

    /** XmsgImAuthRegSimpleReq usr. */
    public usr: string;

    /** XmsgImAuthRegSimpleReq salt. */
    public salt: string;

    /** XmsgImAuthRegSimpleReq pwd. */
    public pwd: string;

    /** XmsgImAuthRegSimpleReq dev. */
    public dev?: (IXmsgImClientDeviceInfo|null);

    /**
     * Creates a new XmsgImAuthRegSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImAuthRegSimpleReq instance
     */
    public static create(properties?: IXmsgImAuthRegSimpleReq): XmsgImAuthRegSimpleReq;

    /**
     * Encodes the specified XmsgImAuthRegSimpleReq message. Does not implicitly {@link XmsgImAuthRegSimpleReq.verify|verify} messages.
     * @param message XmsgImAuthRegSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImAuthRegSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImAuthRegSimpleReq message, length delimited. Does not implicitly {@link XmsgImAuthRegSimpleReq.verify|verify} messages.
     * @param message XmsgImAuthRegSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImAuthRegSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImAuthRegSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImAuthRegSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImAuthRegSimpleReq;

    /**
     * Decodes a XmsgImAuthRegSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImAuthRegSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImAuthRegSimpleReq;

    /**
     * Verifies a XmsgImAuthRegSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImAuthRegSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImAuthRegSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImAuthRegSimpleReq;

    /**
     * Creates a plain object from a XmsgImAuthRegSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgImAuthRegSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImAuthRegSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImAuthRegSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImAuthRegSimpleRsp. */
export class XmsgImAuthRegSimpleRsp implements IXmsgImAuthRegSimpleRsp {

    /**
     * Constructs a new XmsgImAuthRegSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImAuthRegSimpleRsp);

    /** XmsgImAuthRegSimpleRsp cgt. */
    public cgt: string;

    /** XmsgImAuthRegSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImAuthRegSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImAuthRegSimpleRsp instance
     */
    public static create(properties?: IXmsgImAuthRegSimpleRsp): XmsgImAuthRegSimpleRsp;

    /**
     * Encodes the specified XmsgImAuthRegSimpleRsp message. Does not implicitly {@link XmsgImAuthRegSimpleRsp.verify|verify} messages.
     * @param message XmsgImAuthRegSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImAuthRegSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImAuthRegSimpleRsp message, length delimited. Does not implicitly {@link XmsgImAuthRegSimpleRsp.verify|verify} messages.
     * @param message XmsgImAuthRegSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImAuthRegSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImAuthRegSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImAuthRegSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImAuthRegSimpleRsp;

    /**
     * Decodes a XmsgImAuthRegSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImAuthRegSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImAuthRegSimpleRsp;

    /**
     * Verifies a XmsgImAuthRegSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImAuthRegSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImAuthRegSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImAuthRegSimpleRsp;

    /**
     * Creates a plain object from a XmsgImAuthRegSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgImAuthRegSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImAuthRegSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImAuthRegSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientDeviceInfo. */
export class XmsgImClientDeviceInfo implements IXmsgImClientDeviceInfo {

    /**
     * Constructs a new XmsgImClientDeviceInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientDeviceInfo);

    /** XmsgImClientDeviceInfo plat. */
    public plat: string;

    /** XmsgImClientDeviceInfo did. */
    public did: string;

    /** XmsgImClientDeviceInfo ver. */
    public ver: string;

    /** XmsgImClientDeviceInfo ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImClientDeviceInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientDeviceInfo instance
     */
    public static create(properties?: IXmsgImClientDeviceInfo): XmsgImClientDeviceInfo;

    /**
     * Encodes the specified XmsgImClientDeviceInfo message. Does not implicitly {@link XmsgImClientDeviceInfo.verify|verify} messages.
     * @param message XmsgImClientDeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientDeviceInfo message, length delimited. Does not implicitly {@link XmsgImClientDeviceInfo.verify|verify} messages.
     * @param message XmsgImClientDeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientDeviceInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientDeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientDeviceInfo;

    /**
     * Decodes a XmsgImClientDeviceInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientDeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientDeviceInfo;

    /**
     * Verifies a XmsgImClientDeviceInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientDeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientDeviceInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientDeviceInfo;

    /**
     * Creates a plain object from a XmsgImClientDeviceInfo message. Also converts values to other types if specified.
     * @param message XmsgImClientDeviceInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientDeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientDeviceInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientServiceAddress. */
export class XmsgImClientServiceAddress implements IXmsgImClientServiceAddress {

    /**
     * Constructs a new XmsgImClientServiceAddress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientServiceAddress);

    /** XmsgImClientServiceAddress ip. */
    public ip: string;

    /** XmsgImClientServiceAddress port. */
    public port: number;

    /** XmsgImClientServiceAddress weight. */
    public weight: number;

    /** XmsgImClientServiceAddress proto. */
    public proto: string[];

    /** XmsgImClientServiceAddress ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImClientServiceAddress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientServiceAddress instance
     */
    public static create(properties?: IXmsgImClientServiceAddress): XmsgImClientServiceAddress;

    /**
     * Encodes the specified XmsgImClientServiceAddress message. Does not implicitly {@link XmsgImClientServiceAddress.verify|verify} messages.
     * @param message XmsgImClientServiceAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientServiceAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientServiceAddress message, length delimited. Does not implicitly {@link XmsgImClientServiceAddress.verify|verify} messages.
     * @param message XmsgImClientServiceAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientServiceAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientServiceAddress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientServiceAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientServiceAddress;

    /**
     * Decodes a XmsgImClientServiceAddress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientServiceAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientServiceAddress;

    /**
     * Verifies a XmsgImClientServiceAddress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientServiceAddress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientServiceAddress
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientServiceAddress;

    /**
     * Creates a plain object from a XmsgImClientServiceAddress message. Also converts values to other types if specified.
     * @param message XmsgImClientServiceAddress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientServiceAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientServiceAddress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherUsrInfoQueryReq. */
export class XmsgImHlrOtherUsrInfoQueryReq implements IXmsgImHlrOtherUsrInfoQueryReq {

    /**
     * Constructs a new XmsgImHlrOtherUsrInfoQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherUsrInfoQueryReq);

    /** XmsgImHlrOtherUsrInfoQueryReq cgt. */
    public cgt: string[];

    /**
     * Creates a new XmsgImHlrOtherUsrInfoQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherUsrInfoQueryReq instance
     */
    public static create(properties?: IXmsgImHlrOtherUsrInfoQueryReq): XmsgImHlrOtherUsrInfoQueryReq;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfoQueryReq message. Does not implicitly {@link XmsgImHlrOtherUsrInfoQueryReq.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherUsrInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfoQueryReq message, length delimited. Does not implicitly {@link XmsgImHlrOtherUsrInfoQueryReq.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherUsrInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherUsrInfoQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherUsrInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherUsrInfoQueryReq;

    /**
     * Decodes a XmsgImHlrOtherUsrInfoQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherUsrInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherUsrInfoQueryReq;

    /**
     * Verifies a XmsgImHlrOtherUsrInfoQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherUsrInfoQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherUsrInfoQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherUsrInfoQueryReq;

    /**
     * Creates a plain object from a XmsgImHlrOtherUsrInfoQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherUsrInfoQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherUsrInfoQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherUsrInfoQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherUsrInfoQueryRsp. */
export class XmsgImHlrOtherUsrInfoQueryRsp implements IXmsgImHlrOtherUsrInfoQueryRsp {

    /**
     * Constructs a new XmsgImHlrOtherUsrInfoQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherUsrInfoQueryRsp);

    /** XmsgImHlrOtherUsrInfoQueryRsp usrInfo. */
    public usrInfo: { [k: string]: IXmsgImHlrOtherUsrInfo };

    /**
     * Creates a new XmsgImHlrOtherUsrInfoQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherUsrInfoQueryRsp instance
     */
    public static create(properties?: IXmsgImHlrOtherUsrInfoQueryRsp): XmsgImHlrOtherUsrInfoQueryRsp;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfoQueryRsp message. Does not implicitly {@link XmsgImHlrOtherUsrInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherUsrInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfoQueryRsp message, length delimited. Does not implicitly {@link XmsgImHlrOtherUsrInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherUsrInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherUsrInfoQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherUsrInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherUsrInfoQueryRsp;

    /**
     * Decodes a XmsgImHlrOtherUsrInfoQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherUsrInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherUsrInfoQueryRsp;

    /**
     * Verifies a XmsgImHlrOtherUsrInfoQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherUsrInfoQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherUsrInfoQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherUsrInfoQueryRsp;

    /**
     * Creates a plain object from a XmsgImHlrOtherUsrInfoQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherUsrInfoQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherUsrInfoQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherUsrInfoQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrOtherUsrInfo. */
export class XmsgImHlrOtherUsrInfo implements IXmsgImHlrOtherUsrInfo {

    /**
     * Constructs a new XmsgImHlrOtherUsrInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrOtherUsrInfo);

    /** XmsgImHlrOtherUsrInfo info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrOtherUsrInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrOtherUsrInfo instance
     */
    public static create(properties?: IXmsgImHlrOtherUsrInfo): XmsgImHlrOtherUsrInfo;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfo message. Does not implicitly {@link XmsgImHlrOtherUsrInfo.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrOtherUsrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrOtherUsrInfo message, length delimited. Does not implicitly {@link XmsgImHlrOtherUsrInfo.verify|verify} messages.
     * @param message XmsgImHlrOtherUsrInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrOtherUsrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrOtherUsrInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrOtherUsrInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrOtherUsrInfo;

    /**
     * Decodes a XmsgImHlrOtherUsrInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrOtherUsrInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrOtherUsrInfo;

    /**
     * Verifies a XmsgImHlrOtherUsrInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrOtherUsrInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrOtherUsrInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrOtherUsrInfo;

    /**
     * Creates a plain object from a XmsgImHlrOtherUsrInfo message. Also converts values to other types if specified.
     * @param message XmsgImHlrOtherUsrInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrOtherUsrInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrOtherUsrInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileUploadSimpleReq. */
export class XmsgFileUploadSimpleReq implements IXmsgFileUploadSimpleReq {

    /**
     * Constructs a new XmsgFileUploadSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileUploadSimpleReq);

    /** XmsgFileUploadSimpleReq fileName. */
    public fileName: string;

    /** XmsgFileUploadSimpleReq fileSize. */
    public fileSize: (number|Long);

    /** XmsgFileUploadSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgFileUploadSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileUploadSimpleReq instance
     */
    public static create(properties?: IXmsgFileUploadSimpleReq): XmsgFileUploadSimpleReq;

    /**
     * Encodes the specified XmsgFileUploadSimpleReq message. Does not implicitly {@link XmsgFileUploadSimpleReq.verify|verify} messages.
     * @param message XmsgFileUploadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileUploadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileUploadSimpleReq message, length delimited. Does not implicitly {@link XmsgFileUploadSimpleReq.verify|verify} messages.
     * @param message XmsgFileUploadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileUploadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileUploadSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileUploadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileUploadSimpleReq;

    /**
     * Decodes a XmsgFileUploadSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileUploadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileUploadSimpleReq;

    /**
     * Verifies a XmsgFileUploadSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileUploadSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileUploadSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileUploadSimpleReq;

    /**
     * Creates a plain object from a XmsgFileUploadSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgFileUploadSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileUploadSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileUploadSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileUploadSimpleRsp. */
export class XmsgFileUploadSimpleRsp implements IXmsgFileUploadSimpleRsp {

    /**
     * Constructs a new XmsgFileUploadSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileUploadSimpleRsp);

    /** XmsgFileUploadSimpleRsp fid. */
    public fid: string;

    /** XmsgFileUploadSimpleRsp hashVal. */
    public hashVal: string;

    /** XmsgFileUploadSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgFileUploadSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileUploadSimpleRsp instance
     */
    public static create(properties?: IXmsgFileUploadSimpleRsp): XmsgFileUploadSimpleRsp;

    /**
     * Encodes the specified XmsgFileUploadSimpleRsp message. Does not implicitly {@link XmsgFileUploadSimpleRsp.verify|verify} messages.
     * @param message XmsgFileUploadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileUploadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileUploadSimpleRsp message, length delimited. Does not implicitly {@link XmsgFileUploadSimpleRsp.verify|verify} messages.
     * @param message XmsgFileUploadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileUploadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileUploadSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileUploadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileUploadSimpleRsp;

    /**
     * Decodes a XmsgFileUploadSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileUploadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileUploadSimpleRsp;

    /**
     * Verifies a XmsgFileUploadSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileUploadSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileUploadSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileUploadSimpleRsp;

    /**
     * Creates a plain object from a XmsgFileUploadSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgFileUploadSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileUploadSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileUploadSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileDownloadSimpleReq. */
export class XmsgFileDownloadSimpleReq implements IXmsgFileDownloadSimpleReq {

    /**
     * Constructs a new XmsgFileDownloadSimpleReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileDownloadSimpleReq);

    /** XmsgFileDownloadSimpleReq fid. */
    public fid: string;

    /** XmsgFileDownloadSimpleReq cgt. */
    public cgt: string;

    /** XmsgFileDownloadSimpleReq offset. */
    public offset: (number|Long);

    /** XmsgFileDownloadSimpleReq len. */
    public len: (number|Long);

    /** XmsgFileDownloadSimpleReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgFileDownloadSimpleReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileDownloadSimpleReq instance
     */
    public static create(properties?: IXmsgFileDownloadSimpleReq): XmsgFileDownloadSimpleReq;

    /**
     * Encodes the specified XmsgFileDownloadSimpleReq message. Does not implicitly {@link XmsgFileDownloadSimpleReq.verify|verify} messages.
     * @param message XmsgFileDownloadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileDownloadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileDownloadSimpleReq message, length delimited. Does not implicitly {@link XmsgFileDownloadSimpleReq.verify|verify} messages.
     * @param message XmsgFileDownloadSimpleReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileDownloadSimpleReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileDownloadSimpleReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileDownloadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileDownloadSimpleReq;

    /**
     * Decodes a XmsgFileDownloadSimpleReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileDownloadSimpleReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileDownloadSimpleReq;

    /**
     * Verifies a XmsgFileDownloadSimpleReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileDownloadSimpleReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileDownloadSimpleReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileDownloadSimpleReq;

    /**
     * Creates a plain object from a XmsgFileDownloadSimpleReq message. Also converts values to other types if specified.
     * @param message XmsgFileDownloadSimpleReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileDownloadSimpleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileDownloadSimpleReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileDownloadSimpleRsp. */
export class XmsgFileDownloadSimpleRsp implements IXmsgFileDownloadSimpleRsp {

    /**
     * Constructs a new XmsgFileDownloadSimpleRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileDownloadSimpleRsp);

    /** XmsgFileDownloadSimpleRsp fileName. */
    public fileName: string;

    /** XmsgFileDownloadSimpleRsp fileSize. */
    public fileSize: (number|Long);

    /** XmsgFileDownloadSimpleRsp hashVal. */
    public hashVal: string;

    /** XmsgFileDownloadSimpleRsp gts. */
    public gts: (number|Long);

    /** XmsgFileDownloadSimpleRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgFileDownloadSimpleRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileDownloadSimpleRsp instance
     */
    public static create(properties?: IXmsgFileDownloadSimpleRsp): XmsgFileDownloadSimpleRsp;

    /**
     * Encodes the specified XmsgFileDownloadSimpleRsp message. Does not implicitly {@link XmsgFileDownloadSimpleRsp.verify|verify} messages.
     * @param message XmsgFileDownloadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileDownloadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileDownloadSimpleRsp message, length delimited. Does not implicitly {@link XmsgFileDownloadSimpleRsp.verify|verify} messages.
     * @param message XmsgFileDownloadSimpleRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileDownloadSimpleRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileDownloadSimpleRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileDownloadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileDownloadSimpleRsp;

    /**
     * Decodes a XmsgFileDownloadSimpleRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileDownloadSimpleRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileDownloadSimpleRsp;

    /**
     * Verifies a XmsgFileDownloadSimpleRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileDownloadSimpleRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileDownloadSimpleRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileDownloadSimpleRsp;

    /**
     * Creates a plain object from a XmsgFileDownloadSimpleRsp message. Also converts values to other types if specified.
     * @param message XmsgFileDownloadSimpleRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileDownloadSimpleRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileDownloadSimpleRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileUsrFileInfoQueryReq. */
export class XmsgFileUsrFileInfoQueryReq implements IXmsgFileUsrFileInfoQueryReq {

    /**
     * Constructs a new XmsgFileUsrFileInfoQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileUsrFileInfoQueryReq);

    /** XmsgFileUsrFileInfoQueryReq sts. */
    public sts: (number|Long);

    /** XmsgFileUsrFileInfoQueryReq ets. */
    public ets: (number|Long);

    /** XmsgFileUsrFileInfoQueryReq page. */
    public page: number;

    /** XmsgFileUsrFileInfoQueryReq pageSize. */
    public pageSize: number;

    /**
     * Creates a new XmsgFileUsrFileInfoQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileUsrFileInfoQueryReq instance
     */
    public static create(properties?: IXmsgFileUsrFileInfoQueryReq): XmsgFileUsrFileInfoQueryReq;

    /**
     * Encodes the specified XmsgFileUsrFileInfoQueryReq message. Does not implicitly {@link XmsgFileUsrFileInfoQueryReq.verify|verify} messages.
     * @param message XmsgFileUsrFileInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileUsrFileInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileUsrFileInfoQueryReq message, length delimited. Does not implicitly {@link XmsgFileUsrFileInfoQueryReq.verify|verify} messages.
     * @param message XmsgFileUsrFileInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileUsrFileInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileUsrFileInfoQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileUsrFileInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileUsrFileInfoQueryReq;

    /**
     * Decodes a XmsgFileUsrFileInfoQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileUsrFileInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileUsrFileInfoQueryReq;

    /**
     * Verifies a XmsgFileUsrFileInfoQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileUsrFileInfoQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileUsrFileInfoQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileUsrFileInfoQueryReq;

    /**
     * Creates a plain object from a XmsgFileUsrFileInfoQueryReq message. Also converts values to other types if specified.
     * @param message XmsgFileUsrFileInfoQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileUsrFileInfoQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileUsrFileInfoQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileUsrFileInfoQueryRsp. */
export class XmsgFileUsrFileInfoQueryRsp implements IXmsgFileUsrFileInfoQueryRsp {

    /**
     * Constructs a new XmsgFileUsrFileInfoQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileUsrFileInfoQueryRsp);

    /** XmsgFileUsrFileInfoQueryRsp fileInfo. */
    public fileInfo: IXmsgFileUsrFileInfo[];

    /**
     * Creates a new XmsgFileUsrFileInfoQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileUsrFileInfoQueryRsp instance
     */
    public static create(properties?: IXmsgFileUsrFileInfoQueryRsp): XmsgFileUsrFileInfoQueryRsp;

    /**
     * Encodes the specified XmsgFileUsrFileInfoQueryRsp message. Does not implicitly {@link XmsgFileUsrFileInfoQueryRsp.verify|verify} messages.
     * @param message XmsgFileUsrFileInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileUsrFileInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileUsrFileInfoQueryRsp message, length delimited. Does not implicitly {@link XmsgFileUsrFileInfoQueryRsp.verify|verify} messages.
     * @param message XmsgFileUsrFileInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileUsrFileInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileUsrFileInfoQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileUsrFileInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileUsrFileInfoQueryRsp;

    /**
     * Decodes a XmsgFileUsrFileInfoQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileUsrFileInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileUsrFileInfoQueryRsp;

    /**
     * Verifies a XmsgFileUsrFileInfoQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileUsrFileInfoQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileUsrFileInfoQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileUsrFileInfoQueryRsp;

    /**
     * Creates a plain object from a XmsgFileUsrFileInfoQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgFileUsrFileInfoQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileUsrFileInfoQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileUsrFileInfoQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgFileUsrFileInfo. */
export class XmsgFileUsrFileInfo implements IXmsgFileUsrFileInfo {

    /**
     * Constructs a new XmsgFileUsrFileInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgFileUsrFileInfo);

    /** XmsgFileUsrFileInfo fid. */
    public fid: string;

    /** XmsgFileUsrFileInfo fileName. */
    public fileName: string;

    /** XmsgFileUsrFileInfo fileSize. */
    public fileSize: (number|Long);

    /** XmsgFileUsrFileInfo hashVal. */
    public hashVal: string;

    /** XmsgFileUsrFileInfo gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgFileUsrFileInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgFileUsrFileInfo instance
     */
    public static create(properties?: IXmsgFileUsrFileInfo): XmsgFileUsrFileInfo;

    /**
     * Encodes the specified XmsgFileUsrFileInfo message. Does not implicitly {@link XmsgFileUsrFileInfo.verify|verify} messages.
     * @param message XmsgFileUsrFileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgFileUsrFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgFileUsrFileInfo message, length delimited. Does not implicitly {@link XmsgFileUsrFileInfo.verify|verify} messages.
     * @param message XmsgFileUsrFileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgFileUsrFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgFileUsrFileInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgFileUsrFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgFileUsrFileInfo;

    /**
     * Decodes a XmsgFileUsrFileInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgFileUsrFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgFileUsrFileInfo;

    /**
     * Verifies a XmsgFileUsrFileInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgFileUsrFileInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgFileUsrFileInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgFileUsrFileInfo;

    /**
     * Creates a plain object from a XmsgFileUsrFileInfo message. Also converts values to other types if specified.
     * @param message XmsgFileUsrFileInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgFileUsrFileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgFileUsrFileInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrDat. */
export class XmsgImHlrUsrDat implements IXmsgImHlrUsrDat {

    /**
     * Constructs a new XmsgImHlrUsrDat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrDat);

    /** XmsgImHlrUsrDat uid. */
    public uid: string;

    /** XmsgImHlrUsrDat ver. */
    public ver: (number|Long);

    /** XmsgImHlrUsrDat pri. */
    public pri?: (IXmsgImHlrUsrDatPri|null);

    /** XmsgImHlrUsrDat pub. */
    public pub?: (IXmsgImHlrUsrDatPub|null);

    /** XmsgImHlrUsrDat gts. */
    public gts: (number|Long);

    /** XmsgImHlrUsrDat uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImHlrUsrDat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrDat instance
     */
    public static create(properties?: IXmsgImHlrUsrDat): XmsgImHlrUsrDat;

    /**
     * Encodes the specified XmsgImHlrUsrDat message. Does not implicitly {@link XmsgImHlrUsrDat.verify|verify} messages.
     * @param message XmsgImHlrUsrDat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrDat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrDat message, length delimited. Does not implicitly {@link XmsgImHlrUsrDat.verify|verify} messages.
     * @param message XmsgImHlrUsrDat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrDat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrDat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrDat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrDat;

    /**
     * Decodes a XmsgImHlrUsrDat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrDat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrDat;

    /**
     * Verifies a XmsgImHlrUsrDat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrDat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrDat
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrDat;

    /**
     * Creates a plain object from a XmsgImHlrUsrDat message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrDat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrDat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrDat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrDatPri. */
export class XmsgImHlrUsrDatPri implements IXmsgImHlrUsrDatPri {

    /**
     * Constructs a new XmsgImHlrUsrDatPri.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrDatPri);

    /** XmsgImHlrUsrDatPri enable. */
    public enable: boolean;

    /** XmsgImHlrUsrDatPri info. */
    public info: { [k: string]: string };

    /** XmsgImHlrUsrDatPri sysEventVerRead. */
    public sysEventVerRead: (number|Long);

    /**
     * Creates a new XmsgImHlrUsrDatPri instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrDatPri instance
     */
    public static create(properties?: IXmsgImHlrUsrDatPri): XmsgImHlrUsrDatPri;

    /**
     * Encodes the specified XmsgImHlrUsrDatPri message. Does not implicitly {@link XmsgImHlrUsrDatPri.verify|verify} messages.
     * @param message XmsgImHlrUsrDatPri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrDatPri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrDatPri message, length delimited. Does not implicitly {@link XmsgImHlrUsrDatPri.verify|verify} messages.
     * @param message XmsgImHlrUsrDatPri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrDatPri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrDatPri message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrDatPri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrDatPri;

    /**
     * Decodes a XmsgImHlrUsrDatPri message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrDatPri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrDatPri;

    /**
     * Verifies a XmsgImHlrUsrDatPri message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrDatPri message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrDatPri
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrDatPri;

    /**
     * Creates a plain object from a XmsgImHlrUsrDatPri message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrDatPri
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrDatPri, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrDatPri to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrDatPub. */
export class XmsgImHlrUsrDatPub implements IXmsgImHlrUsrDatPub {

    /**
     * Constructs a new XmsgImHlrUsrDatPub.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrDatPub);

    /** XmsgImHlrUsrDatPub name. */
    public name: string;

    /** XmsgImHlrUsrDatPub info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrUsrDatPub instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrDatPub instance
     */
    public static create(properties?: IXmsgImHlrUsrDatPub): XmsgImHlrUsrDatPub;

    /**
     * Encodes the specified XmsgImHlrUsrDatPub message. Does not implicitly {@link XmsgImHlrUsrDatPub.verify|verify} messages.
     * @param message XmsgImHlrUsrDatPub message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrDatPub, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrDatPub message, length delimited. Does not implicitly {@link XmsgImHlrUsrDatPub.verify|verify} messages.
     * @param message XmsgImHlrUsrDatPub message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrDatPub, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrDatPub message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrDatPub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrDatPub;

    /**
     * Decodes a XmsgImHlrUsrDatPub message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrDatPub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrDatPub;

    /**
     * Verifies a XmsgImHlrUsrDatPub message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrDatPub message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrDatPub
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrDatPub;

    /**
     * Creates a plain object from a XmsgImHlrUsrDatPub message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrDatPub
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrDatPub, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrDatPub to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrInfoQueryReq. */
export class XmsgImHlrUsrInfoQueryReq implements IXmsgImHlrUsrInfoQueryReq {

    /**
     * Constructs a new XmsgImHlrUsrInfoQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrInfoQueryReq);

    /** XmsgImHlrUsrInfoQueryReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrUsrInfoQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrInfoQueryReq instance
     */
    public static create(properties?: IXmsgImHlrUsrInfoQueryReq): XmsgImHlrUsrInfoQueryReq;

    /**
     * Encodes the specified XmsgImHlrUsrInfoQueryReq message. Does not implicitly {@link XmsgImHlrUsrInfoQueryReq.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrInfoQueryReq message, length delimited. Does not implicitly {@link XmsgImHlrUsrInfoQueryReq.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrInfoQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrInfoQueryReq;

    /**
     * Decodes a XmsgImHlrUsrInfoQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrInfoQueryReq;

    /**
     * Verifies a XmsgImHlrUsrInfoQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrInfoQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrInfoQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrInfoQueryReq;

    /**
     * Creates a plain object from a XmsgImHlrUsrInfoQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrInfoQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrInfoQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrInfoQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrInfoQueryRsp. */
export class XmsgImHlrUsrInfoQueryRsp implements IXmsgImHlrUsrInfoQueryRsp {

    /**
     * Constructs a new XmsgImHlrUsrInfoQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrInfoQueryRsp);

    /** XmsgImHlrUsrInfoQueryRsp info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrUsrInfoQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrInfoQueryRsp instance
     */
    public static create(properties?: IXmsgImHlrUsrInfoQueryRsp): XmsgImHlrUsrInfoQueryRsp;

    /**
     * Encodes the specified XmsgImHlrUsrInfoQueryRsp message. Does not implicitly {@link XmsgImHlrUsrInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrInfoQueryRsp message, length delimited. Does not implicitly {@link XmsgImHlrUsrInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrInfoQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrInfoQueryRsp;

    /**
     * Decodes a XmsgImHlrUsrInfoQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrInfoQueryRsp;

    /**
     * Verifies a XmsgImHlrUsrInfoQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrInfoQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrInfoQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrInfoQueryRsp;

    /**
     * Creates a plain object from a XmsgImHlrUsrInfoQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrInfoQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrInfoQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrInfoQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrInfoUpdateReq. */
export class XmsgImHlrUsrInfoUpdateReq implements IXmsgImHlrUsrInfoUpdateReq {

    /**
     * Constructs a new XmsgImHlrUsrInfoUpdateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrInfoUpdateReq);

    /** XmsgImHlrUsrInfoUpdateReq info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrUsrInfoUpdateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrInfoUpdateReq instance
     */
    public static create(properties?: IXmsgImHlrUsrInfoUpdateReq): XmsgImHlrUsrInfoUpdateReq;

    /**
     * Encodes the specified XmsgImHlrUsrInfoUpdateReq message. Does not implicitly {@link XmsgImHlrUsrInfoUpdateReq.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrInfoUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrInfoUpdateReq message, length delimited. Does not implicitly {@link XmsgImHlrUsrInfoUpdateReq.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrInfoUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrInfoUpdateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrInfoUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrInfoUpdateReq;

    /**
     * Decodes a XmsgImHlrUsrInfoUpdateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrInfoUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrInfoUpdateReq;

    /**
     * Verifies a XmsgImHlrUsrInfoUpdateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrInfoUpdateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrInfoUpdateReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrInfoUpdateReq;

    /**
     * Creates a plain object from a XmsgImHlrUsrInfoUpdateReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrInfoUpdateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrInfoUpdateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrInfoUpdateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrUsrInfoUpdateRsp. */
export class XmsgImHlrUsrInfoUpdateRsp implements IXmsgImHlrUsrInfoUpdateRsp {

    /**
     * Constructs a new XmsgImHlrUsrInfoUpdateRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrUsrInfoUpdateRsp);

    /** XmsgImHlrUsrInfoUpdateRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrUsrInfoUpdateRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrUsrInfoUpdateRsp instance
     */
    public static create(properties?: IXmsgImHlrUsrInfoUpdateRsp): XmsgImHlrUsrInfoUpdateRsp;

    /**
     * Encodes the specified XmsgImHlrUsrInfoUpdateRsp message. Does not implicitly {@link XmsgImHlrUsrInfoUpdateRsp.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrUsrInfoUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrUsrInfoUpdateRsp message, length delimited. Does not implicitly {@link XmsgImHlrUsrInfoUpdateRsp.verify|verify} messages.
     * @param message XmsgImHlrUsrInfoUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrUsrInfoUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrUsrInfoUpdateRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrUsrInfoUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrUsrInfoUpdateRsp;

    /**
     * Decodes a XmsgImHlrUsrInfoUpdateRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrUsrInfoUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrUsrInfoUpdateRsp;

    /**
     * Verifies a XmsgImHlrUsrInfoUpdateRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrUsrInfoUpdateRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrUsrInfoUpdateRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrUsrInfoUpdateRsp;

    /**
     * Creates a plain object from a XmsgImHlrUsrInfoUpdateRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrUsrInfoUpdateRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrUsrInfoUpdateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrUsrInfoUpdateRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientDbCrudReq. */
export class XmsgImClientDbCrudReq implements IXmsgImClientDbCrudReq {

    /**
     * Constructs a new XmsgImClientDbCrudReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientDbCrudReq);

    /** XmsgImClientDbCrudReq sql. */
    public sql: string;

    /** XmsgImClientDbCrudReq row. */
    public row: IXmsgImClientDbRow[];

    /**
     * Creates a new XmsgImClientDbCrudReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientDbCrudReq instance
     */
    public static create(properties?: IXmsgImClientDbCrudReq): XmsgImClientDbCrudReq;

    /**
     * Encodes the specified XmsgImClientDbCrudReq message. Does not implicitly {@link XmsgImClientDbCrudReq.verify|verify} messages.
     * @param message XmsgImClientDbCrudReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientDbCrudReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientDbCrudReq message, length delimited. Does not implicitly {@link XmsgImClientDbCrudReq.verify|verify} messages.
     * @param message XmsgImClientDbCrudReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientDbCrudReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientDbCrudReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientDbCrudReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientDbCrudReq;

    /**
     * Decodes a XmsgImClientDbCrudReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientDbCrudReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientDbCrudReq;

    /**
     * Verifies a XmsgImClientDbCrudReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientDbCrudReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientDbCrudReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientDbCrudReq;

    /**
     * Creates a plain object from a XmsgImClientDbCrudReq message. Also converts values to other types if specified.
     * @param message XmsgImClientDbCrudReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientDbCrudReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientDbCrudReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientDbCrudRsp. */
export class XmsgImClientDbCrudRsp implements IXmsgImClientDbCrudRsp {

    /**
     * Constructs a new XmsgImClientDbCrudRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientDbCrudRsp);

    /** XmsgImClientDbCrudRsp change. */
    public change: number;

    /** XmsgImClientDbCrudRsp column. */
    public column: { [k: string]: number };

    /** XmsgImClientDbCrudRsp row. */
    public row: IXmsgImClientDbRow[];

    /**
     * Creates a new XmsgImClientDbCrudRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientDbCrudRsp instance
     */
    public static create(properties?: IXmsgImClientDbCrudRsp): XmsgImClientDbCrudRsp;

    /**
     * Encodes the specified XmsgImClientDbCrudRsp message. Does not implicitly {@link XmsgImClientDbCrudRsp.verify|verify} messages.
     * @param message XmsgImClientDbCrudRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientDbCrudRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientDbCrudRsp message, length delimited. Does not implicitly {@link XmsgImClientDbCrudRsp.verify|verify} messages.
     * @param message XmsgImClientDbCrudRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientDbCrudRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientDbCrudRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientDbCrudRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientDbCrudRsp;

    /**
     * Decodes a XmsgImClientDbCrudRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientDbCrudRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientDbCrudRsp;

    /**
     * Verifies a XmsgImClientDbCrudRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientDbCrudRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientDbCrudRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientDbCrudRsp;

    /**
     * Creates a plain object from a XmsgImClientDbCrudRsp message. Also converts values to other types if specified.
     * @param message XmsgImClientDbCrudRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientDbCrudRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientDbCrudRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientDbRow. */
export class XmsgImClientDbRow implements IXmsgImClientDbRow {

    /**
     * Constructs a new XmsgImClientDbRow.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientDbRow);

    /** XmsgImClientDbRow col. */
    public col: IXmsgImClientDbFiled[];

    /**
     * Creates a new XmsgImClientDbRow instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientDbRow instance
     */
    public static create(properties?: IXmsgImClientDbRow): XmsgImClientDbRow;

    /**
     * Encodes the specified XmsgImClientDbRow message. Does not implicitly {@link XmsgImClientDbRow.verify|verify} messages.
     * @param message XmsgImClientDbRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientDbRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientDbRow message, length delimited. Does not implicitly {@link XmsgImClientDbRow.verify|verify} messages.
     * @param message XmsgImClientDbRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientDbRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientDbRow message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientDbRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientDbRow;

    /**
     * Decodes a XmsgImClientDbRow message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientDbRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientDbRow;

    /**
     * Verifies a XmsgImClientDbRow message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientDbRow message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientDbRow
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientDbRow;

    /**
     * Creates a plain object from a XmsgImClientDbRow message. Also converts values to other types if specified.
     * @param message XmsgImClientDbRow
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientDbRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientDbRow to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImClientDbFiled. */
export class XmsgImClientDbFiled implements IXmsgImClientDbFiled {

    /**
     * Constructs a new XmsgImClientDbFiled.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientDbFiled);

    /** XmsgImClientDbFiled type. */
    public type: XmsgImClientDbFiledType;

    /** XmsgImClientDbFiled valInt. */
    public valInt: (number|Long);

    /** XmsgImClientDbFiled valText. */
    public valText: string;

    /** XmsgImClientDbFiled valBlob. */
    public valBlob: Uint8Array;

    /**
     * Creates a new XmsgImClientDbFiled instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientDbFiled instance
     */
    public static create(properties?: IXmsgImClientDbFiled): XmsgImClientDbFiled;

    /**
     * Encodes the specified XmsgImClientDbFiled message. Does not implicitly {@link XmsgImClientDbFiled.verify|verify} messages.
     * @param message XmsgImClientDbFiled message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientDbFiled, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientDbFiled message, length delimited. Does not implicitly {@link XmsgImClientDbFiled.verify|verify} messages.
     * @param message XmsgImClientDbFiled message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientDbFiled, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientDbFiled message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientDbFiled
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientDbFiled;

    /**
     * Decodes a XmsgImClientDbFiled message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientDbFiled
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientDbFiled;

    /**
     * Verifies a XmsgImClientDbFiled message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientDbFiled message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientDbFiled
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientDbFiled;

    /**
     * Creates a plain object from a XmsgImClientDbFiled message. Also converts values to other types if specified.
     * @param message XmsgImClientDbFiled
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientDbFiled, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientDbFiled to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** XmsgImClientDbFiledType enum. */
namespace XmsgImClientDbFiledType {

    /** X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT value */
    let X_MSG_IM_CLIENT_DB_FILED_TYPE_BIGINT: number;

    /** X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT value */
    let X_MSG_IM_CLIENT_DB_FILED_TYPE_TEXT: number;

    /** X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB value */
    let X_MSG_IM_CLIENT_DB_FILED_TYPE_BLOB: number;

    /** X_MSG_IM_CLIENT_DB_FILED_TYPE_NULL value */
    let X_MSG_IM_CLIENT_DB_FILED_TYPE_NULL: number;
}

/** Represents a XmsgImClientKv. */
export class XmsgImClientKv implements IXmsgImClientKv {

    /**
     * Constructs a new XmsgImClientKv.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImClientKv);

    /** XmsgImClientKv kv. */
    public kv: { [k: string]: string };

    /**
     * Creates a new XmsgImClientKv instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImClientKv instance
     */
    public static create(properties?: IXmsgImClientKv): XmsgImClientKv;

    /**
     * Encodes the specified XmsgImClientKv message. Does not implicitly {@link XmsgImClientKv.verify|verify} messages.
     * @param message XmsgImClientKv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImClientKv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImClientKv message, length delimited. Does not implicitly {@link XmsgImClientKv.verify|verify} messages.
     * @param message XmsgImClientKv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImClientKv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImClientKv message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImClientKv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImClientKv;

    /**
     * Decodes a XmsgImClientKv message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImClientKv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImClientKv;

    /**
     * Verifies a XmsgImClientKv message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImClientKv message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImClientKv
     */
    public static fromObject(object: { [k: string]: any }): XmsgImClientKv;

    /**
     * Creates a plain object from a XmsgImClientKv message. Also converts values to other types if specified.
     * @param message XmsgImClientKv
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImClientKv, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImClientKv to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgSyncSubReq. */
export class XmsgImOrgSyncSubReq implements IXmsgImOrgSyncSubReq {

    /**
     * Constructs a new XmsgImOrgSyncSubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgSyncSubReq);

    /** XmsgImOrgSyncSubReq ver4dept. */
    public ver4dept: (number|Long);

    /** XmsgImOrgSyncSubReq ver4deptUsr. */
    public ver4deptUsr: (number|Long);

    /** XmsgImOrgSyncSubReq ver4usr. */
    public ver4usr: (number|Long);

    /**
     * Creates a new XmsgImOrgSyncSubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgSyncSubReq instance
     */
    public static create(properties?: IXmsgImOrgSyncSubReq): XmsgImOrgSyncSubReq;

    /**
     * Encodes the specified XmsgImOrgSyncSubReq message. Does not implicitly {@link XmsgImOrgSyncSubReq.verify|verify} messages.
     * @param message XmsgImOrgSyncSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgSyncSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgSyncSubReq message, length delimited. Does not implicitly {@link XmsgImOrgSyncSubReq.verify|verify} messages.
     * @param message XmsgImOrgSyncSubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgSyncSubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgSyncSubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgSyncSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgSyncSubReq;

    /**
     * Decodes a XmsgImOrgSyncSubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgSyncSubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgSyncSubReq;

    /**
     * Verifies a XmsgImOrgSyncSubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgSyncSubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgSyncSubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgSyncSubReq;

    /**
     * Creates a plain object from a XmsgImOrgSyncSubReq message. Also converts values to other types if specified.
     * @param message XmsgImOrgSyncSubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgSyncSubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgSyncSubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgSyncSubRsp. */
export class XmsgImOrgSyncSubRsp implements IXmsgImOrgSyncSubRsp {

    /**
     * Constructs a new XmsgImOrgSyncSubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgSyncSubRsp);

    /** XmsgImOrgSyncSubRsp ver4deptLatest. */
    public ver4deptLatest: (number|Long);

    /** XmsgImOrgSyncSubRsp ver4deptUsrLatest. */
    public ver4deptUsrLatest: (number|Long);

    /** XmsgImOrgSyncSubRsp ver4usrLatest. */
    public ver4usrLatest: (number|Long);

    /**
     * Creates a new XmsgImOrgSyncSubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgSyncSubRsp instance
     */
    public static create(properties?: IXmsgImOrgSyncSubRsp): XmsgImOrgSyncSubRsp;

    /**
     * Encodes the specified XmsgImOrgSyncSubRsp message. Does not implicitly {@link XmsgImOrgSyncSubRsp.verify|verify} messages.
     * @param message XmsgImOrgSyncSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgSyncSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgSyncSubRsp message, length delimited. Does not implicitly {@link XmsgImOrgSyncSubRsp.verify|verify} messages.
     * @param message XmsgImOrgSyncSubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgSyncSubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgSyncSubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgSyncSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgSyncSubRsp;

    /**
     * Decodes a XmsgImOrgSyncSubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgSyncSubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgSyncSubRsp;

    /**
     * Verifies a XmsgImOrgSyncSubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgSyncSubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgSyncSubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgSyncSubRsp;

    /**
     * Creates a plain object from a XmsgImOrgSyncSubRsp message. Also converts values to other types if specified.
     * @param message XmsgImOrgSyncSubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgSyncSubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgSyncSubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgSyncPubReq. */
export class XmsgImOrgSyncPubReq implements IXmsgImOrgSyncPubReq {

    /**
     * Constructs a new XmsgImOrgSyncPubReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgSyncPubReq);

    /** XmsgImOrgSyncPubReq event. */
    public event: IXmsgImOrgEvent[];

    /**
     * Creates a new XmsgImOrgSyncPubReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgSyncPubReq instance
     */
    public static create(properties?: IXmsgImOrgSyncPubReq): XmsgImOrgSyncPubReq;

    /**
     * Encodes the specified XmsgImOrgSyncPubReq message. Does not implicitly {@link XmsgImOrgSyncPubReq.verify|verify} messages.
     * @param message XmsgImOrgSyncPubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgSyncPubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgSyncPubReq message, length delimited. Does not implicitly {@link XmsgImOrgSyncPubReq.verify|verify} messages.
     * @param message XmsgImOrgSyncPubReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgSyncPubReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgSyncPubReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgSyncPubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgSyncPubReq;

    /**
     * Decodes a XmsgImOrgSyncPubReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgSyncPubReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgSyncPubReq;

    /**
     * Verifies a XmsgImOrgSyncPubReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgSyncPubReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgSyncPubReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgSyncPubReq;

    /**
     * Creates a plain object from a XmsgImOrgSyncPubReq message. Also converts values to other types if specified.
     * @param message XmsgImOrgSyncPubReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgSyncPubReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgSyncPubReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgSyncPubRsp. */
export class XmsgImOrgSyncPubRsp implements IXmsgImOrgSyncPubRsp {

    /**
     * Constructs a new XmsgImOrgSyncPubRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgSyncPubRsp);

    /** XmsgImOrgSyncPubRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImOrgSyncPubRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgSyncPubRsp instance
     */
    public static create(properties?: IXmsgImOrgSyncPubRsp): XmsgImOrgSyncPubRsp;

    /**
     * Encodes the specified XmsgImOrgSyncPubRsp message. Does not implicitly {@link XmsgImOrgSyncPubRsp.verify|verify} messages.
     * @param message XmsgImOrgSyncPubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgSyncPubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgSyncPubRsp message, length delimited. Does not implicitly {@link XmsgImOrgSyncPubRsp.verify|verify} messages.
     * @param message XmsgImOrgSyncPubRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgSyncPubRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgSyncPubRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgSyncPubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgSyncPubRsp;

    /**
     * Decodes a XmsgImOrgSyncPubRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgSyncPubRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgSyncPubRsp;

    /**
     * Verifies a XmsgImOrgSyncPubRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgSyncPubRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgSyncPubRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgSyncPubRsp;

    /**
     * Creates a plain object from a XmsgImOrgSyncPubRsp message. Also converts values to other types if specified.
     * @param message XmsgImOrgSyncPubRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgSyncPubRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgSyncPubRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgChangedNotice. */
export class XmsgImOrgChangedNotice implements IXmsgImOrgChangedNotice {

    /**
     * Constructs a new XmsgImOrgChangedNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgChangedNotice);

    /** XmsgImOrgChangedNotice event. */
    public event?: (IXmsgImOrgEvent|null);

    /**
     * Creates a new XmsgImOrgChangedNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgChangedNotice instance
     */
    public static create(properties?: IXmsgImOrgChangedNotice): XmsgImOrgChangedNotice;

    /**
     * Encodes the specified XmsgImOrgChangedNotice message. Does not implicitly {@link XmsgImOrgChangedNotice.verify|verify} messages.
     * @param message XmsgImOrgChangedNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgChangedNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgChangedNotice message, length delimited. Does not implicitly {@link XmsgImOrgChangedNotice.verify|verify} messages.
     * @param message XmsgImOrgChangedNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgChangedNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgChangedNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgChangedNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgChangedNotice;

    /**
     * Decodes a XmsgImOrgChangedNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgChangedNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgChangedNotice;

    /**
     * Verifies a XmsgImOrgChangedNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgChangedNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgChangedNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgChangedNotice;

    /**
     * Creates a plain object from a XmsgImOrgChangedNotice message. Also converts values to other types if specified.
     * @param message XmsgImOrgChangedNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgChangedNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgChangedNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeChildQueryReq. */
export class XmsgImOrgNodeChildQueryReq implements IXmsgImOrgNodeChildQueryReq {

    /**
     * Constructs a new XmsgImOrgNodeChildQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeChildQueryReq);

    /** XmsgImOrgNodeChildQueryReq cgt. */
    public cgt: string;

    /**
     * Creates a new XmsgImOrgNodeChildQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeChildQueryReq instance
     */
    public static create(properties?: IXmsgImOrgNodeChildQueryReq): XmsgImOrgNodeChildQueryReq;

    /**
     * Encodes the specified XmsgImOrgNodeChildQueryReq message. Does not implicitly {@link XmsgImOrgNodeChildQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeChildQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeChildQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeChildQueryReq message, length delimited. Does not implicitly {@link XmsgImOrgNodeChildQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeChildQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeChildQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeChildQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeChildQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeChildQueryReq;

    /**
     * Decodes a XmsgImOrgNodeChildQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeChildQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeChildQueryReq;

    /**
     * Verifies a XmsgImOrgNodeChildQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeChildQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeChildQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeChildQueryReq;

    /**
     * Creates a plain object from a XmsgImOrgNodeChildQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeChildQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeChildQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeChildQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeChildQueryRsp. */
export class XmsgImOrgNodeChildQueryRsp implements IXmsgImOrgNodeChildQueryRsp {

    /**
     * Constructs a new XmsgImOrgNodeChildQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeChildQueryRsp);

    /** XmsgImOrgNodeChildQueryRsp child. */
    public child: IXmsgImOrgNodeChild[];

    /**
     * Creates a new XmsgImOrgNodeChildQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeChildQueryRsp instance
     */
    public static create(properties?: IXmsgImOrgNodeChildQueryRsp): XmsgImOrgNodeChildQueryRsp;

    /**
     * Encodes the specified XmsgImOrgNodeChildQueryRsp message. Does not implicitly {@link XmsgImOrgNodeChildQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeChildQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeChildQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeChildQueryRsp message, length delimited. Does not implicitly {@link XmsgImOrgNodeChildQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeChildQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeChildQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeChildQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeChildQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeChildQueryRsp;

    /**
     * Decodes a XmsgImOrgNodeChildQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeChildQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeChildQueryRsp;

    /**
     * Verifies a XmsgImOrgNodeChildQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeChildQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeChildQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeChildQueryRsp;

    /**
     * Creates a plain object from a XmsgImOrgNodeChildQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeChildQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeChildQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeChildQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeDeptUsrQueryReq. */
export class XmsgImOrgNodeDeptUsrQueryReq implements IXmsgImOrgNodeDeptUsrQueryReq {

    /**
     * Constructs a new XmsgImOrgNodeDeptUsrQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeDeptUsrQueryReq);

    /** XmsgImOrgNodeDeptUsrQueryReq dcgt. */
    public dcgt: string;

    /** XmsgImOrgNodeDeptUsrQueryReq ucgt. */
    public ucgt: string;

    /**
     * Creates a new XmsgImOrgNodeDeptUsrQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeDeptUsrQueryReq instance
     */
    public static create(properties?: IXmsgImOrgNodeDeptUsrQueryReq): XmsgImOrgNodeDeptUsrQueryReq;

    /**
     * Encodes the specified XmsgImOrgNodeDeptUsrQueryReq message. Does not implicitly {@link XmsgImOrgNodeDeptUsrQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeDeptUsrQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeDeptUsrQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeDeptUsrQueryReq message, length delimited. Does not implicitly {@link XmsgImOrgNodeDeptUsrQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeDeptUsrQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeDeptUsrQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeDeptUsrQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeDeptUsrQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeDeptUsrQueryReq;

    /**
     * Decodes a XmsgImOrgNodeDeptUsrQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeDeptUsrQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeDeptUsrQueryReq;

    /**
     * Verifies a XmsgImOrgNodeDeptUsrQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeDeptUsrQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeDeptUsrQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeDeptUsrQueryReq;

    /**
     * Creates a plain object from a XmsgImOrgNodeDeptUsrQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeDeptUsrQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeDeptUsrQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeDeptUsrQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeDeptUsrQueryRsp. */
export class XmsgImOrgNodeDeptUsrQueryRsp implements IXmsgImOrgNodeDeptUsrQueryRsp {

    /**
     * Constructs a new XmsgImOrgNodeDeptUsrQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeDeptUsrQueryRsp);

    /** XmsgImOrgNodeDeptUsrQueryRsp name. */
    public name: string;

    /** XmsgImOrgNodeDeptUsrQueryRsp enable. */
    public enable: boolean;

    /** XmsgImOrgNodeDeptUsrQueryRsp info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgNodeDeptUsrQueryRsp ver. */
    public ver: (number|Long);

    /** XmsgImOrgNodeDeptUsrQueryRsp gts. */
    public gts: (number|Long);

    /** XmsgImOrgNodeDeptUsrQueryRsp uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgNodeDeptUsrQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeDeptUsrQueryRsp instance
     */
    public static create(properties?: IXmsgImOrgNodeDeptUsrQueryRsp): XmsgImOrgNodeDeptUsrQueryRsp;

    /**
     * Encodes the specified XmsgImOrgNodeDeptUsrQueryRsp message. Does not implicitly {@link XmsgImOrgNodeDeptUsrQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeDeptUsrQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeDeptUsrQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeDeptUsrQueryRsp message, length delimited. Does not implicitly {@link XmsgImOrgNodeDeptUsrQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeDeptUsrQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeDeptUsrQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeDeptUsrQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeDeptUsrQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeDeptUsrQueryRsp;

    /**
     * Decodes a XmsgImOrgNodeDeptUsrQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeDeptUsrQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeDeptUsrQueryRsp;

    /**
     * Verifies a XmsgImOrgNodeDeptUsrQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeDeptUsrQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeDeptUsrQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeDeptUsrQueryRsp;

    /**
     * Creates a plain object from a XmsgImOrgNodeDeptUsrQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeDeptUsrQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeDeptUsrQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeDeptUsrQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeQueryReq. */
export class XmsgImOrgNodeQueryReq implements IXmsgImOrgNodeQueryReq {

    /**
     * Constructs a new XmsgImOrgNodeQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeQueryReq);

    /** XmsgImOrgNodeQueryReq cgt. */
    public cgt: string;

    /**
     * Creates a new XmsgImOrgNodeQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeQueryReq instance
     */
    public static create(properties?: IXmsgImOrgNodeQueryReq): XmsgImOrgNodeQueryReq;

    /**
     * Encodes the specified XmsgImOrgNodeQueryReq message. Does not implicitly {@link XmsgImOrgNodeQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeQueryReq message, length delimited. Does not implicitly {@link XmsgImOrgNodeQueryReq.verify|verify} messages.
     * @param message XmsgImOrgNodeQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeQueryReq;

    /**
     * Decodes a XmsgImOrgNodeQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeQueryReq;

    /**
     * Verifies a XmsgImOrgNodeQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeQueryReq;

    /**
     * Creates a plain object from a XmsgImOrgNodeQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeQueryRsp. */
export class XmsgImOrgNodeQueryRsp implements IXmsgImOrgNodeQueryRsp {

    /**
     * Constructs a new XmsgImOrgNodeQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeQueryRsp);

    /** XmsgImOrgNodeQueryRsp pgt. */
    public pgt: string;

    /** XmsgImOrgNodeQueryRsp name. */
    public name: string;

    /** XmsgImOrgNodeQueryRsp enable. */
    public enable: boolean;

    /** XmsgImOrgNodeQueryRsp type. */
    public type: XmsgImOrgNodeType;

    /** XmsgImOrgNodeQueryRsp info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgNodeQueryRsp ver. */
    public ver: (number|Long);

    /** XmsgImOrgNodeQueryRsp gts. */
    public gts: (number|Long);

    /** XmsgImOrgNodeQueryRsp uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgNodeQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeQueryRsp instance
     */
    public static create(properties?: IXmsgImOrgNodeQueryRsp): XmsgImOrgNodeQueryRsp;

    /**
     * Encodes the specified XmsgImOrgNodeQueryRsp message. Does not implicitly {@link XmsgImOrgNodeQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeQueryRsp message, length delimited. Does not implicitly {@link XmsgImOrgNodeQueryRsp.verify|verify} messages.
     * @param message XmsgImOrgNodeQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeQueryRsp;

    /**
     * Decodes a XmsgImOrgNodeQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeQueryRsp;

    /**
     * Verifies a XmsgImOrgNodeQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeQueryRsp;

    /**
     * Creates a plain object from a XmsgImOrgNodeQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgEvent. */
export class XmsgImOrgEvent implements IXmsgImOrgEvent {

    /**
     * Constructs a new XmsgImOrgEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgEvent);

    /** XmsgImOrgEvent dept. */
    public dept?: (IXmsgImOrgEventDept|null);

    /** XmsgImOrgEvent deptUsr. */
    public deptUsr?: (IXmsgImOrgEventDeptUsr|null);

    /** XmsgImOrgEvent usr. */
    public usr?: (IXmsgImOrgEventUsr|null);

    /**
     * Creates a new XmsgImOrgEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgEvent instance
     */
    public static create(properties?: IXmsgImOrgEvent): XmsgImOrgEvent;

    /**
     * Encodes the specified XmsgImOrgEvent message. Does not implicitly {@link XmsgImOrgEvent.verify|verify} messages.
     * @param message XmsgImOrgEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgEvent message, length delimited. Does not implicitly {@link XmsgImOrgEvent.verify|verify} messages.
     * @param message XmsgImOrgEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgEvent;

    /**
     * Decodes a XmsgImOrgEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgEvent;

    /**
     * Verifies a XmsgImOrgEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgEvent
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgEvent;

    /**
     * Creates a plain object from a XmsgImOrgEvent message. Also converts values to other types if specified.
     * @param message XmsgImOrgEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgEventDept. */
export class XmsgImOrgEventDept implements IXmsgImOrgEventDept {

    /**
     * Constructs a new XmsgImOrgEventDept.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgEventDept);

    /** XmsgImOrgEventDept cgt. */
    public cgt: string;

    /** XmsgImOrgEventDept pcgt. */
    public pcgt: string;

    /** XmsgImOrgEventDept name. */
    public name: string;

    /** XmsgImOrgEventDept enable. */
    public enable: boolean;

    /** XmsgImOrgEventDept info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgEventDept ver. */
    public ver: (number|Long);

    /** XmsgImOrgEventDept gts. */
    public gts: (number|Long);

    /** XmsgImOrgEventDept uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgEventDept instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgEventDept instance
     */
    public static create(properties?: IXmsgImOrgEventDept): XmsgImOrgEventDept;

    /**
     * Encodes the specified XmsgImOrgEventDept message. Does not implicitly {@link XmsgImOrgEventDept.verify|verify} messages.
     * @param message XmsgImOrgEventDept message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgEventDept, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgEventDept message, length delimited. Does not implicitly {@link XmsgImOrgEventDept.verify|verify} messages.
     * @param message XmsgImOrgEventDept message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgEventDept, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgEventDept message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgEventDept
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgEventDept;

    /**
     * Decodes a XmsgImOrgEventDept message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgEventDept
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgEventDept;

    /**
     * Verifies a XmsgImOrgEventDept message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgEventDept message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgEventDept
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgEventDept;

    /**
     * Creates a plain object from a XmsgImOrgEventDept message. Also converts values to other types if specified.
     * @param message XmsgImOrgEventDept
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgEventDept, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgEventDept to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgEventDeptUsr. */
export class XmsgImOrgEventDeptUsr implements IXmsgImOrgEventDeptUsr {

    /**
     * Constructs a new XmsgImOrgEventDeptUsr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgEventDeptUsr);

    /** XmsgImOrgEventDeptUsr dcgt. */
    public dcgt: string;

    /** XmsgImOrgEventDeptUsr ucgt. */
    public ucgt: string;

    /** XmsgImOrgEventDeptUsr name. */
    public name: string;

    /** XmsgImOrgEventDeptUsr enable. */
    public enable: boolean;

    /** XmsgImOrgEventDeptUsr info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgEventDeptUsr ver. */
    public ver: (number|Long);

    /** XmsgImOrgEventDeptUsr gts. */
    public gts: (number|Long);

    /** XmsgImOrgEventDeptUsr uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgEventDeptUsr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgEventDeptUsr instance
     */
    public static create(properties?: IXmsgImOrgEventDeptUsr): XmsgImOrgEventDeptUsr;

    /**
     * Encodes the specified XmsgImOrgEventDeptUsr message. Does not implicitly {@link XmsgImOrgEventDeptUsr.verify|verify} messages.
     * @param message XmsgImOrgEventDeptUsr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgEventDeptUsr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgEventDeptUsr message, length delimited. Does not implicitly {@link XmsgImOrgEventDeptUsr.verify|verify} messages.
     * @param message XmsgImOrgEventDeptUsr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgEventDeptUsr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgEventDeptUsr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgEventDeptUsr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgEventDeptUsr;

    /**
     * Decodes a XmsgImOrgEventDeptUsr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgEventDeptUsr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgEventDeptUsr;

    /**
     * Verifies a XmsgImOrgEventDeptUsr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgEventDeptUsr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgEventDeptUsr
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgEventDeptUsr;

    /**
     * Creates a plain object from a XmsgImOrgEventDeptUsr message. Also converts values to other types if specified.
     * @param message XmsgImOrgEventDeptUsr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgEventDeptUsr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgEventDeptUsr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgEventUsr. */
export class XmsgImOrgEventUsr implements IXmsgImOrgEventUsr {

    /**
     * Constructs a new XmsgImOrgEventUsr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgEventUsr);

    /** XmsgImOrgEventUsr cgt. */
    public cgt: string;

    /** XmsgImOrgEventUsr name. */
    public name: string;

    /** XmsgImOrgEventUsr enable. */
    public enable: boolean;

    /** XmsgImOrgEventUsr info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgEventUsr ver. */
    public ver: (number|Long);

    /** XmsgImOrgEventUsr gts. */
    public gts: (number|Long);

    /** XmsgImOrgEventUsr uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgEventUsr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgEventUsr instance
     */
    public static create(properties?: IXmsgImOrgEventUsr): XmsgImOrgEventUsr;

    /**
     * Encodes the specified XmsgImOrgEventUsr message. Does not implicitly {@link XmsgImOrgEventUsr.verify|verify} messages.
     * @param message XmsgImOrgEventUsr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgEventUsr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgEventUsr message, length delimited. Does not implicitly {@link XmsgImOrgEventUsr.verify|verify} messages.
     * @param message XmsgImOrgEventUsr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgEventUsr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgEventUsr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgEventUsr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgEventUsr;

    /**
     * Decodes a XmsgImOrgEventUsr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgEventUsr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgEventUsr;

    /**
     * Verifies a XmsgImOrgEventUsr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgEventUsr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgEventUsr
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgEventUsr;

    /**
     * Creates a plain object from a XmsgImOrgEventUsr message. Also converts values to other types if specified.
     * @param message XmsgImOrgEventUsr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgEventUsr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgEventUsr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** XmsgImOrgNodeType enum. */
namespace XmsgImOrgNodeType {

    /** X_MSG_IM_ORG_NODE_TYPE__RESERVED__ value */
    let X_MSG_IM_ORG_NODE_TYPE__RESERVED__: number;

    /** X_MSG_IM_ORG_NODE_TYPE_BRANCH value */
    let X_MSG_IM_ORG_NODE_TYPE_BRANCH: number;

    /** X_MSG_IM_ORG_NODE_TYPE_LEAF value */
    let X_MSG_IM_ORG_NODE_TYPE_LEAF: number;
}

/** Represents a XmsgImOrgNodeInfo. */
export class XmsgImOrgNodeInfo implements IXmsgImOrgNodeInfo {

    /**
     * Constructs a new XmsgImOrgNodeInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeInfo);

    /** XmsgImOrgNodeInfo kv. */
    public kv: { [k: string]: string };

    /**
     * Creates a new XmsgImOrgNodeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeInfo instance
     */
    public static create(properties?: IXmsgImOrgNodeInfo): XmsgImOrgNodeInfo;

    /**
     * Encodes the specified XmsgImOrgNodeInfo message. Does not implicitly {@link XmsgImOrgNodeInfo.verify|verify} messages.
     * @param message XmsgImOrgNodeInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeInfo message, length delimited. Does not implicitly {@link XmsgImOrgNodeInfo.verify|verify} messages.
     * @param message XmsgImOrgNodeInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeInfo;

    /**
     * Decodes a XmsgImOrgNodeInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeInfo;

    /**
     * Verifies a XmsgImOrgNodeInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeInfo;

    /**
     * Creates a plain object from a XmsgImOrgNodeInfo message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImOrgNodeChild. */
export class XmsgImOrgNodeChild implements IXmsgImOrgNodeChild {

    /**
     * Constructs a new XmsgImOrgNodeChild.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImOrgNodeChild);

    /** XmsgImOrgNodeChild cgt. */
    public cgt: string;

    /** XmsgImOrgNodeChild name. */
    public name: string;

    /** XmsgImOrgNodeChild enable. */
    public enable: boolean;

    /** XmsgImOrgNodeChild type. */
    public type: XmsgImOrgNodeType;

    /** XmsgImOrgNodeChild info. */
    public info?: (IXmsgImOrgNodeInfo|null);

    /** XmsgImOrgNodeChild ver. */
    public ver: (number|Long);

    /** XmsgImOrgNodeChild gts. */
    public gts: (number|Long);

    /** XmsgImOrgNodeChild uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImOrgNodeChild instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImOrgNodeChild instance
     */
    public static create(properties?: IXmsgImOrgNodeChild): XmsgImOrgNodeChild;

    /**
     * Encodes the specified XmsgImOrgNodeChild message. Does not implicitly {@link XmsgImOrgNodeChild.verify|verify} messages.
     * @param message XmsgImOrgNodeChild message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImOrgNodeChild, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImOrgNodeChild message, length delimited. Does not implicitly {@link XmsgImOrgNodeChild.verify|verify} messages.
     * @param message XmsgImOrgNodeChild message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImOrgNodeChild, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImOrgNodeChild message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImOrgNodeChild
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImOrgNodeChild;

    /**
     * Decodes a XmsgImOrgNodeChild message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImOrgNodeChild
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImOrgNodeChild;

    /**
     * Verifies a XmsgImOrgNodeChild message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImOrgNodeChild message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImOrgNodeChild
     */
    public static fromObject(object: { [k: string]: any }): XmsgImOrgNodeChild;

    /**
     * Creates a plain object from a XmsgImOrgNodeChild message. Also converts values to other types if specified.
     * @param message XmsgImOrgNodeChild
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImOrgNodeChild, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImOrgNodeChild to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddDirectlyReq. */
export class XmsgImHlrContractsAddDirectlyReq implements IXmsgImHlrContractsAddDirectlyReq {

    /**
     * Constructs a new XmsgImHlrContractsAddDirectlyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddDirectlyReq);

    /** XmsgImHlrContractsAddDirectlyReq cgt. */
    public cgt: string;

    /** XmsgImHlrContractsAddDirectlyReq info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddDirectlyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddDirectlyReq instance
     */
    public static create(properties?: IXmsgImHlrContractsAddDirectlyReq): XmsgImHlrContractsAddDirectlyReq;

    /**
     * Encodes the specified XmsgImHlrContractsAddDirectlyReq message. Does not implicitly {@link XmsgImHlrContractsAddDirectlyReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddDirectlyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddDirectlyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddDirectlyReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddDirectlyReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddDirectlyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddDirectlyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddDirectlyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddDirectlyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddDirectlyReq;

    /**
     * Decodes a XmsgImHlrContractsAddDirectlyReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddDirectlyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddDirectlyReq;

    /**
     * Verifies a XmsgImHlrContractsAddDirectlyReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddDirectlyReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddDirectlyReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddDirectlyReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddDirectlyReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddDirectlyReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddDirectlyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddDirectlyReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddDirectlyRsp. */
export class XmsgImHlrContractsAddDirectlyRsp implements IXmsgImHlrContractsAddDirectlyRsp {

    /**
     * Constructs a new XmsgImHlrContractsAddDirectlyRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddDirectlyRsp);

    /** XmsgImHlrContractsAddDirectlyRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddDirectlyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddDirectlyRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsAddDirectlyRsp): XmsgImHlrContractsAddDirectlyRsp;

    /**
     * Encodes the specified XmsgImHlrContractsAddDirectlyRsp message. Does not implicitly {@link XmsgImHlrContractsAddDirectlyRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddDirectlyRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddDirectlyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddDirectlyRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddDirectlyRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddDirectlyRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddDirectlyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddDirectlyRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddDirectlyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddDirectlyRsp;

    /**
     * Decodes a XmsgImHlrContractsAddDirectlyRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddDirectlyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddDirectlyRsp;

    /**
     * Verifies a XmsgImHlrContractsAddDirectlyRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddDirectlyRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddDirectlyRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddDirectlyRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddDirectlyRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddDirectlyRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddDirectlyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddDirectlyRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddReq. */
export class XmsgImHlrContractsAddReq implements IXmsgImHlrContractsAddReq {

    /**
     * Constructs a new XmsgImHlrContractsAddReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddReq);

    /** XmsgImHlrContractsAddReq cgt. */
    public cgt: string;

    /**
     * Creates a new XmsgImHlrContractsAddReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddReq instance
     */
    public static create(properties?: IXmsgImHlrContractsAddReq): XmsgImHlrContractsAddReq;

    /**
     * Encodes the specified XmsgImHlrContractsAddReq message. Does not implicitly {@link XmsgImHlrContractsAddReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddReq;

    /**
     * Decodes a XmsgImHlrContractsAddReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddReq;

    /**
     * Verifies a XmsgImHlrContractsAddReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddRsp. */
export class XmsgImHlrContractsAddRsp implements IXmsgImHlrContractsAddRsp {

    /**
     * Constructs a new XmsgImHlrContractsAddRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddRsp);

    /** XmsgImHlrContractsAddRsp ver. */
    public ver: (number|Long);

    /** XmsgImHlrContractsAddRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsAddRsp): XmsgImHlrContractsAddRsp;

    /**
     * Encodes the specified XmsgImHlrContractsAddRsp message. Does not implicitly {@link XmsgImHlrContractsAddRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddRsp;

    /**
     * Decodes a XmsgImHlrContractsAddRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddRsp;

    /**
     * Verifies a XmsgImHlrContractsAddRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddNotice. */
export class XmsgImHlrContractsAddNotice implements IXmsgImHlrContractsAddNotice {

    /**
     * Constructs a new XmsgImHlrContractsAddNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddNotice);

    /** XmsgImHlrContractsAddNotice cgt. */
    public cgt: string;

    /** XmsgImHlrContractsAddNotice info. */
    public info: { [k: string]: string };

    /** XmsgImHlrContractsAddNotice ver. */
    public ver: (number|Long);

    /** XmsgImHlrContractsAddNotice gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgImHlrContractsAddNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddNotice instance
     */
    public static create(properties?: IXmsgImHlrContractsAddNotice): XmsgImHlrContractsAddNotice;

    /**
     * Encodes the specified XmsgImHlrContractsAddNotice message. Does not implicitly {@link XmsgImHlrContractsAddNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsAddNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddNotice message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsAddNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddNotice;

    /**
     * Decodes a XmsgImHlrContractsAddNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddNotice;

    /**
     * Verifies a XmsgImHlrContractsAddNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddNotice;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddReplyReq. */
export class XmsgImHlrContractsAddReplyReq implements IXmsgImHlrContractsAddReplyReq {

    /**
     * Constructs a new XmsgImHlrContractsAddReplyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddReplyReq);

    /** XmsgImHlrContractsAddReplyReq ver. */
    public ver: (number|Long);

    /** XmsgImHlrContractsAddReplyReq oper. */
    public oper: string;

    /** XmsgImHlrContractsAddReplyReq desc. */
    public desc: string;

    /** XmsgImHlrContractsAddReplyReq info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddReplyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddReplyReq instance
     */
    public static create(properties?: IXmsgImHlrContractsAddReplyReq): XmsgImHlrContractsAddReplyReq;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyReq message. Does not implicitly {@link XmsgImHlrContractsAddReplyReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddReplyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddReplyReq.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddReplyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddReplyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddReplyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddReplyReq;

    /**
     * Decodes a XmsgImHlrContractsAddReplyReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddReplyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddReplyReq;

    /**
     * Verifies a XmsgImHlrContractsAddReplyReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddReplyReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddReplyReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddReplyReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddReplyReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddReplyReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddReplyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddReplyReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddReplyRsp. */
export class XmsgImHlrContractsAddReplyRsp implements IXmsgImHlrContractsAddReplyRsp {

    /**
     * Constructs a new XmsgImHlrContractsAddReplyRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddReplyRsp);

    /** XmsgImHlrContractsAddReplyRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddReplyRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddReplyRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsAddReplyRsp): XmsgImHlrContractsAddReplyRsp;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyRsp message. Does not implicitly {@link XmsgImHlrContractsAddReplyRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddReplyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddReplyRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddReplyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddReplyRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddReplyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddReplyRsp;

    /**
     * Decodes a XmsgImHlrContractsAddReplyRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddReplyRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddReplyRsp;

    /**
     * Verifies a XmsgImHlrContractsAddReplyRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddReplyRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddReplyRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddReplyRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddReplyRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddReplyRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddReplyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddReplyRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsAddReplyNotice. */
export class XmsgImHlrContractsAddReplyNotice implements IXmsgImHlrContractsAddReplyNotice {

    /**
     * Constructs a new XmsgImHlrContractsAddReplyNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsAddReplyNotice);

    /** XmsgImHlrContractsAddReplyNotice cgt. */
    public cgt: string;

    /** XmsgImHlrContractsAddReplyNotice oper. */
    public oper: string;

    /** XmsgImHlrContractsAddReplyNotice desc. */
    public desc: string;

    /** XmsgImHlrContractsAddReplyNotice ver. */
    public ver: (number|Long);

    /** XmsgImHlrContractsAddReplyNotice ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsAddReplyNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsAddReplyNotice instance
     */
    public static create(properties?: IXmsgImHlrContractsAddReplyNotice): XmsgImHlrContractsAddReplyNotice;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyNotice message. Does not implicitly {@link XmsgImHlrContractsAddReplyNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsAddReplyNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsAddReplyNotice message, length delimited. Does not implicitly {@link XmsgImHlrContractsAddReplyNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsAddReplyNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsAddReplyNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsAddReplyNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsAddReplyNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsAddReplyNotice;

    /**
     * Decodes a XmsgImHlrContractsAddReplyNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsAddReplyNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsAddReplyNotice;

    /**
     * Verifies a XmsgImHlrContractsAddReplyNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsAddReplyNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsAddReplyNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsAddReplyNotice;

    /**
     * Creates a plain object from a XmsgImHlrContractsAddReplyNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsAddReplyNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsAddReplyNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsAddReplyNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsDelReq. */
export class XmsgImHlrContractsDelReq implements IXmsgImHlrContractsDelReq {

    /**
     * Constructs a new XmsgImHlrContractsDelReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsDelReq);

    /** XmsgImHlrContractsDelReq cgt. */
    public cgt: string;

    /** XmsgImHlrContractsDelReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsDelReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsDelReq instance
     */
    public static create(properties?: IXmsgImHlrContractsDelReq): XmsgImHlrContractsDelReq;

    /**
     * Encodes the specified XmsgImHlrContractsDelReq message. Does not implicitly {@link XmsgImHlrContractsDelReq.verify|verify} messages.
     * @param message XmsgImHlrContractsDelReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsDelReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsDelReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsDelReq.verify|verify} messages.
     * @param message XmsgImHlrContractsDelReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsDelReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsDelReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsDelReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsDelReq;

    /**
     * Decodes a XmsgImHlrContractsDelReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsDelReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsDelReq;

    /**
     * Verifies a XmsgImHlrContractsDelReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsDelReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsDelReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsDelReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsDelReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsDelReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsDelReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsDelReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsDelRsp. */
export class XmsgImHlrContractsDelRsp implements IXmsgImHlrContractsDelRsp {

    /**
     * Constructs a new XmsgImHlrContractsDelRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsDelRsp);

    /** XmsgImHlrContractsDelRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsDelRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsDelRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsDelRsp): XmsgImHlrContractsDelRsp;

    /**
     * Encodes the specified XmsgImHlrContractsDelRsp message. Does not implicitly {@link XmsgImHlrContractsDelRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsDelRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsDelRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsDelRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsDelRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsDelRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsDelRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsDelRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsDelRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsDelRsp;

    /**
     * Decodes a XmsgImHlrContractsDelRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsDelRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsDelRsp;

    /**
     * Verifies a XmsgImHlrContractsDelRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsDelRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsDelRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsDelRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsDelRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsDelRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsDelRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsDelRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsDelNotice. */
export class XmsgImHlrContractsDelNotice implements IXmsgImHlrContractsDelNotice {

    /**
     * Constructs a new XmsgImHlrContractsDelNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsDelNotice);

    /** XmsgImHlrContractsDelNotice cgt. */
    public cgt: string;

    /**
     * Creates a new XmsgImHlrContractsDelNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsDelNotice instance
     */
    public static create(properties?: IXmsgImHlrContractsDelNotice): XmsgImHlrContractsDelNotice;

    /**
     * Encodes the specified XmsgImHlrContractsDelNotice message. Does not implicitly {@link XmsgImHlrContractsDelNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsDelNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsDelNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsDelNotice message, length delimited. Does not implicitly {@link XmsgImHlrContractsDelNotice.verify|verify} messages.
     * @param message XmsgImHlrContractsDelNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsDelNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsDelNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsDelNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsDelNotice;

    /**
     * Decodes a XmsgImHlrContractsDelNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsDelNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsDelNotice;

    /**
     * Verifies a XmsgImHlrContractsDelNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsDelNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsDelNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsDelNotice;

    /**
     * Creates a plain object from a XmsgImHlrContractsDelNotice message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsDelNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsDelNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsDelNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsUpdateInfoReq. */
export class XmsgImHlrContractsUpdateInfoReq implements IXmsgImHlrContractsUpdateInfoReq {

    /**
     * Constructs a new XmsgImHlrContractsUpdateInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsUpdateInfoReq);

    /** XmsgImHlrContractsUpdateInfoReq cgt. */
    public cgt: string;

    /** XmsgImHlrContractsUpdateInfoReq upsert. */
    public upsert: { [k: string]: string };

    /** XmsgImHlrContractsUpdateInfoReq remove. */
    public remove: string[];

    /**
     * Creates a new XmsgImHlrContractsUpdateInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsUpdateInfoReq instance
     */
    public static create(properties?: IXmsgImHlrContractsUpdateInfoReq): XmsgImHlrContractsUpdateInfoReq;

    /**
     * Encodes the specified XmsgImHlrContractsUpdateInfoReq message. Does not implicitly {@link XmsgImHlrContractsUpdateInfoReq.verify|verify} messages.
     * @param message XmsgImHlrContractsUpdateInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsUpdateInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsUpdateInfoReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsUpdateInfoReq.verify|verify} messages.
     * @param message XmsgImHlrContractsUpdateInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsUpdateInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsUpdateInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsUpdateInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsUpdateInfoReq;

    /**
     * Decodes a XmsgImHlrContractsUpdateInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsUpdateInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsUpdateInfoReq;

    /**
     * Verifies a XmsgImHlrContractsUpdateInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsUpdateInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsUpdateInfoReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsUpdateInfoReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsUpdateInfoReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsUpdateInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsUpdateInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsUpdateInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsUpdateInfoRsp. */
export class XmsgImHlrContractsUpdateInfoRsp implements IXmsgImHlrContractsUpdateInfoRsp {

    /**
     * Constructs a new XmsgImHlrContractsUpdateInfoRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsUpdateInfoRsp);

    /** XmsgImHlrContractsUpdateInfoRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsUpdateInfoRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsUpdateInfoRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsUpdateInfoRsp): XmsgImHlrContractsUpdateInfoRsp;

    /**
     * Encodes the specified XmsgImHlrContractsUpdateInfoRsp message. Does not implicitly {@link XmsgImHlrContractsUpdateInfoRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsUpdateInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsUpdateInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsUpdateInfoRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsUpdateInfoRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsUpdateInfoRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsUpdateInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsUpdateInfoRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsUpdateInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsUpdateInfoRsp;

    /**
     * Decodes a XmsgImHlrContractsUpdateInfoRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsUpdateInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsUpdateInfoRsp;

    /**
     * Verifies a XmsgImHlrContractsUpdateInfoRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsUpdateInfoRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsUpdateInfoRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsUpdateInfoRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsUpdateInfoRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsUpdateInfoRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsUpdateInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsUpdateInfoRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsSearchReq. */
export class XmsgImHlrContractsSearchReq implements IXmsgImHlrContractsSearchReq {

    /**
     * Constructs a new XmsgImHlrContractsSearchReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsSearchReq);

    /** XmsgImHlrContractsSearchReq keyword. */
    public keyword: string;

    /** XmsgImHlrContractsSearchReq hint. */
    public hint: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsSearchReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsSearchReq instance
     */
    public static create(properties?: IXmsgImHlrContractsSearchReq): XmsgImHlrContractsSearchReq;

    /**
     * Encodes the specified XmsgImHlrContractsSearchReq message. Does not implicitly {@link XmsgImHlrContractsSearchReq.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsSearchReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsSearchReq message, length delimited. Does not implicitly {@link XmsgImHlrContractsSearchReq.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsSearchReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsSearchReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsSearchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsSearchReq;

    /**
     * Decodes a XmsgImHlrContractsSearchReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsSearchReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsSearchReq;

    /**
     * Verifies a XmsgImHlrContractsSearchReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsSearchReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsSearchReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsSearchReq;

    /**
     * Creates a plain object from a XmsgImHlrContractsSearchReq message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsSearchReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsSearchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsSearchReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsSearchRsp. */
export class XmsgImHlrContractsSearchRsp implements IXmsgImHlrContractsSearchRsp {

    /**
     * Constructs a new XmsgImHlrContractsSearchRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsSearchRsp);

    /** XmsgImHlrContractsSearchRsp rst. */
    public rst: IXmsgImHlrContractsSearchRst[];

    /**
     * Creates a new XmsgImHlrContractsSearchRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsSearchRsp instance
     */
    public static create(properties?: IXmsgImHlrContractsSearchRsp): XmsgImHlrContractsSearchRsp;

    /**
     * Encodes the specified XmsgImHlrContractsSearchRsp message. Does not implicitly {@link XmsgImHlrContractsSearchRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsSearchRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsSearchRsp message, length delimited. Does not implicitly {@link XmsgImHlrContractsSearchRsp.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsSearchRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsSearchRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsSearchRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsSearchRsp;

    /**
     * Decodes a XmsgImHlrContractsSearchRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsSearchRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsSearchRsp;

    /**
     * Verifies a XmsgImHlrContractsSearchRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsSearchRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsSearchRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsSearchRsp;

    /**
     * Creates a plain object from a XmsgImHlrContractsSearchRsp message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsSearchRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsSearchRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsSearchRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImHlrContractsSearchRst. */
export class XmsgImHlrContractsSearchRst implements IXmsgImHlrContractsSearchRst {

    /**
     * Constructs a new XmsgImHlrContractsSearchRst.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImHlrContractsSearchRst);

    /** XmsgImHlrContractsSearchRst cgt. */
    public cgt: string;

    /** XmsgImHlrContractsSearchRst name. */
    public name: string;

    /** XmsgImHlrContractsSearchRst info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImHlrContractsSearchRst instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImHlrContractsSearchRst instance
     */
    public static create(properties?: IXmsgImHlrContractsSearchRst): XmsgImHlrContractsSearchRst;

    /**
     * Encodes the specified XmsgImHlrContractsSearchRst message. Does not implicitly {@link XmsgImHlrContractsSearchRst.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchRst message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImHlrContractsSearchRst, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImHlrContractsSearchRst message, length delimited. Does not implicitly {@link XmsgImHlrContractsSearchRst.verify|verify} messages.
     * @param message XmsgImHlrContractsSearchRst message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImHlrContractsSearchRst, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImHlrContractsSearchRst message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImHlrContractsSearchRst
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImHlrContractsSearchRst;

    /**
     * Decodes a XmsgImHlrContractsSearchRst message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImHlrContractsSearchRst
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImHlrContractsSearchRst;

    /**
     * Verifies a XmsgImHlrContractsSearchRst message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImHlrContractsSearchRst message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImHlrContractsSearchRst
     */
    public static fromObject(object: { [k: string]: any }): XmsgImHlrContractsSearchRst;

    /**
     * Creates a plain object from a XmsgImHlrContractsSearchRst message. Also converts values to other types if specified.
     * @param message XmsgImHlrContractsSearchRst
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImHlrContractsSearchRst, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImHlrContractsSearchRst to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupUsrGroupQueryReq. */
export class XmsgImGroupUsrGroupQueryReq implements IXmsgImGroupUsrGroupQueryReq {

    /**
     * Constructs a new XmsgImGroupUsrGroupQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupUsrGroupQueryReq);

    /** XmsgImGroupUsrGroupQueryReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupUsrGroupQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupUsrGroupQueryReq instance
     */
    public static create(properties?: IXmsgImGroupUsrGroupQueryReq): XmsgImGroupUsrGroupQueryReq;

    /**
     * Encodes the specified XmsgImGroupUsrGroupQueryReq message. Does not implicitly {@link XmsgImGroupUsrGroupQueryReq.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupUsrGroupQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupUsrGroupQueryReq message, length delimited. Does not implicitly {@link XmsgImGroupUsrGroupQueryReq.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupUsrGroupQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupUsrGroupQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupUsrGroupQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupUsrGroupQueryReq;

    /**
     * Decodes a XmsgImGroupUsrGroupQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupUsrGroupQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupUsrGroupQueryReq;

    /**
     * Verifies a XmsgImGroupUsrGroupQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupUsrGroupQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupUsrGroupQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupUsrGroupQueryReq;

    /**
     * Creates a plain object from a XmsgImGroupUsrGroupQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupUsrGroupQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupUsrGroupQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupUsrGroupQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupUsrGroupQueryRsp. */
export class XmsgImGroupUsrGroupQueryRsp implements IXmsgImGroupUsrGroupQueryRsp {

    /**
     * Constructs a new XmsgImGroupUsrGroupQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupUsrGroupQueryRsp);

    /** XmsgImGroupUsrGroupQueryRsp group. */
    public group: IXmsgImGroupUsrGroupInfo[];

    /**
     * Creates a new XmsgImGroupUsrGroupQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupUsrGroupQueryRsp instance
     */
    public static create(properties?: IXmsgImGroupUsrGroupQueryRsp): XmsgImGroupUsrGroupQueryRsp;

    /**
     * Encodes the specified XmsgImGroupUsrGroupQueryRsp message. Does not implicitly {@link XmsgImGroupUsrGroupQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupUsrGroupQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupUsrGroupQueryRsp message, length delimited. Does not implicitly {@link XmsgImGroupUsrGroupQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupUsrGroupQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupUsrGroupQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupUsrGroupQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupUsrGroupQueryRsp;

    /**
     * Decodes a XmsgImGroupUsrGroupQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupUsrGroupQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupUsrGroupQueryRsp;

    /**
     * Verifies a XmsgImGroupUsrGroupQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupUsrGroupQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupUsrGroupQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupUsrGroupQueryRsp;

    /**
     * Creates a plain object from a XmsgImGroupUsrGroupQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupUsrGroupQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupUsrGroupQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupUsrGroupQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupUsrGroupInfo. */
export class XmsgImGroupUsrGroupInfo implements IXmsgImGroupUsrGroupInfo {

    /**
     * Constructs a new XmsgImGroupUsrGroupInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupUsrGroupInfo);

    /** XmsgImGroupUsrGroupInfo cgt. */
    public cgt: string;

    /** XmsgImGroupUsrGroupInfo name. */
    public name: string;

    /** XmsgImGroupUsrGroupInfo info. */
    public info: { [k: string]: string };

    /** XmsgImGroupUsrGroupInfo ver. */
    public ver: (number|Long);

    /** XmsgImGroupUsrGroupInfo gts. */
    public gts: (number|Long);

    /** XmsgImGroupUsrGroupInfo uts. */
    public uts: (number|Long);

    /** XmsgImGroupUsrGroupInfo usr2usr. */
    public usr2usr: boolean;

    /**
     * Creates a new XmsgImGroupUsrGroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupUsrGroupInfo instance
     */
    public static create(properties?: IXmsgImGroupUsrGroupInfo): XmsgImGroupUsrGroupInfo;

    /**
     * Encodes the specified XmsgImGroupUsrGroupInfo message. Does not implicitly {@link XmsgImGroupUsrGroupInfo.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupUsrGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupUsrGroupInfo message, length delimited. Does not implicitly {@link XmsgImGroupUsrGroupInfo.verify|verify} messages.
     * @param message XmsgImGroupUsrGroupInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupUsrGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupUsrGroupInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupUsrGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupUsrGroupInfo;

    /**
     * Decodes a XmsgImGroupUsrGroupInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupUsrGroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupUsrGroupInfo;

    /**
     * Verifies a XmsgImGroupUsrGroupInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupUsrGroupInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupUsrGroupInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupUsrGroupInfo;

    /**
     * Creates a plain object from a XmsgImGroupUsrGroupInfo message. Also converts values to other types if specified.
     * @param message XmsgImGroupUsrGroupInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupUsrGroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupUsrGroupInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupCreateReq. */
export class XmsgImGroupCreateReq implements IXmsgImGroupCreateReq {

    /**
     * Constructs a new XmsgImGroupCreateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupCreateReq);

    /** XmsgImGroupCreateReq info. */
    public info: { [k: string]: string };

    /** XmsgImGroupCreateReq member. */
    public member: IXmsgImGroupAddMember[];

    /**
     * Creates a new XmsgImGroupCreateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupCreateReq instance
     */
    public static create(properties?: IXmsgImGroupCreateReq): XmsgImGroupCreateReq;

    /**
     * Encodes the specified XmsgImGroupCreateReq message. Does not implicitly {@link XmsgImGroupCreateReq.verify|verify} messages.
     * @param message XmsgImGroupCreateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupCreateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupCreateReq message, length delimited. Does not implicitly {@link XmsgImGroupCreateReq.verify|verify} messages.
     * @param message XmsgImGroupCreateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupCreateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupCreateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupCreateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupCreateReq;

    /**
     * Decodes a XmsgImGroupCreateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupCreateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupCreateReq;

    /**
     * Verifies a XmsgImGroupCreateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupCreateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupCreateReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupCreateReq;

    /**
     * Creates a plain object from a XmsgImGroupCreateReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupCreateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupCreateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupCreateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupCreateRsp. */
export class XmsgImGroupCreateRsp implements IXmsgImGroupCreateRsp {

    /**
     * Constructs a new XmsgImGroupCreateRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupCreateRsp);

    /** XmsgImGroupCreateRsp cgt. */
    public cgt: string;

    /** XmsgImGroupCreateRsp gts. */
    public gts: (number|Long);

    /**
     * Creates a new XmsgImGroupCreateRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupCreateRsp instance
     */
    public static create(properties?: IXmsgImGroupCreateRsp): XmsgImGroupCreateRsp;

    /**
     * Encodes the specified XmsgImGroupCreateRsp message. Does not implicitly {@link XmsgImGroupCreateRsp.verify|verify} messages.
     * @param message XmsgImGroupCreateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupCreateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupCreateRsp message, length delimited. Does not implicitly {@link XmsgImGroupCreateRsp.verify|verify} messages.
     * @param message XmsgImGroupCreateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupCreateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupCreateRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupCreateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupCreateRsp;

    /**
     * Decodes a XmsgImGroupCreateRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupCreateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupCreateRsp;

    /**
     * Verifies a XmsgImGroupCreateRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupCreateRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupCreateRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupCreateRsp;

    /**
     * Creates a plain object from a XmsgImGroupCreateRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupCreateRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupCreateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupCreateRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupAddMember. */
export class XmsgImGroupAddMember implements IXmsgImGroupAddMember {

    /**
     * Constructs a new XmsgImGroupAddMember.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupAddMember);

    /** XmsgImGroupAddMember cgt. */
    public cgt: string;

    /** XmsgImGroupAddMember info. */
    public info: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupAddMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupAddMember instance
     */
    public static create(properties?: IXmsgImGroupAddMember): XmsgImGroupAddMember;

    /**
     * Encodes the specified XmsgImGroupAddMember message. Does not implicitly {@link XmsgImGroupAddMember.verify|verify} messages.
     * @param message XmsgImGroupAddMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupAddMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupAddMember message, length delimited. Does not implicitly {@link XmsgImGroupAddMember.verify|verify} messages.
     * @param message XmsgImGroupAddMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupAddMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupAddMember message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupAddMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupAddMember;

    /**
     * Decodes a XmsgImGroupAddMember message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupAddMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupAddMember;

    /**
     * Verifies a XmsgImGroupAddMember message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupAddMember message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupAddMember
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupAddMember;

    /**
     * Creates a plain object from a XmsgImGroupAddMember message. Also converts values to other types if specified.
     * @param message XmsgImGroupAddMember
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupAddMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupAddMember to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncReq. */
export class XmsgImGroupSyncReq implements IXmsgImGroupSyncReq {

    /**
     * Constructs a new XmsgImGroupSyncReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncReq);

    /** XmsgImGroupSyncReq ver4usr. */
    public ver4usr: (number|Long);

    /** XmsgImGroupSyncReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupSyncReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncReq instance
     */
    public static create(properties?: IXmsgImGroupSyncReq): XmsgImGroupSyncReq;

    /**
     * Encodes the specified XmsgImGroupSyncReq message. Does not implicitly {@link XmsgImGroupSyncReq.verify|verify} messages.
     * @param message XmsgImGroupSyncReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncReq message, length delimited. Does not implicitly {@link XmsgImGroupSyncReq.verify|verify} messages.
     * @param message XmsgImGroupSyncReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncReq;

    /**
     * Decodes a XmsgImGroupSyncReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncReq;

    /**
     * Verifies a XmsgImGroupSyncReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncReq;

    /**
     * Creates a plain object from a XmsgImGroupSyncReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncRsp. */
export class XmsgImGroupSyncRsp implements IXmsgImGroupSyncRsp {

    /**
     * Constructs a new XmsgImGroupSyncRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncRsp);

    /** XmsgImGroupSyncRsp event. */
    public event: IXmsgImGroupSyncEvent[];

    /**
     * Creates a new XmsgImGroupSyncRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncRsp instance
     */
    public static create(properties?: IXmsgImGroupSyncRsp): XmsgImGroupSyncRsp;

    /**
     * Encodes the specified XmsgImGroupSyncRsp message. Does not implicitly {@link XmsgImGroupSyncRsp.verify|verify} messages.
     * @param message XmsgImGroupSyncRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncRsp message, length delimited. Does not implicitly {@link XmsgImGroupSyncRsp.verify|verify} messages.
     * @param message XmsgImGroupSyncRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncRsp;

    /**
     * Decodes a XmsgImGroupSyncRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncRsp;

    /**
     * Verifies a XmsgImGroupSyncRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncRsp;

    /**
     * Creates a plain object from a XmsgImGroupSyncRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncEvent. */
export class XmsgImGroupSyncEvent implements IXmsgImGroupSyncEvent {

    /**
     * Constructs a new XmsgImGroupSyncEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncEvent);

    /** XmsgImGroupSyncEvent cgt. */
    public cgt: string;

    /** XmsgImGroupSyncEvent oper. */
    public oper: string;

    /** XmsgImGroupSyncEvent info. */
    public info: { [k: string]: string };

    /** XmsgImGroupSyncEvent ver4usr. */
    public ver4usr: (number|Long);

    /** XmsgImGroupSyncEvent gts4usr. */
    public gts4usr: (number|Long);

    /** XmsgImGroupSyncEvent uts4usr. */
    public uts4usr: (number|Long);

    /** XmsgImGroupSyncEvent gts4group. */
    public gts4group: (number|Long);

    /**
     * Creates a new XmsgImGroupSyncEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncEvent instance
     */
    public static create(properties?: IXmsgImGroupSyncEvent): XmsgImGroupSyncEvent;

    /**
     * Encodes the specified XmsgImGroupSyncEvent message. Does not implicitly {@link XmsgImGroupSyncEvent.verify|verify} messages.
     * @param message XmsgImGroupSyncEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncEvent message, length delimited. Does not implicitly {@link XmsgImGroupSyncEvent.verify|verify} messages.
     * @param message XmsgImGroupSyncEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncEvent;

    /**
     * Decodes a XmsgImGroupSyncEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncEvent;

    /**
     * Verifies a XmsgImGroupSyncEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncEvent
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncEvent;

    /**
     * Creates a plain object from a XmsgImGroupSyncEvent message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncNotice. */
export class XmsgImGroupSyncNotice implements IXmsgImGroupSyncNotice {

    /**
     * Constructs a new XmsgImGroupSyncNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncNotice);

    /** XmsgImGroupSyncNotice event. */
    public event?: (IXmsgImGroupSyncEvent|null);

    /**
     * Creates a new XmsgImGroupSyncNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncNotice instance
     */
    public static create(properties?: IXmsgImGroupSyncNotice): XmsgImGroupSyncNotice;

    /**
     * Encodes the specified XmsgImGroupSyncNotice message. Does not implicitly {@link XmsgImGroupSyncNotice.verify|verify} messages.
     * @param message XmsgImGroupSyncNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncNotice message, length delimited. Does not implicitly {@link XmsgImGroupSyncNotice.verify|verify} messages.
     * @param message XmsgImGroupSyncNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncNotice;

    /**
     * Decodes a XmsgImGroupSyncNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncNotice;

    /**
     * Verifies a XmsgImGroupSyncNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncNotice;

    /**
     * Creates a plain object from a XmsgImGroupSyncNotice message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncGroupReq. */
export class XmsgImGroupSyncGroupReq implements IXmsgImGroupSyncGroupReq {

    /**
     * Constructs a new XmsgImGroupSyncGroupReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncGroupReq);

    /** XmsgImGroupSyncGroupReq cgt. */
    public cgt: string;

    /** XmsgImGroupSyncGroupReq ver. */
    public ver: (number|Long);

    /** XmsgImGroupSyncGroupReq ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupSyncGroupReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncGroupReq instance
     */
    public static create(properties?: IXmsgImGroupSyncGroupReq): XmsgImGroupSyncGroupReq;

    /**
     * Encodes the specified XmsgImGroupSyncGroupReq message. Does not implicitly {@link XmsgImGroupSyncGroupReq.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncGroupReq message, length delimited. Does not implicitly {@link XmsgImGroupSyncGroupReq.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncGroupReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncGroupReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncGroupReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncGroupReq;

    /**
     * Decodes a XmsgImGroupSyncGroupReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncGroupReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncGroupReq;

    /**
     * Verifies a XmsgImGroupSyncGroupReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncGroupReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncGroupReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncGroupReq;

    /**
     * Creates a plain object from a XmsgImGroupSyncGroupReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncGroupReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncGroupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncGroupReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncGroupRsp. */
export class XmsgImGroupSyncGroupRsp implements IXmsgImGroupSyncGroupRsp {

    /**
     * Constructs a new XmsgImGroupSyncGroupRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncGroupRsp);

    /** XmsgImGroupSyncGroupRsp info. */
    public info?: (IXmsgImGroupSyncGroupEventInfo|null);

    /** XmsgImGroupSyncGroupRsp member. */
    public member: IXmsgImGroupSyncGroupEventMember[];

    /**
     * Creates a new XmsgImGroupSyncGroupRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncGroupRsp instance
     */
    public static create(properties?: IXmsgImGroupSyncGroupRsp): XmsgImGroupSyncGroupRsp;

    /**
     * Encodes the specified XmsgImGroupSyncGroupRsp message. Does not implicitly {@link XmsgImGroupSyncGroupRsp.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncGroupRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncGroupRsp message, length delimited. Does not implicitly {@link XmsgImGroupSyncGroupRsp.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncGroupRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncGroupRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncGroupRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncGroupRsp;

    /**
     * Decodes a XmsgImGroupSyncGroupRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncGroupRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncGroupRsp;

    /**
     * Verifies a XmsgImGroupSyncGroupRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncGroupRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncGroupRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncGroupRsp;

    /**
     * Creates a plain object from a XmsgImGroupSyncGroupRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncGroupRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncGroupRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncGroupRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncGroupEventInfo. */
export class XmsgImGroupSyncGroupEventInfo implements IXmsgImGroupSyncGroupEventInfo {

    /**
     * Constructs a new XmsgImGroupSyncGroupEventInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncGroupEventInfo);

    /** XmsgImGroupSyncGroupEventInfo info. */
    public info: { [k: string]: string };

    /** XmsgImGroupSyncGroupEventInfo ver. */
    public ver: (number|Long);

    /** XmsgImGroupSyncGroupEventInfo gts. */
    public gts: (number|Long);

    /** XmsgImGroupSyncGroupEventInfo uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImGroupSyncGroupEventInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncGroupEventInfo instance
     */
    public static create(properties?: IXmsgImGroupSyncGroupEventInfo): XmsgImGroupSyncGroupEventInfo;

    /**
     * Encodes the specified XmsgImGroupSyncGroupEventInfo message. Does not implicitly {@link XmsgImGroupSyncGroupEventInfo.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupEventInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncGroupEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncGroupEventInfo message, length delimited. Does not implicitly {@link XmsgImGroupSyncGroupEventInfo.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupEventInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncGroupEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncGroupEventInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncGroupEventInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncGroupEventInfo;

    /**
     * Decodes a XmsgImGroupSyncGroupEventInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncGroupEventInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncGroupEventInfo;

    /**
     * Verifies a XmsgImGroupSyncGroupEventInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncGroupEventInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncGroupEventInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncGroupEventInfo;

    /**
     * Creates a plain object from a XmsgImGroupSyncGroupEventInfo message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncGroupEventInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncGroupEventInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncGroupEventInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupSyncGroupEventMember. */
export class XmsgImGroupSyncGroupEventMember implements IXmsgImGroupSyncGroupEventMember {

    /**
     * Constructs a new XmsgImGroupSyncGroupEventMember.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupSyncGroupEventMember);

    /** XmsgImGroupSyncGroupEventMember cgt. */
    public cgt: string;

    /** XmsgImGroupSyncGroupEventMember oper. */
    public oper: string;

    /** XmsgImGroupSyncGroupEventMember info. */
    public info: { [k: string]: string };

    /** XmsgImGroupSyncGroupEventMember ver. */
    public ver: (number|Long);

    /** XmsgImGroupSyncGroupEventMember gts. */
    public gts: (number|Long);

    /** XmsgImGroupSyncGroupEventMember uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImGroupSyncGroupEventMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupSyncGroupEventMember instance
     */
    public static create(properties?: IXmsgImGroupSyncGroupEventMember): XmsgImGroupSyncGroupEventMember;

    /**
     * Encodes the specified XmsgImGroupSyncGroupEventMember message. Does not implicitly {@link XmsgImGroupSyncGroupEventMember.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupEventMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupSyncGroupEventMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupSyncGroupEventMember message, length delimited. Does not implicitly {@link XmsgImGroupSyncGroupEventMember.verify|verify} messages.
     * @param message XmsgImGroupSyncGroupEventMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupSyncGroupEventMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupSyncGroupEventMember message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupSyncGroupEventMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupSyncGroupEventMember;

    /**
     * Decodes a XmsgImGroupSyncGroupEventMember message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupSyncGroupEventMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupSyncGroupEventMember;

    /**
     * Verifies a XmsgImGroupSyncGroupEventMember message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupSyncGroupEventMember message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupSyncGroupEventMember
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupSyncGroupEventMember;

    /**
     * Creates a plain object from a XmsgImGroupSyncGroupEventMember message. Also converts values to other types if specified.
     * @param message XmsgImGroupSyncGroupEventMember
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupSyncGroupEventMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupSyncGroupEventMember to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupEventNotice. */
export class XmsgImGroupEventNotice implements IXmsgImGroupEventNotice {

    /**
     * Constructs a new XmsgImGroupEventNotice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupEventNotice);

    /** XmsgImGroupEventNotice info. */
    public info?: (IXmsgImGroupSyncGroupEventInfo|null);

    /** XmsgImGroupEventNotice member. */
    public member?: (IXmsgImGroupSyncGroupEventMember|null);

    /**
     * Creates a new XmsgImGroupEventNotice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupEventNotice instance
     */
    public static create(properties?: IXmsgImGroupEventNotice): XmsgImGroupEventNotice;

    /**
     * Encodes the specified XmsgImGroupEventNotice message. Does not implicitly {@link XmsgImGroupEventNotice.verify|verify} messages.
     * @param message XmsgImGroupEventNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupEventNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupEventNotice message, length delimited. Does not implicitly {@link XmsgImGroupEventNotice.verify|verify} messages.
     * @param message XmsgImGroupEventNotice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupEventNotice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupEventNotice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupEventNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupEventNotice;

    /**
     * Decodes a XmsgImGroupEventNotice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupEventNotice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupEventNotice;

    /**
     * Verifies a XmsgImGroupEventNotice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupEventNotice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupEventNotice
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupEventNotice;

    /**
     * Creates a plain object from a XmsgImGroupEventNotice message. Also converts values to other types if specified.
     * @param message XmsgImGroupEventNotice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupEventNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupEventNotice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoQueryReq. */
export class XmsgImGroupInfoQueryReq implements IXmsgImGroupInfoQueryReq {

    /**
     * Constructs a new XmsgImGroupInfoQueryReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoQueryReq);

    /** XmsgImGroupInfoQueryReq cgt. */
    public cgt: string;

    /** XmsgImGroupInfoQueryReq member. */
    public member: boolean;

    /**
     * Creates a new XmsgImGroupInfoQueryReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoQueryReq instance
     */
    public static create(properties?: IXmsgImGroupInfoQueryReq): XmsgImGroupInfoQueryReq;

    /**
     * Encodes the specified XmsgImGroupInfoQueryReq message. Does not implicitly {@link XmsgImGroupInfoQueryReq.verify|verify} messages.
     * @param message XmsgImGroupInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoQueryReq message, length delimited. Does not implicitly {@link XmsgImGroupInfoQueryReq.verify|verify} messages.
     * @param message XmsgImGroupInfoQueryReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoQueryReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoQueryReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoQueryReq;

    /**
     * Decodes a XmsgImGroupInfoQueryReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoQueryReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoQueryReq;

    /**
     * Verifies a XmsgImGroupInfoQueryReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoQueryReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoQueryReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoQueryReq;

    /**
     * Creates a plain object from a XmsgImGroupInfoQueryReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoQueryReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoQueryReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoQueryReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoQueryRsp. */
export class XmsgImGroupInfoQueryRsp implements IXmsgImGroupInfoQueryRsp {

    /**
     * Constructs a new XmsgImGroupInfoQueryRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoQueryRsp);

    /** XmsgImGroupInfoQueryRsp info. */
    public info?: (IXmsgImGroupInfoSelfInfo|null);

    /** XmsgImGroupInfoQueryRsp member. */
    public member: IXmsgImGroupInfoMember[];

    /**
     * Creates a new XmsgImGroupInfoQueryRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoQueryRsp instance
     */
    public static create(properties?: IXmsgImGroupInfoQueryRsp): XmsgImGroupInfoQueryRsp;

    /**
     * Encodes the specified XmsgImGroupInfoQueryRsp message. Does not implicitly {@link XmsgImGroupInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoQueryRsp message, length delimited. Does not implicitly {@link XmsgImGroupInfoQueryRsp.verify|verify} messages.
     * @param message XmsgImGroupInfoQueryRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoQueryRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoQueryRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoQueryRsp;

    /**
     * Decodes a XmsgImGroupInfoQueryRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoQueryRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoQueryRsp;

    /**
     * Verifies a XmsgImGroupInfoQueryRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoQueryRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoQueryRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoQueryRsp;

    /**
     * Creates a plain object from a XmsgImGroupInfoQueryRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoQueryRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoQueryRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoQueryRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoSelfInfo. */
export class XmsgImGroupInfoSelfInfo implements IXmsgImGroupInfoSelfInfo {

    /**
     * Constructs a new XmsgImGroupInfoSelfInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoSelfInfo);

    /** XmsgImGroupInfoSelfInfo cgt. */
    public cgt: string;

    /** XmsgImGroupInfoSelfInfo enable. */
    public enable: boolean;

    /** XmsgImGroupInfoSelfInfo info. */
    public info: { [k: string]: string };

    /** XmsgImGroupInfoSelfInfo ver. */
    public ver: (number|Long);

    /** XmsgImGroupInfoSelfInfo gts. */
    public gts: (number|Long);

    /** XmsgImGroupInfoSelfInfo uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImGroupInfoSelfInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoSelfInfo instance
     */
    public static create(properties?: IXmsgImGroupInfoSelfInfo): XmsgImGroupInfoSelfInfo;

    /**
     * Encodes the specified XmsgImGroupInfoSelfInfo message. Does not implicitly {@link XmsgImGroupInfoSelfInfo.verify|verify} messages.
     * @param message XmsgImGroupInfoSelfInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoSelfInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoSelfInfo message, length delimited. Does not implicitly {@link XmsgImGroupInfoSelfInfo.verify|verify} messages.
     * @param message XmsgImGroupInfoSelfInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoSelfInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoSelfInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoSelfInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoSelfInfo;

    /**
     * Decodes a XmsgImGroupInfoSelfInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoSelfInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoSelfInfo;

    /**
     * Verifies a XmsgImGroupInfoSelfInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoSelfInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoSelfInfo
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoSelfInfo;

    /**
     * Creates a plain object from a XmsgImGroupInfoSelfInfo message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoSelfInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoSelfInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoSelfInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoMember. */
export class XmsgImGroupInfoMember implements IXmsgImGroupInfoMember {

    /**
     * Constructs a new XmsgImGroupInfoMember.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoMember);

    /** XmsgImGroupInfoMember cgt. */
    public cgt: string;

    /** XmsgImGroupInfoMember enable. */
    public enable: boolean;

    /** XmsgImGroupInfoMember info. */
    public info: { [k: string]: string };

    /** XmsgImGroupInfoMember ver. */
    public ver: (number|Long);

    /** XmsgImGroupInfoMember gts. */
    public gts: (number|Long);

    /** XmsgImGroupInfoMember uts. */
    public uts: (number|Long);

    /**
     * Creates a new XmsgImGroupInfoMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoMember instance
     */
    public static create(properties?: IXmsgImGroupInfoMember): XmsgImGroupInfoMember;

    /**
     * Encodes the specified XmsgImGroupInfoMember message. Does not implicitly {@link XmsgImGroupInfoMember.verify|verify} messages.
     * @param message XmsgImGroupInfoMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoMember message, length delimited. Does not implicitly {@link XmsgImGroupInfoMember.verify|verify} messages.
     * @param message XmsgImGroupInfoMember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoMember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoMember message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoMember;

    /**
     * Decodes a XmsgImGroupInfoMember message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoMember;

    /**
     * Verifies a XmsgImGroupInfoMember message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoMember message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoMember
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoMember;

    /**
     * Creates a plain object from a XmsgImGroupInfoMember message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoMember
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoMember to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoUpdateReq. */
export class XmsgImGroupInfoUpdateReq implements IXmsgImGroupInfoUpdateReq {

    /**
     * Constructs a new XmsgImGroupInfoUpdateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoUpdateReq);

    /** XmsgImGroupInfoUpdateReq cgt. */
    public cgt: string;

    /** XmsgImGroupInfoUpdateReq upsert. */
    public upsert: { [k: string]: string };

    /** XmsgImGroupInfoUpdateReq remove. */
    public remove: string[];

    /**
     * Creates a new XmsgImGroupInfoUpdateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoUpdateReq instance
     */
    public static create(properties?: IXmsgImGroupInfoUpdateReq): XmsgImGroupInfoUpdateReq;

    /**
     * Encodes the specified XmsgImGroupInfoUpdateReq message. Does not implicitly {@link XmsgImGroupInfoUpdateReq.verify|verify} messages.
     * @param message XmsgImGroupInfoUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoUpdateReq message, length delimited. Does not implicitly {@link XmsgImGroupInfoUpdateReq.verify|verify} messages.
     * @param message XmsgImGroupInfoUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoUpdateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoUpdateReq;

    /**
     * Decodes a XmsgImGroupInfoUpdateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoUpdateReq;

    /**
     * Verifies a XmsgImGroupInfoUpdateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoUpdateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoUpdateReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoUpdateReq;

    /**
     * Creates a plain object from a XmsgImGroupInfoUpdateReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoUpdateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoUpdateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoUpdateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupInfoUpdateRsp. */
export class XmsgImGroupInfoUpdateRsp implements IXmsgImGroupInfoUpdateRsp {

    /**
     * Constructs a new XmsgImGroupInfoUpdateRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupInfoUpdateRsp);

    /** XmsgImGroupInfoUpdateRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupInfoUpdateRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupInfoUpdateRsp instance
     */
    public static create(properties?: IXmsgImGroupInfoUpdateRsp): XmsgImGroupInfoUpdateRsp;

    /**
     * Encodes the specified XmsgImGroupInfoUpdateRsp message. Does not implicitly {@link XmsgImGroupInfoUpdateRsp.verify|verify} messages.
     * @param message XmsgImGroupInfoUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupInfoUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupInfoUpdateRsp message, length delimited. Does not implicitly {@link XmsgImGroupInfoUpdateRsp.verify|verify} messages.
     * @param message XmsgImGroupInfoUpdateRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupInfoUpdateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupInfoUpdateRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupInfoUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupInfoUpdateRsp;

    /**
     * Decodes a XmsgImGroupInfoUpdateRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupInfoUpdateRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupInfoUpdateRsp;

    /**
     * Verifies a XmsgImGroupInfoUpdateRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupInfoUpdateRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupInfoUpdateRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupInfoUpdateRsp;

    /**
     * Creates a plain object from a XmsgImGroupInfoUpdateRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupInfoUpdateRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupInfoUpdateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupInfoUpdateRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupMsgRecvCfgReq. */
export class XmsgImGroupMsgRecvCfgReq implements IXmsgImGroupMsgRecvCfgReq {

    /**
     * Constructs a new XmsgImGroupMsgRecvCfgReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgRecvCfgReq);

    /** XmsgImGroupMsgRecvCfgReq cgt. */
    public cgt: string;

    /** XmsgImGroupMsgRecvCfgReq type. */
    public type: string;

    /**
     * Creates a new XmsgImGroupMsgRecvCfgReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgRecvCfgReq instance
     */
    public static create(properties?: IXmsgImGroupMsgRecvCfgReq): XmsgImGroupMsgRecvCfgReq;

    /**
     * Encodes the specified XmsgImGroupMsgRecvCfgReq message. Does not implicitly {@link XmsgImGroupMsgRecvCfgReq.verify|verify} messages.
     * @param message XmsgImGroupMsgRecvCfgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgRecvCfgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgRecvCfgReq message, length delimited. Does not implicitly {@link XmsgImGroupMsgRecvCfgReq.verify|verify} messages.
     * @param message XmsgImGroupMsgRecvCfgReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgRecvCfgReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgRecvCfgReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgRecvCfgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgRecvCfgReq;

    /**
     * Decodes a XmsgImGroupMsgRecvCfgReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgRecvCfgReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgRecvCfgReq;

    /**
     * Verifies a XmsgImGroupMsgRecvCfgReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgRecvCfgReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgRecvCfgReq
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgRecvCfgReq;

    /**
     * Creates a plain object from a XmsgImGroupMsgRecvCfgReq message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgRecvCfgReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgRecvCfgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgRecvCfgReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XmsgImGroupMsgRecvCfgRsp. */
export class XmsgImGroupMsgRecvCfgRsp implements IXmsgImGroupMsgRecvCfgRsp {

    /**
     * Constructs a new XmsgImGroupMsgRecvCfgRsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXmsgImGroupMsgRecvCfgRsp);

    /** XmsgImGroupMsgRecvCfgRsp ext. */
    public ext: { [k: string]: string };

    /**
     * Creates a new XmsgImGroupMsgRecvCfgRsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XmsgImGroupMsgRecvCfgRsp instance
     */
    public static create(properties?: IXmsgImGroupMsgRecvCfgRsp): XmsgImGroupMsgRecvCfgRsp;

    /**
     * Encodes the specified XmsgImGroupMsgRecvCfgRsp message. Does not implicitly {@link XmsgImGroupMsgRecvCfgRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgRecvCfgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXmsgImGroupMsgRecvCfgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XmsgImGroupMsgRecvCfgRsp message, length delimited. Does not implicitly {@link XmsgImGroupMsgRecvCfgRsp.verify|verify} messages.
     * @param message XmsgImGroupMsgRecvCfgRsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXmsgImGroupMsgRecvCfgRsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XmsgImGroupMsgRecvCfgRsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XmsgImGroupMsgRecvCfgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XmsgImGroupMsgRecvCfgRsp;

    /**
     * Decodes a XmsgImGroupMsgRecvCfgRsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XmsgImGroupMsgRecvCfgRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XmsgImGroupMsgRecvCfgRsp;

    /**
     * Verifies a XmsgImGroupMsgRecvCfgRsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XmsgImGroupMsgRecvCfgRsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XmsgImGroupMsgRecvCfgRsp
     */
    public static fromObject(object: { [k: string]: any }): XmsgImGroupMsgRecvCfgRsp;

    /**
     * Creates a plain object from a XmsgImGroupMsgRecvCfgRsp message. Also converts values to other types if specified.
     * @param message XmsgImGroupMsgRecvCfgRsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XmsgImGroupMsgRecvCfgRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XmsgImGroupMsgRecvCfgRsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
