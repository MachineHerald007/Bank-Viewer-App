use rusqlite::{Connection, Result as SqlResult, params};
use crate::command::db::SqlError;
use crate::parser::{
    types:: {
        Item,
        ItemData,
    }
};

pub fn insert_item(conn: &Connection, item: &Item, account_id: i64, character_id: i64, storage_type: String) -> Result<(), SqlError> {
    if let Some(item_data) = &item.item {
        match item_data {
            ItemData::Weapon { name, type_, itemdata, special, grind, attribute, tekked, rare, display } => {
                println!("Weapon: name: {}, type: {}, itemdata: {}, special: {}, grind: {}, tekked: {}, rare: {}, display: {}", name, type_, itemdata, special, grind, tekked, rare, display);
                println!("Attribute: {:?}", attribute);

                conn.execute(
                    "INSERT INTO weapon (account_id, character_id, storage_type, name, type, item_data, special, grind, native, a_beast, machine, dark, hit, tekked, rare, display)
                    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16)
                    ",
                    params![account_id, character_id, storage_type, name, type_, itemdata, special, grind, attribute.native, attribute.a_beast, attribute.machine, attribute.dark, attribute.hit, tekked, rare, display]
                )?;
            }
            ItemData::Frame { name, type_, itemdata, slot, addition, max_addition, display } => {
                println!("Frame: name: {}, type: {}, itemdata: {}, slot: {}, display: {}", name, type_, itemdata, slot, display);
                println!("Addition: {:?}, Max Addition: {:?}", addition, max_addition);
            }
            ItemData::Barrier { name, type_, itemdata, addition, max_addition, display } => {
                println!("Barrier: name: {}, type: {}, itemdata: {}, display: {}", name, type_, itemdata, display);
                println!("Addition: {:?}, Max Addition: {:?}", addition, max_addition);
            }
            ItemData::Unit { name, type_, itemdata, display } => {
                println!("Unit: name: {}, type: {}, itemdata: {}, display: {}", name, type_, itemdata, display);
            }
            ItemData::Mag { name, type_, itemdata, level, sync, iq, color, rgb, status, pbs, display, display_front, display_end } => {
                println!("Mag: name: {}, type: {}, itemdata: {}, level: {}, sync: {}, iq: {}, color: {}, rgb: {}, display: {}, display_front: {}, display_end: {}", name, type_, itemdata, level, sync, iq, color, rgb, display, display_front, display_end);
                println!("Status: {:?}", status);
                println!("PBs: {:?}", pbs);
            }
            ItemData::Disk { name, type_, itemdata, level, display } => {
                println!("Disk: name: {}, type: {}, itemdata: {}, level: {}, display: {}", name, type_, itemdata, level, display);
            }
            ItemData::SRankWeapon { name, type_, itemdata, grind, special, display } => {
                println!("SRankWeapon: name: {}, type: {}, itemdata: {}, grind: {}, special: {}, display: {}", name, type_, itemdata, grind, special, display);
            }
            ItemData::Tool { name, type_, itemdata, number, display } => {
                println!("Tool: name: {}, type: {}, itemdata: {}, number: {}, display: {}", name, type_, itemdata, number, display);
            }
            ItemData::Meseta { name, r#type, amount, display } => {
                println!("Meseta: name: {}, type: {}, amount: {}, display: {}", name, r#type, amount, display);
            }
            ItemData::Other { name, type_, itemdata, number, display } => {
                println!("Other: name: {}, type: {}, itemdata: {}, number: {}, display: {}", name, type_, itemdata, number, display);
            }
        }
    } else {
        println!("Item is None");
    }

    Ok(())
}