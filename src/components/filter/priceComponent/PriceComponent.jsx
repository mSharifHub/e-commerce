/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

export default function PriceComponent() {
  const [value, setValue] = useState({ min: 0, max: 1000 });

  const onValueChange = (event) => {
    event.preventDefault();
    const parsedValue = parseFloat(event.target.value);

    setValue((prevValue) => {
      return event.target.name === "min"
        ? { ...prevValue, min: Math.min(parsedValue, prevValue.max - 1) }
        : { ...prevValue, max: Math.max(parsedValue, prevValue.min + 1) };
    });
  };
  const minPos = (value.min / 1000) * 100;
  const maxPos = 100 - (value.max / 1000) * 100;

  return (
    <div className="flex flex-col  p-4 ">
      <span className="text-center font-light text-large">Sort By Price</span>
      <div className="flex justify-between mt-8 ">
        <span className="text-lg capitalize flex flex-col justify-center items-center  px-4">
          lowest
          <span className="font-bold">${value.min}</span>
        </span>
        <span className="text-lg  capitalize flex flex-col justify-center items-center px-4">
          highest
          <span className="font-bold">${value.max}</span>
        </span>
      </div>
      {/* container for the price range */}
      <div className="mt-10">
        {/* unselected range */}
        <div className="h-1 relative bg-slate-300 ">
          {/* selected range */}
          <div
            className="thumb-range h-full absolute "
            style={{
              left: `${minPos}%`,
              right: `${maxPos}%`,
            }}
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
              className=" thumb absolute w-full appearance-none "
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
              className="thumb absolute w-full appearance-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
