import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function HeartIcon() {
  return (
    <div className="mx-2 transition-transform duration-300 hover:scale-125 cursor-pointer">
      <FontAwesomeIcon icon={faHeart} size="xl" />
    </div>
  );
}
