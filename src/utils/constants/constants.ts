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
  HISTORY: `/history`,
  FAVORITES: `/favorites`
} as const;

//keys
export const STORAGE_KEYS = {
  USER: "user",
};
