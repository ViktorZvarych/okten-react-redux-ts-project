import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {FC} from "react";

interface IProps {
    mobileOpen: boolean,
    handleDrawerToggle: void
}

const SideBar: FC<IProps> = ({mobileOpen, handleDrawerToggle}) => {

    return (
        <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{keepMounted: true}}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    background: 'darkslategray'
                },
            }}
        >
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{my: 2}}>
                    <NavLink to={'/movies'}>
                        <div style={{backgroundColor: '#d32f2f'}}>
                            <Button onClick={handleDrawerToggle} sx={{color: 'snow'}}>
                                <p>Watch List</p>
                            </Button>
                        </div>
                    </NavLink>
                </Typography>
            </Box>
        </Drawer>
    );
};

export {SideBar};