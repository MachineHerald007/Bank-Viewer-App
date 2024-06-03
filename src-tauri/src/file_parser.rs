use crate::config::config::Config;
use crate::item_parser::character::Character;
use crate::item_parser::shared_bank::SharedBank;
use serde::Deserialize;
use serde::Serialize;
use std::str;

#[derive(Deserialize)]
pub struct FileData {
    pub filename: String,
    pub binary: Vec<u8>,
}

#[derive(Serialize)]
pub struct ParsedFileData {
    pub filename: String,
    pub length: usize,
    pub content: String,
}

#[tauri::command]
pub fn parse_file(file_data: FileData) -> Result<ParsedFileData, String> {
    let length = file_data.binary.len();

    // Try to convert the binary data to a UTF-8 string
    let content = match str::from_utf8(&file_data.binary) {
        Ok(valid_str) => valid_str.to_string(),
        Err(_) => {
            // If the data is not valid UTF-8, fallback to a hexadecimal string representation
            file_data
                .binary
                .iter()
                .map(|byte| format!("{:02x}", byte))
                .collect::<String>()
        }
    };
    
    let config = Config::init("JA");

    // Print item codes
    println!("Item Codes (JA): {:?}", config.item_codes);
    
    Ok(ParsedFileData {
        filename: file_data.filename,
        length,
        content,
    })
}