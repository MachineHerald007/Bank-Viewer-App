use std::fmt;
use serde::{ Serialize, Deserialize };
use std::collections::HashMap;

pub type Files = Vec<File>;

#[derive(Debug, Deserialize, Clone)]
pub struct File {
    pub filename: String,
    pub binary: Vec<u8>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(untagged)]
pub enum Data {
    Character(Character),
    SharedBank(SharedBank),
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ParsedFile {
    pub filename: String,
    pub data: Data,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ParsedFiles {
    pub files: Vec<ParsedFile>
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Item {
    pub item: Option<ItemData>
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SharedBank {
    pub account_type: String,
    pub mode: u8,
    pub bank: Inventory,
    pub lang: String
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Character {
    pub slot: usize,
    pub mode: u8,
    pub name: String,
    pub lang: String,
    pub guild_card_number: String,
    pub class: String,
    pub section_id: String,
    pub level: u8,
    pub experience: u32,
    pub ep1_progress: String,
    pub ep2_progress: String,
    pub inventory: Inventory,
    pub bank: Inventory,
}

#[derive(Debug, Clone)]
pub enum Slot {
    Str(String),
    Usize(usize),
}

impl fmt::Display for Slot {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Slot::Str(s) => write!(f, "{}", s),
            Slot::Usize(u) => write!(f, "{}", u),
        }
    }
}

pub type Inventory = Vec<(String, Item, String)>;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum ItemData {
    Weapon {
        name: String,
        type_: u8,
        itemdata: String,
        special: String,
        grind: u8,
        attribute: Attribute,
        tekked: bool,
        rare: bool
    },
    Frame {
        name: String,
        type_: u8,
        itemdata: String,
        slot: u8,
        addition: Addition,
        max_addition: Addition
    },
    Barrier {
        name: String,
        type_: u8,
        itemdata: String,
        addition: Addition,
        max_addition: Addition
    },
    Unit {
        name: String,
        type_: u8,
        itemdata: String
    },
    Mag {
        name: String,
        type_: u8,
        itemdata: String,
        level: u8,
        sync: u8,
        iq: u8,
        color: String,
        rgb: String,
        status: Status,
        pbs: [String; 3]
    },
    Disk {
        name: String,
        type_: u8,
        itemdata: String,
        level: u8
    },
    SRankWeapon {
        name: String,
        type_: u8,
        itemdata: String,
        grind: u8,
        special: String
    },
    Tool {
        name: String,
        type_: u8,
        itemdata: String,
        number: u8
    },
    Meseta {
        name: String,
        r#type: u8,
        amount: u32
    },
    Other {
        name: String,
        type_: u8,
        itemdata: String,
        number: u8
    },
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Attribute {
    pub native: i8,
    pub a_beast: i8,
    pub machine: i8,
    pub dark: i8,
    pub hit: i8,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Status {
    pub def: u16,
    pub pow: u16,
    pub dex: u16,
    pub mind: u16,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Addition {
    pub dfp: i32,
    pub evp: i32,
}

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub enum AdditionType {
    DFP = 0,
    EVP = 1,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Meseta {
    pub name: String,
    pub r#type: u32,
    pub amount: u32
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SRankWeapon {
    pub name: String,
    pub type_: u8,
    pub itemdata: String,
    pub grind: u8,
    pub special: String
}