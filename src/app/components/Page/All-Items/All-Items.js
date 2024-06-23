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
import { AccountContext } from "@/app/page";
import { all_inventory } from "../../inventory";
import { shared_bank } from "../../bank";

function getItems(raw_items) {
    if (typeof raw_items !== 'string') {
        throw new Error('Expected a string as raw_items');
    }
    return raw_items.split("\n")
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
    const { characters } = useContext(AccountContext)
    const [sharedBank, setSharedBank] = useState(getSharedBank(shared_bank))

    return (
        <Pane
            padding={24}
            marginBottom={24}
            borderRadius={4}
            border="1px solid #E6E8F0"
            backgroundColor="#FFFFFF"
            boxShadow="rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px"
        >
            <Heading size={600} color="#474d66">All Items</Heading>
            <SearchInput marginTop={24} placeholder="Search Items..." />
            <Table marginTop={24}>
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
                            <Table.Row
                                height={44}
                                key={`inventory-${index}-${i}`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <Text fontSize={16}>{item}</Text>
                                </Table.TextCell>
                            </Table.Row>
                        ))}
                        <Table.Row height={44} isSelectable >
                            <Table.TextCell></Table.TextCell>
                        </Table.Row>
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
                            <Table.Row
                                height={44}
                                key={`bank-${index}-${i}`}
                                isSelectable
                                onSelect={() => console.log(char)}
                            >
                                <Table.TextCell>
                                    <Text fontSize={16}>{item}</Text>
                                </Table.TextCell>
                            </Table.Row>
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
                    <Table.Row
                        height={44}
                        key={`shared_bank-${index}`}
                        isSelectable
                        onSelect={() => console.log(item)}
                    >
                        <Table.TextCell>
                            <Text fontSize={16}>{item}</Text>
                        </Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
            </Table>
        </Pane>
    )
}