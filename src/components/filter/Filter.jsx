import FilterComponent from "./filterComponent/FilterComponent";
import PriceComponent from "./priceComponent/PriceComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";

export function Filter() {
  return (
    <div className="h-full w-full relative flex flex-col  space-y-10 bg-slate-400">
      <form>
        <PriceComponent />
        <FilterComponent />
        <AvailabilityComponent />
        <StarRatingComponent />
      </form>
    </div>
  );
}
