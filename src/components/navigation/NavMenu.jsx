import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useTheme } from "../../providers/contexts/themeContext";
import { HomeIcon } from "./icons/HomeIcon";
import { ChangeThemeIcon } from "./icons/ChangeThemeIcom";
import { CartIcon } from "./icons/CartIcon";

export const NavMenu = () => {
    const { toogleTheme } = useTheme();

    return (
        <>
            <ul className="grid grid-cols-1 gap-4  sm:grid-cols-7 font-sans tracking-[4px] items-center py-4">
                <div className="flex  justify-items-start  sm:justify-center col-span-1 sm:col-span-1 ">
                    <li className=" hover:text-slate-500 transition duration-100">
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                </div>
                <div className="flex justify-items-start sm:justify-center  col-span-1 sm:col-span-1">
                    <li className="hover:text-slate-500 transition duration-100">
                        <Link to="/user-profile">Profile</Link>
                    </li>
                </div>
                <div className=" hidden sm:block  col-span-1 sm:col-span-3 sm:col-start-3 sm:col-end-5  ">
                    <SearchBar />
                </div>
                <div className="flex justify-start items-start sm:justify-center col-span-1 sm:col-span-1 sm:col-start-5 hover:text-slate-500 ">
                    <Link to="/cart">
                        <div className="flex  justify-between items-center bg-purple-500 py-2 px-3 rounded-lg">
                            <CartIcon />
                        </div>
                    </Link>
                </div>
                <div className="flex  justify-items-start -order-1 sm:justify-center sm:order-none col-span-1 sm:col-span-1 ">
                    <li>
                        <Link to="/">
                            <HomeIcon />
                        </Link>
                    </li>
                </div>
                <div className="flex  justify-start items-start  space-y-4  sm:space-y-0 sm:flex-row sm:justify-around  col-span-1  sm:col-span-1">
                    <button onClick={toogleTheme}>
                        <ChangeThemeIcon />
                    </button>
                </div>
            </ul>
        </>
    );
};
