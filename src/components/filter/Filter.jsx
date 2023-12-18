import PriceComponent from "./priceComponent/PriceComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";

export function Filter() {
  return (
    <div className="flex w-full h-full  flex-col  ">
      {/* availability container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by availability"
            Component={AvailabilityComponent}
          />
        </div>
      </div>
      {/* price container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu label="filter by price" Component={PriceComponent} />
        </div>
      </div>
      {/* category container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by Category"
            Component={CategoryComponent}
          />
        </div>
      </div>
      {/* rating ccontainer filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu
            label="filter by rating"
            Component={StarRatingComponent}
          />
        </div>
      </div>
    </div>
  );
}
