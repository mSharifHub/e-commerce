export const filterReducer = (state, action) => {
  const currentCategory = action.payload;

  const isCategorySelected = state.category.includes(currentCategory);

  switch (action.type) {
    case "SET_PRICE_RANGE":
      return {
        ...state,
        priceRange: {
          min: Math.min(action.payload.min, state.priceRange.max - 1),
          max: Math.max(action.payload.max, state.priceRange.min + 1),
        },
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
      return {
        ...state,
        inStock: action.payload,
      };

    default:
      return state;
  }
};
