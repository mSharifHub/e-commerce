import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";
import { filterCategory } from "../filter/FilterCategory";

export const CategoryDisplay = () => {
    const {
        state: { products },
    } = useCart();

    const categories = filterCategory(products);

    return (
        <>
            {Object.keys(categories).map((category, index) => (
                <>
                    <div key={index} className="flex flex-col  items-start mb-10   bg-red-500">
                        <div className="w-full text-center text-xl font-bold p-2 bg-green-700">{category.toUpperCase()}</div>

                        <div className="relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
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
