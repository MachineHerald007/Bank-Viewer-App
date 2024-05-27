'use client'

import { useEffect } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import { Button, Pane, Text, majorScale } from "evergreen-ui"
import { Sidebar } from "./components/Sidebar"

export default function BankView() {
    useEffect(() => {
    invoke("greet", { name: "Bank Viewer" })
        .then(console.log)
        .catch(console.error)
    }, [])

    return (
    <Pane marginLeft={24}>
        <Sidebar />
    </Pane>
    )
}