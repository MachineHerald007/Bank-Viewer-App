import React, { useState, useEffect, useMemo } from "react";
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
    ExpandButton,
    Bracket
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function CharacterBank({ character }) {
    const [items, setItems] = useState([]);
    const [expandBank, setExpandBank] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received bank prop: ", character.bank);
        setItems(character.bank);
    }, [character.bank]);

    const renderedItems = useMemo(() => (
        items.map((item, index) => (
            <ItemRow
                theme={theme}
                key={index}
                isSelectable
                onSelect={() => console.log(item)}
            >
                <Table.TextCell>
                    {renderItemRow(item, theme)}
                </Table.TextCell>
            </ItemRow>
        ))
    ), [items, theme]);

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={theme === "light" ? "#fff" : "#fff"}>
                Bank
                <Bracket type="left">[</Bracket>
                    {items.length > 0 ? items.length - 1 : items.length}/200
                <Bracket type="right">]</Bracket>
            </Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Bank..." />
            <ExpandButton
                theme={theme}
                icon={expandBank ? MinimizeIcon : MaximizeIcon}
                float="right"
                position="relative"
                top={26}
                onClick={() => setExpandBank(!expandBank)}
            />
            <ItemTable theme={theme}>
                <Table.Body height={500}>
                    {renderedItems}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    );
}