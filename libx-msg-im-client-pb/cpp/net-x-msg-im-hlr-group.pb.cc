// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: net-x-msg-im-hlr-group.proto

#include "net-x-msg-im-hlr-group.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// This is a temporary google only hack
#ifdef GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
#include "third_party/protobuf/version.h"
#endif
// @@protoc_insertion_point(includes)
class XmsgImHlrGroupMsgReqDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<XmsgImHlrGroupMsgReq>
      _instance;
} _XmsgImHlrGroupMsgReq_default_instance_;
class XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUseDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse>
      _instance;
} _XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse_default_instance_;
class XmsgImHlrGroupMsgRspDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<XmsgImHlrGroupMsgRsp>
      _instance;
} _XmsgImHlrGroupMsgRsp_default_instance_;
namespace protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto {
void InitDefaultsXmsgImHlrGroupMsgReqImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

#ifdef GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  ::google::protobuf::internal::InitProtobufDefaultsForceUnique();
#else
  ::google::protobuf::internal::InitProtobufDefaults();
#endif  // GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  {
    void* ptr = &::_XmsgImHlrGroupMsgReq_default_instance_;
    new (ptr) ::XmsgImHlrGroupMsgReq();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::XmsgImHlrGroupMsgReq::InitAsDefaultInstance();
}

void InitDefaultsXmsgImHlrGroupMsgReq() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &InitDefaultsXmsgImHlrGroupMsgReqImpl);
}

void InitDefaultsXmsgImHlrGroupMsgRsp_ExtEntry_DoNotUseImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

#ifdef GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  ::google::protobuf::internal::InitProtobufDefaultsForceUnique();
#else
  ::google::protobuf::internal::InitProtobufDefaults();
#endif  // GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  {
    void* ptr = &::_XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse_default_instance_;
    new (ptr) ::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse();
  }
  ::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::InitAsDefaultInstance();
}

void InitDefaultsXmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &InitDefaultsXmsgImHlrGroupMsgRsp_ExtEntry_DoNotUseImpl);
}

void InitDefaultsXmsgImHlrGroupMsgRspImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

#ifdef GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  ::google::protobuf::internal::InitProtobufDefaultsForceUnique();
#else
  ::google::protobuf::internal::InitProtobufDefaults();
#endif  // GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
  protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::InitDefaultsXmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse();
  {
    void* ptr = &::_XmsgImHlrGroupMsgRsp_default_instance_;
    new (ptr) ::XmsgImHlrGroupMsgRsp();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::XmsgImHlrGroupMsgRsp::InitAsDefaultInstance();
}

void InitDefaultsXmsgImHlrGroupMsgRsp() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &InitDefaultsXmsgImHlrGroupMsgRspImpl);
}

::google::protobuf::Metadata file_level_metadata[3];

const ::google::protobuf::uint32 TableStruct::offsets[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgReq, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgReq, cgt_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgReq, type_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgReq, msg_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgReq, dat_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse, _has_bits_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse, key_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse, value_),
  0,
  1,
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::XmsgImHlrGroupMsgRsp, ext_),
};
static const ::google::protobuf::internal::MigrationSchema schemas[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::XmsgImHlrGroupMsgReq)},
  { 9, 16, sizeof(::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse)},
  { 18, -1, sizeof(::XmsgImHlrGroupMsgRsp)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&::_XmsgImHlrGroupMsgReq_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&::_XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&::_XmsgImHlrGroupMsgRsp_default_instance_),
};

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "net-x-msg-im-hlr-group.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_PROTOBUF_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 3);
}

void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
      "\n\034net-x-msg-im-hlr-group.proto\"K\n\024XmsgIm"
      "HlrGroupMsgReq\022\013\n\003cgt\030\001 \001(\t\022\014\n\004type\030\002 \001("
      "\t\022\013\n\003msg\030\003 \001(\t\022\013\n\003dat\030\004 \001(\014\"o\n\024XmsgImHlr"
      "GroupMsgRsp\022+\n\003ext\030\001 \003(\0132\036.XmsgImHlrGrou"
      "pMsgRsp.ExtEntry\032*\n\010ExtEntry\022\013\n\003key\030\001 \001("
      "\t\022\r\n\005value\030\002 \001(\t:\0028\001B!\n\017pb.x.msg.im.hlrB"
      "\016XmsgImHlrGroupb\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 263);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "net-x-msg-im-hlr-group.proto", &protobuf_RegisterTypes);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at dynamic initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;
}  // namespace protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto

// ===================================================================

