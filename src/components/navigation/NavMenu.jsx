/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/contexts/themeContext";
import ChangeThemeIcon from "./icons/ChangeThemeIcom";

export default function NavMenu() {
  const { toogleTheme } = useTheme();

  return (
    <div className="flex justify-end items-center   ">
      <div className="flex text-sm mx-8  transition-all duration-700 ease-in-out transform md:translate-y-0 -translate-y-full">
        {[
          { to: "/api/find-store", text: "find store" },
          { to: "/api/help", text: "help" },
          { to: "/api/join-us", text: "join us" },
          { to: "/api/sign-in", text: "sign-in" },
        ].map((link, index, array) => (
          <React.Fragment key={link.to}>
            <Link to={link.to}>
              <span className="capitalize mx-4 hover:text-slate-400">
                {link.text}
              </span>
            </Link>
            {index < array.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
        <div
          type="button"
          onClick={toogleTheme}
          onKeyDown={toogleTheme}
          className="cursor-pointer hover:text-slate-400"
        >
          <ChangeThemeIcon />
        </div>
      </div>
    </div>
  );
}
