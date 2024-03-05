import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/User";

import { SearchBar } from "../search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" grid  grid-cols-1 sm:grid-cols-[1fr_1fr] ">
      <div className="flex justify-end  items-center col-span-1 col-start-2 space-x-4">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </div>
  );
}
