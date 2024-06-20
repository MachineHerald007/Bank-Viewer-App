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
import { invoke } from "@tauri-apps/api/tauri";

export function UserProfileSection({ theme }) {
    const [account, setAccount] = useState([]);
    const [profilePicture, setProfilePicture] = useState("");
    const [profileName, setProfileName] = useState("");
    const [discordUsername, setDiscordUsername] = useState("");

    const handleProfilePictureChange = (picture) => {
        setProfilePicture(picture);
    };

    const handleCreateUser = () => {
        const userData = {
            profile_name: profileName,
            discord_username: discordUsername,
            profile_picture: profilePicture
        };
        
        invoke("create_user", {
            user: userData
        })    
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };
    
    return (
        <Pane>
            <Pane theme={theme} width={270}>
                <Pane>
                    <ProfilePictureUpload onChange={handleProfilePictureChange} />
                </Pane>
                <Pane marginBottom={12}>
                    <InputWrapper 
                        value={profileName}
                        onChange={e => setProfileName(e.target.value)}
                        placeholder="Profile Name" 
                        prefix={<UserOutlined style={{ marginLeft: "4px" }} />} 
                    />    
                </Pane>
                <Pane marginBottom={12}>
                    <InputWrapper 
                        value={discordUsername}
                        onChange={e => setDiscordUsername(e.target.value)}
                        placeholder="Discord Username" 
                        prefix={<DiscordOutlined style={{ marginLeft: "4px" }} />} 
                    />
                </Pane>
                <Pane textAlign="right">
                    <CreateUserButton onClick={handleCreateUser} />
                </Pane>
            </Pane>
        </Pane>
    );
}