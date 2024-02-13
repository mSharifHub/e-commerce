export const userReducer = (state, action) => {
  const isItemSelected = state.shoppingCart.some(
    (cartItem) => cartItem.id === action.payload.id,
  );

  switch (action.type) {
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    case "ADD_ITEM":
      return {
        ...state,
        shoppingCart: isItemSelected
          ? state.shoppingCart.filter((item) => item !== action.payload)
          : [...state.shoppingCart, action.payload],
      };

    case "UPDATE_BALANCE":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    default:
      return state;
  }
};
