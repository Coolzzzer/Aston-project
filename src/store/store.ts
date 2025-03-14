import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import favoritesReducer from "./favoritesSlice";
import historyReducer from "./historySlice";
import moviesReducer from "./moviesSlice";
import loggerMiddleware from "./loggerMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    history: historyReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;