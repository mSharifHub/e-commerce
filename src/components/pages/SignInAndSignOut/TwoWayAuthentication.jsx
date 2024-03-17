/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../providers/contexts/userContext";
import ResetButton from "./CodeResetButton";
import Loading from "../../navigation/icons/Loading";

export default function TwoWayAuthentication() {
  const { state: userState } = useUser();
  const [codeValid, setCodeValid] = useState(false); // Gets the result true if all chars are valid
  const [inputValidity, setInputValidity] = useState(Array(5).fill(false)); // used to fill up array as true or false by char
  const [isWaitingForReset, setIsWaitingForReset] = useState(false); // to control timer
  const [timer, setTimer] = useState(10); // timer state
  const [code, setCode] = useState(Array(5).fill("")); // code as array of lenght 5
  const navigate = useNavigate(); // to move to next page

  // User ref to focus on input
  const userRef = useRef(null);

  // Use Effect input to focus on input
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  // TODO remove after implementing back end
  const dummyCode = [1, 2, 3, 4, 5]; // simulate code back end
  const isFilled = code.every((char) => char !== "");

  // Use Effect to control timer
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

  // Use Effect to  move to register or login
  // TODO change later with useUser, axios, and React Query
  useEffect(() => {
    if (codeValid) {
      const redirect = setTimeout(() => {
        navigate("register");
      }, 2000);

      return () => clearTimeout(redirect);
    }
  }, [codeValid, navigate]);

  // Use Effect to clear input if input is not valid
  useEffect(() => {
    let timeout;
    if (isFilled && !codeValid) {
      timeout = setTimeout(() => {
        setCode(Array(5).fill(""));
        setInputValidity(Array(5).fill(false));

        if (userRef.current) {
          userRef.current.focus();
        }
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [codeValid, isFilled]);

  // Use Effect to clear inputs after user inputs valid input
  useEffect(() => {
    let timeout;
    if (isFilled && !codeValid) {
      timeout = setTimeout(() => {
        setCode(Array(5).fill(""));
        setInputValidity(Array(5).fill(false));
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [isFilled, codeValid]);

  const handleCodeInput = (index, value) => {
    // Update the code with the new value entered by the user
    const newCode = [...code];

    newCode[index] = value;

    const isValidInput = value.toString() === dummyCode[index].toString();
    const newUserInputValidity = [...inputValidity];
    newUserInputValidity[index] = isValidInput;

    setCode(newCode);
    setInputValidity(newUserInputValidity);
    if (value && index < code.length - 1) {
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
      <div className="relative flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden signInSignOutslideIn">
        {/* title */}
        <div className="flex  flex-col">
          <span className="flex justify-center items-center text-3xl font-light  mt-[4rem]  text-slate-600  whitespace-nowwrap sm:whitespace-normal  ">
            For your security let&apos;s authenticate your email.
          </span>

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

        <form className="w-full px-2">
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            {code.map((char, index) => (
              <input
                ref={index === 0 ? userRef : null} // focus on mount only on first index
                key={index}
                type="text"
                id={`code-${index}`}
                name={`code-${index}`}
                maxLength={1}
                value={char}
                onChange={(e) => handleCodeInput(index, e.target.value)}
                required
                className="w-[4rem] h-[4rem] border rounded-md text-center focus:outline-none  capitalize 
                  focus:border-transparent"
              />
            ))}
            <span
              className={`flex justify-center items-center transition-transform duration-300 ease-out rotate:0 mt-4 sm:mt-0  sm:ml-4 ${
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
        {isFilled && (
          <span
            className={`flex justify-center items-center mt-2 ${
              codeValid ? "text-blue-500" : "text-red-500"
            }`}
          >
            code is {codeValid ? "valid" : "not valid"}
          </span>
        )}

        {codeValid && (
          <span className="mt-4">
            <Loading />
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
