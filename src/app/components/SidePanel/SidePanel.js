import { invoke } from "@tauri-apps/api";
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
import { ProfileSection } from "./ProfileSection";
import { AllItems } from "../Page/All-Items/All-Items";
import { SharedBank } from "../Page/SharedBank/SharedBank";
import { CharacterViewer } from "../Page/CharacterViewer/CharacterViewer";
import { Settings } from "../Page/Settings/Settings";

export function SidePanel() {
    const { user, loggedInAccount, setLoggedInAccount } = useContext(AppContext);
    const { characters } = useContext(AccountContext);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
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
                        {/* <ChartIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "All Items":
                return (
                    <Pane>
                        {/* <ExpandAllIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Shared Bank":
                return (
                    <Pane>
                        {/* <InboxGeoIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Custom Item Sets":
                 return (
                    <Pane>
                        {/* <ApplicationsIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Character Viewer":
                return (
                    <Pane>
                        {/* <DatabaseIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
                    </Pane>
                )
            case "Settings":
                return (
                    <Pane>
                        {/* <CogIcon marginRight={16} size={20} position="relative" top={2} /> */}
                        {/* <SettingFilled marginRight={16} size={20} position="relative" top={2} fontSize={22} /> */}
                        <Text position="relative" bottom={3} fontSize={16}>{tab}</Text>
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
                <ProfileSection user={user} />
                {tabs.map((tab, index) => {
                    return (
                        <Tab
                            aria-controls={`panel-${tab}`}
                            direction="vertical"
                            isSelected={index === selectedIndex}
                            key={tab}
                            onSelect={() => setSelectedIndex(index)}
                            height={44}
                        >
                        {returnIcon(tab)}
                        </Tab>
                    )
                })}
            </Tablist>
            <Pane padding={16} background="#F9FAFA" flex="1">
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
            </Pane>
        </Pane>
    )
}