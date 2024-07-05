'use client'

import { useEffect, useContext } from "react";
import { AppContext } from "./page";
import { Button, Pane, Text, majorScale } from "evergreen-ui";
import { SidePanel } from "./components/SidePanel/SidePanel";

export default function Dashboard() {
    return (
        <Pane>
            <SidePanel />
        </Pane>
    )
}