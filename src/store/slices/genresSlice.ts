import {createSlice} from "@reduxjs/toolkit";

interface IState {
    genresIds: string[]
}

const initialState: IState = {
    genresIds: []
};

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
    ...actions
}

export {
    genresReducer,
    genresActions
}