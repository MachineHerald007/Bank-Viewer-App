import React from "react";
import { StyledText } from "./components/Page/styles";
import { useTheme } from './components/Theme/Theme';

// pass in the theme to dynamically change color
function color(special) {
    switch(special) {
        case "None":
            return "#fff !important";
        case "Freeze":
            return "pink !important";
        case "Lord's":
            return "pink !important";
        case "Spirit":
            return "pink !important";
        case "Fill":
            return "pink !important";
        case "Burning":
            return "pink !important";
        case "Seize":
            return "pink !important";
        case "Devil's":
            return "pink !important";
        case "Storm":
            return "pink !important";
        case "Blizzard":
            return "#72d2dd !important";
        case "Blizzard++":
            return "#00e5ff !important";
        case "Zalure(Lv.5)":
            return "pink !important";
        case "Soul":
            return "pink !important";
        case "Charge++":
            return "pink !important";
        case "Hell":
            return "#d700d7 !important";
        case "Dark":
            return "pink !important";
        case "Havoc":
            return "pink !important";
        case "Berserk":
            return "#caff00 !important";
        case "Izmaela":
            return "pink !important";
        case "Flame":
            return "pink !important";
        case "Hold":
            return "pink !important";
        case "King's":
            return "pink !important";
        case "Dim":
            return "pink !important";
        case "Piercing Wave":
            return "pink !important";
        case "Megid":
            return "pink !important";
        case "Arrest":
            return "#ffa500 !important";
        case "Chaos":
            return "pink !important";
        case "Mind":
            return "pink !important";
        case "Geist":
            return "pink !important";
        case "Demon's":
            return "#b63cff !important";
        case "Rand Si Tech":
            return "pink !important";
        case "Divine Punishment":
            return "pink !important";
        case "Foie":
            return "pink !important";
        case "Gifoie":
            return "pink !important";
        case "Zonde":
            return "pink !important";
        case "Barta":
            return "pink !important";
        case "PB Wave":
            return "pink !important";
        case "Charge":
            return "#e9e910 !important";
        case "Pierce":
            return "pink !important";
        case "WINDMILL":
            return "pink !important";
        case "Resta Lv.4":
            return "pink !important";
        case "Grants":
            return "pink !important";
        case "Anti Lv.3":
            return "pink !important";
        case "SD Lv3":
            return "pink !important";
        case "Trap Vision":
            return "pink !important";
        case "JZ Lv5":
            return "pink !important";
        case "Gizonde":
            return "pink !important";
        case "Gibarta":
            return "pink !important";
        case "SD 6":
            return "pink !important";
        case "Draw":
            return "pink !important";
        case "Drain":
            return "pink !important";
        case "Gush":
            return "pink !important";
        case "Heart":
            return "pink !important";
        case "Master's":
            return "pink !important";
        case "Ice":
            return "pink !important";
        case "Frost":
            return "pink !important";
        case "Bind":
            return "pink !important";
        case "Heat":
            return "pink !important";
        case "Fire":
            return "pink !important";
        case "Shock":
            return "pink !important";
        case "Thunder":
            return "pink !important";
        case "Tempest":
            return "pink !important";
        case "Shadow":
            return "pink !important";
        case "Panic":
            return "pink !important";
        case "Riot":
            return "pink !important";
        case "Jellen":
            return "pink !important";
        case "HP Regeneration":
            return "pink !important";
        case "TP Regeneration":
            return "pink !important";

        // JA Specials
        default:
            return "#fff !important";
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
            return <StyledText theme={theme} fontSize={16} fontWeight={600} color={color(str)}>{str}</StyledText>;
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
        <StyledText theme={theme} fontSize={16} fontWeight={600}> {displayItem(item, "special")} </StyledText>
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
        return item["Weapon"]["rare"] ? "yellow !important" : "#c33bc3 !important";
    }

    return (
    <>
        <StyledText theme={theme} fontSize={16} fontWeight={600}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color={nameColor(item)}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600} color="#25e17b !important">{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontSize={16} fontWeight={600}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "special")}</StyledText>
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
