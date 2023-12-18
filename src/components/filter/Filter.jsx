import PriceComponent from "./priceComponent/PriceComponent";
import FilterPopUpMenu from "./filterPopUpMenu/FilterPopUpMenu";

export function Filter() {
  return (
    <div className="flex w-full h-full  flex-col  ">
      {/* price container filter */}
      <div className="flex relative">
        <div className="w-full">
          <FilterPopUpMenu label="filter by price" Component={PriceComponent} />
        </div>
      </div>
    </div>
  );
}
