import { createContext } from "react";

type MyContextType = {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const MyContext = createContext<MyContextType>({
    loggedIn: false,
    setLoggedIn: () => {},
  });