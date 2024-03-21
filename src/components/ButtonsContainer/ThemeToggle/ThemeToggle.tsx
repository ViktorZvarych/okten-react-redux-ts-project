import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Box from "@mui/material/Box";
import {useThemeContext} from "../../../hooks";

const ThemeToggle = () => {
    const themeContext = useThemeContext();

    const theme = themeContext?.theme;

    const handleChangeTheme = themeContext?.changeTheme;

    return (
    <Box>
        <IconButton sx={{ml: 1}} onClick={handleChangeTheme} color="inherit">
            {theme === 'dark'
                ? <Brightness7Icon/>
                : <Brightness4Icon/>}
        </IconButton>
    </Box>
    );
};

export {ThemeToggle};