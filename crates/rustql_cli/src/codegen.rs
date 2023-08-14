use rustql_parser::parser::Parser;
use rustql_typegen::TsTypeGenerator;

pub fn generate_type_string_from_input(input: &str) -> String {
    let mut parser  = Parser::new(input);
    let document = parser.parse();
    let mut codegen = TsTypeGenerator::new();
    codegen.accept_document(&document);
    codegen.output
}