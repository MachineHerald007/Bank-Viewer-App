import React from "react";
import { StyledText } from "./components/Page/styles";
import { useTheme } from './components/Theme/Theme';

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
        case "native":
        case "a_beast":
        case "machine":
        case "dark":
        case "hit":
        case "dfp":
        case "evp":
        case "max_dfp":
        case "max_evp":
        case "slot":
        case "def":
        case "pow":
        case "dex":
        case "mind":
            if (!str) {
                return "0";
            }
            return str;
        case "pbs":
            str = str.split(",")
            return (
            <>
                <StyledText theme={theme} fontSize={16}>{str[0]}</StyledText>
                <StyledText theme={theme} fontSize={16}> | </StyledText>
                <StyledText theme={theme} fontSize={16}>{str[1]}</StyledText>
                <StyledText theme={theme} fontSize={16}> | </StyledText>
                <StyledText theme={theme} fontSize={16}>{str[2]}</StyledText>
            </>
            )
        case "number":
            return " x" + str;
        default:
            return str;
    }
}

function displayWeapon(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "tekked")} </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "grind")} </StyledText>
        <StyledText theme={theme} fontSize={16}> [ </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "special")} </StyledText>
        <StyledText theme={theme} fontSize={16}> ] </StyledText>
        <StyledText theme={theme} fontSize={16}> [ </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "native")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "a_beast")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "machine")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "dark")}</StyledText>
        <StyledText theme={theme} fontSize={16}> | </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "hit")}</StyledText>
        <StyledText theme={theme} fontSize={16}> ] </StyledText>
    </>
    );
}

function displayFrame(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}> | </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>]</StyledText>
        <StyledText theme={theme} fontSize={16}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "slot")}</StyledText>
        <StyledText theme={theme} fontSize={16}>]</StyledText>
    </>
    );
}

function displayBarrier(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "max_dfp")}</StyledText>
        <StyledText theme={theme} fontSize={16}> | </StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "max_evp")}</StyledText>
        <StyledText theme={theme} fontSize={16}>]</StyledText>
    </>
    );
}

function displayUnit(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayMag(item, theme) {
    return (
    <>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
        <StyledText theme={theme} fontSize={16}> [</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "def")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "pow")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "dex")}</StyledText>
        <StyledText theme={theme} fontSize={16}>/</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "mind")}</StyledText>
        <StyledText theme={theme} fontSize={16}>] </StyledText>
        <StyledText theme={theme} fontSize={16}>[</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "pbs", theme)}</StyledText>
        <StyledText theme={theme} fontSize={16}>] </StyledText>
        <StyledText theme={theme} fontSize={16}>[</StyledText>
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "color")}</StyledText>
        <StyledText theme={theme} fontSize={16}>]</StyledText>
    </>
    );
}

function displayTech(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
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
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayMeseta(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

export function renderItemRow(item, theme) {
    const itemType = Object.keys(item)[0];
    switch (itemType) {
        case "Weapon":
        case "SRankWeapon":
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
