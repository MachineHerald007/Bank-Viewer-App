import React from "react";
import { StyledText } from "./components/Page/styles";
import { useTheme } from './components/Theme/Theme';

function weaponColor(code) {
    switch(code) {
       case "0x00": // None
            return "pink !important";
        case "0x01": // Draw
            return "pink !important";
        case "0x02": // Drain
            return "pink !important";
        case "0x03": // Fill
            return "pink !important";
        case "0x04": // Gush
            return "pink !important";
        case "0x05": // Heart
            return "pink !important";
        case "0x06": // Mind
            return "pink !important";
        case "0x07": // Soul
            return "pink !important";
        case "0x08": // Geist
            return "pink !important";
        case "0x09": // Master's
            return "pink !important";
        case "0x0A": // Lord's
            return "pink !important";
        case "0x0B": // King's
            return "pink !important";
        case "0x0C": // Charge
            return "#e9e910 !important";
        case "0x0D": // Spirit
            return "pink !important";
        case "0x0E": // Berserk
            return "#caff00 !important";
        case "0x0F": // Ice
            return "pink !important";
        case "0x10": // Frost
            return "pink !important";
        case "0x11": // Freeze
            return "pink !important";
        case "0x12": // Blizzard
            return "#72d2dd !important";
        case "0x13": // Bind
            return "pink !important";
        case "0x14": // Hold
            return "pink !important";
        case "0x15": // Seize
            return "pink !important";
        case "0x16": // Arrest
            return "ffa500 !important";
        case "0x17": // Heat
            return "pink !important";
        case "0x18": // Fire
            return "pink !important";
        case "0x19": // Flame
            return "pink !important";
        case "0x1A": // Burning
            return "pink !important";
        case "0x1B": // Shock
            return "pink !important";
        case "0x1C": // Thunder
            return "pink !important";
        case "0x1D": // Storm
            return "pink !important";
        case "0x1E": // Tempest
            return "pink !important";
        case "0x1F": // Dim
            return "pink !important";
        case "0x20": // Shadow
            return "pink !important";
        case "0x21": // Dark
            return "pink !important";
        case "0x22": // Hell
            return "#d700d7 !important";
        case "0x23": // Panic
            return "pink !important";
        case "0x24": // Riot
            return "pink !important";
        case "0x25": // Havoc
            return "pink !important";
        case "0x26": // Chaos
            return "pink !important";
        case "0x27": // Devil's
            return "pink !important";
        case "0x28": // Demon's
            return "#b63cff !important";
        case "0x81": // Draw
            return "pink !important";
        case "0x82": // Drain
            return "pink !important";
        case "0x83": // Fill
            return "pink !important";
        case "0x84": // Gush
            return "pink !important";
        case "0x85": // Heart
            return "pink !important";
        case "0x86": // Mind
            return "pink !important";
        case "0x87": // Soul
            return "pink !important";
        case "0x88": // Geist
            return "pink !important";
        case "0x89": // Master's
            return "pink !important";
        case "0x8A": // Lord's
            return "pink !important";
        case "0x8B": // King's
            return "pink !important";
        case "0x8C": // Charge
            return "#e9e910 !important";
        case "0x8D": // Spirit
            return "pink !important";
        case "0x8E": // Berserk
            return "#caff00 !important";
        case "0x8F": // Ice
            return "pink !important";
        case "0x90": // Frost
            return "pink !important";
        case "0x91": // Freeze
            return "pink !important";
        case "0x92": // Blizzard
            return "#72d2dd !important";
        case "0x93": // Bind
            return "pink !important";
        case "0x94": // Hold
            return "pink !important";
        case "0x95": // Seize
            return "pink !important";
        case "0x96": // Arrest
            return "#ffa500 !important";
        case "0x97": // Heat
            return "pink !important";
        case "0x98": // Fire
            return "pink !important";
        case "0x99": // Flame
            return "pink !important";
        case "0x9A": // Burning
            return "pink !important";
        case "0x9B": // Shock
            return "pink !important";
        case "0x9C": // Thunder
            return "pink !important";
        case "0x9D": // Storm
            return "pink !important";
        case "0x9E": // Tempest
            return "pink !important";
        case "0x9F": // Dim
            return "pink !important";
        case "0xA0": // Shadow
            return "pink !important";
        case "0xA1": // Dark
            return "pink !important";
        case "0xA2": // Hell
            return "#d700d7 !important";
        case "0xA3": // Panic
            return "pink !important";
        case "0xA4": // Riot
            return "pink !important";
        case "0xA5": // Havoc
            return "pink !important";
        case "0xA6": // Chaos
            return "pink !important";
        case "0xA7": // Devil's
            return "pink !important";
        case "0xA8": // Demon's
            return "#b63cff !important";
        default:
            return "pink !important";
    }
}

