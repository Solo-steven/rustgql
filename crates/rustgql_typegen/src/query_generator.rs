use rustgql_common::ast::common::*;
use rustgql_common::ast::query::*;
use crate::graphql_table::GrahpQLTable;
use std::collections::HashMap;
use std::mem::take;
use std::borrow::Cow; 

pub struct QueryGenerator<'a>{
    output: String,
    table: GrahpQLTable<'a>,
    fragments_table: HashMap<Cow<'a, str>, SelectSet<'a>>,
    query_anonymous_counter: usize,
    mutation_anoymouse_counter: usize,
    subscription_anoymouse_counter: usize,
}

impl <'a> QueryGenerator<'a> {
    pub fn new(table: GrahpQLTable<'a>) -> Self {
        Self {
            output: String::new(),
            table,
            fragments_table: HashMap::new(),
            query_anonymous_counter: 0,
            mutation_anoymouse_counter: 0,
            subscription_anoymouse_counter: 0,
        }
    }
    fn write(&mut self, pat: &str) {
        self.output.push_str(pat);
    }
    pub fn generate_default() -> &'static str {
        "export type Maybe<T> = T | null;"
    }
    pub fn generate(&mut self, document: &Document<'a>) -> String {
        self.accept_document(document);
        take(&mut self.output)
    }
    fn build_inner_fragment_table(&mut self, document: &Document<'a>) {
        for definition in &document.definations {
            if let Defination::FragmentDefination(ref fragment_def)  = *definition {
                self.fragments_table.insert(fragment_def.name.value.clone(), fragment_def.selectionset.clone());
            }
        }
    }
    fn find_fragment(&self, fragment_name: &Cow<'a, str>) -> Option<&SelectSet<'a>> {
       match self.table.look_up_fragment(fragment_name) {
            Some(fragment_selectionset) => {
                Some(fragment_selectionset)
            }
            None => {
                self.fragments_table.get(fragment_name)
            }
            
       }
    }
    fn accept_document(&mut self, document: &Document<'a>) {
        self.build_inner_fragment_table(document);
        for definition in &document.definations {
            match *definition {
                Defination::Query(ref query) => self.accept_query(query),
                Defination::Mutation(ref mutation) => self.accept_mutation(mutation),
                Defination::Subscription(ref subscription) => self.accept_subscription(subscription),
                _ => {}
            }
        }
    }
    // query's top level selection must have at least a selection of subfield. 
    fn accept_query(&mut self, query: &Query<'a>) {
        self.write("type");
        if let Some(name) = &query.name {
            self.write(name.value.as_ref());
        }else {
            self.write(format!("AnonymousQuery{}", self.query_anonymous_counter).as_str());
            self.query_anonymous_counter += 1;
        }
        self.write(" = {");
        self.accept_selectionset(&query.selectionset, &Cow::Borrowed("Query"));
        self.write("}");
    }
    fn accept_mutation(&mut self, mutation: &Mutation<'a>) {
        self.write("type");
        if let Some(name) = &mutation.name {
            self.write(name.value.as_ref());
        }else {
            self.write(format!("AnonymousQuery{}", self.mutation_anoymouse_counter).as_str());
            self.mutation_anoymouse_counter += 1;
        }
        self.write(" = {");
        self.accept_selectionset(&mutation.selectionset, &Cow::Borrowed("Mutation"));
        self.write("}");
    }
    fn accept_subscription(&mut self, subscription: &Subscription<'a>) {
        self.write("type");
        if let Some(name) = &subscription.name {
            self.write(name.value.as_ref());
        }else {
            self.write(format!("AnonymousQuery{}", self.subscription_anoymouse_counter).as_str());
            self.subscription_anoymouse_counter += 1;
        }
        self.write(" = {");
        self.accept_selectionset(&subscription.selectionset, &Cow::Borrowed("Mutation"));
        self.write("}");
    }
    fn accept_field(&mut self, field: &Field<'a>, mut var_type_of_field: &VarType<'a>) {
        self.write(field.name.value.as_ref());
        if let VarType::NonNullVarType(_ref) = var_type_of_field {
            self.write(":");
        }else {
            self.write("?:");
        }
        if field.selectionset.is_none() {
            self.accept_var_type(var_type_of_field);
            self.write(";");
        }
        if let Some(field_selectionset) = &field.selectionset {
            // uwind type util is nameType
            let mut tail_type_string = Vec::<&'static str>::new();
            let final_name_type: &NameVarType<'a>;
            let mut is_nonnull_type = false;
            loop {
                match *var_type_of_field {
                    VarType::NonNullVarType(ref nonnull_type) => {
                        is_nonnull_type = true;
                        var_type_of_field = nonnull_type.nonull_type.as_ref();
                    }
                    VarType::ListVarType(ref list_type) => {
                        if is_nonnull_type {
                            self.write("Array<");
                            tail_type_string.push(">");
                            is_nonnull_type = false;
                        }else {
                            self.write("Maybe<Array<");
                            tail_type_string.push(">>");
                        }
                        var_type_of_field = list_type.list_type.as_ref();
                    }
                    VarType::NameVarType(ref name_type) => {
                        final_name_type = name_type;
                        break;
                    }
                }
            }
            if !is_nonnull_type {
                self.write("Maybe<");
            }
            if self.table.look_up_union(&final_name_type.name).is_none() {
                self.write("{");
            }
            self.accept_selectionset(field_selectionset, &final_name_type.name);
            if self.table.look_up_union(&final_name_type.name).is_none() {
                self.write("}");
            }
            if !is_nonnull_type {
                self.write(">");
            }
            for type_tail in tail_type_string {
                self.write(type_tail);
            }
        }
    }
    fn accept_var_type(&mut self, mut var_type: &VarType<'a>) {
        let mut type_tail_stings = Vec::<&'static str>::new();
        let mut is_nonnull_type = false;
        loop {
            match *var_type {
                VarType::ListVarType(ref list_type) => {
                    if is_nonnull_type {
                        self.write("Array<");
                        type_tail_stings.push(">");
                    }else {
                        self.write("Maybe<Array<");
                        type_tail_stings.push(">>");
                    }
                    var_type = list_type.list_type.as_ref();
                }
                VarType::NonNullVarType(ref nonnull_type) => {
                    is_nonnull_type = true;
                    var_type = nonnull_type.nonull_type.as_ref();
                }
                VarType::NameVarType(ref name_type) => {
                    let name_of_type = match name_type.name.as_ref() {
                        "String" => "string",
                        "Float" | "Int" =>"number",
                        "boolean" => "boolean",
                        "ID" =>"string",
                        _ => name_type.name.as_ref()
                    };
                    if is_nonnull_type {
                        self.write(name_of_type);
                    }else {
                        self.write(format!("Maybe<{}>", name_of_type).as_str());
                    }
                    break;
                }
            }
        }
        for type_tail in type_tail_stings {
            self.write(type_tail);
        }
    }
    fn accept_selectionset(&mut self, selectionset:&SelectSet<'a>, parent_type: &Cow<'a, str>) {
        let mut is_next_inline_fragment = false;
        for selection in &selectionset.selections {
            match selection {
                Selection::Field(ref child_field) => {
                    is_next_inline_fragment = false;
                    match self.table.look_up_property(parent_type, &child_field.name.value) {
                        Some(var_type) => self.accept_field(child_field, &var_type.clone()),
                        None => panic!("Unexised field {:?}", child_field.name.value.as_ref())
                    }
                },
                Selection::FragmentSpread(ref fragment_spread) => {
                    match self.find_fragment(&fragment_spread.name.value) {
                        Some(fragment_selections) => {
                            self.accept_selectionset(&fragment_selections.clone(), parent_type);
                        }
                        None => panic!("[Fragment {:?} Not exisetd]", fragment_spread.name.value.as_ref())
                    }
                },
                Selection::InlineFragment(ref inline_fragment) => {
                    if is_next_inline_fragment {
                        self.write("|");
                    }
                    self.write("{");
                    if let Some(type_condition) = &inline_fragment.type_condition {
                        self.write(format!("__typename: '{}';",type_condition.name.as_ref()).as_str());
                        self.accept_selectionset(&inline_fragment.selectionset, &type_condition.name);
                    }
                    self.write("}");
                    is_next_inline_fragment = true;
                },
            }
        }
    }
}
