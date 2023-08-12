use std::borrow::Cow;
use rustql_common::token::TokenKind;
use rustql_common::ast::common::*;
use rustql_common::ast::query::*;
use rustql_common::position::{Position, Span};
use crate::lexer::Lexer;
use crate::{is_keyword_name, parser_error, internal_error};

pub struct Parser<'a> {
    lexer: Lexer<'a>
}

impl<'a> Parser<'a> {
    pub fn new(source: &'a str) -> Self {
        Self {
            lexer: Lexer::new(source)
        }
    }
    fn get_start_pos(&self) -> Position {
        self.lexer.get_start_pos()
    }
    fn get_end_pos(&self) -> Position {
        self.lexer.get_end_pos()
    }
    fn get_value(&self) -> &'a str {
        self.lexer.get_value()
    }
    pub fn get_token(&mut self) -> TokenKind {
        let token = self.lexer.get_token();
        match token {
            TokenKind::Comment => self.next_token(),
            _ => token
        }
    }
    pub fn next_token(&mut self)-> TokenKind {
        loop {
            let token = self.lexer.next_token();
            match token {
                TokenKind::Comment => continue,
                _ => return token
            }
        }
    }
    fn expect_token(&mut self, expect_token_kind: TokenKind) {
        if self.get_token() == expect_token_kind {
            self.next_token();
        }else {
            parser_error!(format!("expect token {:?}", expect_token_kind), self);
        }
    }
    fn is_match_token(&mut self, expect_token_kind: TokenKind) -> bool {
        self.get_token() == expect_token_kind 
    }
    pub fn parse(&mut self) -> Document<'a> {
        self.parse_document()
    }
    fn parse_document(&mut self) -> Document<'a> {
        let mut definations: Vec<Defination> = Vec::new();
        while self.get_token() != TokenKind::EOFToken {
            definations.push(self.parse_defination())
        }  
        Document { definations }
    }
    fn parse_defination(&mut self) -> Defination<'a> {
        match self.get_token() {
            TokenKind::BracesLeft => Defination::OperationDefination(OperationDefination::SelectSet(self.parse_selectionset())),
            TokenKind::Name => {
                match self.get_value() {
                    "query" | "mutation" | "subscription" => Defination::OperationDefination(self.parse_operation()),
                    "fragment" => Defination::FragmentDefination(self.parse_fragement()),
                    _ => parser_error!(format!("Unknow Name token with value ({:?})", self.get_value() ), self)
                }
            }
            _ =>  parser_error!("Unknow token", self)
        }
    }
    fn parse_fragement(&mut self) -> FragmentDefination<'a> {
        let start_pos = self.get_start_pos();
        if !is_keyword_name!("fragment", self) {
            internal_error!("unreach code");
        }
        self.next_token();
        if is_keyword_name!("on", self) {
            parser_error!("fragment name can not be `on`", self);
        }
        let name = self.parse_name();
        if !is_keyword_name!("on", self) {
            parser_error!("fragment need to have type condition", self);
        }
        self.next_token();
        let type_name = self.parse_type();
        let mut directives: Option<Vec<Directive>> = None;
        if self.is_match_token(TokenKind::At) {
            let tuple = self.parse_directives();
            directives = Some(tuple.0);
        }
        let selectionset = self.parse_selectionset();
        let span = Span::new(start_pos, selectionset.span.end.clone());
        FragmentDefination { name, type_condition: type_name, directives, selectionset, span }
    }
    fn parse_operation(&mut self) -> OperationDefination<'a> {
        let start_pos = self.get_start_pos();
        let operation_type = self.get_value();
        self.next_token();
        let mut name: Option<Name<'a>> = None;
        let mut variable_definations: Option<Vec<VariableDefination<'a>>>= None;
        let mut directives: Option<Vec<Directive>> = None;
        if self.is_match_token(TokenKind::Name) {
            name = Some(self.parse_name());
        }
        if self.is_match_token(TokenKind::ParenthesesLeft) {
            variable_definations = Some(self.parse_variables());
        }
        if self.is_match_token(TokenKind::At) {
            let tuple = self.parse_directives();
            directives = Some(tuple.0);
        }
        let selectionset = self.parse_selectionset();
        let span = Span::new(start_pos, selectionset.span.end.clone());
        match operation_type {
            "query" => {
                OperationDefination::Query(Query { name, variable_definations, directives , selectionset, span })
            }
            "mutation" => {
                OperationDefination::Mutation(Mutation { name, variable_definations, directives , selectionset, span })
            }
            "subscription" => {
                OperationDefination::Subscription(Subscription { name, variable_definations, directives , selectionset, span })
            }
            _ => {
                internal_error!("unreach code, parse operation can only be called when operation type is query, mutation, subscription.")
            }
        }
    }
    fn parse_variables(&mut self) -> Vec<VariableDefination<'a>> {
        self.expect_token(TokenKind::ParenthesesLeft);
        let mut variable_defination: Vec<VariableDefination> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::EOFToken | TokenKind::ParenthesesRight => {
                    break;
                }
                TokenKind::DollarSign => {
                    let start_pos = self.get_start_pos();
                    self.next_token();
                    let name = self.parse_name();
                    self.expect_token(TokenKind::Colon);
                    let var_type = self.parse_type();
                    if self.is_match_token(TokenKind::Eqal) {
                        self.next_token();
                        let value = Some(self.parse_value());
                        let span = Span::new(start_pos, get_value_span(value.as_ref().unwrap()).end.clone());
                        variable_defination.push(VariableDefination { name, var_type, default_value: value, span })
                    }else {
                        let span = Span::new(start_pos, get_type_span(&var_type).end);
                        variable_defination.push(VariableDefination { name, var_type, default_value: None, span })
                    }
                }
                _ => {
                    parser_error!("Unknow token when parse variable defination", self);
                }
            }
        }
        self.expect_token(TokenKind::ParenthesesRight);
        variable_defination
    }
    fn parse_type(&mut self) -> VarType<'a> {
        let mut parsed_type: VarType<'a>;
        match self.get_token() {
            TokenKind::BracketLeft => {
                self.next_token();
                parsed_type = self.parse_type();
                self.expect_token(TokenKind::BracketRight);
                parsed_type = VarType::ListVarType(ListVarType { list_type: Box::new(parsed_type) })
            },
            TokenKind::Name => {
                let name = Cow::Borrowed(self.get_value());
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                self.next_token();
                parsed_type = VarType::NameVarType(NameVarType { name, span });
            },
            _ => {
                parser_error!("Unknow token when parse type", self);
            }
        }
        if self.is_match_token(TokenKind::Point) {
            self.next_token();
            VarType::NonNullVarType(NonNullType{ nonull_type: Box::new(parsed_type) })
        }else {
            parsed_type
        }
    }
    fn parse_selectionset(&mut self) -> SelectSet<'a> {
        let start_pos = self.get_start_pos();
        self.expect_token(TokenKind::BracesLeft);
        let mut selections: Vec<Selection<'a>> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::EOFToken | TokenKind::BracesRight => break,
                _ => selections.push(self.parse_selection())
            }
        }
        let end_pos = self.get_end_pos();
        self.expect_token(TokenKind::BracesRight);
        SelectSet { selections, span: Span::new(start_pos, end_pos) }
    }
    fn parse_selection(&mut self) -> Selection<'a> {
        match self.get_token() {
            TokenKind::Ellipsis => {
                let start_pos = self.get_start_pos();
                self.next_token();
                if is_keyword_name!("on", self) || self.is_match_token(TokenKind::At) || self.is_match_token(TokenKind::BracesLeft) {
                    Selection::InlineFragment(self.parse_inline_fragment(start_pos))
                }else {
                    Selection::FragmentSpread(self.parse_fragment_spread(start_pos))
                }
            }
            TokenKind::Name => {
                Selection::Field(self.parse_field())
            }
            _ => {
                parser_error!("Unknow token when parse selection",self);
            }
        }
    }
    /*
        Field:
            Alias(opt) Name Arguments(opt) Directives(opt) SelectionSet(opt)
     */
    fn parse_field(&mut self) -> Field<'a> {
        let start_pos = self.get_start_pos();
        let mut end_pos = self.get_end_pos();
        let mut alias = Some(self.parse_name());
        let name: Name<'_>;
        if self.is_match_token(TokenKind::Colon) {
            self.next_token();
            name = self.parse_name();
        }else {
            name = alias.take().unwrap();
            alias = None;
        }
        let mut arguments: Option<Vec<Argument<'a>>> = None;
        if self.is_match_token(TokenKind::ParenthesesLeft) {
            let tuple = self.parse_arguments();
            arguments = Some(tuple.0);
            end_pos = tuple.2;
        }
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if self.is_match_token(TokenKind::At) {
           let tuple = self.parse_directives();
           directives = Some(tuple.0);
           end_pos = tuple.2;
        }
        let mut selectionset:Option<SelectSet<'a>> = None;
        if self.is_match_token(TokenKind::BracesLeft) {
            selectionset = Some(self.parse_selectionset());
            end_pos = selectionset.as_ref().unwrap().span.end.clone();
        }
        Field { alias, name, arguments, directives, selectionset, span: Span::new(start_pos, end_pos) }
    }
    fn parse_inline_fragment(&mut self, start_pos: Position) -> InlineFragment<'a> {
        let mut type_name: Option<Name<'a>> = None;
        if is_keyword_name!("on", self) {
            self.next_token();
            type_name = Some(self.parse_name());
        }
        let mut directives: Option<Vec<Directive>> = None;
        if self.is_match_token(TokenKind::At) {
            let tuple = self.parse_directives();
            directives = Some(tuple.0);
        }
       let selectionset = self.parse_selectionset();
       let span = Span::new(start_pos, selectionset.span.end.clone());
       InlineFragment { type_condition: type_name, directives, selectionset, span}
    }
    fn parse_fragment_spread(&mut self, start_pos: Position)-> FragmentSpread<'a> {
        let name = self.parse_name();
        let mut end_pos = self.get_end_pos();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if self.get_token() == TokenKind::At {
            let tuple = self.parse_directives();
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        FragmentSpread { 
            name, directives, span: Span::new(start_pos, end_pos)
        }
    }
    fn parse_arguments(&mut self) -> (Vec<Argument<'a>>, Position, Position){
        let start_pos = self.get_start_pos();
        self.expect_token(TokenKind::ParenthesesLeft);
        let mut arguments: Vec::<Argument<'a>> =  Vec::new();
        loop {
            match self.get_token() {
                TokenKind::ParenthesesRight | TokenKind::EOFToken => {
                    break;
                }
                _ => {
                    let name = self.parse_name();
                    self.expect_token(TokenKind::Colon);
                    let value = self.parse_value();
                    let span = Span::new(name.span.start.clone(), get_value_span(&value).end);
                    arguments.push(Argument { name, value, span})
                }
            }
        }
        let end_pos = self.get_end_pos();
        self.expect_token(TokenKind::ParenthesesRight);
        (arguments, start_pos, end_pos)
    }
    fn parse_directives(&mut self) -> (Vec<Directive<'a>>, Position, Position) {
        let mut directives: Vec::<Directive<'a>> =  Vec::new();
        while self.get_token() == TokenKind::At {
            self.next_token();
            let name = self.parse_name();
            let start_pos = name.span.start.clone();
            let end_pos = name.span.end.clone();
            directives.push( if self.get_token() == TokenKind::ParenthesesLeft {
                let tuple = self.parse_arguments();
                Directive { name, arguments: Some(tuple.0), span: Span::new(start_pos, tuple.2)  }
            } else {
                Directive { name, arguments: None, span: Span::new(start_pos, end_pos) }
            });
        }
        let start_pos = directives[0].span.start.clone();
        let end_pos = directives[directives.len()-1].span.end.clone();
        (directives, start_pos, end_pos)
    }
    fn parse_name(&mut self) -> Name<'a> {
        match self.get_token() {
            TokenKind::Name => {
                let name =Cow::Borrowed(self.get_value());
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                self.next_token();
                Name { name, span }
            },
            _ => parser_error!("Unknow token when parse name", self)
        }
    }
    fn parse_value(&mut self)-> Value<'a> {
        match self.get_token() {
            TokenKind::FloatValue => {
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                let value = self.get_value();
                self.next_token();
                Value::FloatValue(FloatValue { value: Cow::Borrowed(value), span })
            },
            TokenKind::IntValue =>{
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                let value = self.get_value();
                self.next_token();
                Value::IntValue(IntValue { value: Cow::Borrowed(value), span })
            },
            TokenKind::StringValue => {
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                let value = self.get_value();
                self.next_token();
                Value::StringValue(StringValue { value: Cow::Borrowed(value), span })
            },
            TokenKind::DollarSign => {
                let start_pos = self.get_start_pos();
                self.next_token();
                match self.get_token() {
                    TokenKind::Name => {
                        let name = Cow::Borrowed(self.get_value());
                        let span = Span::new(start_pos, self.get_end_pos());
                        self.next_token();
                        Value::Variable(Variable { value: name, span })
                    }
                    _ => {
                        panic!()
                    }
                }
            },
            TokenKind::Name => {
                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                let value = self.get_value();
                self.next_token();
                match value {
                    "true" | "false" => Value::BooleanValue(BoolValue { value: Cow::Borrowed(value), span }),
                    "null" => Value::NullValue(NullValue { span }),
                    _ => Value::EnumValue(EnumValue { value: Cow::Borrowed(value), span }),
                }
            }
            TokenKind::BracesLeft => { 
                let start_pos = self.get_start_pos();
                self.next_token();
                let mut object_fields: Vec<ObjectField> = Vec::new();
                loop {
                    match self.get_token() {
                        TokenKind::BracesRight | TokenKind::EOFToken => {
                            break;
                        }
                        _ => {
                            let name = self.parse_name();
                            self.expect_token(TokenKind::Colon);
                            let value = self.parse_value();
                            object_fields.push(ObjectField {
                                name, value
                            })
                        }
                    }
                }
                let span = Span::new(start_pos, self.get_end_pos());
                self.expect_token(TokenKind::BracesRight);
                Value::ObjectValue(ObjectValue { value: object_fields, span })
            },
            TokenKind::BracketLeft => {
                let start_pos = self.get_start_pos();
                self.next_token();
                let mut values:Vec<Value<'a>> = Vec::new();
                loop {
                    match self.get_token() {
                        TokenKind::BracketRight | TokenKind::EOFToken => {
                            break;
                        }
                        _ => {
                            values.push(self.parse_value());
                        }
                    }
                }
                let span = Span::new(start_pos, self.get_end_pos());
                self.expect_token(TokenKind::BracketRight);
                Value::ListValue(ListValue { value: values, span })
             },
            _ => parser_error!("Unknow Value" ,self)
        }
    }
}