function rareWeaponColor(code) {
    switch(code) {
        case "0x000105": // None
            return "white !important";
        case "0x000106": // Freeze
            return;
        case "0x000107": // Lord's
            return;
        case "0x000108": // Spirit
            return;
        case "0x000205": // None
            return "white !important";
        case "0x000206": // Fill
            return;
        case "0x000207": // Burning
            return;
        case "0x000305": // Seize
            return;
        case "0x000306": // Devil's
            return;
        case "0x000307": // Storm
            return;
        case "0x000308": // Blizzard
            return "#72d2dd !important";
        case "0x000309": // Zalure(Lv.5)
            return;
        case "0x000405": // Soul
            return;
        case "0x000406": // Charge+
            return "pink !important";
        case "0x000407": // Freeze
            return;
        case "0x000408": // Hell
            return "#d700d7 !important";
        case "0x000505": // Dark
            return;
        case "0x000506": // Havoc
            return;
        case "0x000507": // Berserk
            return "#caff00 !important";
        case "0x000508": // Izmaela
            return;
        case "0x000605": // Seize
            return;
        case "0x000606": // Flame
            return;
        case "0x000607": // Storm
            return;
        case "0x000608": // Seize
            return;
        case "0x000705": // Seize
            return;
        case "0x000706": // Havoc
            return;
        case "0x000707": // Devil's
            return;
        case "0x000708": // None
            return "white !important";
        case "0x000709": // None
            return "white !important";
        case "0x00070A": // None
            return "white !important";
        case "0x00070B": // None
            return "white !important";
        case "0x00070C": // None
            return "white !important";
        case "0x00070D": // Dark
            return;
        case "0x000805": // Berserk
            return "#caff00 !important";
        case "0x000806": // Freeze
            return;
        case "0x000807": // Seize
            return;
        case "0x000905": // Fill
            return;
        case "0x000906": // Soul
            return;
        case "0x000907": // Lord's
            return;
        case "0x000A04": // Flame
            return;
        case "0x000A05": // Freeze
            return;
        case "0x000A06": // Storm
            return;
        case "0x000A07": // Heart
            return;
        case "0x000B04": // Devil's
            return;
        case "0x000B05": // Spirit
            return;
        case "0x000B06": // Fill
            return;
        case "0x000B07": // None
            return "white !important";
        case "0x000C04": // Flame
            return;
        case "0x000C05": // Freeze
            return;
        case "0x000C06": // Storm
            return;
        case "0x000C07": // Gush
            return;
        case "0x000D00": // Drain
            return;
        case "0x000D01": // Dark
            return;
        case "0x000D02": // Gush
            return;
        case "0x000D03": // Burning
            return;
        case "0x000E00": // Mind
            return;
        case "0x000E01": // Havoc
            return;
        case "0x000E02": // Devil's
            return;
        case "0x000F00": // Hold
            return;
        case "0x000F01": // Freeze
            return;
        case "0x000F02": // King's
            return;
        case "0x000F03": // King's
            return;
        case "0x000F04": // None
            return "white !important";
        case "0x001000": // Piercing Wave
            return;
        case "0x001001": // Dim
            return;
        case "0x001002": // Dim
            return;
        case "0x001003": // Dim
            return;
        case "0x001004": // Dim
            return;
        case "0x001005": // Dim
            return;
        case "0x001006": // Dim
            return;
        case "0x001007": // Piercing Wave
            return;
        case "0x001100": // Berserk
            return "#caff00 !important";
        case "0x001101": // Megid
            return;
        case "0x001200": // Seize
            return;
        case "0x001300": // Arrest
            return "#ffa500 !important";
        case "0x001400": // Devil's
            return;
        case "0x001401": // Chaos
            return;
        case "0x001402": // Burning
            return;
        case "0x001500": // Havoc
            return;
        case "0x001501": // Havoc
            return;
        case "0x001600": // Mind
            return;
        case "0x001700": // Geist
            return;
        case "0x001800": // Hell
            return "#d700d7 !important";
        case "0x001900": // Arrest
            return "#ffa500 !important";
        case "0x001A00": // Storm
            return;
        case "0x001B00": // Demon's
            return;
        case "0x001C00": // Flame
            return;
        case "0x001D00": // Rand Si Tech
            return;
        case "0x001E00": // Divine Punishment
            return;
        case "0x001F00": // Piercing Wave
            return;
        case "0x002000": // Fill
            return;
        case "0x002001": // Berserk
            return "#caff00 !important";
        case "0x002100": // Gush
            return;
        case "0x002200": // Foie
            return;
        case "0x002201": // Gifoie
            return;
        case "0x002300": // Soul
            return;
        case "0x002400": // Zonde
            return;
        case "0x002500": // Barta
            return;
        case "0x002600": // None
            return "white !important";
        case "0x002700": // King's
            return;
        case "0x002800": // Seize
            return;
        case "0x002900": // Hell
            return "#d700d7 !important";
        case "0x002A00": // Burning
            return;
        case "0x002B00": // Berserk
            return "#caff00 !important";
        case "0x002C00": // Foie
            return;
        case "0x002D00": // Fill
            return;
        case "0x002E00": // Blizzard
            return "#72d2dd !important";
        case "0x002F00": // Devil's
            return;
        case "0x002F01": // Devil's
            return;
        case "0x003000": // Piercing Wave
            return;
        case "0x003001": // Piercing Wave
            return;
        case "0x003100": // Havoc
            return;
        case "0x003200": // PB Wave
            return;
        case "0x003300": // Hell
            return "#d700d7 !important";
        case "0x003400": // Seize
            return;
        case "0x003500": // Chaos
            return;
        case "0x003600": // Dark
            return;
        case "0x003700": // Charge
            return "#e9e910 !important";
        case "0x003800": // Piercing Wave
            return;
        case "0x003900": // Soul
            return;
        case "0x003A00": // Spirit
            return;
        case "0x003B00": // Berserk
            return "#caff00 !important";
        case "0x003C00": // Devil's
            return;
        case "0x003D00": // PB Wave
            return;
        case "0x003E00": // Freeze
            return;
        case "0x003F00": // Devil's
            return;
        case "0x004000": // Lord's
            return;
        case "0x004100": // Flame
            return;
        case "0x004200": // Soul
            return;
        case "0x004201": // Master's
            return;
        case "0x004300": // Fill
            return;
        case "0x004301": // Lord's
            return;
        case "0x004400": // Storm
            return;
        case "0x004500": // Blizzard+
            return "#00e5ff !important";
        case "0x004501": // Piercing Blizzard+
            return "#00e5ff !important";
        case "0x004600": // Tempest
            return;
        case "0x004700": // Burning
            return;
        case "0x004800": // Havoc
            return;
        case "0x004900": // Pierce
            return;
        case "0x004A00": // Pierce
            return;
        case "0x004B00": // Gush
            return;
        case "0x004B01": // King's
            return;
        case "0x004C00": // Havoc
            return;
        case "0x004D00": // Pierce
            return;
        case "0x004E00": // Chaos
            return;
        case "0x004E01": // Chaos
            return;
        case "0x004F00": // Tempest
            return;
        case "0x005000": // WINDMILL
            return;
        case "0x005100": // Megid Lv1-12
            return;
        case "0x005200": // None
            return "white !important";
        case "0x005300": // Foie
            return;
        case "0x005400": // Gibarta
            return;
        case "0x005500": // Chaos
            return;
        case "0x005600": // None
            return "white !important";
        case "0x005601": // None
            return "white !important";
        case "0x005700": // King's
            return;
        case "0x005800": // Arrest
            return "#ffa500 !important";
        case "0x005900": // Havoc
            return;
        case "0x005A00": // JZ Lv5
            return;
        case "0x005B00": // Gizonde
            return;
        case "0x005C00": // Tempest
            return;
        case "0x005D00": // Piercing Wave
            return;
        case "0x005E00": // Gifoie Lv1-10
            return;
        case "0x005F00": // Havoc
            return;
        case "0x006000": // Foie
            return;
        case "0x006100": // Chaos
            return;
        case "0x006200": // SD Lv3
            return;
        case "0x006300": // Piercing Wave
            return;
        case "0x006400": // Geist
            return;
        case "0x006500": // None
            return;  "white !important" 
        case "0x006600": // Seize
            return;
        case "0x006700": // Charge
            return "#e9e910 !important";
        case "0x006800": // None
            return "white !important";
        case "0x006900": // Chaos
            return;
        case "0x006A00": // None
            return "white !important";
        case "0x006B00": // None
            return "white !important";
        case "0x006C00": // None
            return "white !important";
        case "0x006D00": // None
            return "white !important";
        case "0x006D01": // None
            return "white !important";
        case "0x006E00": // None
            return "white !important";
        case "0x006E01": // None
            return "white !important";
        case "0x006F00": // None
            return "white !important";
        case "0x008900": // Berserk
            return "#caff00 !important";
        case "0x008901": // Blizzard
            return "#72d2dd !important";
        case "0x008902": // Burning
            return;
        case "0x008903": // Gush
            return;
        case "0x008A00": // Fill
            return;
        case "0x008A01": // Fill
            return;
        case "0x008A02": // Dark
            return;
        case "0x008B00": // Hold
            return;
        case "0x008B01": // Blizzard
            return "#72d2dd !important";
        case "0x008B02": // Burning
            return;
        case "0x008B03": // Havoc
            return;
        case "0x008C00": // Mind
            return;
        case "0x008C01": // Soul
            return;
        case "0x008C02": // Soul
            return;
        case "0x008C03": // Geist
            return;
        case "0x008C04": // Arrest
            return "#ffa500 !important";
        case "0x008D00": // None
            return "white !important";
        case "0x008E00": // Havoc
            return;
        case "0x008E01": // Chaos
            return;
        case "0x008F00": // None
            return "white !important";
        case "0x008F01": // None
            return "white !important";
        case "0x008F02": // None
            return "white !important";
        case "0x008F03": // None
            return "white !important";
        case "0x008F04": // None
            return "white !important";
        case "0x008F05": // None
            return "white !important";
        case "0x008F06": // None
            return "white !important";
        case "0x008F07": // Spirit
            return;
        case "0x008F08": // None
            return "white !important";
        case "0x009000": // None
            return "white !important";
        case "0x009001": // None
            return "white !important";
        case "0x009002": // None
            return "white !important";
        case "0x009003": // None
            return "white !important";
        case "0x009004": // None
            return "white !important";
        case "0x009005": // None
            return "white !important";
        case "0x009006": // None
            return "white !important";
        case "0x009007": // None
            return "white !important";
        case "0x009008": // None
            return "white !important";
        case "0x009100": // Seize
            return;
        case "0x009200": // Spirit
            return;
        case "0x009300": // None
            return "white !important";
        case "0x009301": // None
            return "white !important";
        case "0x009302": // None
            return "white !important";
        case "0x009303": // None
            return "white !important";
        case "0x009304": // None
            return "white !important";
        case "0x009305": // None
            return "white !important";
        case "0x009306": // None
            return "white !important";
        case "0x009307": // None
            return "white !important";
        case "0x009308": // None
            return "white !important";
        case "0x009309": // None
            return "white !important";
        case "0x009400": // None
            return "white !important";
        case "0x009500": // Tempest
            return;
        case "0x009600": // Piercing Wave
            return;
        case "0x009700": // Berserk
            return "#caff00 !important";
        case "0x009800": // Tempest
            return;
        case "0x009900": // Chaos
            return;
        case "0x009A00": // Devil's
            return;
        case "0x009B00": // Spirit
            return;
        case "0x009C00": // Chaos
            return;
        case "0x009D00": // DF
            return;
        case "0x009E00": // DM
            return;
        case "0x009F00": // DB
            return;
        case "0x00A000": // Arrest
            return "#ffa500 !important";
        case "0x00A100": // Havoc
            return;
        case "0x00A200": // None
            return "white !important";
        case "0x00A201": // None
            return "white !important";
        case "0x00A202": // None
            return "white !important";
        case "0x00A300": // Burning
            return;
        case "0x00A400": // None
            return "white !important";
        case "0x00AA00": // Demon's
            return;
        case "0x00AB00": // None
            return "white !important";
        case "0x00AC00": // Berserk
            return "#caff00 !important";
        case "0x00AD00": // Tempest
            return;
        case "0x00AD01": // Blizzard
            return "#72d2dd !important";
        case "0x00AD02": // Geist
            return;
        case "0x00AD03": // Burning
            return;
        case "0x00AE00": // Chaos
            return;
        case "0x00AF00": // Chaos
            return;
        case "0x00B000": // DP || Auto-Aim
            return;
        case "0x00B100": // None
            return "white !important";
        case "0x00B200": // Trap Vision
            return;
        case "0x00B300": // Heart
            return;
        case "0x00B400": // Demon's
            return;
        case "0x00B500": // Blizzard
            return "#72d2dd !important";
        case "0x00B600": // Burning
            return;
        case "0x00B700": // Blizzard
            return "#72d2dd !important";
        case "0x00B800": // Hell
            return "#d700d7 !important";
        case "0x00B900": // Spirit
            return;
        case "0x00BA00": // Berserk
            return "#caff00 !important";
        case "0x00BB00": // Dark
            return;
        case "0x00BC00": // Gush
            return;
        case "0x00BD00": // None
            return "white !important";
        case "0x00BE00": // None
            return "white !important";
        case "0x00BF00": // Berserk
            return "#caff00 !important";
        case "0x00C000": // Chaos
            return;
        case "0x00C100": // Demons
            return "#b63cff !important";
        case "0x00C200": // Resta Lv.4
            return;
        case "0x00C300": // None
            return "white !important";
        case "0x00C400": // Grants
            return;
        case "0x00C500": // Anti Lv.3
            return;
        case "0x00C600": // Dim
            return;
        case "0x00C700": // Dim
            return;
        case "0x00C800": // Berserk
            return "#caff00 !important";
        case "0x00C900": // SD 6
            return;
        case "0x00CA00": // None
            return "white !important";
        case "0x00CB00": // Charge
            return "#e9e910 !important";
        case "0x00CC00": // None
            return "white !important";
        case "0x00CD00": // None
            return "white !important";
        case "0x00CE00": // None
            return "white !important";
        case "0x00CF00": // None
            return "white !important";
        case "0x00D000": // None
            return "white !important";
        case "0x00D100": // None
            return "white !important";
        case "0x00D200": // None
            return "white !important";
        case "0x00D300": // None
            return "white !important";
        case "0x00D400": // Spirit
            return;
        case "0x00D500": // Charge
            return "#e9e910 !important";
        case "0x00D600": // None
            return "white !important";
        case "0x00D700": // Lord's
            return;
        case "0x00D800": // King's
            return;
        case "0x00D900": // None
            return "white !important";
        case "0x00DA00": // None
            return "white !important";
        case "0x00DB00": // Dark
            return;
        case "0x00DC00": // Chaos
            return;
        case "0x00DD00": // None
            return "white !important";
        case "0x00DE00": // None
            return "white !important";
        case "0x00DE01": // None
            return "white !important";
        case "0x00DE02": // None
            return "white !important";
        case "0x00DE03": // None
            return "white !important";
        case "0x00DF00": // None
            return "white !important";
        case "0x00DF01": // None
            return "white !important";
        case "0x00DF02": // None
            return "white !important";
        case "0x00E000": // None
            return "white !important";
        case "0x00E001": // None
            return "white !important";
        case "0x00E002": // None
            return "white !important";
        case "0x00E100": // None
            return "white !important";
        case "0x00E101": // None
            return "white !important";
        case "0x00E102": // None
            return "white !important";
        case "0x00E200": // None
            return "white !important";
        case "0x00E300": // None
            return "white !important";
        case "0x00E301": // None
            return "white !important";
        case "0x00E400": // None
            return "white !important";
        case "0x00E401": // None
            return "white !important";
        case "0x00E500": // None
            return "white !important";
        case "0x00E501": // None
            return "white !important";
        case "0x00E502": // None
            return "white !important";
        case "0x00E600": // None
            return "white !important";
        case "0x00E700": // None
            return "white !important";
        case "0x00E800": // TypeGU/HANDGUN
            return;
        case "0x00E801": // TypeGU/MECHGUN
            return;
        case "0x00E900": // TypeRI/RIFLE
            return;
        case "0x00EA00": // TypeME/MECHGUN
            return;
        case "0x00EB00": // TypeSH/SHOT
            return;
        case "0x00EC00": // None
            return "white !important";
        /**
         * // Ephinea Original
         */
        case "0x00040C": // Hell
            return "#d700d7 !important";
        case "0x00040D": // Charge+
            return "pink !important";
        case "0x00040E": // Charge+
            return "pink !important";
        case "0x00040F": // Charge+
            return "pink !important";
        case "0x000410": // Hell
            return "#d700d7 !important";
        case "0x000411": // Hell
            return "#d700d7 !important";
        case "0x00050C": // Berserk
            return "#caff00 !important";
        case "0x00050D": // Berserk
            return "#caff00 !important";
        case "0x000808": // Berserk
            return "#caff00 !important";
        case "0x00080C": // Berserk
            return "#caff00 !important";
        case "0x001201": // Seize
            return;
        case "0x001B01": // Demon's
            return "#b63cff !important";
        case "0x001B02": // Demon's
            return "#b63cff !important";
        case "0x001B03": // Demon's
            return "#b63cff !important";
        case "0x001D01": // Rand Si Tech
            return;
        case "0x001D02": // Rand Si Tech
            return;
        case "0x001E01": // Divine Punishment
            return;
        case "0x001E02": // Divine Punishment
            return;
        case "0x001E03": // Divine Punishment
            return;
        case "0x002101": // Gush
            return;
        case "0x002102": // Gush
            return;
        case "0x002401": // Zonde
            return;
        case "0x002D01": // Fill
            return;
        case "0x002D02": // Fill
            return;
        case "0x002D03": // Fill
            return;
        case "0x002D04": // Fill
            return;
        case "0x003201": // PB Wave
            return;
        case "0x003202": // PB Wave
            return;
        case "0x003203": // PB Wave
            return;
        case "0x003204": // PB Wave
            return;
        case "0x003401": // Seize
            return;
        case "0x003402": // Seize
            return;
        case "0x004502": // Blizzard+
            return "#00e5ff !important";
        case "0x004503": // Blizzard+
            return "#00e5ff !important";
        case "0x004504": // Piercing Blizzard+
            return "#00e5ff !important";
        case "0x004505": // Blizzard+
            return "#00e5ff !important";
        case "0x004506": // Piercing Blizzard+
            return "#00e5ff !important";
        case "0x004507": // Piercing Blizzard+
            return "#00e5ff !important";
        case "0x004B02": // Gush
            return;
        case "0x004B03": // King's
            return;
        case "0x004B04": // Gush
            return;
        case "0x004B05": // King's
            return;
        case "0x004F01": // Tempest
            return;
        case "0x005801": // Arrest
            return "#ffa500 !important";
        case "0x005802": // Arrest
            return "#ffa500 !important";
        case "0x005A01": // JZ 5
            return;
        case "0x008F09": // Spirit
            return;
        case "0x008F0A": // Spirit
            return;
        case "0x009701": // Berserk
            return "#caff00 !important";
        case "0x009702": // Berserk
            return "#caff00 !important";
        case "0x009703": // Berserk
            return "#caff00 !important";
        case "0x009C01": // Chaos
            return;
        case "0x009C02": // Chaos
            return;
        case "0x009D01": // DF
            return;
        case "0x009D02": // DF
            return;
        case "0x009D03": // DF
            return;
        case "0x009D04": // DF
            return;
        case "0x009D05": // DF
            return;
        case "0x009D06": // DF
            return;
        case "0x009D07": // DF
            return;
        case "0x009D08": // DF
            return;
        case "0x009D09": // DF
            return;
        case "0x009D0A": // DF
            return;
        case "0x009D0B": // DF
            return;
        case "0x009D0C": // DF
            return;
        case "0x009D0D": // DF
            return;
        case "0x009D0E": // DF
            return;
        case "0x009D0F": // DF
            return;
        case "0x00AA01": // Demon's
            return "#b63cff !important";
        case "0x00AA02": // Demon's
            return "#b63cff !important";
        case "0x00AC01": // Berserk
            return "#caff00 !important";
        case "0x00AC02": // Berserk
            return "#caff00 !important";
        case "0x00AC03": // Berserk
            return "#caff00 !important";
        case "0x00AC04": // Berserk
            return "#caff00 !important";
        case "0x00AC05": // Berserk
            return "#caff00 !important";
        case "0x00AC06": // Berserk
            return "#caff00 !important";
        case "0x00AC07": // Berserk
            return "#caff00 !important";
        case "0x00AC08": // Berserk
            return "#caff00 !important";
        case "0x00AC09": // Berserk
            return "#caff00 !important";
        case "0x00AC0A": // Berserk
            return "#caff00 !important";
        case "0x00AC0B": // Berserk
            return "#caff00 !important";
        case "0x00AC0C": // Berserk
            return "#caff00 !important";
        case "0x00AC0D": // Berserk
            return "#caff00 !important";
        case "0x00AC0E": // Berserk
            return "#caff00 !important";
        case "0x00AC0F": // Berserk
            return "#caff00 !important";
        case "0x00AC10": // Berserk
            return "#caff00 !important";
        case "0x00B001": // DP || Auto-Aim
            return;
        case "0x00B002": // DP || Auto-Aim
            return;
        case "0x00BA01": // Berserk
            return "#caff00 !important";
        case "0x00BA02": // Berserk
            return "#caff00 !important";
        case "0x00BA03": // Berserk
            return "#caff00 !important";
        case "0x00BF01": // Berserk
            return "#caff00 !important";
        case "0x00BF02": // Berserk
            return "#caff00 !important";
        case "0x00BF03": // Berserk
            return "#caff00 !important";
        case "0x00BF04": // Berserk
            return "#caff00 !important";
        case "0x00BF05": // Berserk
            return "#caff00 !important";
        case "0x00BF06": // Berserk
            return "#caff00 !important";
        case "0x00BF07": // Berserk
            return "#caff00 !important";
        case "0x00BF08": // Berserk
            return "#caff00 !important";
        case "0x00BF09": // Berserk
            return "#caff00 !important";
        case "0x00BF0A": // Berserk
            return "#caff00 !important";
        case "0x00BF0B": // Berserk
            return "#caff00 !important";
        case "0x00BF0C": // Berserk
            return "#caff00 !important";
        case "0x00BF0D": // Berserk
            return "#caff00 !important";
        case "0x00BF0E": // Berserk
            return "#caff00 !important";
        case "0x00C501": // Anti Lv.3
            return;
        case "0x00C502": // Anti Lv.3
            return;
        default:
            return "pink !important";
    }
}

