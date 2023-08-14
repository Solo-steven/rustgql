use rustql_common::ast::common::*;
use rustql_common::ast::schema::*;

pub struct TsTypeGenerator {
    pub output: String,
}

impl Default for TsTypeGenerator {
    fn default() -> Self {
        Self::new()
    }
}

impl TsTypeGenerator {
    pub fn new() -> Self {
        Self  {
            output: String::new(),
        }
    }
    fn write(&mut self, code: &str) {
        self.output.push_str(code);
    }
    pub fn accept_document(&mut self, root: &mut Document) {
        self.write("export type Maybe<T> = T | null;\n");
        for def in &mut root.definations{
            self.accept_definition(def);
        }
    }
    fn accept_definition(&mut self, defination: &mut Defination) {
        match *defination {
            Defination::DirectiveDefination(ref mut _def) => {},
            Defination::SchemaTypeDefination(ref mut _def) => {}
            Defination::ScalarTypeDefinition(ref mut _def) => {},
            Defination::EnumTypeDefinition(ref mut def) => self.accept_enum_definition(def),
            Defination::ObjectTypeDefinition(ref mut def) => self.accept_object_definition(def),
            Defination::InterfaceTypeDefinition(ref mut def) => self.accept_interface_definition(def),
            Defination::UnionTypeDefinition(ref mut def) => self.accept_union_definition(def),
            Defination::InputObjectTypeDefinition(ref mut _def) => {}
            _ => todo!("Definition Not Implement yet")
        }
    }
    fn accept_enum_definition(&mut self, definition: &mut EnumTypeDefinition) {
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
    fn accept_interface_definition(&mut self, definition: &mut InterfaceTypeDefinition) {
        self.write("export interface ");
        self.write(definition.name.name.as_ref());
        self.write(" {\n");
        if let Some(fields) = &mut definition.field_definations {
            for field_def in fields {
                self.accept_field_definition(field_def);
            }
        }
        self.write("}\n");
    }
    fn accept_object_definition(&mut self, definition: &mut ObjectTypeDefinition) {
        if let Some(_implements) = &mut definition.implement_interfaces {
            self.write("export type ");
            self.write(definition.name.name.as_ref());
            self.write(" = ");
        }else {
            self.write("export interface ");
            self.write(definition.name.name.as_ref());
        }
        if let Some(implements) = &mut definition.implement_interfaces {
            for implement_interface in implements {
                self.write(implement_interface.name.as_ref());
                self.write(" & ");
            }
        }
        self.write(" {\n");
        if let Some(fields) = &mut definition.field_definations {
            for field_def in fields {
                self.accept_field_definition(field_def);
            }
        }
        self.write("}\n")
    }
    fn accept_field_definition(&mut self, definition: &mut FieldDefination) {
        let mut is_top_level_non_null = false;
        let unwind_type =  match definition.var_type {
            VarType::NonNullVarType(ref mut nonull_type) => {
                is_top_level_non_null = true;
                nonull_type.nonull_type.as_mut()
            }
            _ => &mut definition.var_type,
        };
        self.write("  ");
        self.write(definition.name.name.as_ref());
        if !is_top_level_non_null { self.write("?") }
        self.write(": ");
        self.accept_var_type(unwind_type, false);
        self.write(";");
        self.write("\n")
    }
    fn accept_var_type(&mut self, var_type: &mut VarType, is_nonnull: bool) {
        match *var_type {
            VarType::ListVarType(ref mut list_type) => {
                self.write("[");
                self.accept_var_type(list_type.list_type.as_mut(), is_nonnull);
                self.write("]");
            }
            VarType::NonNullVarType(ref mut nonnull_type) => {
                self.accept_var_type(nonnull_type.nonull_type.as_mut(), true);
            }
            VarType::NameVarType(ref mut name_type) => {
                let name_of_type = match name_type.name.as_ref() {
                    "String" => "string",
                    "Float" | "Int" =>"number",
                    "Boolean" => "boolean",
                    "ID" =>"string",
                    _ => name_type.name.as_ref()
                };
                if is_nonnull {
                    self.write(name_of_type);
                }else {
                    self.write(format!("Maybe<{}>", name_of_type).as_str());
                }
            }
        }
    }
    fn accept_union_definition(&mut self, definition: &mut UnionTypeDefinition) {
        self.write("export type ");
        self.write(definition.name.name.as_ref());
        self.write(" = ");
        if let Some(nodes) = &mut definition.union_member_types {
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