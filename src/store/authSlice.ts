import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "@utils/types/types";
import { STORAGE_KEYS } from "@utils/constants/constants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "@utils/storage/localStorage";

const initialState: AuthState = {
  user: getLocalStorageItem<User>(STORAGE_KEYS.USER),
  loggedIn: getLocalStorageItem<boolean>(STORAGE_KEYS.LOGGEDIN) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      setLocalStorageItem(STORAGE_KEYS.USER, action.payload);
    },
    loginUser: (state, action: PayloadAction<User>) => {
      const storedUser = getLocalStorageItem<User>(STORAGE_KEYS.USER);

      if (
        storedUser &&
        storedUser.email === action.payload.email &&
        storedUser.password === action.payload.password
      ) {
        state.user = storedUser;
        state.loggedIn = true;
        setLocalStorageItem(STORAGE_KEYS.LOGGEDIN, state.loggedIn);
        setLocalStorageItem(STORAGE_KEYS.USER, state.user);
      } else {
        throw new Error("Неверный email или пароль");
      }
    },
    
    logoutUser: (state) => {
      state.loggedIn = false;
      setLocalStorageItem(STORAGE_KEYS.LOGGEDIN, state.loggedIn);
      removeLocalStorageItem(STORAGE_KEYS.USER);
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
