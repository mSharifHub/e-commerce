import FilterHelperMenu from "../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "./icons/CartIcon";
import { SearchBar } from "./search/SearchBar";

export default function NavHelper() {
  return (
    <div className="bg-slate-200 flex justify-between items-center p-8 ">
      <div className="bg-yellow-400">
        <FilterHelperMenu label=" " Component="" />
      </div>

      <div className=" flex justify-between  items-center">
        <div className="flex mx-4">
          <SearchBar />
        </div>
        <div className="flex justify-between ">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
