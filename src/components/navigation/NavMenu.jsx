import { Link } from "react-router-dom";
import { useTheme } from "../../providers/contexts/themeContext";
import { SearchBar } from "./SearchBar";
import { ChangeThemeIcon } from "./icons/ChangeThemeIcom";
import { CartIcon } from "./icons/CartIcon";
import { ReactIcon } from "./icons/ReactIcon";

export function NavMenu() {
  const { toogleTheme } = useTheme();

  return (
    <ul
      className={`grid grid-cols-1  sm:grid-cols-11 font-sans tracking-[4px] items-center py-4 border-b-2 `}
    >
      <div className="hidden  md:flex sm:justify-start  ">
        <ReactIcon />
      </div>
      <div className="flex justify-items-start py-2 sm:justify-start  sm:col-start-1 md:justify-center md:col-start-2">
        <li className="hover:text-slate-500 transition duration-100">
          <Link to="/user-profile">Profile</Link>
        </li>
      </div>

      <div className="flex  justify-items-start  py-2 col-span-1 sm:justify-center sm:col-start-2   sm:col-span-2 md:col-start-3">
        <li className="hover:text-slate-500 transition duration-100">
          <Link to="/">Home</Link>
        </li>
      </div>
      <div className="hidden sm:inline-block sm:justify-center sm:col-start-4   sm:col-span-4 md:col-start-5">
        <SearchBar />
      </div>

      <div className="flex justify-start items-start col-span-1 py-2 sm:col-start-8 sm:col-span-2 sm:justify-end md:col-start-9  md:justify-center hover:text-slate-500   ">
        <Link to="/cart">
          <div className="flex justify-between">
            <CartIcon />
          </div>
        </Link>
      </div>
      <div className="flex  justify-start items-start col-span-1  py-2 sm:col-start-11  sm:col-end-11 sm:justify-center">
        {/* disabling next line  since no label is being used */}
        {/* eslint-disable-next-line */}
        <button type="button" onClick={toogleTheme}>
          <ChangeThemeIcon />
        </button>
      </div>
    </ul>
  );
}
