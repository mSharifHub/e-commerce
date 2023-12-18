/* eslint-disable no-case-declarations */
export const filterReducer = (state, action) => {
  const currentCategory = action.payload;

  const isCategorySelected = state.category.includes(currentCategory);

  switch (action.type) {
    case "SET_PRICE":
      const rangeGroup = action.payload;
      const rangeValues = rangeGroup.flat();
      const minPrice = rangeValues.length > 0 ? Math.min(...rangeValues) : 0;
      const maxPrice = rangeValues.length > 0 ? Math.max(...rangeValues) : 500;

      return {
        ...state,
        priceRanges: rangeGroup,
        priceRange: { min: minPrice, max: maxPrice },
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: isCategorySelected
          ? state.category.filter((category) => category !== currentCategory)
          : [...state.category, currentCategory],
      };
    case "SET_RATING":
      return {
        ...state,
        rating: state.rating === action.payload ? null : action.payload,
      };

    case "SET_AVAILABILITY":
      const currentValue = state.inStock;
      return {
        ...state,
        inStock: !currentValue,
      };

    default:
      return state;
  }
};
