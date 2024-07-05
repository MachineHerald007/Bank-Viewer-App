import React, { useState, useContext } from "react";
import { Pane } from "evergreen-ui";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { ThemeToggler } from "../Theme/ThemeToggler";
import { StickyMenuPane } from "./styles";
import { useTheme } from "../Theme/Theme";

export function StickyMenu() {
    const { theme } = useTheme();

    return (
        <StickyMenuPane>
            <LanguageSelector />
            <ThemeToggler />
        </StickyMenuPane>
    );
}