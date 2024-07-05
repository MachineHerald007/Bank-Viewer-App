import { Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const LanguageSelectorPane = styled(Pane)`
    display: inline-block;
    position: relative;
    top: 2px;
    right: 8px;

    :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
        border: 1px solid ${({ theme }) => (theme === "light" ? "#c1c4d6" : "#313131")} !important;
        color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")} !important;
        background: ${({ theme }) => (theme === "light" ? "#fff" : " #181717")} !important;
    }

    :where(.css-dev-only-do-not-override-zg0ahe).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
        border-color:  ${({ theme }) => (theme === "light" ? "#8f95b2" : "#8f95b2")} !important;
    }

    .ant-select-arrow {
        color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")} !important;
    }
`;