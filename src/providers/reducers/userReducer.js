export const userReducer = (state, action) => {
  const isItemFavorite = state?.favorites.some(
    (favoriteItem) => favoriteItem.id === action.payload.id,
  );

  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        userEmail: action.payload,
      };

    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "LOG_OUT":
      return Object.keys(state).reduce((acc, key) => {
        const type = typeof state[key];
        switch (type) {
          case "string":
            acc[key] = "";
            break;
          case "number":
            acc[key] = 0;
            break;
          case "boolean":
            acc[key] = false;
            break;
          case "object":
            if (Array.isArray(state[key])) {
              acc[key] = [];
            } else {
              acc[key] = {};
            }
            break;

          default:
        }
        return acc;
      }, {});

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
