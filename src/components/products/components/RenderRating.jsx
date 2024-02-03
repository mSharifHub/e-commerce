/* eslint-disable react/no-array-index-key */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RenderRating(rating) {
  return (
    <div className="flex space-x-2">
      {[...Array(rating)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} size="sm" color="#444444" />
      ))}
    </div>
  );
}
