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
