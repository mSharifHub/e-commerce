/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(null);

  const onSetRating = (newRating) => {
    setRating((currentRating) =>
      currentRating === newRating ? null : newRating,
    );
  };
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starID = `star-rating-${index + 1}`;
        const currentIndex = index + 1;
        return (
          <label htmlFor={starID} key={currentIndex}>
            <input
              id={starID}
              name="star-rating"
              type="radio"
              value={currentIndex}
              onClick={() => onSetRating(currentIndex)}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              color={`${currentIndex <= rating ? "#ffa500" : "#f9f9f9"}`}
              className="cursor-pointer  p-2 mr-2"
            />
          </label>
        );
      })}
    </div>
  );
}
