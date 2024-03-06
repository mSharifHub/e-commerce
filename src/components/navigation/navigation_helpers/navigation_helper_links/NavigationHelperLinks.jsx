import React from "react";

import { Link } from "react-router-dom";

const arr = [
  { name: "Men", path: "/api/navigation-helpers/men" },
  { name: "Women", path: "/api/navigation-helpers/women" },
  { name: "Kids", path: "/api/navigation-helpers/kids" },
];

export default function NavigationHelperLinks() {
  return (
    <nav className="flex space-x-[8rem] text-neutral-700 font-semibold ">
      {arr.map((link) => (
        <React.Fragment key={link.name}>
          <Link to={link.path}>
            <div className="transition-all duration-75 border-black border-b-0 hover:border-b-2">
              {link.name}
            </div>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
