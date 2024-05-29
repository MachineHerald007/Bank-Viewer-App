import { ClassIcons } from "./ClassIcons"

function parseCharacterData(characters) {
    let l = characters.length;

    for (let i = 0; i < l; i++) {
        switch (characters[i].class) {
            case "FOmar":
                characters[i].img = ClassIcons.FOmar
                break
            case "FOmarl":
                characters[i].img = ClassIcons.FOmarl
                break
            case "FOnewearl":
                characters[i].img = ClassIcons.FOnewearl
                break
            case "FOnewm":
                characters[i].img = ClassIcons.FOnewm
                break
            case "HUcaseal":
                characters[i].img = ClassIcons.HUcaseal
                break
            case "HUcast":
                characters[i].img = ClassIcons.HUcast
                break
            case "HUmar":
                characters[i].img = ClassIcons.HUmar
                break
            case "HUnewearl":
                characters[i].img = ClassIcons.HUnewearl
                break
            case "RAcaseal":
                characters[i].img = ClassIcons.RAcaseal
                break
            case "RAcast":
                characters[i].img = ClassIcons.RAcast
                break
            case "RAmar":
                characters[i].img = ClassIcons.RAmar
                break
            case "RAmarl":
                characters[i].img = ClassIcons.RAmarl
                break
            default:
                characters[i].img = '' // or some default icon
        }
    }

    return characters
}

export const inventory_09 = `[E] Heaven Striker +20 [Berserk] [0/0/0/0|30] 
Vulcan +9 [Charge] [0/0/0/0|60] 
Frozen Shooter +9 [30/0/0/55|30] 
S-RANK NEEDLE ARREST 70 [Arrest] 
S-RANK MECHGUN DEMONS 50 [Demon's] 
S-RANK NEEDLE HELL 70 [Hell] 
S-RANK SHOT HELL 125 [Hell] 
Baranz Launcher +30 [Charge] [0/0/0/100|50] 
Excalibur [Berserk] [0/0/100/0|35] 
[E] Stealth Suit [0/0 | 8/25] [4S] 
[E] Ranger Wall [0/10 | 0/10] 
[E] V101 
[E] V502 
[E] Centurion/Ability 
[E] Adept 
Stealth [5.98/148.98/47.08/0.18] [M|E|P] [Black] 
Dimate x10 
Trimate x10 
Difluid x10 
Trifluid x10 
Sol Atomizer x10 
Moon Atomizer x10 
Meseta: 289725`

export const inventory_11 = `[E] Heaven Striker +20 [Berserk] [0/0/0/0|20] 
Assault +9 [Charge] [0/0/0/0|60] 
Frozen Shooter +9 [0/0/0/0|20] 
S-RANK NEEDLE Berserk 70 [Berserk] 
S-RANK SHOT DEMONS 125 [Demons] 
Baranz Launcher +30 [Charge] [0/0/0/100|50] 
Excalibur [Berserk] [0/0/100/0|35] 
[E] Stealth Suit [0/0 | 0/25] [4S] 
[E] Ranger Wall [0/10 | 0/10] 
[E] V101 
[E] V502 
[E] Adept 
[E] Adept 
Stealth [5.98/148.98/47.08/0.18] [M|E|P] [Black] 
Dimate x10 
Trimate x10 
Difluid x10 
Trifluid x10 
Sol Atomizer x10 
Moon Atomizer x10 
Meseta: 289725`

