use rustql_common::ast::common::*;
use rustql_common::ast::schema::*;
use std::collections::HashMap;
use std::borrow::Cow;

#[derive(Debug, Clone, PartialEq)]
pub struct  GrahpQLTypeTable<'a> {
   table: HashMap<Cow<'a, str>, HashMap<Cow<'a, str>, VarType<'a>>>,
   interface_table: HashMap<Cow<'a, str>, HashMap<Cow<'a, str>, VarType<'a>>>,
}

impl<'a> Default for GrahpQLTypeTable<'a> {
    fn default() -> Self {
        Self::new()
    }
}

impl<'a> GrahpQLTypeTable<'a> {
    pub fn new() -> Self {
        Self {
            table: HashMap::new(),
            interface_table: HashMap::new(),
        }
    }
    pub fn build_table(&mut self, document: &Document<'a>) {
        self.accept_document(document);
    }
    pub fn look_up_property(&self,type_name: &Cow<'a, str>, property_name: &Cow<'a, str>) -> Option<&VarType<'a>> {
        if let Some(table_of_type) = self.table.get(type_name) {
            table_of_type.get(property_name)
        }else {
            None
        }
    }
    fn accept_document(&mut self, document: &Document<'a>) {
        for definition in &document.definations {
            if let Defination::InterfaceTypeDefinition(ref interface_def) = *definition {
                self.accept_interface_definition(interface_def);
            }
        }
        for definition in &document.definations {
            if let Defination::ObjectTypeDefinition(ref object_def) = *definition {
                self.accept_object_definition(object_def);
            }
        }
    }
    fn accept_object_definition(&mut self, definition: &ObjectTypeDefinition<'a>) {
        let mut property_table = HashMap::<Cow<'a, str>, VarType>::new();
        if let Some(implement_interfaces) = &definition.implement_interfaces {
            for interface in implement_interfaces {
                if let Some(interface_hash_table) = self.interface_table.get(&interface.name) {
                    for (key, value) in interface_hash_table.iter() {
                        property_table.insert(key.clone(), value.clone());
                    }
                }
            }
        }
        if let Some(object_fields) = &definition.field_definations {
            for object_field in object_fields {
                let property_name = object_field.name.value.clone();
                let property_type = object_field.var_type.clone();
                property_table.insert(property_name, property_type);
            }
            self.table.insert(definition.name.value.clone(), property_table);
        }
    }
    fn accept_interface_definition(&mut self, definition: &InterfaceTypeDefinition<'a>) {
        if let Some(object_fields) = &definition.field_definations {
            let mut property_table = HashMap::<Cow<'a, str>, VarType>::new();
            for object_field in object_fields {
                let property_name = object_field.name.value.clone();
                let property_type = object_field.var_type.clone();
                property_table.insert(property_name, property_type);
            }
            self.interface_table.insert(definition.name.value.clone(), property_table);
        }
    }
}
