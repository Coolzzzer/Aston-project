import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import popupReducer from "./popupSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
