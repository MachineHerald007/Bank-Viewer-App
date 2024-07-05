import React, { useState, useContext } from "react";
import { Pane } from "evergreen-ui";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { StickyMenuPane } from "./styles";
import { useTheme } from "../Theme/Theme";

export function StickyMenu({ context }) {
    const { theme } = useTheme();
    return (
        <StickyMenuPane context={context}>
            <LanguageSelector context={context} />
            <ThemeToggler context={context}/>
        </StickyMenuPane>
    );
}