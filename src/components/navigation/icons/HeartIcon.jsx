import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "../../../providers/contexts/userContext";

export default function HeartIcon() {
  const {
    state: { favorites },
  } = useUser();

  return (
    <div className="mx-2 transition-transform duration-300 hover:scale-125 cursor-pointer">
      <div className=" relative flex justify-center items-center">
        {favorites.length > 0 ? (
          <div className="absolute -top-4 left-1/2  bg-black w-8 h-4 rounded-full flex items-center justify-center whitespace-nowrap">
            <span className=" text-white text-sm font-bold">
              {favorites.length}
            </span>
          </div>
        ) : null}
        <FontAwesomeIcon icon={faHeart} size="xl" />
      </div>
    </div>
  );
}
