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
    const { user, loggedInAccount, setLoggedInAccount, dashboardState } = useContext(AppContext);
    const [accountData, setAccountData] = useState({});
    const [sharedBank, setSharedBank] = useState([])
    const [characters, setCharacters] = useState([]);
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

    const saveSelectedTab = (tab) => {
        invoke("save_selected_tab", {
            selectedTab: tab
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    const setSelectedTab = (tab, index) => {
        setSelectedIndex(index);
        saveSelectedTab(tab);
    };

    const getSelectedTab = (tab) => {
        switch(tab) {
            case "Analytics":
                setSelectedIndex(0);
                break;
            case "All Items":
                setSelectedIndex(1);
                break;
            case "Shared Bank":
                setSelectedIndex(2);
                break;
            case "Custom Item Sets":
                setSelectedIndex(3);
                break;
            case "Character Viewer":
                setSelectedIndex(4);
                break;
            case "Settings":
                setSelectedIndex(5);
                break;
        }
    };

    useEffect(() => {
        console.log("USER: ", user);
        console.log("LOGGED IN ACCOUNT: ", loggedInAccount);
        console.log("DASHBOARD STATE: ", dashboardState);
        getSelectedTab(dashboardState.selected_tab);
        
        invoke("get_account_data", {
            accountId: dashboardState.logged_in_account_id
        })
        .then(res => {
            setAccountData(res);
            setSharedBank(res.shared_bank);
            setCharacters(res.characters);
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log("ACCOUNT DATA: ", accountData);
        console.log("CHARACTER DATA: ", characters);
    }, [accountData, sharedBank, characters])

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
                return <AllItems accountData={accountData} />
            case "Shared Bank":
                return <SharedBank sharedBank={sharedBank} />
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
                            onSelect={() => setSelectedTab(tab, index)}
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