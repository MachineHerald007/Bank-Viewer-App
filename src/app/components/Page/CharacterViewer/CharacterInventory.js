import React, { useState, useEffect } from "react";
import {
    IconButton,
    Heading,
    MaximizeIcon,
    MinimizeIcon,
    Table,
    Pane,
} from 'evergreen-ui';
import {
    ItemPane,
    ItemRow,
    ItemTable,
    SearchBar,
    ExpandButton
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function CharacterInventory({ character }) {
    const [items, setItems] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received inventory prop: ", character.inventory);
        console.log("Initialized items state: ", items);
    }, [character, items]);

    useEffect(() => {
        setItems(character.inventory);
    }, [character]);

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={theme === "light" ? "#fff" : "#fff"}>Inventory</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Inventory..." />
            <ExpandButton
                theme={theme}
                icon={MaximizeIcon}
                float="right"
                position="relative"
                top={26}
            />
            <ItemTable theme={theme}>
                <Table.Body height={500}>
                    {items.map((item, index) => (
                        <ItemRow
                            theme={theme}
                            key={index} isSelectable onSelect={() => console.log("item: ", item)}
                        >
                            <Table.TextCell>
                                {renderItemRow(item, theme)}
                            </Table.TextCell>
                        </ItemRow>
                    ))}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    );
}