use serde_derive::{Deserialize, Serialize};
use crate::ast::common::*;
use crate::position::Span;

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct SchmaTypeDefination<'a> {
    pub description: Option<StringValue<'a>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub query: Vec<NameVarType<'a>>,
    pub mutation: Vec<NameVarType<'a>>,
    pub subscription: Vec<NameVarType<'a>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DirectiveDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub argument_definations: Option<Vec<InputValueDefinition<'a>>>,
    pub directive_locations: Vec<DirectiveLocation>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum DirectiveLocation {
    // executable
    Query,
    Mutation,
    Subscription,
    Field,
    FragmentDefinition,
    FragmentSpread,
    InlineFragment,
    // type_system
    Schema,
    Scalar,
    Object,
    FieldDefinition,
    ArgumentDefinition,
    Interface,
    Union,
    Enum,
    EnumValue,
    InputObject,
    InputFieldDefinition,
    VariableDefinition,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct InputValueDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub var_type: VarType<'a>,
    pub default_value: Option<Value<'a>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ScalarTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ObjectTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub implement_interfaces: Option<Vec<NameVarType<'a>>>,
    pub field_definations: Option<Vec<FieldDefination<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct FieldDefination<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub argument_definations: Option<Vec<InputValueDefinition<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub var_type: VarType<'a>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct InterfaceTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub field_definations: Option<Vec<FieldDefination<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct UnionTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub union_member_types: Option<Vec<NameVarType<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct EnumTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub value_definations: Option<Vec<EnumValueDefinition<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct EnumValueDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub value: EnumValue<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct InputObjectTypeDefinition<'a> {
    pub description: Option<StringValue<'a>>,
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub input_definations: Option<Vec<InputValueDefinition<'a>>>,
    pub span: Span,
}