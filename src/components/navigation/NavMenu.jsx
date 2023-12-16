/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/contexts/themeContext";
import { SearchBar } from "./SearchBar";
import { ChangeThemeIcon } from "./icons/ChangeThemeIcom";
import { CartIcon } from "./icons/CartIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { Filter } from "../filter/Filter";

export function NavMenu() {
  const { toogleTheme } = useTheme();

  return (
    <ul className="grid grid-cols-11">
      <div className="mx-4 flex col-start-1 col-span-1">
        <ReactIcon />
      </div>

      <div className=" hidden sm:inline-flex sm:col-start-7 sm:col-span-3 lg:col-start-8 xl:col-start-9 xl:col-span-2 xl:justify-center xl:items-center">
        <SearchBar />
      </div>
      <div className="flex justify-around items-center col-start-10 col-span-3  md:col-start-10 md:col-span-2   lg:col-start-11  ">
        <Link to="/cart">
          <div className="flex">
            <CartIcon />
          </div>
        </Link>
        <div className="flex">
          <button type="button" onClick={toogleTheme}>
            <ChangeThemeIcon />
          </button>
        </div>
      </div>
    </ul>
  );
}
