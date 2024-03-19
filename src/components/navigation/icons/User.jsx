import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div className="flex justify-center items-center cursor-pointer ">
      <FontAwesomeIcon icon={faUser} size="lg" />
    </div>
  );
}