void XmsgImHlrGroupMsgReq::InitAsDefaultInstance() {
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int XmsgImHlrGroupMsgReq::kCgtFieldNumber;
const int XmsgImHlrGroupMsgReq::kTypeFieldNumber;
const int XmsgImHlrGroupMsgReq::kMsgFieldNumber;
const int XmsgImHlrGroupMsgReq::kDatFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

XmsgImHlrGroupMsgReq::XmsgImHlrGroupMsgReq()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::InitDefaultsXmsgImHlrGroupMsgReq();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:XmsgImHlrGroupMsgReq)
}
XmsgImHlrGroupMsgReq::XmsgImHlrGroupMsgReq(const XmsgImHlrGroupMsgReq& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  cgt_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.cgt().size() > 0) {
    cgt_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.cgt_);
  }
  type_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.type().size() > 0) {
    type_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.type_);
  }
  msg_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.msg().size() > 0) {
    msg_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.msg_);
  }
  dat_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.dat().size() > 0) {
    dat_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.dat_);
  }
  // @@protoc_insertion_point(copy_constructor:XmsgImHlrGroupMsgReq)
}

void XmsgImHlrGroupMsgReq::SharedCtor() {
  cgt_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  type_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  msg_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  dat_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  _cached_size_ = 0;
}

XmsgImHlrGroupMsgReq::~XmsgImHlrGroupMsgReq() {
  // @@protoc_insertion_point(destructor:XmsgImHlrGroupMsgReq)
  SharedDtor();
}

void XmsgImHlrGroupMsgReq::SharedDtor() {
  cgt_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  type_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  msg_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  dat_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}

void XmsgImHlrGroupMsgReq::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* XmsgImHlrGroupMsgReq::descriptor() {
  ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::file_level_metadata[kIndexInFileMessages].descriptor;
}

const XmsgImHlrGroupMsgReq& XmsgImHlrGroupMsgReq::default_instance() {
  ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::InitDefaultsXmsgImHlrGroupMsgReq();
  return *internal_default_instance();
}

XmsgImHlrGroupMsgReq* XmsgImHlrGroupMsgReq::New(::google::protobuf::Arena* arena) const {
  XmsgImHlrGroupMsgReq* n = new XmsgImHlrGroupMsgReq;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void XmsgImHlrGroupMsgReq::Clear() {
// @@protoc_insertion_point(message_clear_start:XmsgImHlrGroupMsgReq)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  cgt_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  type_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  msg_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  dat_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

bool XmsgImHlrGroupMsgReq::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:XmsgImHlrGroupMsgReq)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // string cgt = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(10u /* 10 & 0xFF */)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_cgt()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->cgt().data(), static_cast<int>(this->cgt().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "XmsgImHlrGroupMsgReq.cgt"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string type = 2;
      case 2: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(18u /* 18 & 0xFF */)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_type()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->type().data(), static_cast<int>(this->type().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "XmsgImHlrGroupMsgReq.type"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string msg = 3;
      case 3: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(26u /* 26 & 0xFF */)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_msg()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->msg().data(), static_cast<int>(this->msg().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "XmsgImHlrGroupMsgReq.msg"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // bytes dat = 4;
      case 4: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(34u /* 34 & 0xFF */)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadBytes(
                input, this->mutable_dat()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, _internal_metadata_.mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:XmsgImHlrGroupMsgReq)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:XmsgImHlrGroupMsgReq)
  return false;
#undef DO_
}

void XmsgImHlrGroupMsgReq::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:XmsgImHlrGroupMsgReq)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string cgt = 1;
  if (this->cgt().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->cgt().data(), static_cast<int>(this->cgt().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.cgt");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->cgt(), output);
  }

  // string type = 2;
  if (this->type().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->type().data(), static_cast<int>(this->type().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.type");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      2, this->type(), output);
  }

  // string msg = 3;
  if (this->msg().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->msg().data(), static_cast<int>(this->msg().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.msg");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      3, this->msg(), output);
  }

  // bytes dat = 4;
  if (this->dat().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::WriteBytesMaybeAliased(
      4, this->dat(), output);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), output);
  }
  // @@protoc_insertion_point(serialize_end:XmsgImHlrGroupMsgReq)
}

