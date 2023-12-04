export const filterCategory = (products) => {
    return products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);

        return acc;
    }, {});
};
