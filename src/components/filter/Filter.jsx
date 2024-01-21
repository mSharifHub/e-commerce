import PriceComponent from "./priceComponent/PriceComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import SizeComponent from "./sizeComponent/SizeComponent";
import { useFilter } from "../../providers/contexts/filterContext";
import ColorComponent from "./colorComponent/ColorComponent";

export function Filter() {
  const { state } = useFilter();

  return (
    <div className="flex flex-col ">
      {/* availability container filter */}
      <div className="flex relative flex-col ">
        <AvailabilityComponent />
      </div>
      {/* category container filter */}
      <div className="flex relative">
        <div className="border-t-2 mt-4 w-full">
          <span className=" flex justify-start  mx-4 items-center gap-x-4 text-2xl text-neutral-500 whitespace-nowrap">
            {state.category.length <= 1 ? (
              state.category.map((item) => <div key={item}>{item}</div>)
            ) : (
              <div> Many categories</div>
            )}
          </span>
          <CategoryComponent />
        </div>
      </div>
      {/* price container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu label="filter by price" Component={PriceComponent} />
        </div>
      </div>
      {/* size filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu label="filter by size" Component={SizeComponent} />
        </div>
      </div>
      {/* color filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu label="filter by color" Component={ColorComponent} />
        </div>
      </div>
      {/* rating container filter */}
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
