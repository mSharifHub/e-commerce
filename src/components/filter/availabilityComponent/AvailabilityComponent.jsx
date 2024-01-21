/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useFilter } from "../../../providers/contexts/filterContext";
import ToogleButtonComponent from "./ToogleButtonComponent";

export default function AvailabilityComponent() {
  const {
    dispatch,
    state: { inStock },
  } = useFilter();

  const onInStockChange = () => {
    dispatch({ type: "SET_AVAILABILITY" });
  };

  return (
    <div className="flex justify-between mx-4 ">
      <span className="flex justify-center items-center text-lg  capitalize font-thin whitespace-nowrap">
        pick up today at:
        {/* // TODO add location to the store component// */}
      </span>
      <div className=" justify-center items-center " onClick={onInStockChange}>
        <ToogleButtonComponent inStock={inStock} />
      </div>
    </div>
  );
}
