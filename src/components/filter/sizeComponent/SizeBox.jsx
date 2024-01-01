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
      }   flex justify-center items-center  border-2 border-slate-200   rounded-lg transition-all `}
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
        className={`transition-color duration-100 ease-out ${
          isChecked(size) ? " ring-offset-0 ring-1 ring-black rounded-lg " : " "
        }cursor-pointer h-full w-full flex justify-center items-center `}
      >
        {size}
      </label>
    </div>
  );
}
