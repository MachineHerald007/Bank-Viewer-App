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
            ItemData::Weapon { name, type_, itemdata, special, grind, attribute, tekked, rare } => {
                println!("Weapon: name: {}, type: {}, itemdata: {}, special: {}, grind: {}, tekked: {}, rare: {}", name, type_, itemdata, special, grind, tekked, rare);
                println!("Attribute: {:?}", attribute);

                conn.execute(
                    "INSERT INTO weapon (account_id, character_id, storage_type, name, type, item_data, special, grind, native, a_beast, machine, dark, hit, tekked, rare)
                    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15)
                    ",
                    params![account_id, character_id, storage_type, name, type_, itemdata, special, grind, attribute.native, attribute.a_beast, attribute.machine, attribute.dark, attribute.hit, tekked, rare]
                )?;
            }
            ItemData::Frame { name, type_, itemdata, slot, addition, max_addition } => {
                println!("Frame: name: {}, type: {}, itemdata: {}, slot: {}", name, type_, itemdata, slot);
                println!("Addition: {:?}, Max Addition: {:?}", addition, max_addition);
            }
            ItemData::Barrier { name, type_, itemdata, addition, max_addition } => {
                println!("Barrier: name: {}, type: {}, itemdata: {}", name, type_, itemdata);
                println!("Addition: {:?}, Max Addition: {:?}", addition, max_addition);
            }
            ItemData::Unit { name, type_, itemdata } => {
                println!("Unit: name: {}, type: {}, itemdata: {}", name, type_, itemdata);
            }
            ItemData::Mag { name, type_, itemdata, level, sync, iq, color, rgb, status, pbs } => {
                println!("Mag: name: {}, type: {}, itemdata: {}, level: {}, sync: {}, iq: {}, color: {}, rgb: {}", name, type_, itemdata, level, sync, iq, color, rgb);
                println!("Status: {:?}", status);
                println!("PBs: {:?}", pbs);
            }
            ItemData::Disk { name, type_, itemdata, level } => {
                println!("Disk: name: {}, type: {}, itemdata: {}, level: {}", name, type_, itemdata, level);
            }
            ItemData::SRankWeapon { name, type_, itemdata, grind, special } => {
                println!("SRankWeapon: name: {}, type: {}, itemdata: {}, grind: {}, special: {}", name, type_, itemdata, grind, special);
            }
            ItemData::Tool { name, type_, itemdata, number } => {
                println!("Tool: name: {}, type: {}, itemdata: {}, number: {}", name, type_, itemdata, number);
            }
            ItemData::Meseta { name, r#type, amount } => {
                println!("Meseta: name: {}, type: {}, amount: {}", name, r#type, amount);
            }
            ItemData::Other { name, type_, itemdata, number } => {
                println!("Other: name: {}, type: {}, itemdata: {}, number: {}", name, type_, itemdata, number);
            }
        }
    } else {
        println!("Item is None");
    }

    Ok(())
}