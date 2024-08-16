import { authenticateUser } from '@actions/user';
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store';

const initialState = {
    pending: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = null;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(authenticateUser.pending, state => {
                state.pending = true;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.pending = false;
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export const userConfig = (state: RootState) => state.count.value;

export default userSlice;