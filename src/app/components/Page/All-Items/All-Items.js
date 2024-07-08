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
    CharacterTitleRow,
    ItemTitleRow,
    StyledText,
    ItemTable,
    SearchBar,
    ExpandButton,
    Bracket
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function AllItems({ accountData }) {
    const [sharedBank, setSharedBank] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        if (accountData) {
            setSharedBank(accountData.shared_bank || []);
            setCharacters(accountData.characters || []);
        }
    }, [accountData]);

    useEffect(() => {
        const totalItems = characters.reduce((acc, char) => acc + char.inventory.length + char.bank.length, 0) + sharedBank.length;
        setTotalItemsCount(totalItems);
    }, [characters, sharedBank]);

    const renderedCharacters = useMemo(() => (
        characters.map((char, index) => (
            <Pane key={index}>
                <CharacterTitleRow
                    theme={theme}
                    isSelectable
                    onSelect={() => console.log(char)}
                >
                    <Table.TextCell>
                        <StyledText marginLeft={16}><b>Slot: {char.slot}</b></StyledText>
                        <StyledText marginLeft={4}> | <b>{char.name}</b></StyledText>
                        <StyledText marginLeft={4}> | <b>{char.level}</b></StyledText>
                        <StyledText marginLeft={4}> | <b>{char.section_id}</b></StyledText>
                        <StyledText marginLeft={4}> | <b>{char.class}</b></StyledText>
                    </Table.TextCell>
                </CharacterTitleRow>
                <ItemTitleRow
                    theme={theme}
                    isSelectable
                    onSelect={() => console.log(char)}
                >
                    <Table.TextCell>
                        <StyledText marginLeft={16}>
                            <b>Inventory</b>
                            <Bracket type="left">[</Bracket>
                                <b>{char.inventory.length}/30</b>
                            <Bracket type="right">]</Bracket>
                        </StyledText>
                    </Table.TextCell>
                </ItemTitleRow>
                {char.inventory.map((item, i) => (
                    <ItemRow
                        theme={theme}
                        key={`inventory-${index}-${i}`}
                        isSelectable
                        onSelect={() => console.log(char)}
                    >
                        <Table.TextCell>
                            {renderItemRow(item, theme)}
                        </Table.TextCell>
                    </ItemRow>
                ))}
                <ItemRow theme={theme} height={44} isSelectable={false}>
                    <Table.TextCell></Table.TextCell>
                </ItemRow>
                <ItemTitleRow
                    theme={theme}
                    isSelectable
                    onSelect={() => console.log(char)}
                >
                    <Table.TextCell>
                        <StyledText marginLeft={16}>
                            <b>Bank</b>
                            <Bracket type="left">[</Bracket>
                                <b>{char.bank.length}/30</b>
                            <Bracket type="right">]</Bracket>
                        </StyledText>
                    </Table.TextCell>
                </ItemTitleRow>
                {char.bank.map((item, i) => (
                    <ItemRow
                        theme={theme}
                        key={`bank-${index}-${i}`}
                        isSelectable
                        onSelect={() => console.log(char)}
                    >
                        <Table.TextCell>
                            {renderItemRow(item, theme)}
                        </Table.TextCell>
                    </ItemRow>
                ))}
                <ItemRow theme={theme} height={44} isSelectable={false}>
                    <Table.TextCell></Table.TextCell>
                </ItemRow>
            </Pane>
        ))
    ), [characters, theme]);

    const renderedSharedBank = useMemo(() => (
        sharedBank.map((item, index) => (
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
    ), [sharedBank, theme]);

    return (
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#efefef" : "#fff"}>
                All Items
                <Bracket type="left">[</Bracket>
                    {totalItemsCount}
                <Bracket type="right">]</Bracket>
            </Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {renderedCharacters}
                    {sharedBank.length > 0 && (
                        <ItemTitleRow theme={theme} isSelectable>
                            <Table.TextCell>
                                <StyledText marginLeft={16}><b>Shared Bank - Normal</b></StyledText>
                            </Table.TextCell>
                        </ItemTitleRow>
                    )}
                    {renderedSharedBank}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    );
}
