/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from "react";
import { useModal } from "../../../providers/contexts/modalContext";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import { SearchBar } from "../search/SearchBar";
import MenuBars from "../icons/MenuBars";
import NavigationHelperModal from "./NavigationHelperModal";
import { navigationHeaderRoutes } from "../../../styles/routes/routes";
import { reusePort } from "../../../helpers/modal_helpers/reusePort";

export default function NavHelper() {
  const sections = ["news_feature", "men", "women", "kids"];
  const [activeModal, setActiveModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [isOverModal, setIsOverModal] = useState(false);
  const { dispatch } = useModal();

  // useEffect to set modal either true or false
  useEffect(() => {
    let modalTimer;

    if (isSectionHovered) {
      setShowModal(true);
      dispatch({ type: "BLUR_SCREEN", payload: "main-content" });
    } else {
      modalTimer = setTimeout(() => {
        if (!isSectionHovered && !isModalHovered) {
          setShowModal(false);
          dispatch({ type: "UNBLUR_SCREEN" });
          setActiveModal(null);
        }
      }, 200);
    }
    return () => clearTimeout(modalTimer);
  }, [isSectionHovered, isModalHovered, dispatch]);

  // useEffect  to scroll down modal as window scrolls down on y-axis
  useEffect(() => {
    const modalOnScrollDown = () => {
      const modalElement = document.getElementById("modal-nav-helper");
      if (!modalElement) return;

      const scrollTop = window.scrollY;
      const modalTopPosition = modalElement.offsetTop;

      setIsOverModal(scrollTop >= modalTopPosition && scrollTop !== 0);
    };

    window.addEventListener("scroll", modalOnScrollDown);

    return () => {
      window.removeEventListener("scroll", modalOnScrollDown);
    };
  }, []);

  return (
    <div className="relative  transition-all duration-300 ease-out -translate-y-1/2  md:translate-y-0 grid grid-cols-1 lg:grid-cols-[0.2fr_2fr] ">
      <nav className="hidden  md:flex  space-x-[2rem]  justify-center items-center col-span-1  col-start-1 lg:col-start-2">
        {sections.map((section) => (
          <div
            key={section}
            onMouseEnter={() => {
              setActiveModal(section);
              setIsSectionHovered(true);
            }}
            onMouseLeave={() =>
              setTimeout(() => {
                setIsSectionHovered(false);
              }, 100)
            }
            className="relative cursor-pointer capitalize"
          >
            {section.replace("_", " ")}
            <span
              className={`absolute top-7 left-0 transition-all duration-150 ease-out  ${
                activeModal === section
                  ? "opacity-100 w-full border-[1px] border-black"
                  : "opacity-0 w-0"
              }`}
            ></span>
          </div>
        ))}
      </nav>

      <div className=" flex transition-all duration-150 ease-out justify-end  items-center space-x-10 col-span-1 col-start-1 md:col-start-2 lg:col-start-3 ">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
        <MenuBars />
      </div>
      {showModal &&
        activeModal &&
        reusePort(
          <div
            id="modal-nav-helper"
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                setIsModalHovered(false);
              }, 100)
            }
            className={`${
              !isOverModal ? "absolute top-[5.5rem]" : "fixed top-0 "
            } inset-x-0  h-[30rem] bg-white z-50 ${
              isSectionHovered || isModalHovered
                ? "animate-slide-down"
                : "animate-slide-up"
            }`}
          >
            <NavigationHelperModal
              showModal={showModal}
              title={navigationHeaderRoutes[activeModal]?.title}
              links={navigationHeaderRoutes[activeModal]?.links}
            />
          </div>,
        )}
    </div>
  );
}
