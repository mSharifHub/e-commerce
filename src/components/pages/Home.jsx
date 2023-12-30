/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";
import HideFiler from "../navigation/icons/HideFilter";
import AngleUp from "../filter/icons/AngleUp";
import AngleDown from "../filter/icons/AngleDown";
import HideFilterComponent from "../filter/hideFilterComponent/HideFilterComponent";
import SortByModalIcon from "../filter/sortByModal/SortByModalIcon";
import SortByModal from "../filter/sortByModal/Components/SortByModal";
import { reusePort } from "../../helpers/ModalHelpers/reusePort";

export function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortModalVisible, setsortModalVisible] = useState(false);

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
    <div className=" relative flex h-screen scroll  scroll-smooth overflow-y-auto  transition-all duration-300  xl:mx-4  2xl:mx-[200px] ">
      {/* filter component */}
      <div
        className={`flex flex-none transition-all duration-500 ease-in-out ${
          !isFilterVisible ? "-ml-[300px] " : "-ml-[300px] md:ml-0"
        }  h-screen overflow-y-scroll scroll  `}
      >
        <Filter />
      </div>

      {/* hide filter component */}
      <div className="absolute flex right-60 top-4  justify-end items-center z-20  cursor-pointer transition-all duration-500 md:translate-x-0 translate-x-full ">
        <HideFilterComponent
          toggle={toggle}
          isFilterVisible={isFilterVisible}
          HideFiler={HideFiler}
        />
      </div>

      {/* sort by modal icon */}
      <div className="absolute flex right-20 top-4  justify-end items-center z-20  cursor-pointer transition-all duration-500 md:translate-x-0 translate-x-full">
        <SortByModalIcon
          sortModalVisible={sortModalVisible}
          sortByModal={sortByModal}
          AngleDown={AngleDown}
          AngleUp={AngleUp}
          label="sort by:"
        />
        {/* Display the name of sort By chosen */}
        {sortModalVisible && reusePort(<SortByModal />)}
      </div>
      {/* To do */}
      <div className=" flex grow flex-col p-4 mx-8 overflow-x-scroll  scroll whitespace-nowrap  scrollbar-hide">
        <CategoryDisplay />
      </div>
    </div>
  );
}
