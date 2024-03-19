import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    topRatedMovies: IMovies
}

const initialState: IState = {
    topRatedMovies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getTopRatedMovies = createAsyncThunk<IMovies, void>(
    'topRatedMoviesSlice/getTopRatedMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getTopRatedList();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const topRatedMoviesSlice = createSlice({
    name: 'topRatedMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload
            })
})

const {reducer: topRatedMoviesReducer, actions} = topRatedMoviesSlice;

const topRatedMoviesActions = {
    ...actions,
    getTopRatedMovies
}

export {
    topRatedMoviesReducer,
    topRatedMoviesActions
}