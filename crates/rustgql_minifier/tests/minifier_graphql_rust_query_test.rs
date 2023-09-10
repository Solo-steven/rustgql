#[cfg(test)]
mod test {
    use std::io::Write;
    use rustgql_minifier::query_minifier::QueryMinifier;
    use rustgql_parser::parser::Parser;
    use std::fs::{File,read_to_string};
    use std::env;
    fn get_fixtures_folder_path(file_path: &'static str) -> String {
        String::from(env::current_dir().unwrap().join("../../fixtures").join(file_path).as_os_str().to_str().unwrap())
    }
    fn get_test_folder_path(file_path: &'static str) -> String {
        format!("./tests/fixtures/{}", file_path)
    }
    macro_rules! test_case_for_query_minifier {
        ($path: expr) => {
            let ql_file_path = format!("{}.graphql",get_fixtures_folder_path($path));
            let minify_file_path = format!("{}.graphql",get_test_folder_path($path));
            println!("{}, {}", ql_file_path, minify_file_path);
            let ql_file_str = match read_to_string(ql_file_path.as_str()) {
                Ok(ql_str) => ql_str,
                Err(_reason) => panic!("[Test Error]: Can not find test file {:?}", ql_file_path.as_str())
            };
            let mut parser = Parser::new(ql_file_str.as_str());
            let root = parser.parse();
            let mut minifier = QueryMinifier::new();
            let minify_string = minifier.generate(&root);

            match read_to_string(minify_file_path.as_str()) {
                Ok(string) => {
                    assert_eq!(string, minify_string);
                }
                Err(_reason) => {
                    let mut output = File::create(minify_file_path.as_str()).unwrap();
                    write!(output, "{}",minify_string.as_str()).unwrap();
                }
            }
        };
    }
    #[test]
    fn test_minifier_query_directive_args_multiline() {
        test_case_for_query_minifier!("graphql_rust/query/directive_args_multiline");
    }
    #[test]
    fn test_minifier_query_directive_args() {
        test_case_for_query_minifier!("graphql_rust/query/directive_args");
    }
    #[test]
    fn test_minifier_query_fragment_spread() {
        test_case_for_query_minifier!("graphql_rust/query/fragment_spread");
    }
    #[test]
    fn test_minifier_query_fragment() {
        test_case_for_query_minifier!("graphql_rust/query/fragment");
    }
    #[test]
    fn test_minifier_query_inline_fragment_dir() {
        test_case_for_query_minifier!("graphql_rust/query/inline_fragment_dir");
    }
    #[test]
    fn test_minifier_query_inline_fragment() {
        test_case_for_query_minifier!("graphql_rust/query/inline_fragment");
    }
    #[test]
    fn test_minifier_query_kitchen_sink_canonical() {
        test_case_for_query_minifier!("graphql_rust/query/kitchen-sink_canonical");
    }
    #[test]
    fn test_minifier_query_kitchen_sink() {
        test_case_for_query_minifier!("graphql_rust/query/kitchen-sink");
    }
    #[test]
    fn test_minifier_query_minimal_mutation(){
        test_case_for_query_minifier!("graphql_rust/query/minimal_mutation");
    }
    #[test]
    fn test_minifier_query_minimal_query() {
        test_case_for_query_minifier!("graphql_rust/query/minimal_query");
    }
    #[test]
    fn test_minifier_query_minimal() {
        test_case_for_query_minifier!("graphql_rust/query/minimal");
    }
    #[test]
    fn test_minifier_query_mutation_directive() {
        test_case_for_query_minifier!("graphql_rust/query/mutation_directive");
    }
    #[test]
    fn test_minifier_query_mutation_nameless_vars() {
        test_case_for_query_minifier!("graphql_rust/query/mutation_nameless_vars");
    }
    #[test]
    fn test_minifier_query_named_query() {
        test_case_for_query_minifier!("graphql_rust/query/named_query");
    }
    #[test]
    fn test_minifier_query_nested_selection() {
        test_case_for_query_minifier!("graphql_rust/query/nested_selection");
    }
    #[test]
    fn test_minifier_query_aliases() {
        test_case_for_query_minifier!("graphql_rust/query/query_aliases");
    }
    #[test]
    fn test_minifier_query_arguments_multiline() {
        test_case_for_query_minifier!("graphql_rust/query/query_arguments_multiline");
    }
    #[test]
    fn test_minifier_query_arguments() {
        test_case_for_query_minifier!("graphql_rust/query/query_arguments");
    }
    #[test]
    fn test_minifier_query_array_argument_multiline() {
        test_case_for_query_minifier!("graphql_rust/query/query_array_argument_multiline");
    }
    #[test]
    fn test_minifier_query_directive() {
        test_case_for_query_minifier!("graphql_rust/query/query_directive");
    }
    #[test]
    fn test_minifier_query_list_argument() {
        test_case_for_query_minifier!("graphql_rust/query/query_list_argument");
    }
    #[test]
    fn test_minifier_query_nameless_vars_multiple_fields_canonical() {
        test_case_for_query_minifier!("graphql_rust/query/query_nameless_vars_multiple_fields_canonical");
    }
    #[test]
    fn test_minifier_query_nameless_vars_multiple_fields() {
        test_case_for_query_minifier!("graphql_rust/query/query_nameless_vars_multiple_fields");
    }
    #[test]
    fn test_minifier_query_nameless_vars() {
        test_case_for_query_minifier!("graphql_rust/query/query_nameless_vars");
    }
    #[test]
    fn test_minifier_query_object_argument_multiline() {
        test_case_for_query_minifier!("graphql_rust/query/query_object_argument_multiline");
    }
    #[test]
    fn test_minifier_query_object_argument() {
        test_case_for_query_minifier!("graphql_rust/query/query_object_argument");
    }
    #[test]
    fn test_minifier_query_var_default_float() {
        test_case_for_query_minifier!("graphql_rust/query/query_var_default_float");
    }
    #[test]
    fn test_minifier_query_var_default_list() {
        test_case_for_query_minifier!("graphql_rust/query/query_var_default_list");
    }
    #[test]
    fn test_minifier_query_var_default_object() {
        test_case_for_query_minifier!("graphql_rust/query/query_var_default_object");
    }
    #[test]
    fn test_minifier_query_var_default_string() {
        test_case_for_query_minifier!("graphql_rust/query/query_var_default_string");
    }
    #[test]
    fn test_minifier_query_var_defaults() {
        test_case_for_query_minifier!("graphql_rust/query/query_var_defaults");
    }
    #[test]
    fn test_minifier_query_vars() {
        test_case_for_query_minifier!("graphql_rust/query/query_vars");
    }
    #[test]
    fn test_minifier_query_string_literal() {
        test_case_for_query_minifier!("graphql_rust/query/string_literal");
    }
    #[test]
    fn test_minifier_query_subscription_directive() {
        test_case_for_query_minifier!("graphql_rust/query/subscription_directive");
    }
    #[test]
    fn test_minifier_query_triple_quoted_literal() {
        test_case_for_query_minifier!("graphql_rust/query/triple_quoted_literal");
    }

}