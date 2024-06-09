use std::str;
use serde::Serialize;
use serde::Deserialize;
use tauri::regex::Regex;
use std::collections::HashMap;

use crate::parser::types;
use crate::parser::character;
use crate::parser::shared_bank;
use crate::config::config::Config;

type Files = Vec<FileData>;

#[derive(Debug, Deserialize, Clone)]
pub struct FileData {
    pub filename: String,
    pub binary: Vec<u8>,
}

#[derive(Debug, Serialize, Clone)]
#[serde(untagged)]
pub enum Data<'a> {
    Character(types::Character<'a>),
    SharedBank(types::SharedBank<'a>),
}

#[derive(Debug, Serialize, Clone)]
pub struct ParsedFileData<'a> {
    pub filename: String,
    pub data: Data<'a>,
}

#[derive(Debug, Serialize)]
pub struct ParsedFiles<'a> {
    pub files: Vec<ParsedFileData<'a>>
}

fn parse<'a>(files_to_parse: &'a Files, config: &'a Config<'a>, lang: &'a str) -> Vec<ParsedFileData<'a>> {
    let mut parsed_files: Vec<ParsedFileData<'a>> = Vec::new();
    let re_psobank = Regex::new(r"psobank").unwrap();
    let re_psochar = Regex::new(r"psochar").unwrap();
    let re_psoclassicbank = Regex::new(r"psoclassicbank").unwrap();

    for (i, file) in files_to_parse.iter().enumerate() {
        let binary = &file.binary;

        if re_psobank.is_match(&file.filename) {
            parsed_files.push(ParsedFileData {
                filename: String::from(&file.filename),
                data: Data::SharedBank(shared_bank::create(&binary[8..4808], Config::mode("NORMAL"), lang, &config)),
            });
            continue;
        }

        if re_psoclassicbank.is_match(&file.filename) {
            parsed_files.push(ParsedFileData {
                filename: String::from(&file.filename),
                data: Data::SharedBank(shared_bank::create(&binary[8..4808], Config::mode("CLASSIC"), lang, &config)),
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
            
            parsed_files.push(ParsedFileData {
                filename: String::from(&file.filename.to_owned()),
                data: Data::Character(character::create(&binary, slot + 1, lang, &config)),
            });
        }
    }
    println!("{:?}", parsed_files);
    parsed_files
}

#[tauri::command]
pub fn parse_files(files: Files, lang: &str) -> Result<ParsedFiles, ()> {
    let reg_ex = Regex::new(r"psobank|psoclassicbank|psochar").unwrap();
    let mut files_to_parse: Files = Vec::new();
    let config = Config::init(lang);

    for file in &files {
        if reg_ex.is_match(&file.filename) {
            files_to_parse.push(FileData {
                filename: file.filename.clone(),
                binary: file.binary.clone(),
            });
        }
    }

    if files_to_parse.is_empty() {
        return Err(());
    }

    let parsed_files = parse(&files_to_parse, &config, lang);

    Ok(ParsedFiles {
        files: parsed_files
    })
}