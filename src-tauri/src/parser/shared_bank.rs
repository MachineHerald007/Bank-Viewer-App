use std::collections::HashMap;
use crate::parser::item;
use crate::parser::types::{Item, Slot, SharedBank, Inventory};
use crate::config::config::Config;

fn set_account_type(mode: u8) -> String {
    Config::mode_name(mode)
}

pub fn create(pso_bank: &Vec<u8>, mode: u8, config: Config) -> SharedBank {
    SharedBank {
        account_type: set_account_type(mode),
        mode: mode,
        bank: item::set_items(&pso_bank[8..4808], Slot::Str(set_account_type(mode)), 24, &pso_bank[4..7], config.clone()),
        lang: config.lang.unwrap()
    }
}