import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, Avatar, Heading } from 'evergreen-ui'

export const ProfilePicture = ({ user }) => {
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
            size={40}
            margin={24}
            marginLeft={8}
        />
    )
}

export function ProfileSection({ user }) {
    return (
        <Pane display="flex">
            <ProfilePicture user={user} />
            <Heading is="h3" marginTop={32} color="#474d66">{user.profile_name}</Heading>
        </Pane>
    )
}