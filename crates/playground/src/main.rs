use rustql_common::token::TokenKind;
use rustql_parser::lexer::Lexer;
use rustql_parser::parser::Parser;
use std::fs;
use std::io::Write;
use serde_json::to_string_pretty;
fn main() {
    let code = r#"
    # Copyright (c) 2015-present, Facebook, Inc.
    #
    # This source code is licensed under the MIT license found in the
    # LICENSE file in the root directory of this source tree.
    
    schema {
      query: QueryType
      mutation: MutationType
    }
    
    """
    This is a description
    of the `Foo` type.
    """
    type Foo implements Bar & Baz {
      one: Type
      two(argument: InputType!): Type
      three(argument: InputType, other: String): Int
      four(argument: String = "string"): String
      five(argument: [String] = ["string", "string"]): String
      six(argument: InputType = {key: "value"}): Type
      seven(argument: Int = null): Type
    }
    
    type AnnotatedObject @onObject(arg: "value") {
      annotatedField(arg: Type = "default" @onArg): Type @onField
    }
    
    type UndefinedType
    
    extend type Foo {
      seven(argument: [String]): Type
    }
    
    extend type Foo @onType
    
    interface Bar {
      one: Type
      four(argument: String = "string"): String
    }
    
    interface AnnotatedInterface @onInterface {
      annotatedField(arg: Type @onArg): Type @onField
    }
    
    interface UndefinedInterface
    
    extend interface Bar {
      two(argument: InputType!): Type
    }
    
    extend interface Bar @onInterface
    
    union Feed = Story | Article | Advert
    
    union AnnotatedUnion @onUnion = A | B
    
    union AnnotatedUnionTwo @onUnion = | A | B
    
    union UndefinedUnion
    
    extend union Feed = Photo | Video
    
    extend union Feed @onUnion
    
    scalar CustomScalar
    
    scalar AnnotatedScalar @onScalar
    
    extend scalar CustomScalar @onScalar
    
    enum Site {
      DESKTOP
      MOBILE
    }
    
    enum AnnotatedEnum @onEnum {
      ANNOTATED_VALUE @onEnumValue
      OTHER_VALUE
    }
    
    enum UndefinedEnum
    
    extend enum Site {
      VR
    }
    
    extend enum Site @onEnum
    
    input InputType {
      key: String!
      answer: Int = 42
    }
    
    input AnnotatedInput @onInputObject {
      annotatedField: Type @onField
    }
    
    input UndefinedInput
    
    extend input InputType {
      other: Float = 1.23e4
    }
    
    extend input InputType @onInputObject
    
    directive @skip(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT
    
    directive @include(if: Boolean!)
      on FIELD
       | FRAGMENT_SPREAD
       | INLINE_FRAGMENT
    
    directive @include2(if: Boolean!) on
      | FIELD
      | FRAGMENT_SPREAD
      | INLINE_FRAGMENT
    
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
