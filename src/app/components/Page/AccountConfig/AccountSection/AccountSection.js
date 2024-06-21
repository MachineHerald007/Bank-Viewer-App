import React, { useState } from "react"
import { PlusOutlined } from "@ant-design/icons";
import { Pane } from "evergreen-ui";
import { Accounts } from "./Accounts";
import { useTheme } from "../../../Theme/Theme";
import { ThemeToggler } from "../../../Theme/ThemeToggler";
import { AccountFileUpload } from "../AccountFileUpload/AccountFileUpload";

export const AccountSection = ({ accounts }) => {
    const [showAccountFileUpload, setShowAccountFileUpload] = useState(false);
    const { theme } = useTheme()

    const handleAddAccountClick = () => {
        setShowAccountFileUpload(true);
    };

    const handleUploadComplete = () => {
        setShowAccountFileUpload(false);
    };

    return (
        <Pane>
            {showAccountFileUpload ? (
                <AccountFileUpload onComplete={handleUploadComplete} />
            ) : (
                <Accounts onAddAccountClick={handleAddAccountClick} />
            )}
        </Pane>
    )
}