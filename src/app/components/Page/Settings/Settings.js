import React, { createContext, useState, useEffect } from "react";
import {
    Switch,
    Heading,
    IconButton,
    MaximizeIcon,
    MinimizeIcon,
    Text,
    Pane
} from 'evergreen-ui';
import { SettingsPane } from "./styles";
import { useTheme } from "../../Theme/Theme";

export function Settings() {
    const { theme } = useTheme();
    return (
        <SettingsPane theme={theme}>
        </SettingsPane>
    );
}