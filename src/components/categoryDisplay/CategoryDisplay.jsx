import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CategoryDisplay = () => {
    const {
        state: { products },
    } = useCart();

    const categories = products.reduce((acc, product) => {
        const { category } = product;
        acc[product] = acc[product] || [];
        acc[category].push(product);
        return acc;
    }, {});

    const scrollLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const scrollRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className="h-screen shadow-lg m-4">
                <div className=" relative flex items-center">
                    <div className="cursor-pointer">
                        <MdChevronLeft onClick={scrollLeft} size={50} />
                    </div>
                    <div
                        id="slider"
                        className="flex overflow-x-scroll scroll whitespace-nowrap srcoll-smooth gap-x-10 scrollbar-hide  "
                    >
                        {products.map((product) => {
                            return (
                                <div>
                                    <Product />
                                </div>
                            );
                        })}
                    </div>
                    <div className="cursor-pointer">
                        <MdChevronRight onClick={scrollRight} size={50} />
                    </div>
                </div>
            </div>
        </>
    );
};
