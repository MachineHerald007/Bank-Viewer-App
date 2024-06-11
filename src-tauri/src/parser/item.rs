use std::collections::HashMap;

use crate::util::Util;
use crate::config::config::Config;
use crate::parser::types::Slot;
use crate::parser::types::Item;
use crate::parser::types::Status;
use crate::parser::types::ItemData;
use crate::parser::types::Inventory;
use crate::parser::types::Attribute;
use crate::parser::types::Addition;
use crate::parser::types::AdditionType;

fn is_s_rank_weapon(item_code: u32) -> bool {
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

fn is_disk(item_code: u32) -> bool {
    item_code >> 8 == Config::DISK_CODE
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
    if is_weapon(item_code) {
        1
    } else if is_frame(item_code) {
        2
    } else if is_barrier(item_code) {
        3
    } else if is_unit(item_code) {
        4
    } else if is_mag(item_code) {
        5
    } else if is_disk(item_code) {
        6
    } else if is_tool(item_code) {
        7
    } else if is_s_rank_weapon(item_code) {
        8
    } else if is_meseta(item_code) {
        10
    } else {
        9
    }
}

fn weapon(item_code: u32, item_data: Vec<u8>, config: Config) -> ItemData {
    let name = get_item_name(item_code, &config);
    let grinder = item_data[3];
    let native = get_native(&item_data);
    let a_beast = get_a_beast(&item_data);
    let machine = get_machine(&item_data);
    let dark = get_dark(&item_data);
    let hit = get_hit(&item_data);
    let is_common = is_common_weapon(item_code);
    let mut element = String::new();
    
    if item_data[4] != 0x00 && item_data[4] != 0x80 {
        element = format!(" [{}]", get_element(&item_data, &config));
    }

    let tekked_mode = is_tekked(&item_data, item_code);
    let mut tekked_text = String::new();

    if !tekked_mode {
        tekked_text = "? ".to_string();
    }

    if !tekked_mode && is_common {
        tekked_text = "???? ".to_string();
    }

    ItemData::Weapon {
        name: name.clone(),
        type_: 1,
        itemdata: Util::binary_array_to_hex(&item_data),
        element: element.clone(),
        grinder,
        attribute: Attribute {
            native,
            a_beast,
            machine,
            dark,
            hit,
        },
        tekked: tekked_mode,
        rare: !is_common,
        display: format!(
            "{}{}{} [{}|{}]",
            tekked_text, name, grinder_label(grinder), element, hit
        ),
    }
}

fn frame<'a>(item_code: u32, item_data: Vec<u8>, config: Config<'a>) -> ItemData {
    let name = get_item_name(item_code, &config);
    let slot = item_data[5];
    let def = item_data[6];
    let def_max_addition = get_addition(&name, &config.frames, 0);
    let avoid = item_data[8];
    let avoid_max_addition = get_addition(&name, &config.frames, 1);

    ItemData::Frame {
        name: name.clone(),
        type_: 2,
        itemdata: Util::binary_array_to_hex(&item_data),
        slot,
        addition: Addition { def: def.into(), avoid: avoid.into() },
        max_addition: Addition {
            def: def_max_addition,
            avoid: avoid_max_addition,
        },
        display: format!(
            "{} [{}|{}] [{}|{}] [{}S]",
            name, def, def_max_addition, avoid, avoid_max_addition, slot
        ),
    }
}

fn barrier<'a>(item_code: u32, item_data: Vec<u8>, config: Config<'a>) -> ItemData {
    let name = get_item_name(item_code, &config);
    let def = item_data[6];
    let def_max_addition = get_addition(&name, &config.barriers, 0);
    let avoid = item_data[8];
    let avoid_max_addition = get_addition(&name, &config.barriers, 1);

    ItemData::Barrier {
        name: name.clone(),
        type_: 3,
        itemdata: Util::binary_array_to_hex(&item_data),
        addition: Addition {
            def: def.into(),
            avoid: avoid.into(),
        },
        max_addition: Addition {
            def: def_max_addition,
            avoid: avoid_max_addition,
        },
        display: format!(
            "{} [{}|{}] [{}|{}]",
            name, def, def_max_addition, avoid, avoid_max_addition
        ),
    }
}

fn unit(item_code: u32, item_data: Vec<u8>, config: Config) -> ItemData {
    let name = get_item_name(item_code, &config);
    
    ItemData::Unit {
        name: name.clone(),
        type_: 4,
        display: name.clone(),
        itemdata: Util::binary_array_to_hex(&item_data),
    }
}

