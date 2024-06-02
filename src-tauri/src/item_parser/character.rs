struct Character {
    slot: String,
    mode: u8,
    name: String,
    guild_card_number: String,
    class: String,
    section_id: String,
    level: u8,
    experience: u32,
    ep1_progress: String,
    ep2_progress: String,
    inventory: std::collections::HashMap<String, Vec<(String, Item, String)>>,
    bank: std::collections::HashMap<String, Vec<(String, Item, String)>>,
}

impl Character {
    fn new(character_data: Vec<u8>, slot: u8) -> Self {
        config::init();
        let mut character = Character {
            slot: String::new(),
            mode: 0,
            name: String::new(),
            guild_card_number: String::new(),
            class: String::new(),
            section_id: String::new(),
            level: 0,
            experience: 0,
            ep1_progress: String::new(),
            ep2_progress: String::new(),
            inventory: std::collections::HashMap::new(),
            bank: std::collections::HashMap::new(),
        };

        character.set_slot(slot);
        character.set_mode(&character_data);
        character.set_name(&character_data);
        character.set_guild_card_number(&character_data);
        character.set_class(&character_data);
        character.set_section_id(&character_data);
        character.set_level(&character_data);
        character.set_experience(&character_data);
        character.set_ep1_progress(&character_data, 11460, 9);
        character.set_ep2_progress(&character_data, 11496, 6);
        let base_obj = Base;
        base_obj.set_inventory(&character_data[20..860], &mut character.inventory, 28, &character.slot, "EN");
        base_obj.set_inventory(&character_data[1800..6600], &mut character.bank, 24, &format!("{} Bank", slot), "EN");
        base_obj.set_inventory(&character_data[20..860], &mut character.inventory, 28, &character.slot, "JA");
        base_obj.set_inventory(&character_data[1800..6600], &mut character.bank, 24, &format!("{} Bank", slot), "JA");
        base_obj.set_meseta(&character_data[884..887], &mut character.inventory, &character.slot, "EN");
        base_obj.set_meseta(&character_data[1795..1799], &mut character.bank, &format!("{} Bank", slot), "EN");
        base_obj.set_meseta(&character_data[884..887], &mut character.inventory, &character.slot, "JA");
        base_obj.set_meseta(&character_data[1795..1799], &mut character.bank, &format!("{} Bank", slot), "JA");

        character
    }

    fn set_mode(&mut self, character_data: &[u8]) {
        if character_data[7] == 0x40 {
            self.mode = config::Mode::CLASSIC;
        } else {
            self.mode = config::Mode::NORMAL;
        }
    }

    fn set_name(&mut self, character_data: &[u8]) {
        let array = &character_data[968..988];
        let mut name = String::new();
        for i in (0..array.len()).step_by(2) {
            if array[i] + array[i + 1] == 0 {
                break;
            }
            name.push(char::from_u32(((array[i + 1] as u32) << 8) | array[i] as u32).unwrap());
        }

        println!("name: {}", common_util::binary_array_to_hex(array));
        println!("name: {}", name);
        self.name = name;
    }

    fn set_guild_card_number(&mut self, character_data: &[u8]) {
        let array = &character_data[888..896];
        let mut guild_card_number = String::new();
        for &value in array {
            guild_card_number.push_str(&format!("{}", value & 0x0F));
        }

        println!("guildCardNumber: {}", common_util::binary_array_to_hex(array));
        println!("guildCardNumber: {}", guild_card_number);
        self.guild_card_number = guild_card_number;
    }

    fn set_class(&mut self, character_data: &[u8]) {
        self.class = config::Classes::get_class(character_data[937]).to_string();
        println!("class: {}", character_data[937]);
    }

    fn set_section_id(&mut self, character_data: &[u8]) {
        self.section_id = config::SectionIDs::get_section_id(character_data[936]).to_string();
        println!("sectionID: {}", character_data[936]);
    }

    fn set_level(&mut self, character_data: &[u8]) {
        println!("level: {}", character_data[876] + 1);
        self.level = character_data[876] + 1;
    }

    fn set_experience(&mut self, _character_data: &[u8]) {
        // Implement experience setting logic here
    }

    fn set_ep1_progress(&mut self, character_data: &[u8], index: usize, number: usize) {
        let count = self.progress_count(character_data, index, number);
        if count == 0 {
            self.ep1_progress = "No Progress".to_string();
        } else {
            self.ep1_progress = format!("Stage {} Cleared! | {}", count, config::Titles[count]);
        }
    }

    fn set_ep2_progress(&mut self, character_data: &[u8], index: usize, number: usize) {
        let count = self.progress_count(character_data, index, number);
        if count == 0 {
            self.ep2_progress = "No Progress".to_string();
        } else {
            self.ep2_progress = format!("Stage {} Cleared!", count);
        }
    }

    fn progress_count(&self, character_data: &[u8], mut index: usize, max: usize) -> usize {
        let mut count = 0;
        for _ in 0..max {
            if character_data[index..index + 4].iter().sum::<u8>() == 0 {
                break;
            }
            count += 1;
            index += 4;
        }
        count
    }
}