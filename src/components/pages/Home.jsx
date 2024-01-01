/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Filter } from "../filter/Filter";
import { useFilter } from "../../providers/contexts/filterContext";
import { GridDisplay } from "../gridDisplay/GridDisplay";
import FilterHome from "../home/FilterHome";
import { reusePort } from "../../helpers/ModalHelpers/reusePort";

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
      {/* home filter */}
      {reusePort(
        <div>
          <FilterHome
            toggle={toggle}
            isFilterVisible={isFilterVisible}
            sortModalVisible={sortModalVisible}
            sortByModal={sortByModal}
            state={state}
          />
        </div>,
      )}

      {/* main home container */}
      <div className=" min-h-screen  min-w-screen flex  transition-all duration-500 ease-in-out  mx-0 md:mx-[5%] lg:mx-[10%]">
        {/* filter component */}
        <div
          className={`my-8 flex-initial  transition-all duration-300 ease-in-out ${
            isFilterVisible ? "w-72 " : "w-0 "
          }   overflow-hidden whitespace-nowrap`}
        >
          <Filter />
        </div>
        {/* Grid Display of Products */}
        <div className="flex-1 my-8 mx-8">
          <GridDisplay />
        </div>
      </div>
    </>
  );
}
