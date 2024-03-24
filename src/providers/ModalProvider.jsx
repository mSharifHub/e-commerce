/* eslint-disable react/function-component-definition */
import React, { useReducer, useMemo } from "react";
import { ModalContext } from "./contexts/modalContext";
import { modalReducer } from "./reducers/modalReducer";

export const ModalProvider = ({ children }) => {
  const initialState = { isOpen: false, type: null };
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
