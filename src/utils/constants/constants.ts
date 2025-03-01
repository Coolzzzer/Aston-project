import { User } from "../types/types";

export const initialUser: User = {
  name: "",
  email: "",
  password: "",
};

// Routes
export const URLs = {
  HOME_PAGE: "/",
  SIGN_UP: `/signup`,
  SIGN_IN: `/signin`,
  FAVORITES_PAGE: `/favorites`,
  HISTORY: `/history`,
} as const;

//keys
export const STORAGE_KEYS = {
  USER: "user",
};
