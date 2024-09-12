import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@utils/api";

export const fetchLiveWeight = createAsyncThunk(
    'weightStation/fetch',
    async () => {
        const response = await authApi.get(
            `weight-station/live-weight`,
        );

        return response.data;
    },
);
