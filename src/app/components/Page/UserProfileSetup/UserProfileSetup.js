import React, { useState, useEffect } from "react";
import { Pane } from "evergreen-ui";
import { useTheme } from "../../Theme/Theme";
import { ThemeProvider } from "styled-components";
import { AccountFileUpload } from "../Accounts/AccountFileUpload/AccountFileUpload";
import { UserProfileSection } from "./UserProfileSection/UserProfileSection";
import { HoverPane, ProfileAvatar, CenteredPane } from "./styles";

export function UserProfileSetup() {
    const { theme } = useTheme();
    const [user, setUser] = useState([]);

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <CenteredPane>
                <UserProfileSection theme={theme} />
            </CenteredPane>
        </ThemeProvider>
    )
}