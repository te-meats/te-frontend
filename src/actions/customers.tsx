import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";
import { CreateCustomerConfig, DeleteConfig, UpdateCustomerConfig } from "src/interfaces";

export const fetchCustomers = createAsyncThunk(
    'customers/fetch',
    async () => {
        const response = await authApi.get(
            `customers/`,
        );

        return response.data;
    },
);

export const createCustomer = createAsyncThunk(
    'customers/create',
    async (customer: CreateCustomerConfig) => {
        const response = await authApi.post(
            `customers/`,
            customer,
        );

        return response.data;
    },
);

export const updateCustomer = createAsyncThunk(
    'customers/update',
    async (customer: UpdateCustomerConfig) => {
        const response = await authApi.put(
            `customers/${customer.id}`,
            customer,
        );

        return response.data;
    },
);

export const deleteCustomer = createAsyncThunk(
    'customers/delete',
    async (config: DeleteConfig) => {
        const response = await authApi.delete(
            `customers/${config.id}`
        );

        const users = response.data;

        return users;
    },
);