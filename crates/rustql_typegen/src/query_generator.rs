use rustql_common::ast::common::*;
use rustql_common::ast::query::*;
use crate::type_table::GrahpQLTypeTable;
use std::mem::take;
use std::borrow::Cow; 

pub struct QueryGenerator<'a>{
    output: String,
    table: GrahpQLTypeTable<'a>,
}

impl <'a> QueryGenerator<'a> {
    pub fn new(table: GrahpQLTypeTable<'a>) -> Self {
        Self {
            output: String::new(),
            table
        }
    }
    fn write(&mut self, pat: &str) {
        self.output.push_str(pat);
    }
    pub fn generate(&mut self, document: &Document<'a>) -> String {
        self.write("export type Maybe<T> = T | null | undefined;\n");
        self.accept_document(document);
        take(&mut self.output)
    }
    fn accept_document(&mut self, document: &Document<'a>) {
        for definition in &document.definations {
            match *definition {
                Defination::Query(ref query) => self.accept_query(query),
                Defination::Mutation(ref mutation) => {}
                Defination::Subscription(ref subscription) => {},
                _ => {}
            }
        }
    }
    // query's top level selection must have at least a selection of subfield. 
    fn accept_query(&mut self, query: &Query<'a>) {
        self.write("type ExampleQuery = {");
        for selection in &query.selectionset.selections {
            match *selection {
                Selection::Field(ref field) => {
                    let var_type_of_field = match self.table.look_up_property(&Cow::Borrowed("Query"), &field.name.value) {
                        Some(var_type) => var_type.clone(),
                        None => panic!("Unexised Query {:?}", field.name.value.as_ref())
                    };
                    self.accept_field(field, &var_type_of_field);
                },
                Selection::FragmentSpread(ref fragment_spread) => {},
                Selection::InlineFragment(ref inline_fragment) => {},
            }
        }
        self.write("}");
    }
    fn accept_field(&mut self, field: &Field<'a>, mut var_type_of_field: &VarType<'a>) {
        self.write(field.name.value.as_ref());
        self.write(":");
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
            if is_nonnull_type {
                self.write("Maybe<");
            }
            self.write("{");
            for selection in &field_selectionset.selections {
                match *selection {
                    Selection::Field(ref child_field) => {
                        let var_type_of_child_field = match self.table.look_up_property(&final_name_type.name, &child_field.name.value) {
                            Some(var_type) => var_type.clone(),
                            None => panic!("Unexised field {:?}", child_field.name.value.as_ref())
                        };
                        self.accept_field(child_field, &var_type_of_child_field);
                    },
                    Selection::FragmentSpread(ref fragment_spread) => {},
                    Selection::InlineFragment(ref inline_fragment) => {},
                }
            }
            self.write("}");
            if is_nonnull_type {
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
}
