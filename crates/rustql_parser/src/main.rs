pub mod lexer;
pub mod parser;
pub mod marco;
use rustql_common::token::TokenKind;
use crate::lexer::Lexer;
use crate::parser::Parser;
use std::fs;
use std::io::Write;
use serde_json::to_string_pretty;
fn main() {
    let code = r#"
    query Foo($site: Float = 0.5) {
      field
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
    write!(output, "{}", to_string_pretty(&root).unwrap().as_str()).unwrap();

}
