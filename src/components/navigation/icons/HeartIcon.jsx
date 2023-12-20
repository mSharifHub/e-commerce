import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function HeartIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} size="xl" />
      <div className="ml-2" />
    </>
  );
}
