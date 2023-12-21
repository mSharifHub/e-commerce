import FilterHelpMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" flex  justify-around  items-center mx-2 my-4 ">
      <div className="flex w-full">
        {/* container for links */}
        <div className="hidden  w-full md:flex  justify-center grow ">
          <div className="hidden md:flex justify-around items-center  md:w-1/2 ">
            <div className="mx-2">
              <FilterHelpMenu label="item-1" />
            </div>
            <div className="mx-2">
              <FilterHelpMenu label="item-1" />
            </div>
            <div className="mx-2">
              <FilterHelpMenu label="item-1" />
            </div>
          </div>
        </div>
        {/* container for the helpers */}
        <div className=" w-full flex   items-center  md:w-[500px] justify-around sm:justify-between md:justify-end  ">
          <div className="flex  w-full justify-start items-center  grow-0 mx-10  sm:mx-4 ">
            <SearchBar />
          </div>
          <div className="flex  justify-center items-center mx-10  sm:mx-4">
            <HeartIcon />
          </div>
          <div className="flex justify-between  mx-4 ">
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