function sRankWeaponColor(code) {
    switch(code) {
        case "0x00": // None
            return "#fff !important";
        case "0x01": // Jellen
            return "pink !important";
        case "0x02": // Zalure
            return "pink !important";;
        case "0x03": // HP Regeneration
            return "pink !important";;
        case "0x04": // TP Regeneration
            return "pink !important";;
        case "0x05": // Burning
            return "pink !important";;
        case "0x06": // Tempest
            return "pink !important";;
        case "0x07": // Blizzard
            return "#72d2dd !important";;
        case "0x08": // Arrest
            return "#ffa500 !important";;
        case "0x09": // Chaos
            return "pink !important";
        case "0x0A": // Hell
            return "#d700d7 !important";
        case "0x0B": // Spirit
            return "pink !important";
        case "0x0C": // Berserk
            return "#caff00 !important";
        case "0x0D": // Demon's
            return "#b63cff !important";
        case "0x0E": // Gush
            return "pink !important";
        case "0x0F": // Geist
            return "pink !important";
        case "0x10": // King's
            return "pink !important";
    }
}

export function displayItem(item, prop, theme) {
    let str = "";

    for (let key in item) {
        if (item[key][prop]) {
            str = item[key][prop];
            break;
        }
    }

    switch(prop) {
        case "tekked":
            if (str === false) {
                str = "[U] ";
            }
            return str;
        case "grind":
            if (str > 0) {
                str = " +" + str;
            }
            return str;
        case "special":
            return str;
        case "native":
        case "a_beast":
        case "machine":
        case "dark":
        case "hit":
        case "dfp":
        case "evp":
        case "max_dfp":
        case "max_evp":
        case "def":
        case "pow":
        case "dex":
        case "mind":
            if (!str) {
                return "0";
            }
            return str;
        case "slot":
            if (!str) {
                return "0s";
            }
            return str + "s";
        case "pbs":
            str = str.split(",")
            return (
            <>
                <StyledText theme={theme} fontSize={16} color="#ff75fa !important">{str[0]}</StyledText>
                <StyledText theme={theme} fontSize={16} fontWeight={600}> | </StyledText>
                <StyledText theme={theme} fontSize={16} color="#ff75fa !important">{str[1]}</StyledText>
                <StyledText theme={theme} fontSize={16} fontWeight={600}> | </StyledText>
                <StyledText theme={theme} fontSize={16} color="#ff75fa !important">{str[2]}</StyledText>
            </>
            )
        case "number":
            return " x" + str;
        case "amount":
            if (!str) {
                str = "0";
            }
            return ": " + str;
        case "level":
            return " LV" + str + " disk";
        default:
            return str;
    }
}

