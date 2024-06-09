import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Pane, Alert, FileCard, majorScale, FileUploader } from 'evergreen-ui';
import styled from "styled-components";

// Custom rejection reasons
const RejectionReason = {
    OverFileLimit: "OverFileLimit",
    InvalidMimeType: "InvalidMimeType",
    FileTooLarge: "FileTooLarge",
    DuplicateFile: "File already exists."
};

const MimeType = {
    psobank: "",
    psoclassicbank: "",
    psochar: ""
};

const AccountPane = styled(Pane)`
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

const AccountFileUploader = styled(FileUploader)`
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

const AccountFileCard = styled(FileCard)`
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

const AccountFileCardError = styled(FileCard)`
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

export function AccountFileUpload({ theme }) {
    const acceptedMimeTypes = [MimeType.psobank, MimeType.psoclassicbank, MimeType.psochar];
    const maxFiles = 32;
    const maxSizeInBytes = 50 * 1024 ** 2; // 50 MB
    const [files, setFiles] = useState([]);
    const [parsedData, setParsedData] = useState(null);
    const [fileRejections, setFileRejections] = useState([]);

    const values = useMemo(() => [...files, ...fileRejections.map((fileRejection) => fileRejection.file)], [
        files,
        fileRejections,
    ]);

    const parseFiles = async (files) => {
        try {
            const result = await invoke('parse_files', {
                files: files,
                lang: "EN"
            });
            return result;
        } catch (error) {
            console.log("Error parsing file: ", error)
        }
    }

    const handleRemove = useCallback(
        (file) => {
            const updatedFiles = files.filter((existingFile) => existingFile !== file);
            const updatedFileRejections = fileRejections.filter((fileRejection) => fileRejection.file !== file);

            const { accepted, rejected } = rebaseFiles(
                [...updatedFiles],
                { acceptedMimeTypes, maxFiles, maxSizeInBytes }
            );

            setFiles(accepted);
            setFileRejections([...updatedFileRejections, ...rejected]);
        },
        [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
    );

    const rebaseFiles = (allFiles, { acceptedMimeTypes, maxFiles, maxSizeInBytes }) => {
        const accepted = [];
        const rejected = [];

        // Track file names to detect duplicates
        const seenFileNames = new Set();

        allFiles.forEach((file) => {
            // Check if the file has already been seen (to handle duplicates)
            if (seenFileNames.has(file.name)) {
                rejected.push({
                    file,
                    reason: RejectionReason.DuplicateFile
                });
            } else if (accepted.length < maxFiles) {
                if (acceptedMimeTypes.includes(file.type) && file.size <= maxSizeInBytes) {
                    accepted.push(file);
                    seenFileNames.add(file.name); // Mark this file as seen
                } else {
                    rejected.push({
                        file,
                        reason: !acceptedMimeTypes.includes(file.type)
                            ? RejectionReason.InvalidMimeType
                            : RejectionReason.FileTooLarge
                    });
                    seenFileNames.add(file.name); // Mark this file as seen
                }
            } else {
                rejected.push({
                    file,
                    reason: RejectionReason.OverFileLimit
                });
                seenFileNames.add(file.name); // Mark this file as seen
            }
        });

        return { accepted, rejected };
    };

    const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
    const fileCountError = `You can upload up to ${maxFiles} files. Please remove ${fileCountOverLimit} ${
        fileCountOverLimit === 1 ? 'file' : 'files'
    }.`

    const handleAcceptedFiles = useCallback(async (acceptedFiles) => {
        const filesToAdd = [];
        const currentFileNames = new Set(files.map(file => file.name));
        const currentRejectedFileNames = new Set(fileRejections.map(rejection => rejection.file.name));
        const newRejections = [];

        for (const file of acceptedFiles) {
            if (currentFileNames.has(file.name) || currentRejectedFileNames.has(file.name)) {
                newRejections.push({
                    file,
                    reason: RejectionReason.DuplicateFile
                });
            } else {
                filesToAdd.push(file);
            }
        }

        const fileDataArray = await Promise.all(filesToAdd.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const arrayBuffer = e.target.result;
                    const binary = new Uint8Array(arrayBuffer);
                    const fileData = {
                        filename: file.name,
                        binary: Array.from(binary)
                    };
                    resolve(fileData);
                };
                reader.onerror = reject;
                reader.readAsArrayBuffer(file);
            });
        }));

        const parsedFiles = await parseFiles(fileDataArray);

        setFiles(prevFiles => [...prevFiles, ...filesToAdd]);
        setFileRejections(prevRejections => [...prevRejections, ...newRejections]);
    }, [files, fileRejections, setFiles, setFileRejections, parseFiles]);

    // Log files to console whenever they are set
    useEffect(() => {
        console.log("Accepted files:", files);
        console.log("Rejected files:", fileRejections);
    }, [files, fileRejections]);

    return (
        <AccountPane maxWidth={654}>
            <AccountFileUploader
                width={654}
                minWidth={400}
                acceptedMimeTypes={acceptedMimeTypes}
                label="Upload Files"
                description="You can upload .psobank, .psoclassicbank, .psochar file formats only."
                disabled={files.length + fileRejections.length >= maxFiles}
                maxSizeInBytes={maxSizeInBytes}
                maxFiles={maxFiles}
                onAccepted={handleAcceptedFiles}
                onRejected={(rejections) => setFileRejections(prevRejections => [...prevRejections, ...rejections])}
                renderFile={(file, index) => {
                    const { name, size, type } = file;
                    const renderFileCountError = index === 0 && fileCountOverLimit > 0;
                    const fileRejection = fileRejections.find(
                        (fileRejection) => fileRejection.file === file
                    );
                    const { reason } = fileRejection || {};

                    return (
                        <React.Fragment key={`${file.name}-${index}`}>
                            {renderFileCountError && <Alert intent="danger" marginBottom={majorScale(2)} title={fileCountError} />}
                            {
                                fileRejection != null ?
                                <AccountFileCardError 
                                    isInvalid={fileRejection != null}
                                    name={name}
                                    onRemove={() => handleRemove(file)}
                                    sizeInBytes={size}
                                    type={type}
                                    validationMessage={reason}
                                />
                                :
                                <AccountFileCard
                                    isInvalid={fileRejection != null}
                                    name={name}
                                    onRemove={() => handleRemove(file)}
                                    sizeInBytes={size}
                                    type={type}
                                    validationMessage={reason}
                                />
                            }
                        </React.Fragment>
                    )
                }}
                values={values}
            />
        </AccountPane>
    );
}
