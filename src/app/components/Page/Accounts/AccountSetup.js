import React, { useState, useEffect } from "react"
import { Avatar, AddIcon, PlusIcon, Text, Pane } from "evergreen-ui"
import styled, { ThemeProvider } from "styled-components"
import { useTheme } from "../../Theme/Theme"
import { ThemeToggler } from "../../Theme/ThemeToggler"
import { AccountFileUpload } from "./AccountFileUpload"
import { AccountProfileSetup } from "./AccountProfileSetup"

const HoverPane = styled(Pane)`
    width: fit-content;
    margin-bottom: 24px;
    border-radius: 50px;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: grey;
        color: white; /* Optional: change text color on hover */
    }
`;

const ProfileAvatar = styled(Avatar)`
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

const CenteredPane = styled(Pane)`
    height: fit-content;
    width: fit-content;
    max-width: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    background: ${({ theme }) => (theme.mode === 'light' ? '#FFFFFF' : '#24252B')};
    color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};

    .ub-color_474d66 {
        color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};
    }
`;

const SetUpSection = ({ theme }) => {
    return (
        <Pane>
            {/* <AccountFileUpload theme={theme} /> */}
            <AccountProfileSetup theme={theme} />
        </Pane>
    )
}

export function AccountSetup() {
    const { theme } = useTheme()
    const [account, setAccount] = useState([])

    return (
        <ThemeProvider theme={{ mode: theme }}>
            <CenteredPane>
                <SetUpSection theme={theme}/>
            </CenteredPane>
        </ThemeProvider>
    )
}
