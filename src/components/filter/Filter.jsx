import PriceComponent from "./priceComponent/PriceComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import { useFilter } from "../../providers/contexts/filterContext";
import { products } from "../../data/productsData/products";
import {
  inStockResult,
  categoryResult,
  ratingResult,
} from "../../helpers/filter_helpers/filterHelpers";

export function Filter() {
  const { state } = useFilter();

  return (
    <div className="flex w-full h-full  flex-col mt-10 ">
      {/* availability container filter */}
      <AvailabilityComponent />
      {/* price container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by price"
            Component={PriceComponent}
            selectedTotal={
              // it will only display values from 0 to max items of items when an user selects a value.
              // this line of code will pass null if no checkboxes have been selected, therefore, only displaying 0 - max values
              state.priceRanges.length > 0 ? state.priceSelectedCount : null
            }
          />
        </div>
      </div>
      {/* category container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by Category"
            Component={CategoryComponent}
            selectedTotal={categoryResult(state, products)}
          />
        </div>
      </div>
      {/* rating ccontainer filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by rating"
            Component={StarRatingComponent}
            selectedTotal={ratingResult(state)}
          />
        </div>
      </div>
    </div>
  );
}
