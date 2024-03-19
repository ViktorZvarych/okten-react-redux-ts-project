import {configureStore} from "@reduxjs/toolkit";
import {
    allMoviesReducer,
    loadingReducer,
    popularMoviesReducer,
    topRatedMoviesReducer,
    upcomingMoviesReducer
} from "./slices";

const store = configureStore({
    reducer: {
        allMovies: allMoviesReducer,
        loadingReducer,
        popularMovies: popularMoviesReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
    }
})

export {store};