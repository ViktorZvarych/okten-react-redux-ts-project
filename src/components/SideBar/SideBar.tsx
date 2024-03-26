import {FC} from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import css from './SideBar.module.css';
import {WatchList} from "../WatchListContainer";

interface IProps {
    mobileOpen: boolean,
    handleDrawerToggle: (() => void) | undefined
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
                    width: '50vw',
                    maxWidth: 350,
                    background: 'darkslategray',
                    color: 'snow'
                },
            }}
        >
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{my: 2}}>
                    <div className={css.SideBarHeader}>
                        <h3>Watch List</h3>

                        <Button onClick={handleDrawerToggle} sx={{color: 'snow'}}>
                            <p>X</p>
                        </Button>
                    </div>
                </Typography>
            </Box>
            <WatchList/>
        </Drawer>
    );
};

export {SideBar};