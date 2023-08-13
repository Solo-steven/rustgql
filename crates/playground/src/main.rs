use rustql_common::token::TokenKind;
use rustql_parser::lexer::Lexer;
use rustql_parser::parser::Parser;
use std::fs;
use std::io::Write;
use serde_json::to_string_pretty;
fn main() {
    let code = r#"
    query MyQuery {
        field1([something])
      }
    "#;
    let mut lexer = Lexer::new(code);
    loop {
        let t = lexer.next_token();
        println!("{:?}, {:?}", lexer.get_start_byte_index(), lexer.get_end_byte_index());
        println!("{:?}, {:?}", t, lexer.get_value());
        if t == TokenKind::EOFToken {
            break;
        }
    }
    
    let mut parser = Parser::new(code);
    let root = parser.parse();
    let mut output = fs::File::create("./test.json").unwrap();
    println!("{:?}", root);
    write!(output, "{}", to_string_pretty(&root).unwrap().as_str()).unwrap();

}
