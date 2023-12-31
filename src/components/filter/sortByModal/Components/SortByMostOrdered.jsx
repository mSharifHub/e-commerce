/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useFilter } from "../../../../providers/contexts/filterContext";

export default function SortByMostOrdered() {
  const { dispatch } = useFilter();

  const handleOnChange = () => {
    dispatch({ type: "SET_BY_MOST_ORDERED" });
  };

  return (
    <div onClick={handleOnChange} className="capitalize text-lg font-thin ">
      sort by common
    </div>
  );
}
