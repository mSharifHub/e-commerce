import { useFilter } from "../../../providers/contexts/filterContext";

export default function AvailabilityComponent() {
  const { dispatch } = useFilter();

  const onInStockChange = (e) => {
    dispatch({ type: "SET_AVAILABILITY", payload: e.target.checked });
  };

  return (
    <div className="flex flex-col mt-8 p-4 border-t-2">
      <span className="flex justify-center font-light text-lg">
        Sort By Availability
      </span>
      <div className="flex justify-center w-full">
        <label
          htmlFor="include-on-stock-only"
          className="flex justify-between items-center w-full mt-8  font-light capitalize"
        >
          include on stock only
          <input
            type="checkbox"
            id="include-on-stock-only"
            className="w-5 h-5 mr-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500"
            onClick={onInStockChange}
          />
        </label>
      </div>
    </div>
  );
}
