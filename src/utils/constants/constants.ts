import { User } from "../types/types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`

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
