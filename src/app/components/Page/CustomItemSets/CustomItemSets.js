import React, { useState, useEffect } from "react"
import { Pane, Text } from "evergreen-ui";
import { ItemSetTabs } from "./ItemSetTabs";
import { CreateItemList } from "./CreateItemList";

export function CustomItemSets() {
    return(
        <Pane>
            <ItemSetTabs />
            <Text>Custom Item List</Text>
            <CreateItemList />
            <Pane>
                <Text>All Item List</Text>
            </Pane>
        </Pane>
    );
}