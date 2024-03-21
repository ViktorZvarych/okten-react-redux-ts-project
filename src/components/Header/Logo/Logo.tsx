import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Logo = () => {

    return (
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}
        >
            <NavLink to={`/`}>
                <Button sx={{color: 'snow'}}>
                    <h1 className='logo'>Movies</h1>
                </Button>
            </NavLink>
        </Typography>
    );
};

export {Logo};