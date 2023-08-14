use rustql_common::token::TokenKind;
use rustql_parser::lexer::Lexer;
use rustql_parser::parser::Parser;
use rustql_typegen::TsTypeGenerator;
use std::fs;
use std::io::Write;
use serde_json::to_string_pretty;
fn main() {
    let code = r#"
    type Query {
      me: User!
      user(id: ID!, name: String): User
      allUsers: [User]
      search(term: String!): [SearchResult!]!
      myChats: [Chat!]!
    }
    
    enum Role {
      USER
      ADMIN
    }
    
    interface Node {
      id: ID!
    }
    
    union SearchResult = User | Chat | ChatMessage
    
    type User implements Node {
      id: ID!
      username: String!
      email: String!
      role: Role!
    }
    
    type Chat implements Node {
      id: ID!
      users: [User!]!
      messages: [ChatMessage!]!
    }
    
    type ChatMessage implements Node {
      id: ID!
      content: String!
      time: Date!
      user: User!
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
    let mut gen = TsTypeGenerator::new();
    gen.accept_document(&root);
    let mut output = fs::File::create("./test.d.ts").unwrap();
    write!(output, "{}", gen.output.as_str()).unwrap();

}
