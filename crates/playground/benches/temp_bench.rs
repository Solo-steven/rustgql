use criterion::{criterion_group, criterion_main, Criterion, BenchmarkId};
use rustgql_parser::parser::Parser;
use rustgql_typegen::graphql_table::GrahpQLTable;
use rustgql_typegen::query_generator::QueryGenerator;
use rustgql_typegen::schema_generator::SchemaGenerator;

const TINT_FILE_STR: &str = include_str!("../schema.docs.graphql");

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_with_input(
        BenchmarkId::new("rustgql generate simple query type from ", "string of boostrap css"), 
        &TINT_FILE_STR, 
        |b, file| {
            b.iter(|| { 
                let github_query = "
                query { 
                  viewer { 
                  login
                  }
              }
              ";
              let mut parser = Parser::new(file);
              let schema = parser.parse();
              parser = Parser::new(github_query);
              let query_doc = parser.parse();
              let mut table = GrahpQLTable::new();
              table.build_table(&schema);
              let mut query_generator = QueryGenerator::new(table);
              let mut schema_generator = SchemaGenerator::new();
              let schema_ts = schema_generator.generate(&schema);
              let output = query_generator.generate(&query_doc);
            })
        }
    );

}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);