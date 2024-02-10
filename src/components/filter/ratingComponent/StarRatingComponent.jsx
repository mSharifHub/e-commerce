/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "../../../providers/contexts/filterContext";

export default function StarRatingComponent() {
  const { state, dispatch } = useFilter();

  const onSetRating = (newRating) => {
    dispatch({
      type: "SET_RATING",
      payload: newRating,
    });
  };

  return (
    <div className="flex  justify-start ml-4 ">
      {[...Array(5)].map((_, index) => {
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
              size="xl"
              color={`${currentIndex <= state.rating ? "#444444" : "#D9D9D9"}`}
              className="cursor-pointer  p-2 mr-2"
            />
          </label>
        );
      })}
    </div>
  );
}
