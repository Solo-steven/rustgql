use serde_derive::{Deserialize, Serialize};
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum TokenKind {
    /* Start and EOF */
    Start,
    EOFToken,
    /*  Punctuator */
    Point,          // !
    DollarSign,     // $
    ParenthesesLeft,    // (
    ParenthesesRight,   // )
    Ellipsis,       // ...
    Colon,          // :
    Eqal,           // =
    At,             // @
    BracketLeft,    // [
    BracketRight,   // ]
    BracesLeft,     // {
    Pipe,           // |
    BracesRight,    // }
    And, // & (not in the spec, but need it)
    /* Name */
    Name,
    /* IntValue */
    IntValue,
    /* FloatValue */
    FloatValue,
    /* StringValue */
    StringValue,
    /* Comment */
    Comment,
}