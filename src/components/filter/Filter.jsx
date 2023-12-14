import PriceComponent from "./priceComponent/PriceComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import CategoryComponent from "./categoryComponent/CategoryComponent";

export function Filter() {
  return (
    <div className="h-full w-full relative flex flex-col  space-y-10 ">
      <form>
        <PriceComponent />
        <CategoryComponent />
        <AvailabilityComponent />
        <StarRatingComponent />
      </form>
    </div>
  );
}
