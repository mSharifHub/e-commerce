/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { reusePort } from "../../../helpers/modal_helpers/reusePort";
import SearchModal from "./SearchModal";
import { UseModal } from "../../../providers/contexts/ModalOpenContext";

export function SearchBar() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const { setIsModalOpen } = UseModal();

  useEffect(() => {
    let timer;
    if (!isInputHovered && !isModalHovered) {
      timer = setTimeout(() => {
        setIsModalOpen(false);
        setShowSearchModal(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isInputHovered, isModalHovered, setIsModalOpen]);

  return (
    <>
      <form
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        className="relative flex justify-center items-center"
      >
        <label htmlFor="searchBar"></label>
        <div
          type="button"
          onClick={() => {
            setShowSearchModal(true);
            setIsModalOpen(true);
          }}
          className="absolute  left-0 w-10 h-10  flex justify-center items-center cursor-pointer rounded-full transition-all duration-100 ease-out  hover:bg-slate-200 hover:scale-110"
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>

        <input
          type="text"
          name="searchBar"
          id="searchBar"
          onChange={() => {
            setShowSearchModal(true);
            setIsModalOpen(true);
          }}
          className="flex rounded-full  w-[10rem] pl-10  bg-neutral-100  text-nowrap  border-none   hover:bg-slate-200 focus:outline-none  focus:border-transparent focus:ring-0 "
          placeholder="Search"
        />
      </form>

      {/* modal to appear on render */}
      {showSearchModal &&
        reusePort(
          <SearchModal
            setIsModalHovered={setIsModalHovered}
            setShowSearchModal={setShowSearchModal}
            showSearchModal={showSearchModal}
          />,
        )}
    </>
  );
}
