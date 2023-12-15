import PriceComponent from "./priceComponent/PriceComponent";
import AvailabilityComponent from "./availabilityComponent/AvailabilityComponent";
import StarRatingComponent from "./ratingComponent/StarRatingComponent";
import CategoryComponent from "./categoryComponent/CategoryComponent";

export function Filter() {
  return (
    <div className="relative flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide sm:flex-col  ">
      <div>
        <PriceComponent />
      </div>
      <div>
        <CategoryComponent />
      </div>
      <div>
        <AvailabilityComponent />
      </div>
      <div>
        <StarRatingComponent />
      </div>
    </div>
  );
}
