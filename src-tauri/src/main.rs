// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use std::fs::create_dir_all;

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
        create_account,
        translate_account_data,
        get_user,
        get_accounts,
        get_account_data,
        get_dashboard_state,
        get_theme,
        save_selected_account,
        save_selected_character,
        save_selected_tab,
        save_lang,
        save_theme,
    },
    file_parser::parse_files
};

fn main() {
    tauri::Builder::default()
    .setup(|app| {
        let path = app.path_resolver().app_data_dir().expect("This should never be None");
        let path = path.join(".images/class_defaults");

        create_dir_all(&path);

        #[cfg(debug_assertions)] // only include this code on debug builds
        {
            let window = app.get_window("main").unwrap();
            window.open_devtools();
            window.close_devtools();
        }
        
        Ok(())
    })
    .plugin(tauri_plugin_window_state::Builder::default().build())
    .invoke_handler(tauri::generate_handler![
        parse_files,
        init_app,
        create_user,
        create_account,
        translate_account_data,
        get_user,
        get_accounts,
        get_account_data,
        get_dashboard_state,
        get_theme,
        save_selected_account,
        save_selected_character,
        save_selected_tab,
        save_lang,
        save_theme,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}