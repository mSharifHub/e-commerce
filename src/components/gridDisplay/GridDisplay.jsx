import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { products } from "../../data/productsData/products";
import Product from "../products/Product";

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
    <div
      className={`grid grid-cols-3 transiton-all duration-500 ease-out  gap-8
      }`}
    >
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <div className="flex justify-center items-center">
            <Product />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
