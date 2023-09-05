use criterion::{criterion_group, criterion_main, Criterion, BenchmarkId};
use rustgql_parser::parser::Parser;
use graphql_parser::parse_query;

const TINT_FILE_STR: &str = include_str!("../tests/fixtures/graphql_rust/query/kitchen-sink_canonical.graphql");

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_with_input(
        BenchmarkId::new("rustql parse tiny fule", "string of boostrap css"), 
        &TINT_FILE_STR, 
        |b, file| {
            b.iter(|| { 
                let mut parser = Parser::new(file);
                parser.parse();
            })
        }
    );
    c.bench_with_input(
        BenchmarkId::new("graphql-rust parse tiny fule", "string of boostrap css"), 
        &TINT_FILE_STR, 
        |b, file| {
            b.iter(|| { 
                parse_query::<&str>(file).unwrap();
            })
        }
    );

}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);