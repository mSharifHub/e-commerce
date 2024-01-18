import { useFilter } from "../../../providers/contexts/filterContext";

/**
 * isNewRow  used to check if the last element is forming a new row.
 * */

export default function SizeBox({ size, isNewRow }) {
  const { state, dispatch } = useFilter();
  // function to mark if input has been checked so addidtional style can be added
  // to show the selection
  const isChecked = (sizeLabel) => {
    // this function iterates through the state and check whether
    // the size label is included in the list of selected sizes by user in the reducer hook
    return state.selectedSizes.some(
      (selectedSize) => selectedSize === sizeLabel,
    );
  };

  // function to dispatch the action when a size is selected to
  //  mark the size  in the reducer hook array for sizes
  const onSizeChange = (labelSize) => {
    dispatch({ type: "SET_SIZE", payload: labelSize });
  };

  return (
    <div
      className={` ${
        isNewRow ? "w-full" : " w-[40px] h-[40px] "
      }   flex justify-center items-center  border-2 border-slate-200   transition-all `}
    >
      <input
        type="checkbox"
        id={size}
        name={size}
        onChange={() => onSizeChange(size)}
        checked={isChecked(size)}
        className="hidden"
      />
      <label
        htmlFor={size}
        className={`transition-color duration-75 ease-out ${
          isChecked(size) ? " ring-offset-0 ring-1 ring-black  " : " "
        }cursor-pointer h-full w-full flex justify-center items-center `}
      >
        {size}
      </label>
    </div>
  );
}
