import { Text, Pane, Table, Pagination, SearchInput, IconButton } from "evergreen-ui";
import styled from "styled-components";

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

export const ItemPane = styled(Pane)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
`;

export const ItemTable = styled(Table)`
    margin-top: 24px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const CharacterTitleRow = styled(Table.Row)`
    height: 44px;
    background-color: ${({ theme }) => (theme === "light" ? "#2b2b2b" : "#05b16a")} !important;
    border: none;
    border-radius: 0px !important;
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")} !important;
`;

export const ItemTitleRow = styled(Table.Row)`
    height: 44px;
    background-color: ${({ theme }) => (theme === "light" ? "#3d3d3d" : "#00cd78")} !important;
    border: none;
    border-radius: 0px !important;
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")} !important;
`;

export const StyledText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
`;

export const ItemRow = styled(Table.Row)`
    height: 44px;
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};    
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#e3e3e3" : "#161616")} !important;
        ${StyledText} {
            color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
        }
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#e3e3e3" : "#161616")} !important;
        ${StyledText} {
            color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
        }
    }
`;