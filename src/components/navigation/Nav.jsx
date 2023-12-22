import React from "react";
import NavMenu from "./NavMenu";
import NavHelper from "./NavHelper";

export default function Nav() {
  return (
    <div className="m-4 grid  grid-rows-[0.2fr_1fr]">
      <div className="row-start-1">
        <NavMenu />
      </div>
      <div className="row-start-2">
        <NavHelper />
      </div>
    </div>
  );
}
