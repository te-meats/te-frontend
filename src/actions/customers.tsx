import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";

export const fetchCustomers = createAsyncThunk(
    'customers/fetch',
    async () => {
        const response = await authApi.get(
            `customers/`,
        );

        return response.data;
    },
);