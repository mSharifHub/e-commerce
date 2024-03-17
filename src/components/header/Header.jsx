/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../providers/contexts/userContext";
import useSignOut from "../pages/SignInAndSignOut/helpers/signOut";
import { reusePort } from "../../helpers/modal_helpers/reusePort";
import Loading from "../navigation/icons/Loading";

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
      <div className=" grid grid-cols-2 bg-neutral-100 px-4 py-2 ">
        {state?.userEmail && (
          <span className="hidden md:flex col-start-1 col-span-1  justify-start items-center text-sm">
            {state.userEmail}
          </span>
        )}
        <nav className=" col-span-2 md:col-start-2 md:col-span-1 flex justify-center md:justify-end items-center text-sm">
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
            <button
              onClick={() => {
                setSignOut(true);
                signOut(isSignOut);
              }}
            >
              Sign Out
            </button>
          ) : (
            <Link to="api/credentials/check-email"> Sign In</Link>
          )}
        </nav>
      </div>
      {isSignOut &&
        reusePort(
          <div className=" absolute top-[2rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white  w-[20rem] h-[4rem]  z-50 flex  flex-col justify-center items-center  rounded-lg">
            <span className="flex capitalize  text-md font-semibold mb-2">
              logging out
            </span>
            <Loading />
          </div>,
        )}
    </>
  );
}
