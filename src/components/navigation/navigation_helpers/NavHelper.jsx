import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import { SearchBar } from "../search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" grid  grid-cols-1  md:grid-cols-[1fr_0.2fr] ">
      <div className="flex -translate-y-1/2 mt-2 mr-4 justify-center md:justify-end items-center  space-x-5 col-start-1 md:col-start-2  transition-all duration-500 sm:translate-y-0">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
