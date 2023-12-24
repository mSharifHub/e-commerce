import { useFilter } from "../../../providers/contexts/filterContext";

export default function SizeBox({ size }) {
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
    <div className=" w-[40px] h-[40px] shadow-md  flex justify-center items-center  border-2 border-slate-200   rounded-lg transition-all duration-300 ease-out  hover:bg-slate-100  ">
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
            ? " bg-slate-300  ring-offset-4 ring-2 ring-slate-300 rounded-lg "
            : " "
        }cursor-pointer h-full w-full flex justify-center items-center `}
      >
        {size}
      </label>
    </div>
  );
}
