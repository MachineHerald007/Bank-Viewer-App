import React from "react";
import { StyledText } from "./components/Page/styles";
import { useTheme } from './components/Theme/Theme';

function weaponColor(code) {
    switch(code) {
        case "0x00": return "pink !important"; // None
        case "0x01": return "pink !important"; // Draw
        case "0x02": return "pink !important"; // Drain
        case "0x03": return "pink !important"; // Fill
        case "0x04": return "pink !important"; // Gush
        case "0x05": return "pink !important"; // Heart
        case "0x06": return "pink !important"; // Mind
        case "0x07": return "pink !important"; // Soul
        case "0x08": return "pink !important"; // Geist
        case "0x09": return "pink !important"; // Master's
        case "0x0A": return "pink !important"; // Lord's
        case "0x0B": return "pink !important"; // King's
        case "0x0C": return "#e9e910 !important"; // Charge
        case "0x0D": return "pink !important"; // Spirit
        case "0x0E": return "#caff00 !important"; // Berserk
        case "0x0F": return "pink !important"; // Ice
        case "0x10": return "pink !important"; // Frost
        case "0x11": return "pink !important"; // Freeze
        case "0x12": return "#72d2dd !important"; // Blizzard
        case "0x13": return "pink !important"; // Bind
        case "0x14": return "pink !important"; // Hold
        case "0x15": return "pink !important"; // Seize
        case "0x16": return "#ffa500 !important"; // Arrest
        case "0x17": return "pink !important"; // Heat
        case "0x18": return "pink !important"; // Fire
        case "0x19": return "pink !important"; // Flame
        case "0x1A": return "pink !important"; // Burning
        case "0x1B": return "pink !important"; // Shock
        case "0x1C": return "pink !important"; // Thunder
        case "0x1D": return "pink !important"; // Storm
        case "0x1E": return "pink !important"; // Tempest
        case "0x1F": return "pink !important"; // Dim
        case "0x20": return "pink !important"; // Shadow
        case "0x21": return "pink !important"; // Dark
        case "0x22": return "#d700d7 !important"; // Hell
        case "0x23": return "pink !important"; // Panic
        case "0x24": return "pink !important"; // Riot
        case "0x25": return "pink !important"; // Havoc
        case "0x26": return "pink !important"; // Chaos
        case "0x27": return "pink !important"; // Devil's
        case "0x28": return "#b63cff !important"; // Demon's
        case "0x81": return "pink !important"; // Draw
        case "0x82": return "pink !important"; // Drain
        case "0x83": return "pink !important"; // Fill
        case "0x84": return "pink !important"; // Gush
        case "0x85": return "pink !important"; // Heart
        case "0x86": return "pink !important"; // Mind
        case "0x87": return "pink !important"; // Soul
        case "0x88": return "pink !important"; // Geist
        case "0x89": return "pink !important"; // Master's
        case "0x8A": return "pink !important"; // Lord's
        case "0x8B": return "pink !important"; // King's
        case "0x8C": return "#e9e910 !important"; // Charge
        case "0x8D": return "pink !important"; // Spirit
        case "0x8E": return "#caff00 !important"; // Berserk
        case "0x8F": return "pink !important"; // Ice
        case "0x90": return "pink !important"; // Frost
        case "0x91": return "pink !important"; // Freeze
        case "0x92": return "#72d2dd !important"; // Blizzard
        case "0x93": return "pink !important"; // Bind
        case "0x94": return "pink !important"; // Hold
        case "0x95": return "pink !important"; // Seize
        case "0x96": return "#ffa500 !important"; // Arrest
        case "0x97": return "pink !important"; // Heat
        case "0x98": return "pink !important"; // Fire
        case "0x99": return "pink !important"; // Flame
        case "0x9A": return "pink !important"; // Burning
        case "0x9B": return "pink !important"; // Shock
        case "0x9C": return "pink !important"; // Thunder
        case "0x9D": return "pink !important"; // Storm
        case "0x9E": return "pink !important"; // Tempest
        case "0x9F": return "pink !important"; // Dim
        case "0xA0": return "pink !important"; // Shadow
        case "0xA1": return "pink !important"; // Dark
        case "0xA2": return "#d700d7 !important"; // Hell
        case "0xA3": return "pink !important"; // Panic
        case "0xA4": return "pink !important"; // Riot
        case "0xA5": return "pink !important"; // Havoc
        case "0xA6": return "pink !important"; // Chaos
        case "0xA7": return "pink !important"; // Devil's
        case "0xA8": return "#b63cff !important"; // Demon's
        default: return "pink !important";
    }
}

