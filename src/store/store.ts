import {configureStore} from "@reduxjs/toolkit";

import {
    allMoviesReducer,
    genresReducer,
    loadingReducer,
    popularMoviesReducer,
    topRatedMoviesReducer,
    upcomingMoviesReducer
} from "./slices";
import {selectedMovieReducer} from "./slices/selectedMovieSlice.ts";

const store = configureStore({
    reducer: {
        loadingReducer,
        allMovies: allMoviesReducer,
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        selectedMovie: selectedMovieReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
    }
})

export {store};