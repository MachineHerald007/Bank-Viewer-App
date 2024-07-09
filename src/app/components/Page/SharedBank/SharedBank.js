import React, { useState, useEffect, useMemo } from "react";
import {
    Avatar,
    Heading,
    SearchInput,
    Text,
    Table,
    Pagination,
    Pane,
} from 'evergreen-ui';
import {
    StyledText,
    ItemPane,
    ItemRow,
    ItemTitleRow,
    ItemTable,
    SearchBar,
    ExpandButton,
    Bracket
} from "../styles";
import { renderItemRow } from "@/app/util";
import { useTheme } from "../../Theme/Theme";

export function SharedBank({ sharedBank }) {
    const [items, setItems] = useState([]);
    const [classicItems, setClassicItems] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        let _items = [];
        let _classicItems = [];

        for (let key in sharedBank) {
            for (let prop in sharedBank[key]) {
                if (sharedBank[key][prop]["account_type"] === "NORMAL") {
                    _items.push(sharedBank[key]);
                } else {
                    _classicItems.push(sharedBank[key]);
                }
            }
        }

        setItems(_items);
        setClassicItems(_classicItems);
    }, [sharedBank]);

    const renderedItems = useMemo(() => (
        items.map((item, index) => (
            <ItemRow
                theme={theme}
                key={`shared_bank-${index}`}
                isSelectable
                onSelect={() => console.log(item)}
            >
                <Table.TextCell>
                    {renderItemRow(item, theme)}
                </Table.TextCell>
            </ItemRow>
        ))
    ), [items, theme]);

    const renderedClassicItems = useMemo(() => (
        classicItems.map((item, index) => (
            <ItemRow
                theme={theme}
                key={`shared_bank-${index}`}
                isSelectable
                onSelect={() => console.log(item)}
            >
                <Table.TextCell>
                    {renderItemRow(item, theme)}
                </Table.TextCell>
            </ItemRow>
        ))
    ), [classicItems, theme]);

    return (
        <ItemPane theme={theme}>
            <Heading size={600} color={theme === "light" ? "#efefef" : "#fff"}>
                Shared Bank
            </Heading>
            <SearchBar theme={theme} marginTop={24} placeholder="Search Items..." />
            <ItemTable theme={theme}>
                <Table.Body>
                    <ItemTitleRow theme={theme} isSelectable>
                        <Table.TextCell>
                            <StyledText marginLeft={16}>
                                <b>Shared Bank - Normal</b>
                                <Bracket type="left">[</Bracket>
                                    <b>{items.length > 0 ? items.length - 1 : items.length}/200</b>
                                <Bracket type="right">]</Bracket>
                            </StyledText>
                        </Table.TextCell>
                    </ItemTitleRow>
                    {renderedItems}
                    <ItemTitleRow theme={theme} isSelectable>
                        <Table.TextCell>
                            <StyledText marginLeft={16}>
                                <b>Shared Bank - Classic</b>
                                <Bracket type="left">[</Bracket>
                                    <b>{classicItems.length > 0 ? classicItems.length - 1 : classicItems.length}/200</b>
                                <Bracket type="right">]</Bracket>
                            </StyledText>
                        </Table.TextCell>
                    </ItemTitleRow>
                    {renderedClassicItems}
                </Table.Body>
            </ItemTable>
        </ItemPane>
    );
}