fn mag<'a>(item_code: u32, item_data: Vec<u8>, config: Config<'a>) -> ItemData {
    let name = get_item_name(item_code & 0xFFFF00, &config);
    let level = item_data[2];
    let sync = item_data[16];
    let iq = item_data[17];
    let color = match config.mag_color_codes.clone().expect("REASON").get(&(item_data[19] as u8)) {
        Some(color) => color.clone(),
        None => panic!("Color not found"),  // or handle the error in a way that suits your needs
    };
    let def = ((item_data[5] as u16) << 8 | item_data[4] as u16) / 100;
    let pow = ((item_data[7] as u16) << 8 | item_data[6] as u16) / 100;
    let dex = ((item_data[9] as u16) << 8 | item_data[8] as u16) / 100;
    let mind = ((item_data[11] as u16) << 8 | item_data[10] as u16) / 100;
    let hex_data = Util::binary_array_to_hex(&[item_data[3], item_data[18]]);
    let pbs = get_pbs(&hex_data, config);

    ItemData::Mag {
        name: format!("{} LV{} [{:?}]", name, level, (color.0).chars().nth(1)),
        type_: 5,
        itemdata: Util::binary_array_to_hex(&item_data),
        level,
        sync,
        iq,
        color: color.0.chars().nth(1).expect("REASON").to_string(),
        rgb: color.0.chars().nth(0).expect("REASON").to_string(),
        status: Status {
            def,
            pow,
            dex,
            mind,
        },
        pbs: [pbs[0].clone(), pbs[1].clone(), pbs[2].clone()],
        display: format!(
            "{} LV{} [{}] [{}|{}|{}|{}] [{}|{}|{}]",
            name, level, color.0.chars().nth(1).expect("REASON").to_string(), def, pow, dex, mind, pbs[2], pbs[0], pbs[1]
        ),
        display_front: format!("{} LV{} [{:?}]", name, level, color.0.chars().nth(1)),
        display_end: format!(
            "] [{}|{}|{}|{}] [{}|{}|{}]",
            def, pow, dex, mind, pbs[2], pbs[0], pbs[1]
        ),
    }
}

fn disk<'a>(item_code: u32, item_data: Vec<u8>, config: Config<'a>) -> ItemData {
    let name = match &config.tech_name_codes {
        Some(map) => match map.get(&(item_data[4] as u8)) {
            Some(name) => name.clone(),
            None => "No name found",
        },
        None => "No map found",
    };
    let level = item_data[2] + 1;
    
    ItemData::Disk {
        name: format!("{} LV{} {:?}", name, level, config.disk_name),
        type_: 6,
        itemdata: Util::binary_array_to_hex(&item_data),
        level,
        display: format!("{} LV{} {:?}", name, level, config.disk_name),
    }
}

fn s_rank_weapon<'a>(item_code: u32, item_data: Vec<u8>, config: Config<'a>) -> ItemData {
    let custom_name = get_custom_name(&item_data[6..12]);
    let name = match &config.tech_name_codes {
        Some(map) => match map.get(&(item_data[4] as u8)) {
            Some(name) => name,
            None => "No name found",
        },
        None => "No map found",
    };
    let grinder = item_data[3];
    let element = get_s_rank_element(&item_data, config);

    ItemData::SRankWeapon {
        name: name.clone().to_string(),
        type_: 8,
        itemdata: Util::binary_array_to_hex(&item_data),
        grinder,
        element: element.clone(),
        display: format!("{} {} [{}]", name, grinder_label(grinder), element),
    }
}

fn tool(item_code: u32, item_data: Vec<u8>, config: Config) -> ItemData {
    let name = get_item_name(item_code, &config);
    let number = if item_data.len() == 28 {
        item_data[5]
    } else {
        item_data[20]
    };
    
    ItemData::Tool {
        name: name.clone(),
        type_: 7,
        itemdata: Util::binary_array_to_hex(&item_data),
        number,
        display: format!("{}{}", name, number_label(number)),
    }
}

fn meseta(item_code: u32, item_data: Vec<u8>, config: Config) -> ItemData {
    let amount = item_data[5] as u32; // Assuming the amount is stored in the 5th byte, adjust as necessary
    
    ItemData::Meseta {
        name: "Meseta".to_string(),
        r#type: 10, // Assuming 10 is the type code for Meseta, adjust as necessary
        amount,
        display: format!("Meseta x{}", amount),
    }
}