::google::protobuf::uint8* XmsgImHlrGroupMsgReq::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic; // Unused
  // @@protoc_insertion_point(serialize_to_array_start:XmsgImHlrGroupMsgReq)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string cgt = 1;
  if (this->cgt().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->cgt().data(), static_cast<int>(this->cgt().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.cgt");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->cgt(), target);
  }

  // string type = 2;
  if (this->type().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->type().data(), static_cast<int>(this->type().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.type");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        2, this->type(), target);
  }

  // string msg = 3;
  if (this->msg().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->msg().data(), static_cast<int>(this->msg().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "XmsgImHlrGroupMsgReq.msg");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        3, this->msg(), target);
  }

  // bytes dat = 4;
  if (this->dat().size() > 0) {
    target =
      ::google::protobuf::internal::WireFormatLite::WriteBytesToArray(
        4, this->dat(), target);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:XmsgImHlrGroupMsgReq)
  return target;
}

size_t XmsgImHlrGroupMsgReq::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:XmsgImHlrGroupMsgReq)
  size_t total_size = 0;

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()));
  }
  // string cgt = 1;
  if (this->cgt().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->cgt());
  }

  // string type = 2;
  if (this->type().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->type());
  }

  // string msg = 3;
  if (this->msg().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->msg());
  }

  // bytes dat = 4;
  if (this->dat().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::BytesSize(
        this->dat());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void XmsgImHlrGroupMsgReq::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:XmsgImHlrGroupMsgReq)
  GOOGLE_DCHECK_NE(&from, this);
  const XmsgImHlrGroupMsgReq* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const XmsgImHlrGroupMsgReq>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:XmsgImHlrGroupMsgReq)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:XmsgImHlrGroupMsgReq)
    MergeFrom(*source);
  }
}

void XmsgImHlrGroupMsgReq::MergeFrom(const XmsgImHlrGroupMsgReq& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:XmsgImHlrGroupMsgReq)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.cgt().size() > 0) {

    cgt_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.cgt_);
  }
  if (from.type().size() > 0) {

    type_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.type_);
  }
  if (from.msg().size() > 0) {

    msg_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.msg_);
  }
  if (from.dat().size() > 0) {

    dat_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.dat_);
  }
}

void XmsgImHlrGroupMsgReq::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:XmsgImHlrGroupMsgReq)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void XmsgImHlrGroupMsgReq::CopyFrom(const XmsgImHlrGroupMsgReq& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:XmsgImHlrGroupMsgReq)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool XmsgImHlrGroupMsgReq::IsInitialized() const {
  return true;
}

void XmsgImHlrGroupMsgReq::Swap(XmsgImHlrGroupMsgReq* other) {
  if (other == this) return;
  InternalSwap(other);
}
void XmsgImHlrGroupMsgReq::InternalSwap(XmsgImHlrGroupMsgReq* other) {
  using std::swap;
  cgt_.Swap(&other->cgt_);
  type_.Swap(&other->type_);
  msg_.Swap(&other->msg_);
  dat_.Swap(&other->dat_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata XmsgImHlrGroupMsgReq::GetMetadata() const {
  protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::file_level_metadata[kIndexInFileMessages];
}


// ===================================================================

XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse() {}
XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse(::google::protobuf::Arena* arena) : SuperType(arena) {}
void XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::MergeFrom(const XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse& other) {
  MergeFromInternal(other);
}
::google::protobuf::Metadata XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::GetMetadata() const {
  ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::file_level_metadata[1];
}
void XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::MergeFrom(
    const ::google::protobuf::Message& other) {
  ::google::protobuf::Message::MergeFrom(other);
}


// ===================================================================

void XmsgImHlrGroupMsgRsp::InitAsDefaultInstance() {
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int XmsgImHlrGroupMsgRsp::kExtFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

XmsgImHlrGroupMsgRsp::XmsgImHlrGroupMsgRsp()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::InitDefaultsXmsgImHlrGroupMsgRsp();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:XmsgImHlrGroupMsgRsp)
}
XmsgImHlrGroupMsgRsp::XmsgImHlrGroupMsgRsp(const XmsgImHlrGroupMsgRsp& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ext_.MergeFrom(from.ext_);
  // @@protoc_insertion_point(copy_constructor:XmsgImHlrGroupMsgRsp)
}

void XmsgImHlrGroupMsgRsp::SharedCtor() {
  _cached_size_ = 0;
}

XmsgImHlrGroupMsgRsp::~XmsgImHlrGroupMsgRsp() {
  // @@protoc_insertion_point(destructor:XmsgImHlrGroupMsgRsp)
  SharedDtor();
}

void XmsgImHlrGroupMsgRsp::SharedDtor() {
}

void XmsgImHlrGroupMsgRsp::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* XmsgImHlrGroupMsgRsp::descriptor() {
  ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::file_level_metadata[kIndexInFileMessages].descriptor;
}

const XmsgImHlrGroupMsgRsp& XmsgImHlrGroupMsgRsp::default_instance() {
  ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::InitDefaultsXmsgImHlrGroupMsgRsp();
  return *internal_default_instance();
}

XmsgImHlrGroupMsgRsp* XmsgImHlrGroupMsgRsp::New(::google::protobuf::Arena* arena) const {
  XmsgImHlrGroupMsgRsp* n = new XmsgImHlrGroupMsgRsp;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void XmsgImHlrGroupMsgRsp::Clear() {
// @@protoc_insertion_point(message_clear_start:XmsgImHlrGroupMsgRsp)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  ext_.Clear();
  _internal_metadata_.Clear();
}

bool XmsgImHlrGroupMsgRsp::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:XmsgImHlrGroupMsgRsp)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // map<string, string> ext = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(10u /* 10 & 0xFF */)) {
          XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse::Parser< ::google::protobuf::internal::MapField<
              XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse,
              ::std::string, ::std::string,
              ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
              ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
              0 >,
            ::google::protobuf::Map< ::std::string, ::std::string > > parser(&ext_);
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
              input, &parser));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            parser.key().data(), static_cast<int>(parser.key().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "XmsgImHlrGroupMsgRsp.ExtEntry.key"));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            parser.value().data(), static_cast<int>(parser.value().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "XmsgImHlrGroupMsgRsp.ExtEntry.value"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, _internal_metadata_.mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:XmsgImHlrGroupMsgRsp)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:XmsgImHlrGroupMsgRsp)
  return false;
