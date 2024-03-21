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
          <span className="cursor-pointer capitalize">
            {section.replace("_", " ")}
          </span>
        </div>
      ))}
      {showModal &&
        activeModal &&
        reusePort(
          <div
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() => setIsModalHovered(false)}
            className="absolute top-[5rem]  w-full h-1/4 bg-white z-50"
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
