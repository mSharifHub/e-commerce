/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { useFilter } from "../../../providers/contexts/filterContext";
import {
  getHexValue,
  renderColorFilter,
} from "../../../helpers/filter_helpers/filterHelpers";
import HideIcon from "../icons/HideIcon";
import ExpandIcon from "../icons/ExpandIcon";

export default function ColorComponent() {
  const [isExpand, setisExpand] = useState(false);

  const {
    state: { availableColors, selectedColors },
    dispatch,
  } = useFilter();

  // calculates the half of the len of colors and is subtracted by the half len divisable by 3
  const halfLen = Math.floor(availableColors.length / 2);

  const compactColors = halfLen - (halfLen % 3);

  const isChecked = (color) => {
    return selectedColors.some((selected) => selected === color);
  };

  const toggler = () => {
    setisExpand((prev) => !prev);
  };

  const onColorChange = (color) => {
    dispatch({ type: "SET_COLOR", payload: color });
  };

  return (
    <>
      {/* static render of colors */}
      <div className="grid grid-cols-3 justify-items-center gap-y-10 py-4">
        {/* dynamic render of colors */}
        {availableColors
          .slice(0, compactColors)
          .map((color) =>
            renderColorFilter(color, onColorChange, isChecked, getHexValue),
          )}
      </div>
      {/* dynamic render of colors */}
      <div
        className={`grid grid-cols-3 justify-items-center gap-y-10 py-4 transition-transform duration-300 ease-in-out  ${
          isExpand ? "translate-x-0 " : "-translate-x-full "
        }  `}
      >
        {isExpand &&
          availableColors
            .slice(compactColors)
            .map((color) =>
              renderColorFilter(color, onColorChange, isChecked, getHexValue),
            )}
      </div>
      <div
        onClick={toggler}
        className="flex justify-center items-center mx-4 mt-4"
      >
        {isExpand ? <HideIcon /> : <ExpandIcon />}
      </div>
    </>
  );
}
