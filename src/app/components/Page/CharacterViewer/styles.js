import { Text, Pane, Table, Pagination, SearchInput, IconButton } from "evergreen-ui";
import styled from "styled-components";

export const StyledText = styled(Text)`
    font-weight: 600;
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")} !important;
`;

export const StyledTable = styled(Table)`
    border-color: ${({ theme }) => (theme === "light" ? "#193337" : "#121212")};
`;

export const StyledTableHead = styled(Table.Head)`
    background: ${({ theme }) => (theme === "light" ? "#065d67" : "#232427")};
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
    border-color: ${({ theme }) => (theme === "light" ? "#193337" : "#121212")};
`;

export const StyledTableRow = styled(Table.Row)`
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
    border-color: ${({ theme }) => (theme === "light" ? "#26494f" : "#121212")};

    &:hover {
        background: ${({ theme }) => (theme === "light" ? "#e98423" : "#e9e9e9")} !important;
        ${StyledText} {
             color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")} !important; 
        }
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#e98423" : "#e9e9e9")} !important;
        ${StyledText} {
             color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")} !important; 
        }
    }
`;

export const StyledPaginationPane = styled(Pane)`
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    border-color: ${({ theme }) => (theme === "light" ? "#193337" : "#121212")};
    border-top-color: ${({ theme }) => (theme === "light" ? "#26494f" : "#121212")};
`;

export const StyledPagination = styled(Pagination)`
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};

    svg {
        fill: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
    }

    button {
        color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
        background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};

        &:not([disabled]):focus {
            box-shadow: none !important;
        }

        &:hover {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")}; 
            background: ${({ theme }) => (theme === "light" ? "#e98423" : "#e9e9e9")} !important;
        }

        &[aria-current="true"] {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")};
            background: ${({ theme }) => (theme === "light" ? "#e98423" : "#e9e9e9")};

            &:hover {
                color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")} !important;
                background:  ${({ theme }) => (theme === "light" ? "#e98423" : "#e9e9e9")};
            }
        }
    }
`;

export const CharacterProfileCardPane = styled(Pane)`
    width: 386px;
    height: 220px;
    padding: 24px;
    margin-top: 24px;
    margin-right: 24px;
    display: inline-block
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#193337" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#0d6b75" : "#232427")};
`;

export const ProfileCardText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#fff")};
`;