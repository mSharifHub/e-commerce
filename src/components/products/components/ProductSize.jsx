/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ToolTip from "./ToolTip";

export default function ProductSize({
  size,
  onSizeSelect,
  isAvailable,
  selectedSize,
}) {
  const isChecked = size === selectedSize;

  const handleChange = () => {
    if (isAvailable) {
      onSizeSelect(size);
    }
  };

  const labelContent = (
    <label
      htmlFor={`pSize-${size}`}
      onClick={handleChange}
      className={`transition-color duration-75 ease-out ${
        isChecked ? " ring-offset-0 ring-1 ring-black  " : " "
      } h-full w-full flex justify-center items-center  ${
        !isAvailable ? "opacity-10 " : "opacity-100 "
      }cursor-pointer`}
    >
      {size}
    </label>
  );

  return (
    <div className="w-[50px] h-[50px]  flex justify-center items-center border-2 border-slate-200 transition-all">
      <input
        type="radio" // Changed to radio to allow single selection
        id={`pSize-${size}`}
        name="pSize"
        onChange={() => {}}
        checked={isChecked}
        disabled={!isAvailable}
        className="hidden"
      />
      {isAvailable ? (
        labelContent
      ) : (
        <ToolTip message="Not Available">{labelContent}</ToolTip>
      )}
    </div>
  );
}
