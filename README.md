# RustQL
a tool for graqhql , written in rust for better performance. pass all test case in graphql-rust ([link](https://github.com/graphql-rust/graphql-parser/tree/master/tests))

## Benchesmark
using criterion for benchmark, compare to graphql-rust is 4 time faster.

|      **file**      |  kitchen-sink_canonical |  
| -----------------: | ----------------------: | 
|   **graphql-rust** |               28.016 us | 
|      **rustql**    |                6.1192us |
|        **~**       |                 4.5783x |