import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect } from "react";
import { Image, Upload, message } from 'antd';
import { 
    TextWrapper,
    UploadWrapper,
    UploadTextPane,
    UploadPlusOutlined,
    UploadContainerPane,
    GlobalUploadWrapper,
    GlobalUploadContainerPane,
    GlobalInputWrapper
} from "../styles"; 
import ImgCrop from 'antd-img-crop';
import { ThemeProvider } from "styled-components";
import { useTheme } from "@/app/components/Theme/Theme";

const DefaultPicture = {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://cdn-icons-png.freepik.com/512/8742/8742495.png?ga=GA1.1.1100743220.1717043240',
};

const getBase64 = (file) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
});

const base64ToUint8Array = (base64) => {
    const binaryString = window.atob(base64.split(',')[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
};

const beforeUpload = (file) => {
    const isPNG = file.type === 'image/png';
    const isJPG = file.type === "image/jpeg";
    
    if (!isPNG && !isJPG) {
        message.error(`${file.name} is not a png or jpg file`);
    }

    return isPNG || isJPG || Upload.LIST_IGNORE;
};

const saveUserImage = async (e) => {    
    try {
        const result = await invoke('save_user_img', { file: e.file });
        onSuccess(e.file)
           
        return result;
    } catch (error) {
        console.log("Error parsing file: ", error);
        e.onError(error);
    }
}

export const ProfilePictureUpload = ({ onChange }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([DefaultPicture]);
    const { theme } = useTheme();

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = async ({ file, fileList }) => {
        if (!fileList.length) {
            setFileList([DefaultPicture]);
            onChange("");
            return;
        }

        setFileList([file]);

        if (file.status === "done") {
            const base64 = await getBase64(file.originFileObj);
            const uint8Array = base64ToUint8Array(base64);
            onChange(Array.from(uint8Array));
        }
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
        <ThemeProvider theme={{ mode: theme }}>
            <>
            <GlobalUploadContainerPane />
            <GlobalUploadWrapper />
            <GlobalInputWrapper />
            <UploadContainerPane>
                <ImgCrop rotationSlider cropShape="round">
                    <UploadWrapper
                        accept=".png,.jpg"
                        beforeUpload={beforeUpload}
                        listType="picture-circle"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {uploadButton}
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
            </>
        </ThemeProvider>
    );
};