// Code generated by protoc-gen-go. DO NOT EDIT.
// source: users.proto

package users

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type GetAllUserReq struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAllUserReq) Reset()         { *m = GetAllUserReq{} }
func (m *GetAllUserReq) String() string { return proto.CompactTextString(m) }
func (*GetAllUserReq) ProtoMessage()    {}
func (*GetAllUserReq) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{0}
}

func (m *GetAllUserReq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllUserReq.Unmarshal(m, b)
}
func (m *GetAllUserReq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllUserReq.Marshal(b, m, deterministic)
}
func (m *GetAllUserReq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllUserReq.Merge(m, src)
}
func (m *GetAllUserReq) XXX_Size() int {
	return xxx_messageInfo_GetAllUserReq.Size(m)
}
func (m *GetAllUserReq) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllUserReq.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllUserReq proto.InternalMessageInfo

type GetAllUserResp struct {
	User                 []*GetUserResp `protobuf:"bytes,1,rep,name=user,proto3" json:"user,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *GetAllUserResp) Reset()         { *m = GetAllUserResp{} }
func (m *GetAllUserResp) String() string { return proto.CompactTextString(m) }
func (*GetAllUserResp) ProtoMessage()    {}
func (*GetAllUserResp) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{1}
}

func (m *GetAllUserResp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllUserResp.Unmarshal(m, b)
}
func (m *GetAllUserResp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllUserResp.Marshal(b, m, deterministic)
}
func (m *GetAllUserResp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllUserResp.Merge(m, src)
}
func (m *GetAllUserResp) XXX_Size() int {
	return xxx_messageInfo_GetAllUserResp.Size(m)
}
func (m *GetAllUserResp) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllUserResp.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllUserResp proto.InternalMessageInfo

func (m *GetAllUserResp) GetUser() []*GetUserResp {
	if m != nil {
		return m.User
	}
	return nil
}

type GetUserReq struct {
	UserId               int32    `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetUserReq) Reset()         { *m = GetUserReq{} }
func (m *GetUserReq) String() string { return proto.CompactTextString(m) }
func (*GetUserReq) ProtoMessage()    {}
func (*GetUserReq) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{2}
}

func (m *GetUserReq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetUserReq.Unmarshal(m, b)
}
func (m *GetUserReq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetUserReq.Marshal(b, m, deterministic)
}
func (m *GetUserReq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetUserReq.Merge(m, src)
}
func (m *GetUserReq) XXX_Size() int {
	return xxx_messageInfo_GetUserReq.Size(m)
}
func (m *GetUserReq) XXX_DiscardUnknown() {
	xxx_messageInfo_GetUserReq.DiscardUnknown(m)
}

var xxx_messageInfo_GetUserReq proto.InternalMessageInfo

func (m *GetUserReq) GetUserId() int32 {
	if m != nil {
		return m.UserId
	}
	return 0
}

type GetUserResp struct {
	UserId               int32    `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	UserName             string   `protobuf:"bytes,2,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserEmail            string   `protobuf:"bytes,3,opt,name=user_email,json=userEmail,proto3" json:"user_email,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetUserResp) Reset()         { *m = GetUserResp{} }
func (m *GetUserResp) String() string { return proto.CompactTextString(m) }
func (*GetUserResp) ProtoMessage()    {}
func (*GetUserResp) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{3}
}

func (m *GetUserResp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetUserResp.Unmarshal(m, b)
}
func (m *GetUserResp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetUserResp.Marshal(b, m, deterministic)
}
func (m *GetUserResp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetUserResp.Merge(m, src)
}
func (m *GetUserResp) XXX_Size() int {
	return xxx_messageInfo_GetUserResp.Size(m)
}
func (m *GetUserResp) XXX_DiscardUnknown() {
	xxx_messageInfo_GetUserResp.DiscardUnknown(m)
}

var xxx_messageInfo_GetUserResp proto.InternalMessageInfo

func (m *GetUserResp) GetUserId() int32 {
	if m != nil {
		return m.UserId
	}
	return 0
}

func (m *GetUserResp) GetUserName() string {
	if m != nil {
		return m.UserName
	}
	return ""
}

func (m *GetUserResp) GetUserEmail() string {
	if m != nil {
		return m.UserEmail
	}
	return ""
}

type CreUserReq struct {
	UserName             string   `protobuf:"bytes,1,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	UserEmail            string   `protobuf:"bytes,2,opt,name=user_email,json=userEmail,proto3" json:"user_email,omitempty"`
	UserPassword         string   `protobuf:"bytes,3,opt,name=user_password,json=userPassword,proto3" json:"user_password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreUserReq) Reset()         { *m = CreUserReq{} }
func (m *CreUserReq) String() string { return proto.CompactTextString(m) }
func (*CreUserReq) ProtoMessage()    {}
func (*CreUserReq) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{4}
}

