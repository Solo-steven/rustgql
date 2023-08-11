use std::borrow::Cow;
use serde_derive::{Deserialize, Serialize};
use crate::position::Position;

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
    ObjectValue,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  Name<'a> (Cow<'a, str>);
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub enum Type<'a> {
    Name(Name<'a>),
    List(Box<Name<'a>>),
    NonNull(Box<Name<'a>>)
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Argument<'a> {
    name: Name<'a>,
    value: Value<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Derective<'a> {
    name: Name<'a>,
    argumenes: Vec<Argument<'a>>
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
    pub type_condition: Name<'a>,
    pub directives: Vec<Derective<'a>>,
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
    pub name: Name<'a>,
    pub variable_defination: Vec<VariableDefination<'a>>,
    pub directives: Vec<Derective<'a>>,
    pub selectionset: SelectSet<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Mutation<'a> {
    pub name: Name<'a>,
    pub variable_defination: Vec<VariableDefination<'a>>,
    pub directives: Vec<Derective<'a>>,
    pub selectionset: SelectSet<'a>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Subscription<'a> {
    pub name: Name<'a>,
    pub variable_defination: Vec<VariableDefination<'a>>,
    pub directives: Vec<Derective<'a>>,
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
    pub directives: Vec<Derective<'a>>,
    pub selectionset: Option<SelectSet<'a>>
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct FragmentSpread<'a> {
    pub name: Name<'a>,
    pub directives: Vec<Derective<'a>>,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct InlineFragment<'a> {
    pub type_condition: Name<'a>,
    pub directives: Vec<Derective<'a>>,
    pub selectionset: SelectSet<'a>,
}