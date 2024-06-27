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
} from "./styles";
import { useTheme } from "../../Theme/Theme";

function getInventoryItems(raw_inventory) {
    return raw_inventory.split("\n");
}

export function CharacterInventory({ character, inventory }) {
    const [items, setItems] = useState(() => getInventoryItems(inventory));
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received inventory prop: ", inventory);
        console.log("Initialized items state: ", items);
    }, [inventory, items]);

    useEffect(() => {
        setItems(getInventoryItems(inventory));
    }, [inventory]);

    return (
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#52586d" : "#fff"}>Inventory</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Inventory..." />
            <ExpandButton
                theme={theme}
                icon={MaximizeIcon}
                float="right"
                position="relative"
                top={26}
            />
            <ItemTable marginTop={24}>
                <Table.Body height={500}>
                    {items.map((item, index) => (
                        <ItemRow
                            theme={theme}
                            key={index} isSelectable onSelect={() => console.log("item: ", item)}
                        >
                            <Table.TextCell>
                                <StyledText theme={theme} fontSize={16}>{item}</StyledText>
                            </Table.TextCell>
                        </ItemRow>
                    ))}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    )
}