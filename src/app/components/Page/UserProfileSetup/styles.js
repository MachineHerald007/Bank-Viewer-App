import { Avatar, Text, Pane } from "evergreen-ui"
import styled from "styled-components"

export const HoverPane = styled(Pane)`
    width: fit-content;
    margin-bottom: 24px;
    border-radius: 50px;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: grey;
        color: white;
    }
`;

export const ProfileAvatar = styled(Avatar)`
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const CenteredPane = styled(Pane)`
    height: fit-content;
    width: fit-content;
    max-width: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    background: ${({ theme }) => (theme.mode === 'light' ? '#FFFFFF' : '#24252B')};
    color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};

    .ub-color_474d66 {
        color: ${({ theme }) => (theme.mode === 'light' ? '#101840' : '#fff')};
    }
`;