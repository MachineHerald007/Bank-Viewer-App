import styled from "styled-components";
import { Upload, Input } from 'antd';
import { Text, Pane, } from "evergreen-ui";
import { PlusOutlined } from '@ant-design/icons';

export const UploadContainerPane = styled(Pane)`
    padding: 20px;
    margin-bottom: 14px;

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item,
    :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item,
    :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item {
        border: 2px solid #d9d9d9;
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select,
     :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select {
        border: 2px dashed #d9d9d9;
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover, 
     :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select:not(.ant-upload-disabled):hover {
        border-color: ${({ theme }) => (theme.mode === 'light' ? '#f57800' : '#00ff95')} !important;
    }

    :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture .ant-upload-list-item-error,
    :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-error,
    :where(.css-dev-only-do-not-override-zg0ahe).ant-upload-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-error {
        border-color: #ff4d4f;
    }
`;

export const UploadWrapper = styled(Upload)`    
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")};
    font-weight: 600;

    .ant-upload {
        button {
            &:hover {
                cursor: pointer;
            }
        }

        &.ant-upload-select {
            margin-left: 10px;
        }
    }
`;

export const InputWrapper = styled(Input)`
    background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")};
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#bdbbbb")};
    padding: 10px;
    border-color: ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1a1a1a")};
    border-radius: 4px;

    ::placeholder {
        color: ${({ theme }) => (theme.mode === "light" ? "#c0c4c7" : "#414141")};
    }

    // Input text
    &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper >input.ant-input,
     :where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper >textarea.ant-input {
        font-weight: 600;
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):hover {
        background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")};
        border-color: ${({ theme }) => (theme.mode === "light" ? "#959595" : "#898989")};
        box-shadow: none;
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus {
        background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")};
        border-color: ${({ theme }) => (theme.mode === "light" ? "#959595" : "#898989")};
        box-shadow: none;
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-input-affix-wrapper:not(.ant-input-disabled):focus-within {
        background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")};
        border-color: ${({ theme }) => (theme.mode === "light" ? "#959595" : "#898989")};
        box-shadow: none;
    }

    .ant-input {
        margin-left: 6px;
        color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#ede5e5")} !important;
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