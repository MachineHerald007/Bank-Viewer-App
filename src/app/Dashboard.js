'use client'

import { useEffect } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import { Button, Pane, Text, majorScale } from "evergreen-ui"
import { SidePanel } from "./components/SidePanel/SidePanel"

export default function Dashboard() {
    useEffect(() => {
    invoke("greet", { name: "PSOBB Dashboard App" })
        .then(console.log)
        .catch(console.error)
    }, [])

    return (
    <Pane marginLeft={24}>
        <SidePanel />
    </Pane>
    )
}