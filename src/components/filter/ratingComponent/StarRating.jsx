import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating() {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starID = `star-rating-${index + 1}`;
        return (
          <label htmlFor={starID}>
            <input id={starID} name="star-rating" type="radio" />
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              className="cursor-pointer"
            />
          </label>
        );
      })}
    </div>
  );
}
