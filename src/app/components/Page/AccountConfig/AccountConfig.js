import React, { useContext } from "react"
import { UserContext } from "@/app/page";
import { Pane } from "evergreen-ui";
import {ThemeProvider} from "styled-components";
import { useTheme } from "../../Theme/Theme";
import { UserProfileSetup } from "../UserProfileSetup/UserProfileSetup";
import { AccountSection } from "./AccountSection/AccountSection";
import { ThemeToggler } from "../../Theme/ThemeToggler";

export function AccountConfig() {
    const { user } = useContext(UserContext);
    const { theme } = useTheme()

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Pane>
            <ThemeToggler />
            {user ? <AccountSection /> : <UserProfileSetup />}
        </Pane>
    </ThemeProvider>
    )
}