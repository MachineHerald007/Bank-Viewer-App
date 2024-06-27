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
import { shared_bank } from "../../bank";
import { useTheme } from "../../Theme/Theme";

function getItems(raw_items) {
    if (typeof raw_items !== 'string') {
        throw new Error('Expected a string as raw_items');
    }
    return raw_items.split("\n");
}

function getSharedBank(items) {
    return getItems(items);
}

export function SharedBank() {
    const [sharedBank, setSharedBank] = useState(getSharedBank(shared_bank));
    const { theme } = useTheme();

    return (
        <ItemPane theme={theme}>
            <Heading size={600}color={theme === "light" ? "#52586d" : "#fff"}>Shared Bank</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {sharedBank.map((item, index) => (
                        <ItemRow
                            theme={theme}
                            key={`shared_bank-${index}`}
                            isSelectable
                            onSelect={() => console.log(item)}
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