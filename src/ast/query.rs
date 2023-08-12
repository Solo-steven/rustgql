use serde_derive::{Deserialize, Serialize};
use crate::position::Span;
use crate::ast::common::*;

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
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: SelectSet<'a>,
    pub span: Span,
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
    pub variable_definations: Option<Vec<VariableDefination<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: SelectSet<'a>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Mutation<'a> {
    pub name:Option<Name<'a>>,
    pub variable_definations: Option<Vec<VariableDefination<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: SelectSet<'a>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Subscription<'a> {
    pub name: Option<Name<'a>>,
    pub variable_definations: Option<Vec<VariableDefination<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: SelectSet<'a>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct VariableDefination<'a> {
    pub name: Name<'a>,
    pub var_type: Type<'a>,
    pub default_value: Option<Value<'a>>,
    pub span: Span,
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct  SelectSet<'a> {
    pub selections: Vec<Selection<'a>>,
    pub span: Span,
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
    pub arguments: Option<Vec<Argument<'a>>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: Option<SelectSet<'a>>,
    pub span: Span
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct FragmentSpread<'a> {
    pub name: Name<'a>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub span: Span
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct InlineFragment<'a> {
    pub type_condition: Option<Name<'a>>,
    pub directives: Option<Vec<Directive<'a>>>,
    pub selectionset: SelectSet<'a>,
    pub span: Span
}