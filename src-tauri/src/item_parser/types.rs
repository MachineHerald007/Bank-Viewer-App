use std::collections::HashMap;

#[derive(Debug)]
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
        status: Status,
        addition: Addition,
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
        pds: [String; 3],
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
        display: String
    },
    Other {
        name: String,
        type_: u8,
        itemdata: String,
        number: u8,
        display: String,
    },
}

#[derive(Debug)]
pub struct Attribute {
    pub native: i8,
    pub a_beast: i8,
    pub machine: i8,
    pub dark: i8,
    pub hit: i8,
}

#[derive(Debug)]
pub struct Status {
    pub def: u16,
    pub pow: u16,
    pub dex: u16,
    pub mind: u16,
}

#[derive(Debug)]
pub struct Addition {
    pub def: i32,
    pub avoid: i32,
}

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub enum AdditionType {
    DEF = 0,
    AVOID = 1,
}

#[derive(Debug)]
pub struct Meseta {
    pub name: String,
    pub r#type: u32,
    pub amount: u32,
    pub display: String,
}