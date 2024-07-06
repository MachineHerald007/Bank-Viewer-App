import React, { useMemo, useContext } from 'react';
import { AppContext } from '@/app/page';
import { Pane, Avatar, Heading } from 'evergreen-ui';
import { ProfileHeading } from './styles';
import { useTheme } from '../Theme/Theme';

const ProfilePicture = React.memo(({ user }) => {
    const profilePicData = useMemo(() => {
        if (!user || !user.profile_picture) {
            return null;
        }

        const fileSignature = user.profile_picture.slice(0, 8);
        let fileType;

        if (fileSignature[0] === 0xFF && fileSignature[1] === 0xD8) {
            fileType = 'image/jpeg';
        } else if (
            fileSignature[0] === 0x89 && fileSignature[1] === 0x50 && 
            fileSignature[2] === 0x4E && fileSignature[3] === 0x47
        ) {
            fileType = 'image/png';
        }

        const uint8Array = new Uint8Array(user.profile_picture);
        const binaryString = uint8Array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
        const base64String = btoa(binaryString);
        const profilePic = `data:${fileType};base64,${base64String}`;

        return profilePic;
    }, [user]);

    if (!profilePicData) {
        return null;
    }

    return (
        <Avatar
            src={profilePicData}
            name={user.profile_name}
            size={48}
            margin={24}
            marginLeft={8}
        />
    );
});

export function ProfileSection({ user, account }) {
    const { theme } = useTheme();

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
    );
}