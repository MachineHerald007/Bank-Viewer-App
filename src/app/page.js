'use client'

import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { AccountConfig } from './components/Page/AccountConfig/AccountConfig';
import Dashboard from './Dashboard';
import "./components/Theme/styles.css";
import { ThemeProvider } from './components/Theme/Theme';
import { Pane } from 'evergreen-ui';

export const AppContext = createContext();
export const AccountsContext = createContext();

export default function Home() {
    const [user, setUser] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [loggedInAccount, setLoggedInAccount] = useState({});
    const [dashboardState, setDashboardState] = useState({});

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    const getUser = useCallback(() => {
        invoke("get_user")
            .then(res => {
                setUser(res);
            })
            .catch(err => {
                console.log(err);
                setUser(null);
            });
    }, []);

    const getAccounts = useCallback(() => {
        invoke("get_accounts")
            .then(res => {
                setAccounts(res);
            })
            .catch(err => {
                console.log(err);
                setAccounts([]);
            });
    }, []);

    const getDashboardState = useCallback(() => {
        invoke("get_dashboard_state")
            .then(res => {
                setLoggedInAccount(res.account);
                setDashboardState(res);
            })
            .catch(err => {
                console.log(err);
                setDashboardState({});
            });
    }, []);

    useEffect(() => {
        invoke("init_app")
            .then(res => {
                console.log(res);
                getUser();
                getAccounts();
                getDashboardState();
            })
            .catch(console.error);
    }, [getUser, getAccounts, getDashboardState]);

    return (
        <ThemeProvider>
            <AppContext.Provider value={{
                user, setUser, getUser,
                loggedInAccount, setLoggedInAccount,
                dashboardState, setDashboardState
            }}>
                <Pane>
                    {!isEmpty(loggedInAccount) && loggedInAccount.logged_in_account_id !== 0 ? (
                        <Dashboard />
                    ) : (
                        <AccountsContext.Provider value={{ accounts, setAccounts, getAccounts }}>
                            <AccountConfig />
                        </AccountsContext.Provider>
                    )}
                </Pane>
            </AppContext.Provider>
        </ThemeProvider>
    );
}