function displaySrankWeapon(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#eb0000 !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color={sRankWeaponColor(item.SRankWeapon.special_code)}> {displayItem(item, "special")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "native")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "a_beast")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "machine")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "dark")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ff7875 !important">{displayItem(item, "hit")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>] </StyledText>
    </>
    );
}

function displayWeapon(item, theme) {
    const nameColor = (item) => {
        return item.Weapon.rare ? "yellow !important" : "#c33bc3 !important";
    }

    const specialColor = (item) => {
        return item.Weapon.rare ? rareWeaponColor(item.Weapon.special_code) : weaponColor(item.Weapon.special_code);
    }

    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color={nameColor(item)}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color={specialColor(item)}>{displayItem(item, "special")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "native")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "a_beast")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}  fontWeight={600} color="#25e17b !important">{displayItem(item, "machine")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "dark")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ff7875 !important">{displayItem(item, "hit")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>] </StyledText>
    </>
    );
}

function displayFrame(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="yellow !important" >{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>]</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ff7875 !important">{displayItem(item, "slot")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>]</StyledText>
    </>
    );
}

function displayBarrier(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="yellow !important" >{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}> | </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>]</StyledText>
    </>
    );
}

function displayUnit(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="yellow !important">{displayItem(item, "name")}</StyledText>
    );
}

