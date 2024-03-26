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
  const { dispatch } = useModal();

  useEffect(() => {
    let modalTimer;

    if (isSectionHovered || isModalHovered) {
      setShowModal(true);
      dispatch({ type: "BLUR_SCREEN", payload: "main-content" });
    } else {
      modalTimer = setTimeout(() => {
        if (!isSectionHovered && !isModalHovered) {
          setShowModal(false);
          dispatch({ type: "UNBLUR_SCREEN" });
          setActiveModal(null);
        }
      }, 100);
    }
    return () => clearTimeout(modalTimer);
  }, [isSectionHovered, isModalHovered, dispatch]);

  return (
    <div className=" relative grid grid-cols-1 lg:grid-cols-[0.2fr_2fr] xl:grid-cols-[0.5fr_1fr_0.5fr] ">
      <nav className=" hidden lg:flex  space-x-[2rem]  justify-center items-center col-span-1 col-start-2  ">
        {sections.map((section) => (
          <div
            key={section}
            onMouseEnter={() => {
              setActiveModal(section);
              setIsSectionHovered(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsSectionHovered(false);
              }, 100);
            }}
            className="relative  cursor-pointer"
          >
            {section.replace("_", " ")}
            <span
              className={`absolute top-6 left-0 transition-all duration-150 ease-out ${
                activeModal === section
                  ? "opacity-100 w-full border-[1px] border-black"
                  : "opacity-0 w-0"
              }`}
            ></span>
          </div>
        ))}
      </nav>

      <div className=" flex transition-all duration-150 ease-out justify-center md:justify-end  items-center space-x-20 md:space-x-8 col-span-1 col-start-1 md:col-start-2 lg:col-start-3 ">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
        <MenuBars />
      </div>
      {showModal &&
        activeModal &&
        reusePort(
          <div
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsModalHovered(false);
              }, 100);
            }}
            className={`absolute top-[6rem] inset-x-0  h-[30rem] bg-white z-50 ${
              isModalHovered || isSectionHovered
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
