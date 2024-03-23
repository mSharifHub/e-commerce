import { createContext, useContext } from "react";

export const ModalContext = createContext();

export const UseModal = () => {
  const context = useContext(ModalContext);
  return context;
};
