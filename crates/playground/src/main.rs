use std::fs::File;
use std::io::Write;
use std::borrow::Cow;
use rustql_parser::parser::Parser;
use rustql_typegen::type_table::GrahpQLTypeTable;
use rustql_typegen::query_generator::QueryGenerator;
use serde_json::to_string_pretty;

fn main(){
    let query_code = r#"
      query GetTrack {
        tracksForHome {
          id,
          title,
          length,
          node {
            id
          }
        }
      }
    "#;
    let schema_code = r#"
      type Track {
         id: ID!,
         title: String!,
         author: Author!,
         tumbnail: String,
         length: Int,
         modulesCount: Int,
         node: [Node]
      }
      type Author {
        id: ID!,
        name: String!,
        photo: String
      }
      type Query {
        tracksForHome: [Track]
      }
      type Node {
        id: ID!,
        data: String,
      }
    "#;
    let mut parser = Parser::new(query_code);
    let query_document = parser.parse();
    parser = Parser::new(schema_code);
    let mut query_file = File::create("./query.json").unwrap();
    write!(query_file, "{}", to_string_pretty(&query_document).unwrap()).unwrap();
    let schema_doucment = parser.parse();
    let mut table = GrahpQLTypeTable::new();
    table.build_table(&schema_doucment);
    println!("{:?}", table.look_up_property(&Cow::Borrowed("Track"), &Cow::Borrowed("title")));

    let mut query_generator = QueryGenerator::new(table);
    let output = query_generator.generate(&query_document);
    println!("{:?}", output);
    let mut query_type_file = File::create("./type.d.ts").unwrap();
    write!(query_type_file, "{}", output.as_str()).unwrap();

}