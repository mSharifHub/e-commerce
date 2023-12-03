import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../providers/contexts/themeContext";

export const NavMenu = () => {
    const { toogleTheme } = useTheme();

    return (
        <>
            <ul className="grid grid-cols-1 gap-4  sm:grid-cols-6 font-sans tracking-[4px] items-center border-b border-grey py-4">
                <div className="flex  justify-items-start  sm:justify-center col-span-1 sm:col-span-1 ">
                    <li className=" hover:text-slate-500 transition duration-100">
                        <Link to="/">Home</Link>
                    </li>
                </div>
                <div className="flex justify-items-start sm:justify-center  col-span-1 sm:col-span-1">
                    <li className="hover:text-slate-500 transition duration-100">
                        <Link to="/place-order">Order</Link>
                    </li>
                </div>
                <div className=" hidden sm:block  col-span-1 sm:col-span-3 sm:col-start-3 sm:col-end-5  ">
                    <SearchBar />
                </div>
                <div className="flex justify-start items-start sm:justify-center col-span-1 sm:col-span-1 sm:col-start-5 hover:text-slate-500 ">
                    <Link to="/cart">
                        <div className="flex  justify-between items-center bg-blue-400 py-2 px-3 rounded-lg">
                            <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "white" }} />
                            <div className="ml-2 text-white">{0}</div>
                        </div>
                    </Link>
                </div>
                <div className="flex  justify-start items-start  space-y-4  sm:space-y-0 sm:flex-row sm:justify-around  col-span-1  sm:col-span-1">
                    <button onClick={toogleTheme} className="hover:text-slate-500">
                        <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
                    </button>
                </div>
            </ul>
        </>
    );
};
