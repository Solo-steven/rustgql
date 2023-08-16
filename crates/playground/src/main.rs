use std::fs::File;
use std::io::Write;
use rustql_parser::parser::Parser;
use serde_json::to_string_pretty;

fn main(){
    let code = r#"
    scalar Date

    schema {
      query: Query
    }
    
    type Query {
      me: User!
      user(id: ID!): User
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
    query findUser($userId: ID!) {
      user(id: $userId) {
        ...UserFields
      }
    }
    
    fragment UserFields on User {
      id
      username
      role
    }
    "#;
    let mut parser = Parser::new(code);
    let root = parser.parse();
    println!("{:?}", root);
    let mut output_file = File::create("./test.json").unwrap();
    write!(output_file, "{}", to_string_pretty(&root).unwrap().as_str()).unwrap();
}