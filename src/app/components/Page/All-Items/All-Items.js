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
    StyledText,
    ItemTable,
    SearchBar,
    ExpandButton
} from "../styles";
import { AccountContext } from "@/app/page";
import { all_inventory } from "../../inventory";
import { shared_bank } from "../../bank";
import { useTheme } from "../../Theme/Theme";

function getItems(raw_items) {
    if (typeof raw_items !== 'string') {
        throw new Error('Expected a string as raw_items');
    }
    return raw_items.split("\n");
}

function getAllItems(char) {
    let l = char.length;
    for (let i = 0; i < l; i++) {
        try {
            char[i].character = char[i].character;
            char[i].inventory = getItems(char[i].inventory);
            char[i].bank = getItems(char[i].bank);
        } catch (error) {
            console.error(`Error processing item at index ${i}: ${error.message}`);
        }
    }
    return char;
}

function getSharedBank(items) {
    return getItems(items);
}

export function AllItems() {
    const { characters } = useContext(AccountContext);
    const [sharedBank, setSharedBank] = useState(getSharedBank(shared_bank));
    const { theme } = useTheme();

    return (
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#52586d" : "#fff"}>All Items</Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    {characters.map((char, index) => (
                        <Pane key={index}>
                            <Table.Row
                                backgroundColor="#edeff5"
                                height={44}
                                key={`${char.slot} - ${char.name}`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <Text fontSize={16} marginLeft={16}><b>Character Slot: {char.slot}</b></Text>
                                    <Text fontSize={16} marginLeft={4}> | <b>{char.name}</b></Text>
                                    <Text fontSize={16} marginLeft={4}> | <b>{char.level}</b></Text>
                                    <Text fontSize={16} marginLeft={4}> | <b>{char.sec_id}</b></Text>
                                    <Text fontSize={16} marginLeft={4}> | <b>{char.class}</b></Text>
                                </Table.TextCell>
                            </Table.Row>
                            {char.inventory.split("\n").map((item, i) => (
                                <ItemRow
                                    theme={theme}
                                    key={`inventory-${index}-${i}`}
                                    isSelectable
                                    onSelect={() => console.log(char)}
                                >
                                    <Table.TextCell>
                                        <StyledText theme={theme} fontSize={16}>{item}</StyledText>
                                    </Table.TextCell>
                                </ItemRow>
                            ))}
                            <ItemRow theme={theme} height={44} isSelectable >
                                <Table.TextCell></Table.TextCell>
                            </ItemRow>
                            <Table.Row
                                backgroundColor="#edeff5"
                                height={44}
                                key={char.slot}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <Text fontSize={16} marginLeft={16}><b>Character Bank</b></Text>
                                </Table.TextCell>
                            </Table.Row>
                            {char.bank.split("\n").map((item, i) => (
                                <ItemRow
                                    theme={theme}
                                    key={`bank-${index}-${i}`}
                                    isSelectable
                                    onSelect={() => console.log(char)}
                                >
                                    <Table.TextCell>
                                        <StyledText theme={theme} fontSize={16}>{item}</StyledText>
                                    </Table.TextCell>
                                </ItemRow>
                            ))}
                        </Pane>
                    ))}
                    <Table.Row
                        backgroundColor="#edeff5"
                        height={44}
                        isSelectable
                    >
                        <Table.TextCell>
                            <Text fontSize={16} marginLeft={16}><b>Shared Bank - Normal</b></Text>
                        </Table.TextCell>
                    </Table.Row>
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