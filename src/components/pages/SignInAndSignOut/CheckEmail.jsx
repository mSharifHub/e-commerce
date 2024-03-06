/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function CheckEmail() {
  const [mouseOver, setMouseOver] = useState(false);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitemail, setSubmitemail] = useState(false);

  const navigate = useNavigate();

  const handleOnMouseOver = () => {
    setMouseOver(true);
  };
  const handleOnMouseLeave = () => {
    setMouseOver(false);
  };

  const handleEmailChange = (event) => {
    setTouched(true);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const input = event.target.value;
    setEmail(input);
    setValid(regex.test(input) && input.length >= 3);
  };

  const dummyUser = {
    email: "msharifemail@gmail.com",
    password: "",
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setSubmitemail(true);
    setTimeout(() => {
      // TODO  replace with the back end  server response
      if (email === dummyUser.email) {
        navigate("authenticate");
      } else {
        navigate("register");
      }
      setEmail("");
      setTouched(false);
      setValid(false);
      setSubmitemail(false);
    }, 3000);
    // TODO logic to send data to back end//
  };

  const label = touched && !valid ? "Required" : "Email";

  return (
    <div className="relative  flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden">
      <div className="text-3xl font-light flex justify-center items-center mt-[4rem] mx-auto text-slate-600 whitespace-normal  max-w-md  signInSignOutslideIn ">
        Enter your email to join us or sign in.
      </div>
      <form
        type="submit"
        className="max-w-full mx-auto mt-[4rem] space-y-5 signInSignOutslideIn "
        onSubmit={handleEmailSubmit}
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
              touched && !valid ? "focus:ring-red-500" : "focus:ring-slate-900"
            } focus:border-transparent`}
          />
        </div>
        {!valid && email.length > 0 ? (
          <span className="text-red-500 text-sm"> invalid email</span>
        ) : null}

        <div className="flex justify-start items-center font-thin text-slate-600 whitespace-normal text-sm">
          <span>
            By continuing, I agree to Privacy Policy and Terms of Use.
          </span>
        </div>
        <div className="flex justify-end items-center mt-4">
          <button
            type="submit"
            className={`flex justify-center items-center w-[8rem] h-[3rem] mt-4 bg-black text-white rounded-full text-lg font-thin  capitalize transition-all duration-100 ease-out ${
              !valid
                ? "opacity-10"
                : "opacity-100 cursor-pointer hover:scale-110"
            }`}
            disabled={!valid}
          >
            {submitemail ? (
              <span className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></span>
            ) : (
              "submit"
            )}
          </button>
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
  );
}
