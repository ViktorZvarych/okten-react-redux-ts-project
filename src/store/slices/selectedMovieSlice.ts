import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    selectedMovie: IMovieDetails
}

const initialState: IState = {
    selectedMovie: {
        backdrop_path:         '',
        genres:                [],
        id:                    0,
        poster_path:           '',
        title:                 '',
        video:                 false,
        vote_average:          0,
        vote_count:            0,
    }
};

const getSelectedMovie = createAsyncThunk<IMovieDetails, number>(
    'popularSlice/getSelectedMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieDetailsById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const selectedMovieSlice = createSlice({
    name: 'popularSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getSelectedMovie.fulfilled, (state, action) => {
                state.selectedMovie = action.payload
            })
})

const {reducer: selectedMovieReducer, actions} = selectedMovieSlice;

const selectedMovieActions = {
    ...actions,
    getSelectedMovie
}

export {
    selectedMovieReducer,
    selectedMovieActions
}