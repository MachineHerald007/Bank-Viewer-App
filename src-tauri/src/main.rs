// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod util;
mod lib {
    pub mod db;
}
mod config {
    pub mod config;
    pub mod item_codes;
    pub mod item_codes_ja;
}
mod parser {
    pub mod item;
    pub mod types;
    pub mod character;
    pub mod shared_bank;
}
mod command {
    pub mod db;
    pub mod file_parser;
}

use command::{
    db::{
        init_app,
        create_user,
        get_user,
        get_accounts,
        create_account,
        get_dashboard_state,
        save_selected_account,
        save_selected_character,
        save_lang,
        save_theme,
    },
    file_parser::parse_files
};

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
        parse_files,
        init_app,
        create_user,
        get_user,
        get_accounts,
        create_account,
        get_dashboard_state,
        save_selected_account,
        save_selected_character,
        save_lang,
        save_theme,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}