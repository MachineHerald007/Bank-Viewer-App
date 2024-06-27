import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "../CharacterViewer/CharacterViewer";
import {
    UserIcon,
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui';
import { CharacterProfileCardPane, ProfileCardText } from "./styles";
import { useTheme } from "../../Theme/Theme";

export function CharacterProfileCard({ character }) {
    const { selectedCharacter } = useContext(CharacterContext);
    const { theme } = useTheme();
    return (
        <CharacterProfileCardPane theme={theme}>
            <Avatar
                position="relative"
                top={22}
                size={128}
                src={selectedCharacter.img}
                name={selectedCharacter.name}
            />
            <Pane
                display="inline-block"
                marginLeft={24}
            >
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>NAME:</ProfileCardText>
                    {selectedCharacter.name}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>LEVEL:</ProfileCardText>
                    {selectedCharacter.level}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>CLASS:</ProfileCardText>
                    {selectedCharacter.class}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>SECTION ID:</ProfileCardText>
                    {selectedCharacter.sec_id}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>SLOT:</ProfileCardText>
                    {selectedCharacter.slot}
                </ProfileCardText>
            </Pane>
        </CharacterProfileCardPane>
    )
}