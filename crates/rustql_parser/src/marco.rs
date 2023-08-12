#[macro_export]
macro_rules! lexer_error {
    ($message: expr, $lexer: expr) => {
        let pos = $lexer.get_pos();
        match $lexer.get_char() {
            Some(ch) => {
                panic!("[Syntax Error]: Unexecpt Charater {:?} {:?}, at ({:?}, {:?}).", ch, $message , pos.row, pos.col );
            }
            None => {
                panic!("[Syntax Error]: Unexecpt EOF {:?}, at ({:?}, {:?})", $message, pos.row, pos.col );
            }
        }
    };
}
#[macro_export]
macro_rules! internal_error {
    ($message: expr) => {
        panic!("[Internal Error]: {:?}, please report this bug to developer, Thanks ~", $message)
    };
}
#[macro_export]
macro_rules! is_keyword_name  {
    ($expect_value: expr, $parser: expr) => {{
        match $parser.get_token() {
            TokenKind::Name => {
                match $parser.get_value() {
                    $expect_value => {
                        true
                    }
                    _ => {  false }
                }
            }
            _ =>  {  false }
        }
    }};
}
#[macro_export] 
macro_rules! expect_keyword_name {
    ($expect_value: expr, $parser: expr) => {{
        match $parser.get_token() {
            TokenKind::Name => {
                match $parser.get_value() {
                    $expect_value => $parser.next_token(),
                    _ => parser_error!(format!("expect name token with {:?}, value.", $parser.get_token()), $parser)
                }
            }
            _ =>  parser_error!(format!("expect name token with {:?}, value.", $parser.get_token()), $parser)
        }
    }};
}
#[macro_export]
macro_rules! parser_error {
    ($msg: expr, $parser: expr) => {{
        let pos = $parser.get_start_pos();
        panic!("[Syntax Error]: Unexpect Token {:?}, {} at ({:?}, {:?}).", $parser.get_token(), $msg, pos.row, pos.col);
    }};
}