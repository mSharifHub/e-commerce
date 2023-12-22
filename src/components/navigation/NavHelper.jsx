import FilterHelpMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className="flex w-full mt-8 ">
      <div className="hidden sm:flex flex-1 justify-center gap-x-10 items-center capitalize  sm:text-lg md:text-xl  transition-transform duration-500 ease-out lg:translate-x-0 -translate-x-full">
        <FilterHelpMenu label="50% off" Component="" />
        <FilterHelpMenu label="open box" Component="" />
        <FilterHelpMenu label="new arrivals" Component="" />
      </div>

      <div className="flex  flex-1 gap-x-4 sm:flex-none justify-end items-center  ">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
