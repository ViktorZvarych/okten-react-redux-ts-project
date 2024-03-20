import {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Slide from '@mui/material/Slide';
import {useScrollTrigger} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import css from './Header.module.css'
import {authService} from "../../services";
import {token} from "../../constants";
import {SideBar} from "../SideBar";
import {ThemeToggle} from "./ThemeToggle";
import {SearchInput} from "../MovieContainer";

const Header = () => {
    const localToken = authService.getToken();

    const [auth, setAuth] = useState<boolean>(!!localToken);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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

    return (
        <header className={css.header}>

            <Box>
                <CssBaseline/>

                <Slide appear={false} direction="down" in={!trigger}>
                    <AppBar color='error' component="nav">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}
                            >
                                <NavLink to={'movies'}>
                                    <Button sx={{color: 'snow'}}>
                                        <h1 className='logo'>MovieDB</h1>
                                    </Button>
                                </NavLink>
                            </Typography>


                            {auth &&<SearchInput/>}

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
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>

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

                            <ThemeToggle/>

                            {auth && (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    sx={{marginLeft: 2}}
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            )}
                        </Toolbar>
                    </AppBar>
                </Slide>

                {auth && <SideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>}

            </Box>
        </header>

    );

}


export {Header};