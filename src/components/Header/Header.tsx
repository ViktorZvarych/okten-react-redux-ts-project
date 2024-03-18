// I know that this component must be devided into smaller
// I`m going to do it in a good time))

import {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Slide from '@mui/material/Slide';
import {useScrollTrigger} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import css from './Header.module.css'
import {SearchInput} from "../SearchInput/SearchInput";
import {authService} from "../../services";
import {token} from "../../constants";
import {useThemeContext} from "../../hooks";
import {GenresList} from "../MovieContainer/Genres/GenresList";
import {SortInput} from "../MovieContainer/SortInput/SortInput";


const drawerWidth = 240;


const Header = () => {
    console.log('render Footer');

    const localToken = authService.getToken();

    const [auth, setAuth] = useState(!!localToken);

    const [mobileOpen, setMobileOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        setAuth(isChecked);

        if (isChecked) {
            authService.setToken(token);
            navigate('/movies'); // Redirect to movies page after logging in
        } else {
            authService.removeToken();
            navigate('/login'); // Redirect to login page after logging out
        }
    };

    useEffect(() => {
        setAuth(!!localToken);
    }, [localToken]);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState: boolean) => !prevState);
    };

    const trigger = useScrollTrigger({
        target: undefined,
    });

    const themeContext = useThemeContext();

    const theme = themeContext?.theme;
    const changeTheme = themeContext?.changeTheme;


    return (
        <header className={css.header}>

            <Box sx={{display: 'flex'}}>

                <CssBaseline/>

                <Slide appear={false} direction="down" in={!trigger}>
                    <AppBar color='error' component="nav">
                        <Toolbar>
                            {auth && (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            )}

                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}
                            >
                                <NavLink to={'movies'}>
                                    <Button sx={{color: 'snow'}}>
                                        MovieDB
                                    </Button>
                                </NavLink>
                            </Typography>

                            {auth && <SearchInput/>}

                            {!auth && (
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={auth}
                                                onChange={handleChangeLogin}
                                                aria-label="login switch"
                                                color='error'
                                            />
                                        }
                                        label={auth ? 'Logout' : 'Login'}
                                    />
                                </FormGroup>
                            )}

                            {auth && (
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle/>
                                    </IconButton>

                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}

                                        <FormGroup onClick={handleClose}>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={auth}
                                                        onChange={handleChangeLogin}
                                                        aria-label="login switch"
                                                        color='error'
                                                    />
                                                }
                                                label={auth ? 'Logout' : 'Login'}
                                            />
                                        </FormGroup>
                                    </Menu>
                                </div>
                            )}

                            <Box>
                                <IconButton sx={{ml: 1}} onClick={changeTheme} color="inherit">
                                    {theme === 'dark'
                                        ? <Brightness7Icon/>
                                        : <Brightness4Icon/>}
                                </IconButton>
                            </Box>

                        </Toolbar>
                    </AppBar>
                </Slide>

                {auth && (
                    <nav>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{keepMounted: true}}
                            sx={{'& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                    width: drawerWidth},
                            }}
                        >
                            <Box sx={{textAlign: 'center'}}>
                                <Typography variant="h6" sx={{my: 2}}>
                                    <NavLink to={'/movies'}>
                                        <div style={{backgroundColor: 'red'}}>
                                            <Button onClick={handleDrawerToggle} sx={{color: 'snow'}}>
                                                MovieDB
                                            </Button>
                                        </div>
                                    </NavLink>
                                </Typography>

                                <Divider/>

                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{textAlign: 'center', display: 'block'}}>
                                            <GenresList/>
                                        </ListItemButton>
                                    </ListItem>

                                    <Divider/>

                                    <ListItem disablePadding>
                                        <ListItemButton sx={{textAlign: 'center', display: 'block'}}>
                                            <SortInput/>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </nav>
                )}


            </Box>
        </header>

    );

}


export {Header};