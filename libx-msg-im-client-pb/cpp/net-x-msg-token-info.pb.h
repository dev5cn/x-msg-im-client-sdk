// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: net-x-msg-token-info.proto

#ifndef PROTOBUF_net_2dx_2dmsg_2dtoken_2dinfo_2eproto__INCLUDED
#define PROTOBUF_net_2dx_2dmsg_2dtoken_2dinfo_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3005000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3005001 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)

namespace protobuf_net_2dx_2dmsg_2dtoken_2dinfo_2eproto {
// Internal implementation detail -- do not use these members.
struct TableStruct {
  static const ::google::protobuf::internal::ParseTableField entries[];
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[];
  static const ::google::protobuf::internal::ParseTable schema[1];
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors();
void InitDefaultsXmsgClientTokenInfoImpl();
void InitDefaultsXmsgClientTokenInfo();
inline void InitDefaults() {
  InitDefaultsXmsgClientTokenInfo();
}
}  // namespace protobuf_net_2dx_2dmsg_2dtoken_2dinfo_2eproto
class XmsgClientTokenInfo;
class XmsgClientTokenInfoDefaultTypeInternal;
extern XmsgClientTokenInfoDefaultTypeInternal _XmsgClientTokenInfo_default_instance_;

// ===================================================================

class XmsgClientTokenInfo : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:XmsgClientTokenInfo) */ {
 public:
  XmsgClientTokenInfo();
  virtual ~XmsgClientTokenInfo();

  XmsgClientTokenInfo(const XmsgClientTokenInfo& from);

