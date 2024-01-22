import React, { useMemo, useRef } from "react";
import Product from "../products/Product";
import { useFilter } from "../../providers/contexts/filterContext";
import { products } from "../../data/productsData/products";
import { reusePort } from "../../helpers/ModalHelpers/reusePort";
import { getGridCount } from "../../helpers/filter_helpers/filterHelpers";

export function GridDisplay() {
  const {
    state: {
      category,
      selectedColors,
      selectedSizes,
      priceRange,
      inStock,
      rating,
      sortByLowest,
      sortByHighest,
      sortByMostOrdered,
    },
  } = useFilter();

  const parseProductPrice = (priceStr) => {
    return parseInt(priceStr.slice(1), 10);
  };

  const isFilterApplied = useRef(0);

  const filteredProducts = useMemo(() => {
    const minPrice = parseInt(priceRange.min, 10);

    const maxPrice = parseInt(priceRange.max, 10);

    let updatedProducts = [...products];

    // Filter by category
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category),
      );
    }

    // Filter by selected sizes
    if (selectedSizes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedSizes.includes(product.size),
      );
    }

    // Filter by selected colors
    if (selectedColors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedColors.includes(product.color),
      );
    }

    // Filter by price range
    if (!Number.isNaN(minPrice) && !Number.isNaN(maxPrice)) {
      updatedProducts = updatedProducts.filter((product) => {
        const productPrice = parseProductPrice(product.price);
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
    }

    // Filter by in-stock
    if (inStock) {
      updatedProducts = updatedProducts.filter((product) => product.inStock);
    }

    // Filter by rating
    if (rating !== null) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating === rating,
      );
    }

    // Sorting
    if (sortByHighest) {
      updatedProducts.sort(
        (a, b) => parseProductPrice(b.price) - parseProductPrice(a.price),
      );
    } else if (sortByLowest) {
      updatedProducts.sort(
        (a, b) => parseProductPrice(a.price) - parseProductPrice(b.price),
      );
    }

    // Filter by most ordered
    if (sortByMostOrdered) {
      updatedProducts = updatedProducts.filter(
        (product) => product.sortByMostOrdered,
      );
    }

    // Check if filters are applied
    if (updatedProducts.length !== products.length) {
      isFilterApplied.current = 1;
    } else {
      isFilterApplied.current = 0;
    }

    return updatedProducts;
  }, [
    category,
    selectedSizes,
    selectedColors,
    priceRange,
    inStock,
    rating,
    sortByHighest,
    sortByLowest,
    sortByMostOrdered,
  ]);

  return (
    <>
      {isFilterApplied.current === 1 &&
        reusePort(
          <span className=" hidden lg:inline  absolute  transition-all duration-150 top-[12rem] lg:left-[20rem] xl:left-[43rem] capitalize text-2xl italic font-thin">
            {`${filteredProducts.length} ${
              filteredProducts.length <= 1 ? "item" : "items"
            } total`}
          </span>,
        )}
      <div className={getGridCount(filteredProducts.length)}>
        {filteredProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="flex justify-center items-center">
              <Product productsLen={filteredProducts.length} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
