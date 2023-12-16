import PriceComponent from "./priceComponent/PriceComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";

export function Filter() {
  return (
    <div className="relative flex w-full   overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide sm:h-full  sm:flex-col shadow-md  ">
      <div>
        <FilterPopUpMenu label="Filter By Price" Component={PriceComponent} />
      </div>
      <div>
        <FilterPopUpMenu
          label="Filter By Category"
          Component={CategoryComponent}
        />
      </div>
      <div>
        <FilterPopUpMenu
          label="Filter By Availability"
          Component={AvailabilityComponent}
        />
      </div>
      <div>
        <FilterPopUpMenu
          label="Filter By Rating"
          Component={StarRatingComponent}
        />
      </div>
    </div>
  );
}
