import React, { useReducer, useMemo } from "react";
import { userReducer } from "./reducers/userReducer";
import { userContext } from "./contexts/userContext";

export function UserProvider({ children }) {
  const initialState = {
    userId: "",
    userName: "",
    userEmail: "",
    reviews: [],
    shoppingCart: [],
    favorites: [],
    balance: 0,
    isLoggedIn: false,
    orders: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      {children}
    </userContext.Provider>
  );
}
