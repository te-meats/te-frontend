// import { authenticateUser } from '@actions/user';
import { fetchCustomers } from '@actions/customers';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customers: [],
    pending: false,
    error: null,
};

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = null;
            state.customers = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchCustomers.pending, state => {
                state.pending = true;
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.pending = false;
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default customersSlice;