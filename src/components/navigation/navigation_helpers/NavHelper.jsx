/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import NavigationHelperLinks from "./navigation_helper_links/NavigationHelperLinks";
import { SearchBar } from "../search/SearchBar";
import MenuBars from "../icons/MenuBars";

export default function NavHelper() {
  return (
    <div className=" relative grid grid-cols-1 lg:grid-cols-[0.2fr_2fr] xl:grid-cols-[0.5fr_1fr_0.5fr]">
      <div className=" hidden lg:flex  justify-center items-center col-span-1 col-start-2  ">
        <NavigationHelperLinks />
      </div>
      <div className=" flex justify-end  items-center  space-x-8 col-span-1 col-start-1 md:col-start-2 lg:col-start-3 transition-all duration-100 ease-out">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
        <MenuBars />
      </div>
    </div>
  );
}
