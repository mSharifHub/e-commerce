/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <form className="relative flex  items-center">
      <label htmlFor="searchBar"></label>
      <span className="absolute  right-0 md:left-0 w-10 h-10  flex justify-center items-center cursor-pointer rounded-full transition-all duration-100 ease-out  hover:bg-slate-200 hover:scale-110 ">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </span>

      <input
        type="text"
        name="searchBar"
        id="searchBar"
        className="hidden md:flex rounded-full w-[10rem] pl-10  bg-neutral-100  text-nowrap  text-left border-none   hover:bg-slate-200 focus:outline-none  focus:border-transparent focus:ring-0 transition-all duration-150 ease-out"
        placeholder="Search"
      />
    </form>
  );
}
