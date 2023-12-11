export default function AvailabilityComponent() {
  return (
    <div className="flex flex-col bg-purple-200 mt-12 p-4  ">
      <span className="font-bold text-center bg-red-500 mb-4">
        Sort By Availability
      </span>
      <div className="flex justify-around  bg-red-200">
        <label htmlFor="include-on-stock-only">
          include on stock only
          <div className="inline-block ml-4">
            <input type="checkbox" id="include-on-stock-only" />
          </div>
        </label>
      </div>
    </div>
  );
}
