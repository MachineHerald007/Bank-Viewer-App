import React, { createContext, useState, useEffect } from "react"
import { useTheme } from "./Theme"
import {
    Switch,
    Pane
} from 'evergreen-ui'


const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    const [checked, setChecked] = React.useState(true)

    return (
        <Switch
            display="inline-block"
            position="relative"
            bottom={4}
            marginLeft={12}
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked)
                toggleTheme()
            }}
        />
    )
}

const SunIcon = () => {
    const imageUrl = "https://i.imgur.com/fqsvlPV_d.webp?maxwidth=760&fidelity=grand"
    return (
        <Pane display="inline-block">
            <img height={24} src={imageUrl} alt="Description of the image" />
        </Pane>
    )
}

const MoonIcon = () => {
    const imageUrl = "https://cdn-icons-png.freepik.com/512/740/740866.png?ga=GA1.1.1100743220.1717043240"
    return (
        <Pane display="inline-block">
            <img height={24} src={imageUrl} alt="Description of the image" />
        </Pane>
    )
}

export function ThemeToggler() {
    const { theme } = useTheme()

    const styles = {
        background: theme === 'light' ? '#F9FAFA' : '#F9FAFA',
        color: theme === 'light' ? '#000' : '#fff',
    }

    return (
        <Pane
            float="right"
            margin={12}
        >
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            <ThemeToggle />
        </Pane>
    )
}