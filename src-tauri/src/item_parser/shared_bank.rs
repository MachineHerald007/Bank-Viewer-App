use crate::item_parser::base::Base;
use crate::item_parser::item::Item;

pub struct SharedBank {
    slot: String,
    mode: u8,
    bank: std::collections::HashMap<String, Vec<(String, Item, String)>>,
}

impl SharedBank {
    fn new(character_data: Vec<u8>, slot: u8) -> Self {
        let mut share_bank = SharedBank {
            slot: String::new(),
            mode: 0,
            bank: std::collections::HashMap::new(),
        };
        share_bank.init(character_data, slot);
        share_bank
    }

    fn init(&mut self, character_data: Vec<u8>, slot: u8) {
        Base::new(&character_data, slot);
        self.set_slot(slot);
        self.set_mode(slot);
        let base_obj = Base;
        base_obj.set_inventory(&character_data[8..4808], &mut self.bank, 24, &self.slot, "EN");
        base_obj.set_inventory(&character_data[8..4808], &mut self.bank, 24, &self.slot, "JA");
        base_obj.set_meseta(&character_data[4..7], &mut self.bank, &self.slot, "EN");
        base_obj.set_meseta(&character_data[4..7], &mut self.bank, &self.slot, "JA");
    }

    fn set_slot(&mut self, slot: u8) {
        let NORMAL_MODE = 0;
        self.slot = if slot == NORMAL_MODE {
            "SharedBank".to_string()
        } else {
            "SharedBank(Classic)".to_string()
        };
    }

    fn set_mode(&mut self, slot: u8) {
        self.mode = slot;
    }
}