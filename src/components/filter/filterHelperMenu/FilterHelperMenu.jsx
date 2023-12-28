/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import ReactDOM from "react-dom";

export default function FilterHelperModal({ label, Component, modalStyle }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsVisible((prev) => !prev);
  };

  const modal = (
    <div
      className={`fixed inset-x-0  h-1/2  top-[8rem] flex justify-center items-start md:top-[6.5rem] z-50 bg-white shadow-lg rounded-lg
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
