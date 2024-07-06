import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { Pane, Alert, majorScale } from 'evergreen-ui';
import { UploadButton, BackButton } from "./button";
import { AppContext } from "@/app/page";
import { AccountPane, AccountFileUploader, AccountFileCard, AccountFileCardError, CenteredPane } from "./styles";
import { invoke } from "@tauri-apps/api/tauri";

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

export function AccountFileUpload({ theme, onComplete }) {
    const { dashboardState } = useContext(AppContext);
    const acceptedMimeTypes = [MimeType.psobank, MimeType.psoclassicbank, MimeType.psochar];
    const maxFiles = 32;
    const maxSizeInBytes = 50 * 1024 ** 2; // 50 MB
    const [files, setFiles] = useState([]);
    const [parsedFiles, setParsedFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);

    const values = useMemo(() => [...files, ...fileRejections.map(fileRejection => fileRejection.file)], [files, fileRejections]);

    const parseFiles = useCallback(async (files) => {
        try {
            const response = await invoke("parse_files", {
                files: files,
                lang: dashboardState.lang
            });
            return response;
        } catch (error) {
            console.log("Error parsing file: ", error);
        }
    }, [dashboardState.lang]);

    const parseFilename = useCallback((parsedFiles) => {
        const lang = parsedFiles.files[0].data.lang;
        const acc_type = parsedFiles.files[0].data.bank.length > 0 ? "NORMAL" : "CLASSIC";
        const acc_info = parsedFiles.files[0].filename.split(".")[0].split("_");
        const result = [];
        let slotNumber = null;

        for (let i = 0; i < acc_info.length; i++) {
            if (acc_info[i].startsWith('Slot')) {
                slotNumber = acc_info[i].split(' ')[1];
                break;
            }
            result.push(acc_info[i]);
        }

        return { info: result, slot: slotNumber, type: acc_type };
    }, []);

    const handleUpload = useCallback(async () => {
        try {
            const account = parseFilename(parsedFiles);
            await invoke("create_account", {
                account: {
                    account_name: account.info[1].toLowerCase(),
                    guild_card: Number(account.info[2]),
                    account_type: account.type,
                    server: account.info[0],
                    lang: dashboardState.lang
                },
                files: parsedFiles.files
            });
            onComplete();
        } catch (error) {
            console.log("Error uploading file(s): ", error);
        }
    }, [parseFilename, parsedFiles, dashboardState.lang, onComplete]);

    const handleRemove = useCallback(
        (file) => {
            const updatedFiles = files.filter(existingFile => existingFile !== file);
            const updatedFileRejections = fileRejections.filter(fileRejection => fileRejection.file !== file);

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

        const seenFileNames = new Set();

        allFiles.forEach(file => {
            if (seenFileNames.has(file.name)) {
                rejected.push({
                    file,
                    reason: RejectionReason.DuplicateFile
                });
            } else if (accepted.length < maxFiles) {
                if (acceptedMimeTypes.includes(file.type) && file.size <= maxSizeInBytes) {
                    accepted.push(file);
                    seenFileNames.add(file.name);
                } else {
                    rejected.push({
                        file,
                        reason: !acceptedMimeTypes.includes(file.type)
                            ? RejectionReason.InvalidMimeType
                            : RejectionReason.FileTooLarge
                    });
                    seenFileNames.add(file.name);
                }
            } else {
                rejected.push({
                    file,
                    reason: RejectionReason.OverFileLimit
                });
                seenFileNames.add(file.name);
            }
        });

        return { accepted, rejected };
    };

    const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
    const fileCountError = `You can upload up to ${maxFiles} files. Please remove ${fileCountOverLimit} ${fileCountOverLimit === 1 ? 'file' : 'files'}.`;

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

        setParsedFiles(parsedFiles);
        setFiles(prevFiles => [...prevFiles, ...filesToAdd]);
        setFileRejections(prevRejections => [...prevRejections, ...newRejections]);
    }, [files, fileRejections, setFiles, setFileRejections, parseFiles]);

    useEffect(() => {
        console.log("Accepted files:", files);
        console.log("Rejected files:", fileRejections);
        console.log("Parsed files:", parsedFiles);
    }, [files, fileRejections, parsedFiles]);

    return (
        <CenteredPane>
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
                        const fileRejection = fileRejections.find(fileRejection => fileRejection.file === file);
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
            <Pane marginTop={32} textAlign="right" >
                <BackButton onComplete={onComplete} />
                <UploadButton handleUpload={handleUpload} />
            </Pane>
        </CenteredPane>
    );
}