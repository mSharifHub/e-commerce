export const modalReducer = (state, action) => {
  switch (action.type) {
    case "BLUR_SCREEN":
      return {
        ...state,
        isOpen: true,
        type: action.payload,
      };
    case "UNBLUR_SCREEN":
      return {
        ...state,
        isOpen: false,
        type: null,
      };
    default:
      return state;
  }
};
