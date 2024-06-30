import { Text, Pane, Table, Pagination, SearchInput, IconButton } from "evergreen-ui";
import styled from "styled-components";

export const StyledText = styled(Text)`
    font-weight: 600;
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")} !important;
`;

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
        background: ${({ theme }) => (theme === "light" ? "#f57800" : "#00ff95")} !important;
        ${StyledText} {
            color: #fff !important;
        }
    }

    &:focus {
        background: ${({ theme }) => (theme === "light" ? "#f57800" : "#00ff95")} !important;
        ${StyledText} {
            color: #fff !important;
        }
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

export const CharacterProfileCardPane = styled(Pane)`
    width: 386px;
    height: 220px;
    padding: 24px;
    margin-top: 24px;
    margin-right: 24px;
    display: inline-block
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme === "light" ? "#E6E8F0" : "#121212")};
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#232427")};
`;

export const ProfileCardText = styled(Text)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
`;