import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div className="flex justify-center items-center cursor-pointer transition-transform duration-100  hover:scale-125 ">
      <Link to="/api/credentials/check-email">
        <FontAwesomeIcon icon={faUser} size="md" />
      </Link>
    </div>
  );
}
