/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../../providers/contexts/userContext";
import { reusePort } from "../../../helpers/modal_helpers/reusePort";

export function CheckEmail() {
  const [mouseOver, setMouseOver] = useState(false);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [submitemail, setSubmitemail] = useState(false);
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleOnMouseOver = () => {
    setMouseOver(true);
  };
  const handleOnMouseLeave = () => {
    setMouseOver(false);
  };

  const handleEmailChange = (event) => {
    setTouched(true);
    const input = event.target.value;
    setEmail(input);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setValid(regex.test(input));
  };

  const handleEmailSubmit = useCallback(() => {
    setSubmitemail(true);
    setTimeout(() => {
      const dummyUser = {
        email: "msharifemail@gmail.com",
        password: "",
      };
      if (email === dummyUser.email) {
        // TODO
      } else {
        dispatch({ type: "SET_EMAIL", payload: email });
        navigate("authenticate");
      }

      setEmail("");
      setTouched(false);
      setValid(false);
      setSubmitemail(false);
      setErrmsg("");
    }, 3000);
  }, [email, dispatch, navigate]);

  useEffect(() => {
    setErrmsg(valid ? "email valid" : "email invalid");
  }, [valid]);

  useEffect(() => {
    if (touched && valid) {
      handleEmailSubmit();
    }
  }, [email, valid, touched, handleEmailSubmit]);

  const label = touched && !valid ? "Required" : "Email";

  return (
    <>
      <div className="relative  flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden">
        <div className="text-3xl font-light flex justify-center items-center mt-[4rem] mx-auto text-slate-600 whitespace-normal  max-w-md  signInSignOutslideIn ">
          Enter your email to join us or sign in.
        </div>
        <form
          type="submit"
          className="max-w-full mx-auto mt-[4rem] space-y-5 signInSignOutslideIn "
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            {(mouseOver || (touched && !valid)) && (
              <span
                className={`absolute -top-2  -translate-y-1/8  left-4 font-thing z-4 bg-white transition-all duration-100 ease-in-out tracking-[0.25em] ${
                  touched && !valid ? "text-red-500" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            )}

            <label
              htmlFor="email"
              className="text-md font-medium  text-gray-700 capitalize "
            />
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
              onChange={handleEmailChange}
              value={email}
              required
              placeholder={!mouseOver && "Email"}
              className={`mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none  ${
                touched && !valid
                  ? "focus:ring-red-500"
                  : "focus:ring-indigo-500"
              } focus:border-transparent`}
            />
          </div>
          {email.length > 0 ? (
            <span
              className={`absolute top-7 text-sm ${
                !valid ? "text-red-500" : "text-indigo-500"
              } `}
            >
              {errmsg}
            </span>
          ) : null}

          <div className="flex justify-start items-center font-thin text-slate-600 whitespace-normal text-sm">
            <span className="mt-4">
              By continuing, I agree to Privacy Policy and Terms of Use.
            </span>
          </div>
        </form>
        <Link to="/">
          <button
            type="button"
            className="absolute  bottom-10 left-10 justify-center items-center w-[8rem] h-[3rem] mt-4 text-black border-2 rounded-lg text-lg font-thin  capitalize transition-all duration-100 ease-out  cursor-pointer hover:scale-110"
          >
            return
          </button>
        </Link>
      </div>
      {submitemail &&
        reusePort(
          <span className="absolute  top-[13rem] right-[12rem]  z-50 flex justify-center items-center ">
            <span className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-neutral-700"></span>
          </span>,
        )}
    </>
  );
}
