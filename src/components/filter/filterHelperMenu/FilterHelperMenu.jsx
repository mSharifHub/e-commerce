/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function FilterHelpMenu({ label, Component }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsVisible((prev) => !prev);
  };

  const modal = (
    <div
      className={`fixed  top-[100px] inset-x-0  flex justify-center items-start h-1/2 rounded-lg bg-white  shadow-lg z-50 ${
        isVisible ? " slide-in" : "slide-out "
      }`}
    >
      <Component />
    </div>
  );

  return (
    <>
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        <div>
          <span className="hover:border-b-2 border-black cursor-pointer ">
            {label}
          </span>
        </div>
      </div>
      {isVisible &&
        ReactDOM.createPortal(modal, document.querySelector("#modal"))}
    </>
  );
}
