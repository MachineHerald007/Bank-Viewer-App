use serde::{Serialize, Deserialize};
use rusqlite::{Connection, Result as SqlResult};
use thiserror::Error;

#[derive(Error, Debug, Serialize, Deserialize)]
pub enum MyError {
    #[error("Database error: {0}")]
    DatabaseError(String),
    #[error("Unknown error")]
    Unknown,
}

impl From<rusqlite::Error> for MyError {
    fn from(error: rusqlite::Error) -> Self {
        MyError::DatabaseError(error.to_string())
    }
}

#[tauri::command]
pub fn init_app() -> Result<(), MyError> {
    let my_db = "C:\\Users\\Spike\\Downloads\\db_dev\\db_dev";
    let conn = Connection::open(my_db)?;

    conn.execute(
        "create table if not exists user (
            id integer primary key,
            profile_name text not null,
            discord_username text not null,
            profile_picture BLOB
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists account (
            id integer primary key,
            account_name text not null unique,
            guild_card integer not null unique,
            account_type text not null,
            server text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists character (
            id integer primary key,
            slot integer not null unique,
            mode integer not null,
            guild_card integer not null,
            name text not null,
            class text not null,
            section_id text not null,
            level integer not null,
            experience integer not null,
            ep1_progress text not null,
            ep2_progress text not null,
            account_id integer not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists weapon (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            special text not null,
            grind integer not null,
            native integer not null,
            a_beast integer not null,
            machine integer not null,
            dark integer not null,
            hit integer not null,
            tekked INTEGER CHECK(tekked IN (0, 1)),
            rare INTEGER CHECK(rare IN (0, 1)),
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists frame (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            slot integer not null,
            dfp integer not null,
            evp integer not null,
            max_dfp integer not null,
            max_evp integer not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists barrier (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            dfp integer not null,
            evp integer not null,
            max_dfp integer not null,
            max_evp integer not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists unit (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists mag (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            level integer not null,
            sync integer not null,
            iq integer not null,
            color text not null,
            rgb text not null,
            def integer not null,
            pow integer not null,
            dex integer not null,
            mind integer not null,
            pbs text not null,
            display text not null,
            display_front text not null,
            display_end text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists disk (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            level integer not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists s_rank_weapon (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            grind integer not null,
            special text not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists tool (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            number integer not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists meseta (
            id integer primary key,
            name text not null,
            type integer not null,
            amount integer not null,
            display text not null
        )",
        (),
    )?;

    conn.execute(
        "create table if not exists other (
            id integer primary key,
            name text not null,
            type integer not null,
            item_data text not null,
            number integer not null,
            display text not null
        )",
        (),
    )?;

    Ok(())
}