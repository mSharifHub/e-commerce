/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/self-closing-comp */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../providers/contexts/modalContext";

export default function SearchModal({
  setIsModalHovered,
  setShowSearchModal,
  showSearchModal,
  input,
}) {
  const [inputExpand, setInputExpand] = useState(false);
  const [contInput, setContInput] = useState("");
  const inputRef = useRef(null);
  const { dispatch } = useModal();

  // use effect on mount setInput to pass prop input
  useEffect(() => {
    setContInput(input);
  }, []);

  // use effect to  put focus on input
  useEffect(() => {
    if (showSearchModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchModal]);

  // useEffect to handle modal animation
  useEffect(() => {
    let timer;
    if (showSearchModal) {
      timer = setTimeout(() => setInputExpand(true), 300);
    } else {
      setInputExpand(false);
    }
    return () => clearTimeout(timer);
  }, [showSearchModal]);

  const handleInputChange = (event) => {
    const contValue = event.target.value;
    setContInput(contValue);
  };

  return (
    <div
      onMouseEnter={() => setIsModalHovered(true)}
      onMouseLeave={() => setIsModalHovered(false)}
      className="fixed top-0 flex justify-end items-center   animate-expandModalRightToLeft h-[30rem]  bg-white z-50"
    >
      <div className=" relative w-full h-full">
        <form className="flex mt-5  justify-center items-center">
          <div className="relative flex align-center w-auto">
            <label htmlFor="searchBar"></label>
            <div className="absolute left-0 pl-3 flex items-center justify-center h-10 z-10">
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </div>

            <input
              ref={inputRef}
              value={contInput}
              onChange={handleInputChange}
              type="text"
              name="searchBar"
              id="searchBar"
              className={`flex rounded-full  transition-all duration-300 ease-out ${
                inputExpand
                  ? " w-[15rem] xl:w-[50rem] lg:w-[40rem] md:w-[30rem]  sm:w-[20rem] "
                  : "w-[10rem]"
              } pl-20  bg-neutral-100  text-nowrap  border-none   hover:bg-slate-200 focus:outline-none  focus:border-transparent focus:ring-0 `}
              placeholder="Search"
              autoComplete="off"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setShowSearchModal(false);
              dispatch({ type: "UNBLUR_SCREEN" });
            }}
            className={`flex justify-center items-center ml-10 text-lg capitalize text-gray-700 font-light transition-transform duration-500 ease-in-out ${
              inputExpand
                ? "opacity-100 scale-100 hover:text-gray-500 "
                : " opacity-0 scale-0"
            }`}
          >
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
