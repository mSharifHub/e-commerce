import React, { useReducer, useMemo } from "react";
import { userReducer } from "./reducers/userReducer";
import { userContext } from "./contexts/userContext";
import { products } from "../data/productsData/products";
import { extractReviews } from "../helpers/product_helpers/extractReviews";

export function UserProvider({ children }) {
  const initialState = {
    reviews: extractReviews(products),
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
