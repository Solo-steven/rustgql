#[cfg(test)]
mod test {
    use rustgql_parser::parser::Parser;
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
    fn test_directive_descriptions_canonical() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/directive_descriptions_canonical");
    }
    #[test]
    fn test_directive_descriptions() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/directive_descriptions");
    }
    #[test]
    fn test_directive_variable_definition() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/directive_variable_definition");
    }
    #[test]
    fn test_directive() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/directive");
    }
    #[test]
    fn test_empty_union() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/empty_union");
    }
    #[test]
    fn test_enum() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/enum");
    }
    #[test]
    fn test_extend_enum() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_enum");
    }
    #[test]
    fn test_extend_input_canonical() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_input_canonical");
    }
    #[test]
    fn test_extend_input() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_input");
    }
    #[test]
    fn test_extend_interface() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_interface");
    }
    #[test]
    fn test_extend_object() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_object");
    }
    #[test]
    fn test_extend_scalar() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/extend_scalar");
    }
    #[test]
    fn test_implements_amp_canonical() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/implements_amp_canonical");
    }
    #[test]
    fn test_implements_amp() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/implements_amp");
    }
    #[test]
    fn test_implements_interface() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/implements_interface");
    }
    #[test]
    fn test_implements() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/implements");
    }
    #[test]
    fn test_input_type() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/input_type");
    }
    #[test]
    fn test_interface() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/interface");
    }
    #[test]
    fn test_kitchen_sink_canonical() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/kitchen-sink_canonical");
    }
    #[test]
    fn test_kitchen_sink() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/kitchen-sink");
    }
    #[test]
    fn test_minimal_type() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/minimal_type");
    }
    #[test]
    fn test_minimal() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/minimal");
    }
    #[test]
    fn test_repeatable() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/repeatable");
    }
    #[test]
    fn test_scalar_type() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/scalar_type");
    }
    #[test]
    fn test_simple_object() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/simple_object");
    }
    #[test]
    fn test_union_extension() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/union_extension");
    }
    #[test]
    fn test_union() {
        test_case_for_parser!("./tests/fixtures/graphql_rust/schema/union");
    }
}