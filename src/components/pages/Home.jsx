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
    <div className=" relative flex h-screen scroll  scroll-smooth overflow-y-auto  transition-all duration-300  xl:mx-4  2xl:mx-[200px]  ">
      {/* filter component */}
      <div
        className={`flex flex-none transition-all duration-500 ease-in-out ${
          !isFilterVisible ? "-ml-[300px] " : "-ml-[300px] md:ml-0"
        }  h-screen overflow-y-scroll scroll  `}
      >
        <Filter />
      </div>
      {/* filter icon component */}
      <div
        onClick={toggle}
        className="absolute flex right-0 top-0  mx-4  justify-center items-center z-20  cursor-pointer transition-all duration-500 md:translate-x-0 translate-x-full  "
      >
        <div className="capitalize mx-4">
          {!isFilterVisible ? "show filter" : "hide filter"}
        </div>
        <div>
          <HideFiler />
        </div>
      </div>

      <div className=" flex grow flex-col p-4 mx-8 overflow-x-scroll  scroll whitespace-nowrap  scrollbar-hide ">
        <CategoryDisplay />
      </div>
    </div>
  );
}
