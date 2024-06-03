use crate::util::Util;
use crate::config::config::Config;
use crate::item_parser::types::Status;
use crate::item_parser::types::ItemData;
use crate::item_parser::types::Attribute;
use crate::item_parser::types::Addition;
use crate::item_parser::types::AdditionType;

use std::collections::HashMap;

#[derive(Debug)]
pub struct Item {
    item: Option<ItemData>,
}

impl Item {
    pub fn new(item_data: Vec<u8>, item_code: u32, lang: &str) -> Self {
        // Initialize Config
        Config::init(lang);

        // Get the item type (weapon, armor, technique, etc.)
        let item_type = Self::get_item_type(item_code);
        println!("item type: {}", item_type);

        let item = Self::create_item(item_data, item_code, item_type, lang);
        Item { item }
    }

    fn create_item(item_data: Vec<u8>, item_code: u32, item_type: u32, _lang: &str) -> Option<ItemData> {
        match item_type {
            Config::ItemType::SRANK_WEAPON => Some(Self::s_rank_weapon(item_code, item_data)),
            Config::ItemType::WEAPON => Some(Self::weapon(item_code, item_data)),
            Config::ItemType::FRAME => Some(Self::frame(item_code, item_data)),
            Config::ItemType::BARRIER => Some(Self::barrier(item_code, item_data)),
            Config::ItemType::UNIT => Some(Self::unit(item_code, item_data)),
            Config::ItemType::MAG => Some(Self::mag(item_code, item_data)),
            Config::ItemType::DISK => Some(Self::disk(item_code, item_data)),
            Config::ItemType::TOOL => Some(Self::tool(item_code, item_data)),
            Config::ItemType::MESETA => Some(Self::meseta(item_code, item_data)),
            Config::ItemType::OTHER => Some(Self::other(item_code, item_data)),
            _ => None,
        }
    }

    fn get_item_type(item_code: u32) -> u32 {
        if Self::is_s_rank_weapon(item_code) {
            Config::ItemType::SRANK_WEAPON
        } else if Self::is_weapon(item_code) {
            Config::ItemType::WEAPON
        } else if Self::is_frame(item_code) {
            Config::ItemType::FRAME
        } else if Self::is_barrier(item_code) {
            Config::ItemType::BARRIER
        } else if Self::is_unit(item_code) {
            Config::ItemType::UNIT
        } else if Self::is_mag(item_code) {
            Config::ItemType::MAG
        } else if Self::is_disk(item_code) {
            Config::ItemType::DISK
        } else if Self::is_tool(item_code) {
            Config::ItemType::TOOL
        } else if Self::is_meseta(item_code) {
            Config::ItemType::MESETA
        } else {
            Config::ItemType::OTHER
        }
    }

    fn is_s_rank_weapon(item_code: u32) -> bool {
        Config::SRankWeaponCodes.contains_key(&(item_code & 0xFFF0))
    }

