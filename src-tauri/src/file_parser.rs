use tauri::regex::Regex;
use crate::config::config::Config;
// use crate::item_parser::character::Character;
// use crate::item_parser::shared_bank::SharedBank;
use crate::shared_bank;
use serde::Deserialize;
use serde::Serialize;
use std::str;
use std::collections::HashMap;

type Files = Vec<FileData>;

#[derive(Debug, Deserialize)]
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

#[derive(Debug, Deserialize)]
pub struct AllItemsData {
    pub slot: String,
    pub mode: u8,
    pub inventory: HashMap<String, Vec<String>>
}

fn decode(files_to_parse: Files, config: Config, lang: &str) {
    // let mut characters = Vec::new();
    let mut shared_bank = Vec::new();
    let mut all_items: Vec<AllItemsData> = Vec::new();
    let mut inventory = HashMap::new();

    inventory.insert("JA".to_string(), vec![]);
    inventory.insert("EN".to_string(), vec![]);

    all_items.push(AllItemsData {
        slot: String::from("AllItems"),
        mode: Config::mode("NORMAL"),
        inventory: inventory.clone(),
    });

    all_items.push(AllItemsData {
        slot: String::from("AllItems(Classic)"),
        mode: Config::mode("CLASSIC"),
        inventory: inventory.clone(),
    });

    let re_psobank = Regex::new(r"psobank").unwrap();
    let re_psochar = Regex::new(r"psochar").unwrap();
    let re_psoclassicbank = Regex::new(r"psoclassicbank").unwrap();

    for (i, file) in files_to_parse.iter().enumerate() {
        let binary = &file.binary;

        if re_psobank.is_match(&file.filename) {
            shared_bank.push(shared_bank::create(&binary[8..4808], Config::mode("NORMAL"), lang, &config));
            println!("Shared Bank: {:?}", shared_bank);
        }

        if re_psoclassicbank.is_match(&file.filename) {

        }

        if re_psochar.is_match(&file.filename) {

        }
    }
}

#[tauri::command]
pub fn parse_files(files: Files, lang: &str) -> Result<ParsedFileData, ()> {
    let reg_ex = Regex::new(r"psobank|psoclassicbank|psochar").unwrap();
    let mut files_to_parse: Files = Vec::new();
    let config = Config::init(lang);

    for file in &files {
        let length = file.binary.len();
        
        if reg_ex.is_match(&file.filename) {
            files_to_parse.push( FileData {
                filename: file.filename.clone(),
                binary: file.binary.clone()
            })
        }
    }

    if files_to_parse.is_empty() {
        return Err(());
    }

    //decodeAndDisplay + decoder

    decode(files_to_parse, config, lang);

    // Try to convert the binary data to a UTF-8 string
    // let file_content = match str::from_utf8(&file.binary) {
    //     Ok(valid_str) => valid_str.to_string(),
    //     Err(_) => {
    //         // If the data is not valid UTF-8, fallback to a hexadecimal string representation
    //         file
    //             .binary
    //             .iter()
    //             .map(|byte| format!("{:02x}", byte))
    //             .collect::<String>()
    //     }
    // };


    // Print item codes
    // println!("Item Codes (JA): {:?}", config.item_codes);

    // Ok(ParsedFileData {
    //     filename: file_data.filename,
    //     length,
    //     content,
    // })

    // dummy data
    let length = 420;
    let content = String::from("binary");

    Ok(ParsedFileData {
        filename: String::from("null"),
        length,
        content,
    })
}