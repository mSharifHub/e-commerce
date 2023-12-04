import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";
import { filterCategory } from "../filter/FilterCategory";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const CategoryDisplay = () => {
    const {
        state: { products },
    } = useCart();

    const slider = (category, direction) => {
        var slider = document.getElementById(`slider-${category}`);
        const scrollAmount = 500;

        switch (direction) {
            case "left":
                slider.scrollLeft -= scrollAmount;
                break;
            case "right":
                slider.scrollLeft += scrollAmount;
                break;
            default:
                return null;
        }
    };

    const categories = filterCategory(products);
    return (
        <>
            {Object.keys(categories).map((category, index) => (
                <>
                    <div className="bg-slate-700 mb-10 mt-10">{category.toUpperCase()}</div>

                    <div className="relative bg-yellow-600 p-10">
                        <div className=" absolute z-10 p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2  bg-red-400">
                            <MdChevronLeft
                                onClick={() => slider(category, "left")}
                                size={40}
                                className="justify-items-center bg-red-300"
                            />
                        </div>
                        <div
                            key={index}
                            id={`slider-${category}`}
                            className="relative p-4 flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth bg-purple-300 "
                        >
                            {categories[category].map((product) => (
                                <div key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};
