use rustgql_parser::parser::Parser;
use rustgql_minifier::query_minifier::QueryMinifier;
use rustgql_typegen::graphql_table::GrahpQLTable;
use rustgql_typegen::query_generator::QueryGenerator;
use rustgql_typegen::schema_generator::SchemaGenerator;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn minifier_query(code: &str) -> String {
    let mut parser = Parser::new(code);
    let document = parser.parse();
    let mut query_minifier = QueryMinifier::new();
    query_minifier.generate(&document)
}

#[wasm_bindgen]
pub fn generate_typescript_for_query(document_code: &str, query_code: &str) -> String {
    let mut schema_parser = Parser::new(document_code);
    let mut query_parser = Parser::new(query_code);
    let schema_document = schema_parser.parse();
    let query_document = query_parser.parse();
    let mut grahpql_table = GrahpQLTable::new();
    grahpql_table.build_table(&schema_document);
    let mut query_generator = QueryGenerator::new(grahpql_table);
    let mut schena_generator = SchemaGenerator::new();
    format!("{}\n{}\n{}", SchemaGenerator::generate_default(), schena_generator.generate(&schema_document), query_generator.generate(&query_document))
}