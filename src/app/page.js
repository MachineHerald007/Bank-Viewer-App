'use client'

import { createContext } from "react"
import { characters } from "./components/Characters"
import Dashboard from "./Dashboard"

export const AccountContext = createContext()

export default function Home() {
  return (
    <AccountContext.Provider value={{ characters }}>
        <Dashboard />
    </AccountContext.Provider>
  )
}