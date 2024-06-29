import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect, useContext } from "react";
import { AppContext, AccountContext } from "../../page";
import {
    Table,
    Pagination,
    Pane,
    Tablist,
    Tab,
    Paragraph,
    Text,
    Avatar,
    CalculatorIcon,
    ChartIcon,
    UserIcon,
    ExpandAllIcon,
    PeopleIcon,
    PersonIcon,
    BriefcaseIcon,
    DatabaseIcon,
    InboxIcon,
    InboxGeoIcon,
    ApplicationsIcon,
    CogIcon,
    JoinTableIcon,
    DiagramTreeIcon
} from 'evergreen-ui';
import {
  SettingFilled
} from '@ant-design/icons';
import { SidePanelTab, SidePanelText, PanelPageContainer } from "./styles";
import { ProfileSection } from "./ProfileSection";
import { AllItems } from "../Page/All-Items/All-Items";
import { SharedBank } from "../Page/SharedBank/SharedBank";
import { CharacterViewer } from "../Page/CharacterViewer/CharacterViewer";
import { Settings } from "../Page/Settings/Settings";
import { useTheme } from "../Theme/Theme";

export function SidePanel() {
    const { user, loggedInAccount, setLoggedInAccount } = useContext(AppContext);
    const { characters } = useContext(AccountContext);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { theme } = useTheme();

    const tabs = React.useMemo(() => [
        "Analytics",
        "All Items",
        "Shared Bank",
        "Custom Item Sets",
        "Character Viewer",
        "Settings"
    ], []);

    useEffect(() => {
        console.log("USER: ", user);
        console.log("LOGGED IN ACCOUNT: ", loggedInAccount);
    }, [])

    const returnIcon = (tab) => {
        switch(tab) {
            case "Analytics":
                return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
            case "All Items":
                return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
            case "Shared Bank":
                return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
            case "Custom Item Sets":
                 return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
            case "Character Viewer":
                return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
            case "Settings":
                return (
                    <Pane>
                        <SidePanelText theme={theme}>{tab}</SidePanelText>
                    </Pane>
                )
        }
    }

    const handlePanelPage = (tab) => {
        switch(tab) {
            case "Analytics":
                return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "All Items":
                return <AllItems />
            case "Shared Bank":
                return <SharedBank />
            case "Custom Item Sets":
                 return (
                    <Pane>
                        <Text>{tab}</Text>
                    </Pane>
                )
            case "Character Viewer":
                return <CharacterViewer characters={characters}/>
            case "Settings":
                return <Settings />
        }
    }

    return (
        <Pane display="flex">
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                <ProfileSection user={user} account={loggedInAccount} />
                {tabs.map((tab, index) => {
                    return (
                        <SidePanelTab
                            theme={theme}
                            aria-controls={`panel-${tab}`}
                            direction="vertical"
                            isSelected={index === selectedIndex}
                            key={tab}
                            onSelect={() => setSelectedIndex(index)}
                            height={44}
                        >
                        {returnIcon(tab)}
                        </SidePanelTab>
                    )
                })}
            </Tablist>
            <PanelPageContainer theme={theme} flex="1">
                {tabs.map((tab, index) => (
                    <Pane
                        aria-labelledby={tab}
                        aria-hidden={index !== selectedIndex}
                        display={index === selectedIndex ? 'block' : 'none'}
                        key={tab}
                        role="tabpanel"
                        paddingLeft={24}
                        paddingRight={24}
                        paddingBottom={24}
                        style={{ minHeight: "100vh", height: "fit-content" }}
                    >
                        <Pane>
                            {handlePanelPage(tab)}
                        </Pane>
                    </Pane>
                ))}
            </PanelPageContainer>
        </Pane>
    )
}