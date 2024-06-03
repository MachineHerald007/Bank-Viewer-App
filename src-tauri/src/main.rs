// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod config {
    pub mod config;
    pub mod item_codes;
    pub mod item_codes_ja;
}
mod item_parser {
    pub mod base;
    pub mod item;
    pub mod types;
    pub mod character;
    pub mod shared_bank;
}
mod util;
mod file_parser;
use file_parser::parse_file;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![parse_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}