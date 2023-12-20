export const filterCategory = (products) =>
  products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);

    return acc;
  }, {});

export const priceRangeResult = (products, min, max) => {
  const result = products.filter((product) => {
    const productPrice = parseFloat(product.price.slice(1), 10);
    return productPrice >= min && productPrice <= max;
  }).length;
  return result;
};

export const inStockResult = (state, products) => {
  return state.inStock
    ? products.filter((product) => product.inStock).length
    : null;
};

export const categoryResult = (state, products) => {
  return state.category.length > 0
    ? products.filter((product) => state.category.includes(product.category))
        .length
    : null;
};

export const ratingResult = (state) => {
  return state.rating;
};
