use std::fs::File;
use std::io::Write;
use std::borrow::Cow;
use rustgql_parser::parser::Parser;
use rustgql_typegen::graphql_table::GrahpQLTable;
use rustgql_typegen::query_generator::QueryGenerator;
use rustgql_typegen::schema_generator::SchemaGenerator;
use serde_json::to_string_pretty;
use std::time::Instant;

const github_str: &str = include_str!("../schema.docs.graphql");

fn main(){
    let query_code = r#"
      query GetTrack {
        tracksForHome {
          ...Test,
          variant {
            ...on PossibleA {
              name,
            }
            ... on PossibleB {
              age
              node {
                id
              }
            }
          }
        }
      }
      fragment Test on Track {
        id,
        title,
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
         node: [Node],
         variant: VariantType
      }
      scalar Data
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
      union VariantType = PossibleA | PossibleB

      type PossibleA {
          name: String,
          node: [Node]
      }
      type PossibleB {
          age: Int,
          node: [Node]
      }
    "#;
    // let mut parser = Parser::new(query_code);
    // let query_document = parser.parse();
    // parser = Parser::new(schema_code);
    // let mut query_file = File::create("./query.json").unwrap();
    // write!(query_file, "{}", to_string_pretty(&query_document).unwrap()).unwrap();
    // let schema_doucment = parser.parse();
    // let mut table = GrahpQLTable::new();
    // table.build_table(&schema_doucment);
    // println!("{:?}", table);
    // let mut query_generator = QueryGenerator::new(table);
    // let mut schema_generator = SchemaGenerator::new();
    // let schema_ts = schema_generator.generate(&schema_doucment);
    // let output = query_generator.generate(&query_document);
    // println!("{:?}", output);
    // let mut query_type_file = File::create("./type.d.ts").unwrap();
    // write!(query_type_file, "{}\n {}", output.as_str(), schema_ts.as_str()).unwrap();

    // let github_query = "
    //   query { 
    //     viewer { 
    //     login
    //     }
    // }
    // ";
    // let now = Instant::now();
    // let mut parser = Parser::new(github_str);
    // let schema = parser.parse();
    // parser = Parser::new(github_query);
    // let query_doc = parser.parse();
    // let mut table = GrahpQLTable::new();
    // table.build_table(&schema);
    // let mut query_generator = QueryGenerator::new(table);
    // let mut schema_generator = SchemaGenerator::new();
    // let schema_ts = schema_generator.generate(&schema);
    // let output = query_generator.generate(&query_doc);
    // println!("{:?}", output);
    // let mut query_type_file = File::create("./type.d.ts").unwrap();
    // write!(query_type_file, "{}\n{}\n{}", QueryGenerator::generate_default(), output.as_str(), schema_ts.as_str()).unwrap();
    // println!("cost: {}", (now.elapsed().as_nanos() as f64) / 1000.0 / 1000.0);

    let min = r#"
    query test(
      $devicePicSize: Int = { name: 4, size: ENUM }
      $devicePicSiz1e: Int = ["test", 4, ENUMvalu, true, ""]
    ) {
      user(id: 4, name: { value: $size })
        @include(if: $expandedInfo)
        @include(if: $expandedInfo) {
        id
        name
        smallPic: profilePic(size: 64)
        bigPic: profilePic(size: 1024)
        ...inline
        ... on Test {
          some
        }
      }
    }
    "#;
    let mut parser = Parser::new(min);
    let doc = parser.parse();
    let mut minifier = rustgql_minifier::query_minifier::QueryMinifier::new();
    println!("{:?}", minifier.generate(&doc));
}