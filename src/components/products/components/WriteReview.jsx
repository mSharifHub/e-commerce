/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function WriteReview({ addReview }) {
  const [reviewer, setReviewer] = useState("");
  const [comment, setComment] = useState("");
  const [productRating, setProductRating] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      reviewer,
      comment,
      date: new Date().toISOString().split("T")[0],
    };

    addReview(newReview);

    setReviewer("");
    setComment("");
    setProductRating(0);
  };

  return (
    <div className="mt-2 ml-8 ">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-around items-start"
      >
        <label className="flex flex-col  capitalize text-lg">
          name:
          <input
            type="text"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            className="border-none outline-none  focus:outline-none focus:ring-0  "
          />
        </label>
        <label className="flex flex-col capitalize text-lg">
          comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="flex justify-start border-none outline-none ring-0 ring-transparent resize-none focus:outline-none focus:ring-0"
            maxLength={400}
          />
        </label>
        <label className="flex items-center capitalize text-lg">
          <div>
            {[...Array(5)].map((_, index) => {
              const value = index + 1;
              const id = `star-value-${value}`;
              return (
                <label htmlFor={id} key={value}>
                  <input
                    id={id}
                    name="star-value"
                    type="radio"
                    value={value}
                    checked={productRating === value}
                    onChange={() => setProductRating(value)}
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    color={productRating >= value ? "#444444" : "#D9D9D9"}
                    className="cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        </label>
        <label>
          <button
            type="submit"
            className=" flex justify-center mt-2 items-center w-[8rem] h-[2rem] border-2 rounded-xl text-lg font-thin  capitalize transition-all duration-100 hover:scale-105"
          >
            submit
          </button>
        </label>
      </form>
    </div>
  );
}