#undef DO_
}

void XmsgImHlrGroupMsgRsp::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:XmsgImHlrGroupMsgRsp)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // map<string, string> ext = 1;
  if (!this->ext().empty()) {
    typedef ::google::protobuf::Map< ::std::string, ::std::string >::const_pointer
        ConstPtr;
    typedef ConstPtr SortItem;
    typedef ::google::protobuf::internal::CompareByDerefFirst<SortItem> Less;
    struct Utf8Check {
      static void Check(ConstPtr p) {
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->first.data(), static_cast<int>(p->first.length()),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "XmsgImHlrGroupMsgRsp.ExtEntry.key");
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->second.data(), static_cast<int>(p->second.length()),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "XmsgImHlrGroupMsgRsp.ExtEntry.value");
      }
    };

    if (output->IsSerializationDeterministic() &&
        this->ext().size() > 1) {
      ::google::protobuf::scoped_array<SortItem> items(
          new SortItem[this->ext().size()]);
      typedef ::google::protobuf::Map< ::std::string, ::std::string >::size_type size_type;
      size_type n = 0;
      for (::google::protobuf::Map< ::std::string, ::std::string >::const_iterator
          it = this->ext().begin();
          it != this->ext().end(); ++it, ++n) {
        items[static_cast<ptrdiff_t>(n)] = SortItem(&*it);
      }
      ::std::sort(&items[0], &items[static_cast<ptrdiff_t>(n)], Less());
      ::google::protobuf::scoped_ptr<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse> entry;
      for (size_type i = 0; i < n; i++) {
        entry.reset(ext_.NewEntryWrapper(
            items[static_cast<ptrdiff_t>(i)]->first, items[static_cast<ptrdiff_t>(i)]->second));
        ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
            1, *entry, output);
        Utf8Check::Check(items[static_cast<ptrdiff_t>(i)]);
      }
    } else {
      ::google::protobuf::scoped_ptr<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse> entry;
      for (::google::protobuf::Map< ::std::string, ::std::string >::const_iterator
          it = this->ext().begin();
          it != this->ext().end(); ++it) {
        entry.reset(ext_.NewEntryWrapper(
            it->first, it->second));
        ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
            1, *entry, output);
        Utf8Check::Check(&*it);
      }
    }
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), output);
  }
  // @@protoc_insertion_point(serialize_end:XmsgImHlrGroupMsgRsp)
}

