import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <form className="flex">
      <label htmlFor="searchBar" className="sr-only">
        Search
      </label>
      <div className="relative flex  items-center">
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="absolute left-0 p-3 cursor-pointer rounded-full  hover:bg-slate-200 transform ease-in-out"
        />
      </div>
      <input
        type="text"
        id="searchBar"
        className="flex rounded-full  py-2 pr-3 pl-12 capitalize bg-slate-100    text-nowrap  text-left border-none   hover:bg-slate-200 focus:outline-none  focus:border-transparent focus:ring-0"
        placeholder="Search..."
      />
    </form>
  );
}
