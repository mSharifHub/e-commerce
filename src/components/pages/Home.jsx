import { Filter } from "../filter/Filter";
import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";

export const Home = () => {
    const {
        state: { products },
    } = useCart();

    return (
        <>
            <div className="h-screen m-4 shadow-2xl">
                <div className="  grid grid-cols-1 sm:grid-cols-[300px_1fr] m-4 border border-black">
                    <div className=" ">
                        <Filter />
                    </div>
                    <div className="grid">
                        <Product />
                        <Product />
                       
                    </div>
                </div>
            </div>
        </>
    );
};
