import { faker } from "@faker-js/faker";
import { cartReducer } from "./reducers/cartReducer";
import { useReducer } from "react";
import { CartContext } from "./contexts/cartContext";

export const CartProvider = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <>
            <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
        </>
    );
};