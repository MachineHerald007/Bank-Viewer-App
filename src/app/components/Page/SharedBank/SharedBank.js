import React, { createContext, useState, useEffect } from "react"
import {
    Avatar,
    Heading,
    SearchInput,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'

import { shared_bank } from "../../bank"

function getItems(raw_items) {
    if (typeof raw_items !== 'string') {
        throw new Error('Expected a string as raw_items')
    }
    return raw_items.split("\n")
}

function getSharedBank(items) {
    return getItems(items)
}

export function SharedBank() {
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
            <Heading size={600} color="#474d66">Shared Bank</Heading>
            <SearchInput marginTop={24} placeholder="Search Items..." />
            <Table marginTop={24}>
            <Table.Body>
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