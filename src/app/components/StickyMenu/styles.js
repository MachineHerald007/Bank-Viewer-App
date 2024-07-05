import { Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const StickyMenuPane = styled(Pane)`
    text-align: end;
    margin-bottom: 20px;
    margin-right: ${({ context }) => (context === "sidepanel-page" ? "0px" : "14px")};
    margin-top: ${({ context }) => (context === "sidepanel-page" ? "0px" : "10px")}
`;