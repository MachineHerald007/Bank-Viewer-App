use std::fmt;
use serde::Serialize;
use std::collections::HashMap;

pub type Inventory = HashMap<String, Vec<(String, Item, String)>>;

#[derive(Debug, Serialize, Clone)]
pub struct Item {
    pub item: Option<ItemData>
}

#[derive(Debug, Serialize, Clone)]
pub struct SharedBank {
    pub account_type: String,
    pub mode: u8,
    pub bank: Inventory,
    pub lang: String
}

#[derive(Debug, Serialize, Clone)]
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

#[derive(Debug, Serialize, Clone)]
pub enum ItemData {
    Weapon {
        name: String,
        type_: u8,
        itemdata: String,
        element: String,
        grinder: u8,
        attribute: Attribute,
        tekked: bool,
        rare: bool,
        display: String,
    },
    Frame {
        name: String,
        type_: u8,
        itemdata: String,
        slot: u8,
        addition: Addition,
        max_addition: Addition,
        display: String,
    },
    Barrier {
        name: String,
        type_: u8,
        itemdata: String,
        addition: Addition,
        max_addition: Addition,
        display: String,
    },
    Unit {
        name: String,
        type_: u8,
        itemdata: String,
        display: String,
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
        pbs: [String; 3],
        display: String,
        display_front: String,
        display_end: String,
    },
    Disk {
        name: String,
        type_: u8,
        itemdata: String,
        level: u8,
        display: String,
    },
    SRankWeapon {
        name: String,
        type_: u8,
        itemdata: String,
        grinder: u8,
        element: String,
        display: String,
    },
    Tool {
        name: String,
        type_: u8,
        itemdata: String,
        number: u8,
        display: String,
    },
    Meseta {
        name: String,
        r#type: u8,
        amount: u32,
        display: String,
    },
    Other {
        name: String,
        type_: u8,
        itemdata: String,
        number: u8,
        display: String,
    },
}

#[derive(Debug, Serialize, Clone)]
pub struct Attribute {
    pub native: i8,
    pub a_beast: i8,
    pub machine: i8,
    pub dark: i8,
    pub hit: i8,
}

#[derive(Debug, Serialize, Clone)]
pub struct Status {
    pub def: u16,
    pub pow: u16,
    pub dex: u16,
    pub mind: u16,
}

#[derive(Debug, Serialize, Clone)]
pub struct Addition {
    pub def: i32,
    pub avoid: i32,
}

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub enum AdditionType {
    DEF = 0,
    AVOID = 1,
}

#[derive(Debug, Serialize, Clone)]
pub struct Meseta {
    pub name: String,
    pub r#type: u32,
    pub amount: u32,
    pub display: String,
}

#[derive(Debug, Clone)]
pub struct SRankWeapon {
    pub name: String,
    pub type_: u8,
    pub itemdata: String,
    pub grinder: u8,
    pub element: String,
    pub display: String,
}