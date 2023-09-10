use criterion::{criterion_group, criterion_main, Criterion, BenchmarkId};
use rustgql_parser::parser::Parser;
use graphql_parser::{parse_schema, parse_query};

const GIHTUB_SCHEMA: &str = include_str!("../../../fixtures/graphql_github/schema.docs.graphql");
const SIMPLE_QUERY: &str = include_str!("../../../fixtures/graphql_rust/query/kitchen-sink_canonical.graphql");

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_with_input(
        BenchmarkId::new("rustgql parse github graphql schema", "string of github GraphQL schema"), 
        &GIHTUB_SCHEMA, 
        |b, file| {
            b.iter(|| { 
                let mut parser = Parser::new(file);
                parser.parse();
            })
        }
    );
    c.bench_with_input(
        BenchmarkId::new("graphql-rust parse github graphql schema", "string of github GraphQL schema"), 
        &GIHTUB_SCHEMA, 
        |b, file| {
            b.iter(|| { 
                parse_schema::<&str>(file).unwrap();
            })
        }
    );
    c.bench_with_input(
        BenchmarkId::new("rustgql parse simple query", "simple query string"), 
        &SIMPLE_QUERY, 
        |b, file| {
            b.iter(|| { 
                let mut parser = Parser::new(file);
                parser.parse();
            })
        }
    );
    c.bench_with_input(
        BenchmarkId::new("graphql-rust parse simple query", "simple query string"), 
        &SIMPLE_QUERY, 
        |b, file| {
            b.iter(|| { 
                parse_query::<&str>(file).unwrap();
            })
        }
    );

}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);