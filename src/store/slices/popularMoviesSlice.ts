import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    popularMovies: IMovies
}

const initialState: IState = {
    popularMovies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getPopularMovies = createAsyncThunk<IMovies, void>(
    'getTopRatedMovies/getTopRatedMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopularList();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const popularSlice = createSlice({
    name: 'popularSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload
            })
})

const {reducer: popularMoviesReducer, actions} = popularSlice;

const popularMoviesActions = {
    ...actions,
    getPopularMovies
}

export {
    popularMoviesReducer,
    popularMoviesActions
}