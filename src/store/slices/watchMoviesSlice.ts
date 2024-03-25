import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ISelectedWatchMovie, IWatchMovie} from "../../interfaces";
import {accountService} from "../../services";
import {accountId} from "./userInfoSlice.ts";

interface IState {
    watchMovies: IWatchMovie[];
    selectedWatchMovie: ISelectedWatchMovie | null;
}

const initialState: IState = {
    watchMovies: [],
    selectedWatchMovie: null
};

const getWatchMoviesList = createAsyncThunk<IWatchMovie[], void>(
    'watchMoviesSlice/getWatchMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data: {results}} = await accountService.getWatchList(accountId);
            return results;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const watchMoviesSlice = createSlice({
    name: 'watchMoviesSlice',
    initialState,
    reducers: {
        setSelectedWatchMovie: (state, action) => {
            state.selectedWatchMovie = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getWatchMoviesList.fulfilled, (state, action) => {
                state.watchMovies = action.payload;
            })
})

const {reducer: watchMoviesReducer, actions} = watchMoviesSlice;

const watchMoviesActions = {
    ...actions,
    getWatchMoviesList
}

export {
    watchMoviesReducer,
    watchMoviesActions
}