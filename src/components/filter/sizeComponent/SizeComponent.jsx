import { useFilter } from "../../../providers/contexts/filterContext";
import SizeBox from "./SizeBox";

export default function SizeComponent() {
  // extracting instance from use filter
  const {
    state: { availableSizes },
  } = useFilter();

  // sort sizes by ascending order
  const sorted = availableSizes.sort((a, b) => a - b);
  /*
  will map the available sizes and use the size box component to display each size number
  if the last element surpass 4 elements will take the full space
*/
  return (
    <div className="grid grid-cols-4 mx-4 gap-y-4  p-2">
      {sorted.map((availableSize, index) => (
        <div
          key={availableSize}
          className={
            // if the remainder of the len is not 0 and is 1 then the last element will take all space available
            index === sorted.length - 1 && sorted.length % 4 !== 0
              ? "col-span-4"
              : "col-span-1"
          }
        >
          <SizeBox
            size={availableSize}
            isNewRow={index === sorted.length - 1 && sorted.length % 4 !== 0}
          />
        </div>
      ))}
    </div>
  );
}
