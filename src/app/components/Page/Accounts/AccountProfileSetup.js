import React, { useState, useEffect } from "react"
import { Avatar, AddIcon, PlusIcon, Text, Pane } from "evergreen-ui"
import styled, { ThemeProvider } from "styled-components"
import { useTheme } from "../../Theme/Theme"

export function AccountProfileSetup({ theme }) {
    const [account, setAccount] = useState([])

    return (
        <Pane theme={theme}>
            Use picture and input text field

            <Pane>
                {/* Avatar */}
            </Pane>
            
            <Pane>
                {/* user & discord name */}
            </Pane>
            
            <Pane>
                {/* Done section */}
            </Pane>
        </Pane>
    )
}
