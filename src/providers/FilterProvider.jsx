import { useMemo, useReducer } from "react";
import { filterReducer } from "./reducers/filterReducer";
import { filterContext } from "./contexts/filterContext";
import { products } from "../data/productsData/products";
import { priceRangeResult } from "../helpers/filter_helpers/filterHelpers";

export function FilterProvider({ children }) {
  const categoriesList = Array.from(
    new Set(products.map((product) => product.category)),
  );

  const min = 0;
  const max = 500;

  const initialState = {
    category: [], // displays the list of selected categories to be used to filter the display
    priceRanges: [], // used to extract the min and max value if multiple ranges are selected
    priceRange: { min, max }, // the value extracted to filter data based on the price query
    priceSelectedCount: priceRangeResult(products, min, max), // sets the initial value
    listCategories: categoriesList, // used to display number of items per category
    inStock: false,
    rating: null,
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <filterContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      {children}
    </filterContext.Provider>
  );
}
