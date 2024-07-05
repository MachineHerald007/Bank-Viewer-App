import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import { LanguageSelectorPane } from './styles';
import { useTheme } from '../../Theme/Theme';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export function LanguageSelector() {
    const [value, setValue] = React.useState("EN");
    const { theme } = useTheme();
    return (
        <LanguageSelectorPane theme={theme}>
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