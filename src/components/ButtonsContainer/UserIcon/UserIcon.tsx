import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import {MouseEvent, useState} from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useHandleLogInOut} from "../../../hooks";

const UserIcon = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const {auth, handleChangeLogin} = useHandleLogInOut();

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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
    );
};

export {UserIcon};