import { Text, Pane, Tab, Heading } from "evergreen-ui";
import styled from "styled-components";

export const ProfileHeading = styled(Heading)`
    color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")};
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
    border-radius: 0px;

    &:hover {
        background-color: #00ff95;
        ${SidePanelText} {
            color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")}; 
        }
    }

    &:focus {
        background-color: #00b96d;
        box-shadow: none;
    }
    
    &[aria-selected="true"] {
        background-color: #00ff95;

        ${SidePanelText} {
            color: ${({ theme }) => (theme === "light" ? "#52586d" : "#fff")}; 
        }
    }
`;

export const PanelPageContainer = styled(Pane)`
    padding: 16px;
    background: ${({ theme }) => (theme === "light" ? "#f7f7f7" : "#1f2025")};
    border-left: 1px solid ${({ theme }) => (theme === "light" ? "#ebebeb" : "#1c1c1c")};
`;