import React, { createContext, useState, useEffect } from "react"
import {
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'
import { CharactersSection } from "./CharactersSection"
import { CharacterProfileCard } from "./CharacterProfileCard"
import { CharacterProfileAnalytics } from "./CharacterProfileAnalytics"
import { CharacterInventory } from "./CharacterInventory"
import { CharacterBank } from "./CharacterBank"
import { inventory } from "../../inventory"
import { bank } from "../../bank"

export const CharacterContext = createContext()

const selected_character = {
    name: "",
    class: "",
    sec_id: "",
    level: null,
    slot: null,
    img: ""
}

export function CharacterViewer({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(selected_character)

    function saveSelectedCharacter(character) {
        console.log("character: ", character)
        setSelectedCharacter({
            name: character.name,
            class:character.class,
            sec_id: character.sec_id,
            level: character.level,
            slot: character.slot,
            img: character.img
        })
    }

    return (
        <CharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
            <Pane>
                <CharactersSection characters={characters} />
                <Pane marginBottom={24}>
                    <CharacterProfileCard />
                </Pane>
                <CharacterInventory display="inline-block" character={characters[0]} inventory={inventory} />
                <CharacterBank display="inline-block" character={characters[0]} bank={bank} />
            </Pane>
        </CharacterContext.Provider>
    )
}