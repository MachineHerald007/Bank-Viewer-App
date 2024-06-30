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

function getInventory(items) {
    for (let item of items) {
        for (let key in item) {
            if (typeof item[key] === 'object' && item[key] !== null) {
                console.log(`Key: ${key}, Value:`, item[key]);
            } else {
                console.log(`Key: ${key}, Value: ${item[key]}`);
            }
        }
    }
}

function getBank(items) {

}

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

export const CharacterContext = createContext()

export function CharacterViewer({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(selected_character);

    const saveSelectedCharacter = (character) => {
        console.log("z haracter: ", character);
        getInventory(character.items);
        setSelectedCharacter({
            name: character.name,
            class: character.class,
            sec_id: character.section_id,
            level: character.level,
            slot: character.slot,
            img: character.image,
            inventory: character.inventory,
            bank: character.bank
        });
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