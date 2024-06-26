use std::collections::HashMap;
use crate::util::Util;
use crate::parser::item;
use crate::parser::types::{ Item, Slot, Character, Inventory };
use crate::config::config::Config;

fn set_mode(char_data: &[u8]) -> u8 {
    if char_data[7] == 0x40 {
        Config::mode("CLASSIC".to_string())
    } else {
        Config::mode("NORMAL".to_string())
    }
}

fn set_name(char_data: &[u8]) -> String {
    let array = &char_data[968..988];
    let mut name = String::new();

    for i in (0..array.len()).step_by(2) {
        if array[i] + array[i + 1] == 0 {
            break;
        }
        name.push(char::from_u32(((array[i + 1] as u32) << 8) | array[i] as u32).unwrap());
    }

    name
}

fn set_guild_card_number(char_data: &[u8]) -> String {
    let array = &char_data[888..896];
    let mut guild_card_number = String::new();
    
    for &value in array {
        guild_card_number.push_str(&format!("{}", value & 0x0F));
    }
    
    guild_card_number
}

fn set_class(char_data: &[u8]) -> String {
    let class_key = char_data[937];
    let class_map = Config::classes();

    match class_map.get(&class_key) {
        Some(class_name) => {
            String::from(*class_name)
        },
        None => String::from("")
    }
}

fn set_section_id(char_data: &[u8]) -> String {
    let section_id_key = char_data[936];
    let section_id_map = Config::section_ids();

    match section_id_map.get(&section_id_key) {
        Some(section_id_name) => {
            String::from(*section_id_name)
        },
        None => String::from("")
    }
}

fn set_level(char_data: &[u8]) -> u8 {
    char_data[876] + 1
}

fn set_experience(char_data: &[u8]) -> u32 {
    // For now just return 0
    0
}

fn progress_count(char_data: &[u8], mut index: usize, max: usize) -> usize {
    let mut count = 0;

    for _ in 0..max {
        if index + 4 > char_data.len() {
            break;
        }

        if char_data[index..index + 4].iter().map(|&x| x as u16).sum::<u16>() == 0 {
            break;
        }
        
        count += 1;
        index += 4;
    }

    count
}

fn set_ep1_progress(char_data: &Vec<u8>, index: usize, number: usize) -> String {
    let mut progress = String::new();
    let ep1_titles_map = Config::titles();
    let count = progress_count(char_data, index, number);

    if count == 0 {
        progress = String::from("No Progress");
    } else {
        match ep1_titles_map.get(&count) {
            Some(title) => {
                progress = format!("Stage {} Cleared! | {}", count, String::from(*title));
            },
            None => progress = String::from("Unknown Progress")
        }
    }

    progress
}

fn set_ep2_progress(char_data: &Vec<u8>, index: usize, number: usize) -> String {
    let mut progress = String::new();
    let count = progress_count(char_data, index, number);

    if count == 0 {
        progress = String::from("No Progress");
    } else {
        progress = format!("Stage {} Cleared!", count);
    }
    
    progress
}

pub fn create(char_data: &Vec<u8>, slot: usize, config: Config) -> Character {
    Character {
        slot: slot,
        mode: set_mode(char_data),
        name: set_name(char_data),
        lang: config.lang.clone().unwrap(),
        guild_card_number: set_guild_card_number(char_data),
        class: set_class(char_data),
        section_id: set_section_id(char_data),
        level: set_level(char_data),
        experience: set_experience(char_data),
        ep1_progress: set_ep1_progress(char_data, 11460, 9),
        ep2_progress: set_ep2_progress(char_data, 11496, 6),
        inventory: item::set_items(&char_data[20..860], Slot::Usize(slot), 28, config.clone()),
        bank: item::set_items(&char_data[1800..6600], Slot::Usize(slot), 24, config.clone()),
    }
}