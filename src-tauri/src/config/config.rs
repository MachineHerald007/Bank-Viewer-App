use std::collections::HashMap;

use crate::config::item_codes;
use crate::config::item_codes_ja;

use item_codes::{
    mag_color_codes,
    weapon_special_codes,
    srank_special_codes,
    specials_list,
    frames,
    barriers,
    tech_name_codes,
    disk_name,
    item_codes,
    pbs
};
use item_codes_ja::{
    mag_color_codes_ja,
    weapon_special_codes_ja,
    srank_special_codes_ja,
    specials_list_ja,
    frames_ja,
    barriers_ja,
    tech_name_codes_ja,
    disk_name_ja,
    item_codes_ja,
    pbs_ja
};

#[derive(Debug, Clone)]
pub struct Config<'a> {
    pub item_codes: Option<HashMap<u32, &'a str>>,
    pub weapon_special_codes: Option<HashMap<u8, &'a str>>,
    pub srank_special_codes: Option<HashMap<u8, &'a str>>,
    pub frames: Option<HashMap<&'a str, [i32; 2]>>,
    pub barriers: Option<HashMap<&'a str, [i32; 2]>>,
    pub tech_name_codes: Option<HashMap<u8, &'a str>>,
    pub disk_name: Option<&'a str>,
    pub pbs: Option<HashMap<&'a str, [&'a str; 3]>>,
    pub mag_color_codes: Option<HashMap<u8, (&'a str, &'a str)>>,
}

impl<'a> Config<'a> {
    pub const WEAPON_RANGE: (u32, u32) = (0x000000, 0x00ED00);
    pub const FRAME_RANGE: (u32, u32) = (0x010100, 0x010158);
    pub const BARRIER_RANGE: (u32, u32) = (0x010200, 0x0102B4);
    pub const UNIT_RANGE: (u32, u32) = (0x010300, 0x010364);
    pub const MAG_RANGE: (u32, u32) = (0x020000, 0x025200);
    pub const TOOL_RANGE: (u32, u32) = (0x030000, 0x030900);
    pub const MESETA_RANGE: (u32, u32) = (0x040000, 0x040000);
    pub const DISK_RANGE: (u32, u32) = (0x050000, 0x05121D);
    pub const EPHINEA_RANGE: (u32, u32) = (0x031005, 0x031810);
    pub const DISK_CODE: u32 = 0x0302;

