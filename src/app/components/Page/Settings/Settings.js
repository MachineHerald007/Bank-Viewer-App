import React, { createContext, useState, useEffect } from "react"
import {
    Switch,
    Heading,
    IconButton,
    MaximizeIcon,
    MinimizeIcon,
    Text,
    Pane
} from 'evergreen-ui'
import { useTheme } from "../../Theme/Theme"
import { ThemeToggler } from "../../Theme/ThemeToggler"

export function Settings() {
    const { theme } = useTheme()

    const styles = {
        background: theme === 'light' ? '#F9FAFA' : '#24252B',
        color: theme === 'light' ? '#000' : '#fff',
    }

    return (
        <Pane
            style={styles}
        >
            <ThemeToggler />
        </Pane>
    )
}