import {Outlet} from "react-router-dom";

import {BackToTopButton, Header, Footer} from "../components";
import css from './MainLayout.module.css'
import {useThemeContext} from "../hooks";

const MainLayout = () => {
    console.log('render MainLayout');

    const themeContext = useThemeContext();

    const theme = themeContext?.theme;


    return (
        <div className={css.main}>
            <div
                className={theme === 'dark' ? css.dark : css.light}
            >
                <Header/>

                <Outlet/>

                <Footer/>

                <BackToTopButton/>
            </div>
        </div>

    );
};

export {MainLayout};