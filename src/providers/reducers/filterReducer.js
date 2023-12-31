/* eslint-disable no-case-declarations */
import { products } from "../../data/productsData/products";
import { priceRangeResult } from "../../helpers/filter_helpers/filterHelpers";

export const filterReducer = (state, action) => {
  const isCategorySelected = state.category.includes(action.payload);

  const isSizeSelected = state.selectedSizes.includes(action.payload);

  const isColorSelected = state.selectedColors.includes(action.payload);

  switch (action.type) {
    case "SET_PRICE":
      const rangeGroup = action.payload;
      const rangeValues = rangeGroup.flat();
      const minPrice = rangeValues.length > 0 ? Math.min(...rangeValues) : 0;
      const maxPrice = rangeValues.length > 0 ? Math.max(...rangeValues) : 500;
      const newPriceSelectedCount = priceRangeResult(
        products,
        minPrice,
        maxPrice,
      );

      return {
        ...state,
        priceRanges: rangeGroup,
        priceRange: { min: minPrice, max: maxPrice },
        priceSelectedCount: newPriceSelectedCount,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: isCategorySelected
          ? state.category.filter((category) => category !== action.payload)
          : [...state.category, action.payload],
      };

    case "SET_COLOR":
      return {
        ...state,
        selectedColors: isColorSelected
          ? state.selectedColors.filter((color) => color !== action.payload)
          : [...state.selectedColors, action.payload],
      };

    case "SET_SIZE":
      const updatedSelectedSizes = isSizeSelected
        ? state.selectedSizes.filter(
            (selectedSize) => selectedSize !== action.payload,
          )
        : [...state.selectedSizes, action.payload];

      return {
        ...state,
        selectedSizes: updatedSelectedSizes,
      };

    case "SET_RATING":
      return {
        ...state,
        rating: state.rating === action.payload ? null : action.payload,
      };

    case "SET_AVAILABILITY":
      const available = state.inStock;
      return {
        ...state,
        inStock: !available,
      };

    case "SET_BY_LOWEST":
      return {
        ...state,
        sortByLowest: !state.sortByLowest,
        sortByHighest: !state.sortByLowest ? false : state.sortByHighest,
        sortByMostOrdered: !state.sortByLowest
          ? false
          : state.sortByMostOrdered,
        sortByDisplayName: !state.sortByLowest ? "Lowest" : null,
      };

    case "SET_BY_HIGHEST":
      return {
        ...state,
        sortByHighest: !state.sortByHighest,
        sortByLowest: !state.sortByHighest ? false : state.sortByLowest,
        sortByMostOrdered: !state.sortByHighest
          ? false
          : state.sortByMostOrdered,
        sortByDisplayName: !state.sortByHighest ? "Highest" : null,
      };

    case "SET_BY_MOST_ORDERED":
      return {
        ...state,
        sortByMostOrdered: !state.sortByMostOrdered,
        sortByHighest: !state.sortByMostOrdered ? false : state.sortByHighest,
        sortByLowest: !state.sortByMostOrdered ? false : state.sortByLowest,
        sortByDisplayName: !state.sortByMostOrdered ? "Common" : null,
      };

    default:
      return state;
  }
};
