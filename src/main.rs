pub mod lexer;
mod token;
mod position;
mod marco;

use crate::lexer::Lexer;
use crate::token::TokenKind;
fn main() {
    let mut lexer = Lexer::new(r#"
            """\""" """
      "#);
    loop {
        let t = lexer.next_token();
        match t {
            TokenKind::EOFToken => {
                break;
            }
            _ => {
                println!("{:?}",t);
            }
        }
    }
}
