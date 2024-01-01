/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Filter } from "../filter/Filter";
import { useFilter } from "../../providers/contexts/filterContext";
import { GridDisplay } from "../gridDisplay/GridDisplay";
import FilterHome from "../home/FIlterHome";

export function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortModalVisible, setsortModalVisible] = useState(false);
  const { state } = useFilter();
  const toggle = (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsFilterVisible((prev) => !prev);
  };

  const sortByModal = () => {
    setsortModalVisible((prev) => !prev);
  };

  return (
    <>
      {/* main home container */}
      <div className=" relative flex h-screen transition-all duration-300  xl:mx-4  2xl:mx-[200px] overflow-hidden ">
        {/* filter component */}
        <div
          className={`flex flex-none transition-all duration-500 ease-in-out ${
            isFilterVisible ? "translate-x-0 " : "-translate-x-full"
          }  h-screen overflow-y-scroll scroll  `}
        >
          <Filter />
        </div>
        {/* home filter container */}
        <div>
          <FilterHome
            toggle={toggle}
            isFilterVisible={isFilterVisible}
            sortModalVisible={sortModalVisible}
            sortByModal={sortByModal}
            state={state}
          />
        </div>
        {/* Grid Display of Products */}
        <div className="w-full h-full">
          <GridDisplay />
        </div>
      </div>
    </>
  );
}
