import PriceComponent from "./priceComponent/PriceComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import CategoryComponent from "./categoryComponent/CategoryComponent";

export function Filter() {
  return (
    <div className="relative flex w-full h-full  flex-col  ">
      <AvailabilityComponent />
      <PriceComponent />
      <CategoryComponent />
      <StarRatingComponent />
    </div>
  );
}
