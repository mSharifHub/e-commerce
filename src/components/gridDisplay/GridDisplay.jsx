import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { products } from "../../data/productsData/products";

export function GridDisplay() {
  const slider = (product, direction) => {
    const slide = document.getElementById(`slider-${product}`);
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

  return (
    <div className=" w-full h-full  grid grid-cols-4  bg-slate-100 ">
      grid cols
    </div>
  );
}
