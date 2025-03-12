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
      if (!storedUser) {
        throw new Error("Неверный Логин и Пароль");
      }

      const emailMatches = storedUser.email === action.payload.email;
      const passwordMatches = storedUser.password === action.payload.password;

      if (!emailMatches && !passwordMatches) {
        throw new Error("Неверный Логин и Пароль");
      } else if (!emailMatches) {
        throw new Error("Неверный Логин");
      } else if (!passwordMatches) {
        throw new Error("Неверный Пароль");
      }
      state.user = storedUser;
      state.loggedIn = true;
      setLocalStorageItem(STORAGE_KEYS.LOGGEDIN, state.loggedIn);
      setLocalStorageItem(STORAGE_KEYS.USER, state.user);
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
