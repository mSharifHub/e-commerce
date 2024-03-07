/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../providers/contexts/userContext";
import ResetButton from "./CodeResetButton";

export default function TwoWayAuthentication() {
  const { state: userState, dispatch } = useUser();
  const [codeValid, setCodeValid] = useState(false); // Gets the result true if all chars are valid
  const [inputValidity, setInputValidity] = useState(Array(5).fill(false)); // used to fill up array as true or false by char
  const [isWaitingForReset, setIsWaitingForReset] = useState(false); // to control timer
  const [timer, setTimer] = useState(10); // timer state
  const [touchedCodeInput, setTouchedCodeInput] = useState(false); // control user interaction with input
  const [code, setCode] = useState(Array(5).fill("")); // code as array of lenght 5
  const navigate = useNavigate(); // to move to next page

  const dummyCode = [1, 2, 3, 4, 5]; // simulate code back end

  // use effect to control timer
  useEffect(() => {
    let interval;
    if (isWaitingForReset && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsWaitingForReset(false);
      setTimer(10);
    }
    return () => clearInterval(interval);
  }, [isWaitingForReset, timer]);

  // use effect to  move to register or login
  useEffect(() => {
    if (codeValid) {
      const redirect = setTimeout(() => {
        navigate("register");
      }, 4000);

      return () => clearTimeout(redirect);
    }
  }, [codeValid, navigate]);

  const handleCodeInput = (index, value) => {
    // User touched the input
    setTouchedCodeInput(true);

    // Update the code with the new value entered by the user
    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    const newUserInputValidity = [...inputValidity];
    newUserInputValidity[index] =
      value.toString() === dummyCode[index].toString();

    setInputValidity(newUserInputValidity);

    if (value && index < 4) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    const allInputsAreValid = newUserInputValidity.every(Boolean);

    setCodeValid(allInputsAreValid);
  };

  return (
    <>
      <div className="relative  flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden signInSignOutslideIn">
        {/* title */}
        <div className="flex flex-col ">
          <div className=" flex justify-center items-center text-3xl font-light   mt-[4rem] mx-auto text-slate-600 whitespace-normal   ">
            For your security let&apos;s authenticate your email.
          </div>

          <span className="flex flex-col justify-end items-center w-full text-sm mt-4">
            We&apos;ve sent a code to:
            <span className="flex">
              {userState.userEmail}
              <span className="inline-block capitalize underline ml-4">
                edit
              </span>
            </span>
          </span>
        </div>

        <form className="w-full mx-auto mt-4 space-y-5 ">
          <div className=" flex justify-center space-x-10 mt-4">
            {code.map((char, index) => (
              <input
                key={index}
                type="text"
                id={`code-${index}`}
                name={`code-${index}`}
                maxLength={1}
                value={char}
                onChange={(e) => handleCodeInput(index, e.target.value)}
                required
                className={`w-[4rem] h-[4rem] border rounded-md text-center focus:outline-none  capitalize ${
                  touchedCodeInput && !inputValidity[index]
                    ? "focus:ring-red-500"
                    : "focus:ring-indigo-500"
                } focus:border-transparent`}
              />
            ))}
            <span
              className={`flex justify-center items-center transition-transform duration-300 ease-out rotate:0  ${
                !isWaitingForReset ? "hover:rotate-180" : ""
              }`}
            >
              <ResetButton
                handleCodeReset={() => setIsWaitingForReset(true)}
                isWaitingForReset={isWaitingForReset}
              />
            </span>
          </div>
          {isWaitingForReset && timer > 0 && (
            <span className="flex  justify-center items-center">
              code will be send to {userState.email} in {timer}
            </span>
          )}
        </form>
        {code.every((char) => char !== "" && !codeValid) && (
          <span className="flex justify-center items-center mt-2">
            code is not valid
          </span>
        )}
      </div>

      {/* return to main page  button */}
      <Link to="/">
        <button
          type="button"
          className="absolute  bottom-10 left-10 justify-center items-center w-[8rem] h-[3rem] mt-4 text-black border-2 rounded-lg text-lg font-thin  capitalize transition-all duration-100 ease-out  cursor-pointer hover:scale-110"
        >
          return
        </button>
      </Link>
    </>
  );
}
