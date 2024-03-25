import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IVideosObject} from "../../interfaces";
import {moviesService} from "../../services";

interface IState {
    videosObject: IVideosObject
}

const initialState: IState = {
    videosObject: {
        results: []
    }
};

const getVideos = createAsyncThunk<IVideosObject, number>(
    'videosSlice/getVideos',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getVideos(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const videosSlice = createSlice({
    name: 'videosSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videosObject = action.payload
            })
})

const {reducer: videosReducer, actions} = videosSlice;

const videosActions = {
    ...actions,
    getVideos
}

export {
    videosReducer,
    videosActions
}