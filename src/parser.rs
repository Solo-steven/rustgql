use std::borrow::Cow;
use crate::token::TokenKind;
use crate::{is_keyword_name, parser_error, internal_error};
use crate::{lexer::Lexer, position::Position};
use crate::ast::*;

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
    fn get_start_byte_index(&self) -> usize {
        self.lexer.get_start_byte_index()
    }
    fn get_end_byte_index(&self) -> usize {
        self.lexer.get_end_byte_index()
    }
    fn get_value(&self) -> &'a str {
        self.lexer.get_value()
    }
    fn get_token(&mut self) -> TokenKind {
        self.lexer.get_token()
    }
    fn next_token(&mut self)-> TokenKind {
        self.lexer.next_token()
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
        if is_keyword_name!("fragment", self) {
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
        let type_name = Type::NameType(self.parse_name());
        let mut directives: Vec<Directive> = Vec::new();
        if self.is_match_token(TokenKind::At) {
            directives = self.parse_directives();
        }
        FragmentDefination { name, type_condition: type_name, directives, selectionset: self.parse_selectionset() }
    }
    fn parse_operation(&mut self) -> OperationDefination<'a> {
        let operation_type = self.get_value();
        self.next_token();
        let mut name: Option<Name<'a>> = None;
        let mut variable_definations: Vec<VariableDefination<'a>> = Vec::new();
        let mut directives: Vec<Directive> = Vec::new();
        if self.is_match_token(TokenKind::Name) {
            name = Some(self.parse_name());
        }
        if self.is_match_token(TokenKind::ParenthesesLeft) {
            variable_definations = self.parse_variables();
        }
        if self.is_match_token(TokenKind::At) {
            directives = self.parse_directives();
        }
        let selectionset = self.parse_selectionset();
        match operation_type {
            "query" => {
                OperationDefination::Query(Query { name, variable_definations, directives , selectionset })
            }
            "mutation" => {
                OperationDefination::Mutation(Mutation { name, variable_definations, directives , selectionset })
            }
            "subscription" => {
                OperationDefination::Subscription(Subscription { name, variable_definations, directives , selectionset })
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
                    self.next_token();
                    let name = self.parse_name();
                    self.expect_token(TokenKind::Colon);
                    let var_type = self.parse_type();
                    if self.is_match_token(TokenKind::Eqal) {
                        self.next_token();
                        variable_defination.push(VariableDefination { name, var_type, default_value: Some(self.parse_value()) })
                    }else {
                        variable_defination.push(VariableDefination { name, var_type, default_value: None })
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
    fn parse_type(&mut self) -> Type<'a> {
        let parsed_type: Type<'a>;
        match self.get_token() {
            TokenKind::BracketLeft => {
                self.next_token();
                parsed_type = self.parse_type();
                self.expect_token(TokenKind::BracketRight);
            },
            TokenKind::Name => {
                let name = self.parse_name();
                parsed_type = Type::NameType(name);
            },
            _ => {
                parser_error!("Unknow token when parse type", self);
            }
        }
        if self.is_match_token(TokenKind::Point) {
            self.next_token();
            Type::NonNullType(Box::new(parsed_type))
        }else {
            parsed_type
        }
    }
    fn parse_selectionset(&mut self) -> SelectSet<'a> {
        self.expect_token(TokenKind::BracesLeft);
        let mut selections: Vec<Selection<'a>> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::EOFToken | TokenKind::BracesRight => break,
                _ => selections.push(self.parse_selection())
            }
        }
        self.expect_token(TokenKind::BracesRight);
        SelectSet { selections }
    }
    fn parse_selection(&mut self) -> Selection<'a> {
        match self.get_token() {
            TokenKind::Ellipsis => {
                self.next_token();
                if is_keyword_name!("on", self) || self.is_match_token(TokenKind::At) || self.is_match_token(TokenKind::BracesLeft) {
                    Selection::InlineFragment(self.parse_inline_fragment())
                }else {
                    Selection::FragmentSpread(self.parse_fragment_spread())
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
        let mut alias = Some(self.parse_name());
        let name: Name<'_>;
        if self.is_match_token(TokenKind::Colon) {
            self.next_token();
            name = self.parse_name();
        }else {
            name = alias.take().unwrap();
            alias = None;
        }
        let mut arguments: Vec<Argument<'a>> = Vec::new();
        if self.is_match_token(TokenKind::ParenthesesLeft) {
            arguments = self.parse_arguments();
        }
        let mut directives: Vec<Directive<'a>> = Vec::new();
        if self.is_match_token(TokenKind::At) {
            directives = self.parse_directives()
        }
        let mut selectionset:Option<SelectSet<'a>> = None;
        if self.is_match_token(TokenKind::BracesLeft) {
            selectionset = Some(self.parse_selectionset());
        }
        Field { alias, name, arguments, directives, selectionset, }
    }
    fn parse_inline_fragment(&mut self) -> InlineFragment<'a> {
        let mut type_name: Option<Name<'a>> = None;
        if is_keyword_name!("on", self) {
            self.next_token();
            type_name = Some(self.parse_name());
        }
        let mut directives: Vec<Directive> = Vec::new();
        if self.is_match_token(TokenKind::At) {
            directives = self.parse_directives();
        }
        InlineFragment { type_condition: type_name, directives, selectionset: self.parse_selectionset() }
    }
    fn parse_fragment_spread(&mut self)-> FragmentSpread<'a> {
        FragmentSpread { 
            name: self.parse_name(), 
            directives: if self.get_token() == TokenKind::At {
                self.parse_directives()
            }else {
                Vec::new()
            } 
        }
    }
    fn parse_arguments(&mut self) -> Vec<Argument<'a>>{
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
                    arguments.push(Argument { name, value })
                }
            }
        }
        self.expect_token(TokenKind::ParenthesesRight);
        arguments
    }
    fn parse_directives(&mut self) -> Vec<Directive<'a>> {
        let mut directives: Vec::<Directive<'a>> =  Vec::new();
        while self.get_token() == TokenKind::At {
            self.next_token();
            directives.push(Directive{ 
                name: self.parse_name(),
                arguments: if self.get_token() == TokenKind::ParenthesesLeft {
                    self.parse_arguments()
                }else {
                    Vec::new()
                }
            })
        }
        directives
    }
    fn parse_name(&mut self) -> Name<'a> {
        match self.get_token() {
            TokenKind::Name => {
                let name = Name(Cow::Borrowed(self.get_value()));
                self.next_token();
                name
            },
            _ => parser_error!("Unknow token when parse name", self)
        }
    }
    fn parse_value(&mut self)-> Value<'a> {
        match self.get_token() {
            TokenKind::FloatValue => {
                self.next_token();
                Value::FloatValue
            },
            TokenKind::IntValue =>{
                self.next_token();
                Value::IntValue
            },
            TokenKind::StringValue => {
                self.next_token();
                Value::StringValue(Cow::Borrowed(self.get_value()))
            },
            TokenKind::DollarSign => {
                self.next_token();
                match self.get_token() {
                    TokenKind::Name => {
                        let name = Cow::Borrowed(self.get_value());
                        self.next_token();
                        Value::Variable(name)
                    }
                    _ => {
                        panic!()
                    }
                }
            },
            TokenKind::Name => {
                match self.get_value() {
                    "true" | "false" => {
                        self.next_token();
                        Value::BooleanValue(false)
                    },
                    "null" => {
                        self.next_token();
                        Value::NullValue
                    },
                    _ => {
                        self.next_token();
                        Value::EnumValue(Cow::Borrowed(self.get_value()))
                    }
                }
            }
            TokenKind::BracesLeft => { 
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
                self.expect_token(TokenKind::BracesRight);
                Value::ObjectValue(object_fields)
            },
            TokenKind::BracketLeft => {
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
                self.expect_token(TokenKind::BracketRight);
                Value::ListValue(values)
             },
            _ => parser_error!("Unknow Value" ,self)
        }
    }
}