func (m *CreUserReq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreUserReq.Unmarshal(m, b)
}
func (m *CreUserReq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreUserReq.Marshal(b, m, deterministic)
}
func (m *CreUserReq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreUserReq.Merge(m, src)
}
func (m *CreUserReq) XXX_Size() int {
	return xxx_messageInfo_CreUserReq.Size(m)
}
func (m *CreUserReq) XXX_DiscardUnknown() {
	xxx_messageInfo_CreUserReq.DiscardUnknown(m)
}

var xxx_messageInfo_CreUserReq proto.InternalMessageInfo

func (m *CreUserReq) GetUserName() string {
	if m != nil {
		return m.UserName
	}
	return ""
}

func (m *CreUserReq) GetUserEmail() string {
	if m != nil {
		return m.UserEmail
	}
	return ""
}

func (m *CreUserReq) GetUserPassword() string {
	if m != nil {
		return m.UserPassword
	}
	return ""
}

type CreUserResp struct {
	UserId               int32    `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreUserResp) Reset()         { *m = CreUserResp{} }
func (m *CreUserResp) String() string { return proto.CompactTextString(m) }
func (*CreUserResp) ProtoMessage()    {}
func (*CreUserResp) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{5}
}

func (m *CreUserResp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreUserResp.Unmarshal(m, b)
}
func (m *CreUserResp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreUserResp.Marshal(b, m, deterministic)
}
func (m *CreUserResp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreUserResp.Merge(m, src)
}
func (m *CreUserResp) XXX_Size() int {
	return xxx_messageInfo_CreUserResp.Size(m)
}
func (m *CreUserResp) XXX_DiscardUnknown() {
	xxx_messageInfo_CreUserResp.DiscardUnknown(m)
}

var xxx_messageInfo_CreUserResp proto.InternalMessageInfo

func (m *CreUserResp) GetUserId() int32 {
	if m != nil {
		return m.UserId
	}
	return 0
}

type ValidReq struct {
	UserEmail            string   `protobuf:"bytes,1,opt,name=user_email,json=userEmail,proto3" json:"user_email,omitempty"`
	UserPassword         string   `protobuf:"bytes,2,opt,name=user_password,json=userPassword,proto3" json:"user_password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ValidReq) Reset()         { *m = ValidReq{} }
func (m *ValidReq) String() string { return proto.CompactTextString(m) }
func (*ValidReq) ProtoMessage()    {}
func (*ValidReq) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{6}
}

func (m *ValidReq) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ValidReq.Unmarshal(m, b)
}
func (m *ValidReq) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ValidReq.Marshal(b, m, deterministic)
}
func (m *ValidReq) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ValidReq.Merge(m, src)
}
func (m *ValidReq) XXX_Size() int {
	return xxx_messageInfo_ValidReq.Size(m)
}
func (m *ValidReq) XXX_DiscardUnknown() {
	xxx_messageInfo_ValidReq.DiscardUnknown(m)
}

var xxx_messageInfo_ValidReq proto.InternalMessageInfo

func (m *ValidReq) GetUserEmail() string {
	if m != nil {
		return m.UserEmail
	}
	return ""
}

func (m *ValidReq) GetUserPassword() string {
	if m != nil {
		return m.UserPassword
	}
	return ""
}

