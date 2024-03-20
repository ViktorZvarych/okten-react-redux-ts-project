import {configureStore} from "@reduxjs/toolkit";

import {
    allMoviesReducer,
    genresReducer,
    loadingReducer,
    popularMoviesReducer,
    topRatedMoviesReducer,
    upcomingMoviesReducer
} from "./slices";

const store = configureStore({
    reducer: {
        loadingReducer,
        allMovies: allMoviesReducer,
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
    }
})

export {store};