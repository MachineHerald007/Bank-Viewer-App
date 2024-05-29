import React, { useState, useEffect } from "react"
import {
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'

export function CharacterProfileCard({ character }) {
    return (
        <Pane
            width={374}
            height={220}
            padding={24}
            marginTop={24}
            marginRight={24}
            borderRadius={4}
            border="1px solid #E6E8F0"
            backgroundColor="#FFFFFF"
            display="inline-block"
            boxShadow="rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px"
        >
            <Avatar
                position="relative"
                top={22}
                size={128}
                src={character.img}
                name={character.name}
            />
            <Pane
                display="inline-block"
                marginLeft={24}
            >
                <Text display="block" fontSize={16}><Text fontWeight={600} marginRight={8}>NAME:</Text> {character.name}</Text>
                <Text display="block" fontSize={16}><Text fontWeight={600} marginRight={8}>LEVEL:</Text> {character.level}</Text>
                <Text display="block" fontSize={16}><Text fontWeight={600} marginRight={8}>CLASS:</Text> {character.class}</Text>
                <Text display="block" fontSize={16}><Text fontWeight={600} marginRight={8}>SECTION ID:</Text> {character.sec_id}</Text>
                <Text display="block" fontSize={16}><Text fontWeight={600} marginRight={8}>SLOT:</Text> {character.slot}</Text>
            </Pane>
        </Pane>
    )
}