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
    <div className="flex h-full justify-start items-center flex-col sm:mt-8 p-4  ">
      <span className="font-light text-xl">Sort By Rating</span>

      <div className="flex justify-center mt-8 items-center">
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
