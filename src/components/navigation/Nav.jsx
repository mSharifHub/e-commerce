import React from "react";
import NavMenu from "./NavMenu";
import NavHelper from "./NavHelper";

export default function Nav() {
  return (
    <div className="mx-4">
      <NavMenu />
      <NavHelper />
    </div>
  );
}
