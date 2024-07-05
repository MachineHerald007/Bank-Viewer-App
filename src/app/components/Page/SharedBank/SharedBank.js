import React, { useState, useEffect, useMemo } from "react";
import {
    Avatar,
    Heading,
    SearchInput,
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

export function SharedBank({ sharedBank }) {
    const [items, setItems] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received shared_bank prop: ", sharedBank);
        setItems(sharedBank);
    }, [sharedBank]);

    const renderedItems = useMemo(() => (
        items.map((item, index) => (
            <ItemRow
                theme={theme}
                key={`shared_bank-${index}`}
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
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#efefef" : "#fff"}>Shared Bank</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {renderedItems}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    );
}
