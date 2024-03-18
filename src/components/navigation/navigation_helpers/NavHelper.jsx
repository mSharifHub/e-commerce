/* eslint-disable jsx-a11y/control-has-associated-label */
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";

import NavigationHelperLinks from "./navigation_helper_links/NavigationHelperLinks";
import Linkedin from "./navigation_helpers_icons/Linkedin";
import Github from "./navigation_helpers_icons/Github";
import { SearchBar } from "../search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-[0.2fr_2fr] xl:grid-cols-[0.5fr_1fr_0.5fr]">
      <div className="hidden md:flex justify-start items-center space-x-10 mx-4 col-span-1 ">
        <a href="https://www.linkedin.com/in/mohamed-sharif-47301520b/">
          <Linkedin />
        </a>
        <a href="https://github.com/mSharifHub/e-commerce">
          <Github />
        </a>
      </div>
      <div className=" hidden lg:flex justify-around col-span-1 col-start-2 ">
        <NavigationHelperLinks />
      </div>
      <div className="flex  justify-center lg:justify-end  items-center  space-x-8 col-span-1 col-start-1 md:col-start-2 lg:col-start-3 transition-all duration-100 ease-out">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
