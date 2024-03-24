/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import NavigationHelperModal from "../NavigationHelperModal";
import { navigationHeaderRoutes } from "../../../../styles/routes/routes";
import { reusePort } from "../../../../helpers/modal_helpers/reusePort";

export default function NavigationHelperLinks() {
  const sections = ["news_feature", "men", "women", "kids"];
  const [activeModal, setActiveModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);

  useEffect(() => {
    let modalTimer;

    if (isSectionHovered || isModalHovered) {
      setShowModal(true);
    } else {
      modalTimer = setTimeout(() => {
        setShowModal(false);
        setActiveModal(null);
      }, 100);
    }
    return () => clearTimeout(modalTimer);
  }, [isSectionHovered, isModalHovered]);

  return (
    <nav className="flex space-x-[2rem]">
      {sections.map((section) => (
        <div
          key={section}
          onMouseEnter={() => {
            setActiveModal(section);
            setIsSectionHovered(true);
          }}
          onMouseLeave={() => {
            setIsSectionHovered(false);
          }}
          className="relative"
        >
          <span className="relative cursor-pointer">
            {section.replace("_", " ")}
            <span
              className={`absolute top-6 left-0  transition-all duration-150 ease-out ${
                activeModal === section
                  ? "opacity-100 w-full border-[1px] border-black"
                  : "opacity-0 w-0"
              } `}
            ></span>
          </span>
        </div>
      ))}
      {showModal &&
        activeModal &&
        reusePort(
          <div
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() => setIsModalHovered(false)}
            className="absolute top-[5.4rem]  w-full h-1/4 bg-white z-50"
          >
            <NavigationHelperModal
              title={navigationHeaderRoutes[activeModal]?.title}
              links={navigationHeaderRoutes[activeModal]?.links}
            />
          </div>,
        )}
    </nav>
  );
}
