import React, { useState, useEffect } from "react"
import { Avatar, AddIcon, Button, PlusIcon, Text, Pane } from "evergreen-ui"
import { PlusOutlined, UserOutlined, DiscordOutlined, PictureOutlined } from '@ant-design/icons';
import { Image, Upload, Input } from 'antd';
import ImgCrop from 'antd-img-crop';
import { CreateUserButton } from "./CreateUserButton"
import styled, { ThemeProvider } from "styled-components"
import { useTheme } from "../../Theme/Theme"

const UploadContainerPane = styled(Pane)`
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
        border-color: #3de9d3;
    }
`;

const UploadWrapper = styled(Upload)`    
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

const InputWrapper = styled(Input)`
    background: ${({ theme }) => (theme.mode === "light" ? "#FAFBFF" : "#282A2E")};
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#bdbbbb")};
    padding: 10px;
    border-color: ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1a1a1a")};

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

const UploadPlusOutlined = styled(PlusOutlined)`
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
`;

const UploadTextPane = styled(Pane)`
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
    margin-top: 8px;
    font-weight: 600;
`;

const TextWrapper = styled(Text)`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => (theme.mode === "light" ? "#474d66" : "#f3f3f3")} !important;
`;

const DefaultPicture = {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://cdn-icons-png.freepik.com/512/8742/8742495.png?ga=GA1.1.1100743220.1717043240',
};

const ProfilePictureUpload = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([DefaultPicture]);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({ file, fileList }) => {
        if (!fileList.length) {
            setFileList([DefaultPicture])
            return
        }
        setFileList([file])
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <UploadPlusOutlined />
            <UploadTextPane>Upload</UploadTextPane>
        </button>
    );

    return (
        <UploadContainerPane>
            <ImgCrop rotationSlider cropShape="round">
                <UploadWrapper
                    accept=".png,.jpg"
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-circle"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </UploadWrapper>
            </ImgCrop>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </UploadContainerPane>
    );
};

export function AccountProfileSetup({ theme }) {
    const [account, setAccount] = useState([])

    return (
        <Pane>
            <Pane textAlign="center" marginBottom={32}>
                {/* <TextWrapper>Create User</TextWrapper> */}
            </Pane>
            <Pane theme={theme} width={270}>
                <Pane>
                    <ProfilePictureUpload />
                </Pane>

                <Pane marginBottom={12}>
                    <InputWrapper placeholder="Profile Name" prefix={<UserOutlined style={{ marginLeft: "4px" }} />}/>    
                </Pane>
                
                <Pane marginBottom={12}>
                    <InputWrapper placeholder="Discord Username" prefix={<DiscordOutlined style={{ marginLeft: "4px" }} />}/>
                </Pane>

                <Pane textAlign="right">
                    <CreateUserButton />
                </Pane>
            </Pane>
        </Pane>
    )
}