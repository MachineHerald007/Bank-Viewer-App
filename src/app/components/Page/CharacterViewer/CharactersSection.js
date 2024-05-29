import React, { useState, useEffect } from "react"
import {
    Avatar,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'

function divideAndRoundUp(num) {
  return Math.ceil(num / 4)
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

export function CharactersSection({ characters }) {
        // const [characters, setcharacters] = useState([]);
        const [loading, setLoading] = useState(false)
        const [currentPage, setCurrentPage] = useState(1)
        const [characterPages, setcharacterPages] = useState(divideAndRoundUp(characters.length))

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
                        marginRight={12}
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