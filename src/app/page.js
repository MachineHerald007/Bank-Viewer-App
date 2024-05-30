'use client'

import React from 'react'
import { createContext } from 'react'
import { characters } from './components/Characters'
import { Accounts } from './components/Page/Accounts/Accounts'
import Dashboard from './Dashboard'

import "./components/Theme/styles.css"
import { ThemeProvider, useTheme } from './components/Theme/Theme'
import { Pane, Switch } from 'evergreen-ui'

export const AccountContext = createContext()
export const AllItemsContext = createContext()

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme()
    const [checked, setChecked] = React.useState(true)

    return (
        <Switch
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked)
                toggleTheme()
            }}
        />
    )
}

function isLoggedInOrInitialized() {
    return false
}

export default function Home() {
    const isLoggedIn = isLoggedInOrInitialized()

    return (
        <ThemeProvider>
            <Pane>
                {isLoggedIn ? (
                    <AccountContext.Provider value={{ characters, AllItemsContext }}>
                        <Dashboard />
                    </AccountContext.Provider>
                ) : (
                    <Accounts />
                )}
            </Pane>
        </ThemeProvider>
    )
}