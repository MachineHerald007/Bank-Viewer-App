import React, { createContext, useContext, useState, useEffect } from "react";
import {
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui';
import { CharactersSection } from "./CharactersSection";
import { CharacterProfileCard } from "./CharacterProfileCard";
import { CharacterProfileAnalytics } from "./CharacterProfileAnalytics";
import { CharacterInventory } from "./CharacterInventory";
import { CharacterBank } from "./CharacterBank";
import { useTheme } from "../../Theme/Theme";

const selected_character = {
    id: "",
    name: "",
    class: "",
    section_id: "",
    level: "",
    slot: "",
    image: [],
    inventory: [],
    bank: []
};

export const CharacterContext = createContext()

export function CharacterViewer({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(selected_character);
    const saveSelectedCharacter = (character) => {
        console.log("selected character: ", character);
        setSelectedCharacter({
            id: character.id,
            name: character.name,
            class: character.class,
            section_id: character.section_id,
            level: character.level,
            slot: character.slot,
            image: character.image,
            inventory: character.inventory,
            bank: character.bank
        });
    };

    useEffect(() => {
        // console.log("CHARACTER")
    }, [characters])

    return (
        <CharacterContext.Provider value={{ selectedCharacter, saveSelectedCharacter }}>
            <Pane>
                <CharactersSection characters={characters} />
                <Pane marginBottom={24}>
                    <CharacterProfileCard character={selectedCharacter} />
                </Pane>
                <CharacterInventory display="inline-block" character={selectedCharacter} />
                <CharacterBank display="inline-block" character={selectedCharacter} />
            </Pane>
        </CharacterContext.Provider>
    )
}