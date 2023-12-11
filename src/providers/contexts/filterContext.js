import { createContext, useContext } from "react";

export const filterContext = createContext();

export const useFilter = () => {
  const context = useContext(filterContext);
  return context;
};
