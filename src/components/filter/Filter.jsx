import { useState } from "react";

export function Filter() {
  const [selected, setSelected] = useState(null);

  const handleSelection = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div className=" bg-slate-100  flex flex-col ">
      <form>
        <div className="flex flex-col p-4 bg-green-400 space-y-4">
          <span className="font-bold text-center">Sort By Price</span>
          <div className="flex bg-red-300 justify-around ">
            <label
              htmlFor="pricing-filter-h"
              className={`p-4  cursor-pointer ${
                selected === "pricing-filter-h"
                  ? "bg-purple-500 rounded-md text-white"
                  : ""
              }  text-slate-500 `}
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
              className={` p-4 cursor-pointer ${
                selected === "pricing-filter-l"
                  ? "bg-purple-500 rounded-md text-white"
                  : ""
              }  text-slate-500 `}
            >
              lowest price
              <input
                type="radio"
                name="group-1"
                id="pricing-filter-l"
                onChange={handleSelection}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col bg-yellow-400">
          <span className="font-bold text-center">Sort By Availability</span>
          <label htmlFor="include-on-stock-only">
            include on stock only
            <input type="checkbox" id="include-on-stock-only" />
          </label>
        </div>
      </form>
    </div>
  );
}
