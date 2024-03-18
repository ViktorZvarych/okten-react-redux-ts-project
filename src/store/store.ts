import {configureStore} from "@reduxjs/toolkit";
import {allMoviesReducer, loadingReducer} from "./slices";

const store = configureStore({
    reducer: {
        loadingReducer,
        allMovies: allMoviesReducer
    }
})

export {store};