    pub fn item_type() -> HashMap<&'static str, u32> {
        let mut map = HashMap::new();
        map.insert("WEAPON", 1);
        map.insert("FRAME", 2);
        map.insert("BARRIER", 3);
        map.insert("UNIT", 4);
        map.insert("MAG", 5);
        map.insert("DISK", 6);
        map.insert("TOOL", 7);
        map.insert("SRANK_WEAPON", 8);
        map.insert("OTHER", 9);
        map.insert("MESETA", 10);
        map
    }

    pub fn addition_type() -> HashMap<&'static str, u32> {
        let mut map = HashMap::new();
        map.insert("DEF", 0);
        map.insert("AVOID", 1);
        map
    }

    pub fn classes() -> HashMap<u8, &'static str> {
        let mut map = HashMap::new();
        map.insert(0x00, "HUmar");
        map.insert(0x01, "Hunewearl");
        map.insert(0x02, "HUcast");
        map.insert(0x03, "RAmar");
        map.insert(0x04, "RAcast");
        map.insert(0x05, "RAcaseal");
        map.insert(0x06, "FOmarl");
        map.insert(0x07, "FOnewm");
        map.insert(0x08, "FOnewearl");
        map.insert(0x09, "HUcaseal");
        map.insert(0x0A, "FOmar");
        map.insert(0x0B, "RAmarl");
        map
    }

    pub fn mode(mode: &str) -> u8 {
        match mode {
            "NORMAL" => 0,
            "CLASSIC" => 1,
            _ => 0
        }
    }

    pub fn mode_name(mode: u8) -> &'static str {
        match mode {
            0 => "NORMAL",
            1 => "CLASSIC",
            _ => "UNKNOWN",
        }
    }

    pub fn titles() -> HashMap<usize, &'static str> {
        let mut map = HashMap::new();
        map.insert(1, "Ra-GOU");
        map.insert(2, "Gi-GOU");
        map.insert(3, "Bu-GOU");
        map.insert(4, "Ra-ZAN");
        map.insert(5, "Gi-ZAN");
        map.insert(6, "Bu-ZAN");
        map.insert(7, "Ra-EI");
        map.insert(8, "Gi-EI");
        map.insert(9, "Bu-EI");
        map
    }

    pub fn section_ids() -> HashMap<u8, &'static str> {
        let mut map = HashMap::new();
        map.insert(0x00, "VIRIDIA");
        map.insert(0x01, "GREENILL");
        map.insert(0x02, "SKYLY");
        map.insert(0x03, "BLUEFULL");
        map.insert(0x04, "PURPLENUM");
        map.insert(0x05, "PINKAL");
        map.insert(0x06, "REDRIA");
        map.insert(0x07, "ORAN");
        map.insert(0x08, "YELLOWBOZE");
        map.insert(0x09, "WHITILL");
        map.insert(0x0A, "VIRIDIA");
        map
    }

    pub fn common_weapon_codes() -> Vec<u32> {
        vec![
            0x000000, 0x000100, 0x000101, 0x000102, 0x000103, 0x000104, 0x000200, 0x000201, 0x000202, 0x000203,
            0x000204, 0x000300, 0x000301, 0x000302, 0x000303, 0x000304, 0x000400, 0x000401, 0x000402, 0x000403,
            0x000404, 0x000500, 0x000501, 0x000502, 0x000503, 0x000504, 0x000600, 0x000601, 0x000602, 0x000603,
            0x000604, 0x000700, 0x000701, 0x000702, 0x000703, 0x000704, 0x000800, 0x000801, 0x000802, 0x000803,
            0x000804, 0x000900, 0x000901, 0x000902, 0x000903, 0x000904, 0x000A00, 0x000A01, 0x000A02, 0x000A03,
            0x000B00, 0x000B01, 0x000B02, 0x000B03, 0x000C00, 0x000C01, 0x000C02, 0x000C03,
        ]
    }

    pub fn attribute_type() -> HashMap<&'static str, u8> {
        let mut map = HashMap::new();
        map.insert("native", 0x01);
        map.insert("aBeast", 0x02);
        map.insert("machine", 0x03);
        map.insert("dark", 0x04);
        map.insert("hit", 0x05);
        map
    }

    pub fn mag_color_codes() -> HashMap<u8, &'static str> {
        let mut map = HashMap::new();
        map.insert(0x00, "Red");
        map.insert(0x01, "Blue");
        map.insert(0x02, "Yellow");
        map.insert(0x03, "Green");
        map.insert(0x04, "Purple");
        map.insert(0x05, "Black");
        map.insert(0x06, "White");
        map.insert(0x07, "Cyan");
        map.insert(0x08, "Brown");
        map.insert(0x09, "Orange");
        map.insert(0x0A, "Slate Blue");
        map.insert(0x0B, "Olive");
        map.insert(0x0C, "Turquoise");
        map.insert(0x0D, "Fuchsia");
        map.insert(0x0E, "Grey");
        map.insert(0x0F, "Cream");
        map.insert(0x10, "Pink");
        map.insert(0x11, "Dark Green");
        map.insert(0x12, "Chartreuse");
        map.insert(0x13, "Azure");
        map.insert(0x14, "Royal Purple");
        map.insert(0x15, "Ruby");
        map.insert(0x16, "Sapphire");
        map.insert(0x17, "Emerald");
        map.insert(0x18, "Gold");
        map.insert(0x19, "Silver");
        map.insert(0x1A, "Bronze");
        map.insert(0x1B, "Plum");
        map.insert(0x1C, "Violet");
        map.insert(0x1D, "Goldenrod");
        map
    }

    pub fn srank_weapon_codes() -> HashMap<u32, &'static str> {
        let mut map = HashMap::new();
        map.insert(0x007000, "SABER");
        map.insert(0x007100, "SWORD");
        map.insert(0x007200, "BLADE");
        map.insert(0x007300, "PARTISAN");
        map.insert(0x007400, "SLICER");
        map.insert(0x007500, "GUN");
        map.insert(0x007600, "RIFLE");
        map.insert(0x007700, "MECHGUN");
        map.insert(0x007800, "SHOT");
        map.insert(0x007900, "CANE");
        map.insert(0x007A00, "ROD");
        map.insert(0x007B00, "WAND");
        map.insert(0x007C00, "TWIN");
        map.insert(0x007D00, "CLAW");
        map.insert(0x007E00, "BAZOOKA");
        map.insert(0x007F00, "NEEDLE");
        map.insert(0x008000, "SCYTHE");
        map.insert(0x008100, "HAMMER");
        map.insert(0x008200, "MOON");
        map.insert(0x008300, "PSYCHOGUN");
        map.insert(0x008400, "PUNCH");
        map.insert(0x008500, "WINDMILL");
        map.insert(0x008600, "HARISEN");
        map.insert(0x008700, "J-BLADE");
        map.insert(0x008800, "J-CUTTER");
        map.insert(0x00A500, "SOWRDS");
        map.insert(0x00A600, "LAUNCHER");
        map.insert(0x00A700, "CARDS");
        map.insert(0x00A800, "KNUCKLE");
        map.insert(0x00A900, "AXE");
        map
    }

    pub fn init(lang: &str) -> Self {
        match lang {
            "JA" => Config {
                item_codes: Some(item_codes_ja()),
                weapon_special_codes: Some(weapon_special_codes_ja()),
                srank_special_codes: Some(srank_special_codes_ja()),
                frames: Some(frames_ja()),
                barriers: Some(barriers_ja()),
                tech_name_codes: Some(tech_name_codes_ja()),
                disk_name: Some(disk_name_ja()),
                pbs: Some(pbs_ja()),
                mag_color_codes: Some(mag_color_codes_ja()),
            },
            _ => Config {
                item_codes: Some(item_codes()),
                weapon_special_codes: Some(weapon_special_codes()),
                srank_special_codes: Some(srank_special_codes()),
                frames: Some(frames()),
                barriers: Some(barriers()),
                tech_name_codes: Some(tech_name_codes()),
                disk_name: Some(disk_name()),
                pbs: Some(pbs()),
                mag_color_codes: Some(mag_color_codes()),
            },
        }
    }
}