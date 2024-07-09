import React, { useState, useEffect } from "react";
import {
    UserIcon,
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui';
import { CharacterProfileCardPane, ProfileCardText } from "./styles";
import { loadCharacterImage } from "./LoadImage";
import { useTheme } from "../../Theme/Theme";

export function CharacterProfileCard({ character }) {
    const { theme } = useTheme();

    useEffect(() => {}, [character])
    
    return (
        <CharacterProfileCardPane theme={theme}>
            <Avatar
                key={character.id}
                position="relative"
                top={22}
                size={128}
                src={loadCharacterImage(character)}
                name={character.name}
            />
            <Pane
                display="inline-block"
                marginLeft={24}
            >
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>NAME:</ProfileCardText>
                    {character.name}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>LEVEL:</ProfileCardText>
                    {character.level}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>CLASS:</ProfileCardText>
                    {character.class}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>SECTION ID:</ProfileCardText>
                    {character.section_id}
                </ProfileCardText>
                <ProfileCardText theme={theme} display="block" fontSize={16}>
                    <ProfileCardText theme={theme} fontWeight={600} marginRight={8}>SLOT:</ProfileCardText>
                    {character.slot}
                </ProfileCardText>
            </Pane>
        </CharacterProfileCardPane>
    )
}