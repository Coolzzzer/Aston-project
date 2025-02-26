import { User } from "../types/types";

export const initialUser: User = {
  name: "",
  email: "",
  password: "",
};

// Routes
export const URLs = {
  HOME_PAGE: '/',
  SIGN_UP: `/signup`
} as const;
