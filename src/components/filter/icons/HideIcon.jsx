import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function HideIcon() {
  return (
    <div className="flex justify-center  items-center  gap-x-2 cursor-pointer">
      <FontAwesomeIcon icon={faMinus} size="sm" />
      <span className="capitalize font-thin ">less</span>
    </div>
  );
}
