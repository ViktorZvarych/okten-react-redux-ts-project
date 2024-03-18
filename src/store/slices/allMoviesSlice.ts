import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovies} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    allMovies: IMovies
}

const initialState: IState = {
    allMovies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getAllMovies = createAsyncThunk<IMovies, { params: string }>(
    'allMoviesSlice/getAllMovies',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(params);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const allMoviesSlice = createSlice({
    name: 'allMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.allMovies = action.payload
            })
})

const {reducer: allMoviesReducer, actions} = allMoviesSlice;

const allMoviesActions = {
    ...actions,
    getAllMovies
}

export {
    allMoviesReducer,
    allMoviesActions
}