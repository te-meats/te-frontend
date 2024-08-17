import { authenticateUser } from '@actions/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Auth, AuthState } from 'src/interfaces';

const initialState: AuthState = {
    pending: false,
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = '';
        },
    },

    extraReducers: builder => {
        builder
            .addCase(authenticateUser.pending, state => {
                state.pending = true;
            })
            .addCase(authenticateUser.fulfilled, (state, action: PayloadAction<Auth>) => {
                state.pending = false;
                localStorage.setItem("token", action.payload.token)
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default userSlice;