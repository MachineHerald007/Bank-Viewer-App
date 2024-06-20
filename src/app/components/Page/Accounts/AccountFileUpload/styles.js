import styled from "styled-components";
import { Pane, FileCard, FileUploader } from 'evergreen-ui';

export const AccountPane = styled(Pane)`
    label, p {
        color: ${({ theme }) => (theme.mode === 'light' ? '#474d66' : '#f3f3f3')} !important;
        font-weight: 600;
    }

    label {
        font-size: 16px;
    }

    #undefined__description {
        font-size: 13px;
    }

    [data-state="dragging"] {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#EBF0FF' : '#1f2023')};
        border-color: ${({ theme }) => (theme.mode === 'light' ? '#3366FF' : '#474d66')};
    }

    .ub-mt_16px {
        max-height: 400px !important;
        overflow: auto !important;
        scrollbar-width: thin !important;
        padding: 8px;   
    }
`;

export const AccountFileUploader = styled(FileUploader)`
    background-color: ${({ theme }) => (theme.mode === 'light' ? '#FAFBFF' : '#282A2E')};
    border-color: ${({ theme }) => (theme.mode === 'light' ? '#d8dae5' : '#474d66')};
    
    &:hover {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#F4F6FA' : '#1f2023')} !important;
        border-color: ${({ theme }) => (theme.mode === 'light' ? '#8f95b2' : '#35394b')} !important;

        .ub-color_5C85FF {
            color: ${({ theme }) => (theme.mode === 'light' ? '#3366FF' : '#6ff3e2')} !important;
        }
        .ub-color_696f8c {
            color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')} !important;
        }
    }

    &:focus {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => (theme.mode === 'light' ? '#D6E0FF' : '#282A2E')} !important;
        border-color: ${({ theme }) => (theme.mode === 'light' ? '#ADC2FF' : '#282A2E')} !important;
    }

    span {
        font-weight: 600;
    }

    .ub-color_5C85FF {
        color: ${({ theme }) => (theme.mode === 'light' ? '#3366FF' : '#6ff3e2')};
    }

    .ub-color_696f8c {
        color: ${({ theme }) => (theme.mode === 'light' ? '#474d66' : '#fff')};
    }

    .ub-bg-clr_edeff5 {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#edeff5' : '#202329')};
    }
`;

export const AccountFileCard = styled(FileCard)`
    border-color: ${({ theme }) => (theme.mode === 'light' ? '#d8dae5' : '#161616')} !important;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#F4F6FA' : '#1f2023')} !important;
    }

    // trash-icon
    .ub-fill_696f8c {
        fill: ${({ theme }) => (theme.mode === 'light' ? '#696f8c' : '#f3f3f3')};
    }

    // trash icon container
    .ub-bg-clr_F4F5F9_vmhk7m:not([disabled]):hover {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#dde0e7' : '#dde0e7')} !important;

        &:hover {
            // trash-icon
            .ub-fill_696f8c {
                fill: ${({ theme }) => (theme.mode === 'light' ? '#696f8c' : '#696f8c')};
            }
        }
    }

    .ub-bg-clr_FDF4F4_662z46[aria-invalid='true'] {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#FAFBFF' : '#282A2E')} !important;
        border-color: #D14343 !important;
    }
`;

export const AccountFileCardError = styled(FileCard)`
    border-color: #D14343 !important;
    background-color: ${({ theme }) => (theme.mode === 'light' ? '#FDF4F4' : '#e55353')} !important;

    label, p {
        color: ${({ theme }) => (theme.mode === 'light' ? '#A73636' : '#fff')} !important;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#f7dede' : '#ff0000')} !important;
    }

    // danger icon
    .ub-fill_D14343 {
        fill: ${({ theme }) => (theme.mode === 'light' ? '#D14343' : '#fff')};
    }

    // trash-icon
    .ub-fill_696f8c {
        fill: ${({ theme }) => (theme.mode === 'light' ? '#A73636' : '#fff')};
    }

    // trash icon container
    .ub-bg-clr_F4F5F9_vmhk7m:not([disabled]):hover {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#D14343' : '#FFF')} !important;

        &:hover {
            // trash-icon
            .ub-fill_696f8c {
                fill: ${({ theme }) => (theme.mode === 'light' ? '#e3e3e3' : '#ff0000')}
            }
        }
    }

    .ub-bg-clr_FDF4F4_662z46[aria-invalid='true'] {
        background-color: ${({ theme }) => (theme.mode === 'light' ? '#FAFBFF' : '#282A2E')} !important;
        border-color: #D14343 !important;
    }
`;

export const CenteredPane = styled(Pane)`
    height: fit-content;
    width: fit-content;
    max-width: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    background: ${({ theme }) => (theme.mode === 'light' ? '#FFFFFF' : '#24252B')};
    color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};

    .ub-color_474d66 {
        color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};
    }
`;