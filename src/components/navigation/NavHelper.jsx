import FilterHelpMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className="flex w-full ">
      <div className="hidden sm:flex flex-1 justify-around items-center capitalize  sm:text-lg md:text-xl  transition-transform duration-500 ease-out md:translate-x-0 -translate-x-full">
        <FilterHelpMenu label="50% off" Component="" />
        <FilterHelpMenu label="open box" Component="" />
        <FilterHelpMenu label="new arrivals" Component="" />
      </div>

      <div className="flex  flex-1 gap-x-4 sm:flex-none justify-center sm:justify-end items-center  sm:gap-x-2 transition-transform duration-500 ease-in-out ">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
