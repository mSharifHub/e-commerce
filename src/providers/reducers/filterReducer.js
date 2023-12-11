export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: state.category === action.payload ? "" : action.payload,
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
