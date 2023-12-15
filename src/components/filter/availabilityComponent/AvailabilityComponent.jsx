import { useFilter } from "../../../providers/contexts/filterContext";

export default function AvailabilityComponent() {
  const { dispatch } = useFilter();

  const onInStockChange = (e) => {
    dispatch({ type: "SET_AVAILABILITY", payload: e.target.checked });
  };

  return (
    <div className=" h-full flex justify-start items-center flex-col  sm:mt-8 p-4 ">
      <div className=" flex w-full justify-center items-center">
        <span className="font-light text-lg">Sort By Availability</span>
      </div>
      <div className="flex justify-center  items-center w-full ">
        <label
          htmlFor="include-on-stock-only"
          className="flex  justify-between items-center w-full  mt-10  font-light capitalize "
        >
          include on stock only
          <input
            type="checkbox"
            id="include-on-stock-only"
            className="w-5 h-5  mx-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500"
            onClick={onInStockChange}
          />
        </label>
      </div>
    </div>
  );
}
