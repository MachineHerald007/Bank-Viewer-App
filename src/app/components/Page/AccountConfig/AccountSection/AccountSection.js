import React, { useState, useEffect, useRef } from "react"
import { PlusOutlined } from "@ant-design/icons";
import { Pane } from "evergreen-ui";
import { Accounts } from "./Accounts";
import { useTheme } from "../../../Theme/Theme";
import { ThemeToggler } from "../../../Theme/ThemeToggler";
import { AccountFileUpload } from "../AccountFileUpload/AccountFileUpload";

export const AccountSection = ({ accounts }) => {
    const { theme } = useTheme()
    const [showAccountFileUpload, setShowAccountFileUpload] = useState(false);

    const handleAddAccountClick = () => {
        setShowAccountFileUpload(true);
    };

    const handleUploadComplete = () => {
        setShowAccountFileUpload(false);
    };

    useEffect(() => {

    }, [accounts])

    return (
        <Pane>
            {showAccountFileUpload ? (
                <AccountFileUpload onComplete={handleUploadComplete} />
            ) : (
                <Accounts accounts={accounts} onAddAccountClick={handleAddAccountClick} />
            )}
        </Pane>
    )
}