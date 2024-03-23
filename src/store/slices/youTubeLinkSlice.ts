import {createSlice} from "@reduxjs/toolkit";

interface IState {
    youTubeLink: string
}

const initialState: IState = {
    youTubeLink: ''
};

const youTubeLinkSlice = createSlice({
    name: 'youTubeLinkSlice',
    initialState,
    reducers: {
        setYouTubeLink: (state, action) => {
            state.youTubeLink = action.payload
        },
    }
})

const {reducer: youTubeLinkReducer, actions} = youTubeLinkSlice;

const youTubeLinkActions = {
    ...actions
}

export {
    youTubeLinkReducer,
    youTubeLinkActions
}