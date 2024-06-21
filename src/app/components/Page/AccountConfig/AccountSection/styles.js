import { Text, Pane } from "evergreen-ui";
import styled, {ThemeProvider} from "styled-components";

export const CenteredPane = styled(Pane)`
    height: fit-content;
    width: fit-content;
    maxWidth: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;

    .ub-lft_12px {
        left: 0 !important;
    }
`;

export const HoverPane = styled(Pane)`
    border: 1px solid ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1c1c1c")};
    background: ${({ theme }) => 
        theme.mode === "light" 
            ? "linear-gradient(135deg, #f7f7f7 0%, #eaeaea 100%)"
            : "linear-gradient(135deg, #282A2E 0%, #1f2023 100%)"
    };
    color: ${({ theme }) => (theme.mode === "light" ? "#52586d" : "fff")};
    width: fit-content;
    margin-bottom: 18px;
    padding: 22px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    position: relative;
    left: 8px;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e9e9e9 0%, #d9d9d9 100%)"
                : "linear-gradient(135deg, #2e333b 0%, #272a2e 100%)"
        };
    }

    &:active {
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e1e1e1 0%, #d4d4d4 100%)"
                : "linear-gradient(135deg, #202224 0%, #1a1c1d 100%)"
        };
    }
`;

export const AccountPane = styled(Pane)`
    border: 1px solid ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#1c1c1c")};
    background: ${({ theme }) => 
        theme.mode === "light" 
            ? "linear-gradient(135deg, #f7f7f7 0%, #eaeaea 100%)"
            : "linear-gradient(135deg, #282A2E 0%, #242526 100%)"
    };
    height: 100px;
    width: 120px;
    border-radius: 4px;
    padding: 8px;
    transition: background 0.3s ease;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e9e9e9 0%, #e3e3e3 100%)"
                : "linear-gradient(135deg, #2e333b 0%, #2a2b2e 100%)"
        };
    }

    &:active {
        background: ${({ theme }) => 
            theme.mode === "light" 
                ? "linear-gradient(135deg, #e1e1e1 0%, #d4d4d4 100%)"
                : "linear-gradient(135deg, #202224 0%, #1a1c1d 100%)"
        };
    }
`;