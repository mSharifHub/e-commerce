import { cartReducer } from "./reducers/cartReducer";
import { useReducer } from "react";
import { CartContext } from "./contexts/cartContext";
import { products as data } from "../data/productsData/products";

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: data,
        cart: [],
    });

    return (
        <>
            <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
        </>
    );
};
