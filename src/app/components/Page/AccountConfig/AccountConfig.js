import React, { useContext, useState, useEffect } from "react"
import { AccountsContext, UserContext } from "@/app/page";
import { Pane } from "evergreen-ui";
import {ThemeProvider} from "styled-components";
import { useTheme } from "../../Theme/Theme";
import { ThemeToggler } from "../../Theme/ThemeToggler";
import { UserProfileSetup } from "../UserProfileSetup/UserProfileSetup";
import { AccountSection } from "./AccountSection/AccountSection";
import { invoke } from "@tauri-apps/api/tauri";

export function AccountConfig() {
    const { accounts } = useContext(AccountsContext);
    const { user } = useContext(UserContext);
    const { theme } = useTheme()

    useEffect(() => {

    }, [accounts])

    // styles needs to removed and replaced with theme
    const styles = {
        background: theme === 'light' ? '#FFFFFF' : '#24252B',
        color: theme === 'light' ? '#101840' : '#fff',
        height: "100vh"
    }

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Pane style={styles}>
            <ThemeToggler />
            {user ? <AccountSection /> : <UserProfileSetup />}
        </Pane>
    </ThemeProvider>
    )
}