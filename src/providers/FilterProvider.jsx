import { useMemo, useReducer } from "react";
import { filterReducer } from "./reducers/filterReducer";
import { filterContext } from "./contexts/filterContext";
import { products as data } from "../data/productsData/products";

export function FilterProvider({ children }) {
  const categories = Array.from(
    new Set(data.map((product) => product.category)),
  );

  const initialState = {
    category: categories,
    rating: null,
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <filterContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      {children}
    </filterContext.Provider>
  );
}
