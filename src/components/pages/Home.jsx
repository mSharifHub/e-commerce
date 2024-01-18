/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import { Filter } from "../filter/Filter";
import { useFilter } from "../../providers/contexts/filterContext";
import { GridDisplay } from "../gridDisplay/GridDisplay";
import { reusePort } from "../../helpers/ModalHelpers/reusePort";
import HideFiler from "../navigation/icons/HideFilter";
import AngleUp from "../filter/icons/AngleUp";
import AngleDown from "../filter/icons/AngleDown";
import HideFilterComponent from "../filter/hideFilterComponent/HideFilterComponent";
import SortByModalIcon from "../filter/sortByModal/SortByModalIcon";
import SortByModal from "../filter/sortByModal/SortByModal";

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
        <>
          {/* hide filter component */}
          <div className="hidden  md:flex  absolute right-60 top-[12rem]  justify-end items-center z-20  cursor-pointer ">
            <HideFilterComponent
              toggle={toggle}
              isFilterVisible={isFilterVisible}
              HideFiler={HideFiler}
            />
          </div>

          {/* sort by modal icon */}
          <div className="absolute hidden md:flex right-20 -translate-x-1/2 top-[12rem]  justify-end items-center z-20 ">
            <SortByModalIcon
              sortModalVisible={sortModalVisible}
              sortByModal={sortByModal}
              AngleDown={AngleDown}
              AngleUp={AngleUp}
              label="sort by:"
            />
            {/* Display the name of sort By chosen */}
            {sortModalVisible && (
              <SortByModal sortModalVisible={sortModalVisible} />
            )}
            {state.sortByDisplayName !== null ? (
              <span className=" absolute -right-20  font-thin text-neutral-500 text-lg">
                {state.sortByDisplayName}
              </span>
            ) : null}
          </div>
        </>,
      )}

      {/* main home container */}
      <div className="min-w-screen  flex transition-all duration-500 ease-in-out mx-0   xl:mx-[5%]">
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
