
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/CurrencySlice'; // Import your currency slice

export const store = configureStore({
  reducer: {
    currency: currencyReducer, // Add currency reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
