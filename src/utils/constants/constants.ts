import { User } from "../types/types";

export const initialUser: User = {
  name: "",
  email: "",
  password: "",
};

// Routes
export const URLs = {
  HOME_PAGE: '/',
  SIGN_UP: `/signup`,
  SIGN_IN: `/signin`,
  HISTORY: `/history`,
  FAVORITES: `/favorites`,
  GET_CARD_DATA: `https://www.omdbapi.com/?apikey=3e3e7f8f&i=`,
} as const;


//keys
export const STORAGE_KEYS = {
  USER: "user",
  LOGGEDIN: "loggedIn",
};
