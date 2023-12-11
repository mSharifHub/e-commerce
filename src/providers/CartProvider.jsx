import { useMemo, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import { CartContext } from "./contexts/cartContext";
import { products as data } from "../data/productsData/products";

export function CartProvider({ children }) {
  const initialState = {
    products: data,
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      {children}
    </CartContext.Provider>
  );
}
