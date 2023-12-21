import FilterHelpMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" flex justify-end items-center mt-4 sm:justify-between">
      {/* container for links */}
      <div className=" hidden sm:flex  grow-0 sm:grow justify-center items-center  transition-all duration-700 ease-in-out transform md:translate-x-0 -translate-x-full  whitespace-nowrap capitalize font-thin text-xl">
        <div className="flex  w-1/2 justify-around">
          <div className="mx-4">
            <FilterHelpMenu label="50% off" Component="" />
          </div>
          <div className="mx-4">
            <FilterHelpMenu label="open box" Component="" />
          </div>
          <div className="mx-4">
            <FilterHelpMenu label="new arrivals" Component="" />
          </div>
        </div>
      </div>

      {/* container for the helpers */}
      <div className=" flex  p-2 grow sm:flex-none justify-between items-center transition-all duration-500 ease-out ">
        <div className="flex justify-start w-full  items-center ">
          <div className="flex">
            <SearchBar />
          </div>
          <div className="flex justify-center items-center mx-20 sm:mx-4">
            <HeartIcon />
          </div>
        </div>
        <div className="flex  w-full  justify-end ">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
