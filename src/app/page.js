'use client'

import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useEffect, useState } from 'react';
import { characters } from './components/Characters';
import { AccountConfig } from './components/Page/AccountConfig/AccountConfig';
import Dashboard from './Dashboard';

import "./components/Theme/styles.css";
import { ThemeProvider, useTheme } from './components/Theme/Theme';
import { Pane, Switch } from 'evergreen-ui';

export const AppContext = createContext();
export const AccountContext = createContext();
export const AccountsContext = createContext();
export const DashboardContext = createContext();

export default function Home() {
    const [user, setUser] = useState(null)
    const [accounts, setAccounts] = useState([])
    const [loggedInAccount, setLoggedInAccount] = useState(false)
    const [dashboardState, setDashboardState] = useState({})

    const getDashboardState = (setDashboardState, setLoginState) => {
        invoke("get_dashboard_state")
        .then(res => {
            console.log("Dashboard state: ", res);
            res.logged_in_account_id != 0 ? setLoggedInAccount(true) : setLoggedInAccount(false);
            setDashboardState(res);
        })
        .catch(err => {
            console.log(err);
            setDashboardState({});
        });
    };

    const getAccounts = (setAccounts) => {
        invoke("get_accounts")
        .then(res => {
            console.log("Accounts: ", res);
            setAccounts(res);
        })
        .catch(err => {
            console.log(err);
            setAccounts([]);
        }); 
    };

    const getUser = (setUser) => {
        invoke("get_user")
        .then(res => {
            console.log("User: ", res);
            setUser(res);
        })
        .catch(err => {
            console.log(err);
            setUser(null);
        });
    };

    useEffect(() => {
        invoke("init_app")
            .then(res => {
                console.log(res);
                getDashboardState(setDashboardState);
                getUser(setUser);
                getAccounts(setAccounts);
            })
            .catch(console.error)
    }, []);

    return (
        <ThemeProvider>
            <AppContext.Provider value={{ user, setUser, getUser, loggedInAccount, setLoggedInAccount }}>
            <Pane>
                {loggedInAccount ? 
                (
                    <AccountContext.Provider value={{ characters }}>
                    <Dashboard />
                    </AccountContext.Provider>
                )
                :
                (
                    <AccountsContext.Provider value={{ accounts, setAccounts, getAccounts }}>
                        <AccountConfig />
                    </AccountsContext.Provider>
                )
                }
            </Pane>
            </AppContext.Provider>
        </ThemeProvider>
    )
}