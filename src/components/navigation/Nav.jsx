import React from "react";
import NavHelper from "./navigation_helpers/NavHelper";
import AddContainer from "./addComponent/AddContainer";

export default function Nav() {
  return (
    <div className=" grid grid-rows-[0.2fr_1fr_1fr]  relative overflow-hidden">
      <div className=" row-start-2 mx-10 mt-2">
        <NavHelper />
      </div>
      <div className="row-start-3 ">
        <AddContainer />
      </div>
    </div>
  );
}
