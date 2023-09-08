use rustgql_common::ast::{query::*, common::*};
use std::mem::take;
pub struct QueryMinifier {
    output: String,
}

impl Default for QueryMinifier {
    fn default() -> Self {
        Self::new()
    }
}

impl QueryMinifier {
    pub fn new() -> Self {
        Self {
            output: String::new(),
        }
    }
    pub fn generate(&mut self, document: &Document) -> String {
        self.accept_document(document);
        take(&mut self.output)
    }
    fn write(&mut self, pat: &str) {
        self.output.push_str(pat);
    }
    fn write_char(&mut self, ch: char) {
        self.output.push(ch);
    }
    fn pop_if_space(&mut self) {
        if let Some(maybe_comma) = self.output.pop() {
            if maybe_comma != ',' {
                self.output.push(maybe_comma);
            }
        }
    }
    fn accept_document(&mut self,document: &Document ) {
        for definition in &document.definations {
            match *definition {
                Defination::Query(ref query) => self.accept_query(query),
                Defination::Mutation(ref mutation_def) => {},
                Defination::Subscription(ref subscription_ref) => {},
                Defination::SelectSet(ref selection_set) => self.accept_selection_set(selection_set),
                _ => {}
            }
        }
    }
    fn accept_query(&mut self, query: &Query) {
        self.write("query ");
        if let Some(name) = &query.name {
            self.write(name.value.as_ref());
        }
        if let Some(directives) = &query.directives {
            self.accept_directives(directives);
        }
        if let Some(variable_definitions) = &query.variable_definations {
            self.accept_variable_definitions(variable_definitions);
        }
        self.accept_selection_set(&query.selectionset);
    }
    fn accept_variable_definitions(&mut self, variable_definitions: &Vec<VariableDefination>) {
        self.write_char('(');
        for variable_definition in variable_definitions {
            self.write_char('$');
            self.write(variable_definition.name.value.as_ref());
            self.write_char(':');
            self.accept_var_type(&variable_definition.var_type);
            if let Some(default_value) = &variable_definition.default_value {
                self.write_char('=');
                self.accept_value(default_value);
            }
        }
        self.write_char(')');
    }
    fn accept_selection_set(&mut self, selection_set:&SelectSet) {
        self.write("{");
        let mut is_start = true;
        for selection in &selection_set.selections {
            match *selection {
                Selection::Field(ref field) => {
                    if is_start { is_start = false } else { self.write_char(',')};
                    self.accept_field(field)
                },
                Selection::FragmentSpread(ref fragment_spread) => {
                    if is_start { is_start = false }
                    self.accept_fragment_spread(fragment_spread)
                },
                Selection::InlineFragment(ref inline_fragment) => {
                    if is_start { is_start = false }
                    self.accept_inline_fragment(inline_fragment)
                },
            }
        }
        self.write("}");
    }
    fn accept_field(&mut self, field: &Field) {
        if let Some(alias) = &field.alias {
            self.write(alias.value.as_ref());
            self.write(":");
        }
        self.write(field.name.value.as_ref());
        if let Some(arguments) = &field.arguments {
            self.accept_arguments(arguments);
        }
        if let Some(directives) = &field.directives {
            self.accept_directives(directives);
        }
        if let Some(selection_set) = &field.selectionset {
            self.accept_selection_set(selection_set);
        }
    }
    fn accept_arguments(&mut self, arguments: &Vec<Argument>) {
        self.write_char('(');
        let mut is_start = true;
        let mut need_space = false;
        for argment in arguments {
            if is_start {
                is_start = false;
            }else if need_space {
                self.write(",");
            }
            self.write(argment.name.value.as_ref());
            self.write(":");
            need_space = self.accept_value(&argment.value);
        }
        self.write_char(')');
    }
    fn accept_directives(&mut self, directives: &Vec<Directive>) {
        for directive in directives {
            self.write_char('@');
            self.write(directive.name.value.as_ref());
            if let Some(arguments) = &directive.arguments {
                self.accept_arguments(arguments);
            }
        }
    }
    // bool stand for need or not need space to seprate.
    fn accept_value(&mut self, value: &Value) -> bool {
        match *value {
            Value::BooleanValue(ref bool_value) =>{
                self.write(bool_value.code.as_ref());
                true
            },
            Value::EnumValue(ref enum_value) => {
                self.write(enum_value.code.as_ref());
                true
            },
            Value::FloatValue(ref float_value) => {
                self.write(float_value.code.as_ref());
                true
            },
            Value::IntValue(ref int_value) => {
                self.write(int_value.code.as_ref());
                true
            },
            Value::NullValue(ref _null_value) => {
                self.write("null");
                true
            },
            Value::StringValue(ref string_value) => {
                self.pop_if_space();
                self.write_char('"');
                self.write(string_value.code.as_ref());
                self.write_char('"');
                false
            }
            Value::ListValue(ref list_value) => {
                self.write_char('[');
                let mut need_space = false;
                let mut is_start = true;
                for value in &list_value.values {
                    if is_start {
                        is_start = false;
                    }else if need_space {
                        self.write_char(',');
                    }
                    need_space = self.accept_value(value);
                }
                self.write_char(']');
                false
            },
            Value::ObjectValue(ref object_value) => {
                self.write_char('{');
                let mut need_space = false;
                let mut is_start = true;
                for object_field in &object_value.fields {
                    if is_start {
                        is_start = false;
                    }else if need_space {
                        self.write_char(',');
                    }
                    self.write(object_field.name.value.as_ref());
                    self.write_char(':');
                    need_space = self.accept_value(&object_field.value);
                }
                self.write_char('}');
                false
            }
            Value::Variable(ref variable) => {
                self.write_char('$');
                self.write(variable.code.as_ref());
                true
            }
        }
    }
    fn accept_fragment_spread(&mut self, fragment_spread: &FragmentSpread) {
        self.pop_if_space();
        self.write("...");
        self.write(fragment_spread.name.value.as_ref());
        if let Some(directives) = &fragment_spread.directives {
            self.accept_directives(directives);
        }
    }
    fn accept_inline_fragment(&mut self, inline_fragment: &InlineFragment) {
        self.pop_if_space();
        self.write("...");
        if let Some(type_condition) = &inline_fragment.type_condition {
            self.write("on ");
            self.write(type_condition.name.as_ref());
        }
        if let Some(directives) = &inline_fragment.directives {
            self.accept_directives(directives);
        }
        self.accept_selection_set(&inline_fragment.selectionset);
    }
    fn accept_var_type(&mut self, mut var_type: &VarType) {
        let mut type_tail_stings = Vec::<char>::new();
        loop {
            match *var_type {
                VarType::ListVarType(ref list_type) => {
                    self.write_char('[');
                    type_tail_stings.push(']');
                    var_type = list_type.list_type.as_ref();
                }
                VarType::NonNullVarType(ref nonnull_type) => {
                    type_tail_stings.push('!');
                    var_type = nonnull_type.nonull_type.as_ref();
                }
                VarType::NameVarType(ref name_type) => {
                    self.write(name_type.name.as_ref());
                    break;
                }
            }
        }
        for type_tail in type_tail_stings {
            self.write_char(type_tail);
        }
    }
}