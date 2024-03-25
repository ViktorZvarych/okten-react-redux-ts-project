import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUserInfo} from "../../interfaces";
import {accountService} from "../../services";

interface IState {
    userInfo: IUserInfo | null;
    token: string;
    accountId: number;
}

const initialState: IState = {
    userInfo: null,
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNhZWQ2NjlhMmIwMjg0YzU5ZDU1YTJiNDdjMmE5MyIsInN1YiI6IjY1ZDlhMjRlYmVmZDkxMDE2NDFmNDJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aJoaFFsVmULd5ExFZmj-9_Sy6htittdWGTy_RQJCvJY',
    accountId: 21028196,
};

const getUserInfo = createAsyncThunk<IUserInfo, void>(
    'userInfoSlice/getUserInfo',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await accountService.getUserDetails(initialState.accountId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })
})

const {reducer: userInfoReducer, actions} = userInfoSlice;

const userInfoActions = {
    ...actions,
    getUserInfo
}

const {accountId} = initialState;

export {
    userInfoReducer,
    userInfoActions,
    accountId
}