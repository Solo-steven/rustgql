pub mod lexer;
mod token;
mod parser;
mod position;
mod marco;
mod ast;

use crate::lexer::Lexer;
use crate::parser::Parser;
use crate::token::TokenKind;
fn main() {
    let code = r#"
    query queryName($foo: ComplexType, $site: Site = MOBILE) {
        whoever123is: node(id: [123, 456]) {
          id
          ... on User @defer {
            field2 {
              id
              alias: field1(first: 10, after: $foo) @include(if: $foo) {
                id
                ...frag
              }
            }
          }
          ... @skip(unless: $foo) {
            id
          }
          ... {
            id
          }
        }
      }
      
      mutation likeStory {
        like(story: 123) @defer {
          story {
            id
          }
        }
      }
      
      subscription StoryLikeSubscription($input: StoryLikeSubscribeInput) {
        storyLikeSubscribe(input: $input) {
          story {
            likers {
              count
            }
            likeSentence {
              text
            }
          }
        }
      }
      
      fragment frag on Friend {
        foo(size: $size, bar: $b, obj: {block: """
      
          block string uses \"""
      
        """, key: "value"})
      }
      
      {
        unnamed(truthy: true, falsey: false, nullish: null)
        query
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
    println!("{:?}", parser.parse());

}
