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
      <div className="min-w-screen  flex transition-all duration-500 ease-in-out mx-0   xl:mx-[10%]">
        <div className="w-full h-screen flex flex-row  justify-between my-8  overflow-hidden">
          {/* filter component */}
          <div
            className={` ${
              isFilterVisible ? "w-72" : "w-0"
            }  hidden md:flex  flex-initial   transition-all duration-700 ease-in-out  overflow-hidden overflow-y-auto scroll-smooth `}
          >
            <Filter />
          </div>
          {/* Grid Display of Products */}
          <div className="flex-1 mx-8 overflow-y-auto scroll-smooth scrollbar-hide transition-all duration-500 ease-out  whitespace-nowrap ">
            <GridDisplay />
          </div>
        </div>
      </div>
    </>
  );
}
