import React from "react";
import NavMenu from "./NavMenu";
import NavHelper from "./navigation_helpers/NavHelper";

export default function Nav() {
  return (
    <div className=" grid grid-rows-[0.2fr_1fr]  m-4 p-2 relative overflow-hidden">
      <div className="h-full absolute translate-x-full   sm:translate-x-0  inset-0  -mt-2 py-2 flex items-center justify-center md:justify-end  row-start-1  row-span-1 transition-transform duration-500  whitespace-nowrap ">
        <NavMenu />
      </div>
      <div className=" row-start-2 p-2 ">
        <NavHelper />
      </div>
    </div>
  );
}
