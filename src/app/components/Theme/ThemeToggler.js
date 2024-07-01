import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useState, useEffect } from "react";
import { Pane } from 'evergreen-ui';
import { Switch } from "antd";
import { MoonFilled } from "@ant-design/icons";
import { useTheme } from "./Theme";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
        theme === "light" ? setChecked(true) : setChecked(false);
        invoke("save_theme", {
            theme: theme
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [theme])

    return (
        <Switch
            checked={checked}
            onChange={(checked) => {
                setChecked(checked)
                toggleTheme()
            }}
            checkedChildren={<SunIcon />}
            unCheckedChildren={<MoonFilled style={{ color: "yellow" }} />}
            defaultValue
        />
    )
}

const SunIcon = () => {
    const imageUrl = "https://i.imgur.com/fqsvlPV_d.webp?maxwidth=760&fidelity=grand";
    return (
        <Pane display="inline-block" position="relative" top={2}>
            <img height={12} src={imageUrl} alt="Description of the image" />
        </Pane>
    )
}

export function ThemeToggler() {
    const { theme } = useTheme();

    const styles = {
        background: theme === 'light' ? '#F9FAFA' : '#F9FAFA',
        color: theme === 'light' ? '#000' : '#fff',
    };

    return (
        <Pane
            float="right"
            margin={12}
            marginTop={8}
        >
            <ThemeToggle />
        </Pane>
    )
}