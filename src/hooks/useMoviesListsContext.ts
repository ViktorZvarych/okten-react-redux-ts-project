import {useContext} from "react";

import {MoviesListsContext} from "../hocs";

const useMoviesListsContext = () => useContext(MoviesListsContext)

export {useMoviesListsContext}