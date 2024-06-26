use std::str;
use std::collections::HashMap;
use tauri::regex::Regex;
use crate::config::config::Config;
use crate::parser::{character,shared_bank}
use crate::parser::types::{
    File,
    Files,
    Data,
    ParsedFile,
    ParsedFiles,
    Character,
    SharedBank
};

fn parse(files_to_parse: Files, config: Config) -> Vec<ParsedFile> {
    let mut parsed_files: Vec<ParsedFile> = Vec::new();
    let re_psobank = Regex::new(r"psobank").unwrap();
    let re_psochar = Regex::new(r"psochar").unwrap();
    let re_psoclassicbank = Regex::new(r"psoclassicbank").unwrap();
    
    for file in files_to_parse.iter() {
        let binary = &file.binary;

        if re_psobank.is_match(&file.filename) {
            let normal = String::from("NORMAL");
            parsed_files.push(ParsedFile {
                filename: String::from(&file.filename),
                data: Data::SharedBank(shared_bank::create(&binary[8..4808], Config::mode(normal), config.clone())),
            });
            continue;
        }

        if re_psoclassicbank.is_match(&file.filename) {
            let classic = String::from("CLASSIC");
            parsed_files.push(ParsedFile {
                filename: String::from(&file.filename),
                data: Data::SharedBank(shared_bank::create(&binary[8..4808], Config::mode(classic), config.clone())),
            });
            continue;
        }

        if re_psochar.is_match(&file.filename) {
            let re_slot = Regex::new(r"Slot_ (\d+)").unwrap();

            let slot_match = re_slot
                .captures(&file.filename)
                .and_then(|caps| caps.get(1))
                .expect("Failed to match the slot");

            let slot: usize = slot_match
                .as_str()
                .parse()
                .expect("Failed to parse the slot to a number");
            
            parsed_files.push(ParsedFile {
                filename: String::from(&file.filename.to_owned()),
                data: Data::Character(character::create(&binary, slot + 1, config.clone())),
            });
        }
    }
    
    parsed_files
}

#[tauri::command]
pub fn parse_files(files: Files, lang: String) -> Result<ParsedFiles, ()> {
    let reg_ex = Regex::new(r"psobank|psoclassicbank|psochar").unwrap();
    let mut files_to_parse: Files = Vec::new();
    let config = Config::init(lang.clone());

    for file in &files {
        if reg_ex.is_match(&file.filename) {
            files_to_parse.push(File {
                filename: file.filename.clone(),
                binary: file.binary.clone(),
            });
        }
    }

    if files_to_parse.is_empty() {
        return Err(());
    }

    Ok(ParsedFiles {
        files: parse(files_to_parse, config)
    })
}