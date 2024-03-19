import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    upcomingMovies: IMovies
}

const initialState: IState = {
    upcomingMovies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getUpcomingMovies = createAsyncThunk<IMovies, void>(
    'upcomingMoviesSlice/getUpcomingMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getUpcomingList();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const upcomingMoviesSlice = createSlice({
    name: 'upcomingMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                state.upcomingMovies = action.payload
            })
})

const {reducer: upcomingMoviesReducer, actions} = upcomingMoviesSlice;

const upcomingMoviesActions = {
    ...actions,
    getUpcomingMovies
}

export {
    upcomingMoviesReducer,
    upcomingMoviesActions
}