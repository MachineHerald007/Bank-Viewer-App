import React, { useState, useEffect } from "react";
import { Pane } from "evergreen-ui";
import { useTheme } from "../../../Theme/Theme";
import { ThemeProvider } from "styled-components";
import { AccountFileUpload } from "../AccountFileUpload/AccountFileUpload";
import { AccountProfileSetup } from "../AccountProfileSetup/AccountProfileSetup";
import { HoverPane, ProfileAvatar, CenteredPane } from "./styles";

const SetUpSection = ({ theme }) => {
    return (
        <Pane>
            {/* <AccountFileUpload theme={theme} /> */}
            <AccountProfileSetup theme={theme} />
        </Pane>
    )
};

export function AccountSetup() {
    const { theme } = useTheme();
    const [account, setAccount] = useState([]);

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <CenteredPane>
                <SetUpSection theme={theme}/>
            </CenteredPane>
        </ThemeProvider>
    )
}