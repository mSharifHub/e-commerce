/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

export default function PriceComponent() {
  const [value, setValue] = useState({ min: 0, max: 1000 });

  const onValueChange = (event) => {
    event.preventDefault();
    const parsedValue = parseFloat(event.target.value);

    setValue((prevValue) => {
      return event.target.name === "min"
        ? { ...prevValue, min: Math.min(parsedValue, prevValue.max) }
        : { ...prevValue, max: Math.max(parsedValue, prevValue.min) };
    });
  };
  const minPos = (value.min / 1000) * 100;
  const maxPos = 100 - (value.max / 1000) * 100;

  return (
    <div className="flex flex-col p-4  bg-red-200">
      <span className="text-center font-light text-large">Sort By Price</span>
      <div className="flex justify-between ">
        <span>Lowest ${value.min}</span>
        <span> Highest ${value.max}</span>
      </div>
      {/* container for the price range */}
      <div className="mt-4">
        {/* unselected range */}
        <div className="h-1 relative bg-slate-300">
          {/* selected range */}
          <div
            className=" h-full absolute bg-blue-600"
            style={{ left: `${minPos}%`, right: `${maxPos}%` }}
          />
          {/* thumbs */}
          <label htmlFor="range-l">
            <input
              type="range"
              id="range-l"
              name="min"
              min="0"
              max="1000"
              value={value.min}
              onChange={onValueChange}
              className="absolute w-full appearance-none  -top-2 rounded-lg  cursor-pointer bg-transparent"
            />
          </label>
          <label htmlFor="range-h">
            <input
              type="range"
              id="range-h"
              name="max"
              min="0"
              max="1000"
              value={value.max}
              onChange={onValueChange}
              className="absolute w-full appearance-none op-2 rounded-lg   cursor-pointer bg-transparent "
            />
          </label>
        </div>
      </div>
    </div>
  );
}
