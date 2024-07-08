import React, {useEffect, useContext} from 'react';
import { AppContext } from '@/app/page';
import { Pane, Avatar, Heading } from 'evergreen-ui';
import { ProfileHeading } from './styles';
import { useTheme } from '../Theme/Theme';

export const ProfilePicture = ({ user }) => {
    if (!user || !user.profile_picture) {
        return null;
    }

    let fileSignature = user.profile_picture.slice(0, 8);
    let fileType;

    if (fileSignature[0] === 0xFF && fileSignature[1] === 0xD8) {
        fileType = 'image/jpeg';
    }
    
    if (fileSignature[0] === 0x89 && fileSignature[1] === 0x50 && fileSignature[2] === 0x4E && fileSignature[3] === 0x47) {
        fileType = 'image/png';
    } 

    let uint8Array = new Uint8Array(user.profile_picture);
    let binaryString = '';

    for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }

    let base64String = btoa(binaryString);
    let profile_pic = `data:${fileType};base64,${base64String}`;

    return (
        <Avatar
            src={profile_pic}
            name={user.profile_name}
            size={48}
            margin={24}
            marginLeft={8}
        />
    )
}

export function ProfileSection({ user, account }) {
    const { loggedInAccount } = useContext(AppContext);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("LOGGED IN ACCOUNT: ", loggedInAccount)
        console.log("PROFILE SECTION: ", account.account_name)
    }, [])

    return (
        <Pane display="flex">
            <ProfilePicture user={user} />
            <ProfileHeading
                is="h3"
                marginTop={36}
                color="#474d66"
                theme={theme}
            >
                {account.account_name}
            </ProfileHeading>
        </Pane>
    )
}