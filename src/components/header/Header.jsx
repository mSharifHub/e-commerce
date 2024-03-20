/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/contexts/userContext";
import UserIcon from "../navigation/icons/User";
import ModalMenu from "./components/ModalMenu";
import { navigationHeaderRoutes } from "../../styles/routes/routes";

export default function Header() {
  const { state } = useUser();
  const [isLinkHelpHovered, setIsLinkHelpHovered] = useState(false);
  const [isLinkAccountHovered, setIsLinkAccountHovered] = useState(false);
  const [isModalHelpHovered, setIsModalHelpHovered] = useState(false);
  const [isModalAccountHovered, setIsModalAccountHovered] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  // handle link to transition for help link
  useEffect(() => {
    let helpTimer;
    if (isLinkHelpHovered || isModalHelpHovered) {
      setShowHelpModal(true);
    } else {
      helpTimer = setTimeout(() => {
        setShowHelpModal(false);
      }, 100);
    }
    return () => clearTimeout(helpTimer);
  }, [isLinkHelpHovered, isModalHelpHovered]);

  // handle link to transition for Account link
  useEffect(() => {
    let userTimer;
    if (isLinkAccountHovered || isModalAccountHovered) {
      setShowAccountModal(true);
    } else {
      userTimer = setTimeout(() => {
        setShowAccountModal(false);
      }, 100);
    }
    return () => clearTimeout(userTimer);
  }, [isLinkAccountHovered, isModalAccountHovered]);

  return (
    <div className="hidden md:flex justify-end items-center bg-neutral-100 ">
      <nav className="flex items-center  mx-8 text-sm ">
        <Link to="/api/find-store" className="px-2">
          Find a Store
        </Link>
        <span className="px-2">|</span>
        <div className="relative">
          <Link
            to="/api/help"
            className="px-2"
            onMouseEnter={() => setIsLinkHelpHovered(true)}
            onMouseLeave={() => setIsLinkHelpHovered(false)}
          >
            Help
          </Link>
          {showHelpModal && (
            <div
              className="absolute top-10 -right-4 z-50"
              onMouseEnter={() => setIsModalHelpHovered(true)}
              onMouseLeave={() => setIsModalHelpHovered(false)}
            >
              <ModalMenu
                title={navigationHeaderRoutes.help.title}
                links={navigationHeaderRoutes.help.links}
              />
            </div>
          )}
        </div>
        <span className="px-2">|</span>
        {state.isLoggedIn ? (
          <div
            className="relative flex justify-around items-center space-x-2 cursor-pointer"
            onMouseEnter={() => setIsLinkAccountHovered(true)}
            onMouseLeave={() => setIsLinkAccountHovered(false)}
          >
            <span className="hidden md:flex col-start-1 col-span-1 justify-start items-center text-sm transition-transform duration-100 hover:opacity-50">
              Hi, {state.userEmail}
            </span>
            <span className="inline-flex justify-center items-center rounded-full h-10 w-10 transition-colors duration-175 ease-out hover:bg-gray-200">
              <UserIcon />
            </span>
            {showAccountModal && (
              <div
                className="absolute top-10 -right-4 z-50"
                onMouseEnter={() => setIsModalAccountHovered(true)}
                onMouseLeave={() => setIsModalAccountHovered(false)}
              >
                <ModalMenu
                  title={navigationHeaderRoutes.user.title}
                  links={navigationHeaderRoutes.user.links}
                />
              </div>
            )}
          </div>
        ) : (
          <Link to="/api/credentials/check-email"> Sign In</Link>
        )}
      </nav>
    </div>
  );
}
