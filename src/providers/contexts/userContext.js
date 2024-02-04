import { createContext, useContext } from "react";

export const userContext = createContext();

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};
