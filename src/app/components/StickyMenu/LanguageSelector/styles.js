import { Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const LanguageSelectorPane = styled(Pane)`
    display: inline-block;
    position: relative;
    top: 2px;
    right: 8px;

    :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
        border: 1px solid ${({ theme, context }) => (theme === "light" ? (context === "sidepanel-page" ? "#193337": "#c1c4d6") : "#141313")} !important;
        color: ${({ theme, context }) => (theme === "light" ? (context === "sidepanel-page" ? "#efefef": "#52586d") : "#fff")} !important;
        background: ${({ theme, context }) => (theme === "light" ? (context === "sidepanel-page" ? "#367f87": "#fff") : "#272727")} !important;
    }

    :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
        border-color:  ${({ theme, context }) => (theme === "light" ? (context === "sidepanel-page" ? "#000000": "#8f95b2") : "#000000")} !important;
        background: ${({ theme, context }) => (theme === "light" ? (context === "sidepanel-page" ? "#0f7681": "#FAFBFF") : "#1c1c1c")} !important;
    }

    .ant-select-arrow {
        color: ${({ theme, context}) => (theme === "light" ? (context === "sidepanel-page" ? "#efefef": "#52586d") : "#fff")} !important;
    }
`;