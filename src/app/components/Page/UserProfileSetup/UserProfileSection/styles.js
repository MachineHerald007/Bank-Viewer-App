import styled, { createGlobalStyle } from "styled-components";
import { Upload, Input } from 'antd';
import { Text, Pane, } from "evergreen-ui";
import { PlusOutlined } from '@ant-design/icons';

export const GlobalUploadContainerPane = createGlobalStyle`
    ${props => {
        const theme = props.theme || {};
        const mode = theme.mode || 'light';
        return `
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item {
                border: 2px solid ${mode === 'light' ? '#d9d9d9' : '#4a4a4a'} !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select,
            &:where(.css-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select,
            &:where(.css-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select {
                border: 2px dashed ${mode === 'light' ? '#d9d9d9' : '#4a4a4a'} !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover, 
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover,
            &:where(.css-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover, 
            &:where(.css-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover {
                border-color: ${mode === 'light' ? '#00cde3' : '#00ff95'} !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item-error,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-error,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-error,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item-error,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-error,
            &:where(.css-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-error {
                border-color: #ff4d4f !important;
            }
        `;
    }}
`;

export const UploadContainerPane = styled(Pane)`
    padding: 20px !important;
    margin-bottom: 14px !important;
`;

export const GlobalUploadWrapper = createGlobalStyle`
    .ant-upload {
        button {
            &:hover {
                cursor: pointer !important;
            }
        }

        &.ant-upload-select {
            margin-left: 10px !important;
        }
    }
`;

export const UploadWrapper = styled(Upload)`    
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")};
    font-weight: 600;
`;

export const GlobalInputWrapper = createGlobalStyle`
    ${props => {
        const theme = props.theme || {};
        const mode = theme.mode || 'light';
        return `
            // Input text
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper > input.ant-input,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper > textarea.ant-input,
            &:where(.css-zg0ahe).ant-input-affix-wrapper > input.ant-input,
            &:where(.css-zg0ahe).ant-input-affix-wrapper > textarea.ant-input {
                font-weight: 600 !important;
            }

            &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):hover,
            &:where(.css-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):hover,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus,
            &:where(.css-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus,
            &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus-within,
            &:where(.css-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus-within {
                background: ${mode === "light" ? "#FAFBFF" : "#282A2E"} !important;
                border-color: ${mode === "light" ? "#959595" : "#898989"} !important;
                box-shadow: none !important;
            }

            .ant-input {
                margin-left: 6px !important;
                color: ${mode === "light" ? "#474d66" : "#ede5e5"} !important;
            }
        `;
    }}
`;

export const InputWrapper = styled(Input)`
    background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")} !important;
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#bdbbbb")} !important;
    padding: 10px !important;
    border-color: ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1a1a1a")} !important;
    border-radius: 4px !important;

    ::placeholder {
        color: ${({ theme }) => (theme.mode === "light" ? "#c0c4c7" : "#414141")} !important;
    }
`;

export const UploadPlusOutlined = styled(PlusOutlined)`
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
`;

export const UploadTextPane = styled(Pane)`
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
    margin-top: 8px;
    font-weight: 600;
`;

export const TextWrapper = styled(Text)`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
`;