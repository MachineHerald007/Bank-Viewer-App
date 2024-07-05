import React, { useContext } from "react"
import { AppContext } from "@/app/page";
import { Pane } from "evergreen-ui";
import {ThemeProvider} from "styled-components";
import { useTheme } from "../../Theme/Theme";
import { UserProfileSetup } from "../UserProfileSetup/UserProfileSetup";
import { AccountSection } from "./AccountSection/AccountSection";
import { ThemeToggler } from "../../Theme/ThemeToggler";
import { StickyMenu } from "../../StickyMenu/StickyMenu";

export function AccountConfig() {
    const { user } = useContext(AppContext);
    const { theme } = useTheme()

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Pane>
            <StickyMenu />
            {user ? <AccountSection /> : <UserProfileSetup />}
        </Pane>
    </ThemeProvider>
    )
}