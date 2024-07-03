import { Text, Pane, Tab, Heading } from "evergreen-ui";
import styled from "styled-components";

export const ProfileHeading = styled(Heading)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
`;

export const SidePanelPane = styled(Pane)`
    background: ${({ theme }) => (theme === "light" ? "#e9e9e9" : "#232427")};    
`;

export const SidePanelText = styled(Pane)`
    font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
    position: relative;
    bottom: 3px;
`;

export const SidePanelTab = styled(Tab)`
    border-radius: 2px;
    
    &:hover {
        background-color: ${({ theme }) => (theme === "light" ? "#f77900" : "#e9e9e9")};
        ${SidePanelText} {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")}; 
        }
    }

    &:active {
        opacity: 0.9;
    }

    &:focus {
        box-shadow: none;
    }
    
    &[aria-selected="true"] {
        background-color: ${({ theme }) => (theme === "light" ? "#f77900" : "#e9e9e9")};

        ${SidePanelText} {
            color: ${({ theme }) => (theme === "light" ? "#fff" : "#161616")}; 
        }
    }
`;

export const PanelPageContainer = styled(Pane)`
    padding: 16px;
    background: ${({ theme }) => (theme === "light" ? "#367f87" : "#1f2025")};
    border-left: 1px solid ${({ theme }) => (theme === "light" ? "#ebebeb" : "#1c1c1c")};
`;