  inline XmsgClientTokenInfo& operator=(const XmsgClientTokenInfo& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  XmsgClientTokenInfo(XmsgClientTokenInfo&& from) noexcept
    : XmsgClientTokenInfo() {
    *this = ::std::move(from);
  }

  inline XmsgClientTokenInfo& operator=(XmsgClientTokenInfo&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const XmsgClientTokenInfo& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const XmsgClientTokenInfo* internal_default_instance() {
    return reinterpret_cast<const XmsgClientTokenInfo*>(
               &_XmsgClientTokenInfo_default_instance_);
  }
  static PROTOBUF_CONSTEXPR int const kIndexInFileMessages =
    0;

  void Swap(XmsgClientTokenInfo* other);
  friend void swap(XmsgClientTokenInfo& a, XmsgClientTokenInfo& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline XmsgClientTokenInfo* New() const PROTOBUF_FINAL { return New(NULL); }

  XmsgClientTokenInfo* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const XmsgClientTokenInfo& from);
  void MergeFrom(const XmsgClientTokenInfo& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(XmsgClientTokenInfo* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // string cgt = 1;
  void clear_cgt();
  static const int kCgtFieldNumber = 1;
  const ::std::string& cgt() const;
  void set_cgt(const ::std::string& value);
  #if LANG_CXX11
  void set_cgt(::std::string&& value);
  #endif
  void set_cgt(const char* value);
  void set_cgt(const char* value, size_t size);
  ::std::string* mutable_cgt();
  ::std::string* release_cgt();
  void set_allocated_cgt(::std::string* cgt);

  // string token = 2;
  void clear_token();
  static const int kTokenFieldNumber = 2;
  const ::std::string& token() const;
  void set_token(const ::std::string& value);
  #if LANG_CXX11
  void set_token(::std::string&& value);
  #endif
  void set_token(const char* value);
  void set_token(const char* value, size_t size);
  ::std::string* mutable_token();
  ::std::string* release_token();
  void set_allocated_token(::std::string* token);

  // string alg = 3;
  void clear_alg();
  static const int kAlgFieldNumber = 3;
  const ::std::string& alg() const;
  void set_alg(const ::std::string& value);
  #if LANG_CXX11
  void set_alg(::std::string&& value);
  #endif
  void set_alg(const char* value);
  void set_alg(const char* value, size_t size);
  ::std::string* mutable_alg();
  ::std::string* release_alg();
  void set_allocated_alg(::std::string* alg);

  // string slat = 4;
  void clear_slat();
  static const int kSlatFieldNumber = 4;
  const ::std::string& slat() const;
  void set_slat(const ::std::string& value);
  #if LANG_CXX11
  void set_slat(::std::string&& value);
  #endif
  void set_slat(const char* value);
  void set_slat(const char* value, size_t size);
  ::std::string* mutable_slat();
  ::std::string* release_slat();
  void set_allocated_slat(::std::string* slat);

  // string plat = 5;
  void clear_plat();
  static const int kPlatFieldNumber = 5;
  const ::std::string& plat() const;
  void set_plat(const ::std::string& value);
  #if LANG_CXX11
  void set_plat(::std::string&& value);
  #endif
  void set_plat(const char* value);
  void set_plat(const char* value, size_t size);
  ::std::string* mutable_plat();
  ::std::string* release_plat();
  void set_allocated_plat(::std::string* plat);

  // string did = 6;
  void clear_did();
  static const int kDidFieldNumber = 6;
  const ::std::string& did() const;
  void set_did(const ::std::string& value);
  #if LANG_CXX11
  void set_did(::std::string&& value);
  #endif
  void set_did(const char* value);
  void set_did(const char* value, size_t size);
  ::std::string* mutable_did();
  ::std::string* release_did();
  void set_allocated_did(::std::string* did);

  // string sign = 7;
  void clear_sign();
  static const int kSignFieldNumber = 7;
  const ::std::string& sign() const;
  void set_sign(const ::std::string& value);
  #if LANG_CXX11
  void set_sign(::std::string&& value);
  #endif
  void set_sign(const char* value);
  void set_sign(const char* value, size_t size);
  ::std::string* mutable_sign();
  ::std::string* release_sign();
  void set_allocated_sign(::std::string* sign);

  // @@protoc_insertion_point(class_scope:XmsgClientTokenInfo)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr cgt_;
  ::google::protobuf::internal::ArenaStringPtr token_;
  ::google::protobuf::internal::ArenaStringPtr alg_;
  ::google::protobuf::internal::ArenaStringPtr slat_;
  ::google::protobuf::internal::ArenaStringPtr plat_;
  ::google::protobuf::internal::ArenaStringPtr did_;
  ::google::protobuf::internal::ArenaStringPtr sign_;
  mutable int _cached_size_;
  friend struct ::protobuf_net_2dx_2dmsg_2dtoken_2dinfo_2eproto::TableStruct;
  friend void ::protobuf_net_2dx_2dmsg_2dtoken_2dinfo_2eproto::InitDefaultsXmsgClientTokenInfoImpl();
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// XmsgClientTokenInfo

// string cgt = 1;
inline void XmsgClientTokenInfo::clear_cgt() {
  cgt_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::cgt() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.cgt)
  return cgt_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_cgt(const ::std::string& value) {
  
  cgt_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.cgt)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_cgt(::std::string&& value) {
  
  cgt_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.cgt)
}
#endif
inline void XmsgClientTokenInfo::set_cgt(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  cgt_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.cgt)
}
inline void XmsgClientTokenInfo::set_cgt(const char* value, size_t size) {
  
  cgt_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.cgt)
}
inline ::std::string* XmsgClientTokenInfo::mutable_cgt() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.cgt)
  return cgt_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_cgt() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.cgt)
  
  return cgt_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_cgt(::std::string* cgt) {
  if (cgt != NULL) {
    
  } else {
    
  }
  cgt_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), cgt);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.cgt)
}

// string token = 2;
inline void XmsgClientTokenInfo::clear_token() {
  token_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::token() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.token)
  return token_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_token(const ::std::string& value) {
  
  token_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.token)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_token(::std::string&& value) {
  
  token_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.token)
}
#endif
inline void XmsgClientTokenInfo::set_token(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  token_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.token)
}
inline void XmsgClientTokenInfo::set_token(const char* value, size_t size) {
  
  token_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.token)
}
inline ::std::string* XmsgClientTokenInfo::mutable_token() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.token)
  return token_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_token() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.token)
  
  return token_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_token(::std::string* token) {
  if (token != NULL) {
    
  } else {
    
  }
  token_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), token);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.token)
}

