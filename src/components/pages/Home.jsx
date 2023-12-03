import { Filter } from "../filter/Filter";
import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";

export const Home = () => {
    const {
        state: { products },
    } = useCart();

    return (
        <>
            <div className=" min-screen border border-black">
                {/*Main display divides the filter, options, and products grid */}
                <div className=" min-screen grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-10 m-4">
                    {/* fixed column for the filter component*/}
                    <div className="flex justify-start items-start">
                        <Filter />
                    </div>
                    {/* Display for the grid*/}
                    <div className="grid sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-20 m-4">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );
};
