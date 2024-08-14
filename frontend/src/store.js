// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js"; // Import your API slice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of `createApi`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
