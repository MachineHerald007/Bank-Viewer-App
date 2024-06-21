'use client'

import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useEffect } from 'react'
import { characters } from './components/Characters'
import { AccountConfig } from './components/Page/AccountConfig/AccountConfig'
import Dashboard from './Dashboard'

import "./components/Theme/styles.css"
import { ThemeProvider, useTheme } from './components/Theme/Theme'
import { Pane, Switch } from 'evergreen-ui'

export const UserContext = createContext()
export const AccountContext = createContext()
export const AllItemsContext = createContext()

function isLoggedInOrInitialized() {
    return false
}

export default function Home() {
    const isLoggedIn = isLoggedInOrInitialized()

    useEffect(() => {
        invoke("init_app")
            .then(res => console.log(res))
            .catch(console.error)
    }, [])

    return (
        <ThemeProvider>
            <UserContext.Provider>
            <Pane>
                {isLoggedIn ? (
                    <AccountContext.Provider value={{ characters, AllItemsContext }}>
                    <Dashboard />
                    </AccountContext.Provider>
                ) : (
                    <AccountConfig />
                )}
            </Pane>
            </UserContext.Provider>
        </ThemeProvider>
    )
}