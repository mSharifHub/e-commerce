/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useFilter } from "../../../../providers/contexts/filterContext";

export default function SortByHighest() {
  const { dispatch } = useFilter();
  const handleOnChange = () => {
    dispatch({ type: "SET_BY_HIGHEST" });
  };
  return (
    <div onClick={handleOnChange} className="capitalize text-lg font-thin ">
      sort by highest
    </div>
  );
}
