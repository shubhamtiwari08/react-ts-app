// store.ts
import { configureStore } from '@reduxjs/toolkit';
import {  tabReducer } from './reducer';

export const store = configureStore({
  reducer: tabReducer
});

// Type the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
