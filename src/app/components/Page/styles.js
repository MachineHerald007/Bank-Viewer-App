import { Text, Pane, Table, Pagination, SearchInput, IconButton } from "evergreen-ui";
import styled from "styled-components";

export const StyledText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
`;

export const SearchBar = styled(SearchInput)`
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")};
`;

export const ExpandButton = styled(IconButton)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")};

    svg {
        fill: ${({ theme }) => (theme === "light" ? "#efefef" : "#fff")};
    }
`;

export const ItemPane = styled(Pane)`
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
`;

export const ItemTable = styled(Table)`
    margin-top: 24px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")};
`;

export const CharacterTitleRow = styled(Table.Row)`
    height: 44px;
    background-color: ${({ theme }) => (theme === "light" ? "#29838d" : "#d1d1d1")} !important;
    border: none;
    border-radius: 0px !important;
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")} !important;

    ${StyledText} {
        color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")}; 
    }
`;

export const ItemTitleRow = styled(Table.Row)`
    height: 44px;
    background-color: ${({ theme }) => (theme === "light" ? "#e98423" : "#00d38f")} !important;
    border: none;
    border-radius: 0px !important;
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")} !important;

    ${StyledText} {
        color: ${({ theme }) => (theme === "light" ? "#efefef" : "#efefef")}; 
    }
`;

export const ItemRow = styled(Table.Row)`
    height: 44px;
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};    
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#2a5459" : "#121212")};

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#13747f" : "#161616")} !important;
        ${StyledText} {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
        }
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#13747f" : "#161616")} !important;
        ${StyledText} {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
        }
    }
`;