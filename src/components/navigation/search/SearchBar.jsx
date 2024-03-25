/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { reusePort } from "../../../helpers/modal_helpers/reusePort";
import SearchModal from "./SearchModal";
import { useModal } from "../../../providers/contexts/modalContext";

export function SearchBar() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [input, setInput] = useState("");
  const [modalAnimation, setModalAnimation] = useState("");
  const { dispatch } = useModal();

  useEffect(() => {
    let timer;
    if (showSearchModal) {
      // Reset input once the modal is open
      timer = setTimeout(() => {
        setInput("");
      }, 0);
    }
    return () => clearTimeout(timer);
  }, [showSearchModal]);

  useEffect(() => {
    if (showSearchModal) {
      setModalAnimation("animate-expandModalRightToLeft");
    }
    let timer;
    if (showSearchModal && !isModalHovered) {
      timer = setTimeout(() => {
        dispatch({ type: "UNBLUR_SCREEN" });
        setModalAnimation("animate-contractModalLeftToRight");
        setTimeout(() => {
          setShowSearchModal(false);
        }, 300);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [dispatch, showSearchModal, isModalHovered]);

  const handleOnInputChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    if (newValue.length >= 3) {
      setShowSearchModal(true);
      dispatch({ type: "BLUR_SCREEN", payload: "fullScreen" });
      setModalAnimation("animate-expandModalRightToLeft"); // Set to expand animation when opening
    }
  };

  return (
    <>
      <form
        className={`transition-all duration-300 ease-out ${
          showSearchModal ? "hidden" : " relative flex"
        } justify-center items-center`}
      >
        <label htmlFor="searchBar"></label>
        <div
          type="button"
          onClick={() => {
            setShowSearchModal(true);
            dispatch({ type: "BLUR_SCREEN", payload: "fullScreen" });
            setModalAnimation("animate-expandModalRightToLeft"); // Ensure we're setting the correct initial animation
          }}
          className="absolute left-0 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-all duration-100 ease-out hover:bg-slate-200 hover:scale-110"
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>

        <input
          type="text"
          name="searchBar"
          id="searchBar"
          value={input}
          onChange={handleOnInputChange}
          className="flex rounded-full w-[10rem] pl-10 bg-neutral-100 text-nowrap border-none hover:bg-slate-200 focus:outline-none focus:border-transparent focus:ring-0"
          placeholder="Search"
          autoComplete="off"
        />
      </form>

      {showSearchModal &&
        reusePort(
          <div
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() => setIsModalHovered(false)}
            className={`fixed top-0 flex justify-end items-center h-[30rem] bg-white  ${modalAnimation} z-50`}
          >
            <SearchModal
              setIsModalHovered={setIsModalHovered}
              setShowSearchModal={setShowSearchModal}
              showSearchModal={showSearchModal}
              input={input}
            />
            ,
          </div>,
        )}
    </>
  );
}
