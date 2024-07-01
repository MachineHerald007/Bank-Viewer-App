import React from "react";
import { StyledText } from "./components/Page/styles";
import { useTheme } from './components/Theme/Theme';

export function displayItem(item, prop) {
    let str = "";
    Object.keys(item).forEach(key => {
        if (item[key][prop]) {
            str = item[key][prop];
        }
    });
    return str;
}

function displayWeapon(item, theme) {
    console.log("WEP TYPE")
    return (
        <>
            <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
            <StyledText theme={theme} fontSize={16}> [{displayItem(item, "special")}] </StyledText>
        </>
    );
}

function displayFrame(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayBarrier(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayUnit(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayMag(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayTech(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displayTool(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
    );
}

function displaySRank(item, theme) {
    return (
        <StyledText theme={theme} fontSize={16}>{displayItem(item, "name")}</StyledText>
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
        case "SRankWeapon":
            return displaySRank(item, theme);
        case "Other":
            return displayOther(item, theme);
        case "Meseta":
            return displayMeseta(item, theme);
        default:
            return null;
    }
}
