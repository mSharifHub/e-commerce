import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className=" flex  justify-around  items-center mx-2">
      <div className="flex w-full">
        {/* container for links */}
        <div className="hidden  w-full sm:flex  justify-around grow bg-yellow-500">
          {/* inner cotainer for each individual link */}
        </div>
        {/* container for the helpers */}
        <div className=" w-full flex   items-center bg-red-200  grow-0 sm:w-[500px] justify-around sm:justify-end">
          <div className="flex justify-center items-center  grow-0 mx-10  sm:mx-4">
            <SearchBar />
          </div>
          <div className="flex justify-center items-center mx-10  sm:mx-4">
            <HeartIcon />
          </div>
          <div className="flex justify-between  mx-4">
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
