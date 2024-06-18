import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect } from "react";
import { Pane } from "evergreen-ui";
import { UserOutlined, DiscordOutlined } from '@ant-design/icons';
import { ProfilePictureUpload } from "./ProfilePictureUpload/ProfilePictureUpload";
import { 
    TextWrapper,
    InputWrapper
} from "./styles";
import { CreateUserButton } from "./CreateUserButton/CreateUserButton";
import { useTheme } from "../../../Theme/Theme";

export function AccountProfileSetup({ theme }) {
    const [account, setAccount] = useState([])

    return (
        <Pane>
            <Pane textAlign="center" marginBottom={32}>
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