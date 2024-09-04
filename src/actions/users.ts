import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";
import { CreateUserConfig, DeleteConfig, UpdateUserConfig, UpdateUserPassword } from "src/interfaces";

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
            config,
        );

        const users = response.data;

        return users;
    },
);

export const updateUser = createAsyncThunk(
    'users/update',
    async (config: UpdateUserConfig) => {
        const response = await authApi.put(
            `users/${config.id}`,
            config,
        );

        const users = response.data;

        return users;
    },
);

export const updatePassword = createAsyncThunk(
    'users/updatePassword',
    async (config: UpdateUserPassword) => {
        const response = await authApi.put(
            `users/updatePassword`,
            config,
        );

        const users = response.data;

        return users;
    },
);

export const deleteUser = createAsyncThunk(
    'users/delete',
    async (config: DeleteConfig) => {
        const response = await authApi.delete(
            `users/${config.id}`
        );

        const users = response.data;

        return users;
    },
);