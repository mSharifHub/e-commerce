import { useFilter } from "../../../providers/contexts/filterContext";

export default function SizeBox({ size, isLast }) {
  const { state, dispatch } = useFilter();

  const isChecked = (sizeLabel) => {
    return state.selectedSizes.some(
      (selectedSize) => selectedSize === sizeLabel,
    );
  };

  const onSizeChange = (labelSize) => {
    dispatch({ type: "SET_SIZE", payload: labelSize });
  };

  return (
    <div
      className={` ${
        isLast ? "w-full" : " w-[40px] h-[40px] "
      } shadow-md  flex justify-center items-center  border-2 border-slate-200   rounded-lg transition-all duration-150 ease-out`}
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
        className={`transition-color duration-300 ease-out ${
          isChecked(size)
            ? "   ring-offset-2 ring-1 ring-black rounded-lg "
            : " "
        }cursor-pointer h-full w-full flex justify-center items-center `}
      >
        {size}
      </label>
    </div>
  );
}
