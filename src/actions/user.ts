import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginConfig } from "src/interfaces";

export const authenticateUser = createAsyncThunk(
    'user/authenticate',
    async (config: LoginConfig) => {

        console.log(config.username);
        console.log(config.password);

        fetch('http://127.0.0.1:8000/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })

        return {};
    },
);