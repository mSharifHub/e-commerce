import SortByHighest from "./Components/SortByHighest";
import SortByLowest from "./Components/SortByLowest";
import SortByMostOrdered from "./Components/SortByMostOrdered";

export default function SortByModal(sortModalVisible) {
  return (
    <div
      className={`absolute top-5 -right-20   w-[180px] h-[130px]   shadow-lg rounded-b-lg bg-white z-20 transition-all duration-500 overflow-y-hidden ${
        sortModalVisible ? "slideModalDown" : "slideModalUp"
      }`}
    >
      <div className="flex  flex-col justify-start items-center space-y-4 borde-2 w-full h-full">
        <span className="cursor-pointer">
          <SortByMostOrdered />
        </span>
        <span className="cursor-pointer">
          <SortByHighest />
        </span>
        <span className="cursor-pointer">
          <SortByLowest />
        </span>
      </div>
    </div>
  );
}
