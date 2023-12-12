export const filterReducer = (state, action) => {
  const currentCategory = action.payload;

  const isCategorySelected = state.category.includes(currentCategory);

  switch (action.type) {
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

    default:
      return state;
  }
};