function displayMag(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="yellow !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "def")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "pow")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "dex")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "mind")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>[ </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "pbs", theme)}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> ] </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>[ </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ff7875 !important">{displayItem(item, "color")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> ]</StyledText>
    </>
    );
}

function displayTech(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "level")}</StyledText>
    </>
    );
}

function displayTool(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "number")}</StyledText>
    </>
    );
}

function displayOther(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "number")}</StyledText>
    </>
    );
}

function displayMeseta(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ffe622 !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#ffe622 !important">{displayItem(item, "amount")}</StyledText>
    </>
    );
}

export function renderItemRow(item, theme) {
    const itemType = Object.keys(item)[0];
    switch (itemType) {
        case "SRankWeapon":
            return displaySrankWeapon(item, theme);
        case "Weapon":
            return displayWeapon(item, theme);
        case "Frame":
            return displayFrame(item, theme); 
        case "Barrier":
            return displayBarrier(item, theme);
        case "Unit":
            return displayUnit(item, theme);
        case "Mag":
            return displayMag(item, theme);
        case "Tech":
            return displayTech(item, theme);
        case "Tool":
            return displayTool(item, theme);
        case "Other":
            return displayOther(item, theme);
        case "Meseta":
            return displayMeseta(item, theme);
        default:
            return null;
    }
}