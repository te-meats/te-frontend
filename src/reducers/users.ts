import { createUser, deleteUser, fetchUsers, updateUser } from '@actions/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, UserState } from 'src/interfaces';

const initialState: AuthState = {
    users: [],
    pending: false,
    error: '',
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: state => {
            state.users = [];
            state.pending = false;
            state.error = '';
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.pending = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<UserState>>) => {
                state.pending = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(createUser.pending, state => {
                state.pending = true;
            })
            .addCase(createUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                state.pending = false;
                state.users = [
                    ...state.users,
                    action.payload
                ];
            })
            .addCase(createUser.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(updateUser.pending, state => {
                state.pending = true;
            })
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                state.pending = false;
                const index = state.users.findIndex(user => user.id === action.payload.id);
                const newUserList = [
                    ...state.users
                ];

                newUserList[index] = action.payload;
                state.users = [
                    ...newUserList,
                ];
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(deleteUser.pending, state => {
                state.pending = true;
            })
            .addCase(deleteUser.fulfilled, (state, { meta }) => {
                state.users = state.users.filter((user) => user.id !== meta.arg.id)
                state.pending = false;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default usersSlice;