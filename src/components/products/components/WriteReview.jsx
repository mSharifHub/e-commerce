/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function WriteReview({ addReview, productId, setIsVisible }) {
  const [reviewer, setReviewer] = useState("");
  const [comment, setComment] = useState("");
  const [productRating, setProductRating] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const reviewerName = reviewer.trim() !== "" ? reviewer : "Anonymous";
    const commentContent =
      comment.trim() !== "" ? comment : "No comment provided";

    if (productRating > 0) {
      const date = new Date();
      const newReview = {
        reviewer: reviewerName,
        comment: commentContent,
        rating: productRating,
        date: date.toISOString(),
        productId,
      };

      addReview(newReview);
      setReviewer("");
      setComment("");
      setProductRating(0);
      setIsVisible(false);
    }
  };

  return (
    <div className="m-4">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-around items-start"
      >
        <label className="flex  justify-center items-center capitalize text-lg mb-4  ">
          <div>
            {[...Array(5)].map((_, index) => {
              const value = index + 1;

              const id = `star-value-${value}`;

              const isRatingRequired = index === 0;

              return (
                <label htmlFor={id} key={value}>
                  <input
                    id={id}
                    name="star-value"
                    type="radio"
                    value={value}
                    checked={productRating === value}
                    onChange={() => setProductRating(value)}
                    required={isRatingRequired}
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    color={productRating >= value ? "#444444" : "#D9D9D9"}
                    className="cursor-pointer space-x-8"
                  />
                </label>
              );
            })}
          </div>
        </label>
        <label className="flex capitalize text-lg">
          <input
            type="text"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            className=" capitalize rounded-lg  h-8 outline-none  focus:outline-none focus:ring-0  text-lg font-thin "
            placeholder="enter name"
          />
        </label>
        <label className="flex  capitalize text-lg mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className=" flex justify-start h-12  rounded-lg outline-none ring-0 ring-transparent resize-none focus:outline-none focus:ring-0 text-lg"
            placeholder="Type your review"
            maxLength={200}
          />
        </label>

        <label className="mt-4">
          <button
            type="submit"
            className=" flex justify-center mt-2 items-center w-[8rem] h-[3rem] border-2 rounded-xl text-lg text-white bg-black font-thin  capitalize transition-all duration-100 hover:scale-105"
          >
            submit
          </button>
        </label>
      </form>
    </div>
  );
}
