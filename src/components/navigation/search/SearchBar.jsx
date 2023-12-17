import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(``);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(``);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center ">
      <label htmlFor="searchBar" className="sr-only">
        Search
      </label>
      <div className="relative flex justify-center items-center">
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="absolute left-0 p-3 cursor-pointer rounded-full  hover:bg-slate-200 transform ease-in-out"
        />
      </div>
      <input
        type="text"
        id="searchBar"
        className="rounded-full  w-full capitalize bg-slate-100  text-lg text-left pl-20   border-none   hover:bg-slate-200 focus:outline-none  focus:border-transparent focus:ring-0"
        placeholder="search"
      />
    </form>
  );
}
