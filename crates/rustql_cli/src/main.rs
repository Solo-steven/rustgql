mod codegen;
use std::path::PathBuf;
use std::fs::{read_to_string, File};
use std::io::Write;
use clap::{Parser,command};

use codegen::*;

#[derive(Parser)]
#[command(author="Solo-steven")]
#[command(name="rustql-cli")]
#[command(version = "0.1.0")]
struct Application {
    #[arg(long, short)]
    input: PathBuf,
    #[arg(long, short)]
    output: Option<PathBuf>,
    #[arg(long, short)]
    name: Option<String>
}

fn main() {
    let app = Application::parse();
    let file_name = match app.name {
        Some(name) => name,
        None => String::from("type.d.ts")
    };
    let output_file_path = match app.output {
        Some(file_path ) => file_path,
        None => PathBuf::from(format!("./{}", file_name)),
    };
    let input_file_string = match read_to_string(&app.input) {
        Ok(file_path) => file_path,
        Err(_reason) => panic!("[Error]: Can not read the input file ({:?})", &app.input)
    };
    let output_string = generate_type_string_from_input(input_file_string.as_str());
    let output_file = match File::create(&output_file_path) {
        Ok(file) => file,
        Err(_) => panic!("[Error]: Can not create the output file ({:?})", &output_file_path),
    };
    match write!(&output_file, "{}", output_string) {
        Ok(_) => {},
        Err(_) => panic!("[Error]: Can not write to the output file")
    }
}