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
    <div className="flex flex-col  p-4 bg-orange-500  ">
      <span className="font-light text-xl text-center mb-4 p-4 border-t-2">
        Sort By Rating
      </span>
      <div className="flex justify-center items-center">
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
                color={`${
                  currentIndex <= state.rating ? "#ffa500" : "#b4b4b4"
                }`}
                className="cursor-pointer  p-2 mr-2"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
