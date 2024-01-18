/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useTheme } from "../../providers/contexts/themeContext";
import ChangeThemeIcon from "./icons/ChangeThemeIcom";

export default function NavMenu() {
  const { toogleTheme } = useTheme();

  return (
    <div className="flex justify-end items-center  ">
      <div className="flex text-sm mx-8 ">
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
