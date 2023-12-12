/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

export default function PriceComponent() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(300);

  return (
    <div className="flex flex-col p-4   bg-green-300 w-full">
      <span className="font-bold text-center bg-red-600 mb-4">
        Sort By Price
      </span>
      <div className="flex justify-between ">
        <span>Lowest ${minValue}</span>
        <span> Highest {maxValue}</span>
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
            name="price-range-l"
            value={minValue}
            onChange={() => ""}
            onClick={() => console.log("selected lowest")}
            className="absolute w-full top-1/2 transform translate-y-[-50%] appearance-none bg-transparent  cursor-pointer  "
          />
        </label>

        <label htmlFor="price-range-h">
          <input
            type="range"
            min="0"
            max="300"
            id="price-range-h"
            name="price-range-h"
            value={maxValue}
            onChange={() => ""}
            onClick={() => console.log("selected highest")}
            className="absolute w-full top-1/2 transform translate-y-[-50%] appearance-none bg-transparent  cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
