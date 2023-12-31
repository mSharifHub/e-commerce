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

  const isChecked = (label) => {
    const range = label
      .split("-")
      .map((str) => parseInt(str.trim().slice(1), 10));

    return state.priceRanges.some(
      (selectedRange) =>
        selectedRange[0] === range[0] && selectedRange[1] === range[1],
    );
  };

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

    dispatch({ type: "SET_PRICE", payload: updatedRanges }); // updates the price range
  };

  return (
    <div className="flex flex-col p-4 ">
      <div className="flex flex-col justify-start items-start ">
        {priceRangeOptions.map((label) => (
          <label
            key={label}
            className="font-thin tracking-wide hover:text-slate-400 mb-3"
          >
            <input
              type="checkbox"
              id={label}
              onChange={() => handlePriceChange(label)}
              checked={isChecked(label)}
              className=" w-5 h-5 mr-4 text-slate-400  border-gray-300 rounded focus:ring-slate-400 cursor-pointer"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
