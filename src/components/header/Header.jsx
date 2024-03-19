/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/contexts/userContext";
import UserIcon from "../navigation/icons/User";
import ModalMenu from "./components/ModalMenu";

export default function Header() {
  const { state } = useUser();
  const [isLinkHelpHovered, setIsLinkHelpHovered] = useState(false);
  const [isModalHelpHovered, setIsModalHelpHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigationOptions = {
    help: {
      title: "Help",
      links: [
        { name: "Order Help", path: "#" },
        { name: "Tracking Help", path: "#" },
        { name: "Issue with an Order", path: "#" },
        { name: "Returns", path: "#" },
        { name: "Send us feefback", path: "#" },
        { name: "Contact us", path: "#" },
      ],
    },
    user: {
      title: "Account",
      links: [
        { name: "Profile", path: "#" },
        { name: "Orders", path: "#" },
        { name: "Favorites", path: "#" },
        { name: "Inbox", path: "#" },
        { name: "Experiences", path: "#" },
        { name: "Account Settings", path: "#" },
        { name: "Log Out", path: "#" },
      ],
    },
  };

  // Handle mouse transaction
  useEffect(() => {
    let timer;
    if (isLinkHelpHovered || isModalHelpHovered) {
      setShowModal(true);
    } else {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [isLinkHelpHovered, isModalHelpHovered]);

  return (
    <div className=" flex justify-end items-center bg-neutral-100 px-4 py-2">
      <nav className="flex items-center space-x-2 mx-4 text-sm ">
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
          {showModal && (
            <div
              className="absolute top-7 -right-4 z-50"
              onMouseEnter={() => setIsModalHelpHovered(true)}
              onMouseLeave={() => setIsModalHelpHovered(false)}
            >
              <ModalMenu
                title={navigationOptions.help.title}
                links={navigationOptions.help.links}
              />
            </div>
          )}
        </div>
        <span className="px-2">|</span>
        {state.isLoggedIn ? (
          <div className="relative flex justify-around items-center space-x-2 cursor-pointer">
            <span className="hidden md:flex col-start-1 col-span-1 justify-start items-center text-sm transition-transform duration-100 hover:opacity-50">
              Hi, {state.userName}
            </span>
            <span className="inline-flex justify-center items-center rounded-full h-10 w-10 transition-colors duration-175 ease-out hover:bg-gray-200">
              <UserIcon />
            </span>
          </div>
        ) : (
          <Link to="/api/credentials/check-email"> Sign In</Link>
        )}
      </nav>
    </div>
  );
}
