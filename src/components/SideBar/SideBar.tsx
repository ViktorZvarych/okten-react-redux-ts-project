import {FC, useEffect} from "react";
import {NavLink} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {watchMoviesActions} from "../../store";

interface IProps {
    mobileOpen: boolean,
    handleDrawerToggle: (() => void) | undefined
}

const SideBar: FC<IProps> = ({mobileOpen, handleDrawerToggle}) => {
    const {watchMovies} = useAppSelector(state => state.watchMovies);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(watchMoviesActions.getWatchMoviesList())
    }, [dispatch]);

    useEffect(() => {
        console.log(watchMovies)
    }, [watchMovies]);

    
    return (
        <Drawer
            anchor="left"
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
            <ul>
                {watchMovies.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </Drawer>
    );
};

export {SideBar};