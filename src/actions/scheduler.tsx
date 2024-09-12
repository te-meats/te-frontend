import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";
import { CreateSchedulerEventConfig, DeleteConfig, UpdateSchedulerEventConfig } from "src/interfaces";

export const fetchSchedulerEvents = createAsyncThunk(
    'scheduler/events/fetch',
    async () => {
        const response = await authApi.get(
            `scheduler/events`,
        );
        
        // const data = response.data.map((event: ProcessedEvent) => ({
        //     title: event.title,
        //     start: new Date(event.start),
        //     end: new Date(event.end),
        // }));

        return response.data;
    },
);

export const createSchedulerEvent = createAsyncThunk(
    'scheduler/events/create',
    async (event: CreateSchedulerEventConfig) => {
        const data: CreateSchedulerEventConfig = {
            title: event.title,
            start: event.start,
            end: event.end,
        }
        const response = await authApi.post(
            `scheduler/events`,
            data,
        );

        return response.data;
    },
);

export const updateSchedulerEvent = createAsyncThunk(
    'scheduler/events/update',
    async (event: UpdateSchedulerEventConfig) => {
        const response = await authApi.put(
            `scheduler/events/${event.id}`,
            event,
        );

        return response.data;
    },
);

export const deleteSchedulerEvent = createAsyncThunk(
    'scheduler/events/delete',
    async (event: DeleteConfig) => {
        const response = await authApi.delete(
            `scheduler/events/${event.id}`
        );

        const users = response.data;

        return users;
    },
);