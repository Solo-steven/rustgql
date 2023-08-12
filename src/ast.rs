use std::borrow::Cow;
use serde_derive::{Deserialize, Serialize};
// use crate::position::Position;

/* ========== Common AST Type  ========== */
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum Value<'a> {
    Variable(Cow<'a, str>),
    IntValue,
    FloatValue,
    StringValue(Cow<'a, str>),
    BooleanValue(bool),
    NullValue,
    ListValue(Vec<Value<'a>>),
    ObjectValue(Vec<ObjectField<'a>>),
    EnumValue(Cow<'a, str>)
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  Name<'a> (pub Cow<'a, str>);
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum Type<'a> {
    NameType(Name<'a>),
    ListType(Box<Type<'a>>),
    NonNullType(Box<Type<'a>>)
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Argument<'a> {
    pub name: Name<'a>,
    pub value: Value<'a>
}
pub type ObjectField<'a> = Argument<'a>;
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Directive<'a> {
    pub name: Name<'a>,
    pub arguments: Vec<Argument<'a>>
}
/* ============ Document AST Type ========== */
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Document<'a> {
    pub definations: Vec<Defination<'a>>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum Defination<'a> {
    FragmentDefination(FragmentDefination<'a>),
    OperationDefination(OperationDefination<'a>),
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct FragmentDefination<'a> {
    pub name: Name<'a>,
    pub type_condition: Type<'a>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: SelectSet<'a>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum  OperationDefination<'a> {
    SelectSet(SelectSet<'a>),
    Query(Query<'a>),
    Mutation(Mutation<'a>),
    Subscription(Subscription<'a>),
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Query<'a> {
    pub name: Option<Name<'a>>,
    pub variable_definations: Vec<VariableDefination<'a>>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: SelectSet<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Mutation<'a> {
    pub name:Option<Name<'a>>,
    pub variable_definations: Vec<VariableDefination<'a>>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: SelectSet<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Subscription<'a> {
    pub name: Option<Name<'a>>,
    pub variable_definations: Vec<VariableDefination<'a>>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: SelectSet<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct VariableDefination<'a> {
    pub name: Name<'a>,
    pub var_type: Type<'a>,
    pub default_value: Option<Value<'a>>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  SelectSet<'a> {
    pub selections: Vec<Selection<'a>>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum Selection<'a> {
    Field(Field<'a>),
    FragmentSpread(FragmentSpread<'a>),
    InlineFragment(InlineFragment<'a>),
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Field<'a> {
    pub alias: Option<Name<'a>>,
    pub name: Name<'a>,
    pub arguments: Vec<Argument<'a>>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: Option<SelectSet<'a>>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct FragmentSpread<'a> {
    pub name: Name<'a>,
    pub directives: Vec<Directive<'a>>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct InlineFragment<'a> {
    pub type_condition: Option<Name<'a>>,
    pub directives: Vec<Directive<'a>>,
    pub selectionset: SelectSet<'a>,
}