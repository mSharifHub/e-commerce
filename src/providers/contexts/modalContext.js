import { createContext, useContext } from "react";

export const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used with a modal provider");
  }
  return context;
};
