use serde::{Serialize, Deserialize};
use rusqlite::{Connection, Result as SqlResult, params};
use thiserror::Error;

use crate::parser::{
    types:: {
        ParsedFileData
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
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            account_name TEXT NOT NULL UNIQUE,
            guild_card INTEGER NOT NULL UNIQUE,
            account_type TEXT NOT NULL,
            server TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS character (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
            rare INTEGER CHECK(rare IN (0, 1)),
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS frame (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            slot INTEGER NOT NULL,
            dfp INTEGER NOT NULL,
            evp INTEGER NOT NULL,
            max_dfp INTEGER NOT NULL,
            max_evp INTEGER NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS barrier (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            dfp INTEGER NOT NULL,
            evp INTEGER NOT NULL,
            max_dfp INTEGER NOT NULL,
            max_evp INTEGER NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS unit (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS mag (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            level INTEGER NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS s_rank_weapon (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            grind INTEGER NOT NULL,
            special TEXT NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS tool (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            number INTEGER NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS meseta (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            amount INTEGER NOT NULL,
            display TEXT NOT NULL
        )",
        (),
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS other (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type INTEGER NOT NULL,
            item_data TEXT NOT NULL,
            number INTEGER NOT NULL,
            display TEXT NOT NULL
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

// create_account needs to also parse through the uploaded files, figure out the item type, and 
// make insert statements to the table(determined by the item type)
#[tauri::command]
pub fn create_account(account: Account, files: Vec<ParsedFileData>) -> Result<(), SqlError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "INSERT INTO account (account_name, guild_card, account_type, server)
         VALUES (?1, ?2, ?3, ?4)",
         params![
            account.account_name,
            account.guild_card,
            account.account_type,
            account.server
         ]
    )?;

    println!("[Account]: {:?}", account);
    println!("[Files]: {:?}", files);
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