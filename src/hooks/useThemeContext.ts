import {useContext} from "react";

import {ThemeContext} from "../hocs";

const useThemeContext = () => useContext(ThemeContext)

export {useThemeContext}