import PriceComponent from "./priceComponent/PriceComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import SizeComponent from "./sizeComponent/SizeComponent";
import { useFilter } from "../../providers/contexts/filterContext";
import { products } from "../../data/productsData/products";

import {
  ratingResult,
  itemsResult,
} from "../../helpers/filter_helpers/filterHelpers";
import ColorComponent from "./colorComponent/ColorComponent";

export function Filter() {
  const { state } = useFilter();

  return (
    <div className="flex flex-col  px-4 ">
      {/* availability container filter */}
      <div className="flex relative flex-col ">
        <AvailabilityComponent />
      </div>
      {/* category container filter */}
      <div className="flex relative">
        <div className="border-t-2 mt-4 w-full">
          <CategoryComponent />
        </div>
      </div>
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
      {/* size filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by size"
            Component={SizeComponent}
            selectedTotal={itemsResult(
              state,
              products,
              "selectedSizes",
              "size",
            )}
          />
        </div>
      </div>
      {/* color filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by color"
            Component={ColorComponent}
            selectedTotal={itemsResult(
              state,
              products,
              "selectedColors",
              "color",
            )}
          />
        </div>
      </div>
      {/* rating container filter */}
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
