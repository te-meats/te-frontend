import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { default as rootReducer } from '@reducers'

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
