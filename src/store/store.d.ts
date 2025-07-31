import { configureStore } from '@reduxjs/toolkit';

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// Define the store type
export type AppStore = ReturnType<typeof configureStore>;

// Define the dispatch type
export type AppDispatch = typeof store.dispatch;

// Declare the store
declare const store: ReturnType<typeof configureStore>;

export { store };
