use serde_derive::{Deserialize, Serialize};
#[derive(Debug, Clone, PartialEq, Deserialize ,Serialize)]
pub struct Position {
    pub col: usize,
    pub row: usize,
    pub index: usize,
}
impl Default for Position {
    fn default() -> Self {
        Self::new()
    }
}
impl Position {
    pub fn new() -> Self {
        Self {
            col: 0, row: 0, index: 0
        }
    }
}
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
struct Span {
    pub start: Position,
    pub end: Position,
}