import { Pane } from 'evergreen-ui';
import { Switch } from "antd";
import styled from 'styled-components';

export const ThemeToggleSwitch = styled(Switch)`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1677ff;
    font-size: 14px;
    line-height: 22px;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    position: relative;
    display: inline-block;
    min-width: 44px;
    height: 28px;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-switch .ant-switch-handle::before {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        bottom: 6px;
        inset-inline-start: 0;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
        transition: all 0.2s ease-in-out;
        content: "";
    }

    &:where(.css-dev-only-do-not-override-zg0ahe).ant-switch .ant-switch-handle::before {
        position: absolute;
        top: 0px;
        inset-inline-end: 0;
        bottom: 8px;
        inset-inline-start: 0;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
        transition: all 0.2s ease-in-out;
        content: "";
        height: 24px;
    }
`;