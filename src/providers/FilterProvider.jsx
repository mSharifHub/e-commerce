import { useMemo, useReducer } from "react";
import { filterReducer } from "./reducers/filterReducer";
import { filterContext } from "./contexts/filterContext";
import { products } from "../data/productsData/products";
import {
  priceRangeResult,
  min,
  max,
  categoriesList,
  sizeList,
} from "../helpers/filter_helpers/filterHelpers";

export function FilterProvider({ children }) {
  const initialState = {
    category: [], // displays the list of selected categories to be used to filter the display
    priceRanges: [], // used to extract the min and max value if multiple ranges are selected
    colors: [], // array to keep filter the list of selected colors
    selectedSizes: [], // array to keep track of list of sizes
    availableSizes: sizeList(products),
    priceRange: { min, max }, // the value extracted to filter data based on the price query
    priceSelectedCount: priceRangeResult(products, min, max), // sets the initial value
    listCategories: categoriesList(products), // used to display number of items per category
    inStock: false, // to filter if product is in stock
    newProduct: false, // to filter if product is a new product
    discount: false, // to filter is product is on discount
    openBox: false, // to filter if product is an open box
    rating: null, // set the rating to be filter
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
