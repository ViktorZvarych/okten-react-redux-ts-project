import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const Logo = () => {

    return (
            <NavLink to={`/movies/hero`}>
                <Button sx={{color: 'snow'}}>
                    <h1 className='logo'>App</h1>
                </Button>
            </NavLink>
    );
};

export {Logo};