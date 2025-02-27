import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "@utils/types/types";
import { STORAGE_KEYS } from "@utils/constants/constants";
import { getLocalStorageItem, setLocalStorageItem } from "@utils/storage/localStorage";

const initialState: AuthState = {
  user: getLocalStorageItem<User>(STORAGE_KEYS.USER),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      setLocalStorageItem(STORAGE_KEYS.USER, action.payload);
    },
  },
});

export const { registerUser } = authSlice.actions;
export default authSlice.reducer;