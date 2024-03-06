export const userReducer = (state, action) => {
  const isItemFavorite = state.favorites.some(
    (favoriteItem) => favoriteItem.id === action.payload.id,
  );

  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        userEmail: action.payload,
      };

    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    case "ADD_ITEM":
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };

    case "ADD_FAVORITES":
      return {
        ...state,
        favorites: isItemFavorite
          ? state.favorites.filter((item) => item !== action.payload)
          : [...state.favorites, action.payload],
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
