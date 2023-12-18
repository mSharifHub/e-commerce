export const filterCategory = (products) =>
  products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);

    return acc;
  }, {});

export const priceRangeResult = (products, state) => {
  const result = products.filter((product) => {
    const productPrice = parseFloat(product.price.slice(1), 10);
    return (
      productPrice >= state.priceRange.min &&
      productPrice <= state.priceRange.max
    );
  }).length;

  return result;
};
