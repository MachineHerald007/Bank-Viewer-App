import { invoke } from '@tauri-apps/api/tauri';
import { Select, Space } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/app/page';
import { AccountContext } from '../../SidePanel/SidePanel';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

export function LanguageSelector({ context }) {
    const { dashboardState, setDashboardState } = useContext(AppContext);
    const accountContext = useContext(AccountContext);
    const accountData = accountContext ? accountContext.accountData : {};
    const [value, setValue] = useState(dashboardState.lang);
    const { theme } = useTheme();

    const handleChange = (lang) => {
        setValue(lang);
        console.log("language selector > send this: ", accountData);
        if (context === "sidepanel-page") {
            invoke("translate_account_data", {
                accountData: accountData
            })
            .then(res => {
                console.log("translated account data");
            })
            .catch(err => console.log(err))
        }
    };

    useEffect(() => {
        setValue(dashboardState.lang);
    }, [context, dashboardState, accountData]);

    useEffect(() => {
        invoke("save_lang", { lang: value })
            .then(res => {
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
                    defaultValue={context === "sidepanel-page" ? value : "EN"}
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