/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";
import HideFiler from "../navigation/icons/HideFilter";

export function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggle = (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="h-screen  w-screen flex overflow-hidden">
      {/* filter component */}
      <div
        className={`flex flex-none transition-all duration-500 ease-in-out ${
          !isFilterVisible ? "-ml-[300px] " : "-ml-[300px] md:ml-0"
        }`}
      >
        <Filter />
      </div>
      {/* filter icon component */}
      <div
        onClick={toggle}
        className=" hidden absolute  md:flex right-4 top-[120px]  px-4  justify-center items-center z-20  cursor-pointer transition-all duration-500   "
      >
        <div className="capitalize mx-4">
          {!isFilterVisible ? "show filter" : "hide filter"}
        </div>
        <div>
          <HideFiler />
        </div>
      </div>
      <div className=" flex grow flex-col p-4  overflow-x-scroll  scroll whitespace-nowrap  scrollbar-hide">
        <CategoryDisplay />
      </div>
    </div>
  );
}
