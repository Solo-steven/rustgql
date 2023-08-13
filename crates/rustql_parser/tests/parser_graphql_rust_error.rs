#[cfg(test)]
mod test {
    use rustql_parser::parser::Parser;
    use std::fs::{File, read_to_string};
    use std::io::Write;
    use serde_json::to_string_pretty;

    macro_rules! test_case_for_parser {
        ($path: expr) => {
            let ql_file_path = format!("{}.graphql", $path);
            let ast_file_path = format!("{}.ast.json", $path);

            let ql_file_str = match read_to_string(ql_file_path.as_str()) {
                Ok(ql_str) => ql_str,
                Err(_reason) => panic!("[Test Error]: Can not find test file {:?}", ql_file_path.as_str())
            };
            let mut parser = Parser::new(ql_file_str.as_str());
            let root = parser.parse();

            match read_to_string(ast_file_path.as_str()) {
                Ok(ast_str) => {
                    assert_eq!(ast_str, to_string_pretty(&root).unwrap());
                },
                Err(_reason) => {
                    let mut output = File::create(ast_file_path.as_str()).unwrap();
                    write!(output, "{}",to_string_pretty(&root).unwrap().as_str()).unwrap();
                }
            };
        };
    }
    #[test]
    #[should_panic]
    fn test_bad_args_should_panic() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/errors/bad_args");
    }
    #[test]
    #[should_panic]
    fn test_invalid_curly_brace() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/errors/invalid_curly_brace");
    }
}