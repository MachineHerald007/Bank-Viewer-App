import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import {
    Pagination,
    Pane,
    Tablist,
    Tab,
    Paragraph,
    Text,
    Avatar,
    CalculatorIcon,
    ChartIcon,
    UserIcon,
    ExpandAllIcon,
    PeopleIcon,
    PersonIcon,
    BriefcaseIcon,
    DatabaseIcon,
    InboxIcon,
    InboxGeoIcon,
    ApplicationsIcon,
    CogIcon,
    JoinTableIcon,
    DiagramTreeIcon
} from 'evergreen-ui'
import { ProfileSection  } from "./ProfileSidebar"
import { characters } from "./Characters"

function divideAndRoundUp(num) {
  return Math.ceil(num / 4)
}

export function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const tabs = React.useMemo(() => [
        "Analytics",
        "All Items",
        "Shared Bank",
        "Custom Item Sets",
        "Character Viewer",
        "Settings"
    ], [])

    //hardcoded data for testing
    const char = characters[0]

    const returnIcon = (tab) => {
        switch(tab) {
            case "Analytics":
                return (
                    <Pane>
                        <ChartIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "All Items":
                return (
                    <Pane>
                        <ExpandAllIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Shared Bank":
                return (
                    <Pane>
                        <InboxGeoIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Custom Item Sets":
                 return (
                    <Pane>
                        <ApplicationsIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Character Viewer":
                return (
                    <Pane>
                        <DatabaseIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Settings":
                return (
                    <Pane>
                        <CogIcon marginRight={16} size={20} position="relative" top={2} />
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
        }
    }

    const handlePanelPage = (tab) => {
        switch(tab) {
            case "Analytics":
                return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "All Items":
                return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "Shared Bank":
                return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "Custom Item Sets":
                 return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "Character Viewer":
                return (
                    <Pane>
                        {returnCharacters(characters)}
                    </Pane>
                )
            case "Settings":
                return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
        }
    }

    const returnCharacters = (characters) => {
        const [] = useState([])
        const [loading, setLoading] = useState(false)
        const [currentPage, SetCurrentPage] = useState(1)
        const [charactersPerPage, setCharactersPerPage] = useState(divideAndRoundUp(characters.length))

        // Fetch characters from backend
        // useEffect(() => {
        //     setLoading(true)
        // }, [])

        return (
            <Pane>
                {characters.map((character, index) => {
                    return (
                        <Pane
                            display="inline-block"
                            width={256}
                            paddingTop={8}
                            paddingBottom={8}
                            marginRight={16}
                            marginBottom={16}
                            background="#41bd8e"
                            elevation={3}
                        >
                            <Avatar
                                position="relative"
                                bottom={12}
                                marginRight={16}
                                marginLeft={16}
                                src={character.img}
                                name={character.name}
                                size={64}
                            />
                            <Pane
                                display="inline-block"
                                paddingTop={4}
                                paddingBottom={4}
                            >
                                <Text display="block" color="#FFFFFF"><b>Slot: </b> {character.slot}</Text>
                                <Text display="block" color="#FFFFFF"><b>Name: </b> {character.name}</Text>
                                <Text display="block" color="#FFFFFF"><b>Level: </b> {character.level}</Text>
                                <Text display="block" color="#FFFFFF"><b>Class: </b> {character.class}</Text>
                                <Text display="block" color="#FFFFFF"><b>Section ID: </b> {character.sec_id}</Text>
                            </Pane>
                        </Pane>
                    )
                })}
                <Pagination page={1} totalPages={charactersPerPage}>
                    
                </Pagination>
            </Pane>
        )
    }

    return (
        <Pane display="flex" height={1200}>
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
            <ProfileSection character={char} />
            {tabs.map((tab, index) => {
                return (
                    <Tab
                        aria-controls={`panel-${tab}`}
                        direction="vertical"
                        isSelected={index === selectedIndex}
                        key={tab}
                        onSelect={() => setSelectedIndex(index)}
                        height={44}
                    >
                        {returnIcon(tab)}
                    </Tab>
                )
            })}
            </Tablist>
            <Pane padding={16} background="tint1" flex="1">
            {tabs.map((tab, index) => (
                <Pane
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                    key={tab}
                    role="tabpanel"
                    paddingLeft={24}
                    paddingRight={24}
                    paddingBottom={24}
                    style={{ minHeight: "100vh", height: "fit-content" }}
                >
                    <Pane>
                        {handlePanelPage(tab)}
                    </Pane>
                </Pane>
            ))}
            </Pane>
        </Pane>
    )
}