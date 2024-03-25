import {useEffect, useState} from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
                                            <MenuIcon/>
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