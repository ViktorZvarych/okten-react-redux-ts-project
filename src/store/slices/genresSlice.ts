import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {moviesService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    genres: IGenre[];
    genresIds: string[];
    selectedGenres: IGenre[]
}

const initialState: IState = {
    genres: [],
    genresIds: [],
    selectedGenres: []
};

const getGenres = createAsyncThunk<IGenre[], void>(
    'genresSlice/getGenresNames',
    async (_, {rejectWithValue}) => {
        try {
            const {data: {genres}} = await moviesService.getGenres();
            return genres
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenresIds: (state, action) => {
            state.genresIds = action.payload
        },
        setGenresNames: (state, action) => {
            state.selectedGenres = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
})

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getGenres
}

export {
    genresReducer,
    genresActions
}