#[allow(clippy::all)]
use std::str::CharIndices;
use rustql_common::position::Position;
use rustql_common::token::TokenKind;
use crate::{lexer_error, internal_error};

pub struct Lexer<'a> {
    source: &'a str,
    iter: CharIndices<'a>,
    iter_byte_index: usize,
    iter_char: Option<char>,

    tok: TokenKind,
    pos: Position,
    start_pos: Position,
    end_pos: Position,
    start_byte_index: usize,
    end_byte_index: usize,
}

impl<'a> Lexer<'a> {
    pub fn new(source: &'a str) -> Self {
        let mut iter = source.char_indices();
        let frist_tuple = iter.next();
        match frist_tuple {
            Some((index, frist_char)) => {
                Self {
                    source,
                    iter,
                    iter_char: Some(frist_char),
                    iter_byte_index: index,

                    tok: TokenKind::Start,
                    pos: Position::new(),
                    start_pos: Position::new(),
                    end_pos: Position::new(),
                    start_byte_index: 0,
                    end_byte_index: 0,
                }
            }
            None => {
                Self {
                    source,
                    iter,
                    iter_char: None,
                    iter_byte_index: 0,

                    tok: TokenKind::EOFToken,
                    pos: Position::new(),
                    start_pos: Position::new(),
                    end_pos: Position::new(),
                    start_byte_index: 0,
                    end_byte_index: 0,
                }
            }
        }
    }
    fn is_char(&self, target: char) -> bool {
        if let Some(ch) = self.get_char() {
            if ch == target {
                return true;
            }
        }
        false
    }
    fn get_char(&self) -> Option<char> {
        self.iter_char
    }
    fn eat_char(&mut self, mut n: usize) {
        while n != 0 {
            if let Some(code) = self.get_char() {
                match code {
                    '\n' => {
                        self.pos.col = 0;
                        self.pos.row += 1; 
                    }
                    _ => {
                        self.pos.col += 1;
                    }
                }
                self.pos.index += 1;
                n -= 1;
                match self.iter.next() {
                    Some(tuple) => {
                        self.iter_char = Some(tuple.1);
                        self.iter_byte_index = tuple.0;
                    }
                    None => {
                        self.iter_char = None; 
                        self.iter_byte_index = self.source.len();
                    }
                }
            }else {
                break;
            }
        }
    }
    fn start_with(&self, pat: &str) -> bool {
        self.source[self.iter_byte_index..].starts_with(pat)
    }
    fn start_token(&mut self) {
        self.start_byte_index = self.iter_byte_index;
        self.start_pos = self.pos.clone();
    }
    fn finish_token(&mut self) {
        self.end_byte_index = self.iter_byte_index;
        self.end_pos = self.pos.clone();
    }
    fn skip_ignore_token(&mut self) {
        while let Some(code) = self.get_char() {
            match code {
                '\n' | ' ' | '\t' | ',' | '\r'=> self.eat_char(1) ,
                _ => break
            }
        }
    }
    pub fn get_start_pos(&self) -> Position {
        self.start_pos.clone()
    }
    pub fn get_end_pos(&self) -> Position {
        self.end_pos.clone()
    }
    /* this method only used for debug  */
    pub fn get_pos(&self) -> Position {
        self.pos.clone()
    }
    pub fn get_start_byte_index(&self) -> usize {
        self.start_byte_index
    }
    pub fn get_end_byte_index(&self) -> usize {
        self.end_byte_index
    }
    pub fn get_source_string(&self, start: usize, end: usize) -> &'a str {
        &self.source[start..end]
    }
    pub fn get_value(&self)-> &'a str {
        &self.source[self.start_byte_index..self.end_byte_index]
    }
    pub fn get_token(&mut self) -> TokenKind {
        if self.tok == TokenKind::Start {
            self.next_token()
        }else {
            self.tok.clone()
        }
    }
    pub fn next_token(&mut self) -> TokenKind {
        self.skip_ignore_token();
        self.start_token();
        self.tok = match self.get_char() {
            None => {
                self.finish_token();
                TokenKind::EOFToken
            }
            Some(code) => {
                match code  {
                    '!' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::Point
                    }
                    '|' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::Pipe
                    }
                    '$' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::DollarSign
                    }
                    '(' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::ParenthesesLeft
                    }
                    ')' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::ParenthesesRight
                    }
                    ':' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::Colon
                    }
                    '=' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::Eqal
                    }
                    '@' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::At
                    }
                    '[' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::BracketLeft
                    }
                    ']' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::BracketRight
                    }
                    '{' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::BracesLeft
                    }
                    '}' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::BracesRight
                    }
                    '.' => {
                        self.read_dot()
                    }
                    '&' => {
                        self.eat_char(1);
                        self.finish_token();
                        TokenKind::And
                    }
                    '-' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' => {
                        self.read_number()
                    }
                    '#' => {
                        self.read_comment()
                    }
                    '\"' => {
                        if self.start_with("\"\"\"") {
                            self.read_block_string()
                        } else {
                            self.read_string()
                        }
                    }
                    _ => {
                        if is_name_start(code) {
                            self.read_name()
                        }else {
                            lexer_error!("this char can not be parsed", self);
                        }
                    }
                }
            }
        };
        self.tok.clone()
    }
    fn read_dot(&mut self) -> TokenKind {
        if !self.start_with(".") {
            internal_error!("unreach code, read_dot function must be called when start with .");
        }
        if self.start_with("...") {
            self.eat_char(3);
            self.finish_token();
            return TokenKind::Ellipsis;
        }
        self.read_number()
    }
    fn read_name(&mut self) -> TokenKind {
        match self.get_char() {
            Some(ch) => {
                if !is_name_start(ch) {
                    internal_error!(format!("unreach code, read_name must be called with start name char, but got {:?}", ch));
                }
                self.eat_char(1);
            }
            None => {
                internal_error!("unreach code, rread_name must be called with start name char, but got EOF");
            }
        }
        while let Some(ch) = self.get_char() {
            if is_name_body(ch) {
                self.eat_char(1)
            }else {
                break;
            }
        }
        self.finish_token();
        TokenKind::Name

    }
    fn read_number(&mut self) -> TokenKind {
        let mut is_float = false;
        // Read nagaive
        if self.is_char('-') {
            self.eat_char(1);
        }
        // Read int part
        // if not start with 0, caume util not digital
        // if start with 0, must not start with digial next.
        if !self.is_char('0') {
            self.helper_read_digital();
        }else {
            self.eat_char(1);
            if let Some(ch) = self.get_char() {
                if is_digital(ch) {
                    lexer_error!("0 can not be followed by digial when it in begin of number", self);
                }
            }
        }
        // Read dot and if start with dot
        if self.is_char('.') {
            self.eat_char(1);
            is_float = true;
            self.helper_read_digital();
        }
        if self.is_char('e') || self.is_char('E') {
            self.eat_char(1);
            is_float = true;
            if self.is_char('+') || self.is_char('-') {
                self.eat_char(1);
            }
            self.helper_read_digital();
        }
        self.finish_token();
        // next char can not be any char belong to start with name 
        if let Some(ch) = self.get_char() {
            if is_name_start(ch) {
                lexer_error!("number can not be followed by this char", self);
            }
        }
        if is_float { TokenKind::FloatValue } else { TokenKind::IntValue }
    }
    fn helper_read_digital(&mut self) {
        while let Some(ch) = self.get_char() {
            if is_digital(ch) {
                self.eat_char(1);
            }else {
                break;
            }
        }
    }
    fn read_comment(&mut self) -> TokenKind {
        while let Some(ch) = self.get_char() {
            match ch {
                '\n' => break,
                _ => self.eat_char(1)
            }
        }
        self.finish_token();
        TokenKind::Comment
    }
    fn read_string(&mut self) -> TokenKind {
        if !self.start_with("\"") {
            internal_error!("unreach code, read_block_string must be call when start with '...'");
        }
        self.eat_char(1);

        while !self.start_with("\"")  {
            match self.get_char() {
                Some(code) => {
                    match code {
                        '\n' => { lexer_error!("non block string can not use lineterminator", self); },
                        _ => self.eat_char(1)
                    };
                }
                None => {
                    lexer_error!("unclose string.", self);
                }
            }
        };
        self.eat_char(1);
        self.finish_token();
        TokenKind::StringValue
    }
    fn read_block_string(&mut self) -> TokenKind {
        if !self.start_with("\"\"\"") {
            internal_error!("unreach code, read_block_string must be call when start with '...'");
        }
        self.eat_char(3);

        while !self.start_with("\"\"\"")  {
            if self.start_with("\\\"\"\"") {
                self.eat_char(4);
                continue;
            }
            match self.get_char() {
                Some(_) => {
                    self.eat_char(1);
                }
                None => {
                    lexer_error!("unclose block string.", self);
                }
            }
        }
        self.eat_char(3);
        self.finish_token();
        TokenKind::StringValue
    }
}

fn is_digital(ch: char) -> bool {
    matches!(ch, '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9')
}
fn is_name_start(ch: char) -> bool {
    matches!(ch, 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' |
        'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' |
        'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' |
        'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' |
        '_')
}
fn is_name_body(ch: char) -> bool {
    if is_digital(ch) || is_name_start(ch) {
        return true
    }
    false
}