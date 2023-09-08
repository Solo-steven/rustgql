use rustgql_common::ast::common::*;
use rustgql_common::ast::schema::*;
use std::mem::take;
struct ArgumentWithName<'a> {
    pub argument_definition: &'a  Vec<InputValueDefinition<'a>>,
    pub object_name: &'a str,
    pub field_name: &'a str,
}

pub struct SchemaGenerator<'a> {
    output: String,
    scaler_output: String,
    args_auffer: Vec<ArgumentWithName<'a>>
}

impl<'a> Default for SchemaGenerator<'a> {
    fn default() -> Self {
        Self::new()
    }
}

impl<'a,> SchemaGenerator <'a>{
    pub fn new() -> Self {
        Self  {
            output: String::new(),
            scaler_output: String::new(),
            args_auffer: Vec::new(),
        }
    }
    fn write(&mut self, code: &str) {
        self.output.push_str(code);
    }
    fn write_scaler(&mut self, pat: &str) {
        self.scaler_output.push_str(pat);
    }
    pub fn generate_default() -> &'static str {
        "export type Maybe<T> = T | null;"
    }
    pub fn generate(&mut self, document: &'a Document<'a>) -> String {
        self.accept_document(document);
        let mut output = String::with_capacity(self.scaler_output.len() + self.output.len());
        output.push_str(take(&mut self.scaler_output).as_str());
        output.push_str(take(&mut self.output).as_str());
        output
    }
    fn accept_document(&mut self, root: &'a Document<'a>) {
        for def in &root.definations{
            self.accept_definition(def);
        }
    }
    fn accept_definition(&mut self, defination: &'a Defination<'a>) {
        match *defination {
            Defination::SchemaTypeDefination(ref _def) => {}
            Defination::ScalarTypeDefinition(ref def) => { self.accept_scaler_definition(def) },
            Defination::EnumTypeDefinition(ref def) => self.accept_enum_definition(def),
            Defination::ObjectTypeDefinition(ref def) => self.accept_object_definition(def),
            Defination::InterfaceTypeDefinition(ref def) => self.accept_interface_definition(def),
            Defination::UnionTypeDefinition(ref def) => self.accept_union_definition(def),
            Defination::InputObjectTypeDefinition(ref def) => self.accept_input_object_definition(def),
            _ => {}
        }
    }
    fn accept_scaler_definition(&mut self, definition: &'a ScalarTypeDefinition<'a>) {
        self.write_scaler(format!("export type {} = number;\n", definition.name.value.as_ref()).as_ref());
    }
    fn accept_input_object_definition(&mut self, definition: &'a InputObjectTypeDefinition) {
        if let Some(desc) = &definition.description {
            self.write(format!("/** {} */\n", desc.code.as_ref()).as_str())
        }
        self.write("export type ");
        self.write(definition.name.value.as_ref());
        if definition.input_definations.is_some() {
            self.write(" = {\n");
            for input_value in definition.input_definations.as_ref().unwrap() {
                self.write("  ");
                self.write(input_value.name.value.as_ref());
                let mut is_top_level_nonnull = false;
                let unwind_type =  match input_value.var_type{
                    VarType::NonNullVarType(ref _type) => {
                        is_top_level_nonnull = true;
                        &input_value.var_type
                    }
                    _ => &input_value.var_type,
                };
                if !is_top_level_nonnull {
                    self.write("?");
                }
                self.write(": ");
                self.accept_var_type(unwind_type);
                self.write(";\n");
            }
            self.write("}\n");
        }else {
            self.write(" = {};\n");
        }
    }
    fn accept_enum_definition(&mut self, definition: &'a EnumTypeDefinition<'a>) {
        if let Some(desc) = &definition.description {
            self.write(format!("/** {} */\n", desc.code.as_ref()).as_str())
        }
        self.write("export enum ");
        self.write(definition.name.value.as_ref());
        self.write(" {\n");
        if let Some(enum_values) = definition.value_definations.as_ref() {
            for enum_value in enum_values {
                self.write("  ");
                self.write(enum_value.value.code.as_ref());
                self.write(",\n")
            }
        }
        self.write("}\n")
    }
    fn accept_interface_definition(&mut self, definition: &'a InterfaceTypeDefinition<'a>) {
        if let Some(desc) = &definition.description {
            self.write(format!("/** {} */\n", desc.code.as_ref()).as_str())
        }
        self.write("export interface ");
        self.write(definition.name.value.as_ref());
        self.write(" {\n");
        if let Some(fields) = & definition.field_definations {
            for field_def in fields {
                self.accept_field_definition(field_def, definition.name.value.as_ref());
            }
        }
        self.write("}\n");
    }
    fn accept_object_definition(&mut self, definition: &'a ObjectTypeDefinition<'a>) {
        if let Some(desc) = &definition.description {
            self.write(format!("/** {} */\n", desc.code.as_ref()).as_str())
        }
        if let Some(_implements) = &definition.implement_interfaces {
            self.write("export type ");
            self.write(definition.name.value.as_ref());
            self.write(" = ");
        }else {
            self.write("export interface ");
            self.write(definition.name.value.as_ref());
        }
        if let Some(implements) = &definition.implement_interfaces {
            for implement_interface in implements {
                self.write(implement_interface.name.as_ref());
                self.write(" & ");
            }
        }
        self.write(" {\n");
        if let Some(fields) = &definition.field_definations {
            for field_def in fields {
                self.accept_field_definition(field_def, definition.name.value.as_ref());
            }
        }
        self.write("}\n");
        let arguments_with_names = std::mem::take(&mut self.args_auffer);
        for arguments_with_name in arguments_with_names {
            self.write("export interface ");
            self.write(format!(
                "{}{}{}{}Args", 
                arguments_with_name.object_name.chars().next().unwrap().to_ascii_uppercase(),
                &arguments_with_name.object_name[1..],
                arguments_with_name.field_name.chars().next().unwrap().to_ascii_uppercase(),
                &arguments_with_name.field_name[1..],
            ).as_ref());
            self.write("{\n");
            for input_value in arguments_with_name.argument_definition {
                self.write("  ");
                self.write(input_value.name.value.as_ref());
                self.write(": ");
                self.accept_var_type(&input_value.var_type);
                self.write(";\n");
            }
            self.write("}\n");
        };
    }
    fn accept_field_definition(&mut self, definition: &'a FieldDefination<'a>, object_name: &'a str) {
        if let Some(argument_definition) = &definition.argument_definations {
            self.args_auffer.push(ArgumentWithName { 
                argument_definition, 
                field_name: definition.name.value.as_ref(),
                object_name,
            });
        }
        if let Some(desc) = &definition.description {
            self.write(format!("  /** {} */\n", desc.code.as_ref()).as_str())
        }
        self.write("  ");
        self.write(definition.name.value.as_ref());
        let mut is_top_level_nonnull = false;
        let unwind_type =  match definition.var_type {
            VarType::NonNullVarType(ref _type) => {
                is_top_level_nonnull = true;
                &definition.var_type
            }
            _ => &definition.var_type,
        };
        if !is_top_level_nonnull {
            self.write("?");
        }
        self.write(": ");
        self.accept_var_type(unwind_type);
        self.write(";");
        self.write("\n")
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
    fn accept_union_definition(&mut self, definition: &'a UnionTypeDefinition<'a>) {
        if let Some(desc) = &definition.description {
            self.write(format!("/** {} */\n", desc.code.as_ref()).as_str())
        }
        self.write("export type ");
        self.write(definition.name.value.as_ref());
        self.write(" = ");
        if let Some(nodes) = &definition.union_member_types {
            let mut is_frist = true;
            for node in nodes {
                if is_frist {
                    is_frist = false;
                }else {
                    self.write(" | ");
                }
                self.write(node.name.as_ref());
            }
            self.write(";\n");
        }else {
            self.write("{}\n");
        }
    }
}