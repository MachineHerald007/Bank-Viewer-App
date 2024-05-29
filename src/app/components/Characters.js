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

const _characters = [
    {
        name: "Machine",
        class: "HUcast",
        sec_id: "Skyly",
        level: 200,
        slot: 0,
        img: ""
    },
    {
        name: "Machine",
        class: "RAcast",
        sec_id: "Whitill",
        level: 189,
        slot: 1,
        img: ""
    },
    {
        name: "Machine",
        class: "FOnewm",
        sec_id: "Greenil",
        level: 172,
        slot: 2,
        img: ""
    },
    {
        name: "Toguro",
        class: "HUcast",
        sec_id: "Oran",
        level: 199,
        slot: 3,
        img: ""
    },
    {
        name: "Renji",
        class: "HUcast",
        sec_id: "Skyly",
        level: 140,
        slot: 4,
        img: ""
    },
    {
        name: "Zaraki",
        class: "HUcast",
        sec_id: "Blueful",
        level: 150,
        slot: 5,
        img: ""
    },
    {
        name: "Kenpachi",
        class: "HUcast",
        sec_id: "Pinkal",
        level: 144,
        slot: 6,
        img: ""
    },
    {
        name: "Gun Maiden",
        class: "RAcaseal",
        sec_id: "Purplenum",
        level: 31,
        slot: 7,
        img: ""
    },
    {
        name: "Mobile Suit",
        class: "HUcast",
        sec_id: "Viridia",
        level: 200,
        slot: 8,
        img: ""
    },
    {
        name: "Machine",
        class: "RAmar",
        sec_id: "Yellowboze",
        level: 164,
        slot: 9,
        img: ""
    },
    {
        name: "Vash",
        class: "RAmar",
        sec_id: "Redria",
        level: 120,
        slot: 10,
        img: ""
    },
    {
        name: "Machine",
        class: "RAmarl",
        sec_id: "Purplenum",
        level: 141,
        slot: 11,
        img: ""
    },
]

export const characters = parseCharacterData(_characters)