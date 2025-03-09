import { RootState } from "@store/store"; 

export const getLoggedIn = (state: RootState) => state.auth.loggedIn;