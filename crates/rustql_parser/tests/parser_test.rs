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
    fn test_directive_args_multiline() {
        test_case_for_parser!("./tests/fixtures/query/directive_args_multiline");
    }
    #[test]
    fn test_directive_args() {
        test_case_for_parser!("./tests/fixtures/query/directive_args");
    }
    #[test]
    fn test_fragment_spread() {
        test_case_for_parser!("./tests/fixtures/query/fragment_spread");
    }
    #[test]
    fn test_fragment() {
        test_case_for_parser!("./tests/fixtures/query/fragment");
    }
}