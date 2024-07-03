import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
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
    ExpandButton
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function AllItems({ accountData }) {
    const [sharedBank, setSharedBank] = useState([]);
    const [characters, setCharacters] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Received accountData prop: ", accountData);
        console.log("Initialized sharedBank state: ", sharedBank);
        console.log("Initialized characters state: ", characters);
    }, [accountData, sharedBank, characters]);

    useEffect(() => {
        if (accountData) {
            setSharedBank(accountData.shared_bank || []);
            setCharacters(accountData.characters || []);
        }
    }, [accountData]);

    return (
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#52586d" : "#fff"}>All Items</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {characters.map((char, index) => (
                        <Pane key={index}>
                            <CharacterTitleRow
                                theme={theme}
                                key={`${char.slot} - ${char.name}`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <StyledText fontSize={16} marginLeft={16}><b>Slot: {char.slot}</b></StyledText>
                                    <StyledText fontSize={16} marginLeft={4}> | <b>{char.name}</b></StyledText>
                                    <StyledText fontSize={16} marginLeft={4}> | <b>{char.level}</b></StyledText>
                                    <StyledText fontSize={16} marginLeft={4}> | <b>{char.section_id}</b></StyledText>
                                    <StyledText fontSize={16} marginLeft={4}> | <b>{char.class}</b></StyledText>
                                </Table.TextCell>
                            </CharacterTitleRow>
                            <ItemTitleRow
                                theme={theme}
                                key={`${char.slot} - ${char.name} - Bank`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <StyledText fontSize={16} marginLeft={16}><b>Inventory</b></StyledText>
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
                            <ItemRow theme={theme} height={44} isSelectable >
                                <Table.TextCell></Table.TextCell>
                            </ItemRow>
                            <ItemTitleRow
                                theme={theme}
                                key={`bank-${index}-${char.slot}`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <StyledText fontSize={16} marginLeft={16}><b>Bank</b></StyledText>
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
                            <ItemRow theme={theme} height={44} isSelectable={false} >
                                <Table.TextCell></Table.TextCell>
                            </ItemRow>
                        </Pane>
                    ))}
                    {sharedBank.length > 0 ?
                        <ItemTitleRow
                            theme={theme}
                            isSelectable
                        >
                            <Table.TextCell>
                                <StyledText fontSize={16} marginLeft={16}><b>Shared Bank - Normal</b></StyledText>
                            </Table.TextCell>
                        </ItemTitleRow>
                        :
                        <></>
                    }
                    {sharedBank.map((item, index) => (
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
    );
}