function rareWeaponColor(code) {
    switch(code) {
        case "0x000105": return "white !important"; // None
        case "0x000106": return; // Freeze
        case "0x000107": return; // Lord's
        case "0x000108": return; // Spirit
        case "0x000205": return "white !important"; // None
        case "0x000206": return; // Fill
        case "0x000207": return; // Burning
        case "0x000305": return; // Seize
        case "0x000306": return; // Devil's
        case "0x000307": return; // Storm
        case "0x000308": return "#72d2dd !important"; // Blizzard
        case "0x000309": return; // Zalure(Lv.5)
        case "0x000405": return; // Soul
        case "0x000406": return "pink !important"; // Charge+
        case "0x000407": return; // Freeze
        case "0x000408": return "#d700d7 !important"; // Hell
        case "0x000505": return; // Dark
        case "0x000506": return; // Havoc
        case "0x000507": return "#caff00 !important"; // Berserk
        case "0x000508": return; // Izmaela
        case "0x000605": return; // Seize
        case "0x000606": return; // Flame
        case "0x000607": return; // Storm
        case "0x000608": return; // Seize
        case "0x000705": return; // Seize
        case "0x000706": return; // Havoc
        case "0x000707": return; // Devil's
        case "0x000708": return "white !important"; // None
        case "0x000709": return "white !important"; // None
        case "0x00070A": return "white !important"; // None
        case "0x00070B": return "white !important"; // None
        case "0x00070C": return "white !important"; // None
        case "0x00070D": return; // Dark
        case "0x000805": return "#caff00 !important"; // Berserk
        case "0x000806": return; // Freeze
        case "0x000807": return; // Seize
        case "0x000905": return; // Fill
        case "0x000906": return; // Soul
        case "0x000907": return; // Lord's
        case "0x000A04": return; // Flame
        case "0x000A05": return; // Freeze
        case "0x000A06": return; // Storm
        case "0x000A07": return; // Heart
        case "0x000B04": return; // Devil's
        case "0x000B05": return; // Spirit
        case "0x000B06": return; // Fill
        case "0x000B07": return "white !important"; // None
        case "0x000C04": return; // Flame
        case "0x000C05": return; // Freeze
        case "0x000C06": return; // Storm
        case "0x000C07": return; // Gush
        case "0x000D00": return; // Drain
        case "0x000D01": return; // Dark
        case "0x000D02": return; // Gush
        case "0x000D03": return; // Burning
        case "0x000E00": return; // Mind
        case "0x000E01": return; // Havoc
        case "0x000E02": return; // Devil's
        case "0x000F00": return; // Hold
        case "0x000F01": return; // Freeze
        case "0x000F02": return; // King's
        case "0x000F03": return; // King's
        case "0x000F04": return "white !important"; // None
        case "0x001000": return; // Piercing Wave
        case "0x001001": return; // Dim
        case "0x001002": return; // Dim
        case "0x001003": return; // Dim
        case "0x001004": return; // Dim
        case "0x001005": return; // Dim
        case "0x001006": return; // Dim
        case "0x001007": return; // Piercing Wave
        case "0x001100": return "#caff00 !important"; // Berserk
        case "0x001101": return; // Megid
        case "0x001200": return; // Seize
        case "0x001300": return "#ffa500 !important"; // Arrest
        case "0x001400": return; // Devil's
        case "0x001401": return; // Chaos
        case "0x001402": return; // Burning
        case "0x001500": return; // Havoc
        case "0x001501": return; // Havoc
        case "0x001600": return; // Mind
        case "0x001700": return; // Geist
        case "0x001800": return "#d700d7 !important"; // Hell
        case "0x001900": return "#ffa500 !important"; // Arrest
        case "0x001A00": return; // Storm
        case "0x001B00": return; // Demon's
        case "0x001C00": return; // Flame
        case "0x001D00": return; // Rand Si Tech
        case "0x001E00": return; // Divine Punishment
        case "0x001F00": return; // Piercing Wave
        case "0x002000": return; // Fill
        case "0x002001": return "#caff00 !important"; // Berserk
        case "0x002100": return; // Gush
        case "0x002200": return; // Foie
        case "0x002201": return; // Gifoie
        case "0x002300": return; // Soul
        case "0x002400": return; // Zonde
        case "0x002500": return; // Barta
        case "0x002600": return "white !important"; // None
        case "0x002700": return; // King's
        case "0x002800": return; // Seize
        case "0x002900": return "#d700d7 !important"; // Hell
        case "0x002A00": return; // Burning
        case "0x002B00": return "#caff00 !important"; // Berserk
        case "0x002C00": return; // Foie
        case "0x002D00": return; // Fill
        case "0x002E00": return "#72d2dd !important"; // Blizzard
        case "0x002F00": return; // Devil's
        case "0x002F01": return; // Devil's
        case "0x003000": return; // Piercing Wave
        case "0x003001": return; // Piercing Wave
        case "0x003100": return; // Havoc
        case "0x003200": return; // PB Wave
        case "0x003300": return "#d700d7 !important"; // Hell
        case "0x003400": return; // Seize
        case "0x003500": return; // Chaos
        case "0x003600": return; // Dark
        case "0x003700": return "#e9e910 !important"; // Charge
        case "0x003800": return; // Piercing Wave
        case "0x003900": return; // Soul
        case "0x003A00": return; // Spirit
        case "0x003B00": return "#caff00 !important"; // Berserk
        case "0x003C00": return; // Devil's
        case "0x003D00": return; // PB Wave
        case "0x003E00": return; // Freeze
        case "0x003F00": return; // Devil's
        case "0x004000": return; // Lord's
        case "0x004100": return; // Flame
        case "0x004200": return; // Soul
        case "0x004201": return; // Master's
        case "0x004300": return; // Fill
        case "0x004301": return; // Lord's
        case "0x004400": return; // Storm
        case "0x004500": return "#00e5ff !important"; // Blizzard+
        case "0x004501": return "#00e5ff !important"; // Piercing Blizzard+
        case "0x004600": return; // Tempest
        case "0x004700": return; // Burning
        case "0x004800": return; // Havoc
        case "0x004900": return; // Pierce
        case "0x004A00": return; // Pierce
        case "0x004B00": return; // Gush
        case "0x004B01": return; // King's
        case "0x004C00": return; // Havoc
        case "0x004D00": return; // Pierce
        case "0x004E00": return; // Chaos
        case "0x004E01": return; // Chaos
        case "0x004F00": return; // Tempest
        case "0x005000": return; // WINDMILL
        case "0x005100": return; // Megid Lv1-12
        case "0x005200": return "white !important"; // None
        case "0x005300": return; // Foie
        case "0x005400": return; // Gibarta
        case "0x005500": return; // Chaos
        case "0x005600": return "white !important"; // None
        case "0x005601": return "white !important"; // None
        case "0x005700": return; // King's
        case "0x005800": return "#ffa500 !important"; // Arrest
        case "0x005900": return; // Havoc
        case "0x005A00": return; // JZ Lv5
        case "0x005B00": return; // Gizonde
        case "0x005C00": return; // Tempest
        case "0x005D00": return; // Piercing Wave
        case "0x005E00": return; // Gifoie Lv1-10
        case "0x005F00": return; // Havoc
        case "0x006000": return; // Foie
        case "0x006100": return; // Chaos
        case "0x006200": return; // SD Lv3
        case "0x006300": return; // Piercing Wave
        case "0x006400": return; // Geist
        case "0x006500": return "white !important"; // None
        case "0x006600": return; // Seize
        case "0x006700": return "#e9e910 !important"; // Charge
        case "0x006800": return "white !important"; // None
        case "0x006900": return; // Chaos
        case "0x006A00": return "white !important"; // None
        case "0x006B00": return "white !important"; // None
        case "0x006C00": return "white !important"; // None
        case "0x006D00": return "white !important"; // None
        case "0x006D01": return "white !important"; // None
        case "0x006E00": return "white !important"; // None
        case "0x006E01": return "white !important"; // None
        case "0x006F00": return "white !important"; // None
        case "0x008900": return "#caff00 !important"; // Berserk
        case "0x008901": return "#72d2dd !important"; // Blizzard
        case "0x008902": return; // Burning
        case "0x008903": return; // Gush
        case "0x008A00": return; // Fill
        case "0x008A01": return; // Fill
        case "0x008A02": return; // Dark
        case "0x008B00": return; // Hold
        case "0x008B01": return "#72d2dd !important"; // Blizzard
        case "0x008B02": return; // Burning
        case "0x008B03": return; // Havoc
        case "0x008C00": return; // Mind
        case "0x008C01": return; // Soul
        case "0x008C02": return; // Soul
        case "0x008C03": return; // Geist
        case "0x008C04": return "#ffa500 !important"; // Arrest
        case "0x008D00": return "white !important"; // None
        case "0x008E00": return; // Havoc
        case "0x008E01": return; // Chaos
        case "0x008F00": return "white !important"; // None
        case "0x008F01": return "white !important"; // None
        case "0x008F02": return "white !important"; // None
        case "0x008F03": return "white !important"; // None
        case "0x008F04": return "white !important"; // None
        case "0x008F05": return "white !important"; // None
        case "0x008F06": return "white !important"; // None
        case "0x008F07": return; // Spirit
        case "0x008F08": return "white !important"; // None
        case "0x009000": return "white !important"; // None
        case "0x009001": return "white !important"; // None
        case "0x009002": return "white !important"; // None
        case "0x009003": return "white !important"; // None
        case "0x009004": return "white !important"; // None
        case "0x009005": return "white !important"; // None
        case "0x009006": return "white !important"; // None
        case "0x009007": return "white !important"; // None
        case "0x009008": return "white !important"; // None
        case "0x009100": return; // Seize
        case "0x009200": return; // Spirit
        case "0x009300": return "white !important"; // None
        case "0x009301": return "white !important"; // None
        case "0x009302": return "white !important"; // None
        case "0x009303": return "white !important"; // None
        case "0x009304": return "white !important"; // None
        case "0x009305": return "white !important"; // None
        case "0x009306": return "white !important"; // None
        case "0x009307": return "white !important"; // None
        case "0x009308": return "white !important"; // None
        case "0x009309": return "white !important"; // None
        case "0x009400": return "white !important"; // None
        case "0x009500": return; // Tempest
        case "0x009600": return; // Piercing Wave
        case "0x009700": return "#caff00 !important"; // Berserk
        case "0x009800": return; // Tempest
        case "0x009900": return; // Chaos
        case "0x009A00": return; // Devil's
        case "0x009B00": return; // Spirit
        case "0x009C00": return; // Chaos
        case "0x009D00": return; // DF
        case "0x009E00": return; // DM
        case "0x009F00": return; // DB
        case "0x00A000": return "#ffa500 !important"; // Arrest
        case "0x00A100": return; // Havoc
        case "0x00A200": return "white !important"; // None
        case "0x00A201": return "white !important"; // None
        case "0x00A202": return "white !important"; // None
        case "0x00A300": return; // Burning
        case "0x00A400": return "white !important"; // None
        case "0x00AA00": return; // Demon's
        case "0x00AB00": return "white !important"; // None
        case "0x00AC00": return "#caff00 !important"; // Berserk
        case "0x00AD00": return; // Tempest
        case "0x00AD01": return "#72d2dd !important"; // Blizzard
        case "0x00AD02": return; // Geist
        case "0x00AD03": return; // Burning
        case "0x00AE00": return; // Chaos
        case "0x00AF00": return; // Chaos
        case "0x00B000": return; // DP || Auto-Aim
        case "0x00B100": return "white !important"; // None
        case "0x00B200": return; // Trap Vision
        case "0x00B300": return; // Heart
        case "0x00B400": return; // Demon's
        case "0x00B500": return "#72d2dd !important"; // Blizzard
        case "0x00B600": return; // Burning
        case "0x00B700": return "#72d2dd !important"; // Blizzard
        case "0x00B800": return "#d700d7 !important"; // Hell
        case "0x00B900": return; // Spirit
        case "0x00BA00": return "#caff00 !important"; // Berserk
        case "0x00BB00": return; // Dark
        case "0x00BC00": return; // Gush
        case "0x00BD00": return "white !important"; // None
        case "0x00BE00": return "white !important"; // None
        case "0x00BF00": return "#caff00 !important"; // Berserk
        case "0x00C000": return; // Chaos
        case "0x00C100": return "#b63cff !important"; // Demons
        case "0x00C200": return; // Resta Lv.4
        case "0x00C300": return "white !important"; // None
        case "0x00C400": return; // Grants
        case "0x00C500": return; // Anti Lv.3
        case "0x00C600": return; // Dim
        case "0x00C700": return; // Dim
        case "0x00C800": return "#caff00 !important"; // Berserk
        case "0x00C900": return; // SD 6
        case "0x00CA00": return "white !important"; // None
        case "0x00CB00": return "#e9e910 !important"; // Charge
        case "0x00CC00": return "white !important"; // None
        case "0x00CD00": return "white !important"; // None
        case "0x00CE00": return "white !important"; // None
        case "0x00CF00": return "white !important"; // None
        case "0x00D000": return "white !important"; // None
        case "0x00D100": return "white !important"; // None
        case "0x00D200": return "white !important"; // None
        case "0x00D300": return "white !important"; // None
        case "0x00D400": return; // Spirit
        case "0x00D500": return "#e9e910 !important"; // Charge
        case "0x00D600": return "white !important"; // None
        case "0x00D700": return; // Lord's
        case "0x00D800": return; // King's
        case "0x00D900": return "white !important"; // None
        case "0x00DA00": return "white !important"; // None
        case "0x00DB00": return; // Dark
        case "0x00DC00": return; // Chaos
        case "0x00DD00": return "white !important"; // None
        case "0x00DE00": return "white !important"; // None
        case "0x00DE01": return "white !important"; // None
        case "0x00DE02": return "white !important"; // None
        case "0x00DE03": return "white !important"; // None
        case "0x00DF00": return "white !important"; // None
        case "0x00DF01": return "white !important"; // None
        case "0x00DF02": return "white !important"; // None
        case "0x00E000": return "white !important"; // None
        case "0x00E001": return "white !important"; // None
        case "0x00E002": return "white !important"; // None
        case "0x00E100": return "white !important"; // None
        case "0x00E101": return "white !important"; // None
        case "0x00E102": return "white !important"; // None
        case "0x00E200": return "white !important"; // None
        case "0x00E300": return "white !important"; // None
        case "0x00E301": return "white !important"; // None
        case "0x00E400": return "white !important"; // None
        case "0x00E401": return "white !important"; // None
        case "0x00E500": return "white !important"; // None
        case "0x00E501": return "white !important"; // None
        case "0x00E502": return "white !important"; // None
        case "0x00E600": return "white !important"; // None
        case "0x00E700": return "white !important"; // None
        case "0x00E800": return; // TypeGU/HANDGUN
        case "0x00E801": return; // TypeGU/MECHGUN
        case "0x00E900": return; // TypeRI/RIFLE
        case "0x00EA00": return; // TypeME/MECHGUN
        case "0x00EB00": return; // TypeSH/SHOT
        case "0x00EC00": return "white !important"; // None

        /**
         * // Ephinea Original
         */

        case "0x00040C": return "#d700d7 !important"; // Hell
        case "0x00040D": return "pink !important"; // Charge+
        case "0x00040E": return "pink !important"; // Charge+
        case "0x00040F": return "pink !important"; // Charge+
        case "0x000410": return "#d700d7 !important"; // Hell
        case "0x000411": return "#d700d7 !important"; // Hell
        case "0x00050C": return "#caff00 !important"; // Berserk
        case "0x00050D": return "#caff00 !important"; // Berserk
        case "0x000808": return "#caff00 !important"; // Berserk
        case "0x00080C": return "#caff00 !important"; // Berserk
        case "0x001201": return; // Seize
        case "0x001B01": return "#b63cff !important"; // Demon's
        case "0x001B02": return "#b63cff !important"; // Demon's
        case "0x001B03": return "#b63cff !important"; // Demon's
        case "0x001D01": return; // Rand Si Tech
        case "0x001D02": return; // Rand Si Tech
        case "0x001E01": return; // Divine Punishment
        case "0x001E02": return; // Divine Punishment
        case "0x001E03": return; // Divine Punishment
        case "0x002101": return; // Gush
        case "0x002102": return; // Gush
        case "0x002401": return; // Zonde
        case "0x002D01": return; // Fill
        case "0x002D02": return; // Fill
        case "0x002D03": return; // Fill
        case "0x002D04": return; // Fill
        case "0x003201": return; // PB Wave
        case "0x003202": return; // PB Wave
        case "0x003203": return; // PB Wave
        case "0x003204": return; // PB Wave
        case "0x003401": return; // Seize
        case "0x003402": return; // Seize
        case "0x004502": return "#00e5ff !important"; // Blizzard+
        case "0x004503": return "#00e5ff !important"; // Blizzard+
        case "0x004504": return "#00e5ff !important"; // Piercing Blizzard+
        case "0x004505": return "#00e5ff !important"; // Blizzard+
        case "0x004506": return "#00e5ff !important"; // Piercing Blizzard+
        case "0x004507": return "#00e5ff !important"; // Piercing Blizzard+
        case "0x004B02": return; // Gush
        case "0x004B03": return; // King's
        case "0x004B04": return; // Gush
        case "0x004B05": return; // King's
        case "0x004F01": return; // Tempest
        case "0x005801": return "#ffa500 !important"; // Arrest
        case "0x005802": return "#ffa500 !important"; // Arrest
        case "0x005A01": return; // JZ 5
        case "0x008F09": return; // Spirit
        case "0x008F0A": return; // Spirit
        case "0x009701": return "#caff00 !important"; // Berserk
        case "0x009702": return "#caff00 !important"; // Berserk
        case "0x009703": return "#caff00 !important"; // Berserk
        case "0x009C01": return; // Chaos
        case "0x009C02": return; // Chaos
        case "0x009D01": return; // DF
        case "0x009D02": return; // DF
        case "0x009D03": return; // DF
        case "0x009D04": return; // DF
        case "0x009D05": return; // DF
        case "0x009D06": return; // DF
        case "0x009D07": return; // DF
        case "0x009D08": return; // DF
        case "0x009D09": return; // DF
        case "0x009D0A": return; // DF
        case "0x009D0B": return; // DF
        case "0x009D0C": return; // DF
        case "0x009D0D": return; // DF
        case "0x009D0E": return; // DF
        case "0x009D0F": return; // DF
        case "0x00AA01": return "#b63cff !important"; // Demon's
        case "0x00AA02": return "#b63cff !important"; // Demon's
        case "0x00AC01": return "#caff00 !important"; // Berserk
        case "0x00AC02": return "#caff00 !important"; // Berserk
        case "0x00AC03": return "#caff00 !important"; // Berserk
        case "0x00AC04": return "#caff00 !important"; // Berserk
        case "0x00AC05": return "#caff00 !important"; // Berserk
        case "0x00AC06": return "#caff00 !important"; // Berserk
        case "0x00AC07": return "#caff00 !important"; // Berserk
        case "0x00AC08": return "#caff00 !important"; // Berserk
        case "0x00AC09": return "#caff00 !important"; // Berserk
        case "0x00AC0A": return "#caff00 !important"; // Berserk
        case "0x00AC0B": return "#caff00 !important"; // Berserk
        case "0x00AC0C": return "#caff00 !important"; // Berserk
        case "0x00AC0D": return "#caff00 !important"; // Berserk
        case "0x00AC0E": return "#caff00 !important"; // Berserk
        case "0x00AC0F": return "#caff00 !important"; // Berserk
        case "0x00AC10": return "#caff00 !important"; // Berserk
        case "0x00B001": return; // DP || Auto-Aim
        case "0x00B002": return; // DP || Auto-Aim
        case "0x00BA01": return "#caff00 !important"; // Berserk
        case "0x00BA02": return "#caff00 !important"; // Berserk
        case "0x00BA03": return "#caff00 !important"; // Berserk
        case "0x00BF01": return "#caff00 !important"; // Berserk
        case "0x00BF02": return "#caff00 !important"; // Berserk
        case "0x00BF03": return "#caff00 !important"; // Berserk
        case "0x00BF04": return "#caff00 !important"; // Berserk
        case "0x00BF05": return "#caff00 !important"; // Berserk
        case "0x00BF06": return "#caff00 !important"; // Berserk
        case "0x00BF07": return "#caff00 !important"; // Berserk
        case "0x00BF08": return "#caff00 !important"; // Berserk
        case "0x00BF09": return "#caff00 !important"; // Berserk
        case "0x00BF0A": return "#caff00 !important"; // Berserk
        case "0x00BF0B": return "#caff00 !important"; // Berserk
        case "0x00BF0C": return "#caff00 !important"; // Berserk
        case "0x00BF0D": return "#caff00 !important"; // Berserk
        case "0x00BF0E": return "#caff00 !important"; // Berserk
        case "0x00C501": return; // Anti Lv.3
        case "0x00C502": return; // Anti Lv.3
        default: return "pink !important";
    }
}

