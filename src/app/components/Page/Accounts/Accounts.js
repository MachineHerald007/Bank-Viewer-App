import React, { useState, useEffect, useRef } from "react"
import { Pane } from "evergreen-ui";
import { PlusOutlined } from "@ant-design/icons";
import styled, {ThemeProvider} from "styled-components";
import { useTheme } from "../../Theme/Theme";
import { ThemeToggler } from "../../Theme/ThemeToggler";
import { UserProfileSetup } from "../UserProfileSetup/UserProfileSetup";
import { AccountSection } from "./AccountSection/AccountSection";
import { AccountFileUpload } from "./AccountFileUpload/AccountFileUpload";

function getAccounts() {
    return [
        {
            name: "machineherald",
            characters: [],
            shared_bank: null
        },
        {
            name: "herald001",
            characters: [],
            shared_bank: null
        }
    ]
}

export function Accounts() {
    const { theme } = useTheme()
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const accounts = getAccounts()
        setAccounts(accounts)
    }, [])

    const styles = {
        background: theme === 'light' ? '#FFFFFF' : '#24252B',
        color: theme === 'light' ? '#101840' : '#fff',
        height: "100vh"
    }

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Pane style={styles}>
            <ThemeToggler />

            <UserProfileSetup />
            {/* <AccountSection accounts={accounts}/> */}
            {/* <AccountFileUpload /> */}
        </Pane>
    </ThemeProvider>
    )
}