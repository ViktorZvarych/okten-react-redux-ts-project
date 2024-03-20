import {Outlet} from "react-router-dom";

import {BackToTopButton, Header, Footer, Loader} from "../components";
import css from './MainLayout.module.css'
import {useThemeContext} from "../hooks";

const MainLayout = () => {
    const themeContext = useThemeContext();

    const theme = themeContext?.theme;

    return (
        <div className={css.main}>
            <div
                className={theme === 'dark' ? css.dark : css.light}
            >
                <Header/>

                <Loader/>

                <Outlet/>

                <Footer/>

                <BackToTopButton/>
            </div>
        </div>

    );
};

export {MainLayout};