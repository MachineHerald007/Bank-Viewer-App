import React, { useState, useEffect, useMemo } from "react";
import {
    IconButton,
    Heading,
    MaximizeIcon,
    Table,
    Pane,
} from 'evergreen-ui';
import {
    ItemPane,
    ItemRow,
    ItemTable,
    SearchBar,
    ExpandButton,
    Bracket
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function CharacterInventory({ character }) {
    const [items, setItems] = useState(character.inventory);
    const { theme } = useTheme();

    useEffect(() => {
        setItems(character.inventory);
    }, [character]);

    const headerColor = useMemo(() => theme === "light" ? "#fff" : "#fff", [theme]);

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={headerColor}>
                Inventory
                <Bracket type="left">[</Bracket>
                    {items.length - 1}/30
                <Bracket type="right">]</Bracket>
            </Heading>
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