/* eslint-disable jsx-a11y/label-has-associated-control */

import { useFilter } from "../../../providers/contexts/filterContext";

export default function PriceComponent() {
  const priceRangeOptions = [
    "$0 - $50",
    "$50 - $100",
    "$100 - $150",
    "$150 - $200",
    "$200 - $250",
    "$250 - $300",
  ];

  const { state, dispatch } = useFilter();

  const handlePriceChange = (label) => {
    const newRange = label
      .split("-")
      .map((str) => parseInt(str.trim().slice(1), 10));

    let updatedRanges;

    const isRangeSelected = state.priceRanges.some(
      (range) => range[0] === newRange[0] && range[1] === newRange[1],
    );

    if (isRangeSelected) {
      updatedRanges = state.priceRanges.filter(
        (range) => !(range[0] === newRange[0] && range[1] === newRange[1]),
      );
    } else {
      updatedRanges = [...state.priceRanges, newRange];
    }

    dispatch({ type: "SET_PRICE", payload: updatedRanges });
  };

  return (
    <div className="flex flex-col p-4 ">
      <span className="text-start font-light text-thin capitalize  w-full mb-3">
        shop by price (0)
      </span>
      <div className="flex flex-col justify-start items-start ">
        {priceRangeOptions.map((label) => (
          <label key={label}>
            <input
              type="checkbox"
              id={label}
              onChange={() => handlePriceChange(label)}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
