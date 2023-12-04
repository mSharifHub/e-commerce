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
                    <div>{category.toUpperCase()}</div>
                    <MdChevronLeft onClick={() => slider(category, "left")} size={40}  />
                    <div key={index} id={`slider-${category}`}className="relative p-4 flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth ">
                        {categories[category].map((product) => (
                            <div key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </>
    );
};
