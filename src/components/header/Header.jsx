/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/contexts/userContext";
import useSignOut from "../pages/SignInAndSignOut/helpers/signOut";
import { reusePort } from "../../helpers/modal_helpers/reusePort";
import Loading from "../navigation/icons/Loading";
import UserIcon from "../navigation/icons/User";

export default function Header() {
  const [isSignOut, setSignOut] = useState(false);
  const { state } = useUser();
  const signOut = useSignOut(() => setSignOut(false));

  const navigationLinks = [
    { name: "Find a Store", path: "/api/find-store" },
    { name: "Help", path: "/api/help" },
    { name: "Join Us", path: "/api/join-us" },
  ];
  const len = navigationLinks.length - 1;

  return (
    <>
      <div className=" flex justify-end items-center bg-neutral-100 px-4 py-2 ">
        <nav className="flex justify-center items-center space-x-4  mx-4 text-sm">
          {navigationLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link to={link.path} className="px-2">
                {link.name}
              </Link>
              {(index < len || index === len) && (
                <span className="px-2">|</span>
              )}
            </React.Fragment>
          ))}
          {state.isLoggedIn ? (
            <div className="flex justify-around items-center space-x-4">
              <span className="hidden md:flex col-start-1 col-span-1  justify-start items-center text-sm">
                welcome, {state.userEmail}
              </span>
              <span>
                <UserIcon />
              </span>
            </div>
          ) : (
            <Link to="api/credentials/check-email"> Sign In</Link>
          )}
        </nav>
      </div>
      {/* {isSignOut &&
        reusePort(
          <div className=" absolute top-[2rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white  w-[20rem] h-[4rem]  z-50 flex  flex-col justify-center items-center  rounded-lg">
            <span className="flex capitalize  text-md font-semibold mb-2">
              logging out
            </span>
            <Loading />
          </div>,
        )} */}
    </>
  );
}
