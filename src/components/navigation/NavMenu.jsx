/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/contexts/themeContext";
import { ReactIcon } from "./icons/ReactIcon";
import ChangeThemeIcon from "./icons/ChangeThemeIcom";

export function NavMenu() {
  const { toogleTheme } = useTheme();

  return (
    <div className="p-2 flex  justify-between mt-2 mx-2">
      <div className="mx-4 flex justify-center items-center cursor-pointer hover:text-slate-400">
        <Link to="/">
          <ReactIcon />
        </Link>
      </div>

      <div className="hidden sm:flex sm:justify-around sm:text-sm">
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
