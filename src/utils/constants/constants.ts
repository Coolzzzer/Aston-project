import { User } from "../types/types";
const API_URL = import.meta.env.VITE_OMDB_API_URL;

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
  FAVORITES: `/favorites`,
  GET_CARD_DATA: API_URL,
} as const;

//keys
export const STORAGE_KEYS = {
  USER: "user",
  LOGGEDIN: "loggedIn",
  FAVORITES: "favorites",
  HISTORY: "history",
};

export const TIMEZONE = {
  RU: "ru-RU",
};

export const ESC_KEY = "Escape";

export const ENT_KEY = "Enter";
