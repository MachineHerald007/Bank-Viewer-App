import { Pane } from 'evergreen-ui';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalLanguageSelectorPane = createGlobalStyle`
    ${props => {
        const theme = props.theme || {};
        const mode = theme.mode || 'light';
        const context = props.context || '';
        return `
            :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
                border: 1px solid ${mode === "light" ? (context === "sidepanel-page" ? "#193337": "#c1c4d6") : "#141313"} !important;
                color: ${mode === "light" ? (context === "sidepanel-page" ? "#efefef": "#52586d") : "#fff"} !important;
                background: ${mode === "light" ? (context === "sidepanel-page" ? "#367f87": "#fff") : "#1f2025"} !important;
            }

            :where(.css-zg0ahe).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
                border: 1px solid ${mode === "light" ? (context === "sidepanel-page" ? "#193337": "#c1c4d6") : "#141313"} !important;
                color: ${mode === "light" ? (context === "sidepanel-page" ? "#efefef": "#52586d") : "#fff"} !important;
                background: ${mode === "light" ? (context === "sidepanel-page" ? "#367f87": "#fff") : "#1f2025"} !important;
            }

            :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector,
            :where(.css-zg0ahe).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
                border-color: ${mode === "light" ? (context === "sidepanel-page" ? "#000000": "#8f95b2") : "#000000"} !important;
                background: ${mode === "light" ? (context === "sidepanel-page" ? "#0f7681": "#FAFBFF") : "#1c1c1c"} !important;
            }

            .ant-select-arrow {
                color: ${mode === "light" ? (context === "sidepanel-page" ? "#efefef": "#52586d") : "#fff"} !important;
            }
        `;
    }}
`;

export const LanguageSelectorPane = styled.div`
    display: inline-block;
    position: relative;
    top: 2px;
    right: 8px;
`;