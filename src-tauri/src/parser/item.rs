use std::collections::HashMap;
use crate::util::Util;
use crate::config::config::Config;
use crate::parser::types::{
    Slot,
    Item,
    WrappedItem,
    MagStats,
    Inventory,
    Attribute,
    Addition,
    AdditionType
};

fn is_srank_weapon(item_code: u32) -> bool {
    Config::srank_weapon_codes().contains_key(&(item_code & 0xFFF0))
}

fn is_weapon(item_code: u32) -> bool {
    let range = Config::WEAPON_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_common_weapon(item_code: u32) -> bool {
    Config::common_weapon_codes().contains(&item_code)
}

fn is_frame(item_code: u32) -> bool {
    let range = Config::FRAME_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_barrier(item_code: u32) -> bool {
    let range = Config::BARRIER_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_unit(item_code: u32) -> bool {
    let range = Config::UNIT_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_mag(item_code: u32) -> bool {
    let range = Config::MAG_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_tech(item_code: u32) -> bool {
    item_code >> 8 == Config::TECH_CODE
}

fn is_tool(item_code: u32) -> bool {
    let range = Config::TOOL_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn is_meseta(item_code: u32) -> bool {
    let range = Config::MESETA_RANGE;
    range.0 <= item_code && item_code <= range.1
}

fn get_item_type(item_code: u32) -> u32 {
    if is_srank_weapon(item_code) {
        8
    } else if is_weapon(item_code) {
        1
    } else if is_frame(item_code) {
        2
    } else if is_barrier(item_code) {
        3
    } else if is_unit(item_code) {
        4
    } else if is_mag(item_code) {
        5
    } else if is_tech(item_code) {
        6
    } else if is_tool(item_code) {
        7
    } else if is_meseta(item_code) {
        10
    } else {
        9
    }
}

pub fn weapon(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    let grind = item_data[3];
    let native = get_native(&item_data);
    let a_beast = get_a_beast(&item_data);
    let machine = get_machine(&item_data);
    let dark = get_dark(&item_data);
    let hit = get_hit(&item_data);
    let is_common = is_common_weapon(item_code);
    let mut special_code = String::new();
    let special = if item_data[4] != 0x00 && item_data[4] != 0x80 && is_common {
        special_code = format!("0x{:02X}", item_data[4]);
        get_special(&item_data, &config)
    } else {
        special_code = format!("0x{:06X}", item_code);
        get_rare_special(item_code, &config)
    };
    let tekked_mode = is_tekked(&item_data, item_code);
    let mut tekked_text = String::new();

    if !tekked_mode {
        tekked_text = "? ".to_string();
    }

    if !tekked_mode && is_common {
        tekked_text = "???? ".to_string();
    }

    Item::Weapon {
        name: name.clone(),
        type_: 1,
        item_data: Util::binary_array_to_hex(&item_data),
        special: special.clone(),
        special_code: special_code,
        grind,
        attribute: Attribute {
            native,
            a_beast,
            machine,
            dark,
            hit,
        },
        tekked: tekked_mode,
        rare: !is_common
    }
}

pub fn s_rank_weapon(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let custom_name = get_custom_name(&item_data[6..12]);
    let map = Config::srank_weapon_codes();
    let weapon_code = match map.get(&(item_code & 0xFFFF00)) {
        Some(code) => code,
        None => "No code found",
    };
    let name = format!("S-RANK {} {}", custom_name, weapon_code);
    let grind = item_data[3];
    let special = get_srank_special(&item_data, config);

    Item::SRankWeapon {
        name: name.clone().to_string(),
        type_: 8,
        item_data: Util::binary_array_to_hex(&item_data),
        grind,
        special: special.clone(),
        special_code: format!("0x{:02X}", item_data[2])
    }
}

pub fn frame(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    let slot = item_data[5];
    let dfp = item_data[6];
    let dfp_max_addition = get_addition(&name, &config.frames, 0);
    let evp = item_data[8];
    let evp_max_addition = get_addition(&name, &config.frames, 1);

    Item::Frame {
        name: name.clone(),
        type_: 2,
        item_data: Util::binary_array_to_hex(&item_data),
        slot,
        addition: Addition { dfp: dfp.into(), evp: evp.into() },
        max_addition: Addition {
            dfp: dfp_max_addition,
            evp: evp_max_addition,
        }
    }
}

pub fn barrier(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    let dfp = item_data[6];
    let dfp_max_addition = get_addition(&name, &config.barriers, 0);
    let evp = item_data[8];
    let evp_max_addition = get_addition(&name, &config.barriers, 1);

    Item::Barrier {
        name: name.clone(),
        type_: 3,
        item_data: Util::binary_array_to_hex(&item_data),
        addition: Addition {
            dfp: dfp.into(),
            evp: evp.into(),
        },
        max_addition: Addition {
            dfp: dfp_max_addition,
            evp: evp_max_addition,
        }
    }
}

pub fn unit(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    
    Item::Unit {
        name: name.clone(),
        type_: 4,
        item_data: Util::binary_array_to_hex(&item_data),
    }
}

pub fn mag(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code & 0xFFFF00, &config);
    let level = item_data[2];
    let sync = item_data[16];
    let iq = item_data[17];
    let color = match config.mag_color_codes.clone().expect("REASON").get(&(item_data[19] as u8)) {
        Some(color) => color.clone(),
        None => panic!("Color not found"),
    };
    let def = ((item_data[5] as u16) << 8 | item_data[4] as u16) / 100;
    let pow = ((item_data[7] as u16) << 8 | item_data[6] as u16) / 100;
    let dex = ((item_data[9] as u16) << 8 | item_data[8] as u16) / 100;
    let mind = ((item_data[11] as u16) << 8 | item_data[10] as u16) / 100;
    let hex_data = Util::binary_array_to_hex(&[item_data[3], item_data[18]]);
    let pbs = get_pbs(&hex_data, config);

    Item::Mag {
        name: name,
        type_: 5,
        item_data: Util::binary_array_to_hex(&item_data),
        level,
        sync,
        iq,
        color: String::from(color.1),
        rgb: color.0.chars().nth(0).expect("REASON").to_string(),
        stats: MagStats {
            def,
            pow,
            dex,
            mind,
        },
        pbs: [pbs[0].clone(), pbs[1].clone(), pbs[2].clone()]
    }
}

pub fn tech(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = match &config.tech_codes {
        Some(map) => match map.get(&(item_data[4] as u8)) {
            Some(name) => String::from(*name),
            None => String::from("No name found"),
        },
        None => String::from("No map found"),
    };
    let level = item_data[2] + 1;
    
    Item::Tech {
        name,
        level,
        type_: 6,
        item_data: Util::binary_array_to_hex(&item_data),
    }
}

pub fn tool(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    let number = if item_data.len() == 28 {
        item_data[5]
    } else {
        item_data[20]
    };
    
    Item::Tool {
        name: name.clone(),
        type_: 7,
        item_data: Util::binary_array_to_hex(&item_data),
        number
    }
}

pub fn other(item_code: u32, item_data: Vec<u8>, config: Config) -> Item {
    let name = get_item_name(item_code, &config);
    let number = if item_data.len() == 28 {
        item_data[5]
    } else {
        item_data[20]
    };

    Item::Other {
        name: name.clone(),
        type_: 9,
        item_data: Util::binary_array_to_hex(&item_data),
        number
    }
}

pub fn meseta(amount: u32, config: Config) -> Item {
    let lang = config.lang.clone().unwrap();
    let name = if lang == "EN" { "MESETA" } else { "メセタ" };
    
    Item::Meseta {
        name: String::from(name),
        type_: 10,
        amount
    }
}

fn get_item_name(item_code: u32, config: &Config) -> String {
    if let Some(name) = config.item_codes.clone().expect("REASON").get(&item_code) {
        String::from(*name)
    } else {
        format!("undefined. ({})", Util::int_to_hex(item_code))
    }
}

fn get_special(item_data: &[u8], config: &Config) -> String {
    let code = item_data[4];

    if let Some(special) = config.weapon_special_codes.clone().expect("REASON").get(&code) {
        String::from(*special)
    } else {
        String::from("None")
    }
}

fn get_rare_special(item_code: u32, config: &Config) -> String {
    if let Some(special) = config.rare_weapon_special_codes.clone().expect("REASON").get(&item_code) {
        String::from(*special)
    } else {
        String::from("None")
    }
}

fn get_srank_special(item_data: &[u8], config: Config) -> String {
    let special_code = item_data[2];

    if let Some(special) = config.srank_special_codes.clone().expect("REASON").get(&special_code) {
        String::from(*special)

    } else {
        String::from("None")
    }
}

fn get_native(item_data: &[u8]) -> i8 {
    get_attribute(*Config::attribute_type().get("native").unwrap_or(&0), item_data)
}

fn get_a_beast(item_data: &[u8]) -> i8 {
    get_attribute(*Config::attribute_type().get("aBeast").unwrap_or(&0), item_data)
}

fn get_machine(item_data: &[u8]) -> i8 {
    get_attribute(*Config::attribute_type().get("machine").unwrap_or(&0), item_data)
}

fn get_dark(item_data: &[u8]) -> i8 {
    get_attribute(*Config::attribute_type().get("dark").unwrap_or(&0), item_data)
}

fn get_hit(item_data: &[u8]) -> i8 {
    get_attribute(*Config::attribute_type().get("hit").unwrap_or(&0), item_data)
}

fn get_attribute(attribute_type: u8, item_data: &[u8]) -> i8 {
    let attributes = [
        &item_data[6..8],
        &item_data[8..10],
        &item_data[10..12],
    ];
    
    for attr in attributes.iter() {
        if attr[0] == attribute_type {
            return attr[1] as i8;
        }
    }

    0
}

fn get_addition(name: &str, additions: &Option<HashMap<&str, [i32; 2]>>, type_: u8) -> i32 {
    if let Some(addition) = additions.clone().expect("REASON").get(name) {
        *addition.get(type_ as usize).unwrap_or(&0)
    } else {
        0
    }
}

fn is_tekked(item_data: &[u8], _item_code: u32) -> bool {
    item_data[4] < 0x80
}

fn get_pbs(pbs_code: &str, config: Config) -> [String; 3] {
    if let Some(pbs) = config.pbs.clone().expect("REASON").get(&pbs_code) {
        [pbs[0].to_string(), pbs[1].to_string(), pbs[2].to_string()]
    } else {
        ["undefined".to_string(), "undefined".to_string(), "undefined".to_string()]
    }
}

fn number_label(number: u8) -> String {
    if number == 1 {
        String::new()
    } else if number > 0 {
        format!(" x{}", number)
    } else {
        String::new()
    }
}

fn grind_label(number: u8) -> String {
    if number > 0 {
        format!(" +{}", number)
    } else {
        String::new()
    }
}

fn get_custom_name(custom_name_data: &[u8]) -> String {
    let mut temp = vec![];
    let mut data = custom_name_data.to_vec();

    data[0] -= 0x04;
    temp.extend(three_letters(&data[0..2]));
    temp.extend(three_letters(&data[2..4]));
    temp.extend(three_letters(&data[4..6]));

    let custom_name: String = temp.into_iter()
        .filter(|&x| x != 0)
        .map(|x| (x + 64) as u8 as char)
        .collect();

    custom_name
}

fn three_letters(array: &[u8]) -> Vec<u8> {
    let mut array = array.to_vec();
    array[0] -= 0x80;
    let first = array[0] / 0x04;
    let second = (((array[0] % 0x04) as u16) << 8 | array[1] as u16) / 0x20;
    let third = array[1] % 0x20;

    vec![first, second as u8, third]
}

pub fn set_items(items_data: &[u8], slot: Slot, length: usize, meseta_data: &[u8], config: Config) -> Inventory {
    let mut inventory = Vec::new();
    let lang = config.lang.clone().unwrap();

    for i in (0..items_data.len()).step_by(length) {
        let item_data = &items_data[i..i + length];

        if is_blank(item_data) {
            continue;
        }

        let item_code = Util::binary_array_to_int(&item_data[0..3]);
        let item_hex_code = Util::binary_array_to_hex(&item_data[0..3]);
        let item = new_item(item_data.to_vec(), item_code, config.clone());

        inventory.push(item);
    }

    let meseta_amount = ((meseta_data[2] as u32) << 16) | ((meseta_data[1] as u32) << 8) | meseta_data[0] as u32;
    let meseta_hex_code = format!("0x{:06x}", meseta_amount);
    let item = set_meseta(meseta_amount, config.clone());

    inventory.push(WrappedItem { item });
    inventory
}

pub fn set_meseta(amount: u32, config: Config) -> Option<Item> {
    Some(meseta(amount, config))
}

fn is_blank(item_data: &[u8]) -> bool {
    item_data.iter().take(20).all(|&b| b == 0)
        || Util::binary_array_to_hex(item_data) == "000000000000000000000000FFFFFFFF0000000000000000"
        || Util::binary_array_to_hex(item_data).contains("00FF00000000000000000000FFFFFFFF")
}

fn create_item(item_data: Vec<u8>, item_code: u32, item_type: u32, config: Config) -> Option<Item> {
    match item_type {
        1 => Some(weapon(item_code, item_data, config)),
        2 => Some(frame(item_code, item_data, config)),
        3 => Some(barrier(item_code, item_data, config)),
        4 => Some(unit(item_code, item_data, config)),
        5 => Some(mag(item_code, item_data, config)),
        6 => Some(tech(item_code, item_data, config)),
        7 => Some(tool(item_code, item_data, config)),
        8 => Some(s_rank_weapon(item_code, item_data, config)),
        9 => Some(other(item_code, item_data, config)),
        _ => None,
    }
}

pub fn new_item(item_data: Vec<u8>, item_code: u32, config: Config) -> WrappedItem {
    let item_type = get_item_type(item_code);
    let item = create_item(item_data, item_code, item_type, config);
    
    WrappedItem { item }
}