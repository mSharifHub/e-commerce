/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/contexts/userContext";
import UserIcon from "../navigation/icons/User";
import ModalMenu from "./components/ModalMenu";
import { navigationHeaderRoutes } from "../../styles/routes/routes";
import { reusePort } from "../../helpers/modal_helpers/reusePort";

export default function Header() {
  const { state } = useUser();
  const sections = !state.isLoggedIn ? ["help"] : ["help", "user"];

  const [activeModal, setActiveModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);

  useEffect(() => {
    let timerModal;
    if (isSectionHovered) {
      setShowModal(true);
    } else {
      timerModal = setTimeout(() => {
        setShowModal(false);
        setShowModal(null);
      }, 200);

      return () => clearTimeout(timerModal);
    }
  }, [isSectionHovered]);

  return (
    <div className="hidden md:flex justify-end items-center bg-neutral-100 py-1">
      <nav className="items-center  mx-8 text-sm inline-flex cursor pointer">
        <Link
          to="/api/find-store"
          className="px-2 transition-opacity duration-75 ease-out hover:opacity-50"
        >
          Find a Store
        </Link>
        {sections.map((section) => (
          <div
            key={section}
            onMouseEnter={() => {
              setActiveModal(section);
              setIsSectionHovered(true);
            }}
            onMouseLeave={() => {
              setIsModalHovered(false);
              setIsSectionHovered(false);
            }}
            className="relative px-2  "
          >
            <div className="space-x-4">
              {section === "user" ? (
                <UserIcon className="cursor-pointer transition-opacity duration-75 ease-out hover:opacity-50" /> // Display UserIcon for signed-in user
              ) : (
                <span className="cursor-pointer transition-opacity duration-75 ease-out hover:opacity-50">
                  {navigationHeaderRoutes[section]?.title}
                </span>
              )}
            </div>

            {showModal &&
              activeModal === section &&
              reusePort(
                <div
                  onMouseEnter={() => setIsModalHovered(true)}
                  onMouseLeave={() => setIsModalHovered(false)}
                  className="absolute top-5 right-[9rem] mt-2 w-[8rem] h-[10rem] bg-white  z-50"
                >
                  <ModalMenu
                    title={navigationHeaderRoutes[section]?.title}
                    links={navigationHeaderRoutes[section]?.links}
                  />
                </div>,
              )}
          </div>
        ))}

        {!state.isLoggedIn && (
          <span className="transition-opacity duration-75 ease-out hover:opacity-50">
            <Link to="/api/credentials/check-email">Sign In</Link>
          </span>
        )}
      </nav>
    </div>
  );
}