type ValidRsp struct {
	Status               bool     `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ValidRsp) Reset()         { *m = ValidRsp{} }
func (m *ValidRsp) String() string { return proto.CompactTextString(m) }
func (*ValidRsp) ProtoMessage()    {}
func (*ValidRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{7}
}

func (m *ValidRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ValidRsp.Unmarshal(m, b)
}
func (m *ValidRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ValidRsp.Marshal(b, m, deterministic)
}
func (m *ValidRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ValidRsp.Merge(m, src)
}
func (m *ValidRsp) XXX_Size() int {
	return xxx_messageInfo_ValidRsp.Size(m)
}
func (m *ValidRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_ValidRsp.DiscardUnknown(m)
}

var xxx_messageInfo_ValidRsp proto.InternalMessageInfo

func (m *ValidRsp) GetStatus() bool {
	if m != nil {
		return m.Status
	}
	return false
}

func init() {
	proto.RegisterType((*GetAllUserReq)(nil), "GetAllUserReq")
	proto.RegisterType((*GetAllUserResp)(nil), "GetAllUserResp")
	proto.RegisterType((*GetUserReq)(nil), "GetUserReq")
	proto.RegisterType((*GetUserResp)(nil), "GetUserResp")
	proto.RegisterType((*CreUserReq)(nil), "CreUserReq")
	proto.RegisterType((*CreUserResp)(nil), "CreUserResp")
	proto.RegisterType((*ValidReq)(nil), "ValidReq")
	proto.RegisterType((*ValidRsp)(nil), "ValidRsp")
}

func init() { proto.RegisterFile("users.proto", fileDescriptor_030765f334c86cea) }

var fileDescriptor_030765f334c86cea = []byte{
	// 320 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0x5d, 0x4b, 0xc3, 0x30,
	0x14, 0x5d, 0x36, 0xf7, 0x75, 0xdb, 0x6d, 0x90, 0x07, 0x2d, 0x15, 0xa1, 0x44, 0x1c, 0xf5, 0x25,
	0x42, 0xfd, 0x05, 0x22, 0x32, 0x7c, 0x19, 0x52, 0xd0, 0x57, 0xc9, 0x68, 0x1e, 0x0a, 0xad, 0xfd,
	0x48, 0x86, 0x3f, 0xcc, 0x3f, 0x28, 0xb9, 0x24, 0x5b, 0x2b, 0x3a, 0xdf, 0x9a, 0x73, 0x4e, 0xce,
	0xb9, 0xbd, 0x27, 0xe0, 0xed, 0x95, 0x6c, 0x15, 0xaf, 0xdb, 0x4a, 0x57, 0x6c, 0x05, 0x8b, 0x8d,
	0xd4, 0x0f, 0x45, 0xf1, 0xaa, 0x64, 0x9b, 0xca, 0x86, 0x25, 0xb0, 0xec, 0x02, 0xaa, 0xa6, 0x11,
	0x9c, 0x99, 0x1b, 0x01, 0x89, 0x46, 0xb1, 0x97, 0xf8, 0x7c, 0x23, 0xb5, 0xe3, 0x52, 0x64, 0xd8,
	0x0d, 0xc0, 0x01, 0x6c, 0xe8, 0x05, 0x4c, 0x0d, 0xfa, 0x9e, 0x67, 0x01, 0x89, 0x48, 0x3c, 0x4e,
	0x27, 0xe6, 0xf8, 0x9c, 0xb1, 0x1d, 0x78, 0x9d, 0xbb, 0x7f, 0xea, 0xe8, 0x25, 0xcc, 0x91, 0xf8,
	0x10, 0xa5, 0x0c, 0x86, 0x11, 0x89, 0xe7, 0xe9, 0xcc, 0x00, 0x5b, 0x51, 0x4a, 0x7a, 0x05, 0x80,
	0xa4, 0x2c, 0x45, 0x5e, 0x04, 0x23, 0x64, 0x51, 0xfe, 0x64, 0x00, 0x56, 0x02, 0x3c, 0xb6, 0xd2,
	0x8d, 0xd2, 0x73, 0x22, 0x27, 0x9d, 0x86, 0x3f, 0x9c, 0xe8, 0x35, 0x2c, 0x90, 0xae, 0x85, 0x52,
	0x9f, 0x55, 0x9b, 0xd9, 0x2c, 0xdf, 0x80, 0x2f, 0x16, 0x63, 0x6b, 0xf0, 0x0e, 0x71, 0x27, 0x7e,
	0x89, 0x6d, 0x61, 0xf6, 0x26, 0x8a, 0x3c, 0x33, 0x43, 0xf5, 0x73, 0xc9, 0xbf, 0xb9, 0xc3, 0x5f,
	0x72, 0x99, 0xf3, 0x53, 0x35, 0x3d, 0x87, 0x89, 0xd2, 0x42, 0xef, 0x15, 0x7a, 0xcd, 0x52, 0x7b,
	0x4a, 0xbe, 0x08, 0x8c, 0xcd, 0x64, 0x8a, 0xde, 0x61, 0x3f, 0xb6, 0x53, 0xba, 0xe4, 0xbd, 0xc6,
	0xc3, 0x15, 0xef, 0x17, 0xce, 0x06, 0x74, 0x0d, 0x53, 0xdb, 0x14, 0xf5, 0x8e, 0x7d, 0x37, 0x61,
	0xaf, 0x7c, 0x36, 0xa0, 0xb7, 0xb8, 0x6d, 0xa1, 0xa5, 0x95, 0x1e, 0x57, 0x1f, 0xfa, 0xbc, 0xb3,
	0x18, 0xb4, 0xf4, 0x71, 0x62, 0x27, 0x9e, 0x73, 0xb7, 0x90, 0xd0, 0x7d, 0x1a, 0xdd, 0x6e, 0x82,
	0xef, 0xf2, 0xfe, 0x3b, 0x00, 0x00, 0xff, 0xff, 0x0c, 0xa6, 0x2c, 0xfd, 0xa6, 0x02, 0x00, 0x00,
}