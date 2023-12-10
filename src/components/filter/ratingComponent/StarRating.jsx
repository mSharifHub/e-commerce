import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating() {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starId = `start-rating-${index + 1}`;
        return (
          <label htmlFor={starId}>
            <input name="star-rating" id={starId} type="radio" />
            <FontAwesomeIcon icon={faStar} size="lg" />
          </label>
        );
      })}
    </div>
  );
}