    fn is_weapon(item_code: u32) -> bool {
        let range = Config::WeaponRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_frame(item_code: u32) -> bool {
        let range = Config::FrameRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_barrier(item_code: u32) -> bool {
        let range = Config::BarrierRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_unit(item_code: u32) -> bool {
        let range = Config::UnitRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_mag(item_code: u32) -> bool {
        let range = Config::MagRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_disk(item_code: u32) -> bool {
        item_code >> 8 == Config::DiskCode
    }

    fn is_tool(item_code: u32) -> bool {
        let range = Config::ToolRange;
        range[0] <= item_code && item_code <= range[1]
    }

    fn is_meseta(item_code: u32) -> bool {
        let range = Config::MesetaRange;
        range.0 <= item_code && item_code <= range.1
    }

    fn weapon(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
        let grinder = item_data[3];
        let native = Self::get_native(&item_data);
        let a_beast = Self::get_a_beast(&item_data);
        let machine = Self::get_machine(&item_data);
        let dark = Self::get_dark(&item_data);
        let hit = Self::get_hit(&item_data);
        let is_common = Self::is_common_weapon(item_code);
        let mut element = String::new();
        if item_data[4] != 0x00 && item_data[4] != 0x80 {
            element = format!(" [{}]", Self::get_element(&item_data));
        }
        let tekked_mode = Self::is_tekked(&item_data, item_code);
        let mut tekked_text = String::new();
        if !tekked_mode {
            tekked_text = "? ".to_string();
        }
        if !tekked_mode && is_common {
            tekked_text = "???? ".to_string();
        }

        ItemData::Weapon {
            name,
            type_: 1,
            itemdata: Util::binary_array_to_hex(&item_data),
            element,
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
                tekked_text, name, Self::grinder_label(grinder), element, hit
            ),
        }
    }

    fn frame(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
        let slot = item_data[5];
        let def = item_data[6];
        let def_max_addition = Self::get_addition(&name, &Config::FrameAdditions, Config::AdditionType::DEF);
        let avoid = item_data[8];
        let avoid_max_addition = Self::get_addition(&name, &Config::FrameAdditions, Config::AdditionType::AVOID);

        ItemData::Frame {
            name,
            type_: 2,
            itemdata: Util::binary_array_to_hex(&item_data),
            slot,
            status: Status { def, avoid },
            addition: Addition {
                def: def_max_addition,
                avoid: avoid_max_addition,
            },
            display: format!(
                "{} [{}|{}] [{}|{}] [{}S]",
                name, def, def_max_addition, avoid, avoid_max_addition, slot
            ),
        }
    }

    fn barrier(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
        let def = item_data[6];
        let def_max_addition = Self::get_addition(&name, &Config::BarrierAdditions, Config::AdditionType::DEF);
        let avoid = item_data[8];
        let avoid_max_addition = Self::get_addition(&name, &Config::BarrierAdditions, Config::AdditionType::AVOID);

        ItemData::Barrier {
            name,
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

    fn unit(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
        ItemData::Unit {
            name,
            type_: 4,
            display: name.clone(),
            itemdata: Util::binary_array_to_hex(&item_data),
        }
    }

    fn mag(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code & 0xFFFF00);
        let level = item_data[2];
        let sync = item_data[16];
        let iq = item_data[17];
        let color = Config::MagColorCodes[item_data[19] as usize].clone();
        let def = ((item_data[5] as u16) << 8 | item_data[4] as u16) / 100;
        let pow = ((item_data[7] as u16) << 8 | item_data[6] as u16) / 100;
        let dex = ((item_data[9] as u16) << 8 | item_data[8] as u16) / 100;
        let mind = ((item_data[11] as u16) << 8 | item_data[10] as u16) / 100;
        let pbs = Self::get_pbs(Util::binary_array_to_hex(&[item_data[3], item_data[18]]));

        ItemData::Mag {
            name: format!("{} LV{} [{}]", name, level, color.1),
            type_: 5,
            itemdata: Util::binary_array_to_hex(&item_data),
            level,
            sync,
            iq,
            color: color.1,
            rgb: color.0,
            status: Status {
                def,
                pow,
                dex,
                mind,
            },
            pds: [pbs[0].clone(), pbs[1].clone(), pbs[2].clone()],
            display: format!(
                "{} LV{} [{}] [{}|{}|{}|{}] [{}|{}|{}]",
                name, level, color.1, def, pow, dex, mind, pbs[2], pbs[0], pbs[1]
            ),
            display_front: format!("{} LV{} [{}]", name, level, color.1),
            display_end: format!(
                "] [{}|{}|{}|{}] [{}|{}|{}]",
                def, pow, dex, mind, pbs[2], pbs[0], pbs[1]
            ),
        }
    }

    fn disk(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Config::DiskNameCodes[item_data[4] as usize].clone();
        let level = item_data[2] + 1;
        ItemData::Disk {
            name: format!("{} LV{} {}", name, level, Config::DiskNameLanguage),
            type_: 6,
            itemdata: Util::binary_array_to_hex(&item_data),
            level,
            display: format!("{} LV{} {}", name, level, Config::DiskNameLanguage),
        }
    }

    fn s_rank_weapon(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let custom_name = Self::get_custom_name(&item_data[6..12]);
        let name = format!("S-RANK {} {}", custom_name, Config::SRankWeaponCodes[&(item_code & 0xFFFF00)]);
        let grinder = item_data[3];
        let element = Self::get_s_rank_element(&item_data);

        ItemData::SRankWeapon {
            name: name.clone(),
            type_: 8,
            itemdata: Util::binary_array_to_hex(&item_data),
            grinder,
            element,
            display: format!("{} {} [{}]", name, Self::grinder_label(grinder), element),
        }
    }

    fn tool(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
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
            display: format!("{}{}", name, Self::number_label(number)),
        }
    }

    fn meseta(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let amount = item_data[5] as u32; // Assuming the amount is stored in the 5th byte, adjust as necessary
        ItemData::Meseta {
            name: "Meseta".to_string(),
            type_: 10, // Assuming 10 is the type code for Meseta, adjust as necessary
            amount,
            display: format!("Meseta x{}", amount),
        }
    }

    fn other(item_code: u32, item_data: Vec<u8>) -> ItemData {
        let name = Self::get_item_name(item_code);
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
            display: format!("{}{}", name, Self::number_label(number)),
        }
    }

    fn get_item_name(item_code: u32) -> String {
        if let Some(name) = Config::ItemCodes.get(&item_code) {
            name.clone()
        } else {
            format!("undefined. ({})", Util::int_to_hex(item_code))
        }
    }

    fn get_element(item_data: &[u8]) -> String {
        let code = item_data[4];
        if let Some(element) = Config::ElementCodes.get(&code) {
            element.clone()
        } else {
            "undefined".to_string()
        }
    }

    fn get_s_rank_element(item_data: &[u8]) -> String {
        let element_code = item_data[2];
        if let Some(element) = Config::SRankElementCodes.get(&element_code) {
            element.clone()
        } else {
            "undefined".to_string()
        }
    }

    fn get_native(item_data: &[u8]) -> i8 {
        Self::get_attribute(Config::AttributeType::NATIVE, item_data)
    }

    fn get_a_beast(item_data: &[u8]) -> i8 {
        Self::get_attribute(Config::AttributeType::ABEAST, item_data)
    }

    fn get_machine(item_data: &[u8]) -> i8 {
        Self::get_attribute(Config::AttributeType::MACHINE, item_data)
    }

    fn get_dark(item_data: &[u8]) -> i8 {
        Self::get_attribute(Config::AttributeType::DARK, item_data)
    }

    fn get_hit(item_data: &[u8]) -> i8 {
        Self::get_attribute(Config::AttributeType::HIT, item_data)
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

    fn get_addition(name: &str, additions: &HashMap<String, HashMap<AdditionType, i32>>, type_: AdditionType) -> i32 {
        if let Some(addition) = additions.get(name) {
            *addition.get(&type_).unwrap_or(&0)
        } else {
            0
        }
    }

    fn is_tekked(item_data: &[u8], _item_code: u32) -> bool {
        item_data[4] < 0x80
    }

    fn get_pbs(pbs_code: String) -> [String; 3] {
        if let Some(pbs) = Config::PBs.get(&pbs_code) {
            pbs.clone()
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

        // Adjust for lowercase to uppercase
        let mut data = custom_name_data.to_vec();
        data[0] -= 0x04;

        temp.extend(Self::three_letters(&data[0..2]));
        temp.extend(Self::three_letters(&data[2..4]));
        temp.extend(Self::three_letters(&data[4..6]));

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
        let second = ((array[0] % 0x04) << 8 | array[1] as u8) / 0x20;
        let third = array[1] % 0x20;
        vec![first, second, third]
    }
}