use serde::{Serialize, Deserialize};
use rusqlite::{Connection, Result as SqlResult, params};
use thiserror::Error;

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
        )",
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