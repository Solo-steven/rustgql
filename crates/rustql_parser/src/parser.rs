use std::borrow::Cow;
use rustql_common::token::TokenKind;
use rustql_common::ast::common::*;
use rustql_common::ast::query::*;
use rustql_common::ast::schema::*;
use rustql_common::position::{Position, Span};
use crate::lexer::Lexer;
use crate::{is_keyword_name, expect_keyword_name, parser_error, internal_error};

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
            TokenKind::BracesLeft => Defination::SelectSet(self.parse_selectionset()),
            TokenKind::Name => {
                match self.get_value() {
                    "query" | "mutation" | "subscription" => self.parse_operation(),
                    "fragment" => Defination::FragmentDefination(self.parse_fragement()),
                    "schema" => Defination::SchemaTypeDefination(self.parse_schema_type_defination(None)),
                    "scalar" => Defination::ScalarTypeDefinition(self.parse_scaler_type_defination(None)),
                    "type" =>  Defination::ObjectTypeDefinition(self.parse_object_type_defination(None)),
                    "interface" => Defination::InterfaceTypeDefinition(self.parse_interface_type_defination(None)),
                    "input" => Defination::InputObjectTypeDefinition(self.parse_input_object_type_defination(None)),
                    "enum" => Defination::EnumTypeDefinition(self.parse_enum_type_defination(None)),
                    "union" => Defination::UnionTypeDefinition(self.parse_union_type_defination(None)),
                    "directive" =>  Defination::DirectiveDefination(self.parse_directive(None)),
                    "extend" => self.parse_extends(),
                    _ => parser_error!(format!("Unknow Name token with value ({:?})", self.get_value() ), self)
                }
            }
            TokenKind::StringValue => {
                let description = StringValue{ 
                    value: Cow::Borrowed(self.get_value()), 
                    span: Span::new(self.get_start_pos(), self.get_end_pos()) 
                };
                self.next_token();
                match self.get_token() {
                    TokenKind::Name => {
                        match self.get_value() {
                            "schema" => Defination::SchemaTypeDefination(self.parse_schema_type_defination(Some(description))),
                            "scalar" => Defination::ScalarTypeDefinition(self.parse_scaler_type_defination(Some(description))),
                            "type" =>  Defination::ObjectTypeDefinition(self.parse_object_type_defination(Some(description))),
                            "interface" => Defination::InterfaceTypeDefinition(self.parse_interface_type_defination(Some(description))),
                            "input" => Defination::InputObjectTypeDefinition(self.parse_input_object_type_defination(Some(description))),
                            "enum" => Defination::EnumTypeDefinition(self.parse_enum_type_defination(Some(description))),
                            "union" => Defination::UnionTypeDefinition(self.parse_union_type_defination(Some(description))),
                            "directive" =>  Defination::DirectiveDefination(self.parse_directive(Some(description))),
                            "extend" => self.parse_extends(),
                            _ => parser_error!(format!("Unknow Name token with value ({:?})", self.get_value() ), self)
                        }
                    }
                    _ => parser_error!("description should be followed by TypeDefination.", self)
                }
            }
            _ =>  parser_error!("Unknow token when parse top level", self)
        }
    }
    fn parse_fragement(&mut self) -> FragmentDefination<'a> {
        let start_pos = self.get_start_pos();
        expect_keyword_name!("fragment", self);
        if is_keyword_name!("on", self) {
            parser_error!("fragment name can not be `on`", self);
        }
        let name = self.parse_name();
        expect_keyword_name!("on", self);
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
    fn parse_operation(&mut self) -> Defination<'a> {
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
            "query" => Defination::Query(Query { name, variable_definations, directives , selectionset, span }),
            "mutation" => Defination::Mutation(Mutation { name, variable_definations, directives , selectionset, span }),
            "subscription" => Defination::Subscription(Subscription { name, variable_definations, directives , selectionset, span }),
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
        let mut type_name: Option<NameVarType<'a>> = None;
        if is_keyword_name!("on", self) {
            self.next_token();
            type_name = Some(match self.parse_type() {
                VarType::ListVarType(_) => parser_error!("inline fragment type can not be list type", self),
                VarType::NonNullVarType(_) => parser_error!("inline fragment type can not be non null type", self),
                VarType::NameVarType(name_type) => name_type,
            })
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
    fn parse_maybe_directive(&mut self) -> Option<(Vec<Directive<'a>>, Position, Position)> {
        if self.is_match_token(TokenKind::At) {
            Some(self.parse_directives())
        }else {
            None
        }
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
    fn parse_extends(&mut self) -> Defination<'a> {
        let start_pos = self.get_start_pos();
        expect_keyword_name!("extend", self);
        match self.get_token() {
            TokenKind::Name => {
                match self.get_value() {
                    "schema" => Defination::SchemaTypeExtension(self.parse_schema_extension(start_pos)),
                    "scalar" => Defination::ScalarTypeExtension(self.parse_scaler_type_extension(start_pos)),
                    "type" =>  Defination::ObjectTypeExtension(self.parse_object_extension(start_pos)),
                    "interface" => Defination::InterfaceTypeExtension(self.parse_interface_extension(start_pos)),
                    "input" => Defination::InputObjectTypeExtension(self.parse_input_object_extension(start_pos)),
                    "enum" => Defination::EnumTypeExtension(self.parse_enum_extension(start_pos)),
                    "union" => Defination::UnionTypeExtension(self.parse_union_extension(start_pos)),
                    _ => parser_error!("", self)
                }
            }
            _ => parser_error!("", self)
        }
    }
    fn parse_schema_type_defination(&mut self, description: Option<StringValue<'a>>) -> SchmaTypeDefination<'a> {
        let start_pos = self.get_start_pos();
        expect_keyword_name!("schema", self);
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
        }
        let tuple = self.parse_operation_type_definations();
        let span = Span::new(start_pos, tuple.4);
        SchmaTypeDefination { description, directives, query: tuple.0, mutation: tuple.1, subscription: tuple.2, span }
    }
    fn parse_schema_extension(&mut self, start_pos: Position) -> SchemaTypeExtension<'a> {
        let schema_def = self.parse_schema_type_defination(None);
        SchemaTypeExtension { 
            directives: schema_def.directives, span: Span::new(start_pos, schema_def.span.end),
            query: schema_def.query, mutation: schema_def.mutation, subscription: schema_def.subscription 
        }
    }
    fn parse_directive(&mut self, description: Option<StringValue<'a>>) -> DirectiveDefinition<'a> {
        expect_keyword_name!("directive", self);
        self.expect_token(TokenKind::At);
        let name = self.parse_name();
        let start_pos = match description.as_ref() {
            Some(descr) => descr.span.start.clone(),
            None =>  name.span.start.clone()
        };
        let mut argument_definations = None;
        if self.is_match_token(TokenKind::ParenthesesLeft) {
            argument_definations = Some(self.parse_input_value_definations().0);
        }
        expect_keyword_name!("on", self);
        let mut end_pos: Position = Position::new();
        let mut directive_locations = Vec::new();
        let mut is_frist = true;
        loop {
            if is_frist {
                is_frist = false;
                if self.is_match_token(TokenKind::Pipe) {
                    self.next_token();
                }
            }else if self.is_match_token(TokenKind::Pipe) {
                self.next_token();
            }else {
                break;
            }
            directive_locations.push(match self.get_token() {
                TokenKind::Name => {
                    match self.get_value() {
                        "QUERY" => DirectiveLocation::Query,
                        "MUTATION" => DirectiveLocation::Mutation,
                        "SUBSCRIPTION" => DirectiveLocation::Subscription,
                        "FIELD" => DirectiveLocation::Field,
                        "FRAGMENT_DEFINITION" => DirectiveLocation::FieldDefinition,
                        "FRAGMENT_SPREAD" => DirectiveLocation::FragmentSpread,
                        "INLINE_FRAGMENT" => DirectiveLocation::InlineFragment,
                        "SCHEMA" => DirectiveLocation::Schema,
                        "SCALAR" => DirectiveLocation::Scalar,
                        "OBJECT" => DirectiveLocation::Object,
                        "FIELD_DEFINITION" => DirectiveLocation::FieldDefinition,
                        "ARGUMENT_DEFINITION" => DirectiveLocation::ArgumentDefinition,
                        "INTERFACE" => DirectiveLocation::Interface,
                        "UNION" => DirectiveLocation::Union,
                        "ENUM" => DirectiveLocation::Enum,
                        "ENUM_VALUE" => DirectiveLocation::EnumValue,
                        "INPUT_OBJECT" => DirectiveLocation::InputObject,
                        "INPUT_FIELD_DEFINITION" => DirectiveLocation::InputFieldDefinition,
                        _ => parser_error!("", self)
                    }
                }
                _ => parser_error!("", self)
            });
            end_pos = self.get_end_pos();
            self.next_token();
        }
        DirectiveDefinition { description, name, argument_definations, directive_locations, span: Span::new(start_pos, end_pos) }
    }
    fn parse_operation_type_definations(&mut self) -> (Vec<NameVarType<'a>>, Vec<NameVarType<'a>>, Vec<NameVarType<'a>>, Position, Position) {
        let start_pos = self.get_start_pos();
        self.expect_token(TokenKind::BracesLeft);
        let mut query: Vec<NameVarType<'a>> = Vec::new();
        let mut mutation: Vec<NameVarType<'a>> = Vec::new();
        let mut subscription: Vec<NameVarType<'a>> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::BracesRight | TokenKind::EOFToken  =>{
                    break;
                }
                TokenKind::Name => {
                    let operation_type = self.get_value();
                    self.next_token();
                    self.expect_token(TokenKind::Colon);
                    let name = match self.parse_type() {
                        VarType::NameVarType(name) => name,
                        VarType::ListVarType(_) => parser_error!("", self),
                        VarType::NonNullVarType(_) => parser_error!("", self),
                    };
                    match operation_type {
                        "query" => query.push(name),
                        "mutation" => mutation.push(name),
                        "subscription" => subscription.push(name),
                        _ => parser_error!(format!("unknow operation type {:?}",operation_type), self)
                    }
                }
                _ => parser_error!(format!("unexpect token {:?} happend at begin of schem's operation defination.", self.get_token()), self)
            }
        }
        let end_pos = self.get_end_pos();
        self.expect_token(TokenKind::BracesRight);
        (query, mutation, subscription, start_pos, end_pos)
    } 
    fn parse_scaler_type_defination(&mut self, description: Option<StringValue<'a>>) -> ScalarTypeDefinition<'a> {
        let name = self.parse_name();
        let start_pos = match description.as_ref() {
            Some(descr) => descr.span.start.clone(),
            None =>  name.span.start.clone()
        };
        let mut end_pos: Position = name.span.end.clone();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        let span = Span::new(start_pos, end_pos);
        ScalarTypeDefinition { description, name, directives, span }
    }
    fn parse_scaler_type_extension(&mut self, start_pos: Position) -> ScalarTypeExtension<'a> {
        let scaler_type_def = self.parse_scaler_type_defination(None);
        ScalarTypeExtension { 
            name: scaler_type_def.name, directives: 
            scaler_type_def.directives, span: Span::new(start_pos, scaler_type_def.span.end)
        }
    }
    fn parse_object_type_defination(&mut self, description: Option<StringValue<'a>>) -> ObjectTypeDefinition<'a> {
        expect_keyword_name!("type", self);
        let name = self.parse_name();
        let start_pos = name.span.start.clone();
        let mut end_pos: Position = name.span.end.clone();
        let mut implement_interfaces: Vec<NameVarType<'a>> = Vec::new();
        if is_keyword_name!("implement", self) {
            self.next_token();
            let mut is_frist = true;
            loop {
                if !is_keyword_name!("&", self) {
                    if !is_frist {
                        break;
                    }
                    is_frist = false;
                }
                self.next_token();
                implement_interfaces.push(match self.parse_type() {
                    VarType::NameVarType(name) => name,
                    VarType::ListVarType(_) => parser_error!("list type can not used in implement interface", self),
                    VarType::NonNullVarType(_) => parser_error!("non null type can not used in implement interface", self),
                })
            }
        }
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        let mut field_definations: Option<Vec<FieldDefination<'a>>> = None;
        if self.get_token() == TokenKind::BracesLeft {
            let tuple = self.parse_field_definations();
            field_definations = Some(tuple.0);
            end_pos = tuple.2;
        }
        ObjectTypeDefinition { 
            description, name, 
            implement_interfaces:  if implement_interfaces.is_empty() { None } else { Some(implement_interfaces) }, 
            field_definations, directives, 
            span: Span::new(start_pos, end_pos) 
        }
    }
    fn parse_object_extension(&mut self, start_pos: Position) -> ObjectTypeExtension<'a> {
        let object_type_def = self.parse_object_type_defination(None);
        ObjectTypeExtension { 
            name: object_type_def.name, implement_interfaces: object_type_def.implement_interfaces, 
            field_definations: object_type_def.field_definations, directives: object_type_def.directives, 
            span: Span::new(start_pos ,object_type_def.span.end),
        }
    }
    fn parse_field_definations(&mut self) -> (Vec<FieldDefination<'a>>, Position, Position ) {
        let start_pos = self.get_start_pos();
        self.expect_token(TokenKind::BracesLeft);
        let mut field_definations: Vec<FieldDefination<'a>> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::BracesRight | TokenKind::EOFToken => {
                    break;
                }
                _ => {
                    let field_description = match self.get_token() {
                        TokenKind::StringValue => {
                            let span = Span::new(self.get_start_pos(), self.get_end_pos());
                            let value = Cow::Borrowed(self.get_value());
                            self.next_token();
                            Some(StringValue{ value, span })
                        },
                        _ => None
                    };
                    let name = self.parse_name();
                    let mut argument_definations = None;
                    if self.get_token() == TokenKind::ParenthesesLeft {
                        argument_definations = Some(self.parse_input_value_definations().0);
                    }
                    self.expect_token(TokenKind::Colon);
                    let var_type = self.parse_type();
                    let mut directives: Option<Vec<Directive<'a>>> = None;
                    if let Some(tuple) = self.parse_maybe_directive() {
                        directives = Some(tuple.0);
                    }
                    let start_pos = match &field_description {
                        Some(desc) => desc.span.start.clone(),
                        None => name.span.start.clone()
                    };
                    let end_pos = match directives.as_ref() {
                        Some(dirs) => dirs[dirs.len()-1].span.end.clone(),
                        None => get_type_span(&var_type).end
                    };
                    field_definations.push(FieldDefination { 
                        description: field_description, 
                        name, argument_definations, 
                        directives, var_type, span: Span::new(start_pos, end_pos) 
                    })
                }
            }
        }
        let end_pos = self.get_end_pos();
        self.expect_token(TokenKind::BracesRight);
        (field_definations, start_pos, end_pos)
    }
    fn parse_input_value_definations(&mut self) -> (Vec<InputValueDefinition<'a>>, Position, Position) {
        let start_pos = self.get_start_pos();
        self.expect_token(TokenKind::ParenthesesLeft);
        let mut argument_definations: Vec<InputValueDefinition<'a>> = Vec::new();
        loop {
            match self.get_token() {
                TokenKind::ParenthesesRight | TokenKind::EOFToken => {
                    break;
                }
                _ => {
                    let argument_description = match self.get_token() {
                        TokenKind::StringValue => {
                            let span = Span::new(self.get_start_pos(), self.get_end_pos());
                            let value = Cow::Borrowed(self.get_value());
                            self.next_token();
                            Some(StringValue{ value, span })
                        },
                        _ => None
                    };
                    let name = self.parse_name();
                    let start_pos = match &argument_description {
                        Some(desc) => desc.span.start.clone(),
                        None => name.span.start.clone()
                    };
                    self.expect_token(TokenKind::Colon);
                    let mut end_pos: Position;
                    let var_type = self.parse_type();
                    end_pos = get_type_span(&var_type).end;
                    let mut default_value = None;
                    if self.get_token() == TokenKind::Eqal {
                        self.next_token();
                        default_value = Some(self.parse_value());
                        end_pos = get_value_span(default_value.as_ref().unwrap()).end;
                    }
                    let mut directives: Option<Vec<Directive<'a>>> = None;
                    if let Some(tuple) = self.parse_maybe_directive() {
                        directives = Some(tuple.0);
                        end_pos = tuple.2;
                    }
                    argument_definations.push(InputValueDefinition { 
                        description: argument_description, 
                        name, var_type, default_value, directives, 
                        span: Span::new(start_pos , end_pos)
                    })
                }
            }
        }
        let end_pos = self.get_end_pos();
        self.expect_token(TokenKind::ParenthesesRight);
        (argument_definations, start_pos, end_pos)
    }
    fn parse_interface_type_defination(&mut self, description: Option<StringValue<'a>>) -> InterfaceTypeDefinition<'a> {
        expect_keyword_name!("interface", self);
        let name = self.parse_name();
        let start_pos = match &description {
            Some(desc) => desc.span.start.clone(),
            None => name.span.start.clone()
        };
        let mut end_pos = name.span.end.clone();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        let mut field_definations: Option<Vec<FieldDefination<'a>>> = None;
        if self.get_token() == TokenKind::BracesLeft {
            let tuple = self.parse_field_definations();
            field_definations = Some(tuple.0);
            end_pos = tuple.2;
        }
        InterfaceTypeDefinition { description, name, directives, field_definations, span: Span::new(start_pos, end_pos) }
    }
    fn parse_interface_extension(&mut self, start_pos: Position) -> InterfaceTypeExtension<'a> {
        let interface_def = self.parse_interface_type_defination(None);
        InterfaceTypeExtension { 
            name: interface_def.name, span: Span::new(start_pos, interface_def.span.end),
            directives: interface_def.directives, field_definations: interface_def.field_definations
         }
    }
    fn parse_input_object_type_defination(&mut self, description: Option<StringValue<'a>>) -> InputObjectTypeDefinition<'a> {
        expect_keyword_name!("input", self);
        let name = self.parse_name();
        let start_pos = match &description {
            Some(desc) => desc.span.start.clone(),
            None => name.span.start.clone()
        };
        let mut end_pos = name.span.end.clone();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        let mut input_definations: Option<Vec<InputValueDefinition<'a>>> = None;
        if self.get_token() == TokenKind::BracesLeft {
            let tuple = self.parse_input_value_definations();
            input_definations = Some(tuple.0);
            end_pos = tuple.2;
        }
        InputObjectTypeDefinition { description, name, directives, input_definations, span: Span::new(start_pos, end_pos) }
    }
    fn parse_input_object_extension(&mut self, start_pos: Position) -> InputObjectTypeExtension<'a> {
        let input_object_def = self.parse_input_object_type_defination(None);
        InputObjectTypeExtension { 
            name: input_object_def.name, span: Span::new(start_pos, input_object_def.span.end),
            directives: input_object_def.directives, input_definations: input_object_def.input_definations
         }
    }
    fn parse_enum_type_defination(&mut self, description: Option<StringValue<'a>>) -> EnumTypeDefinition<'a> {
        expect_keyword_name!("enum", self);
        let name = self.parse_name();
        let start_pos = match &description {
            Some(desc) => desc.span.start.clone(),
            None => name.span.start.clone()
        };
        let mut end_pos = name.span.end.clone();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if self.get_token() == TokenKind::At {
            let tuple = self.parse_directives();
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        let mut value_definations = Vec::new();
        if self.get_token() == TokenKind::BracesLeft {
            self.next_token();
            loop {
                match self.get_token() {
                    TokenKind::BracesRight | TokenKind::EOFToken => {
                        break;
                    }
                    _ => {
                        let enum_description = match self.get_token() {
                            TokenKind::StringValue => {
                                let span = Span::new(self.get_start_pos(), self.get_end_pos());
                                let value = Cow::Borrowed(self.get_value());
                                self.next_token();
                                Some(StringValue{ value, span })
                            },
                            _ => None
                        };
                        let enum_value = match self.parse_value() {
                            Value::EnumValue(value) => value,
                            _ => parser_error!("invalid enum value", self)
                        };
                        let enum_start_pos = match &enum_description {
                            Some(desc) => desc.span.start.clone(),
                            None =>  enum_value.span.start.clone(),
                        };
                        let mut enum_end_pos = enum_value.span.end.clone();
                        let mut enum_directives: Option<Vec<Directive<'a>>> = None;
                        if let Some(tuple) = self.parse_maybe_directive() {
                            enum_directives = Some(tuple.0);
                            enum_end_pos = tuple.2;
                        }
                        value_definations.push(EnumValueDefinition {
                            description: enum_description,
                            value: enum_value,
                            directives: enum_directives,
                            span: Span::new(enum_start_pos, enum_end_pos)
                        });
                    }
                }
            }
        }
        self.expect_token(TokenKind::BracesRight);
        EnumTypeDefinition { 
            description, name, directives, span: Span::new(start_pos, end_pos),
            value_definations: if value_definations.is_empty() { None } else { Some(value_definations) }
        }
    }
    fn parse_enum_extension(&mut self, start_pos: Position) -> EnumTypeExtension<'a> {
        let enum_def = self.parse_enum_type_defination(None);
        EnumTypeExtension { 
            name: enum_def.name, span: Span::new(start_pos, enum_def.span.end),
            directives: enum_def.directives, value_definations: enum_def.value_definations }
    }
    fn parse_union_type_defination(&mut self, description: Option<StringValue<'a>>) -> UnionTypeDefinition<'a> {
        expect_keyword_name!("union", self);
        let name = self.parse_name();
        let start_pos = match &description {
            Some(desc) => desc.span.start.clone(),
            None => name.span.start.clone()
        };
        let mut end_pos = name.span.end.clone();
        let mut directives: Option<Vec<Directive<'a>>> = None;
        if let Some(tuple) = self.parse_maybe_directive() {
            directives = Some(tuple.0);
            end_pos = tuple.2;
        }
        self.expect_token(TokenKind::Eqal);
        let mut is_frist = true;
        let mut union_member_types: Vec<NameVarType<'a>> = Vec::new();
        loop {
            if !is_frist {
                if self.get_token() == TokenKind::Pipe {
                    self.next_token();
                }else {
                    break;
                }
            }else {
                is_frist = false;
                if self.get_token() == TokenKind::Pipe {
                    self.next_token();
                }
            }
            let member_type =  match self.parse_type() {
                VarType::NameVarType(name) => name,
                VarType::ListVarType(_) => parser_error!("", self),
                VarType::NonNullVarType(_) => parser_error!("", self)
            };
            end_pos = member_type.span.end.clone();
            union_member_types.push(member_type);
        }
        UnionTypeDefinition {
            description, name, directives, 
            union_member_types: if union_member_types.is_empty() { None } else { Some(union_member_types) }, 
            span: Span::new(start_pos, end_pos)
        }
    }
    fn parse_union_extension(&mut self, start_pos: Position)  -> UnionTypeExtension<'a>{
        let union_def = self.parse_union_type_defination(None);
        UnionTypeExtension { 
            name: union_def.name, span: Span::new(start_pos, union_def.span.end),
            directives: union_def.directives, union_member_types: union_def.union_member_types
        }
    }
}