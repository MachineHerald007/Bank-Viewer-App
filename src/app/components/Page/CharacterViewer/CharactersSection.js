import React, {
    useContext,
    useState,
    useEffect
} from "react"
import {
    Avatar,
    UserIcon,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui'
import { CharacterContext } from "./CharacterViewer"
import {
    StyledText,
    StyledTable,
    StyledTableRow,
    StyledTableHead,
    StyledPagination,
    StyledPaginationPane
} from "./styles";
import { useTheme } from "../../Theme/Theme";

function divideAndRoundUp(num) {
  return Math.ceil(num / 4)
}

const CharacterCards = ({ characters }) => {
    const { selectedCharacter, saveSelectedCharacter } = useContext(CharacterContext);
    const { theme } = useTheme();

    return (
        <StyledTable theme={theme}>
            <StyledTableHead theme={theme}>
                <Table.TextHeaderCell marginLeft={12}>Name</Table.TextHeaderCell>
                <Table.TextHeaderCell>Level</Table.TextHeaderCell>
                <Table.TextHeaderCell>Class</Table.TextHeaderCell>
                <Table.TextHeaderCell>Section ID</Table.TextHeaderCell>
                <Table.TextHeaderCell>Slot</Table.TextHeaderCell>
            </StyledTableHead>
            <Table.Body>
                {characters.map((character, index) => (
                <StyledTableRow
                    theme={theme}
                    height={72}
                    key={index}
                    isSelectable onSelect={() => {
                        saveSelectedCharacter(character)
                    }}
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
                        <StyledText theme={theme} position="relative" bottom={14}>{character.name}</StyledText>
                    </Table.TextCell>
                    <Table.TextCell>
                        <StyledText theme={theme}>{character.level}</StyledText>
                    </Table.TextCell>
                    <Table.TextCell>
                        <StyledText theme={theme}>{character.class}</StyledText>
                    </Table.TextCell>
                    <Table.TextCell>
                        <StyledText theme={theme}>{character.sec_id}</StyledText>
                    </Table.TextCell>
                    <Table.TextCell>
                        <StyledText theme={theme}>{character.slot}</StyledText>
                    </Table.TextCell>
                </StyledTableRow>
                ))}
            </Table.Body>
        </StyledTable>
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
        const { theme } = useTheme();

        return (
            <Pane>
                <CharacterCards characters={currentCharacters} />
                <StyledPaginationPane
                    theme={theme}
                    height={64}
                    position="relative"s
                    bottom={2}
                    paddingTop={1}
                    borderTop="1px solid #E6E8F0"
                    borderRight="1px solid #E6E8F0"
                    borderLeft="1px solid #E6E8F0"
                    borderBottom="1px solid #E6E8F0"
                    borderBottomLeftRadius={4}
                    borderBottomRightRadius={4}
                >
                    <StyledPagination
                        theme={theme}
                        float="right"
                        marginRight={12}
                        page={currentPage}
                        totalPages={characterPages}
                        onPageChange={(page) => setCurrentPage(page)}
                        onNextPage={() => setCurrentPage(currentPage + 1)}
                        onPreviousPage={() => setCurrentPage(currentPage - 1)}
                    />
                </StyledPaginationPane>
            </Pane>
        ) 
}