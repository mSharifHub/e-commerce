import React from "react";
import { useFilter } from "../../../providers/contexts/filterContext";
import SizeBox from "./SizeBox";

export default function SizeComponent() {
  const {
    state: { availableSizes },
  } = useFilter();

  const sorted = availableSizes.sort((a, b) => a - b);
  return (
    <div className="grid grid-cols-4 mx-4 gap-y-4  p-2">
      {sorted.map((availableSize) => (
        <div key={availableSize}>
          <SizeBox size={availableSize} />
        </div>
      ))}
    </div>
  );
}
