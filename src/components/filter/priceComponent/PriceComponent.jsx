/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

export default function PriceComponent() {
  // TODO implement the reducer hook
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });

  const onPriceRangeChange = (e) => {
    setPriceRange((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // ToDo inputs collide causing only the highest input label to be selected. Add filled background for the range

  return (
    <div className="flex flex-col p-4 ">
      <span className="text-center mb-4 font-light text-large">
        Sort By Price
      </span>
      <div className="flex justify-between ">
        <span>Lowest ${priceRange.min}</span>
        <span> Highest ${priceRange.max}</span>
      </div>

      <div className=" mt-8 relative w-full ">
        {/* Gray track */}
        <div className="absolute bg-gray-400 h-[5px] w-full top-1/2  -translate-y-1/2" />
        {/* Blue track */}
        <div className="absolute bg-blue-500 h-[5px]" />
        <label htmlFor="price-range-l">
          <input
            type="range"
            min="0"
            max="300"
            id="price-range-l"
            name="min"
            value={priceRange.min}
            onChange={onPriceRangeChange}
            className="absolute w-full top-1/2 transform translate-y-[-50%] appearance-none bg-transparent  cursor-pointer  "
          />
        </label>

        <label htmlFor="price-range-h">
          <input
            type="range"
            min="0"
            max="300"
            id="price-range-h"
            name="max"
            value={priceRange.max}
            onChange={onPriceRangeChange}
            className="absolute w-full top-1/2 transform translate-y-[-50%] appearance-none bg-transparent  cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
