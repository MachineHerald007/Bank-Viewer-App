import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import {
    Table,
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

    const CharacterCards = ({ characters }) => {
        return (
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell marginLeft={12}>Name</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Level</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Class</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Section ID</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Slot</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                    {characters.map((character, index) => (
                    <Table.Row
                        height={72}
                        key={index}
                        isSelectable onSelect={() => alert(character.name)}
                    >
                        <Table.TextCell marginLeft={8}>
                            <Avatar
                                position="relative"
                                top={2}
                                marginRight={16}
                                src={character.img}
                                name={character.name}
                                size={44}
                            />
                            <Text position="relative" bottom={14} fontWeight={600}>{character.name}</Text>
                        </Table.TextCell>
                        <Table.TextCell textProps={{ size: 400, fontWeight: 600 }}>{character.level}</Table.TextCell>
                        <Table.TextCell textProps={{ size: 400, fontWeight: 600 }}>{character.class}</Table.TextCell>
                        <Table.TextCell textProps={{ size: 400, fontWeight: 600 }}>{character.sec_id}</Table.TextCell>
                        <Table.TextCell textProps={{ size: 400, fontWeight: 600 }}>{character.slot}</Table.TextCell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }

    const returnCharacters = (characters) => {
        // const [characters, setcharacters] = useState([]);
        const [loading, setLoading] = useState(false)
        const [currentPage, setCurrentPage] = useState(1)
        const [characterPages, setcharacterPages] = useState(divideAndRoundUp(characters.length))

        // Fetch characters from backend
        useEffect(() => {
        }, [currentPage])

        const charactersPerPage = 4
        const indexOfLastCharacter = currentPage * charactersPerPage
        const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
        const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)

        return (
            <Pane>
                <CharacterCards characters={currentCharacters} />
                <Pane
                    height={64}
                    position="relative"s
                    bottom={2}
                    paddingTop={1}
                    backgroundColor="white"
                    borderTop="1px solid #E6E8F0"
                    borderRight="1px solid #E6E8F0"
                    borderLeft="1px solid #E6E8F0"
                    borderBottom="1px solid #E6E8F0"
                    borderBottomLeftRadius={4}
                    borderBottomRightRadius={4}
                >
                    <Pagination
                        float="right"
                        page={currentPage}
                        totalPages={characterPages}
                        onPageChange={(page) => setCurrentPage(page)}
                        onNextPage={() => setCurrentPage(currentPage + 1)}
                        onPreviousPage={() => setCurrentPage(currentPage - 1)}
                    />
                </Pane>
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