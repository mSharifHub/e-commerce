import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useCart } from "../../providers/contexts/cartContext";
import { Product } from "../products/Product";
import { filterCategory } from "../../helpers/filter_helpers/filterHelpers";
import { useTheme } from "../../providers/contexts/themeContext";

export function CategoryDisplay() {
  const {
    state: { products },
  } = useCart();

  const { theme } = useTheme();

  const slider = (category, direction) => {
    const slide = document.getElementById(`slider-${category}`);
    const scrollAmount = 500;

    switch (direction) {
      case `left`:
        slide.scrollLeft -= scrollAmount;
        break;
      case `right`:
        slide.scrollLeft += scrollAmount;
        break;
      default:
        return null;
    }
  };

  const categories = filterCategory(products);
  return (
    <>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <div className=" w-full text-center p-4  text-lg tracking-wide">
            {category.toUpperCase()}
          </div>

          <div
            className={`relative ${theme === "dark" ? " bg-zinc-800" : "  "} `}
          >
            <div className="absolute z-10 px-4 py-6 mx-5 text-center transform left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 hover:cursor-pointer opacity-0  hover:opacity-75 duration-150 ease-in-out  bg-slate-200">
              <MdChevronLeft
                onClick={() => slider(category, `left`)}
                size={40}
                className="justify-items-center "
              />
            </div>
            <div
              id={`slider-${category}`}
              className="relative  flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-4 "
            >
              {categories[category].map((product) => (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
            <div className="absolute z-10 px-4 py-6 mx-5 text-center transform  right-0 translate-x-1/2 -translate-y-1/2 top-1/2  hover:cursor-pointer opacity-0  hover:opacity-75 duration-150 ease-in-out  bg-slate-200">
              <MdChevronRight
                onClick={() => slider(category, `right`)}
                size={40}
                className="justify-items-center"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
