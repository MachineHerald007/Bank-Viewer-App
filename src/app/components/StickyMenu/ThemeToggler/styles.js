import { Pane } from 'evergreen-ui';
import { Switch } from "antd";
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalThemeToggleSwitch = createGlobalStyle`
    ${props => {
        const theme = props.theme || {};
        const mode = theme.mode || 'light';
        const context = props.context || '';
        return `
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-switch .ant-switch-handle::before {
                position: absolute !important;
                top: 0 !important;
                inset-inline-end: 0 !important;
                bottom: 6px !important;
                inset-inline-start: 0 !important;
                background-color: #fff !important;
                border-radius: 2px !important;
                box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2) !important;
                transition: all 0.2s ease-in-out !important;
                content: "" !important;
            }

            &:where(.css-zg0ahe).ant-switch .ant-switch-handle::before {
                position: absolute !important;
                top: 0 !important;
                inset-inline-end: 0 !important;
                bottom: 6px !important;
                inset-inline-start: 0 !important;
                background-color: #fff !important;
                border-radius: 2px !important;
                box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2) !important;
                transition: all 0.2s ease-in-out !important;
                content: "" !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-switch .ant-switch-handle::before {
                position: absolute !important;
                top: 0px !important;
                inset-inline-end: 0 !important;
                bottom: 8px !important;
                inset-inline-start: 0 !important;
                background-color: #fff !important;
                border-radius: 2px !important;
                box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2) !important;
                transition: all 0.2s ease-in-out !important;
                content: "" !important;
                height: 24px !important;
            }

            &:where(.css-zg0ahe).ant-switch .ant-switch-handle::before {
                position: absolute !important;
                top: 0px !important;
                inset-inline-end: 0 !important;
                bottom: 8px !important;
                inset-inline-start: 0 !important;
                background-color: #fff !important;
                border-radius: 2px !important;
                box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2) !important;
                transition: all 0.2s ease-in-out !important;
                content: "" !important;
                height: 24px !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-switch.ant-switch-checked {
                background: ${mode === 'light' ? `${context === "sidepanel-page" ? "darkturquoise" : "#1677ff"}` : '#1c1c1c'} !important;

                &:hover {
                    opacity: 0.9;
                }
            }

            &:where(.css-zg0ahe).ant-switch.ant-switch-checked {
                background: ${mode === 'light' ? `${context === "sidepanel-page" ? "darkturquoise" : "#1677ff"}` : '#1c1c1c'} !important;

                &:hover {
                    opacity: 0.9;
                }
            }

            .cfYqnw {
                
            }
        `;
    }}
`;

export const ThemeToggleSwitch = styled(Switch)`
    ${props => {
        const theme = props.theme || {};
        const mode = theme.mode || 'light';
        const context = props.context || '';
        return `
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: 0 !important;
            color: #1677ff !important;
            font-size: 14px !important;
            line-height: 22px !important;
            list-style: none !important;
            position: relative !important;
            top: 1px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
            display: inline-block !important;
            min-width: 44px !important;
            height: 28px !important;
            vertical-align: middle !important;
            background: ${mode === 'light' ? 'rgba(0, 0, 0, 0.25)' : 'rgb(0 0 0 / 25%)'} !important;
            border: 0 !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            transition: all 0.2s !important;
            user-select: none !important; 
            top: ${context === "sidepanel-page" ? "1px" : "0px"} !important;
        `;
    }}
`;