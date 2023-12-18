/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCart } from "../../../providers/contexts/cartContext";
import { useFilter } from "../../../providers/contexts/filterContext";
import ToogleButtonComponent from "./ToogleButtonComponent";

export default function AvailabilityComponent() {
  const {
    dispatch,
    state: { inStock },
  } = useFilter();

  const { state } = useCart();

  const result = state.products.filter((product) => product.inStock > 0).length;

  const onInStockChange = () => {
    dispatch({ type: "SET_AVAILABILITY" });
  };

  return (
    <div className="flex justify-between  m-4 ">
      <span className="flex justify-center items-center mx-4 text-lg ">
        In Stock
      </span>
      <span
        className={`${
          inStock ? " inline-flex" : "hidden"
        } text-lg   justify-center`}
      >
        ({result})
      </span>
      <div className="cursor-pointer px-2" onClick={onInStockChange}>
        <ToogleButtonComponent inStock={inStock} />
      </div>
    </div>
  );
}
