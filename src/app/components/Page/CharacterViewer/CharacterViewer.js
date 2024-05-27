import React, { useState, useEffect } from "react"
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

export function CharacterViewer({ characters }) {
    return (
        <Pane>
            <CharactersSection characters={characters} />
            <Pane marginBottom={24}>
                <CharacterProfileCard character={characters[9]} />
            </Pane>
            <CharacterInventory display="inline-block" character={characters[0]} inventory={inventory} />
            <CharacterBank display="inline-block" character={characters[0]} bank={bank} />
        </Pane>
    )
}