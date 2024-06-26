use rusqlite::{Connection, Result as SqlResult, params};
use crate::command::db::SqlError;
use crate::parser::{
    types:: {Item, WrappedItem}
};

pub fn insert_item(conn: &Connection, item: &WrappedItem, account_id: i64, character_id: i64, storage_type: String, lang: String) -> Result<(), SqlError> {
    if let Some(item_type) = &item.item {
        match item_type {
            Item::Weapon { name, type_, item_data, special, grind, attribute, tekked, rare } => {
                conn.execute(
                    "INSERT INTO weapon
                    (
                        account_id, character_id, storage_type, name, type, item_data, special,
                        grind, native, a_beast, machine, dark, hit, tekked, rare, lang
                    )
                    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9,?10, ?11, ?12, ?13, ?14, ?15, ?16)",
                    params![
                        account_id, character_id, storage_type, name, type_, item_data, special,
                        grind, attribute.native, attribute.a_beast, attribute.machine, attribute.dark,
                        attribute.hit, tekked, rare, lang
                    ]
                )?;
            }
            Item::Frame { name, type_, item_data, slot, addition, max_addition } => {
                conn.execute(
                    "INSERT INTO frame
                    (
                        account_id, character_id, storage_type, name, type, item_data, slot, dfp,
                        evp, max_dfp, max_evp, lang
                    )
                    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)",
                    params![
                        account_id, character_id, storage_type, name, type_, item_data, slot, addition.dfp,
                        addition.evp, max_addition.dfp, max_addition.evp, lang
                    ]
                )?;
            }
            Item::Barrier { name, type_, item_data, addition, max_addition } => {
                conn.execute(
                    "INSERT INTO barrier
                    (
                        account_id, character_id, storage_type, name, type, dfp, evp, max_dfp, max_evp,
                        item_data, lang
                    )
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11)",
                     params![
                        account_id, character_id, storage_type, name, type_, addition.dfp, addition.evp,
                        max_addition.dfp, max_addition.evp, item_data, lang
                    ]
                )?;
            }
            Item::Unit { name, type_, item_data } => {
                conn.execute(
                    "INSERT INTO unit (account_id, character_id, storage_type, name, type, item_data, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
                     params![account_id, character_id, storage_type, name, type_, item_data, lang]
                )?;
            }
            Item::Mag { name, type_, item_data, level, sync, iq, color, rgb, stats, pbs } => {
                conn.execute(
                    "INSERT INTO mag
                    (
                        account_id, character_id, storage_type, name, type, level, sync, iq, color,
                        rgb, def, pow, dex, mind, pbs, item_data, lang
                    )
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17)",
                     params![
                        account_id, character_id, storage_type, name, type_, level, sync, iq, color, rgb,
                        stats.def, stats.pow, stats.dex, stats.mind, pbs.join(","), item_data, lang
                    ]
                )?;
            }
            Item::Tech { name, type_, item_data, level } => {
                conn.execute(
                    "INSERT INTO tech (account_id, character_id, storage_type, name, type, level, item_data, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
                     params![account_id, character_id, storage_type, name, type_, level, item_data, lang]
                )?;
            }
            Item::SRankWeapon { name, type_, item_data, grind, special } => {
                conn.execute(
                    "INSERT INTO srank_weapon (account_id, character_id, storage_type, name, type, grind, special, item_data, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
                     params![account_id, character_id, storage_type, name, type_, grind, special, item_data, lang]
                )?;
            }
            Item::Tool { name, type_, item_data, number } => {
                conn.execute(
                    "INSERT INTO tool (account_id, character_id, storage_type, name, type, number, item_data, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
                     params![account_id, character_id, storage_type, name, type_, number, item_data, lang]
                )?;
            }
            Item::Meseta { name, type_, amount } => {
                conn.execute(
                    "INSERT INTO meseta (account_id, character_id, storage_type, name, type, amount, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
                     params![account_id, character_id, storage_type, name, type_, amount, lang]
                )?;
            }
            Item::Other { name, type_, item_data, number } => {
                conn.execute(
                    "INSERT INTO other (account_id, character_id, storage_type, name, type, number, item_data, lang)
                     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
                     params![account_id, character_id, storage_type, name, type_, number, item_data, lang]
                )?;
            }
        }
    } else {
        println!("Item is None");
    }

    Ok(())
}