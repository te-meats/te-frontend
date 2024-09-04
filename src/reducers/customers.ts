import { createCustomer, deleteCustomer, fetchCustomers, updateCustomer } from '@actions/customers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Customer, CustomerState } from 'src/interfaces';

const initialState: CustomerState = {
    customers: [],
    pending: false,
    error: '',
};

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = '';
            state.customers = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchCustomers.pending, state => {
                state.pending = true;
            })
            .addCase(fetchCustomers.fulfilled, (state, action: PayloadAction<Array<Customer>>) => {
                state.pending = false;
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.pending = false;
            })


            .addCase(createCustomer.pending, state => {
                state.pending = true;
            })
            .addCase(createCustomer.fulfilled, (state, action: PayloadAction<Customer>) => {
                state.pending = false;
                state.customers = [
                    ...state.customers,
                    action.payload
                ];
            })
            .addCase(createCustomer.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(updateCustomer.pending, state => {
                state.pending = true;
            })
            .addCase(updateCustomer.fulfilled, (state, action: PayloadAction<Customer>) => {
                state.pending = false;
                const index = state.customers.findIndex(customer => customer.id === action.payload.id);
                const newCustomerList = [
                    ...state.customers
                ];

                newCustomerList[index] = action.payload;
                state.customers = [
                    ...newCustomerList,
                ];
            })
            .addCase(updateCustomer.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(deleteCustomer.pending, state => {
                state.pending = true;
            })
            .addCase(deleteCustomer.fulfilled, (state, { meta }) => {
                state.customers = state.customers.filter((customer) => customer.id !== meta.arg.id)
                state.pending = false;
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default customersSlice;