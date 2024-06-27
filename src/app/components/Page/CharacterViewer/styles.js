import { Text, Pane, Table, Pagination, SearchInput, IconButton } from "evergreen-ui";
import styled from "styled-components";

export const StyledTable = styled(Table)`
    border-color: ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const StyledTableHead = styled(Table.Head)`
    background: ${({ theme }) => (theme === "light" ? "#F9FAFC" : "#232427")};
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    border-color: ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const StyledTableRow = styled(Table.Row)`
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    border-color: ${({ theme }) => (theme === "light" ? "#edeff5" : "#121212")};

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#F9FAFC" : "#00ffd0")} !important;
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#F9FAFC" : "#00ffd0")} !important;
    }
`;

export const StyledPaginationPane = styled(Pane)`
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    border-color: ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const StyledPagination = styled(Pagination)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};

    button {
        color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
        background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};

        &[aria-current="true"] {
            color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
            background: ${({ theme }) => (theme === "light" ? "#e9eaeb" : "#3c3d41")};

            &:hover {
                color: white;
                background: #00ffd0;
            }
        }
    }
`;

// background: #26272d; --subtle dark
// background: #202125; --subtle darker
// #1e1f23

// #232427 -- good character viewer section background color
// #121212 -- border color(make lighter)

export const CharacterProfileCardPane = styled(Pane)`
    width: 374px;
    height: 220px;
    padding: 24px;
    margin-top: 24px;
    margin-right: 24px;
    display: inline-block
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    boxShadow: rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px;
`;

export const ProfileCardText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
`;

export const SearchBar = styled(SearchInput)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const ExpandButton = styled(IconButton)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const CharacterInventoryPane = styled(Pane)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    height:720px;
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    box-shadow: rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px;
`;

export const CharacterInventoryTable = styled(Table)`
    border: none;
`;

export const InventoryRow = styled(Table.Row)`
    height: 44px;
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#F9FAFC" : "#00ffd0")} !important;
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#F9FAFC" : "#00ffd0")} !important;
    }
`;

export const StyledText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
`;