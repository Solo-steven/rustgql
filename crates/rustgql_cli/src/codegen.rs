use rustgql_parser::parser::Parser;
use rustgql_typegen::schema_generator::SchemaGenerator;

pub fn generate_type_string_from_input(input: &str) -> String {
    let mut parser  = Parser::new(input);
    let document = parser.parse();
    let mut codegen = SchemaGenerator::new();
    codegen.generate(&document)
}