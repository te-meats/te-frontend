import { createSchedulerEvent, deleteSchedulerEvent, fetchSchedulerEvents, updateSchedulerEvent } from '@actions/scheduler';
import { ProcessedEvent } from '@aldabil/react-scheduler/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SchedulerState } from 'src/interfaces';

const initialState: SchedulerState = {
    events: [],
    pending: false,
    error: '',
};

const schedulerSlice = createSlice({
    name: 'scheduler',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = '';
            state.events = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchSchedulerEvents.pending, state => {
                state.pending = true;
            })
            .addCase(fetchSchedulerEvents.fulfilled, (state, action: PayloadAction<Array<ProcessedEvent>>) => {
                state.pending = false;
                state.events = action.payload;
            })
            .addCase(fetchSchedulerEvents.rejected, (state, action) => {
                state.pending = false;
            })


            .addCase(createSchedulerEvent.pending, state => {
                state.pending = true;
            })
            .addCase(createSchedulerEvent.fulfilled, (state, action: PayloadAction<ProcessedEvent>) => {
                state.pending = false;
                state.events = [
                    ...state.events,
                    action.payload
                ];
            })
            .addCase(createSchedulerEvent.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(updateSchedulerEvent.pending, state => {
                state.pending = true;
            })
            .addCase(updateSchedulerEvent.fulfilled, (state, action: PayloadAction<ProcessedEvent>) => {
                state.pending = false;
                const index = state.events.findIndex(event => event.id === action.payload.id);
                const newEventList = [
                    ...state.events
                ];

                newEventList[index] = action.payload;
                state.events = [
                    ...newEventList,
                ];
            })
            .addCase(updateSchedulerEvent.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(deleteSchedulerEvent.pending, state => {
                state.pending = true;
            })
            .addCase(deleteSchedulerEvent.fulfilled, (state, { meta }) => {
                state.events = state.events.filter((event) => event.id !== meta.arg.id)
                state.pending = false;
            })
            .addCase(deleteSchedulerEvent.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default schedulerSlice;