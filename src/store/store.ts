import {configureStore} from "@reduxjs/toolkit";

import {
    allMoviesReducer,
    genresReducer,
    loadingReducer,
    popularMoviesReducer,
    selectedMovieReducer,
    topRatedMoviesReducer,
    videosReducer,
    upcomingMoviesReducer
} from "./slices";

const store = configureStore({
    reducer: {
        loadingReducer,
        allMovies: allMoviesReducer,
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        selectedMovie: selectedMovieReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        videosObject: videosReducer
    }
})

export {store};