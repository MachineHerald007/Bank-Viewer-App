use std::collections::HashMap;

use crate::parser::item;
use crate::parser::types::Item;
use crate::parser::types::Slot;
use crate::parser::types::SharedBank;
use crate::parser::types::Inventory;
use crate::config::config::Config;

fn set_account_type(mode: u8) -> &'static str {
    Config::mode_name(mode)
}

pub fn create<'a>(char_data: &'a [u8], mode: u8, lang: &'a str, config: &'a Config<'a>) -> SharedBank<'a> {
    SharedBank {
        account_type: set_account_type(mode),
        mode: mode,
        bank: item::set_items(char_data, Slot::Str(set_account_type(mode)), lang, 24, config),
        lang: lang
    }
}