// string alg = 3;
inline void XmsgClientTokenInfo::clear_alg() {
  alg_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::alg() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.alg)
  return alg_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_alg(const ::std::string& value) {
  
  alg_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.alg)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_alg(::std::string&& value) {
  
  alg_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.alg)
}
#endif
inline void XmsgClientTokenInfo::set_alg(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  alg_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.alg)
}
inline void XmsgClientTokenInfo::set_alg(const char* value, size_t size) {
  
  alg_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.alg)
}
inline ::std::string* XmsgClientTokenInfo::mutable_alg() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.alg)
  return alg_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_alg() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.alg)
  
  return alg_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_alg(::std::string* alg) {
  if (alg != NULL) {
    
  } else {
    
  }
  alg_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), alg);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.alg)
}

// string slat = 4;
inline void XmsgClientTokenInfo::clear_slat() {
  slat_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::slat() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.slat)
  return slat_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_slat(const ::std::string& value) {
  
  slat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.slat)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_slat(::std::string&& value) {
  
  slat_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.slat)
}
#endif
inline void XmsgClientTokenInfo::set_slat(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  slat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.slat)
}
inline void XmsgClientTokenInfo::set_slat(const char* value, size_t size) {
  
  slat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.slat)
}
inline ::std::string* XmsgClientTokenInfo::mutable_slat() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.slat)
  return slat_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_slat() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.slat)
  
  return slat_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_slat(::std::string* slat) {
  if (slat != NULL) {
    
  } else {
    
  }
  slat_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), slat);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.slat)
}

// string plat = 5;
inline void XmsgClientTokenInfo::clear_plat() {
  plat_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::plat() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.plat)
  return plat_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_plat(const ::std::string& value) {
  
  plat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.plat)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_plat(::std::string&& value) {
  
  plat_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.plat)
}
#endif
inline void XmsgClientTokenInfo::set_plat(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  plat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.plat)
}
inline void XmsgClientTokenInfo::set_plat(const char* value, size_t size) {
  
  plat_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.plat)
}
inline ::std::string* XmsgClientTokenInfo::mutable_plat() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.plat)
  return plat_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_plat() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.plat)
  
  return plat_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_plat(::std::string* plat) {
  if (plat != NULL) {
    
  } else {
    
  }
  plat_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), plat);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.plat)
}

// string did = 6;
inline void XmsgClientTokenInfo::clear_did() {
  did_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::did() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.did)
  return did_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_did(const ::std::string& value) {
  
  did_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.did)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_did(::std::string&& value) {
  
  did_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.did)
}
#endif
inline void XmsgClientTokenInfo::set_did(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  did_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.did)
}
inline void XmsgClientTokenInfo::set_did(const char* value, size_t size) {
  
  did_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.did)
}
inline ::std::string* XmsgClientTokenInfo::mutable_did() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.did)
  return did_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_did() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.did)
  
  return did_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_did(::std::string* did) {
  if (did != NULL) {
    
  } else {
    
  }
  did_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), did);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.did)
}

// string sign = 7;
inline void XmsgClientTokenInfo::clear_sign() {
  sign_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& XmsgClientTokenInfo::sign() const {
  // @@protoc_insertion_point(field_get:XmsgClientTokenInfo.sign)
  return sign_.GetNoArena();
}
inline void XmsgClientTokenInfo::set_sign(const ::std::string& value) {
  
  sign_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:XmsgClientTokenInfo.sign)
}
#if LANG_CXX11
inline void XmsgClientTokenInfo::set_sign(::std::string&& value) {
  
  sign_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:XmsgClientTokenInfo.sign)
}
#endif
inline void XmsgClientTokenInfo::set_sign(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  sign_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:XmsgClientTokenInfo.sign)
}
inline void XmsgClientTokenInfo::set_sign(const char* value, size_t size) {
  
  sign_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:XmsgClientTokenInfo.sign)
}
inline ::std::string* XmsgClientTokenInfo::mutable_sign() {
  
  // @@protoc_insertion_point(field_mutable:XmsgClientTokenInfo.sign)
  return sign_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* XmsgClientTokenInfo::release_sign() {
  // @@protoc_insertion_point(field_release:XmsgClientTokenInfo.sign)
  
  return sign_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void XmsgClientTokenInfo::set_allocated_sign(::std::string* sign) {
  if (sign != NULL) {
    
  } else {
    
  }
  sign_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), sign);
  // @@protoc_insertion_point(field_set_allocated:XmsgClientTokenInfo.sign)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)


// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_net_2dx_2dmsg_2dtoken_2dinfo_2eproto__INCLUDED
