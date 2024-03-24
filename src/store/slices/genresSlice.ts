import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../interfaces";
import {moviesService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    genres: IGenre[];
    genresIds: string[]
}

const initialState: IState = {
    genres: [],
    genresIds: []
};

const getGenresNames = createAsyncThunk<IGenre[], void>(
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
    }
})

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getGenresNames
}

export {
    genresReducer,
    genresActions
}