import {configureStore} from "@reduxjs/toolkit";

import {
    allMoviesReducer,
    genresReducer,
    loadingReducer,
    popularMoviesReducer,
    topRatedMoviesReducer,
    upcomingMoviesReducer, youTubeLinkReducer
} from "./slices";
import {selectedMovieReducer} from "./slices/selectedMovieSlice.ts";
import {videosReducer} from "./slices/videosSlice.ts";

const store = configureStore({
    reducer: {
        loadingReducer,
        allMovies: allMoviesReducer,
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        selectedMovie: selectedMovieReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        videosObject: videosReducer,
        youTubLink: youTubeLinkReducer
    }
})

export {store};