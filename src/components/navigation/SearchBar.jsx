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
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <label htmlFor="searchBar" className="sr-only">
        Search
      </label>
      <div className="relative flex justify-center items-center">
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="absolute left-4 py-1 px-2 border-r-2 border-black "
        />
      </div>
      <input
        type="text"
        id="searchBar"
        className="rounded-full  w-full capitalize bg-slate-100  text-lg text-left pl-20  outline-none border-none"
        placeholder="search"
      />
    </form>
  );
}
