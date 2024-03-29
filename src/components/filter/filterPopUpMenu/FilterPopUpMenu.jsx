/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import AngleUp from "../icons/AngleUp";
import AngleDown from "../icons/AngleDown";

export default function FilterPopUpMenu({ label, Component }) {
  const [isVisible, setIsVisible] = useState(true);

  const toogle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toogle}
        onKeyDown={toogle}
        className="m-4 flex border-t-2 border-slate-200 py-2 px-4  cursor-pointer "
      >
        <div className=" flex justify-between items-center w-full">
          <div className="flex justify-between  w-full  text-lg capitalize hover:text-slate-500">
            <span>{label} </span>
          </div>
          <div className="justify-items-center mx-2 px-2 hover:text-slate-500  trasition-all ease-out duration-300">
            {!isVisible ? <AngleDown /> : <AngleUp />}
          </div>
        </div>
      </div>

      <div
        className={`transition-all ease-out duration-300 ${
          isVisible ? "mt-0  " : "-mt-5 "
        }overflow-hidden`}
      >
        {isVisible && <Component />}
      </div>
    </>
  );
}
