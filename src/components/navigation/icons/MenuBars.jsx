/* eslint-disable react/self-closing-comp */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuBars() {
  return (
    <div className="md:hidden relative flex justify-center items-center cursor-pointer">
      <span className="md:hidden absolute h-11 w-11 rounded-full  bg-slate-300 opacity-0 hover:opacity-30"></span>
      <FontAwesomeIcon icon={faBars} size="xl" />
    </div>
  );
}
