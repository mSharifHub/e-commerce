/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function FilterPopUpMenu({ label, Component }) {
  const [isVisible, setIsVisible] = useState(false);

  const toogle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toogle}
        onKeyDown={toogle}
        className="m-4 flex border-2 border-slate-300 py-2 px-4 rounded-md cursor-pointer hover:bg-slate-100 transform ease-in-out sm:hidden"
      >
        <div className=" flex justify-center items-center">
          {label}
          <div className="justify-items-center mx-2 px-2">
            <FontAwesomeIcon
              icon={!isVisible ? faAngleDown : faAngleUp}
              size="lg"
            />
          </div>
        </div>
      </div>

      {isVisible && (
        <div>
          <div>
            <Component />
          </div>
        </div>
      )}
    </>
  );
}
