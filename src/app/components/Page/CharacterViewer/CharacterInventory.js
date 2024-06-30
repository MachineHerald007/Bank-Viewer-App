import React, { useState, useEffect } from "react";
import {
    IconButton,
    Heading,
    MaximizeIcon,
    MinimizeIcon,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui';
import {
    ItemPane,
    ItemRow,
    StyledText,
    ItemTable,
    SearchBar,
    ExpandButton
} from "../styles";
import { useTheme } from "../../Theme/Theme";

export function CharacterInventory({ character }) {
    const [items, setItems] = useState([]);
    const [expandInventory, setExpandInventory] = useState(false);
    const { theme } = useTheme();

    const displayItem = (item, prop) => {
        let str = ""
        Object.keys(item).map(key => {
            str = item[key][prop]
        })
        return str;
    };

    useEffect(() => {
        console.log("Received inventory prop: ", character.inventory);
        console.log("Initialized items state: ", items);
    }, [character, items]);

    useEffect(() => {
        setItems(character.inventory);
    }, [character]);

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={theme === "light" ? "#52586d" : "#fff"}>Inventory</Heading>
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
                                <StyledText theme={theme} fontSize={16}>{
                                    displayItem(item, "name")
                                }</StyledText>
                            </Table.TextCell>
                        </ItemRow>
                    ))}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    )
}