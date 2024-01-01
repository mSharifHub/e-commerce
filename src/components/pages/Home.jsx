/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Filter } from "../filter/Filter";
import { useFilter } from "../../providers/contexts/filterContext";
import { GridDisplay } from "../gridDisplay/GridDisplay";
import FilterHome from "../home/FIlterHome";
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
      <div className=" min-h-screen  min-w-screen flex border-2 border-black ">
        {/* filter component */}
        <div
          className={` flex-initial  transition-all duration-500 ease-in-out ${
            isFilterVisible ? "w-72 " : "w-0 "
          }   border-2  overflow-hidden whitespace-nowrap`}
        >
          <Filter />
        </div>
        {/* Grid Display of Products */}
        <div className="flex-1">
          <GridDisplay />
        </div>
      </div>
    </>
  );
}
