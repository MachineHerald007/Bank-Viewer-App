use serde::{Serialize, Deserialize};
use rusqlite::{Connection, Result as SqlResult, params};
use thiserror::Error;
use crate::lib::db::{
    insert_item
};
use crate::parser::{
    types:: {
        ParsedFiles,
        ParsedFile,
        Data,
        ItemData,
        Item,
        SharedBank,
        Character,
    }
};

#[derive(Error, Debug, Serialize, Deserialize)]
pub enum SqlError {
    #[error("Database error: {0}")]
    DatabaseError(String),
    #[error("Unknown error")]
    Unknown,
}

impl From<rusqlite::Error> for SqlError {
    fn from(error: rusqlite::Error) -> Self {
        SqlError::DatabaseError(error.to_string())
    }
}

#[tauri::command]
pub fn init_app() -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            profile_name TEXT NOT NULL,
            discord_username TEXT NOT NULL,
            profile_picture BLOB
        );
        CREATE TRIGGER IF NOT EXISTS limit_user BEFORE INSERT ON user
        WHEN (SELECT COUNT(*) FROM user) >= 1
        BEGIN
            SELECT RAISE(FAIL, 'Only one row allowed');
        END;",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS account (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_name TEXT NOT NULL UNIQUE,
            guild_card INTEGER NOT NULL UNIQUE,
            account_type TEXT NOT NULL,
            server TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS character (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slot INTEGER NOT NULL UNIQUE,
            mode INTEGER NOT NULL,
            guild_card INTEGER NOT NULL,
            name TEXT NOT NULL,
            class TEXT NOT NULL,
            section_id TEXT NOT NULL,
            level INTEGER NOT NULL,
            experience INTEGER NOT NULL,
            ep1_progress TEXT NOT NULL,
            ep2_progress TEXT NOT NULL,
            account_id INTEGER NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS weapon (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            special TEXT NOT NULL,
            grind INTEGER NOT NULL,
            native INTEGER NOT NULL,
            a_beast INTEGER NOT NULL,
            machine INTEGER NOT NULL,
            dark INTEGER NOT NULL,
            hit INTEGER NOT NULL,
            tekked INTEGER CHECK(tekked IN (0, 1)),
            rare INTEGER CHECK(rare IN (0, 1))
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS frame (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            slot INTEGER NOT NULL,
            dfp INTEGER NOT NULL,
            evp INTEGER NOT NULL,
            max_dfp INTEGER NOT NULL,
            max_evp INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS barrier (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            dfp INTEGER NOT NULL,
            evp INTEGER NOT NULL,
            max_dfp INTEGER NOT NULL,
            max_evp INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS unit (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS mag (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            level INTEGER NOT NULL,
            sync INTEGER NOT NULL,
            iq INTEGER NOT NULL,
            color TEXT NOT NULL,
            rgb TEXT NOT NULL,
            def INTEGER NOT NULL,
            pow INTEGER NOT NULL,
            dex INTEGER NOT NULL,
            mind INTEGER NOT NULL,
            pbs TEXT NOT NULL,
            display TEXT NOT NULL,
            display_front TEXT NOT NULL,
            display_end TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS disk (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            level INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS s_rank_weapon (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            grind INTEGER NOT NULL,
            special TEXT NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS tool (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            number INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS meseta (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            amount INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS other (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER NOT NULL,
            character_id INTEGER DEFAULT 0,
            storage_type TEXT DEFAULT NULL,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            number INTEGER NOT NULL,
            lang TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS dashboard_state (
            logged_in_id INTEGER DEFAULT 0,
            selected_character_id INTEGER DEFAULT 0,
            lang TEXT NOT NULL,
            theme TEXT NOT NULL
        )",
        (),
    )?;

    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    profile_name: String,
    discord_username: Option<String>,
    profile_picture: Option<Vec<u8>>
}

#[tauri::command]
pub fn create_user(user: User) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    println!("User: {:?}", user);

    conn.execute(
        "INSERT INTO user (profile_name, discord_username, profile_picture)
         VALUES (?1, ?2, ?3)",
        params![
            user.profile_name,
            user.discord_username,
            user.profile_picture
        ]
    )?;

    Ok(())
}

#[tauri::command]
pub fn get_user() -> Result<User, SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    let user = conn.query_row(
        "SELECT profile_name, discord_username, profile_picture FROM user",
        [],
        |row| {
            Ok(User {
                profile_name: row.get(0)?,
                discord_username: row.get(1)?,
                profile_picture: row.get(2)?,
            })
        },
    )?;

    Ok(user)
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Account {
    account_id: u8,
    account_name: String,
    guild_card: u32,
    account_type: String,
    server: String
}

#[tauri::command]
pub fn get_accounts() -> Result<Vec<Account>, SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;
    
    let mut stmt = conn.prepare("SELECT ID, account_name, guild_card, account_type, server FROM account")?;
    let account_iter = stmt.query_map([], |row| {
        Ok(Account {
            account_id: row.get(0)?,
            account_name: row.get(1)?,
            guild_card: row.get(2)?,
            account_type: row.get(3)?,
            server: row.get(4)?
        })
    })?;

    let mut accounts = Vec::new();
    for account in account_iter {
        accounts.push(account?);
    }

    Ok(accounts)
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AccountPayload {
    account_name: String,
    guild_card: u32,
    account_type: String,
    server: String
}

#[tauri::command]
pub fn create_account(account: AccountPayload, files: Vec<ParsedFile>) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let mut conn = Connection::open(my_db)?;
    let transaction = conn.transaction()?;

    println!("[Account]: {:?}", account);

    transaction.execute(
        "INSERT INTO account (account_name, guild_card, account_type, server)
         VALUES (?1, ?2, ?3, ?4)",
         params![
            account.account_name,
            account.guild_card,
            account.account_type,
            account.server
         ]
    )?;

    let account_id = transaction.last_insert_rowid();

    println!("account_id: {}", account_id);

    for file in files {
        match file.data {
            Data::SharedBank(shared_bank) => {
                for (str1, item, str2) in shared_bank.bank {
                    println!("String 1: {}", str1);
                    insert_item(&transaction, &item, account_id, 0, String::from("SHARED_BANK"));
                    println!("String 2: {}", str2);
                }
            },
            Data::Character(character) => {
                let Character { 
                    slot, mode, guild_card_number, name,
                    lang, class, section_id, level, experience,
                    ep1_progress, ep2_progress, bank, inventory
                } = character;
                
                transaction.execute(
                    "INSERT INTO character 
                    (
                        slot, mode, guild_card, name,
                        class, section_id, level, experience,
                        ep1_progress, ep2_progress, account_id
                    )
                    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11)
                    ",
                    params![
                        slot, mode, guild_card_number, name,
                        class, section_id, level, experience,
                        ep1_progress, ep2_progress, account_id
                    ]
                )?;

                let character_id = transaction.last_insert_rowid();

                for (str1, item, str2) in bank {
                    println!("String 1: {}", str1);
                    insert_item(&transaction, &item, account_id, character_id, String::from("BANK"));
                    println!("String 2: {}", str2);
                }

                for (str1, item, str2) in inventory {
                    println!("String 1: {}", str1);
                    insert_item(&transaction, &item, account_id, character_id, String::from("INVENTORY"));
                    println!("String 2: {}", str2);
                }
            }
            _ => {
                // Send back custom error message here
                println!("No SharedBank or Character data in this file");
            }
        }
    }

    transaction.commit()?;

    Ok(())
}

type AccountData = ParsedFiles;

#[tauri::command]
pub fn get_account_data() -> Result<(), SqlError> {
    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DashboardState {
    logged_in_id: u8,
    selected_character_id: u8,
    lang: String,
    theme: String
}

#[tauri::command]
pub fn get_dashboard_state() -> Result<DashboardState, SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    let dashboard_state = conn.query_row(
        "SELECT logged_in_id, selected_character_id, lang, theme FROM dashboard_state",
        [],
        |row| {
            Ok(DashboardState {
                logged_in_id: row.get(0)?,
                selected_character_id: row.get(1)?,
                lang: row.get(2)?,
                theme: row.get(3)?
            })
        },
    )?;

    Ok(dashboard_state)
}

#[tauri::command]
pub fn save_selected_account(selected_account_id: u8) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "UPDATE dashboard_state SET selected_account_id = ?1",
        params![selected_account_id]
    )?;

    Ok(())
}

#[tauri::command]
pub fn save_selected_character(selected_character_id: u8) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "UPDATE dashboard_state SET selected_character_id = ?1",
        params![selected_character_id]
    )?;

    Ok(())
}

#[tauri::command]
pub fn save_lang(lang: String) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "UPDATE dashboard_state SET lang = ?1",
        params![lang]
    )?;

    Ok(())
}

#[tauri::command]
pub fn save_theme(theme: String) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "UPDATE dashboard_state SET theme = ?1",
        params![theme]
    )?;

    Ok(())
}