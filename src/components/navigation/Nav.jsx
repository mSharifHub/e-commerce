import React from "react";
import NavMenu from "./NavMenu";
import NavHelper from "./navigation_helpers/NavHelper";
import AddContainer from "./addComponent/AddContainer";

export default function Nav() {
  return (
    <div className=" grid grid-rows-[0.2fr_1fr_1fr]  relative overflow-hidden">
      <div className="h-full absolute translate-x-full   sm:translate-x-0  inset-0   py-4 flex items-center justify-center md:justify-end  row-start-1  row-span-1 transition-transform duration-500  whitespace-nowrap bg-neutral-100 ">
        <NavMenu />
      </div>
      <div className=" row-start-2 p-2 mr-4 mt-4  ">
        <NavHelper />
      </div>
      <div className="row-start-3 ">
        <AddContainer />
      </div>
    </div>
  );
}
