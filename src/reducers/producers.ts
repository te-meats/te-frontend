import { createProducer, deleteProducer, fetchProducers, updateProducer } from '@actions/producers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Producer, ProducerState } from 'src/interfaces';

const initialState: ProducerState = {
    producers: [],
    pending: false,
    error: '',
};

const producersSlice = createSlice({
    name: 'producers',
    initialState,
    reducers: {
        reset: state => {
            state.pending = false;
            state.error = '';
            state.producers = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchProducers.pending, state => {
                state.pending = true;
            })
            .addCase(fetchProducers.fulfilled, (state, action: PayloadAction<Array<Producer>>) => {
                state.pending = false;
                state.producers = action.payload;
            })
            .addCase(fetchProducers.rejected, (state, action) => {
                state.pending = false;
            })


            .addCase(createProducer.pending, state => {
                state.pending = true;
            })
            .addCase(createProducer.fulfilled, (state, action: PayloadAction<Producer>) => {
                state.pending = false;
                state.producers = [
                    ...state.producers,
                    action.payload
                ];
            })
            .addCase(createProducer.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(updateProducer.pending, state => {
                state.pending = true;
            })
            .addCase(updateProducer.fulfilled, (state, action: PayloadAction<Producer>) => {
                state.pending = false;
                const index = state.producers.findIndex(producer => producer.id === action.payload.id);
                const newProducerList = [
                    ...state.producers
                ];

                newProducerList[index] = action.payload;
                state.producers = [
                    ...newProducerList,
                ];
            })
            .addCase(updateProducer.rejected, (state, action) => {
                state.pending = false;
            })

            .addCase(deleteProducer.pending, state => {
                state.pending = true;
            })
            .addCase(deleteProducer.fulfilled, (state, { meta }) => {
                state.producers = state.producers.filter((producer) => producer.id !== meta.arg.id)
                state.pending = false;
            })
            .addCase(deleteProducer.rejected, (state, action) => {
                state.pending = false;
            })
    }
});

export default producersSlice;