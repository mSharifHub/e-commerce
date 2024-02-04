export const extractReviews = (products) => {
  const allReviews = products.flatMap((product) =>
    product.reviews.map((review) => ({
      ...review,
      productId: product.id,
    })),
  );
  return allReviews;
};
