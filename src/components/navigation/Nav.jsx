import React from "react";
import NavMenu from "./NavMenu";
import NavHelper from "./NavHelper";

export default function Nav() {
  return (
    <div className="m-4 grid  grid-rows-[0.2fr_1fr]">
      <div className="flex justify-center items-center md:justify-end row-start-1 transition-transform duration-500 sm:-translate-x-0 translate-x-full ">
        <NavMenu />
      </div>
      <div className="row-start-2 mt-4">
        <NavHelper />
      </div>
    </div>
  );
}
