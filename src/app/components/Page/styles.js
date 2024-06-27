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
    height:720px;
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
`;

export const ItemTable = styled(Table)`
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
`;

export const ItemRow = styled(Table.Row)`
    height: 44px;
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};    
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};

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