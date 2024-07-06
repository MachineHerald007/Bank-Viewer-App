import React from "react";
import { useTheme } from "../../Theme/Theme";
import { ThemeProvider } from "styled-components";
import { UserProfileSection } from "./UserProfileSection/UserProfileSection";
import { CenteredPane } from "./styles";

export function UserProfileSetup() {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={{ mode: theme }}>
            <CenteredPane>
                <UserProfileSection theme={theme} />
            </CenteredPane>
        </ThemeProvider>
    )
}