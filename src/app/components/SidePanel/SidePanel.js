import { invoke } from "@tauri-apps/api/tauri";
import React, { useState, useEffect, useContext, createContext, useMemo, useCallback } from "react";
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
import { SettingFilled } from '@ant-design/icons';
import { SidePanelPane, SidePanelTab, SidePanelText, PanelPageContainer } from "./styles";
import { StickyMenu } from "../StickyMenu/StickyMenu";
import { ProfileSection } from "./ProfileSection";
import { AllItems } from "../Page/All-Items/All-Items";
import { SharedBank } from "../Page/SharedBank/SharedBank";
import { CustomItemSets } from "../Page/CustomItemSets/CustomItemSets";
import { CharacterViewer } from "../Page/CharacterViewer/CharacterViewer";
import { Settings } from "../Page/Settings/Settings";
import { useTheme } from "../Theme/Theme";
import { AppContext } from "../../page";

export const AccountContext = createContext();

export function SidePanel() {
    const { user, loggedInAccount, dashboardState, setDashboardState } = useContext(AppContext);
    const [accountData, setAccountData] = useState({});
    const [sharedBank, setSharedBank] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { theme } = useTheme();

    const tabs = useMemo(() => [
        "Analytics",
        "All Items",
        "Shared Bank",
        "Custom Item Sets",
        "Character Viewer",
        "Settings"
    ], []);

    const saveSelectedTab = useCallback((tab) => {
        invoke("save_selected_tab", { selectedTab: tab })
            .then(res => {})
            .catch(err => console.log(err));
    }, []);

    const handleTabSelect = useCallback((tab, index) => {
        setSelectedIndex(index);
        saveSelectedTab(tab);
    }, [saveSelectedTab]);

    const getSelectedTab = useCallback((tab) => {
        switch(tab) {
            case "Analytics": setSelectedIndex(0); break;
            case "All Items": setSelectedIndex(1); break;
            case "Shared Bank": setSelectedIndex(2); break;
            case "Custom Item Sets": setSelectedIndex(3); break;
            case "Character Viewer": setSelectedIndex(4); break;
            case "Settings": setSelectedIndex(5); break;
            default: setSelectedIndex(0);
        }
    }, []);

    useEffect(() => {
        invoke("get_dashboard_state")
            .then(dashboard_state => {
                setDashboardState(dashboard_state);
                getSelectedTab(dashboard_state.selected_tab);
            })
            .catch(err => console.log(err));
    }, [getSelectedTab, setDashboardState]);

    useEffect(() => {
        if (dashboardState.logged_in_account_id) {
            invoke("get_account_data", {
                accountId: dashboardState.logged_in_account_id,
                lang: dashboardState.lang
            })
            .then(res => {
                setAccountData(res);
                setSharedBank(res.shared_bank);
                setCharacters(res.characters);
            })
            .catch(err => console.log(err));
        }
    }, [dashboardState]);

    const returnIcon = (tab) => (
        <Pane>
            <SidePanelText theme={theme}>{tab}</SidePanelText>
        </Pane>
    );

    const handlePanelPage = (tab) => {
        switch(tab) {
            case "Analytics":           return <Pane><Text>{tab}</Text></Pane>;
            case "All Items":           return <Pane><AllItems accountData={accountData} /></Pane>;
            case "Shared Bank":         return <Pane><SharedBank sharedBank={sharedBank} /></Pane>;
            case "Custom Item Sets":    return <Pane><CustomItemSets /></Pane>;
            case "Character Viewer":    return <Pane><CharacterViewer characters={characters} /></Pane>;
            case "Settings":            return <Pane><Settings /></Pane>;
            default: return null;
        }
    };

    return (
        <AccountContext.Provider value={{ accountData, setAccountData }}>
            <SidePanelPane theme={theme} display="flex" paddingLeft={24}>
                <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                    <ProfileSection user={user} account={loggedInAccount} />
                    {tabs.map((tab, index) => (
                        <SidePanelTab
                            theme={theme}
                            aria-controls={`panel-${tab}`}
                            direction="vertical"
                            isSelected={index === selectedIndex}
                            key={tab}
                            onSelect={() => handleTabSelect(tab, index)}
                            height={44}
                        >
                            {returnIcon(tab)}
                        </SidePanelTab>
                    ))}
                    <SidePanelTab
                        theme={theme}
                        height={44}
                        width="100%"
                    >
                        <SidePanelText theme={theme} width="inherit">Logout</SidePanelText>
                    </SidePanelTab>
                </Tablist>
                <PanelPageContainer theme={theme} flex="1">
                    <StickyMenu context="sidepanel-page" />
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
                            {handlePanelPage(tab)}
                        </Pane>
                    ))}
                </PanelPageContainer>
            </SidePanelPane>
        </AccountContext.Provider>
    );
}