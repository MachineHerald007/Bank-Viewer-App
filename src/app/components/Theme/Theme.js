import { invoke } from '@tauri-apps/api/tauri';
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const getTheme = async () => {
    try {
        const theme = await invoke("get_theme");
        return theme;
    } catch (err) {
        console.error(err);
        return 'light';
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const fetchTheme = async () => {
            const initialTheme = await getTheme();
            setTheme(initialTheme);
            setIsThemeLoaded(true);
        };

        fetchTheme();
    }, []);

    useEffect(() => {
        if (isThemeLoaded) {
            document.body.className = theme;
        }
    }, [theme, isThemeLoaded]);

    if (!isThemeLoaded) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