function sRankWeaponColor(code) {
    switch(code) {
        case "0x00": return "#fff !important"; // None
        case "0x01": return "pink !important"; // Jellen
        case "0x02": return "pink !important"; // Zalure
        case "0x03": return "pink !important"; // HP Regeneration
        case "0x04": return "pink !important"; // TP Regeneration
        case "0x05": return "pink !important"; // Burning
        case "0x06": return "pink !important"; // Tempest
        case "0x07": return "#72d2dd !important"; // Blizzard
        case "0x08": return "#ffa500 !important"; // Arrest
        case "0x09": return "pink !important"; // Chaos
        case "0x0A": return "#d700d7 !important"; // Hell
        case "0x0B": return "pink !important"; // Spirit
        case "0x0C": return "#caff00 !important"; // Berserk
        case "0x0D": return "#b63cff !important"; // Demon's
        case "0x0E": return "pink !important"; // Gush
        case "0x0F": return "pink !important"; // Geist
        case "0x10": return "pink !important"; // King's
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
                <StyledText theme={theme} fontWeight={600} color="#ff75fa !important">{str[0]}</StyledText>
                <StyledText theme={theme} fontWeight={600}> | </StyledText>
                <StyledText theme={theme} fontWeight={600} color="#ff75fa !important">{str[1]}</StyledText>
                <StyledText theme={theme} fontWeight={600}> | </StyledText>
                <StyledText theme={theme} fontWeight={600} color="#ff75fa !important">{str[2]}</StyledText>
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
        <StyledText theme={theme} fontWeight={600}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#eb0000 !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color={sRankWeaponColor(item.SRankWeapon.special_code)}> {displayItem(item, "special")} </StyledText>
        <StyledText theme={theme} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme}>{displayItem(item, "native")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme}>{displayItem(item, "a_beast")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme}>{displayItem(item, "machine")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme}>{displayItem(item, "dark")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#ff7875 !important">{displayItem(item, "hit")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>] </StyledText>
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
        <StyledText theme={theme} fontWeight={600}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontWeight={600} color={nameColor(item)}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color={specialColor(item)}>{displayItem(item, "special")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "native")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "a_beast")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme}  fontWeight={600} color="#25e17b !important">{displayItem(item, "machine")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "dark")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#ff7875 !important">{displayItem(item, "hit")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>] </StyledText>
    </>
    );
}

