/* eslint-disable jsx-a11y/control-has-associated-label */
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/User";
import NavigationHelperLinks from "./navigation_helper_links/NavigationHelperLinks";
import Linkedin from "./navigation_helpers_icons/Linkedin";
import Github from "./navigation_helpers_icons/Github";
import { SearchBar } from "../search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" grid  grid-cols-2 lg:grid-cols-[0.5fr_1fr_0.5fr]">
      <div className="flex justify-start items-center space-x-8 mx-4">
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
      <div className="flex justify-end  items-center  space-x-4 col-span-1 col-start-3">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </div>
  );
}
