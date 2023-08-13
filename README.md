# RustQL
a tool for graqhql , written in rust for better performance. pass all test case in graphql-rust ([link](https://github.com/graphql-rust/graphql-parser/tree/master/tests))

## Quick Start
install rustql_parser and rustql_common.
- rustql_parser: lexer and parser for graphql.
- rustql_common: ast and token for graphql.
```rust
use rustql_parser::parser::Parser;
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
|      **rustql**    |                6.1192us |
|        **~**       |                 4.5783x |