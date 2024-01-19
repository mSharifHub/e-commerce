import React, { useMemo, useState } from "react";
import Product from "../products/Product";
import { useFilter } from "../../providers/contexts/filterContext";
import { products } from "../../data/productsData/products";

export function GridDisplay() {
  // Return statement for rendering the component

  const {
    state: { category },
  } = useFilter();

  const filteredProducts = useMemo(() => {
    let updatedProducts = [...products];

    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category),
      );
    }

    return updatedProducts;
  }, [category]);

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
