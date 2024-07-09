import { invoke } from "@tauri-apps/api/tauri";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Pane } from 'evergreen-ui';
import { CharactersSection } from "./CharactersSection";
import { CharacterProfileCard } from "./CharacterProfileCard";
import { CharacterInventory } from "./CharacterInventory";
import { CharacterBank } from "./CharacterBank";
import { AppContext } from "@/app/page";

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

export const CharacterContext = createContext();

export function CharacterViewer({ characters }) {
    const { dashboardState } = useContext(AppContext);
    const [selectedCharacter, setSelectedCharacter] = useState(selected_character);

    const saveSelectedCharacter = (character) => {
        setSelectedCharacter({
            id: character.id,
            name: character.name,
            class: character.class,
            section_id: character.section_id,
            level: character.level,
            slot: character.slot,
            image: character.image,
            inventory: character.inventory,
            bank: character.bank,
            mode: character.mode
        });

        invoke("save_selected_character", {
            selectedCharacterId: character.id
        })
        .then(res => {})
        .catch(err => console.log(err))
    };

    useEffect(() => {
        if (dashboardState.selected_character_id && characters.length > 0) {
            const selected = characters.find(character => character.id === dashboardState.selected_character_id);
            if (selected) {
                setSelectedCharacter(selected);
            } else {
                setSelectedCharacter(selected_character);
            }
        } else {
            setSelectedCharacter(selected_character);
        }
    }, [characters, dashboardState.selected_character_id]);

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
    );
}