export const bank_09 = `[U] Diska of Braveman [Berserk] [0/25/20/0|0] 
[U] Diska of Braveman [Berserk] [45/0/0/0|20] 
[U] Diska of Braveman [Berserk] [15/0/15/0|25] 
[U] Diska of Braveman [Berserk] [0/5/0/0|5] 
[U] Diska of Braveman [Berserk] [0/0/5/5|10] 
Diska of Braveman [Berserk] [0/0/55/15|0] 
[U] Diska of Braveman [Berserk] [20/45/0/10|0] 
[U] Diska of Braveman [Berserk] [0/0/20/0|0] 
[U] Diska of Braveman [Berserk] [0/25/5/0|0] 
[U] Diska of Braveman [Berserk] [25/5/20/0|0] 
Diska of Braveman [Berserk] [0/0/0/0|25] 
[U] Custom Ray ver.OO [Flame] [0/0/0/0|20] 
[U] Custom Ray ver.OO [Flame] [0/0/0/0|20] 
[U] Justy-23ST [Devil's] [15/0/0/0|10] 
[U] M&A60 Vise [Berserk] [15/50/0/0|0] 
M&A60 Vise [Berserk] [0/0/0/0|30] 
[U] Arms +3 [Frost] [0/0/30/0|40] 
Meteor Smash [Soul] [0/0/0/0|20] 
[U] Final Impact [Lord's] [0/0/25/15|10] 
[U] Club +1 [Dark] [0/0/15/25|35] 
Club of Zumiuran [Storm] [0/50/15/0|0] 
Storm Wand: Indra [Storm] [0/15/40/0|0] 
[U] Storm Wand: Indra [Storm] [0/5/0/0|0] 
[U] Storm Wand: Indra [Storm] [10/0/15/0|25] 
[U] Silence Claw [Dark] [0/0/0/0|0] 
[U] Inferno Bazooka [Devil's] [25/0/10/0|15] 
[U] Meteor Cudgel [Blizzard] [0/0/0/25|10] 
Girasole [0/0/0/0|0] 
Madam's Umbrella [Berserk] [0/0/0/0|15] 
Frozen Shooter [0/0/25/0|0] 
Yasminkov 3000R [25/0/20/0|0] 
Yasminkov 2000H [0/10/0/5|0] 
Yasminkov 7000V [0/0/0/20|0] 
Hitogata [Soul] [0/25/0/0|0] 
[U] Hitogata [Soul] [0/0/35/0|0] 
[U] Hitogata [Soul] [0/10/0/0|0] 
Hitogata [Soul] [0/0/0/30|35] 
[U] Flowen's Sword (3084) [Spirit] [0/35/5/0|0] 
[U] Ophelie Seize [Chaos] [0/0/0/10|0] 
Heaven Striker [Berserk] [20/0/0/0|0] 
Tree Clippers [Charge] [0/0/0/0|0] 
D-Parts ver1.01 [7/10 | 7/7] [4S] 
Flame Garment [28/50 | 11/20] [0S] 
Red Odoshi Domaru [4/10 | 6/10] [0S] 
Dirty Lifejacket [0/0 | 0/0] [0S] 
Alliance Uniform [5/12 | 0/0] [0S] 
Alliance Uniform [1/12 | 0/0] [0S] 
Samurai Armor [0/0 | 0/0] [0S] 
Proto Regene Gear [0/7 | 7/7] 
Assist Barrier [4/5 | 0/5] 
Blue Barrier [3/5 | 1/5] 
Blue Barrier [3/5 | 4/5] 
Yellow Barrier [2/5 | 1/5] 
Yellow Barrier [1/5 | 2/5] 
Yellow Barrier [3/5 | 5/5] 
Hero/Ability 
Hero/Ability 
Friend Ring 
Mag [5.00/0.00/0.00/0.00] [ | | ] [Violet] 
Mag [5.00/0.00/0.00/0.00] [ | | ] [Grey] 
Mag [5.00/0.00/0.00/0.00] [ | | ] [Gold] 
Reverser  Lv1
Anti  Lv7
Gifoie  Lv15
Gifoie  Lv15
Rafoie  Lv15
Rafoie  Lv15
Rafoie  Lv15
Rafoie  Lv15
Rafoie  Lv15
Gibarta  Lv15
Rabarta  Lv15
Rabarta  Lv15
Rabarta  Lv15
Rabarta  Lv15
Zonde  Lv15
Gizonde  Lv15
Gizonde  Lv15
Gizonde  Lv15
Razonde  Lv15
Razonde  Lv15
Razonde  Lv15
Razonde  Lv15
Razonde  Lv15
Razonde  Lv15
Razonde  Lv15
Deband  Lv15
Jellen  Lv15
Jellen  Lv15
Jellen  Lv15
Zalure  Lv15
Zalure  Lv15
Zalure  Lv15
Shifta  Lv15
Shifta  Lv15
Shifta  Lv15
Shifta  Lv15
Shifta  Lv15
Gifoie  Lv15
Gifoie  Lv20
Gifoie  Lv20
Gizonde  Lv20
Gizonde  Lv20
Razonde  Lv20
Razonde  Lv20
Deband  Lv20
Jellen  Lv20
Gifoie  Lv20
Megid  Lv24
Grants  Lv26
Gifoie  Lv27
Gifoie  Lv28
Gibarta  Lv28
Zonde  Lv28
Gifoie  Lv28
Foie  Lv29
Gifoie  Lv29
Rafoie  Lv29
Barta  Lv29
Barta  Lv29
Barta  Lv29
Gibarta  Lv29
Gibarta  Lv29
Gibarta  Lv29
Zonde  Lv29
Zonde  Lv29
Gizonde  Lv29
Gizonde  Lv29
Razonde  Lv29
Foie  Lv29
Jellen  Lv30
Resta  Lv30
Resta  Lv30
Deband  Lv30
Scape Doll x1 
Scape Doll x1 
Scape Doll x1 
Evade Material x2 
Sinow Berill's Arms x1 
Amplifier of Red x1 
Amplifier of Red x1 
Amplifier of Red x1 
Amplifier of Red x1 
Amplifier of Red x1 
Disk Vol.25 "Last Impression" x1 
Meseta: 0
`

