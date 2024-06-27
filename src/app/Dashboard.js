'use client'

import { useEffect, useContext } from "react";
import { AppContext } from "./page";
import { Button, Pane, Text, majorScale } from "evergreen-ui";
import { SidePanel } from "./components/SidePanel/SidePanel";

export default function Dashboard() {
    useEffect(() => {
        // here use an account initialization function, which
        // loads user data as well as application state

    }, [])

    return (
        <Pane marginLeft={24}>
            <SidePanel />
        </Pane>
    )
}