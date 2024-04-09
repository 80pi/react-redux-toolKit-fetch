import { configureStore } from "@reduxjs/toolkit";
import { usersApi, productApi } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, productApi.middleware),
});
