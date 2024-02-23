import { useFilter } from "../../../providers/contexts/filterContext";
import ProductSize from "./ProductSize";

export default function ProductSizes({ sizes, onSizeSelect, selectedSize }) {
  const {
    state: { availableSizes },
  } = useFilter();
  const sortedSizes = [...availableSizes].sort((a, b) => a - b);

  return (
    <div className="grid grid-cols-5 gap-x-4  gap-y-4  p-4">
      {sortedSizes.map((size, index) => (
        <ProductSize
          key={size}
          size={size}
          onSizeSelect={onSizeSelect}
          selectedSize={selectedSize}
          isAvailable={sizes.includes(size)}
        />
      ))}
    </div>
  );
}
