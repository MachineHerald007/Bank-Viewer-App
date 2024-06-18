import React, { useState, useEffect, useRef } from "react"
import {
    Avatar,
    AddIcon,
    PlusIcon,
    Text,
    Pane
} from "evergreen-ui"
import styled, {ThemeProvider} from "styled-components"
import { useTheme } from "../../Theme/Theme"
import { ThemeToggler } from "../../Theme/ThemeToggler"
import { AccountSetup } from "./AccountSetup"

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

const HoverPane = styled(Pane)`
    border: 1px solid ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1c1c1c")};
    background: ${({ theme }) => 
        theme.mode === "light" 
            ? "linear-gradient(135deg, #f7f7f7 0%, #eaeaea 100%)"
            : "linear-gradient(135deg, #282A2E 0%, #1f2023 100%)"
    };
    color: ${({ theme }) => (theme.mode === "light" ? "#52586d" : "#ebebeb")};
    width: fit-content;
    margin-bottom: 22px;
    padding: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    position: relative;
    left: 8px;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e9e9e9 0%, #d9d9d9 100%)"
                : "linear-gradient(135deg, #2e333b 0%, #272a2e 100%)"
        };
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
    maxWidth: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;

    .ub-lft_12px {
        left: 0 !important;
    }
`;

const AccountPane = styled(Pane)`
    border: 1px solid ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1c1c1c")};
    background: ${({ theme }) => 
        theme.mode === "light" 
            ? "linear-gradient(135deg, #f7f7f7 0%, #eaeaea 100%)"
            : "linear-gradient(135deg, #282A2E 0%, #242526 100%)"
    };
    height: 100px;
    width: 120px;
    border-radius: 4px;
    padding: 8px;
    transition: background 0.3s ease;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e9e9e9 0%, #e3e3e3 100%)"
                : "linear-gradient(135deg, #2e333b 0%, #2a2b2e 100%)"
        };
    }
`;

const AccountSection = ({ accounts }) => {
    const { theme } = useTheme()
    const [isOverflow, setIsOverflow] = useState(false)
    const containerRef = useRef(null)

    const styles = {
        color: theme === 'light' ? '#43454f' : '#efefef',
    }

    const hpane_styles = {
        background: theme === 'light' ? '#d8dae5' : '#474649',
        color: theme === 'light' ? '#8f95b2' : '#edeff5',
    }

    useEffect(() => {
        const container = containerRef.current
        if (container.scrollWidth > container.clientWidth) {
            setIsOverflow(true)
        } else {
            setIsOverflow(false)
        }
    }, [accounts])

    return (
        <CenteredPane>
            <Text 
                display="block"
                color={styles.color}
                fontSize={20}
                fontWeight={600}
                marginBottom={32}
                textAlign="center"
            >
                {accounts.length > 0 ? "Select account" : "No accounts available"}
            </Text>
            <Pane
                display="flex"
                height={180}
                maxWidth="100%"
                overflowX={isOverflow ? "scroll" : "hidden"}
                overflowY="hidden"
                ref={containerRef}
            >
                <Pane
                    display="inline-block"
                    marginBottom={14}
                    marginRight={14}
                    position="relative"
                    top={20}
                >
                    <HoverPane>
                        <PlusIcon size={24} position="relative" top={2}/>
                    </HoverPane>
                    <Text
                        color={styles.color}
                        fontSize={14}
                        fontWeight={600}
                        position="relative"
                        left={12}
                        top={6}
                    >
                        Add Account
                    </Text>
                </Pane>
                {accounts.map((account, index) => (
                    <Pane
                        display="inline-block"
                        textAlign="center"
                        marginLeft={8}
                        key={index}
                    >
                        <AccountPane>
                            <Pane
                                position="relative"
                                overflow="hidden"
                                top={30}
                            >
                                <Text
                                    color={styles.color}
                                    fontSize={14}
                                    fontWeight={600}
                                >
                                    {account.name}
                                </Text>
                            </Pane>
                        </AccountPane>
                    </Pane>
                ))}
            </Pane>
        </CenteredPane>
    )
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
            <AccountSection accounts={accounts}/>
            {/* <AccountSetup /> */}
        </Pane>
    </ThemeProvider>
    )
}