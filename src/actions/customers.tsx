import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@utils/api";

export const fetchCustomers = createAsyncThunk(
    'customers/fetch',
    async () => {
        const response = await api.get(`customers/`);

        return response.data;
    },
);