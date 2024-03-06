import { Link } from "react-router-dom";
import { useUser } from "../../../providers/contexts/userContext";

export default function Register() {
  const { state, dispatch } = useUser();
  return (
    <div className="relative  flex flex-col justify-start items-center w-screen  h-screen p-4 overflow-hidden">
      <div className="flex flex-col">
        <div className=" flex flex-col text-3xl font-light   items-center mt-[4rem] mx-auto text-slate-600 whitespace-normal  max-w-md  signInSignOutslideIn ">
          Now let&apos;s make you a Member.
        </div>
        <span className="flex justify-start items-center w-full text-sm mt-4">
          We&apos;ve sent a code to:
        </span>
        <span className="flex justify-start ml-4">
          {state.userEmail} <span>Edit</span>
        </span>
      </div>

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
