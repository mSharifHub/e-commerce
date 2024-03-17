/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [mouseOver, setMouseOver] = useState(false);
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const MAX_LEN = 16;

  const passwordRef = useRef(null);

  // Use effect to focus on input on component mount
  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  const handleOnMouseOver = () => {
    setMouseOver(true);
  };
  const handleOnMouseLeave = () => {
    setMouseOver(false);
  };

  const handlePasswordChange = (event) => {
    setTouched(true);
    const input = event.target.value;
    setPassword(input);
    const regex = /^(?=.*[A-Z])(?=(?:[^!@#$&*]*[!@#$&*]){2})(?=.*[0-9]).{5,}$/;
    setValid(regex.test(input));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (touched && valid) {
      setTimeout(() => {
        setPassword("");
        setTouched(false);
        setValid(false);
      }, 2000);
    }
  };

  return (
    <div className="relative  flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden">
      <div className="text-3xl font-light flex justify-center items-center mt-[4rem] mx-auto text-slate-600 whitespace-normal  max-w-md  signInSignOutslideIn ">
        Found you, enter your password
      </div>
      <form
        className="max-w-full mx-auto mt-[4rem] space-y-5 signInSignOutslideIn"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        {(mouseOver || (touched && !valid)) && (
          <span
            className={`absolute bottom-8  left-4 font-thing z-4 bg-white transition-all duration-100 ease-in-out tracking-[0.25em] z-20 ${
              valid && touched ? "text-indigo-500" : "text-slate-900"
            }`}
          >
            {valid && touched ? "Password" : "Required"}
          </span>
        )}

        <label
          htmlFor="password"
          className=" relative text-md font-medium  text-gray-700 capitalize "
        />
        <div className="relative w-[20rem]">
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
            onChange={handlePasswordChange}
            value={password}
            maxLength={MAX_LEN}
            required
            placeholder={!mouseOver ? "Password" : ""}
            className={` mt-1 p-2 w-[20rem] border rounded-md shadow-sm focus:outline-none  ${
              touched && !valid ? "focus:ring-red-500" : "focus:ring-indigo-500"
            } focus:border-transparent`}
          />
          <button
            type="submit"
            className={`absolute inset-y-0 right-0 w-10 h-full flex  justify-center items-center text-lg  transition-transform duration-120 ease-in-out  ${
              !valid
                ? "opacity-20 cursor-not-allowed"
                : "opacity-100 hover:text-2xl cursor-pointer"
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
      <Link to="/">
        <button
          type="button"
          className="absolute bottom-10 left-10 justify-center items-center w-[8rem] h-[3rem] mt-4 text-black border-2 rounded-lg text-lg font-thin  capitalize transition-all duration-100 ease-out  cursor-pointer hover:scale-110"
        >
          return
        </button>
      </Link>
    </div>
  );
}
