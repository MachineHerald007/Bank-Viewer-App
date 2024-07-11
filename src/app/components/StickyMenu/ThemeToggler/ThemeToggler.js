import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useState, useEffect } from "react";
import { Pane } from 'evergreen-ui';
import { Switch } from "antd";
import { ThemeToggleSwitch, GlobalThemeToggleSwitch } from "./styles";
import { MoonFilled } from "@ant-design/icons";
import { useTheme, ThemeProvider } from "../../Theme/Theme";

const ThemeToggle = ({ context }) => {
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
        <>
        <ThemeProvider theme={{ mode: theme, context }}>
            <GlobalThemeToggleSwitch context={context} />
            <ThemeToggleSwitch
                checked={checked}
                onChange={(checked) => {
                    setChecked(checked)
                    toggleTheme()
                }}
                checkedChildren={<SunIcon />}
                unCheckedChildren={<MoonFilled style={{ color: "yellow", position: "relative", top: "3px", fontSize: "14px" }} />}
                defaultValue
            />
        </ThemeProvider>
        </>
    )
}

const SunIcon = () => {
    const imageUrl = "https://i.imgur.com/fqsvlPV_d.webp?maxwidth=760&fidelity=grand";
    return (
        <Pane display="inline-block" position="relative" top={5}>
            <img height={16} src={imageUrl} alt="Description of the image" />
        </Pane>
    )
}

export function ThemeToggler({ context }) {
    return (
        <Pane display="inline-block">
            <ThemeToggle context={context} />
        </Pane>
    )
}