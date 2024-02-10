import RenderRating from "./RenderRating";
import timeSince from "../../../helpers/product_helpers/dataHelpers";

export default function ReviewList({ reviews }) {
  return (
    <section>
      {reviews.length > 0 ? (
        reviews.map(({ reviewer, comment, rating, date }) => (
          <article className="m-8 space-y-4" key={reviewer}>
            <header>
              <div className="flex justify-start items-center space-x-4">
                <span>{RenderRating(rating)}</span>
                <span className="italic text-neutral-500">
                  {timeSince(date)}
                </span>
              </div>
              <div className="flex justify-start items-center">
                <span className=" mt-2 wide-trailing text-md italic font-extralight">
                  {reviewer}
                </span>
              </div>
            </header>
            <blockquote>
              <p>{comment}</p>
            </blockquote>
          </article>
        ))
      ) : (
        <div className="capitalize text-lg m-8 italic"> no reviews</div>
      )}
    </section>
  );
}
