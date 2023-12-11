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
    <form onSubmit={handleSubmit}>
      <div className="flex p-2 items-center justify-center border shadow-md rounded-md">
        <span className="flex mx-1 text-slate-400 ">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="Search"
          className="flex-1  rounded-md ms-2 tracking-[2px] w-full outline-none bg-transparent "
        />
      </div>
    </form>
  );
}
