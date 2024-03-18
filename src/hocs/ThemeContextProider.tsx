import {createContext, FC, PropsWithChildren, useState} from "react";

import {IThemeContext} from "../interfaces";

interface IProps extends PropsWithChildren {
}

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider: FC<IProps> = ({children}) => {
    const localTheme: string | null = localStorage.getItem('localTheme');
    const [theme, setTheme] = useState(localTheme || 'dark');

    const changeTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
        theme === 'dark'
            ? localStorage.setItem('localTheme', 'light')
            : localStorage.setItem('localTheme', 'dark')
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
                {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeContextProvider}