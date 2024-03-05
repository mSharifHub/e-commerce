/* eslint-disable react/self-closing-comp */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { name: "Find a Store", path: "/api/find-store" },
  { name: "Help", path: "/api/help" },
  { name: "Join Us", path: "/api/join-us" },
  { name: "Sign In", path: "/api/sign-in" },
];
const len = navigationLinks.length - 1;
export default function Header() {
  return (
    <div className="flex bg-neutral-100 justify-between px-4 py-2 items-center">
      <Link to="/" className="text-sm capitalize">
        home
      </Link>
      <nav className="flex text-sm">
        {navigationLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            <Link to={link.path} className="px-2">
              {link.name}
            </Link>
            {index < len && <span className="px-2">|</span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
