/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useFilter } from "../../../providers/contexts/filterContext";
import HideIcon from "../icons/HideIcon";
import ExpandIcon from "../icons/ExpandIcon";
import { renderCategoryFilter } from "../../../helpers/filter_helpers/filterHelpers";

export default function CategoryComponent() {
  const [isexpand, setisExpand] = useState(false);

  const { state, dispatch } = useFilter();

  const { listCategories } = state;

  const compactCategory = Math.floor(listCategories.length / 2);

  const toggler = () => {
    setisExpand((prev) => !prev);
  };

  const onCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const isChecked = (category) => {
    return state.category.some((selectedRanges) => selectedRanges === category);
  };

  return (
    <>
      {/* static section */}
      <div>
        {listCategories
          .slice(0, compactCategory)
          .map((category) =>
            renderCategoryFilter(category, onCategoryChange, isChecked),
          )}
      </div>
      {/* dynamic section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isexpand ? "max-h-full" : "max-h-0"
        }`}
      >
        {isexpand &&
          listCategories
            .slice(compactCategory)
            .map((category) =>
              renderCategoryFilter(category, onCategoryChange, isChecked),
            )}
      </div>
      <div
        onClick={toggler}
        className="flex justify-start items-center mx-4 mt-4"
      >
        {isexpand ? <HideIcon /> : <ExpandIcon />}
      </div>
    </>
  );
}
