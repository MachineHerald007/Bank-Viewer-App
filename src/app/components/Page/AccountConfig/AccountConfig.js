import React, { useState, useEffect, useRef } from "react"
import { Pane } from "evergreen-ui";
import { PlusOutlined } from "@ant-design/icons";
import styled, {ThemeProvider} from "styled-components";
import { useTheme } from "../../Theme/Theme";
import { ThemeToggler } from "../../Theme/ThemeToggler";
import { UserProfileSetup } from "../UserProfileSetup/UserProfileSetup";
import { AccountSection } from "./AccountSection/AccountSection";
import { AccountFileUpload } from "./AccountFileUpload/AccountFileUpload";
import { invoke } from "@tauri-apps/api/tauri";

function getAccounts(setAccounts) {
    invoke("get_accounts")
    .then(res => {
        console.log("Accounts: ", res);
        setAccounts(res);
    })
    .catch(err => {
        console.log(err);
        setAccounts([]);
    }); 
}

function getUser(setUser) {
    invoke("get_user")
    .then(res => {
        console.log("User: ", res);
        setUser(res);
    })
    .catch(err => {
        console.log(err);
        setUser(null);
    });
}

export function AccountConfig() {
    const { theme } = useTheme()
    const [user, setUser] = useState(null)
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getUser(setUser);
        getAccounts(setAccounts);
    }, [])

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
            {user ? <AccountSection accounts={accounts}/> : <UserProfileSetup />}
        </Pane>
    </ThemeProvider>
    )
}