import React from "react";
import { Link } from "react-router-dom";
import { navigationHelperRoutes } from "../../../../styles/routes/routes";

export default function NavigationHelperLinks() {
  return (
    <nav className="flex space-x-[2rem]   ">
      {navigationHelperRoutes.map((link) => (
        <React.Fragment key={link.name}>
          <Link to={link.path}>
            <div className="text-slate-600  font-semibold  ">{link.name}</div>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
