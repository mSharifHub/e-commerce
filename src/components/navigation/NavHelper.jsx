import FilterHelpMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className="grid  grid-cols-1  md:grid-cols-[1fr_0.2fr]">
      <div className="flex justify-center items-center space-x-10  col-start-1 whitespace-nowrap transition-transform duration-500 sm:translate-x-0 -translate-x-full">
        <FilterHelpMenu label="50% off" Component="" />
        <FilterHelpMenu label="open box" Component="" />
        <FilterHelpMenu label="new arrivals" Component="" />
      </div>
      <div className="flex justify-center md:justify-end items-center  space-x-4 col-start-1 md:col-start-2 mt-4">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