function displayFrame(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontWeight={600} color="yellow !important" >{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> | </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>]</StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#ff7875 !important">{displayItem(item, "slot")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>]</StyledText>
    </>
    );
}

function displayBarrier(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontWeight={600} color="yellow !important" >{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme}> | </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme}>]</StyledText>
    </>
    );
}

function displayUnit(item, theme) {
    return (
        <StyledText theme={theme} fontWeight={600} color="yellow !important">{displayItem(item, "name")}</StyledText>
    );
}

function displayMag(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontWeight={600} color="yellow !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "def")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "pow")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "dex")}</StyledText>
        <StyledText theme={theme}>/</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#25e17b !important">{displayItem(item, "mind")}</StyledText>
        <StyledText theme={theme} fontWeight={600}>] </StyledText>
        <StyledText theme={theme} fontWeight={600}>[ </StyledText>
        <StyledText theme={theme}>{displayItem(item, "pbs", theme)}</StyledText>
        <StyledText theme={theme} fontWeight={600}> ] </StyledText>
        <StyledText theme={theme} fontWeight={600}>[ </StyledText>
        <StyledText theme={theme} fontWeight={600} color="#ff7875 !important">{displayItem(item, "color")}</StyledText>
        <StyledText theme={theme} fontWeight={600}> ]</StyledText>
    </>
    );
}

function displayTech(item, theme) {
    return (
    <>
        <StyledText theme={theme}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme}>{displayItem(item, "level")}</StyledText>
    </>
    );
}

function displayTool(item, theme) {
    return (
    <>
        <StyledText theme={theme}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme}>{displayItem(item, "number")}</StyledText>
    </>
    );
}

function displayOther(item, theme) {
    return (
    <>
        <StyledText theme={theme}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme}>{displayItem(item, "number")}</StyledText>
    </>
    );
}

function displayMeseta(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontWeight={600} color="#ffe622 !important">{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontWeight={600} color="#ffe622 !important">{displayItem(item, "amount")}</StyledText>
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