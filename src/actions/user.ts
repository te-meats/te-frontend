import { createAsyncThunk } from "@reduxjs/toolkit";
import { unAuthApi } from "@utils/api";
import { LoginConfig } from "src/interfaces";

export const authenticateUser = createAsyncThunk(
    'user/authenticate',
    async (config: LoginConfig) => {
        const response = await unAuthApi.post(`api-token-auth/`, {
            username: config.username,
            password: config.password,
        });

        const auth = response.data;

        return auth;
    },
);