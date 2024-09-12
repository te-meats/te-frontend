import { fetchLiveWeight } from '@actions/weightStation';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeightStation, WeightStationState } from 'src/interfaces';

const initialState: WeightStationState = {
    weightStation: {
        live_weight: 0.0,
    },
    pending: false,
    error: '',
};

const weightStationSlice = createSlice({
    name: 'weightStation',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = '';
            state.weightStation = {
                live_weight: 0.0,
            };
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchLiveWeight.pending, state => {
                state.pending = true;
            })
            .addCase(fetchLiveWeight.fulfilled, (state, action: PayloadAction<WeightStation>) => {
                state.pending = false;
                state.weightStation = action.payload;
            })
            .addCase(fetchLiveWeight.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default weightStationSlice;