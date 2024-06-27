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
import { useTheme } from "../../Theme/Theme";

function getBankItems(raw_bank) {
    return raw_bank.split("\n");
}

export function CharacterBank({ character, bank }) {
    const [items, setItems] = useState(() => getBankItems(bank));
    const [expandBank, setExpandBank] = useState(false);
    const { theme } = useTheme();

    // Debugging logs
    useEffect(() => {
        console.log("Received bank prop: ", bank)
        console.log("Initialized items state: ", items)
    }, [bank, items])

    // Effect to handle updates to the bank prop
    useEffect(() => {
        setItems(getBankItems(bank))
    }, [bank])

    return (
        <ItemPane theme={theme} height={720}>
            <Heading size={600} color={theme === "light" ? "#52586d" : "#fff"}>Bank</Heading>
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
                            key={index} isSelectable onSelect={() => console.log(item)}
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