import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "../utils/types/types";

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { registerUser } = authSlice.actions;
export default authSlice.reducer;