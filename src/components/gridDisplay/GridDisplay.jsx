import React, { useEffect, useMemo, useRef } from "react";
import Product from "../products/Product";
import { useFilter } from "../../providers/contexts/filterContext";
import { products } from "../../data/productsData/products";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const compareChanges = (prev, current) => {
  if (prev) {
    return (
      prev.some((element) => !current.includes(element)) ||
      current.some((element) => !prev.includes(element))
    );
  }
  return false;
};

export function GridDisplay() {
  const {
    state: { category, selectedColors, selectedSizes, priceRange },
  } = useFilter();

  const prevCategory = usePrevious(category);
  const prevSelectedColors = usePrevious(selectedColors);
  const prevSelectedSizes = usePrevious(selectedSizes);

  const parseProductPrice = (priceStr) => {
    return parseInt(priceStr.slice(1), 10);
  };

  const filteredProducts = useMemo(() => {
    const minPrice = parseInt(priceRange.min, 10);

    const maxPrice = parseInt(priceRange.max, 10);

    let updatedProducts = [...products];

    if (category.length > 0 && compareChanges(prevCategory, category)) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category),
      );
    }

    if (
      selectedSizes.length > 0 &&
      compareChanges(prevSelectedSizes, selectedSizes)
    ) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedSizes.includes(product.size),
      );
    }

    if (
      selectedColors.length > 0 &&
      compareChanges(prevSelectedColors, selectedColors)
    ) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedColors.includes(product.color),
      );
    }

    if (!Number.isNaN(minPrice) && !Number.isNaN(maxPrice)) {
      updatedProducts = updatedProducts.filter((product) => {
        const productPrice = parseProductPrice(product.price);
        const productPriceInRange =
          productPrice >= minPrice && productPrice <= maxPrice;

        return productPriceInRange;
      });
    }

    return updatedProducts;
  }, [
    category,
    prevCategory,
    selectedSizes,
    prevSelectedSizes,
    selectedColors,
    prevSelectedColors,
    priceRange,
  ]);

  return (
    <div className="grid transition-all duration-500 ease-out grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => (
        <React.Fragment key={product.id}>
          <div className="flex justify-center items-center">
            <Product />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
