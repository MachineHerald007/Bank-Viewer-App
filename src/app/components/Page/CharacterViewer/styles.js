import { Text, Pane, Table, Pagination } from "evergreen-ui";
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
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    border-color: ${({ theme }) => (theme === "light" ? "#edeff5" : "#121212")};

    &:hover {
        background: #00ffd0 !important;
    }

    &:focus {
        background: #00ffd0 !important;
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
