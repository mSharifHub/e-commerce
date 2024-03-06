/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../providers/contexts/userContext";

export default function WriteReview({ addReview, productId, setIsVisible }) {
  const { state } = useUser();
  const [reviewer, setReviewer] = useState("anonymous");
  const [comment, setComment] = useState("");
  const [productRating, setProductRating] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const reviewerName =
      reviewer === "anonymous" ? "Anonymous" : state.userName;
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
      setReviewer("anonymous");
      setComment("");
      setProductRating(0);
      setIsVisible(false);
    }
  };

  return !state.userId ? (
    <>
      {/* login handler */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center text-sm font-semibold mb-8">
          You must login to comment
        </div>
        <Link to="/api/sign-in">
          <button
            type="button"
            className=" flex justify-center mt-2   items-center w-[8rem] h-[3rem] border-2 rounded-full text-lg text-white bg-black font-thin  capitalize transition-all duration-100 hover:scale-105"
          >
            login
          </button>
        </Link>
      </div>
    </>
  ) : (
    <div className="m-4">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-around items-start"
      >
        <label className="flex flex-col capitalize text-lg">
          <select
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            className=" capitalize rounded-lg h-10 outline-none focus:outline-none focus:ring-0 text-lg font-thin"
            required
          >
            <option value="anonymous">Anonymous</option>
            <option value="username">{state.userName}</option>
          </select>
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
        <label className="flex justify-center items-center capitalize text-lg  mt-4  ">
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
