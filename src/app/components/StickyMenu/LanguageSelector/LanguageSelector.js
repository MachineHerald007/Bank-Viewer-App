import { invoke } from '@tauri-apps/api/tauri';
import { Select, Space } from 'antd';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { AppContext } from '@/app/page';
import { AccountContext } from '../../SidePanel/SidePanel';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

export function LanguageSelector({ context }) {
    const { dashboardState, setDashboardState } = useContext(AppContext);
    const accountContext = useContext(AccountContext);
    const accountData = accountContext ? accountContext.accountData : {};
    const { theme } = useTheme();
    const [value, setValue] = useState(dashboardState.lang);

    const handleChange = useCallback((lang) => {
        setValue(lang);
        console.log("language selector > send this: ", accountData);
        console.log(dashboardState);
        if (context === "sidepanel-page") {
            invoke("translate_account_data", {
                accountId: dashboardState.logged_in_account_id,
                accountData: accountData,
                lang: lang
            })
            .then(() => {
                console.log("translated account data");
                return invoke("get_dashboard_state")
            })
            .then(res => {
                console.log("the res: ", res);
                setDashboardState(res);
            })
            .catch(err => console.log(err));
        }
    }, [accountData, context, dashboardState.logged_in_account_id]);

    useEffect(() => {
        invoke("get_dashboard_state")
        .then(res => {
            console.log("the res: ", res)
            setValue(res.lang);
        })
        .catch(err => {
            setValue("EN");
        });
    }, [])

    useEffect(() => {
        invoke("save_lang", { lang: value })
            .then(() => {
                setDashboardState(prevDashboardState => ({
                    ...prevDashboardState,
                    lang: value
                }));
            })
            .catch(err => console.log(err));
    }, [value, setDashboardState]);

    return (
        <LanguageSelectorPane theme={theme} context={context}>
            <Space wrap>
                <Select
                    value={value}
                    style={{ width: 60 }}
                    onChange={handleChange}
                    options={[
                        { value: 'EN', label: 'EN' },
                        { value: 'JA', label: 'JA' }
                    ]}
                />
            </Space>
        </LanguageSelectorPane>
    );
}