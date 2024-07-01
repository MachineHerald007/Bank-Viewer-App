import React, { createContext, useState, useEffect } from "react";
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
    const [items, setItems] = useState([])
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received shared_bank prop: ", sharedBank)
        console.log("Initialized items state: ", items)
    }, [sharedBank, items])

    useEffect(() => {
        setItems(sharedBank)
    }, [sharedBank])

    return (
        <ItemPane theme={theme}>
            <Heading size={600}color={theme === "light" ? "#52586d" : "#fff"}>Shared Bank</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {items.map((item, index) => (
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
                    ))}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    )
}