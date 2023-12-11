import { useState } from "react";

export default function PriceComponent() {
  const [selected, setSelected] = useState(null);
  const handleSelection = (e) => {
    setSelected(e.target.id);
  };
  return (
    <div className="flex flex-col p-4  mt-12 bg-green-300">
      <span className="font-bold text-center bg-red-600 mb-4">
        Sort By Price
      </span>
      <div className="flex justify-around ">
        <label
          htmlFor="pricing-filter-h"
          className={`  cursor-pointer ${
            selected === "pricing-filter-h" ? "bg-slate-300 rounded-md " : ""
          } p-2 `}
        >
          Highest price
          <input
            type="radio"
            name="group-1"
            id="pricing-filter-h"
            onChange={handleSelection}
          />
        </label>

        <label
          htmlFor="pricing-filter-l"
          className={`cursor-pointer ${
            selected === "pricing-filter-l" ? "bg-slate-300 rounded-md " : ""
          } p-2 `}
        >
          Lowest price
          <input
            type="radio"
            name="group-1"
            id="pricing-filter-l"
            onChange={handleSelection}
          />
        </label>
      </div>
    </div>
  );
}