fn other(item_code: u32, item_data: Vec<u8>, config: Config) -> ItemData {
    let name = get_item_name(item_code, &config);
    let number = if item_data.len() == 28 {
        item_data[5]
    } else {
        item_data[20]
    };

    ItemData::Other {
        name: name.clone(),
        type_: 9,
        itemdata: Util::binary_array_to_hex(&item_data),
        number,
        display: format!("{}{}", name, number_label(number)),
    }
}

fn get_item_name(item_code: u32, config: &Config) -> String {
    if let Some(name) = config.item_codes.clone().expect("REASON").get(&item_code) {
        String::from(name.clone())
    } else {
        format!("undefined. ({})", Util::int_to_hex(item_code))
    }
}

fn get_element(item_data: &[u8], config: &Config) -> String {
    let code = item_data[4];

    if let Some(element) = config.weapon_special_codes.clone().expect("REASON").get(&code) {
        String::from(element.clone())
    } else {
        "undefined".to_string()
    }
}

fn get_s_rank_element(item_data: &[u8], config: Config) -> String {
    let element_code = item_data[2];

    if let Some(element) = config.srank_special_codes.clone().expect("REASON").get(&element_code) {
        String::from(element.clone())
    } else {
        "undefined".to_string()
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

fn get_pbs<'a>(pbs_code: &'a str, config: Config<'a>) -> [String; 3] {
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

fn grinder_label(number: u8) -> String {
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

pub fn set_meseta<'a>(
    meseta_data: &[u8],
    inventory: &mut HashMap<String, Vec<(String, Item, String)>>,
    slot: &str,
    lang: &'a str,
    config: Config<'a>
) 
{
    let name = if lang == "EN" { "MESETA" } else { "メセタ" };
    let meseta = ((meseta_data[2] as u32) << 16) | ((meseta_data[1] as u32) << 8) | meseta_data[0] as u32;
    let meseta_code = format!("09{:07}", meseta);
    let item = new_item(meseta_data.to_vec(), meseta, config);

    if let Some(lang_inventory) = inventory.get_mut(lang) {
        lang_inventory.push((meseta_code, item, slot.to_string()));
    }
}

pub fn set_items<'a>(items_data: &[u8], slot: Slot, length: usize, config: Config<'a>) -> Inventory {
    let mut inventory = HashMap::new();
    let mut array = Vec::new();
    let lang = config.lang.clone().unwrap();

    for i in (0..items_data.len()).step_by(length) {
        let item_data = &items_data[i..i + length];

        if is_blank(item_data) {
            continue;
        }

        let item_code = Util::binary_array_to_int(&item_data[0..3]);
        let item_code_hex = Util::binary_array_to_hex(&item_data[0..3]);
        let item = new_item(item_data.to_vec(), item_code, config.clone());

        array.push((item_code_hex, item, slot.to_string()));
    }

    inventory.insert(lang, array);
    inventory
}

fn is_blank(item_data: &[u8]) -> bool {
    item_data.iter().take(20).all(|&b| b == 0)
        || Util::binary_array_to_hex(item_data) == "000000000000000000000000FFFFFFFF0000000000000000"
        || Util::binary_array_to_hex(item_data).contains("00FF00000000000000000000FFFFFFFF")
}

// removed item param here
fn create_item<'a>(item_data: Vec<u8>, item_code: u32, item_type: u32, config: Config<'a>) -> Option<ItemData> {
    match item_type {
        1 => Some(weapon(item_code, item_data, config)),
        2 => Some(frame(item_code, item_data, config)),
        3 => Some(barrier(item_code, item_data, config)),
        4 => Some(unit(item_code, item_data, config)),
        5 => Some(mag(item_code, item_data, config)),
        6 => Some(disk(item_code, item_data, config)),
        7 => Some(tool(item_code, item_data, config)),
        8 => Some(s_rank_weapon(item_code, item_data, config)),
        9 => Some(other(item_code, item_data, config)),
        10 => Some(meseta(item_code, item_data, config)),
        _ => None,
    }
}

pub fn new_item<'a>(item_data: Vec<u8>, item_code: u32, config: Config<'a>) -> Item {
    let item_type = get_item_type(item_code);
    let item = create_item(item_data, item_code, item_type, config);
    
    Item { item }
}