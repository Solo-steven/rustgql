use std::borrow::Cow;
use serde_derive::{Deserialize, Serialize};
use crate::position::Span;
use crate::ast::query::*;
use crate::ast::schema::*;
// use crate::position::Position;

/* ========== Common AST Type  ========== */
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub enum Value<'a> {
    Variable(Variable<'a>),
    IntValue(IntValue<'a>),
    FloatValue(FloatValue<'a>),
    StringValue(StringValue<'a>),
    BooleanValue(BoolValue<'a>),
    NullValue(NullValue),
    ListValue(ListValue<'a>),
    ObjectValue(ObjectValue<'a>),
    EnumValue(EnumValue<'a>)
}

pub fn get_value_span(value: &Value) -> Span {
    match value {
        Value::Variable(value) => value.span.clone(),
        Value::IntValue(value) => value.span.clone(),
        Value::FloatValue(value) => value.span.clone(),
        Value::StringValue(value) => value.span.clone(),
        Value::BooleanValue(value) => value.span.clone(),
        Value::NullValue(value) => value.span.clone(),
        Value::ListValue(value) => value.span.clone(),
        Value::ObjectValue(value) => value.span.clone(),
        Value::EnumValue(value) => value.span.clone(),
    }
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  Variable<'a> {
    pub value: Cow<'a, str>,
    pub span: Span
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct IntValue<'a> {
    pub value: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct FloatValue<'a> {
    pub value: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct StringValue<'a> {
    pub value: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct BoolValue<'a> {
    pub value: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct NullValue {
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct EnumValue<'a> {
    pub value: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct ListValue<'a> {
    pub value: Vec<Value<'a>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct ObjectValue<'a> {
    pub value: Vec<ObjectField<'a>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub struct  Name<'a> {
    pub name: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub enum VarType<'a> {
    NameVarType(NameVarType<'a>),
    ListVarType(ListVarType<'a>),
    NonNullVarType(NonNullType<'a>)
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct NameVarType<'a> {
    pub name: Cow<'a, str>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct ListVarType<'a> {
    pub list_type: Box<VarType<'a>>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  NonNullType<'a> {
    pub nonull_type: Box<VarType<'a>>
}
pub fn get_type_span(some_type: &VarType) -> Span {
    match some_type {
        VarType::NameVarType(name_type) => name_type.span.clone(),
        VarType::ListVarType(list_type) => get_type_span(list_type.list_type.as_ref()),
        VarType::NonNullVarType(nonull_type) => get_type_span(nonull_type.nonull_type.as_ref())
    }
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub struct Argument<'a> {
    pub name: Name<'a>,
    pub value: Value<'a>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub struct  ObjectField<'a> {
    pub name: Name<'a>,
    pub value: Value<'a>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub struct Directive<'a> {
    pub name: Name<'a>,
    pub arguments: Option<Vec<Argument<'a>>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub struct Document<'a> {
    pub definations: Vec<Defination<'a>>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(tag="type")]
pub enum Defination<'a> {
    // type system defination
    SchemaTypeDefination(SchmaTypeDefination<'a>),
    DirectiveDefination(DirectiveDefinition<'a>),
    ScalarTypeDefinition(ScalarTypeDefinition<'a>),
    ObjectTypeDefinition(ObjectTypeDefinition<'a>),
    InterfaceTypeDefinition(InterfaceTypeDefinition<'a>),
    UnionTypeDefinition(UnionTypeDefinition<'a>),
    EnumTypeDefinition(EnumTypeDefinition<'a>),
    InputObjectTypeDefinition(InputObjectTypeDefinition<'a>),
    // type extension defination
    /* TODO */
    // operation defination
    SelectSet(SelectSet<'a>),
    Query(Query<'a>),
    Mutation(Mutation<'a>),
    Subscription(Subscription<'a>),
    // fragment defination
    FragmentDefination(FragmentDefination<'a>),
}