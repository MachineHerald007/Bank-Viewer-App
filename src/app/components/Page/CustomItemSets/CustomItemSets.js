import React, { useState, useEffect } from "react"
import { Pane } from "evergreen-ui";
import { ItemSetTabs } from "./ItemSetTabs";

export function CustomItemSets() {
    return(
        <Pane>
            <ItemSetTabs />
        </Pane>
    );
}