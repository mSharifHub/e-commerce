/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/self-closing-comp */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../providers/contexts/modalContext";

export default function SearchModal({
  setShowSearchModal,
  showSearchModal,
  input,
}) {
  const [inputExpand, setInputExpand] = useState(false);
  const [contInput, setContInput] = useState(input);
  const inputRef = useRef(null);
  const prevContInputRef = useRef(input);
  const { dispatch } = useModal();

  // Use effect to  put focus on input
  useEffect(() => {
    if (showSearchModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchModal]);

  useEffect(() => {
    if (
      contInput.length < prevContInputRef.current.length &&
      contInput.length === 0
    ) {
      setShowSearchModal(false);
      dispatch({ type: "UNBLUR_SCREEN" });
    }
    prevContInputRef.current = contInput;
  }, [contInput, setShowSearchModal, dispatch]);

  // UseEffect to handle modal animation
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
                ? " w-[15rem]  sm:w-[20rem]  md:w-[30rem] lg:w-[40rem] xl:w-[50rem]"
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
  );
}
