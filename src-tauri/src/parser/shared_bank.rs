use std::collections::HashMap;

use crate::parser::item;
use crate::parser::types::Item;
use crate::parser::types::Slot;
use crate::parser::types::SharedBank;
use crate::parser::types::Inventory;
use crate::config::config::Config;

fn set_account_type(mode: u8) -> String {
    Config::mode_name(mode)
}

pub fn create<'a>(char_data: &'a [u8], mode: u8, config: Config) -> SharedBank {
    SharedBank {
        account_type: set_account_type(mode),
        mode: mode,
        bank: item::set_items(char_data, Slot::Str(set_account_type(mode)), 24, config.clone()),
        lang: config.lang.unwrap()
    }
}