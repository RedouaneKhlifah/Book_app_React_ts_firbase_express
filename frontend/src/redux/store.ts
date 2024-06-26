import {configureStore} from '@reduxjs/toolkit';
import bookReducer from './reducers/book.reducer';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
