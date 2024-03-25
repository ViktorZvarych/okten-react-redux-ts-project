import {configureStore} from "@reduxjs/toolkit";

import {
    allMoviesReducer,
    genresReducer,
    loadingReducer,
    popularMoviesReducer,
    selectedMovieReducer,
    topRatedMoviesReducer,
    videosReducer,
    upcomingMoviesReducer,
    userInfoReducer,
    watchMoviesReducer
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
        videosObject: videosReducer,

        userInfo: userInfoReducer,
        watchMovies: watchMoviesReducer
    }
})

export {store};