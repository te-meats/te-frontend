import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@utils/api";

export const fetchCustomers = createAsyncThunk(
    'customers/fetch',
    async () => {
        const config = {
            headers: { 'Authorization': `Token ${localStorage.getItem("token")}`}
        }
        const response = await api.get(
            `customers/`,
            config,
        );

        return response.data;
    },
);