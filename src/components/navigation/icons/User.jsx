import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div className="flex justify-center items-center cursor-pointer transition-transform duration-100  hover:scale-125 ">
      <FontAwesomeIcon icon={faUser} size="lg" />
    </div>
  );
}
