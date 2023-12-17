import { useMemo, useReducer } from "react";
import { filterReducer } from "./reducers/filterReducer";
import { filterContext } from "./contexts/filterContext";
import { products as data } from "../data/productsData/products";

export function FilterProvider({ children }) {
  const categoriesList = Array.from(
    new Set(data.map((product) => product.category)),
  );

  const initialState = {
    category: [], // displays the list of selected categories to be used to filter the display
    priceRanges: [], // used to extract the min and max value if multiple ranges are selected
    priceRange: { min: 0, max: 500 }, // the value extracted to filter data based on the price query
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
