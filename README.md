# RustGQL
a tool for graqhql , written in rust for better performance. pass all test case in graphql-rust ([link](https://github.com/graphql-rust/graphql-parser/tree/master/tests))

## Quick Start
install rustql_parser and rustql_common.
- rustgql_parser: lexer and parser for graphql.
- rustgql_common: ast and token for graphql.
- rustgql_typegen: generate typescript `.d.ts` file from your schema.
```rust
use rustgql_parser::parser::Parser;
fn main() {
    let code = "
        query {
            node {
            id
            ...something
            }
        }
    ";
    let mut parser = Parser::new(code);
    let doc = parser.parse();
    println!("{:?}", doc);
}
```
## Benchesmark
using criterion for benchmark, compare to graphql-rust is 4 time faster.

|      **file**      |  kitchen-sink_canonical |  
| -----------------: | ----------------------: | 
|   **graphql-rust** |               28.016 us | 
|      **rustgql**    |                6.1192us |
|        **~**       |                 4.5783x |