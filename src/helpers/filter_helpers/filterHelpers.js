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
    ? products.filter((product) => product.inStock > 0).length
    : null;
};

export const itemsResult = (state, products, key, instance) => {
  return state[key].length > 0
    ? products.filter((product) => state[key].includes(product[instance]))
        .length
    : null;
};

export const ratingResult = (state) => {
  return state.rating;
};

export const instanceList = (products, instance) => {
  return Array.from(new Set(products.map((product) => product[instance])));
};

export const min = 0;
export const max = 500;
