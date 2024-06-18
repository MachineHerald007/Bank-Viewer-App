import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect } from "react";
import { Image, Upload, message } from 'antd';
import { 
    TextWrapper,
    UploadWrapper,
    UploadTextPane,
    UploadPlusOutlined,
    UploadContainerPane,
} from "../styles"; 
import ImgCrop from 'antd-img-crop';

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

const beforeUpload = (file) => {
    const isPNG = file.type === 'image/png';
    const isJPG = file.type === "image/jpeg";
    
    if (!isPNG && !isJPG) {
        message.error(`${file.name} is not a png or jpg file`);
    }

    return isPNG || isJPG || Upload.LIST_IGNORE;
};

const saveUserImage = async (e) => {
    console.log(e)
    
    try {
        const result = await invoke('save_user_img', { file: e.file });
        onSuccess(e.file)
        
        return result;
    } catch (error) {
        console.log("Error parsing file: ", error)
        
        e.onError(error)
    }
}

export const ProfilePictureUpload = () => {
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

    const handleChange = async ({ file, fileList }) => {
        if (!fileList.length) {
            setFileList([DefaultPicture])
            return
        }
        console.log("ON CHANGE, FILE: ", file)
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
    );
};