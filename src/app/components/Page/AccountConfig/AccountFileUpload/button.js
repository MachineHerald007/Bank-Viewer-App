import React from 'react';
import { Button, CircleArrowLeftIcon, FloppyDiskIcon } from "evergreen-ui";
import { useTheme } from '@/app/components/Theme/Theme';
import styled from 'styled-components';

const StyledUploadButton = styled(Button)`
    color: ${({ theme }) => (theme === "light" ? "#101840" : "#efefef")} !important;
    padding: 20px 24px;
    margin-left: 12px;
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#21e795")};
    border-color: ${({ theme }) => (theme === "light" ? "#c1c4d6" : "#000000")};
    
    &:active {
        background: ${({ theme }) => (theme === "light" ? "#fff" : "#21e795")};
    }

    &:focus {
        box-shadow: none !important;
    }

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#FAFBFF" : "#20c17e")} !important;
        border-color: ${({ theme }) => (theme === "light" ? "#8f95b2" : "#000000")} !important;
        text-decoration: none !important;
        transition-duration: 0.1s;
    }
`;

const StyledBackButton = styled(Button)`
    color: ${({ theme }) => (theme === "light" ? "#101840" : "#efefef")} !important;
    padding: 20px 24px;
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#ff3939")};
    border-color: ${({ theme }) => (theme === "light" ? "#c1c4d6" : "#000000")};

    &:active {
        background: ${({ theme }) => (theme === "light" ? "#fff" : "#ff3939")} !important;
    }

    &:focus {
        box-shadow: none !important;
    }

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#fff" : "#dd3333")} !important;
        border-color: ${({ theme }) => (theme === "light" ? "#8f95b2" : "#000000")} !important;
        text-decoration: none !important;
        transition-duration: 0.1s;
    }
`;

export const UploadButton = ({ handleUpload }) => {
    const { theme } = useTheme();
    return <StyledUploadButton theme={theme} onClick={handleUpload} iconBefore={FloppyDiskIcon}>SAVE</StyledUploadButton>;
};

export const BackButton = ({ onComplete }) => {
    const { theme } = useTheme();
    return <StyledBackButton theme={theme} onClick={onComplete} iconBefore={CircleArrowLeftIcon}>BACK</StyledBackButton>;
};