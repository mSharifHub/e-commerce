import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ExpandIcon() {
  return (
    <div className="flex justify-center  items-center  gap-x-2 cursor-pointer">
      <FontAwesomeIcon icon={faPlus} size="sm" />
      <span className="capitalize font-thin ">More</span>
    </div>
  );
}
