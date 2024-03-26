import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import {useScrollTrigger} from "@mui/material";

import css from './Header.module.css'
import {SideBar} from "../SideBar";
import {ThemeToggle} from "../ButtonsContainer";
import {SearchInput} from "../MovieContainer";
import {LoginToggle, UserIcon} from "../ButtonsContainer";
import {useAppSelector, useHandleLogInOut} from "../../hooks";
import {Logo} from "./Logo";

const Header = () => {
    const {localToken, auth, setAuth} = useHandleLogInOut();

    useEffect(() => {
        setAuth(!!localToken);
    }, [localToken, setAuth]);

    useAppSelector(state => state)

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState: boolean) => !prevState);
    };

    const trigger = useScrollTrigger({
        target: undefined,
    });

    return (
        <header className={css.header}>

            <Box>
                <CssBaseline/>

                <Slide appear={false} direction="down" in={!trigger}>
                    <AppBar color='error' component="nav">
                        <Toolbar>
                            <div className={css.flex}>
                                <Logo/>

                                <NavLink to={`/movies/list`}>
                                    <Button sx={{color: 'snow'}}>
                                        <h2>Movies</h2>
                                    </Button>
                                </NavLink>

                                {auth && <SearchInput/>}
                            </div>


                            <div className={css.flex}>
                                {auth &&
                                    <div className={css.icons}>
                                        <UserIcon/>

                                        <ThemeToggle/>

                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            edge="start"
                                            sx={{marginLeft: 2}}
                                            onClick={handleDrawerToggle}
                                        >
                                            <svg
                                                 className={css.heartIcon}
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path>
                                            </svg>
                                        </IconButton>
                                    </div>
                                }

                                {!auth && <LoginToggle/>}
                            </div>
                        </Toolbar>
                    </AppBar>
                </Slide>

                {auth && <SideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>}

            </Box>
        </header>

    );

}


export {Header};