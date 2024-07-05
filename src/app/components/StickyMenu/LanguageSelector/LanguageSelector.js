import { invoke } from '@tauri-apps/api/tauri';
import { Select, Space } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/app/page';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

export function LanguageSelector({ context }) {
    const { dashboardState, setDashboardState } = useContext(AppContext);
    const [value, setValue] = React.useState(dashboardState.lang);
    const { theme } = useTheme();

    const handleChange = (lang) => {
        setValue(lang);
    };

    useEffect(() => {
        console.log("context: ", context);
        console.log("dashboard state: ", dashboardState);
        setValue(dashboardState.lang);
    }, [context, dashboardState])

    useEffect(() => {
        console.log("running save lang")
        invoke("save_lang", {
            lang: value
        })
        .then(res => {
            setDashboardState(prevDashboardState => ({
                ...prevDashboardState,
                lang: value
            }));
        })
        .catch(err => console.log(err))
    }, [value])

    return (
        <LanguageSelectorPane theme={theme} context={context}>
            <Space wrap>
                <Select
                    defaultValue={value}
                    style={{
                        width: 60,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'EN',
                            label: 'EN',
                        },
                        {
                            value: 'JA',
                            label: 'JA',
                        }
                    ]}
                />
            </Space>
        </LanguageSelectorPane>
    );
};