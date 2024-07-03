import React, { useState, useEffect } from "react";
import {
    IconButton,
    SearchInput,
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
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function CharacterBank({ character }) {
    const [items, setItems] = useState([]);
    const [expandBank, setExpandBank] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received bank prop: ", character.bank)
        console.log("Initialized items state: ", items)
    }, [character, items])

    useEffect(() => {
        setItems(character.bank)
    }, [character])

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={theme === "light" ? "#fff" : "#fff"}>Bank</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Bank..." />
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
                            key={index}
                            isSelectable onSelect={() => console.log(item)}
                        >
                            <Table.TextCell>
                                {renderItemRow(item, theme)}
                            </Table.TextCell>
                        </ItemRow>
                    ))}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    )
}