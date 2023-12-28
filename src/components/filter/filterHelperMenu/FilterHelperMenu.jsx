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
    <div className={modalStyle}>
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
