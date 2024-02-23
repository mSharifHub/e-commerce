import { useMemo, useReducer } from "react";
import { filterReducer } from "./reducers/filterReducer";
import { filterContext } from "./contexts/filterContext";
import { products } from "../data/productsData/products";
import {
  min,
  max,
  instanceList,
  allSizes,
} from "../helpers/filter_helpers/filterHelpers";

export function FilterProvider({ children }) {
  const initialState = {
    category: [], // displays the list of selected categories to be used to filter the display
    priceRanges: [], // used to extract the min and max value if multiple ranges are selected
    availableColors: instanceList(products, "color"), // array to show all available colors
    selectedColors: [], // array to keep track of the selected colors
    selectedSizes: [], // array to keep track of list of sizes
    availableSizes: allSizes(products),
    priceRange: { min, max }, // the value extracted to filter data based on the price query
    listCategories: instanceList(products, "category"), // used to display number of items per category
    inStock: false, // to filter if product is in stock
    newProduct: false, // to filter if product is a new product
    discount: false, // to filter is product is on discount
    openBox: false, // to filter if product is an open box
    rating: null, // set the rating to be filter
    sortByLowest: false, // sortBy option to sort by lowest price
    sortByHighest: false, // sortBy option to sort by the highest price
    sortByMostOrdered: false, // sortBy option to sort by the highest price
    sortByDisplayName: null, // display the name to show to the user
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
