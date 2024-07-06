import { invoke } from '@tauri-apps/api/tauri';
import { Select, Space } from 'antd';
import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { AppContext } from '@/app/page';
import { AccountContext } from '../../SidePanel/SidePanel';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

export function LanguageSelector({ context }) {
    const { dashboardState, setDashboardState } = useContext(AppContext);
    const accountContext = useContext(AccountContext);
    const accountData = useMemo(() => accountContext ? accountContext.accountData : {}, [accountContext]);
    const [value, setValue] = useState(dashboardState.lang || "EN");
    const { theme } = useTheme();

    const handleChange = useCallback((lang) => {
        setValue(lang);
        console.log("language selector > send this: ", accountData);

        if (context === "sidepanel-page") {
            invoke("translate_account_data", { accountData })
            .then(res => {
                console.log("translated account data");
            })
            .catch(err => console.log(err));
        }
    }, [accountData, context]);

    useEffect(() => {
        if (dashboardState?.lang && dashboardState.lang !== value) {
            setValue(dashboardState.lang);
        } else if (!dashboardState?.lang) {
            setValue('EN');
        }
    }, [dashboardState?.lang]);

    useEffect(() => {
        if (value !== dashboardState?.lang) {
            invoke("save_lang", { lang: value })
                .then(res => {
                    setDashboardState(prevDashboardState => ({
                        ...prevDashboardState,
                        lang: value
                    }));
                })
                .catch(err => console.log(err));
        }
    }, [value, dashboardState?.lang, setDashboardState]);

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
