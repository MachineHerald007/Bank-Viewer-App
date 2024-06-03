use crate::util::Util;
use crate::config::config::Config;
use crate::item_parser::item::Item;

pub struct Base;

impl Base {
    pub fn new(character_data: &[u8], slot: u8) -> Self {
        let mode = "";
        Config::init(mode);
        println!("====== characterData ======");
        println!("{:?}", character_data);
        Base
    }

    pub fn set_inventory(
        &self,
        items_data: &[u8],
        inventory: &mut std::collections::HashMap<String, Vec<(String, Item, String)>>,
        length: usize,
        slot: &str,
        lang: &str,
    ) {
        println!("====== itemsData ======");
        println!("{:?}", items_data);

        let mut array = Vec::new();
        for i in (0..items_data.len()).step_by(length) {
            println!("============ item data start ============");
            println!(
                "item number: {}, index: {}, length: {}, end: {}",
                i / length,
                i,
                length,
                i + length
            );
            println!("slot: {}", slot);

            let item_data = &items_data[i..i + length];
            println!("itemData:");

            if self.is_blank(item_data) {
                continue;
            }
            println!("{:?}", item_data);

            let item_code = Util::binary_array_to_int(&item_data[0..3]);
            let item_code_hex = Util::binary_array_to_hex(&item_data[0..3]);
            println!("item code: {}", item_code_hex);

            let item = Item::new(item_data.to_vec(), item_code, lang);
            println!("item name: {:?}", item);

            array.push((item_code_hex, item, slot.to_string()));
        }
        inventory.insert(lang.to_string(), array);
    }

    pub fn set_meseta(
        &self,
        meseta_data: &[u8],
        inventory: &mut std::collections::HashMap<String, Vec<(String, Item, String)>>,
        slot: &str,
        lang: &str,
    ) {
        let name = if lang == "EN" { "MESETA" } else { "メセタ" };
        let meseta = ((meseta_data[2] as u32) << 16) | ((meseta_data[1] as u32) << 8) | meseta_data[0] as u32;

        let meseta_code = format!("09{:07}", meseta);
        let item = Item::new(meseta_data.to_vec(), meseta, lang);

        if let Some(lang_inventory) = inventory.get_mut(lang) {
            lang_inventory.push((meseta_code, item, slot.to_string()));
        }
    }

    fn is_blank(&self, item_data: &[u8]) -> bool {
        item_data.iter().take(20).all(|&b| b == 0)
            || Util::binary_array_to_hex(item_data) == "000000000000000000000000FFFFFFFF0000000000000000"
            || Util::binary_array_to_hex(item_data).contains("00FF00000000000000000000FFFFFFFF")
    }
}
