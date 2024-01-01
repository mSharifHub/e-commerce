import HideFiler from "../navigation/icons/HideFilter";
import AngleUp from "../filter/icons/AngleUp";
import AngleDown from "../filter/icons/AngleDown";
import HideFilterComponent from "../filter/hideFilterComponent/HideFilterComponent";
import SortByModalIcon from "../filter/sortByModal/SortByModalIcon";
import SortByModal from "../filter/sortByModal/SortByModal";

export default function FilterHome({
  toggle,
  isFilterVisible,
  sortModalVisible,
  sortByModal,
  state,
}) {
  return (
    <>
      {/* hide filter component */}
      <div className="hidden  md:flex  absolute right-60 top-4  justify-end items-center z-20  cursor-pointer ">
        <HideFilterComponent
          toggle={toggle}
          isFilterVisible={isFilterVisible}
          HideFiler={HideFiler}
        />
      </div>

      {/* sort by modal icon */}
      <div className="absolute hidden md:flex right-20 top-4  justify-end items-center z-20 ">
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
    </>
  );
}
