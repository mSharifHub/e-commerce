export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    default:
      return state;
  }
};
