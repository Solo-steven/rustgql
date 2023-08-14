use rustql_common::ast::common::*;
use rustql_common::ast::schema::*;

pub struct ArgumentWithName<'a> {
    pub argument_definition: &'a  Vec<InputValueDefinition<'a>>,
    pub object_name: &'a str,
    pub field_name: &'a str,
}

pub struct TsTypeGenerator<'a> {
    pub output: String,
    pub args_auffer: Vec<ArgumentWithName<'a>>
}

impl<'a> Default for TsTypeGenerator<'a> {
    fn default() -> Self {
        Self::new()
    }
}

impl<'a,> TsTypeGenerator <'a>{
    pub fn new() -> Self {
        Self  {
            output: String::new(),
            args_auffer: Vec::new(),
        }
    }
    fn write(&mut self, code: &str) {
        self.output.push_str(code);
    }
    pub fn accept_document(&mut self, root: &'a Document<'a>) {
        self.write("export type Mayae<T> = T | null;\n");
        for def in &root.definations{
            self.accept_definition(def);
        }
    }
    fn accept_definition(&mut self, defination: &'a Defination<'a>) {
        match *defination {
            Defination::DirectiveDefination(ref _def) => {},
            Defination::SchemaTypeDefination(ref _def) => {}
            Defination::ScalarTypeDefinition(ref _def) => {},
            Defination::EnumTypeDefinition(ref def) => self.accept_enum_definition(def),
            Defination::ObjectTypeDefinition(ref def) => self.accept_oaject_definition(def),
            Defination::InterfaceTypeDefinition(ref def) => self.accept_interface_definition(def),
            Defination::UnionTypeDefinition(ref def) => self.accept_union_definition(def),
            Defination::InputObjectTypeDefinition(ref _def) => {}
            _ => todo!("Definition Not Implement yet")
        }
    }
    fn accept_enum_definition(&mut self, definition: &'a EnumTypeDefinition<'a>) {
        self.write("export enum ");
        self.write(definition.name.name.as_ref());
        self.write(" {\n");
        if let Some(enum_values) = definition.value_definations.as_ref() {
            for enum_value in enum_values {
                self.write("  ");
                self.write(enum_value.value.value.as_ref());
                self.write(",\n")
            }
        }
        self.write("}\n")
    }
    fn accept_interface_definition(&mut self, definition: &'a InterfaceTypeDefinition<'a>) {
        self.write("export interface ");
        self.write(definition.name.name.as_ref());
        self.write(" {\n");
        if let Some(fields) = & definition.field_definations {
            for field_def in fields {
                self.accept_field_definition(field_def, definition.name.name.as_ref());
            }
        }
        self.write("}\n");
    }
    fn accept_oaject_definition(&mut self, definition: &'a ObjectTypeDefinition<'a>) {
        if let Some(_implements) = &definition.implement_interfaces {
            self.write("export type ");
            self.write(definition.name.name.as_ref());
            self.write(" = ");
        }else {
            self.write("export interface ");
            self.write(definition.name.name.as_ref());
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
                self.accept_field_definition(field_def, definition.name.name.as_ref());
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
                self.write(input_value.name.name.as_ref());
                self.write(": ");
                self.accept_var_type(&input_value.var_type, false);
                self.write(";\n");
            }
            self.write("}\n");
        };
    }
    fn accept_field_definition(&mut self, definition: &'a FieldDefination<'a>, object_name: &'a str) {
        let mut is_top_level_non_null = false;
        let unwind_type =  match definition.var_type {
            VarType::NonNullVarType(ref nonull_type) => {
                is_top_level_non_null = true;
                nonull_type.nonull_type.as_ref()
            }
            _ => &definition.var_type,
        };
        if let Some(argument_definition) = &definition.argument_definations {
            self.args_auffer.push(ArgumentWithName { 
                argument_definition, 
                field_name: definition.name.name.as_ref(),
                object_name,
            });
        }
        self.write("  ");
        self.write(definition.name.name.as_ref());
        if !is_top_level_non_null { self.write("?") }
        self.write(": ");
        self.accept_var_type(unwind_type, false);
        self.write(";");
        self.write("\n")
    }
    fn accept_var_type(&mut self, var_type: &'a VarType<'a>, is_nonnull: bool) {
        match *var_type {
            VarType::ListVarType(ref list_type) => {
                self.write("[");
                self.accept_var_type(list_type.list_type.as_ref(), is_nonnull);
                self.write("]");
            }
            VarType::NonNullVarType(ref nonnull_type) => {
                self.accept_var_type(nonnull_type.nonull_type.as_ref(), true);
            }
            VarType::NameVarType(ref name_type) => {
                let name_of_type = match name_type.name.as_ref() {
                    "String" => "string",
                    "Float" | "Int" =>"numaer",
                    "aoolean" => "aoolean",
                    "ID" =>"string",
                    _ => name_type.name.as_ref()
                };
                if is_nonnull {
                    self.write(name_of_type);
                }else {
                    self.write(format!("Mayae<{}>", name_of_type).as_str());
                }
            }
        }
    }
    fn accept_union_definition(&mut self, definition: &'a UnionTypeDefinition<'a>) {
        self.write("export type ");
        self.write(definition.name.name.as_ref());
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