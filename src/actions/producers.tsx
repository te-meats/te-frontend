import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";
import { CreateProducerConfig, DeleteConfig, UpdateProducerConfig } from "src/interfaces";

export const fetchProducers = createAsyncThunk(
    'producers/fetch',
    async () => {
        const response = await authApi.get(
            `producers/`,
        );

        return response.data;
    },
);

export const createProducer = createAsyncThunk(
    'producers/create',
    async (producer: CreateProducerConfig) => {
        const response = await authApi.post(
            `producers/`,
            producer,
        );

        return response.data;
    },
);

export const updateProducer = createAsyncThunk(
    'producers/update',
    async (producer: UpdateProducerConfig) => {
        const response = await authApi.put(
            `producers/${producer.id}`,
            producer,
        );

        return response.data;
    },
);

export const deleteProducer = createAsyncThunk(
    'producers/delete',
    async (config: DeleteConfig) => {
        const response = await authApi.delete(
            `producers/${config.id}`
        );

        const users = response.data;

        return users;
    },
);