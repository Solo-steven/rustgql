use rustql_common::ast::common::*;
use rustql_common::ast::query::*;
use rustql_common::ast::schema::*;
use std::collections::HashMap;
use std::collections::HashSet;
use std::borrow::Cow;

#[derive(Debug, Clone, PartialEq)]
pub struct  GrahpQLTable<'a> {
   type_table: HashMap<Cow<'a, str>, HashMap<Cow<'a, str>, VarType<'a>>>,
   union_table: HashMap<Cow<'a, str>, HashSet<Cow<'a, str>>>,
   fragment_table: HashMap<Cow<'a, str>, Vec<Selection<'a>>>,
   interface_table: HashMap<Cow<'a, str>, HashMap<Cow<'a, str>, VarType<'a>>>,
}

impl<'a> Default for GrahpQLTable<'a> {
    fn default() -> Self {
        Self::new()
    }
}

impl<'a> GrahpQLTable<'a> {
    pub fn new() -> Self {
        Self {
            type_table: HashMap::new(),
            union_table: HashMap::new(),
            fragment_table: HashMap::new(),
            interface_table: HashMap::new(),
        }
    }
    pub fn build_table(&mut self, document: &Document<'a>) {
        self.accept_document(document);
    }
    pub fn look_up_property(&self,type_name: &Cow<'a, str>, property_name: &Cow<'a, str>) -> Option<&VarType<'a>> {
        if let Some(table_of_type) = self.type_table.get(type_name) {
            table_of_type.get(property_name)
        }else {
            None
        }
    }
    pub fn look_up_fragment(&self, fragment_name: &Cow<'a, str>) -> Option<&Vec<Selection<'a>>> {
        self.fragment_table.get(fragment_name)
    }
    pub fn look_up_union(&self, union_name: &Cow<'a, str>) -> Option<&HashSet<Cow<'a , str>>> {
        self.union_table.get(union_name)
    }
    fn accept_document(&mut self, document: &Document<'a>) {
        for definition in &document.definations {
            if let Defination::FragmentDefination(ref fragment_def) = *definition {
                self.accept_fragment(fragment_def);
            }
        }
        for definition in &document.definations {
            if let Defination::InterfaceTypeDefinition(ref interface_def) = *definition {
                self.accept_interface_definition(interface_def);
            }
        }
        for definition in &document.definations {
            if let Defination::ObjectTypeDefinition(ref object_def) = *definition {
                self.accept_object_definition(object_def);
            }
            match *definition {
                Defination::ObjectTypeDefinition(ref object_def) => self.accept_object_definition(object_def),
                Defination::UnionTypeDefinition(ref union_ref) => self.accept_union_definition(union_ref),
                _ => {}
            }
        }
    }
    fn accept_fragment(&mut self, definition: &FragmentDefination<'a>) {
        self.fragment_table.insert(definition.name.value.clone(), definition.selectionset.selections.clone());
    }
    fn accept_union_definition(&mut self, definition: &UnionTypeDefinition<'a>) {
        let set = match definition.union_member_types {
            Some(ref members) => {
                members.iter().map(|member| member.name.clone()).collect()
            }
            None => HashSet::new(),
        };
        self.union_table.insert(definition.name.value.clone(), set);
    }
    fn accept_object_definition(&mut self, definition: &ObjectTypeDefinition<'a>) {
        let mut property_table = HashMap::new();
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
            self.type_table.insert(definition.name.value.clone(), property_table);
        }
    }
    fn accept_interface_definition(&mut self, definition: &InterfaceTypeDefinition<'a>) {
        if let Some(object_fields) = &definition.field_definations {
            let mut property_table = HashMap::new();
            for object_field in object_fields {
                let property_name = object_field.name.value.clone();
                let property_type = object_field.var_type.clone();
                property_table.insert(property_name, property_type);
            }
            self.interface_table.insert(definition.name.value.clone(), property_table);
        }
    }
}
