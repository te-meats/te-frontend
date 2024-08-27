import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";
import { CreateUserConfig } from "src/interfaces";

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const response = await authApi.get(
            `users/`,
        );

        const users = response.data;

        return users;
    },
);

export const createUser = createAsyncThunk(
    'users/create',
    async (config: CreateUserConfig) => {
        const response = await authApi.post(
            `users/`,
            config
        );

        const users = response.data;

        return users;
    },
);