::google::protobuf::uint8* XmsgImHlrGroupMsgRsp::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic; // Unused
  // @@protoc_insertion_point(serialize_to_array_start:XmsgImHlrGroupMsgRsp)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // map<string, string> ext = 1;
  if (!this->ext().empty()) {
    typedef ::google::protobuf::Map< ::std::string, ::std::string >::const_pointer
        ConstPtr;
    typedef ConstPtr SortItem;
    typedef ::google::protobuf::internal::CompareByDerefFirst<SortItem> Less;
    struct Utf8Check {
      static void Check(ConstPtr p) {
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->first.data(), static_cast<int>(p->first.length()),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "XmsgImHlrGroupMsgRsp.ExtEntry.key");
        ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
          p->second.data(), static_cast<int>(p->second.length()),
          ::google::protobuf::internal::WireFormatLite::SERIALIZE,
          "XmsgImHlrGroupMsgRsp.ExtEntry.value");
      }
    };

    if (deterministic &&
        this->ext().size() > 1) {
      ::google::protobuf::scoped_array<SortItem> items(
          new SortItem[this->ext().size()]);
      typedef ::google::protobuf::Map< ::std::string, ::std::string >::size_type size_type;
      size_type n = 0;
      for (::google::protobuf::Map< ::std::string, ::std::string >::const_iterator
          it = this->ext().begin();
          it != this->ext().end(); ++it, ++n) {
        items[static_cast<ptrdiff_t>(n)] = SortItem(&*it);
      }
      ::std::sort(&items[0], &items[static_cast<ptrdiff_t>(n)], Less());
      ::google::protobuf::scoped_ptr<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse> entry;
      for (size_type i = 0; i < n; i++) {
        entry.reset(ext_.NewEntryWrapper(
            items[static_cast<ptrdiff_t>(i)]->first, items[static_cast<ptrdiff_t>(i)]->second));
        target = ::google::protobuf::internal::WireFormatLite::
                   InternalWriteMessageNoVirtualToArray(
                       1, *entry, deterministic, target);
;
        Utf8Check::Check(items[static_cast<ptrdiff_t>(i)]);
      }
    } else {
      ::google::protobuf::scoped_ptr<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse> entry;
      for (::google::protobuf::Map< ::std::string, ::std::string >::const_iterator
          it = this->ext().begin();
          it != this->ext().end(); ++it) {
        entry.reset(ext_.NewEntryWrapper(
            it->first, it->second));
        target = ::google::protobuf::internal::WireFormatLite::
                   InternalWriteMessageNoVirtualToArray(
                       1, *entry, deterministic, target);
;
        Utf8Check::Check(&*it);
      }
    }
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:XmsgImHlrGroupMsgRsp)
  return target;
}

size_t XmsgImHlrGroupMsgRsp::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:XmsgImHlrGroupMsgRsp)
  size_t total_size = 0;

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()));
  }
  // map<string, string> ext = 1;
  total_size += 1 *
      ::google::protobuf::internal::FromIntSize(this->ext_size());
  {
    ::google::protobuf::scoped_ptr<XmsgImHlrGroupMsgRsp_ExtEntry_DoNotUse> entry;
    for (::google::protobuf::Map< ::std::string, ::std::string >::const_iterator
        it = this->ext().begin();
        it != this->ext().end(); ++it) {
      entry.reset(ext_.NewEntryWrapper(it->first, it->second));
      total_size += ::google::protobuf::internal::WireFormatLite::
          MessageSizeNoVirtual(*entry);
    }
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void XmsgImHlrGroupMsgRsp::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:XmsgImHlrGroupMsgRsp)
  GOOGLE_DCHECK_NE(&from, this);
  const XmsgImHlrGroupMsgRsp* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const XmsgImHlrGroupMsgRsp>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:XmsgImHlrGroupMsgRsp)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:XmsgImHlrGroupMsgRsp)
    MergeFrom(*source);
  }
}

void XmsgImHlrGroupMsgRsp::MergeFrom(const XmsgImHlrGroupMsgRsp& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:XmsgImHlrGroupMsgRsp)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  ext_.MergeFrom(from.ext_);
}

void XmsgImHlrGroupMsgRsp::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:XmsgImHlrGroupMsgRsp)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void XmsgImHlrGroupMsgRsp::CopyFrom(const XmsgImHlrGroupMsgRsp& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:XmsgImHlrGroupMsgRsp)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool XmsgImHlrGroupMsgRsp::IsInitialized() const {
  return true;
}

void XmsgImHlrGroupMsgRsp::Swap(XmsgImHlrGroupMsgRsp* other) {
  if (other == this) return;
  InternalSwap(other);
}
void XmsgImHlrGroupMsgRsp::InternalSwap(XmsgImHlrGroupMsgRsp* other) {
  using std::swap;
  ext_.Swap(&other->ext_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata XmsgImHlrGroupMsgRsp::GetMetadata() const {
  protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_net_2dx_2dmsg_2dim_2dhlr_2dgroup_2eproto::file_level_metadata[kIndexInFileMessages];
}


// @@protoc_insertion_point(namespace_scope)

// @@protoc_insertion_point(global_scope)