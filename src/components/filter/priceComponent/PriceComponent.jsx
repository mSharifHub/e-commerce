/* eslint-disable jsx-a11y/label-has-associated-control */

import { useFilter } from "../../../providers/contexts/filterContext";

export default function PriceComponent() {
  const { state, dispatch } = useFilter();

  const onSetPricingRange = (event) => {
    event.preventDefault();
    const isMin = event.target.name === "min";
    const value = parseFloat(event.target.value);
    const { min } = state.priceRange;
    const { max } = state.priceRange;

    dispatch({
      type: "SET_PRICE_RANGE",
      payload: {
        min: isMin ? value : min,
        max: isMin ? max : value,
      },
    });
  };

  const minPos = (state.priceRange.min / 1000) * 100;
  const maxPos = 100 - (state.priceRange.max / 1000) * 100;

  return (
    <div className="flex flex-col p-4  bg-green-300">
      <span className="text-center font-light text-xl">Sort By Price</span>
      <div className="flex justify-between mt-8 ">
        <span className="text-lg capitalize flex flex-col justify-center items-center  px-4">
          lowest
          <span className="font-bold">${state.priceRange.min}</span>
        </span>
        <span className="text-lg  capitalize flex flex-col justify-center items-center px-4">
          highest
          <span className="font-bold">${state.priceRange.max}</span>
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
              value={state.priceRange.min}
              onChange={onSetPricingRange}
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
              value={state.priceRange.max}
              onChange={onSetPricingRange}
              className="thumb absolute w-full appearance-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