export const bank_11 = `[U] Pallasch [Flame] [0/0/0/25|40] 
DB's Saber [0/0/0/0|20] 
[U] Raygun +1 [Master's] [0/0/0/0|45] 
[U] Raygun +1 [Dark] [0/0/0/0|30] 
[U] Beam +1 [Heart] [0/0/30/0|45] 
[U] M&A60 Vise [Berserk] [0/0/5/0|15] 
L&K14 Combat [Seize] [15/0/35/0|20] 
Arms +10 [Tempest] [0/0/0/0|60] 
[U] Striker [Arrest] [0/0/0/30|45] 
Brave Hammer [Spirit] [0/0/0/0|25] 
[U] Scepter [Fire] [0/0/0/0|40] 
Storm Wand: Indra [Storm] [40/20/0/0|0] 
Inferno Bazooka [Devil's] [15/0/0/15|20] 
L&K38 Combat [Burning] [0/0/15/20|0] 
[U] Sting Tip [Soul] [15/15/0/0|0] 
Rabbit Wand [Chaos] [0/0/0/0|25] 
[U] Glide Divine [Blizzard] [30/0/0/0|0] 
[U] Glide Divine [Blizzard] [0/0/0/0|0] 
Glide Divine [Blizzard] [0/50/0/0|25] 
[U] Glide Divine [Blizzard] [0/25/0/0|0] 
Glide Divine [Blizzard] [0/30/0/30|0] 
Glide Divine [Blizzard] [0/0/0/50|0] 
Synthesizer [0/0/0/0|0] 
Graviton Plate [8/8 | 0/0] [0S] 
Graviton Plate [4/8 | 0/0] [0S] 
Flowen's Frame [8/10 | 4/10] [0S] 
Custom Frame ver.OO [3/10 | 0/10] [1S] 
Star Cuirass [4/20 | 0/0] [0S] 
Gods Shield "Genbu" [0/0 | 0/0] 
Gods Shield "Seiryu" [0/0 | 0/0] 
Gibarta  Lv15
Gibarta  Lv15
Deband  Lv15
Gifoie  Lv20
Gibarta  Lv20
Rabarta  Lv20
Gizonde  Lv20
Razonde  Lv20
Zalure  Lv20
Zalure  Lv20
Gibarta  Lv28
Rafoie  Lv29
Rafoie  Lv29
Rafoie  Lv29
Gibarta  Lv29
Gibarta  Lv29
Gibarta  Lv29
Rabarta  Lv29
Zonde  Lv29
Razonde  Lv29
Razonde  Lv29
Deband  Lv30
Deband  Lv30
Jellen  Lv30
Zalure  Lv30
Evade Material x6 
S-beat's Arms x1 
Sinow Berill's Arms x1 
Meseta: 0
`

const _characters = [
    // {
    //     name: "Machine",
    //     class: "HUcast",
    //     sec_id: "Skyly",
    //     level: 200,
    //     slot: 0,
    //     img: ""
    // },
    // {
    //     name: "Machine",
    //     class: "RAcast",
    //     sec_id: "Whitill",
    //     level: 189,
    //     slot: 1,
    //     img: ""
    // },
    // {
    //     name: "Machine",
    //     class: "FOnewm",
    //     sec_id: "Greenil",
    //     level: 172,
    //     slot: 2,
    //     img: ""
    // },
    // {
    //     name: "Toguro",
    //     class: "HUcast",
    //     sec_id: "Oran",
    //     level: 199,
    //     slot: 3,
    //     img: ""
    // },
    // {
    //     name: "Renji",
    //     class: "HUcast",
    //     sec_id: "Skyly",
    //     level: 140,
    //     slot: 4,
    //     img: ""
    // },
    // {
    //     name: "Zaraki",
    //     class: "HUcast",
    //     sec_id: "Blueful",
    //     level: 150,
    //     slot: 5,
    //     img: ""
    // },
    // {
    //     name: "Kenpachi",
    //     class: "HUcast",
    //     sec_id: "Pinkal",
    //     level: 144,
    //     slot: 6,
    //     img: ""
    // },
    // {
    //     name: "Gun Maiden",
    //     class: "RAcaseal",
    //     sec_id: "Purplenum",
    //     level: 31,
    //     slot: 7,
    //     img: ""
    // },
    // {
    //     name: "Mobile Suit",
    //     class: "HUcast",
    //     sec_id: "Viridia",
    //     level: 200,
    //     slot: 8,
    //     img: ""
    // },
    {
        name: "Machine",
        class: "RAmar",
        sec_id: "Yellowboze",
        level: 164,
        slot: 9,
        img: "",
        inventory: inventory_09,
        bank: bank_09
    },
    // {
    //     name: "Vash",
    //     class: "RAmar",
    //     sec_id: "Redria",
    //     level: 120,
    //     slot: 10,
    //     img: ""
    // },
    {
        name: "Machine",
        class: "RAmarl",
        sec_id: "Purplenum",
        level: 141,
        slot: 11,
        img: "",
        inventory: inventory_11,
        bank: bank_11
    },
]

export const characters = parseCharacterData(_characters)