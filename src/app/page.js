'use client'

import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useEffect, useState } from 'react';
import { characters } from './components/Characters';
import { AccountConfig } from './components/Page/AccountConfig/AccountConfig';
import Dashboard from './Dashboard';

import "./components/Theme/styles.css";
import { ThemeProvider, useTheme } from './components/Theme/Theme';
import { Pane, Switch } from 'evergreen-ui';

export const UserContext = createContext();
export const AccountsContext = createContext();
export const AccountContext = createContext();
export const AllItemsContext = createContext();

function getAccounts(setAccounts) {
    invoke("get_accounts")
    .then(res => {
        console.log("Accounts: ", res);
        setAccounts(res);
    })
    .catch(err => {
        console.log(err);
        setAccounts([]);
    }); 
}

function getUser(setUser) {
    invoke("get_user")
    .then(res => {
        console.log("User: ", res);
        setUser(res);
    })
    .catch(err => {
        console.log(err);
        setUser(null);
    });
}

function isLoggedInOrInitialized() {
    return false
}

export default function Home() {
    const [user, setUser] = useState(null)
    const [accounts, setAccounts] = useState([])
    const isLoggedIn = isLoggedInOrInitialized()

    useEffect(() => {
        invoke("init_app")
            .then(res => {
                console.log(res)
                getUser(setUser);
                getAccounts(setAccounts);
            })
            .catch(console.error)
    }, [])

    return (
        <ThemeProvider>
            <UserContext.Provider value={{ user }}>
            <Pane>
                {isLoggedIn ? (
                    <AccountContext.Provider value={{ characters, AllItemsContext }}>
                    <Dashboard />
                    </AccountContext.Provider>
                ) : (

                <AccountsContext.Provider value={{ accounts, setAccounts, getAccounts }}>
                    <AccountConfig />
                </AccountsContext.Provider>
                )}
            </Pane>
            </UserContext.Provider>
        </ThemeProvider>
    )
}