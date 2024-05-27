import React, { useState, useEffect } from "react"
import {
    SearchInput,
    Heading,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'
import { inventory } from "../../inventory"
import { inventory_weps } from "../../inventory-weps"

function getInventoryItems(raw_inventory) {
    return raw_inventory.split("\n")
}

export function CharacterInventory({ character, inventory }) {
    const [items, setItems] = useState(getInventoryItems(inventory))

    return (
        <Pane
            height={720}
            padding={24}
            marginBottom={24}
            borderRadius={4}
            border="1px solid #E6E8F0"
            backgroundColor="#FFFFFF"
            boxShadow="rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px"
        >
            <Heading size={600} color="#474d66">Inventory</Heading>
            <SearchInput marginTop={24} placeholder="Search Inventory..." />
            <Table marginTop={24}>
                <Table.Body height={500}>
                    {items.map((item, index) => (
                        <Table.Row
                            height={44}
                            key={index} isSelectable onSelect={() => console.log(item)}
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