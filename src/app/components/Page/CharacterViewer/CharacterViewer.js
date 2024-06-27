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
    name: "",
    class: "",
    sec_id: "",
    level: null,
    slot: null,
    img: "",
    inventory: "",
    bank: ""
};

// create a function that queries tauri backend via invoke command to save 
// selected charater. on startup, query db to check if dashboard state for selected char
export const CharacterContext = createContext()

export function CharacterViewer({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(selected_character);

    function saveSelectedCharacter(character) {
        console.log("character: ", character)
        setSelectedCharacter({
            name: character.name,
            class: character.class,
            sec_id: character.sec_id,
            level: character.level,
            slot: character.slot,
            img: character.img,
            inventory: character.inventory,
            bank: character.bank
        })
    };

    useEffect(() => {
        // console.log("CHARACTER")
    }, [])

    return (
        <CharacterContext.Provider value={{ selectedCharacter, saveSelectedCharacter }}>
            <Pane>
                <CharactersSection characters={characters} />
                <Pane marginBottom={24}>
                    <CharacterProfileCard />
                </Pane>
                <CharacterInventory display="inline-block" character={selectedCharacter} inventory={selectedCharacter.inventory} />
                <CharacterBank display="inline-block" character={selectedCharacter} bank={selectedCharacter.bank} />
            </Pane>
        </CharacterContext.Provider>
    )
}