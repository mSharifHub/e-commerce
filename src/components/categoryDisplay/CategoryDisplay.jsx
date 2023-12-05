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
                    <div className="text-center w-full mx-8 my-8">{category.toUpperCase()}</div>
                    <div className="relative">
                        <div className="absolute z-10 px-2 py-6 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 hover:cursor-pointer opacity-0  hover:opacity-75 duration-150 ease-in-out  bg-slate-200">
                            <MdChevronLeft onClick={() => slider(category, "left")} size={40} className="justify-items-center " />
                        </div>
                        <div
                            key={index}
                            id={`slider-${category}`}
                            className="relative  flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
                        >
                            {categories[category].map((product) => (
                                <div key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                        <div className="absolute z-10 px-2 py-6 text-center transform  right-0 translate-x-1/2 -translate-y-1/2 top-1/2  hover:cursor-pointer opacity-0  hover:opacity-75 duration-150 ease-in-out  bg-slate-200">
                            <MdChevronRight
                                onClick={() => slider(category, "right")}
                                size={40}
                                className="justify-items-center"
                            />
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};
