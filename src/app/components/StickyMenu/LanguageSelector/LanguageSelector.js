import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export function LanguageSelector({ context }) {
    const [value, setValue] = React.useState("EN");
    const { theme } = useTheme();

    useEffect(() => {
        console.log("context: ", context);
    }, [context])

    return (
        <LanguageSelectorPane theme={theme} context={context}>
            <Space wrap>
                <Select
                    defaultValue="EN"
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